// inspect_all.js
const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://hayatali123786:Hayat%231234%231234@cluster0.xkt1yq8.mongodb.net/?appName=Cluster0";
const client = new MongoClient(uri);

async function inspectAll() {
    try {
        await client.connect();
        console.log('✅ Connected to MongoDB Atlas');

        const db = client.db('portfolio');
        const collections = await db.listCollections().toArray();
        console.log('Collections in "portfolio" db:', collections.map(c => c.name));

        for (const collInfo of collections) {
            const collName = collInfo.name;
            const count = await db.collection(collName).countDocuments();
            console.log(`- Collection "${collName}": ${count} documents`);

            if (count > 0) {
                const sample = await db.collection(collName).findOne({});
                console.log(`  Sample from "${collName}":`, JSON.stringify(sample, null, 2));
            }
        }

    } catch (err) {
        console.error('❌ Diagnostic failed:', err);
    } finally {
        await client.close();
    }
}

inspectAll();
