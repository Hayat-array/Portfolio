// inspect.js
const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://hayatali123786:Hayat%231234%231234@cluster0.xkt1yq8.mongodb.net/?appName=Cluster0";
const client = new MongoClient(uri);

async function inspect() {
    try {
        await client.connect();
        console.log('✅ Connected to MongoDB Atlas');

        const db = client.db('portfolio');
        const collections = await db.listCollections().toArray();
        console.log('Collections in portfolio db:', collections.map(c => c.name));

        const haystack = await db.collection('Hayat').findOne({});
        if (haystack) {
            console.log('Sample document from Hayat collection:', JSON.stringify(haystack, null, 2));
        } else {
            console.log('The collection "Hayat" is empty.');
        }

    } catch (err) {
        console.error('❌ Connection failed:', err);
    } finally {
        await client.close();
    }
}

inspect();
