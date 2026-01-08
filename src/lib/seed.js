// src/lib/seed.js
const { MongoClient } = require('mongodb');
require('dotenv').config();

const projects = [
    {
        title: "Bank Management System",
        description: "A robust C++ application featuring dual-interface authentication (Admin/User), secure data persistence using file I/O, and real-world banking operations simulation. This system allows for secure account management, transactions, and user data protection, showcasing strong core programming and security logic.",
        image: "/projects/banking-system.png",
        tags: ["C++", "File Handling", "STL", "Object-Oriented Programming"],
        category: "Terminal App",
        link: "https://github.com/Hayat-array/Bank_Management",
        aiHint: "C++ terminal banking project with file persistence"
    },
    {
        title: "Machine Learning Predictor",
        description: "An intelligent predictive system built using Python and Scikit-learn. It leverages data science frameworks like Pandas and NumPy for processing and showcases the model's predictions through an integrated interface. This project highlights my ability to bridge complex algorithms with usable frontends.",
        image: "/projects/ml-project.png",
        tags: ["Python", "ML", "Scikit-learn", "OpenCv", "Pandas"],
        category: "Web App",
        link: "https://github.com/Hayat-array/ml-project",
        aiHint: "Machine learning with frontend integration"
    },
    {
        title: "Al Mukammal - E-Commerce",
        description: "A comprehensive Next.js full-stack platform for electronics. Features JWT authentication, a sophisticated admin dashboard for product/order management, and a robust user profile system with international location support and 250+ products.",
        image: "/projects/almukammal_hero.png",
        tags: ["Next.js 14", "MongoDB", "JWT Auth", "Admin Dashboard", "Mongoose"],
        category: "E-Commerce",
        link: "https://github.com/Hayat-array/Al_Mukammal",
        aiHint: "Full-stack laptop e-commerce with admin panel"
    },
    {
        title: "FoodRush App",
        description: "A dynamic food ordering platform featuring restaurant discovery, category filtering (Pizza, Burgers, Biryani, etc.), and a seamless 'Add to Cart' flow. Built with a focus on vibrant UI/UX and rapid menu interactions.",
        image: "/projects/foodrush_hero.png",
        tags: ["React", "State Management", "UI/UX", "Vite", "Responsive"],
        category: "Web App",
        link: "https://github.com/Hayat-array/FoodRestaurant",
        aiHint: "Food delivery ordering system with restaurant listing"
    },
    {
        title: "AI Chatbot",
        description: "An advanced AI-powered chatbot utilizing the Perplexity API for real-time information retrieval, featuring a futuristic streaming interface and context-aware responses.",
        image: "/projects/ai_chatbot.png",
        tags: ["Next.js", "Perplexity API", "AI", "Tailwind CSS"],
        category: "Web App",
        link: "#",
        aiHint: "AI Chatbot with Perplexity API integration"
    },
    {
        title: "Gesture-Controlled Game",
        description: "A Python-based system using Mediapipe and OpenCV to control Windows games via real-time hand gestures tracked through a webcam.",
        image: "/projects/gesture-control.png",
        tags: ["Python", "Mediapipe", "OpenCV", "AI"],
        category: "AI / Python",
        link: "https://github.com/Hayat-array/",
        aiHint: "Hand gesture control for gaming using computer vision"
    },
    {
        title: "BitLinks - URL Shortener",
        description: "A powerful, analytics-driven URL shortener built with Next.js and Claude AI. Features comprehensive user authentication, real-time analytics dashboard with CTR tracking, and custom URL management.",
        image: "/projects/bitlinks-dashboard.png",
        tags: ["Next.js", "React", "Tailwind CSS", "Analytics", "Full-Stack"],
        category: "Web App",
        link: "https://github.com/Hayat-array/",
        aiHint: "URL shortener with analytics and user authentication"
    }
];

const skills = [
    { name: "React", level: 90, category: "Frontend" },
    { name: "Next.js", level: 85, category: "Frontend" },
    { name: "Tailwind CSS", level: 95, category: "Frontend" },
    { name: "Node.js", level: 80, category: "Backend" },
    { name: "MongoDB", level: 75, category: "Database" },
    { name: "C++", level: 85, category: "Languages" }
];

async function seed() {
    const uri = process.argv[2] || process.env.MONGODB_URI;

    if (!uri || uri.includes('<db_password>')) {
        console.error('❌ Error: Please provide a valid MONGODB_URI with your password.');
        console.log('Usage: node src/lib/seed.js "your_mongodb_connection_string"');
        process.exit(1);
    }

    const client = new MongoClient(uri);

    try {
        await client.connect();
        console.log('✅ Connected to MongoDB Atlas');

        const db = client.db('portfolio');

        // Seed Projects
        console.log('⏳ Seeding projects...');
        await db.collection('projects').deleteMany({});
        await db.collection('projects').insertMany(projects);
        console.log(`✅ Successfully seeded ${projects.length} projects`);

        // Seed Skills
        console.log('⏳ Seeding skills...');
        await db.collection('skills').deleteMany({});
        await db.collection('skills').insertMany(skills);
        console.log(`✅ Successfully seeded ${skills.length} skills`);

        console.log('\n✨ Database seeding complete!');
    } catch (err) {
        console.error('❌ Seeding failed:', err);
    } finally {
        await client.close();
    }
}

seed();
