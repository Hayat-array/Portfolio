// src/lib/mongodb.js
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const fallbackUri = process.env.MONGODB_URI_FALLBACK || process.env.MONGODB_URI_DIRECT || '';

if (!uri) {
  if (process.env.NODE_ENV === 'production') {
    throw new Error('Please define MONGODB_URI (and optionally MONGODB_URI_FALLBACK) inside Vercel Dashboard');
  }
}

const options = {
  // MongoDB Atlas requires specific settings for serverless
  // Keep local startup snappy when Atlas/DNS is blocked on this network.
  serverSelectionTimeoutMS: 4000,
  socketTimeoutMS: 10000,
  maxPoolSize: process.env.NODE_ENV === 'production' ? 1 : 10,
  minPoolSize: 0,
  retryWrites: true,
  retryReads: true,
};

let client;
let clientPromise;
let connectionPromise;

const isProductionBuild =
  process.env.NODE_ENV === 'production' && process.env.NEXT_PHASE === 'phase-production-build';

function isSrvDnsError(error) {
  const code = String(error?.code || '');
  const syscall = String(error?.syscall || '');
  const hostname = String(error?.hostname || '');
  return code === 'ECONNREFUSED' && (syscall.includes('querySrv') || hostname.includes('_mongodb._tcp.'));
}

function shouldTryFallback(error) {
  const code = String(error?.code || '').toUpperCase();
  const syscall = String(error?.syscall || '').toLowerCase();
  const hostname = String(error?.hostname || '').toLowerCase();
  const message = String(error?.message || '').toLowerCase();

  const networkCodes = new Set(['ECONNREFUSED', 'ENOTFOUND', 'EAI_AGAIN', 'ETIMEDOUT', 'EHOSTUNREACH', 'EACCES']);
  const srvLookupSignal =
    syscall.includes('querysrv') ||
    hostname.includes('_mongodb._tcp.') ||
    message.includes('srv') ||
    message.includes('dns');

  return isSrvDnsError(error) || networkCodes.has(code) || srvLookupSignal;
}

function connectWithOptionalFallback(primaryUri) {
  const primaryClient = new MongoClient(primaryUri, options);
  return primaryClient.connect().then((connectedClient) => {
    console.log('✅ Connected to MongoDB');
    return connectedClient;
  }).catch(async (error) => {
    if (shouldTryFallback(error) && fallbackUri) {
      console.warn('⚠️ MongoDB primary URI failed. Retrying with MONGODB_URI_FALLBACK...');
      try {
        const directClient = new MongoClient(fallbackUri, options);
        const connectedFallback = await directClient.connect();
        console.log('✅ Connected to MongoDB using fallback URI');
        return connectedFallback;
      } catch (fallbackError) {
        console.warn('⚠️ MongoDB fallback URI also failed:', fallbackError?.message || fallbackError);
      }
    }
    throw error;
  });
}

function createClientPromise() {
  if (!uri) {
    if (isProductionBuild) {
      console.warn('⚠️ MONGODB_URI is not defined during the build. Skipping database connection.');
      return Promise.reject(new Error('MONGODB_URI is not defined during the build.'));
    }

    // Fallback for local development if .env is missing
    console.warn('⚠️ MONGODB_URI is not defined. Falling back to local MongoDB.');
    const localUri = 'mongodb://localhost:27017/portfolio';
    client = new MongoClient(localUri, options);
    return client.connect();
  }

  if (isProductionBuild) {
    console.warn('⚠️ Skipping MongoDB connection during the production build.');
    return Promise.reject(new Error('Skipping MongoDB connection during the production build.'));
  }

  if (process.env.NODE_ENV === 'development') {
    // In development mode, use a global variable to preserve the connection
    if (!global._mongoClientPromise) {
      global._mongoClientPromise = connectWithOptionalFallback(uri).catch(err => {
        // Suppress loud error in dev, page.jsx handles the fallback
        console.warn('⚠️ MongoDB connection issue (switching to static data):', err.message);
        throw err;
      });
    }
    return global._mongoClientPromise;
  }

  // In production mode (Vercel runtime), create a new client on demand
  return connectWithOptionalFallback(uri);
}

const lazyClientPromise = {
  then(onFulfilled, onRejected) {
    if (!connectionPromise) {
      connectionPromise = createClientPromise();
    }
    return connectionPromise.then(onFulfilled, onRejected);
  },
  catch(onRejected) {
    if (!connectionPromise) {
      connectionPromise = createClientPromise();
    }
    return connectionPromise.catch(onRejected);
  },
  finally(onFinally) {
    if (!connectionPromise) {
      connectionPromise = createClientPromise();
    }
    return connectionPromise.finally(onFinally);
  },
}

clientPromise = lazyClientPromise;

export default clientPromise;

// import { MongoClient } from 'mongodb';

// const uri = process.env.MONGODB_URI;
// const options = {};

// let client;
// let clientPromise;

// if (!process.env.MONGODB_URI) {
//   throw new Error('Please add your Mongo URI to .env');
// }

// if (process.env.NODE_ENV === 'development') {
//   // In development mode, use a global variable so that the value
//   // is preserved across module reloads caused by HMR (Hot Module Replacement).
//   if (!global._mongoClientPromise) {
//     client = new MongoClient(uri, options);
//     global._mongoClientPromise = client.connect();
//   }
//   clientPromise = global._mongoClientPromise;
// } else {
//   // In production mode, it's best to not use a global variable.
//   client = new MongoClient(uri, options);
//   clientPromise = client.connect();
// }

// // Export a module-scoped MongoClient promise. By doing this in a
// // separate module, the client can be shared across functions.
// export default clientPromise;
