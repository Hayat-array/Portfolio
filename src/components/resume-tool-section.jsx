'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import Image from 'next/image';
import { Section } from './section';

const achievements = [
  {
    title: 'Adobe India Hackathon - Round 1',
    description: 'Participated in Round 1 Online MCQ Assessment + Coding of Adobe India Hackathon organized by Adobe & Unstop.',
    image: '/certificates/adobe_hackathon.png',
  },
  {
    title: 'Tata Crucible Campus Quiz 2025',
    description: 'Participated in Prelims Level 1 of the Tata Crucible Campus Quiz 2025, demonstrating commitment to national level competitions.',
    image: '/certificates/tata_crucible.png',
  },
  {
    title: 'GitHub & Open Source Workshop - Coding Ninjas',
    description: 'Participated in a hands-on workshop on GitHub & Open Source Contribution conducted by 10X Club- Coding Ninjas.',
    image: '/certificates/coding_ninjas_github.png',
  },
  {
    title: 'Technology Entrepreneurship & Logical Reasoning',
    description: 'Certified in Technology Entrepreneurship (Stanford) and Logical Reasoning (CareerRide) via Cursa platform.',
    image: '/certificates/stanford_cursa.png',
  },
  {
    title: 'Innovicion Hackathon - ICI FEST 25',
    description: 'Participated in the Innovicion Hackathon during ICI FEST 25 at Swami Keshvanand Institute of Technology.',
    image: '/certificates/ici_fest_hackathon.png',
  },
  {
    title: 'DKMS BMST Blood Stem Cell Donor',
    description: 'Registered as a potential blood stem cell donor with DKMS BMST Foundation India to help delete blood cancer.',
    image: '/certificates/dkms_donor.png',
  },
  {
    title: 'R-CAT Advanced Technology Program',
    description: 'Admission and participation in Rajasthan Centre of Advanced Technology (R-CAT) for advanced technical studies.',
    image: '/certificates/rcat_admit.png',
  },
  {
    title: 'Oracle Cloud Infrastructure 2025 Certified Professional',
    description: 'Certified expert in OCI Data Science, covering machine learning model lifecycle, cloud architecture, and optimization.',
    image: '/certificates/oracle_v2.png',
  },
  {
    title: 'Agentforce Champion & Innovator',
    description: 'Mastered Agentforce concepts and implemented autonomous AI agents to drive business outcomes.',
    image: '/certificates/agentforce.jpg',
  },
  {
    title: 'Machine Learning - Infosys Springboard',
    description: 'Completed a comprehensive certified course in Machine Learning using Python and data science frameworks.',
    image: '/certificates/Machine-Learning.png',
  },
  {
    title: 'PHP & MySQL Development',
    description: 'Learned backend development using PHP and MySQL.',
    image: '/certificates/php.jpg',
  },
  {
    title: 'DSA with C++ - Scaler Academy',
    description: 'Learned Data Structures & Algorithms in-depth using C++.',
    image: '/certificates/dsaScaller.png',
  },
  {
    title: 'Coding Ninjas Certificate',
    description: 'Certified in various coding challenges and programming fundamentals through the Coding Ninjas platform.',
    image: '/certificates/code.png',
  },
  {
    title: 'Web Development - Tech Probe',
    description: 'Attended workshop on HTML, CSS, JS & React for building websites.',
    image: '/certificates/Tech_probe.png',
  },
  {
    title: 'C Programming Basics - JECRC',
    description: 'Certified in basic C programming and problem solving.',
    image: '/certificates/c.png',
  },
  {
    title: 'Review Paper Publication',
    description: 'Awarded for publishing a research review paper in a recognized academic journal.',
    image: '/certificates/revid.jpg',
  },
  {
    title: 'Blood Donation Certificate',
    description: 'Recognized for contributing to life-saving blood donation drives at Re Life Blood Center.',
    image: '/certificates/blood.jpg',
  },
  {
    title: 'National Narcotics Control Bureau Certificate',
    description: 'Certified participant in the "Say No to Drugs" national initiative by the Narcotics Control Bureau.',
    image: '/certificates/NBC.png',
  },
  {
    title: 'Say No To Tobacco Awareness',
    description: 'Certified for participating in the government initiative for tobacco awareness and prevention.',
    image: '/certificates/No-tobaco.png',
  },
];

export function ResumeToolSection() {
  // const [activeIndex, setActiveIndex] = useState(null);
  const [activeAchievementIndex, setActiveAchievementIndex] = useState(null);

  return (
    <Section id="resume-tool" className="py-16 fade-in-up">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl font-headline">
          Achievements & Certificates
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
          A passionate self-learner dedicated to turning ideas into real projects through consistent learning and hands-on practice.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 ml-5 md:grid-cols-2 lg:grid-cols-3">
        {achievements.map((achievement, index) => (
          <Card
            key={index}
            onClick={() =>
              setActiveAchievementIndex(index === activeAchievementIndex ? null : index)
            }
            className="overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardHeader className="p-0">
              {activeAchievementIndex === index ? (
                <Image
                  src={achievement.image}
                  alt={achievement.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-auto rounded-b"
                />
              ) : (
                <div className="flex h-48 text-center px-4 items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary hover:bg-primary/90 py-2 animated-gradient text-primary-foreground">
                  Click to view certificate
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2 lucide lucide-arrow-right"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </div>
              )}
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle className="text-lg ">{achievement.title}</CardTitle>
              <p className="mt-2 text-muted-foreground">{achievement.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}