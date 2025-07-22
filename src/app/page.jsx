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



async function getSkills() {
  try {
    const client = await clientPromise;
    const db = client.db();
    const skills = await db.collection('skills').find({}).toArray();
    // The _id field is an ObjectId, which is not serializable. Convert it to a string.
    return JSON.parse(JSON.stringify(skills));
  } catch (e) {
    console.error('Failed to fetch skills:', e);
    return [];
  }
}

async function getProjects() {
  try {
    const client = await clientPromise;
    const db = client.db();
    const projects = await db.collection('projects').find({}).toArray();
    return JSON.parse(JSON.stringify(projects));
  } catch (e) {
    console.error('Failed to fetch projects:', e);
    return [];
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
        <ResumeToolSection />
        <StudiesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
