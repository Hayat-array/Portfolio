'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import Image from 'next/image';
import { Section } from './section';

const achievements = [
   {
    title: 'Machine Learning - Infosys Springboard',
    description: 'Completed a certified course in Machine Learning using Python.',
    image: '/certificates/infosys.png',
  },
  {
    title: 'Machine Learning Certificate From Infosys Spring-Board',
    description: 'Completed a certified course in Machine Learning using Python.',
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
    description: '',
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
    title: 'Review Paper Publication Certificate',
    description: '',
    image: '/certificates/revid.jpg',
  },
  {
    title: 'Blood Donation Certificate',
    description: '',
    image: '/certificates/blood_donation.jpg',
  },
  {
    title: 'Blood Donation Certificate By Re Life Blood Center',
    description: '',
    image: '/certificates/blood.jpg',
  },
  {
    title: 'Logical Reasoning Certificate By CareerRide',
    description: '',
    image: '/certificates/Logical.png',
  },
  {
    title: 'Say No Drugs Certificate From Narcotics Control Bureau',
    description: '',
    image: '/certificates/NBC.png',
  },
  {
    title: 'Say No Tobaco Certificate From Government',
    description: '',
    image: '/certificates/No-tobaco.png',
  },
];

export function ResumeToolSection() {
  // const [activeIndex, setActiveIndex] = useState(null);
  const [activeAchievementIndex, setActiveAchievementIndex] = useState(null);

  return (
    <Section id="resume-tool" className="fade-in-up py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
          Achievements & Certificates
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A passionate self-learner dedicated to turning ideas into real projects through consistent learning and hands-on practice.
        </p>
      </div>

      <div className="grid grid-cols-1 ml-5 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {achievements.map((achievement, index) => (
    <Card
      key={index}
      onClick={() =>
        setActiveAchievementIndex(index === activeAchievementIndex ? null : index)
      }
      className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2 cursor-pointer"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <CardHeader className="p-0">
        {activeAchievementIndex === index ? (
          <Image
            src={achievement.image}
            alt={achievement.title}
            width={600}
            height={400}
            className="w-full h-auto object-cover rounded-b"
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
              className="lucide lucide-arrow-right ml-2"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </div>
        )}
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="text-lg ">{achievement.title}</CardTitle>
        <p className="text-muted-foreground mt-2">{achievement.description}</p>
      </CardContent>
    </Card>
  ))}
</div>
    </Section>
  );
}
{/* <div className="flex h-48 text-center px-4 items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary hover:bg-primary/90 py-2 animated-gradient text-primary-foreground">
                  Click to view certificate
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-2"><path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </div> */}
// 'use client';

// import { useState } from 'react';
// import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
// import { Section } from './section';

// const achievements = [
//   {
//     title: 'Machine Learning Project',
//     image: '/certificates/machine-learning.png',
//   },
//   {
//     title: 'Machine Learning Certificate From Infosys Spring-Board',
//     image: '/certificates/infosys.png',
//   },
//   {
//     title: 'PhpMySql Certificate',
//     image: '/certificates/php.jpg',
//   },
//   {
//     title: 'DSA Mastery Program With C++ Language',
//     image: '/certificates/dsaScaller.png',
//   },
//    {
//     title: 'Coding Ninjas Certificate',
//     image:'/certificates/code.png'
//   },
//   {
//     title: 'College Tech Probe for Web Development Certificate',
//     image: '/certificates/tech-probe.jpg',
//   },
//   {
//     title: 'Basic Understanding in C Language certificate',
//     image: '/certificates/c.png',
//   },
//   {
//     title: 'Review Paper Publication Certificate',
//     image:'/certificates/revid.jpg',
//   },
//    {
//     title: 'Blood Donation Certificate',
//     image:'/certificates/blood_donation.jpg',
//   },
//    {
//     title: 'Blood Donation Certificate By Re Life Blood Center',
//     image:'/certificates/blood.jpg',
//   },
//   {
//     title: 'Logical Reasoning Certificate By CareerRide',
//     image:'/certificates/Logical.png',
//   },
//   ,
//   {
//     title: 'Say No Drugs Certificate From Narcotics Control Bureau',
//     image:'/certificates/NBC.png',
//   },
//   {
//     title: 'Say No Tobaco Certificate From Government',
//     image:'/certificates/No-tobaco.png',
//   }
// ];

// export function ResumeToolSection() {
//   const [activeIndex, setActiveIndex] = useState(null);

