'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import { ArrowRight, Download } from 'lucide-react';
import { Section } from './section';

const skills = [
  "Full-Stack Developer",
  "Machine Learning Engineer",
  "React Specialist",
  "Next.js Enthusiast",
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
    }, 15000); // Increased to 15s to ensure multiple skills can be seen clearly

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
          setTimeout(() => setIsDeleting(true), 1200);
        }
      }
    };

    const typingSpeed = isDeleting ? 50 : 70;
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
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-6xl text-primary font-headline">
            Hayat Ali
          </h1>
          <p className="max-w-3xl mx-auto mt-10 mb-8 text-xl md:text-2xl text-muted-foreground">
            A passionate Full-Stack Developer creating modern, responsive, and
            user-friendly web applications.
          </p>
          {/* <p className="max-w-3xl mx-auto mb-8 text-xl md:text-2xl text-muted-foreground">
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
        <div className="flex flex-col items-center justify-center h-24 mt-24">
          <div className='flex items-center justify-center mt-10 align-center img1'>
            <img style={{ maxWidth: "100%", height: "auto", borderRadius: "100%", marginTop: "122px" }} src='/hayat.png' width={200}></img>
          </div>
          {isNameVisible ? (
            <>
              <h1 className="mt-10 text-4xl font-bold tracking-tight md:text-6xl text-primary font-headline fade-in-up">
                Hayat Ali
              </h1>
            </>
          ) : (
            <p className="max-w-3xl mx-auto mt-10 text-3xl font-semibold md:text-4xl text-muted-foreground fade-in-up">
              {currentSkill}
              <span className="animate-pulse">|</span>
            </p>
          )}
        </div>
        <div className='mt-64'>
          <p className="max-w-3xl mx-auto mb-8 text-xl md:text-2xl text-muted-foreground fade-in-up" style={{ animationDelay: '0.2s' }}>
            A passionate Full-Stack Developer & Machine Learning Enthusiast creating modern, responsive, and
            user-friendly web applications.
          </p>
          <div className="flex items-center justify-center gap-4 fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button asChild size="lg" className="transition-shadow animated-gradient text-primary-foreground hover:shadow-lg hover:shadow-primary/50">
              <Link href="#contact">
                Get in Touch <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/resume/Hayat_Ali_Resume.pdf" target="_blank">
                Download CV <Download className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>

      </div>
    </Section>
  );
}
