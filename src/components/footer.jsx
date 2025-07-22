import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border/20">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center w-full ">
            &copy; {new Date().getFullYear()} Hayat Ali. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/Hayat-array" target="_blank"><Github className="h-5 w-5" /></Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.linkedin.com/in/hayat-ali-887aab294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><Linkedin className="h-5 w-5" /></Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="#" target="_blank"><Twitter className="h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
