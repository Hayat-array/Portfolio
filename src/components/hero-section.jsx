'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import { ArrowRight, Download } from 'lucide-react';
import { Section } from './section';

const skills = [
  "Full-Stack Developer",
  "React Specialist",
  "Next.js Enthusiast",
  "UI/UX Designer",
];

export function HeroSection() {
  const [currentSkill, setCurrentSkill] = useState('');
  const [skillIndex, setSkillIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isNameVisible, setIsNameVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    // Loop between showing the name and the skills
    const nameSkillsLoop = setInterval(() => {
      setIsNameVisible(prev => !prev);
    }, 5000); // Switch every 5 seconds

    return () => clearInterval(nameSkillsLoop);
  }, [isMounted]);
  
  useEffect(() => {
    if (isNameVisible || !isMounted) {
        // Reset typing animation when name is visible
        setCharIndex(0);
        setCurrentSkill('');
        setIsDeleting(false);
        return;
    }

    const type = () => {
      const currentWord = skills[skillIndex];
      if (isDeleting) {
        // Deleting characters
        if (charIndex > 0) {
          setCurrentSkill(currentWord.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
        }
      } else {
        // Typing characters
        if (charIndex < currentWord.length) {
          setCurrentSkill(currentWord.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          // Pause at the end of the word, then start deleting
          setTimeout(() => setIsDeleting(true), 1500);
        }
      }
    };

    const typingSpeed = isDeleting ? 100 : 125;
    const typingTimeout = setTimeout(type, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [charIndex, skillIndex, isDeleting, isNameVisible, isMounted]);

  if (!isMounted) {
    return (
       <Section
        id="home"
        className="flex items-center justify-center min-h-screen pt-16 md:pt-0"
      >
        <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-primary font-headline">
                Hayat Ali
            </h1>
            <p className="text-xl mt-10 md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              A passionate Full-Stack Developer creating modern, responsive, and
              user-friendly web applications.
            </p>
            {/* <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              A passionate Full-Stack Developer creating modern, responsive, and
              user-friendly web applications.
            </p> */}
        </div>
      </Section>
    );
  }

  return (
    <Section
      id="home"
      className="flex items-center justify-center min-h-screen pt-16 md:pt-0"
    >
      <div className="text-center">
        <div className="h-24 flex flex-col mt-24 items-center justify-center">
          <div className='mt-10 flex justify-center align-center img1 items-center'>
            <img style={{ maxWidth: "100%",height: "auto",borderRadius: "100%",marginTop: "122px"}} src='/hayat.png' width={200}></img>
          </div>
          {isNameVisible ? (
            <>
                <h1 className="text-4xl mt-10 md:text-6xl font-bold tracking-tight text-primary font-headline fade-in-up">
                  Hayat Ali
                </h1>
            </>
          ) : (
            <p className="text-3xl mt-10 md:text-4xl text-muted-foreground max-w-3xl mx-auto font-semibold fade-in-up">
              {currentSkill}
              <span className="animate-pulse">|</span>
            </p>
          )}
        </div>
       <div className='mt-64'>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 fade-in-up" style={{animationDelay: '0.2s'}}>
          A passionate Full-Stack Developer creating modern, responsive, and
          user-friendly web applications.
        </p>
        <div className="flex justify-center items-center gap-4 fade-in-up" style={{animationDelay: '0.4s'}}>
          <Button asChild size="lg" className="animated-gradient text-primary-foreground hover:shadow-lg hover:shadow-primary/50 transition-shadow">
            <Link href="#contact">
              Get in Touch <ArrowRight className="ml-2" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/resume.pdf" target="_blank">
              Download CV <Download className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>

      </div>
    </Section>
  );
}
