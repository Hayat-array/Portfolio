'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Section } from './section';

const achievements = [
  {
    title: 'Machine Learning Project',
    image: '/certificates/ml-certificate.png',
  },
  {
    title: 'Banking System Project',
    image: '/certificates/banking-certificate.png',
  },
  {
    title: 'Web Development Bootcamp',
    image: '/certificates/webdev-certificate.png',
  },
  {
    title: 'React.js Workshop',
    image: '/certificates/react-workshop.png',
  },
  {
    title: 'DSA Mastery Program',
    image: '/certificates/dsa-certificate.png',
  },
  {
    title: 'Hackathon Winner',
    image: '/certificates/hackathon-winner.png',
  },
];

export function ResumeToolSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <Section id="resume-tool" className="bg-secondary/20 py-16 fade-in-up">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
          Achievements
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A passionate self-learner dedicated to turning ideas into real projects through consistent learning and hands-on practice.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {achievements.map((achievement, index) => (
          <Card
            key={index}
            onClick={() => setActiveIndex(index === activeIndex ? null : index)}
            className="cursor-pointer transition-transform hover:scale-[1.02] shadow-md"
          >
            <CardHeader>
              <CardTitle className="text-xl text-center">{achievement.title}</CardTitle>
            </CardHeader>
            <CardContent>
              {activeIndex === index ? (
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full rounded-lg shadow-lg transition-all duration-300"
                />
              ) : (
                <p className="text-muted-foreground text-center">
                  Click to view certificate
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
