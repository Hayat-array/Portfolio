'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Section } from '@/components/section';

const studies = [
  {
    title: 'Machine Learning - Infosys Springboard',
    description: 'Completed a certified course in Machine Learning using Python.',
    image: '/certificates/infosys.png',
  },
  {
    title: 'DSA with C++ - Scaler Academy',
    description: 'Learned Data Structures & Algorithms in-depth using C++.',
    image: '/certificates/dsaScaller.png',
  },
  {
    title: 'PHP & MySQL Development',
    description: 'Learned backend development using PHP and MySQL.',
    image: '/certificates/php.jpg',
  },
  {
    title: 'Web Development - Tech Probe',
    description: 'Attended workshop on HTML, CSS, JS & React for building websites.',
    image: '/certificates/tech-probe.jpg',
  },
  {
    title: 'C Programming Basics - Coding Ninjas',
    description: 'Certified in basic C programming and problem solving.',
    image: '/certificates/c.png',
  }
];

export default function StudiesPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <Section id="studies" className="fade-in-up py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
          My Studies & Certificates
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          These are some academic achievements and certifications I've earned in school and college.
        </p>
      </div>

      <div className="grid grid-cols-1 ml-5 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {studies.map((study, index) => (
          <Card
            key={index}
            onClick={() => setActiveIndex(index === activeIndex ? null : index)}
            className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2 cursor-pointer"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardHeader className="p-0">
              {activeIndex === index ? (
                <Image
                  src={study.image}
                  alt={study.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-b"
                />
              ) : (
                <div className="flex items-center justify-center h-48 bg-muted text-center text-muted-foreground text-sm px-4">
                  Click to view certificate
                </div>
              )}
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle className="text-lg">{study.title}</CardTitle>
              <p className="text-muted-foreground mt-2">{study.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
