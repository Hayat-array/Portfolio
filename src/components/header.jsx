// // 'use client';
// // import { Home, User, Folder, Mail, FileText } from 'lucide-react';
// // import { useState, useEffect } from 'react';
// // import Link from 'next/link';
// // import { Button } from '@/components/ui/button';
// // import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
// // import { Menu, X } from 'lucide-react';
// // import { cn } from '@/lib/utils';
// // import { ThemeToggle } from './theme-toggle';

// // import { 
// //   Home, 
// //   Code, 
// //   Folder, 
// //   Award, 
// //   User, 
// //   FileText, 
// //   MessageCircle, 
// //   Mail, 
// //   Shield 
// // } from 'lucide-react';

// // const navLinks = [
// //   { href: '#home', label: 'Home', icon: Home },
// //   { href: '#skills', label: 'Skills', icon: Code },
// //   { href: '#projects', label: 'Projects', icon: Folder },
// //   { href: '#resume-tool', label: 'Achievements & Certificates', icon: Award },
// //   { href: '#about', label: 'About Me', icon: User },
// //   { href: '/resume/Hayat_Ali_Resume.pdf', label: 'Resume', icon: FileText },
// //   { href: '/chat', label: 'Chat', icon: MessageCircle },
// //   { href: '#contact', label: 'Contact', icon: Mail },
// //   { href: '/admin/login', label:'Admin Login', icon: Shield },
// // ];

// // export function Header() {
// //   const [isScrolled, setIsScrolled] = useState(false);
// //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
// //   const [mounted, setMounted] = useState(false);

// //   useEffect(() => {
// //     setMounted(true);
// //     const handleScroll = () => {
// //       setIsScrolled(window.scrollY > 10);
// //     };
// //     handleScroll(); // sync initial scroll position
// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);


// //   const NavLink = ({ href, label, isMobile = false }) => (
// //     <Link
// //       href={href}
// //       onClick={() => isMobile && setMobileMenuOpen(false)}
// //       className={cn(
// //         'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors',
// //         'hover:bg-accent hover:text-accent-foreground text-foreground',
// //         'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
// //         'h-10 px-4 py-2',
// //         isMobile ? 'w-full justify-start min-h-[44px]' : 'w-auto'
// //       )}
// //     >
// //       {label}
// //     </Link>
// //   );


// //   return (
// //     <header
// //       suppressHydrationWarning
// //       className={cn(
// //         'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
// //         mounted && isScrolled
// //           ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm'
// //           : 'bg-background/90 backdrop-blur-sm md:bg-transparent'
// //       )}
// //     >
// //       <div className="container px-4 mx-auto">
// //         {/* Three-column grid layout for perfect center alignment */}
// //         <div className="grid grid-cols-3 items-center h-16 gap-4">
// //           {/* Left Column: Logo */}
// //           <div className="flex items-center justify-start">
// //             <Link
// //               href="#home"
// //               className="flex items-center gap-2 text-lg font-bold text-foreground hover:text-primary transition-colors"
// //             >
// //               <img className="w-8 h-8 flex-shrink-0" src="/favico.png" alt="Portfolio Logo" />
// //               <span className="hidden sm:inline whitespace-nowrap">Personal Portfolio</span>
// //             </Link>
// //           </div>

// //           {/* Center Column: Desktop Navigation (truly centered) */}
// //           <nav className="hidden md:flex items-center justify-center">
// //             <div className="flex items-center space-x-1">
// //               {navLinks.map((link) => (
// //                 <NavLink key={link.href} {...link} />
// //               ))}
// //             </div>
// //           </nav>

// //           {/* Center Column: Mobile Brand Name (truly centered) */}
// //           <div className="flex md:hidden items-center justify-center">
// //             <span className="text-sm font-semibold text-foreground/80 truncate">
// //               Portfolio
// //             </span>
// //           </div>

// //           {/* Right Column: Actions */}
// //           <div className="flex items-center justify-end gap-2">
// //             <ThemeToggle />

