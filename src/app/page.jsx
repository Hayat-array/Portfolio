import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { SkillsSection } from '@/components/skills-section';
import { ProjectsSection } from '@/components/projects-section';
import { ResumeToolSection } from '@/components/resume-tool-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';
import clientPromise from '@/lib/mongodb';
import { StudiesSection } from '@/components/StudiesSection';
import { AboutSection } from '@/components/AboutSection';
import { AboutProjects } from '@/components/AboutProjects';

async function getSkills() {
  try {
    const client = await clientPromise;
    const db = client.db('portfolio');
    const skills = await db.collection('skills').find({}).toArray();
    console.log(`✅ Fetched ${skills.length} skills from "portfolio" database`);
    return JSON.parse(JSON.stringify(skills));
  } catch (e) {
    console.error('❌ Failed to fetch skills:', e.message);
    return [];
  }
}

async function getProjects() {
  try {
    const client = await clientPromise;
    const db = client.db('portfolio');

    // Check 'projects' collection first
    let projects = await db.collection('projects').find({}).toArray();

    // Fallback to 'Hayat' collection if 'projects' is empty (based on user Atlas link)
    if (projects.length === 0) {
      console.log('ℹ️ "projects" collection is empty, checking "Hayat" collection...');
      projects = await db.collection('Hayat').find({}).toArray();
    }

    const fetchedProjects = JSON.parse(JSON.stringify(projects));

    // Core projects that should ALWAYS be featured
    const featuredProjects = [
      {
        title: "Al Mukammal - E-Commerce Platform",
        description: "A flagship Full-Stack E-Commerce solution meticulously built with Next.js 14. Featuring a high-security JWT Authentication layer and a custom-engineered Admin Dashboard for massive inventory control. Scaling over 250 laptop configurations with dynamic location-aware logic across 200+ countries.",
        image: "/projects/almukammal_dashboard_mockup.png",
        tags: ["Next.js 14", "MongoDB", "JWT Auth", "Admin Dashboard", "E-Commerce", "React Context"],
        category: "Web App",
        link: "https://github.com/Hayat-array/ShopVibe",
        aiHint: "Full-stack e-commerce platform with admin dashboard, JWT auth, and dynamic location logic"
      },
      {
        title: "Hayat Task App",
        description: "A modern, responsive Task Management Application built with React and Vite. Designed to streamline organizational workflow, it provides distinct, secure interfaces for Administrators and Employees to manage, track, and execute tasks efficiently.",
        image: "/projects/hayat_task_app_mockup.png",
        tags: ["React 18", "Vite", "Tailwind CSS", "RBAC", "Local Storage"],
        category: "Web App",
        link: "https://github.com/Hayat-array/Task-Application",
        aiHint: "Client-side task management app with RBAC and local storage persistence"
      },
      {
        title: "Digital Portfolio Engine",
        description: "A masterclass in modern frontend architecture, featuring server-side rendering, zero-client-bundle data mutations, and an ultra-premium dark-mode aesthetic. Built with Next.js 14 and MongoDB Atlas.",
        image: "/projects/portfolio_engine_mockup.png",
        tags: ["Next.js 14", "MongoDB Atlas", "Framer Motion", "Tailwind CSS", "Server Actions"],
        category: "Web App",
        link: "https://github.com/Hayat-array/Portfolio",
        aiHint: "High-performance portfolio engine with real-time data sync and premium visual effects"
      },
      {
        title: "TaskFlow - Professional Task Suite",
        description: "A state-of-the-art, high-performance Task Management application blending a clean, premium UI with a robust backend. Features secure auth, smart session management, and real-time status sync.",
        image: "/projects/taskflow_dashboard_mockup.png",
        tags: ["React 18", "Node.js", "MongoDB", "Tailwind CSS", "Vite", "JWT"],
        category: "Web App",
        link: "https://github.com/Hayat-array/Todo-List",
        aiHint: "Professional task management suite with secure auth and real-time CRUD"
      },
      {
        title: "Interactive Story Generator",
        description: "A whimsical, browser-based creative tool that instantly crafts unique stories using randomized logic and string interpolation. Features a glowing glassmorphism UI and dynamic text replacement.",
        image: "/projects/interactive_story_thumb.png",
        tags: ["Vanilla JS", "HTML5", "CSS3", "DOM Manipulation", "Creative Coding"],
        category: "Interactive",
        link: "https://github.com/Hayat-array/Random_Story_Generate",
        aiHint: "Pure Vanilla JS story generator with dynamic templates and random logic"
      },
      {
        title: "Pokémon Card Generator",
        description: "A dynamic card generator fetching live data from the PokéAPI. Automatically themes cards based on Pokémon types and includes a high-quality image download feature.",
        image: "/projects/pokemon_generator_thumb.png",
        tags: ["Vanilla JS", "PokéAPI", "Async/Await", "html2canvas", "Dynamic Theming"],
        category: "Interactive",
        link: "https://github.com/Hayat-array/Pokemon-Card-Generator",
        aiHint: "Real-time Pokemon card generator with API integration and image export"
      },
      {
        title: "SecureChat - Encrypted Messenger",
        description: "A production-grade, real-time messaging platform built as a single-file Flask application. Features end-to-end encryption, SHA-256 auth, and binary file transfer via WebSockets.",
        image: "/projects/securechat_thumb.png",
        tags: ["Python Flask", "Socket.IO", "MongoDB", "Cryptography", "WebSockets"],
        category: "Backend",
        link: "https://github.com/Hayat-array/Secret_Chat",
        aiHint: "End-to-End Encrypted Messaging with Real-time Sockets and MongoDB"
      },
      {
        title: "X (Twitter) UI Clone",
        description: "A pixel-perfect, responsive frontend clone of the X (formerly Twitter) interface. detailed recreation of the feed, sidebar, and trending section using Tailwind CSS.",
        image: "/projects/x_clone_thumb.png",
        tags: ["HTML5", "Tailwind CSS", "Responsive Design", "Google Material Icons"],
        category: "Frontend",
        link: "https://github.com/Hayat-array/Basic_Twitter",
        aiHint: "Responsive Frontend X (Twitter) Clone with Tailwind CSS"
      },
      {
        title: "Budget Tracker",
        description: "A modern expense management web app with real-time budget tracking, balance calculations, and CRUD operations for expenses. Built with vanilla JavaScript and Tailwind CSS.",
        image: "/projects/budget_tracker_thumb.png",
        tags: ["HTML5", "Tailwind CSS", "JavaScript ES6", "Responsive Design"],
        category: "Frontend",
        link: "https://github.com/Hayat-array/Budget_Tracking",
        aiHint: "Budget Tracker with Real-time Calculations and Expense Management"
      },
      {
        title: "Code With H-Square",
        description: "A comprehensive DSA sheet and programming learning repository featuring structured tutorials, C++ & Java code examples, and concept-based explanations for students and placement aspirants.",
        image: "/projects/code_h_square_thumb.png",
        tags: ["DSA", "C++", "Java", "Algorithms", "Data Structures"],
        category: "Education",
        link: "https://github.com/Hayat-array/Code_With_H_Square",
        aiHint: "DSA Learning Repository with C++ and Java Examples"
      },
      {
        title: "Get Me A Chai",
        description: "A modern creator-support crowdfunding platform built with Next.js 13+ App Router. Features creator profiles, donation flows, supporter messages, and scalable payment integration architecture.",
        image: "/projects/get_me_chai_thumb.png",
        tags: ["Next.js 13+", "React 18", "Tailwind CSS", "Crowdfunding", "Full Stack"],
        category: "Full Stack",
        link: "https://github.com/Hayat-array/Get-Me-A-Chai",
        aiHint: "Creator Support Platform with Next.js App Router and Payment Flows"
      },
      {
        title: "Gesture Control Game",
        description: "An innovative game where you control movement using hand gestures captured via webcam. Built with Python and computer vision libraries for an immersive, touchless experience.",
        image: "/projects/gesture_game_thumb.png",
        tags: ["Python", "OpenCV", "MediaPipe", "Pygame", "AI"],
        category: "AI/Game",
        link: "https://github.com/Hayat-array/gesture-game-controller",
        aiHint: "Gesture-based game control using computer vision and Python"
      },
      {
        title: "FoodRush - Delivery App",
        description: "A high-performance food delivery frontend featuring a sleek, modern UI, category-based browsing, and a smooth checkout flow. Optimized for speed and responsiveness.",
        image: "/projects/foodrush_thumb.png",
        tags: ["React", "Tailwind CSS", "Framer Motion", "UI/UX"],
        category: "Web App",
        link: "https://github.com/Hayat-array/FoodRush",
        aiHint: "Modern food delivery app frontend with smooth animations"
      },
      {
        title: "AI Assistant (Hey Hayat)",
        description: "A sophisticated personal AI assistant capable of voice recognition, natural language processing, and automated task execution. Designed to be your digital companion.",
        image: "/projects/ai_assistant_thumb.png",
        tags: ["Python", "NLP", "Speech Recognition", "Automation"],
        category: "AI",
        link: "https://github.com/Hayat-array/Ai_Assistant",
        aiHint: "Personal AI assistant with voice and chat capabilities"
      },
      {
        title: "Simple Calculator",
        description: "A clean, responsive Simple Calculator built using HTML, CSS, JavaScript, and math.js. features accurate mathematical operations with a modern glassmorphism UI.",
        image: "/projects/simple_calculator_thumb.png",
        tags: ["HTML5", "CSS3", "JavaScript ES6", "math.js", "Responsive Design"],
        category: "Frontend",
        link: "https://github.com/Hayat-array/Simple-Calculator",
        aiHint: "Responsive Simple Calculator with safe math.js evaluation"
      }
    ];

    // Map fetched projects and override details if they match
    const updatedFetched = fetchedProjects.map(project => {
      if (project.title && (project.title.includes("Al Mukammal") || project.title.includes("Al Mukkamal"))) {
        return {
          ...project,
          title: "Al Mukammal - E-Commerce Platform",
          description: "A flagship Full-Stack E-Commerce solution meticulously built with Next.js 14. Featuring a high-security JWT Authentication layer and a custom-engineered Admin Dashboard for massive inventory control. Scaling over 250 laptop configurations with dynamic location-aware logic across 200+ countries.",
          image: "/projects/almukammal_dashboard_mockup.png",
          tags: ["Next.js 14", "MongoDB", "JWT Auth", "Admin Dashboard", "E-Commerce", "React Context"],
          link: "https://github.com/Hayat-array/ShopVibe",
          aiHint: "Full-stack e-commerce platform with admin dashboard, JWT auth, and dynamic location logic"
        };
      }
      if (project.title && (project.title.includes("Portfolio") || project.title.includes("Digital Portfolio"))) {
        return {
          ...project,
          title: "Digital Portfolio Engine",
          description: "A masterclass in modern frontend architecture, featuring server-side rendering, zero-client-bundle data mutations, and an ultra-premium dark-mode aesthetic. Built with Next.js 14 and MongoDB Atlas.",
          image: "/projects/portfolio_engine_mockup.png",
          tags: ["Next.js 14", "MongoDB Atlas", "Framer Motion", "Tailwind CSS", "Server Actions"],
          link: "https://github.com/Hayat-array/Portfolio",
          aiHint: "High-performance portfolio engine with real-time data sync and premium visual effects"
        };
      }
      if (project.title && (project.title.includes("Task") || project.title.includes("TaskFlow"))) {
        return {
          ...project,
          title: "TaskFlow - Professional Task Suite",
          description: "A state-of-the-art, high-performance Task Management application blending a clean, premium UI with a robust backend. Features secure auth, smart session management, and real-time status sync.",
          image: "/projects/taskflow_dashboard_mockup.png",
          tags: ["React 18", "Node.js", "MongoDB", "Tailwind CSS", "Vite", "JWT"],
          link: "https://github.com/Hayat-array/Todo-List",
          aiHint: "Professional task management suite with secure auth and real-time CRUD"
        };
      }
      if (project.title && project.title.includes("Gesture")) {
        return {
          ...project,
          title: "Gesture Control Game",
          link: "https://github.com/Hayat-array/gesture-game-controller"
        };
      }
      if (project.title && project.title.includes("FoodRush")) {
        return {
          ...project,
          title: "FoodRush - Delivery App",
          link: "https://github.com/Hayat-array/FoodRush"
        };
      }
      if (project.title && project.title.includes("Assistant")) {
        return {
          ...project,
          title: "AI Assistant (Hey Hayat)",
          link: "https://github.com/Hayat-array/Ai_Assistant"
        };
      }
      if (project.title && project.title.includes("Calculator")) {
        return {
          ...project,
          title: "Simple Calculator",
          link: "https://github.com/Hayat-array/Simple-Calculator"
        };
      }
      return project;
    });

    // If fetched list doesn't have these, add them to the start
    const finalProjects = [...updatedFetched];

    if (!updatedFetched.some(p => p.title.includes("Al Mukammal"))) {
      finalProjects.unshift(featuredProjects[0]);
    }
    // Check for Hayat Task App (index 1 in new array)
    if (!updatedFetched.some(p => p.title.includes("Hayat"))) {
      finalProjects.splice(1, 0, featuredProjects[1]);
    }
    if (!updatedFetched.some(p => p.title.includes("Portfolio"))) {
      // Portfolio is now index 2
      finalProjects.splice(2, 0, featuredProjects[2]);
    }
    if (!updatedFetched.some(p => p.title.includes("TaskFlow"))) {
      // TaskFlow is now index 3
      finalProjects.splice(3, 0, featuredProjects[3]);
    }
    // Interactive Story Generator (index 4)
    if (!updatedFetched.some(p => p.title.includes("Interactive Story"))) {
      finalProjects.splice(4, 0, featuredProjects[4]);
    }
    // Pokemon Generator (index 5)
    if (!updatedFetched.some(p => p.title.includes("Pokémon"))) {
      finalProjects.splice(5, 0, featuredProjects[5]);
    }
    // SecureChat (index 6)
    if (!updatedFetched.some(p => p.title.includes("SecureChat"))) {
      finalProjects.splice(6, 0, featuredProjects[6]);
    }
    // X (Twitter) Clone (index 7)
    if (!updatedFetched.some(p => p.title.includes("X (Twitter)"))) {
      finalProjects.splice(7, 0, featuredProjects[7]);
    }
    // Budget Tracker (index 8)
    if (!updatedFetched.some(p => p.title.includes("Budget Tracker"))) {
      finalProjects.splice(8, 0, featuredProjects[8]);
    }
    // Code With H-Square (index 9)
    if (!updatedFetched.some(p => p.title.includes("Code With H-Square"))) {
      finalProjects.splice(9, 0, featuredProjects[9]);
    }
    // Get Me A Chai (index 10)
    if (!updatedFetched.some(p => p.title.includes("Get Me A Chai"))) {
      finalProjects.splice(10, 0, featuredProjects[10]);
    }
    // Gesture Control (index 11)
    if (!updatedFetched.some(p => p.title.includes("Gesture"))) {
      finalProjects.splice(11, 0, featuredProjects[11]);
    }
    // FoodRush (index 12)
    if (!updatedFetched.some(p => p.title.includes("FoodRush"))) {
      finalProjects.splice(12, 0, featuredProjects[12]);
    }
    // AI Assistant (index 13)
    if (!updatedFetched.some(p => p.title.includes("Assistant"))) {
      finalProjects.splice(13, 0, featuredProjects[13]);
    }
    // Simple Calculator (index 14)
    if (!updatedFetched.some(p => p.title.includes("Calculator"))) {
      finalProjects.splice(14, 0, featuredProjects[14]);
    }

    return finalProjects;
  } catch (e) {
    console.error('❌ Failed to fetch projects:', e.message);
    // Return the hardcoded ones as a final fallback
    return [
      {
        title: "Al Mukammal - E-Commerce Platform",
        description: "A flagship Full-Stack E-Commerce solution meticulously built with Next.js 14. Featuring a high-security JWT Authentication layer and a custom-engineered Admin Dashboard for massive inventory control.",
        image: "/projects/almukammal_dashboard_mockup.png",
        tags: ["Next.js 14", "MongoDB", "JWT Auth"],
        category: "Web App",
        link: "https://github.com/Hayat-array/ShopVibe"
      },
      {
        title: "Digital Portfolio Engine",
        description: "A masterclass in modern frontend architecture, featuring server-side rendering and an ultra-premium dark-mode aesthetic.",
        image: "/projects/portfolio_engine_mockup.png",
        tags: ["Next.js 14", "MongoDB Atlas", "Tailwind CSS"],
        category: "Web App",
        link: "https://github.com/Hayat-array/Portfolio"
      },
      {
        title: "TaskFlow - Professional Task Suite",
        description: "A state-of-the-art, high-performance Task Management application blending a clean, premium UI with a robust backend.",
        image: "/projects/taskflow_dashboard_mockup.png",
        tags: ["React 18", "Node.js", "MongoDB", "Tailwind CSS"],
        category: "Web App",
        link: "https://github.com/Hayat-array/Todo-List"
      }
    ];
  }
}

export default async function Home() {
  const skills = await getSkills();
  const projects = await getProjects();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        {/* <AboutSection /> */}
        <SkillsSection skills={skills} />
        <ProjectsSection projects={projects} />
        <AboutProjects />
        <ResumeToolSection />
        <StudiesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
