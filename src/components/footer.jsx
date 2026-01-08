import Link from "next/link";
import { Github, Linkedin, Instagram, Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border/20">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 w-full">
          {/* Left: Contact Info - Stacked Vertically */}
          <div className="flex flex-col items-center md:items-start gap-1 text-sm text-muted-foreground">
            <a href="tel:+919079728844" className="flex items-center gap-2 hover:text-foreground transition-all duration-300 group">
              <Phone className="h-4 w-4 transition-transform group-hover:scale-110" />
              <span className="opacity-80 group-hover:opacity-100">+91 9079728844</span>
            </a>
            <a href="mailto:Hayatali123786@gmail.com" className="flex items-center gap-2 hover:text-foreground transition-all duration-300 group">
              <Mail className="h-4 w-4 transition-transform group-hover:scale-110" />
              <span className="opacity-80 group-hover:opacity-100">Hayatali123786@gmail.com</span>
            </a>
          </div>

          {/* Center: Copyright */}
          <div className="flex-1 flex justify-center">
            <p className="text-sm text-muted-foreground whitespace-nowrap">
              &copy; {new Date().getFullYear()} Hayat Ali. All rights reserved.
            </p>
          </div>

          {/* Right: Social Icons */}
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" asChild className="h-9 w-9 rounded-full hover:bg-white/5">
              <Link href="https://github.com/Hayat-array" target="_blank">
                <Github className="h-[1.1rem] w-[1.1rem]" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="h-9 w-9 rounded-full hover:bg-white/5">
              <Link href="https://www.linkedin.com/in/hayat-ali-887aab294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
                <Linkedin className="h-[1.1rem] w-[1.1rem]" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="h-9 w-9 rounded-full hover:bg-white/5">
              <Link href="https://www.instagram.com/hayatali07868/?hl=en" target="_blank">
                <Instagram className="h-[1.1rem] w-[1.1rem]" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
