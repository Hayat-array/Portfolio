'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FileText, Eye, Download } from 'lucide-react';

import { Section } from './section';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const resumeList = [
  {
    id: 'resume-1',
    title: 'Resume 1',
    subtitle: 'Primary professional resume',
    file: '/resume/Hayat_Ali_Resume.pdf',
  },
  {
    id: 'resume-2',
    title: 'Resume 2',
    subtitle: 'Alternate resume version',
    file: '/resume/Hayat_Ali_Resume2.pdf',
  },
];

export function ResumeSelectorSection() {
  const [selectedResumeId, setSelectedResumeId] = useState(null);

  return (
    <Section id="resumes" className="py-10 md:py-16 fade-in-up bg-secondary/20">
      <div className="text-center mb-8 md:mb-10">
        <h2 className="text-2xl md:text-4xl font-bold font-headline mb-3">
          Choose a Resume
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg px-2">
          Visitors can select any CV version and view it instantly.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {resumeList.map((resume) => {
          const isActive = resume.id === selectedResumeId;
          return (
            <Card
              key={resume.id}
              onClick={() =>
                setSelectedResumeId((prev) => (prev === resume.id ? null : resume.id))
              }
              className={cn(
                'cursor-pointer transition-all duration-300 border-2 overflow-hidden',
                isActive
                  ? 'border-primary shadow-lg shadow-primary/25'
                  : 'border-transparent hover:border-primary/40 hover:-translate-y-1'
              )}
            >
              <CardHeader className="p-0">
                {isActive ? (
                  <iframe
                    title={resume.title}
                    src={resume.file}
                    className="w-full h-[52vh] min-h-[340px] md:min-h-[420px]"
                  />
                ) : (
                  <div className="flex h-40 md:h-52 items-center justify-center bg-primary animated-gradient text-primary-foreground font-semibold text-base md:text-lg">
                    Click to view resume
                  </div>
                )}
              </CardHeader>
              <CardContent className="p-4 md:p-6">
                <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                  <FileText className="h-5 w-5" />
                  {resume.title}
                </CardTitle>
                <p className="text-muted-foreground mt-2">{resume.subtitle}</p>

                {isActive && (
                  <div
                    className="flex flex-col sm:flex-row gap-3 mt-5"
                    onClick={(event) => event.stopPropagation()}
                  >
                    <Button asChild className="w-full sm:w-auto">
                      <Link href={resume.file} target="_blank" rel="noopener noreferrer">
                        <Eye className="mr-2 h-4 w-4" />
                        Open Resume
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full sm:w-auto">
                      <Link href={resume.file} target="_blank" download>
                        <Download className="mr-2 h-4 w-4" />
                        Download Resume
                      </Link>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