// //             {/* Mobile Menu Button */}
// //             <div className="md:hidden">
// //               <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
// //                 <SheetTrigger asChild>
// //                   <Button
// //                     variant="ghost"
// //                     size="icon"
// //                     className="min-w-[44px] min-h-[44px] text-foreground hover:bg-accent hover:text-accent-foreground"
// //                     aria-label="Toggle mobile menu"
// //                   >
// //                     {mobileMenuOpen ? (
// //                       <X className="w-6 h-6" />
// //                     ) : (
// //                       <Menu className="w-6 h-6" />
// //                     )}
// //                   </Button>
// //                 </SheetTrigger>
// //                 <SheetContent
// //                   side="right"
// //                   className="w-[280px] sm:w-[320px] bg-background border-border"
// //                 >
// //                   <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
// //                   <nav className="flex flex-col pt-8 space-y-2">
// //                     {navLinks.map((link) => (
// //                       <NavLink key={link.href} {...link} isMobile />
// //                     ))}
// //                   </nav>
// //                 </SheetContent>
// //               </Sheet>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </header>
// //   );
// // }
// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { Button } from '@/components/ui/button';
// import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
// import { Menu, X,
//   Home,
//   Code,
//   Folder,
//   Award,
//   User,
//   FileText,
//   MessageCircle,
//   Mail,
//   Shield
// } from 'lucide-react';
// import { cn } from '@/lib/utils';
// import { ThemeToggle } from './theme-toggle';

// // ✅ Navigation Links with Icons
// const navLinks = [
//   { href: '#home', icon: Home },
//   { href: '#skills', icon: Code },
//   { href: '#projects', icon: Folder },
//   { href: '#resume-tool', icon: Award },
//   { href: '#about', icon: User },
//   { href: '/resume/Hayat_Ali_Resume.pdf', icon: FileText },
//   { href: '/chat', icon: MessageCircle },
//   { href: '#contact', icon: Mail },
//   { href: '/admin/login', icon: Shield },
// ];

// export function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     handleScroll();
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // ✅ NavLink Component with Icon
//   const NavLink = ({ href, label, icon: Icon, isMobile = false }) => (
//     <Link
//       href={href}
//       onClick={() => isMobile && setMobileMenuOpen(false)}
//       className={cn(
//         'inline-flex items-center gap-2 rounded-md text-sm font-medium transition-colors',
//         'hover:bg-accent hover:text-accent-foreground text-foreground',
//         'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
//         'h-10 px-4 py-2',
//         isMobile ? 'w-full justify-start min-h-[44px]' : 'w-auto justify-center'
//       )}
//     >
//       {Icon && <Icon className={isMobile ? "w-5 h-5" : "w-4 h-4"} />}
//       {label}
//     </Link>
//   );

//   return (
//     <header
//       suppressHydrationWarning
//       className={cn(
//         'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
//         mounted && isScrolled
//           ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm'
//           : 'bg-background/90 backdrop-blur-sm md:bg-transparent'
//       )}
//     >
//       <div className="container px-4 mx-auto">
//         <div className="grid grid-cols-3 items-center h-16 gap-4">

//           {/* 🔹 Left: Logo */}
//           <div className="flex items-center justify-start">
//             <Link
//               href="#home"
//               className="flex items-center gap-2 text-lg font-bold text-foreground hover:text-primary transition-colors"
//             >
//               <img className="w-8 h-8 flex-shrink-0" src="/favico.png" alt="Portfolio Logo" />
//               <span className="hidden sm:inline whitespace-nowrap">Personal Portfolio</span>
//             </Link>
//           </div>

//           {/* 🔹 Center: Desktop Nav */}
//           <nav className="hidden md:flex items-center justify-center">
//             <div className="flex items-center space-x-1">
//               {navLinks.map((link) => (
//                 <NavLink key={link.href} {...link} />
//               ))}
//             </div>
//           </nav>

//           {/* 🔹 Center (Mobile Title) */}
//           <div className="flex md:hidden items-center justify-center">
//             <span className="text-sm font-semibold text-foreground/80 truncate">
//               Portfolio
//             </span>
//           </div>

//           {/* 🔹 Right: Actions */}
//           <div className="flex items-center justify-end gap-2">

//             <ThemeToggle />

