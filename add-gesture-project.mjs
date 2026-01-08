// Add Gesture project to database
import clientPromise from './src/lib/mongodb.js';

const gestureProject = {
    title: "Gesture-Controlled Game",
    description: "A Python-based system using Mediapipe and OpenCV to control Windows games via real-time hand gestures tracked through a webcam.",
    image: "/projects/gesture-control.png",
    tags: ["Python", "Mediapipe", "OpenCV", "AI"],
    category: "AI / Python",
    link: "https://github.com/Hayat-array/",
    aiHint: "Hand gesture control for gaming using computer vision"
};

async function addProject() {
    try {
        const client = await clientPromise;
        const db = client.db('portfolio');

        console.log('✅ Connected to MongoDB\n');

        // Check if it already exists
        const existing = await db.collection('projects').findOne({ title: "Gesture-Controlled Game" });

        if (existing) {
            console.log('ℹ️ Project already exists, updating...');
            await db.collection('projects').updateOne(
                { title: "Gesture-Controlled Game" },
                { $set: gestureProject }
            );
            console.log('✅ Updated existing project');
        } else {
            console.log('⏳ Adding new project...');
            await db.collection('projects').insertOne(gestureProject);
            console.log('✅ Successfully added Gesture-Controlled Game!');
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

addProject();
