// Enhanced MongoDB connection test with detailed diagnostics
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

const uri = process.env.MONGODB_URI;

async function testConnection() {
    if (!uri) {
        console.error('❌ MONGODB_URI not found in .env.local');
        process.exit(1);
    }

    console.log('🔗 Testing MongoDB Atlas connection...');
    console.log('📍 Connection string format: mongodb+srv://...');

    const options = {
        serverSelectionTimeoutMS: 15000,
        socketTimeoutMS: 45000,
        connectTimeoutMS: 15000,
        retryWrites: true,
        retryReads: true,
    };

    const client = new MongoClient(uri, options);

    try {
        console.log('⏳ Attempting connection (timeout: 15s)...');
        await client.connect();
        console.log('✅ Successfully connected to MongoDB Atlas!\n');

        const db = client.db('portfolio');

        // Ping the database
        await db.admin().ping();
        console.log('✅ Database ping successful!\n');

        // List all collections
        const collections = await db.listCollections().toArray();
        console.log(`📚 Collections (${collections.length}):`);
        collections.forEach(col => console.log(`   - ${col.name}`));

        // Get projects count
        const projectsCount = await db.collection('projects').countDocuments();
        console.log(`\n📊 Total projects: ${projectsCount}`);

        if (projectsCount > 0) {
            const projects = await db.collection('projects').find({}).limit(10).toArray();
            console.log('\n🎯 Projects in database:');
            projects.forEach((p, i) => {
                console.log(`   ${i + 1}. ${p.title} (${p.category})`);
            });
        }

        // Get contacts count
        const contactsCount = await db.collection('contacts').countDocuments();
        console.log(`\n📧 Total contact messages: ${contactsCount}`);

        console.log('\n✨ MongoDB connection test completed successfully!');

    } catch (err) {
        console.error('\n❌ Connection failed!');
        console.error('Error type:', err.name);
        console.error('Error message:', err.message);

        if (err.message.includes('ETIMEDOUT') || err.message.includes('ECONNREFUSED')) {
            console.error('\n🔍 Troubleshooting tips:');
            console.error('   1. Check MongoDB Atlas Network Access settings');
            console.error('   2. Add your IP address to the whitelist (or use 0.0.0.0/0 for testing)');
            console.error('   3. Verify your internet connection');
            console.error('   4. Check if firewall is blocking port 27017');
        } else if (err.message.includes('authentication failed')) {
            console.error('\n🔍 Authentication issue:');
            console.error('   - Verify username and password in connection string');
            console.error('   - Check if user has proper database permissions');
        }

        process.exit(1);
    } finally {
        await client.close();
        console.log('\n🔌 Connection closed');
    }
}

testConnection();