//             {/* 📱 Mobile Menu */}
//             <div className="md:hidden">
//               <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
//                 <SheetTrigger asChild>
//                   <Button
//                     variant="ghost"
//                     size="icon"
//                     className="min-w-[44px] min-h-[44px]"
//                   >
//                     {mobileMenuOpen ? (
//                       <X className="w-6 h-6" />
//                     ) : (
//                       <Menu className="w-6 h-6" />
//                     )}
//                   </Button>
//                 </SheetTrigger>

//                 <SheetContent
//                   side="right"
//                   className="w-[280px] sm:w-[320px]"
//                 >
//                   <SheetTitle className="sr-only">
//                     Mobile Navigation Menu
//                   </SheetTitle>

//                   <nav className="flex flex-col pt-8 space-y-2">
//                     {navLinks.map((link) => (
//                       <NavLink key={link.href} {...link} isMobile />
//                     ))}
//                   </nav>

//                 </SheetContent>
//               </Sheet>
//             </div>

//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import {
  Menu, X,
  Home, Code, Folder, Award,
  User, FileText, MessageCircle,
  Mail, Shield
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './theme-toggle';

// ✅ Nav Links with labels + icons
const navLinks = [
  { href: '#home', label: 'Home', icon: Home },
  { href: '#skills', label: 'Skills', icon: Code },
  { href: '#projects', label: 'Projects', icon: Folder },
  { href: '#resume-tool', label: 'Certificates', icon: Award },
  { href: '#about', label: 'About', icon: User },
  { href: '/resume/Hayat_Ali_Resume.pdf', label: 'Resume', icon: FileText },
  { href: '/chat', label: 'Chat', icon: MessageCircle },
  { href: '#contact', label: 'Contact', icon: Mail },
  { href: '/admin/login', label: 'Admin', icon: Shield },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✅ NavLink with animation
  const NavLink = ({ href, label, icon: Icon, isMobile = false }) => (
    <Link
      href={href}
      onClick={() => isMobile && setMobileMenuOpen(false)}
      className={cn(
        'relative group flex items-center justify-center rounded-xl',
        'transition-all duration-300',
        'hover:bg-accent/60',
        'h-10 w-10'
      )}
    >
      {/* Icon */}
      {Icon && (
        <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
      )}

      {/* 🔥 Animated Tooltip */}
      {!isMobile && (
        <span
          className="
          absolute top-12 left-1/2 -translate-x-1/2
          px-3 py-1.5 text-xs rounded-md
          bg-black text-white shadow-lg

          opacity-0 scale-75 translate-y-2
          group-hover:opacity-100
          group-hover:scale-100
          group-hover:translate-y-0

          transition-all duration-300 ease-out
          whitespace-nowrap
        "
        >
          {label}
        </span>
      )}
    </Link>
  );

  return (
    <header
      suppressHydrationWarning
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        mounted && isScrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-background/90 backdrop-blur-sm md:bg-transparent'
      )}
    >
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-3 items-center h-16 gap-4">

          {/* 🔹 Logo */}
          <div className="flex items-center justify-start">
            <Link
              href="#home"
              className="flex items-center gap-2 text-lg font-bold text-foreground hover:text-primary transition-colors"
            >
              <img className="w-8 h-8" src="/favico.png" alt="Logo" />
              <span className="hidden sm:inline">Portfolio</span>
            </Link>
          </div>

          {/* 🔹 Desktop Nav */}
          <nav className="hidden md:flex items-center justify-center gap-2">
            {navLinks.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
          </nav>

          {/* 🔹 Mobile Title */}
          <div className="flex md:hidden items-center justify-center">
            <span className="text-sm font-semibold text-foreground/80">
              Portfolio
            </span>
          </div>

          {/* 🔹 Right Section */}
          <div className="flex items-center justify-end gap-2">

            <ThemeToggle />

            {/* 📱 Mobile Menu */}
            <div className="md:hidden">
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    {mobileMenuOpen ? (
                      <X className="w-6 h-6" />
                    ) : (
                      <Menu className="w-6 h-6" />
                    )}
                  </Button>
                </SheetTrigger>

                <SheetContent side="right" className="w-[280px]">
                  <SheetTitle className="sr-only">
                    Mobile Menu
                  </SheetTitle>

                  <nav className="flex flex-col pt-8 space-y-3">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent transition"
                      >
                        <link.icon className="w-5 h-5" />
                        {link.label}
                      </Link>
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