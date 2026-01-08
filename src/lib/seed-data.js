// src/lib/seed-data.js

export const initialProjects = [
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
        title: "Personal Portfolio",
        description: "A modern, responsive portfolio website built with Next.js 15, Tailwind CSS, and Framer Motion. It features a dynamic project management system integrated with MongoDB Atlas, providing a seamless experience for visitors and an easy-to-update structure for content.",
        image: "/projects/ml-project.png", // Using ML image as placeholder if portfolio image is missing, or should check if banking-system1 works better
        tags: ["Next.js", "Tailwind CSS", "MongoDB", "Framer Motion"],
        category: "Web App",
        link: "https://github.com/Hayat-array/Portfolio",
        aiHint: "Next.js portfolio with MongoDB integration"
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
        title: "FoodRush - Advanced Food Delivery Platform",
        description: "A state-of-the-art, full-stack food delivery application designed to seamlessly connect customers, restaurants, and delivery partners. Built with performance and user experience in mind, it leverages the power of Next.js 14 and MongoDB to provide real-time ordering, tracking, and management capabilities.",
        image: "/projects/foodrush-v2.png",
        tags: ["Next.js 14", "MongoDB", "NextAuth.js", "Zustand", "Tailwind CSS", "Shadcn UI", "Google Maps API"],
        category: "Web App",
        link: "https://github.com/Hayat-array/FoodRestaurant",
        aiHint: "Full-stack food delivery platform with real-time tracking, three-role ecosystem, and secure payments"
    },
    {
        title: "AI Assistant with Voice & Chat",
        description: "A state-of-the-art AI Assistant web application built with Flask (Python) and MongoDB. It combines a sleek, modern chat interface with powerful voice interaction capabilities (Push-to-Talk & Conversation Mode), intelligent context-aware responses powered by Perplexity AI, and enterprise-grade security. Features include voice-to-text, text-to-speech, code syntax highlighting for 50+ languages, markdown rendering, and a premium glassmorphism-inspired UI with theme customization.",
        images: ["/projects/neural-interface-1.jpg", "/projects/neural-interface-2.jpg"],
        tags: ["Flask", "Python", "MongoDB", "Perplexity API", "Voice Recognition", "TTS", "WebSpeech API", "Glassmorphism", "Markdown"],
        category: "AI / Python",
        link: "https://github.com/Hayat-array/AI-Assistant",
        aiHint: "Full-stack AI assistant with voice interaction, Perplexity Sonar Pro API, Flask backend, MongoDB persistence, dual voice modes, code highlighting, and premium UI"
    },
    {
        title: "Gesture-Controlled Game",
        description: "Control games using hand gestures via webcam tracking.",
        image: "/projects/gesture-control.png",
        tags: ["Python", "Mediapipe", "OpenCV", "AI"],
        category: "AI / Python",
        link: "https://github.com/Hayat-array/",
        aiHint: "Hand gesture control for gaming using computer vision"
    },
    {
        title: "BitLinks - URL Shortener",
        description: "A powerful URL shortener with real-time analytics and user authentication.",
        image: "/projects/bitlinks-dashboard.png",
        tags: ["Next.js", "React", "Tailwind CSS", "Analytics", "Full-Stack"],
        category: "Web App",
        link: "https://github.com/Hayat-array/",
        aiHint: "URL shortener with analytics and user authentication"
    }
];