//   return (
//     <Section id="resume-tool" className="bg-secondary/20 py-16 fade-in-up">
//       <div className="text-center mb-12">
//         <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
//           Achievements & Certificates
//         </h2>
//         <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//           A passionate self-learner dedicated to turning ideas into real projects through consistent learning and hands-on practice.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
//         {achievements.map((achievement, index) => (
//           <Card
//             key={index}
//             onClick={() => setActiveIndex(index === activeIndex ? null : index)}
//             className="cursor-pointer transition-transform hover:scale-[1.02] shadow-md"
//           >
//             <CardHeader>
//               <CardTitle className="text-xl text-center">{achievement.title}</CardTitle>
//             </CardHeader>
//             <CardContent>
//               {activeIndex === index ? (
//                 <img
//                   src={achievement.image}
//                   alt={achievement.title}
//                   className="w-full rounded-lg shadow-lg transition-all duration-300"
//                 />
//               ) : (
//                 <p className="text-muted-foreground text-center">
//                   Click to view certificate
//                 </p>
//               )}
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </Section>
//   );
// }


// 'use client';

// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import * as z from 'zod';
// import { useState, useTransition } from 'react';

// import { Button } from '@/components/ui/button';
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from '@/components/ui/form';
// import { Textarea } from '@/components/ui/textarea';
// import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
// import { Section } from './section';
// import { adaptResumeAction } from '@/app/actions';
// import { Wand2, Loader2 } from 'lucide-react';
// import { useToast } from '@/hooks/use-toast';

// const resumeToolSchema = z.object({
//   jobDescription: z.string().min(50, 'Please provide a more detailed job description.'),
//   resumeBulletPoints: z.string().min(20, 'Please enter at least one bullet point.'),
//   criteria: z.string().min(10, 'Please provide some criteria for adaptation.'),
// });


// export function ResumeToolSection() {
//   const [isPending, startTransition] = useTransition();
//   const [adaptedPoints, setAdaptedPoints] = useState('');
//   const { toast } = useToast();

//   const form = useForm({
//     resolver: zodResolver(resumeToolSchema),
//     defaultValues: {
//       jobDescription: '',
//       resumeBulletPoints: '',
//       criteria: 'Make it more action-oriented and use keywords from the job description.',
//     },
//   });

//   const onSubmit = (values) => {
//     startTransition(async () => {
//       const result = await adaptResumeAction(values);
//       if (result.error) {
//         toast({
//           title: 'Error',
//           description: result.error,
//           variant: 'destructive',
//         });
//         setAdaptedPoints('');
//       } else if (result.data) {
//         setAdaptedPoints(result.data.adaptedBulletPoints);
//         toast({
//           title: 'Success!',
//           description: 'Your resume points have been adapted.',
//         });
//       }
//     });
//   };

//   return (
//     <Section id="resume-tool" className="bg-secondary/20 fade-in-up">
//       <div className="text-center">
//         <h2 className="text-3xl md:text-4xl font-bold mb-4 font-headline">Acheivements</h2>
//         <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
//           A passionate self-learner dedicated to turning ideas into real projects through consistent learning and hands-on practice.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
//         {/* <Card>
//           <CardHeader>
//             <CardTitle>Input Your Details</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <Form {...form}>
//               <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//                 <FormField
//                   control={form.control}
//                   name="jobDescription"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Job Description</FormLabel>
//                       <FormControl>
//                         <Textarea
//                           placeholder="Paste the job description here..."
//                           rows={8}
//                           {...field}
//                         />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//                 <FormField
//                   control={form.control}
//                   name="resumeBulletPoints"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Your Resume Bullet Points</FormLabel>
//                       <FormControl>
//                         <Textarea
//                           placeholder="- Led a team of 5 developers in the successful launch of a new product."
//                           rows={6}
//                           {...field}
//                         />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//                 <FormField
//                   control={form.control}
//                   name="criteria"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Adaptation Criteria</FormLabel>
//                       <FormControl>
//                         <Textarea
//                           placeholder="e.g., Emphasize leadership skills"
//                           rows={3}
//                           {...field}
//                         />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//                 <Button type="submit" disabled={isPending} className="w-full animated-gradient text-primary-foreground hover:shadow-lg hover:shadow-primary/50 transition-shadow">
//                   {isPending ? (
//                     <>
//                       <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                       Adapting...
//                     </>
//                   ) : (
//                     <>
//                       <Wand2 className="mr-2 h-4 w-4" />
//                       Adapt with AI
//                     </>
//                   )}
//                 </Button>
//               </form>
//             </Form>
//           </CardContent>
//         </Card>
        
//         <Card className="lg:sticky top-24">
//           <CardHeader>
//             <CardTitle>AI-Adapted Bullet Points</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <Textarea
//               readOnly
//               value={adaptedPoints}
//               placeholder="Your AI-generated resume points will appear here..."
//               rows={isPending ? 20 : Math.max(10, adaptedPoints.split('\n').length + 2)}
//               className="bg-muted/50 transition-all duration-300"
//             />
//           </CardContent>
//         </Card> */}
//       </div>
//     </Section>
//   );
// }
{/* <div class="flex justify-center items-center gap-4 fade-in-up" style="animation-delay: 0.4s;"></div> */}