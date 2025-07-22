'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import Image from 'next/image';
import { Badge } from './ui/badge';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { Section } from './section';
import { cn } from '@/lib/utils';

const categories = ['All', 'Web App', 'Website', 'Mobile', 'Terminal App'];

const projects = [
  {
    title: "Banking Management System",
    description:
      "A C++ based terminal banking system with features like account creation, login, PIN change, deposits, withdrawals, admin login, and password recovery.",
    image: "/projects/banking-system.png", // Make sure this exists in public/projects/
    tags: ["C++", "OOP", "File Handling", "Turbo C++"],
    category: "Terminal App",
    link: "https://github.com/yourusername/banking-system", // Replace with actual link
    aiHint: "C++ terminal banking project"
  },
  {
    title: "Machine Learning Project",
    description: "A machine learning model that predicts outcomes using Python and Scikit-learn, with OpenCv.",
    image: "/projects/ml-project.png",
    tags: ["Python", "ML", "Scikit-learn", "OpenCv","Pandas"],
    category: "Web App",
    link: "https://github.com/yourusername/ml-project",
    aiHint: "Machine learning with frontend integration"
  },
  // Add more projects here...
];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <Section id="projects" className="fade-in-up">
      <div className="text-center ">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-headline">Featured Projects</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Here are some of the projects I'm proud to have worked on.
        </p>
      </div>

      <div className="flex justify-center gap-2 mb-8 ">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? 'default' : 'ghost'}
            onClick={() => setActiveCategory(category)}
            className={cn(activeCategory === category ? 'animated-gradient text-primary-foreground' : 'text-muted-foreground')}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 ml-5 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {filteredProjects.map((project, index) => (
          <Card
            key={project.title}
            className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardHeader className="p-0">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                data-ai-hint={project.aiHint}
              />
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle className="mb-2">{project.title}</CardTitle>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <Button asChild variant="outline" className="w-full">
                <Link href={project.link} target="_blank">
                  View Project <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
