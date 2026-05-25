'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import { ArrowRight, Download } from 'lucide-react';
import { Section } from './section';

const dynamicTexts = [
  "Hayat Ali",
  "Machine Learning Engineer",
  "Web Developer",
  "Full-Stack Developer",
  "React Specialist",
  "Next.js Enthusiast",
];

export function HeroSection() {
  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const currentWord = dynamicTexts[textIndex];
    let timer;

    if (isDeleting) {
      // Deleting character
      timer = setTimeout(() => {
        setCurrentText(currentWord.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 40); // snapper deletion
    } else {
      // Typing character
      timer = setTimeout(() => {
        setCurrentText(currentWord.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 70); // smooth, organic typing
    }

    // Word fully typed: pause and start deleting
    if (!isDeleting && charIndex === currentWord.length) {
      clearTimeout(timer);
      const pauseDuration = textIndex === 0 ? 5000 : 2000; // 5 seconds for name, 2 seconds for skills
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
    }

    // Word fully deleted: move to next word and start typing
    if (isDeleting && charIndex === 0) {
      clearTimeout(timer);
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % dynamicTexts.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex, isMounted]);

  // Server-side rendering (SSR) fallback
  if (!isMounted) {
    return (
      <Section
        id="home"
        className="flex items-center justify-center min-h-screen pt-24 md:pt-32 pb-12"
      >
        <div className="text-center max-w-4xl mx-auto px-4">
          <div className="flex justify-center mb-8" style={{ marginTop: '32px' }}>
            <div className="w-[184px] h-[184px] md:w-[206px] md:h-[206px] rounded-full overflow-hidden border-4 border-primary/20 bg-muted animate-pulse" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl text-primary font-headline mb-4">
            Hayat Ali
          </h1>
          <p className="text-xl md:text-2xl font-medium text-muted-foreground mb-8">
            Full-Stack Developer & Machine Learning Engineer
          </p>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed">
            A passionate Full-Stack Developer & Machine Learning Enthusiast creating modern, responsive, and user-friendly web applications.
          </p>
        </div>
      </Section>
    );
  }

  return (
    <Section
      id="home"
      className="flex items-center justify-center min-h-screen pt-24 md:pt-32 pb-12"
    >
      <div className="text-center max-w-4xl mx-auto px-4 flex flex-col items-center">
        {/* Profile Avatar Container with margin-top: 122px and premium dynamic ring */}
        <div className="relative mb-8 group animate-fade-in" style={{ marginTop: '32px' }}>
          <div className="relative w-[184px] h-[184px] md:w-[206px] md:h-[206px] p-[2px] bg-gradient-to-r from-primary/30 to-violet-500/30 group-hover:from-primary group-hover:to-violet-500 rounded-full transition-all duration-500 shadow-md transform hover:scale-[1.02]">
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-background bg-card flex items-center justify-center">
              <img 
                src="/hayat.png" 
                alt="Hayat Ali" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ borderRadius: '100%' }}
              />
            </div>
          </div>
        </div>

        {/* Dynamic Developer Name & Skills Header */}
        <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl font-headline min-h-[52px] md:min-h-[78px] flex items-center justify-center gap-1.5 fade-in-up">
          <span className={`transition-all duration-300 ${
            textIndex === 0 
              ? "text-primary bg-gradient-to-r from-violet-600 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent font-extrabold"
              : "text-muted-foreground/80 dark:text-muted-foreground/90 font-semibold text-2xl md:text-4xl"
          }`}>
            {currentText}
          </span>
          <span className={`inline-block w-[3px] h-[1.1em] animate-pulse ml-0.5 align-middle transition-colors duration-300 ${
            textIndex === 0 
              ? "bg-violet-600 dark:bg-violet-400" 
              : "bg-muted-foreground/60"
          }`} />
        </h1>

        {/* Core Narrative / Introduction */}
        <p className="max-w-2xl mx-auto mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed fade-in-up" style={{ animationDelay: '0.2s' }}>
          A passionate Full-Stack Developer & Machine Learning Enthusiast creating modern, responsive, and user-friendly web applications.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 w-full sm:w-auto fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Button asChild size="lg" className="w-full sm:w-auto transition-shadow animated-gradient text-primary-foreground hover:shadow-lg hover:shadow-primary/50 text-base font-semibold">
            <Link href="#contact">
              Get in Touch <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto hover:bg-accent hover:text-accent-foreground transition-all duration-300 text-base font-semibold">
            <Link href="/resumes">
              View CVs <Download className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
