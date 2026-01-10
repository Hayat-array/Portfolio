// Quick database update script
const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config({ path: '.env.local' });

const projectToUpdate = {
    title: "Al Mukammal - E-Commerce Platform",
    description: "A flagship Full-Stack E-Commerce solution meticulously built with Next.js 14. Featuring a high-security JWT Authentication layer and a custom-engineered Admin Dashboard for massive inventory control. Scaling over 250 laptop configurations with dynamic location-aware logic across 200+ countries.",
    image: "/projects/almukammal_dashboard_mockup.png",
    tags: ["Next.js 14", "MongoDB", "JWT Auth", "Admin Dashboard", "E-Commerce", "React Context"],
    category: "Web App",
    link: "#", // Add link if available, or keep generic/placeholder
    aiHint: "Full-stack e-commerce platform with admin dashboard, JWT auth, and dynamic location logic"
};

async function updateDatabase() {
    const uri = process.env.MONGODB_URI;

    if (!uri) {
        console.error('❌ MONGODB_URI not found in environment variables');
        console.log('Please ensure your .env.local file exists with MONGODB_URI');
        process.exit(1);
    }

    const client = new MongoClient(uri);

    try {
        await client.connect();
        console.log('✅ Connected to MongoDB');

        const db = client.db('portfolio');

        // remove old entries if they exist to avoid duplicates
        await db.collection('projects').deleteMany({ title: "AI Chatbot" });
        await db.collection('projects').deleteMany({ title: "AI Chatbot (Perplexity API)" });
        await db.collection('projects').deleteMany({ title: "Neural Interface" });
        await db.collection('projects').deleteMany({ title: "Neural Interface - AI Assistant" });
        await db.collection('projects').deleteMany({ title: "FoodRush App" });

        // Check if project already exists
        const existing = await db.collection('projects').findOne({ title: projectToUpdate.title });

        if (existing) {
            console.log('ℹ️ Project already exists, updating...');
            await db.collection('projects').updateOne(
                { title: projectToUpdate.title },
                { $set: projectToUpdate }
            );
            console.log('✅ Project updated successfully');
        } else {
            console.log('⏳ Adding new project...');
            await db.collection('projects').insertOne(projectToUpdate);
            console.log('✅ Project added successfully');
        }

        // Show all projects
        const allProjects = await db.collection('projects').find({}).toArray();
        console.log(`\n📊 Total projects in database: ${allProjects.length}`);
        console.log('Projects:', allProjects.map(p => p.title).join(', '));

    } catch (err) {
        console.error('❌ Error:', err.message);
    } finally {
        await client.close();
    }
}

updateDatabase();
