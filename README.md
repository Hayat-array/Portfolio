# ⚡ Personal Portfolio

A high-performance, cyber-aesthetic portfolio website built with **Next.js 14** and **MongoDB**. Designed to showcase projects with premium visual effects, glassmorphism UI, and seamless animations.

![Portfolio Preview](/projects/almukammal_dashboard_mockup.png)
*(Replace with actual portfolio screenshot if available)*

## 🚀 Features

- **Dynamic Content Engine**: Projects and skills are dynamically fetched from a **MongoDB** database, allowing for real-time updates without redeployment.
- **Cyber-Premium Aesthetic**: Features a custom dark mode design with neon accents, glassmorphism effects, and smooth gradients.
- **Interactive UI**: Powered by **Framer Motion** for complex animations and page transitions.
- **Responsive Design**: Fully optimized layouts for mobile, tablet, and desktop devices.
- **Project Showcase**: specialized "Behind the Code" sections for deep-diving into featured projects (e.g., Al Mukammal, FoodRush).
- **Resume Tool**: Integrated interactive resume builder/viewer.

## 🛠️ Tech Stack

### Core
- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: JavaScript / React
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) (Atlas)

### Libraries & Tools
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/) (Radix Primitives)
- **Deployment**: Vercel (Recommended)

## 📦 Getting Started

Follow these steps to set up the project locally.

### Prerequisites
- Node.js (v18+)
- MongoDB Connection String

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Portfolio
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment**
   Create a `.env.local` file in the root directory and add your MongoDB connection string:
   ```env
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/portfolio
   ```

4. **Run Development Server**
   ```bash
   npm run dev
   ```

5. **Access the Application**
   Open http://localhost:3000 in your browser.

## 🗄️ Database Structure

The application expects a MongoDB database named `portfolio` with the following collections:

- **`projects`**: Stores project details (title, description, tags, images, etc.).
- **`skills`**: Stores technical skills and proficiency levels.
- **`Hayat`** (Fallback): Alternative collection for project data.

### Updating Data
You can use the included script to update project details in the database:
```bash
node update-db.js
```
*(Ensure `.env.local` is present before running scripts)*

## 📁 Project Structure

```
Portfolio/
├── src/
│   ├── app/                 # Next.js App Router pages
│   ├── components/          # Reusable React components
│   │   ├── ui/              # Shadcn UI primitives
│   │   └── ...              # Section components (Hero, Projects, etc.)
│   └── lib/                 # Utility functions & DB connection
├── public/
│   └── projects/            # Static project images
├── update-db.js             # Database management script
└── ...configuration files
```

## � Project Showcase

### Al Mukammal E-Commerce
A flagship enterprise-level platform for electronics retail.
- **Key Features**: Admin Dashboard, Custom Color Management, Global Location Logic (200+ countries).
- **Tech**: Next.js 14, MongoDB Aggregate Pipelines, JWT Auth.

### ML Intelligence Predictor
A data-driven engine powered by Python & Scikit-learn with predictive accuracy.
- **Key Features**: Non-linear data processing, OpenCV integration, Predictive Modeling.
- **Tech**: Python, Scikit-learn, Pandas, OpenCV.

### FoodRush Delivery
Advanced multi-role food delivery ecosystem.
- **Key Features**: Real-time tracking, Kitchen Display System (KDS), Stripe integration.
- **Tech**: Next.js 14, Zustand, Google Maps API.

### Omni-Channel AI Assistant
Voice-enabled AI companion with screen awareness.
- **Key Features**: Push-to-talk, screen context analysis, code syntax highlighting.
- **Tech**: Python Flask, WebSpeech API, Perplexity Sonar.

### TaskFlow Professional
High-performance task management suite with secure user silos.
- **Key Features**: JWT Auth, Smart Session Management, Real-time Status Sync, Check-off logic.
- **Tech**: React 18, Node.js, Express, MongoDB, Tailwind CSS.

### Hayat Task App
Client-side enterprise workflow system with role-based access.
- **Key Features**: Admin/Employee Dashboards, RBAC, Auto-Credentials, Kanban Board.
- **Tech**: React 18, Vite, Context API, Local Storage.

### Interactive Story Generator
Whimsical random story creator.
- **Key Features**: Dynamic Text replacement, Random Logic, Glassmorphism UI.
- **Tech**: Vanilla JS, HTML5, CSS3 (No Frameworks).

### Pokémon Card Generator
Live API-driven card creator.
- **Key Features**: Real-time PokéAPI fetching, Dynamic Type Theming, Image Download (html2canvas).
- **Tech**: Vanilla JS, Async/Await, REST API.

### SecureChat Platform
End-to-End Encrypted Messaging System.
- **Key Features**: Custom Encryption, Real-Time Socket.IO, Binary File Transfer, OTP Auth.
- **Tech**: Python Flask, Socket.IO, MongoDB, SHA-256.

### X Clone
A Twitter UI Replica.
- **Key Features**: Tailwind CSS, Responsive Grid, HTML5.
- **Tech**: HTML5, CSS3 (Tailwind CSS).

### Budget Tracker
A modern expense management web application.
- **Key Features**: Real-time Balance Calculation, Expense CRUD, Dynamic Budget Updates.
- **Tech**: HTML5, Tailwind CSS, Vanilla JavaScript.

### Code With H-Square
A comprehensive DSA learning repository and programming handbook.
- **Key Features**: Structured DSA Sheet, C++ & Java Examples, Concept-based Explanations, Placement Prep.
- **Tech**: Data Structures, Algorithms, C++, Java.
- **Link**: [GitHub Repository](https://github.com/Hayat-array/Code_With_H_Square)

### Get Me A Chai
A modern creator-support crowdfunding platform.
- **Key Features**: Creator Profiles, Donation Flows, Supporter Messages, Payment Gateway Integration.
- **Tech**: Next.js 13+, React 18, Tailwind CSS, Full Stack Architecture.

### Simple Calculator
A modern, responsive calculator web app for precise arithmetic.
- **Key Features**: Accuracy-focused evaluation, Glassmorphism UI, Responsive Layout, math.js integration.
- **Tech**: HTML5, CSS3, JavaScript ES6, math.js.
- **Link**: [GitHub Repository](https://github.com/Hayat-array/Simple-Calculator)

## 🔮 Future Roadmap

- [ ] **AI Recommendation Engine**: Integrating collaborative filtering for product suggestions.
- [ ] **Web3 Payments**: Adding crypto payment gateways for international orders.
- [ ] **Mobile Native App**: React Native port for iOS and Android.

## ⚡ Performance

- **98+ Lighthouse Score**: Optimized for Core Web Vitals.
- **Server Actions**: Leveraging Next.js 14 server actions for zero-client-bundle data mutations.
- **Edge Caching**: Static assets served via Vercel Edge Network.

## 📬 Contact

- **MainSite**: [Salman's Portfolio](http://localhost:9002/)
- **Email**: contact@salman.dev
- **GitHub**: [github.com/Hayat-array](https://github.com/Hayat-array)

## �🎨 Customizing

- **Global Styles**: Edit `src/app/globals.css` for theme colors and global CSS variables.
- **Components**: Modify specific sections in `src/components/` to change the layout or content structure.

---
Built with ❤️ using Next.js & MongoDB