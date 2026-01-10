// src/lib/mongodb.js
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

if (!uri) {
  if (process.env.NODE_ENV === 'production') {
    throw new Error('Please define the MONGODB_URI environment variable inside Vercel Dashboard');
  }
}

const options = {
  // MongoDB Atlas requires specific settings for serverless
  serverSelectionTimeoutMS: 10000,
  socketTimeoutMS: 45000,
  maxPoolSize: process.env.NODE_ENV === 'production' ? 1 : 10,
  minPoolSize: process.env.NODE_ENV === 'production' ? 0 : 5,
  retryWrites: true,
  retryReads: true,
};

let client;
let clientPromise;

if (!uri) {
  // Fallback for local development if .env is missing
  console.warn('⚠️ MONGODB_URI is not defined. Falling back to local MongoDB.');
  const localUri = 'mongodb://localhost:27017/portfolio';
  client = new MongoClient(localUri, options);
  clientPromise = client.connect();
} else {
  if (process.env.NODE_ENV === 'development') {
    // In development mode, use a global variable to preserve the connection
    if (!global._mongoClientPromise) {
      client = new MongoClient(uri, options);
      global._mongoClientPromise = client.connect().then(client => {
        console.log('✅ Connected to MongoDB');
        return client;
      }).catch(err => {
        // Suppress loud error in dev, page.jsx handles the fallback
        console.warn('⚠️ MongoDB connection issue (switching to static data):', err.message);
        throw err;
      });
    }
    clientPromise = global._mongoClientPromise;
  } else {
    // In production mode (Vercel), create a new client
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
  }
}

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
