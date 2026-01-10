// Database inspection script
import dotenv from 'dotenv';
import clientPromise from './src/lib/mongodb.js';

// Load environment variables
dotenv.config({ path: '.env.local' });

async function inspectDatabase() {
    try {
        const client = await clientPromise;
        const db = client.db('portfolio');

        console.log('✅ Connected to MongoDB\n');

        // Get all projects
        const projects = await db.collection('projects').find({}).toArray();
        console.log(`📊 Total projects: ${projects.length}\n`);

        console.log('Current projects:');
        projects.forEach((p, i) => {
            console.log(`${i + 1}. ${p.title} (${p.category})`);
        });

        // Check AI Assistant project
        const aiProject = projects.find(p => p.title.includes('AI Assistant'));
        console.log(`\n🔍 AI Assistant project found: ${aiProject ? 'YES' : 'NO'}`);
        if (aiProject) {
            console.log('Images field:', aiProject.images);
            console.log('Image field (fallback):', aiProject.image);
        }

    } catch (err) {
        console.error('❌ Error:', err.message);
    }
    process.exit(0);
}

inspectDatabase();
