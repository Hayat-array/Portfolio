'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './theme-toggle';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#resume-tool', label: 'Achievements & Certificates' },
  { href: '#about', label: 'About Me' },
  { href: '/resume/Hayat_Ali_Resume.pdf', label: 'Resume' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ href, label, isMobile = false }) => (
    <Link href={href} passHref>
      <Button
        variant="ghost"
        onClick={() => isMobile && setMobileMenuOpen(false)}
        className={cn(
          'text-foreground hover:bg-accent hover:text-accent-foreground transition-colors',
          isMobile ? 'w-full justify-start min-h-[44px]' : 'w-auto'
        )}
      >
        {label}
      </Button>
    </Link>
  );

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-background/90 backdrop-blur-sm md:bg-transparent'
      )}
    >
      <div className="container px-4 mx-auto">
        {/* Three-column grid layout for perfect center alignment */}
        <div className="grid grid-cols-3 items-center h-16 gap-4">
          {/* Left Column: Logo */}
          <div className="flex items-center justify-start">
            <Link
              href="#home"
              className="flex items-center gap-2 text-lg font-bold text-foreground hover:text-primary transition-colors"
            >
              <img className="w-8 h-8 flex-shrink-0" src="/favico.png" alt="Portfolio Logo" />
              <span className="hidden sm:inline whitespace-nowrap">Personal Portfolio</span>
            </Link>
          </div>

          {/* Center Column: Desktop Navigation (truly centered) */}
          <nav className="hidden md:flex items-center justify-center">
            <div className="flex items-center space-x-1">
              {navLinks.map((link) => (
                <NavLink key={link.href} {...link} />
              ))}
            </div>
          </nav>

          {/* Center Column: Mobile Brand Name (truly centered) */}
          <div className="flex md:hidden items-center justify-center">
            <span className="text-sm font-semibold text-foreground/80 truncate">
              Portfolio
            </span>
          </div>

          {/* Right Column: Actions */}
          <div className="flex items-center justify-end gap-2">
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="min-w-[44px] min-h-[44px] text-foreground hover:bg-accent hover:text-accent-foreground"
                    aria-label="Toggle mobile menu"
                  >
                    {mobileMenuOpen ? (
                      <X className="w-6 h-6" />
                    ) : (
                      <Menu className="w-6 h-6" />
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-[280px] sm:w-[320px] bg-background border-border"
                >
                  <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
                  <nav className="flex flex-col pt-8 space-y-2">
                    {navLinks.map((link) => (
                      <NavLink key={link.href} {...link} isMobile />
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
