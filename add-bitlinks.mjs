// Add BitLinks project to database
import clientPromise from './src/lib/mongodb.js';

const bitlinksProject = {
    title: "BitLinks - URL Shortener",
    description: "A powerful, analytics-driven URL shortener built with Next.js and Claude AI. Features comprehensive user authentication, real-time analytics dashboard with CTR tracking, and custom URL management.",
    image: "/projects/bitlinks-dashboard.png",
    tags: ["Next.js", "React", "Tailwind CSS", "Analytics", "Full-Stack"],
    category: "Web App",
    link: "https://github.com/Hayat-array/",
    aiHint: "URL shortener with analytics and user authentication"
};

async function addBitLinks() {
    try {
        const client = await clientPromise;
        const db = client.db('portfolio');

        console.log('✅ Connected to MongoDB\n');

        // Check if it already exists
        const existing = await db.collection('projects').findOne({ title: "BitLinks - URL Shortener" });

        if (existing) {
            console.log('ℹ️ BitLinks already exists, updating...');
            await db.collection('projects').updateOne(
                { title: "BitLinks - URL Shortener" },
                { $set: bitlinksProject }
            );
            console.log('✅ Updated existing project');
        } else {
            console.log('⏳ Adding BitLinks to database...');
            await db.collection('projects').insertOne(bitlinksProject);
            console.log('✅ Successfully added BitLinks - URL Shortener!');
        }

        // Verify
        const allProjects = await db.collection('projects').find({}).toArray();
        console.log(`\n📊 Total projects now: ${allProjects.length}`);
        console.log('\nAll projects:');
        allProjects.forEach((p, i) => {
            console.log(`  ${i + 1}. ${p.title}`);
        });

    } catch (err) {
        console.error('❌ Error:', err.message);
    }
    process.exit(0);
}

addBitLinks();
