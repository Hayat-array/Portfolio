'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import Image from 'next/image';
import { Section } from './section';

const studies = [
  {
    title: 'Agentblazer Champion - Salesforce',
    description: 'Salesforce Agentblazer Champion certification awarded for expertise in AI agents and the Agentforce platform.',
    image: '/certificates/agentforce.jpg',
    pdf: '/certificates/Agentblazer_Certificate_Hayat.pdf',
  },
  {
    title: 'Oracle Cloud Infrastructure Certificate',
    description: 'Oracle certification demonstrating proficiency in cloud infrastructure, AI foundations, and cloud services.',
    image: '/certificates/oracle_v2.png',
    pdf: '/certificates/oracle_certificate.pdf',
  },
  {
    title: 'Data Science - BCG (Forage)',
    description: 'Completed the BCG Data Science virtual experience program on Forage, covering data analysis, ML, and business insight generation.',
    image: '/certificates/data_science_from_bcg.png',
    pdf: '/certificates/data_science_from_bcg.pdf',
  },
  {
    title: 'B.Tech 2nd Year 4th Semester Result',
    description: 'RTU Kota IV Semester Exam 2025 — Computer Science & Engg. SGPA: 8.40, CGPA: 9.03. Subjects include DBMS, TOC, Computer Networks, Microprocessor & more.',
    image: '/certificates/rtu_4th_sem_result.png',
  },
  {
    title: 'B.Tech 2nd Year 3rd Semester Result',
    description: 'Academic record for the third semester, showcasing foundational engineering subjects.',
    image: '/certificates/tech-probe.jpg',
  },
  {
    title: 'B.Tech 1st Year 2nd Semester Result',
    description: 'Successful completion of the second semester in the bachelor of technology journey.',
    image: '/study/RTU_2nd_Sem_Result.png',
  },
  {
    title: 'B.Tech 1st Year 1st Semester Result',
    description: 'Initial academic performance and foundation in engineering studies.',
    image: '/study/Rtu_1st.jpg',
  },
  {
    title: 'JEE Main Score Card',
    description: 'Rank and performance in the Joint Entrance Examination for engineering admissions.',
    image: '/study/jeemain.png',
  },
  {
    title: '12th Grade - Rajasthan Board Education',
    description: 'Higher Secondary education certificate from the Rajasthan Board of Secondary Education.',
    image: '/study/12th.png',
  },
  {
    title: '10th Grade - Rajasthan Board Education',
    description: 'Secondary education certificate from the Rajasthan Board of Secondary Education.',
    image: '/study/10th.png',
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

export function StudiesSection() {
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
                <div>
                  <Image
                    src={study.image}
                    alt={study.title}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover rounded-b"
                  />
                  {study.pdf && (
                    <a
                      href={study.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center justify-center gap-2 w-full py-2 text-sm font-semibold bg-primary/10 hover:bg-primary/20 text-primary border-t border-primary/20 transition-colors"
                    >
                      📄 View PDF Certificate
                    </a>
                  )}
                </div>
              ) : (
                <div className="flex h-48 text-center px-4 items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary hover:bg-primary/90 py-2 animated-gradient text-primary-foreground">
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
