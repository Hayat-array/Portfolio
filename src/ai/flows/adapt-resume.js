'use server';

/**
 * @fileOverview An AI agent that rewrites resume bullet points to better match a job description.
 *
 * - adaptResume - A function that handles the resume adaptation process.
 * - AdaptResumeInput - The input type for the adaptResume function.
 * - AdaptResumeOutput - The return type for the adaptResume function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AdaptResumeInputSchema = z.object({
  jobDescription: z
    .string()
    .describe('The job description to tailor the resume to.'),
  resumeBulletPoints: z
    .string()
    .describe('The bullet points from the resume to rewrite.'),
  criteria: z
    .string()
    .describe('The criteria to use when rewriting the bullet points.'),
});


const AdaptResumeOutputSchema = z.object({
  adaptedBulletPoints: z
    .string()
    .describe('The rewritten bullet points, tailored to the job description.'),
});


export async function adaptResume(input) {
  return adaptResumeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'adaptResumePrompt',
  input: {schema: AdaptResumeInputSchema},
  output: {schema: AdaptResumeOutputSchema},
  prompt: `You are an expert resume writer. You will rewrite the given resume bullet points to better match the job description, based on the criteria provided.

Job Description: {{{jobDescription}}}

Resume Bullet Points: {{{resumeBulletPoints}}}

Criteria: {{{criteria}}}

Rewritten Bullet Points:`,
});

const adaptResumeFlow = ai.defineFlow(
  {
    name: 'adaptResumeFlow',
    inputSchema: AdaptResumeInputSchema,
    outputSchema: AdaptResumeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output;
  }
);

const GenerateResumeInputSchema = z.object({
  // TODO: Add detailed fields for user information (e.g., name, contact, education, work experience, skills, projects)
  userDetails: z.any().describe('Detailed information about the user.'),
  experienceLevel: z.enum([' fresher', 'intermediate', 'advanced']).describe('The desired experience level for the resume.'),
});

const GenerateResumeOutputSchema = z.object({
  generatedResume: z.string().describe('The generated resume content.'),
});

const generateResumeFlow = ai.defineFlow(
  {
    name: 'generateResumeFlow',
    inputSchema: GenerateResumeInputSchema,
    outputSchema: GenerateResumeOutputSchema,
  },
  async (input) => {
    // TODO: Add code here to call the Gemini API to generate the resume
    // Use the input.userDetails and input.experienceLevel to craft the prompt for the Gemini API.

    // Placeholder for the generated resume
    const generatedResume = "Generated resume content will go here.";

    return { generatedResume };
  }
);

export { generateResumeFlow };
