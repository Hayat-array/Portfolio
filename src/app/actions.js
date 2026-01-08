'use server';

import { z } from 'zod';
import { adaptResume } from '@/ai/flows/adapt-resume';
import clientPromise from '@/lib/mongodb';

export async function adaptResumeAction(input) {
  try {
    const result = await adaptResume(input);
    return { data: result };
  } catch (error) {
    console.error('Error adapting resume:', error);
    return { error: 'An unexpected error occurred. Please try again later.' };
  }
}

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export async function submitContactForm(values) {
  const parsed = contactFormSchema.safeParse(values);

  if (!parsed.success) {
    const errorMessages = parsed.error.issues.map((issue) => issue.message).join(', ');
    return { success: false, error: `Invalid input: ${errorMessages}` };
  }

  try {
    const client = await clientPromise;
    const db = client.db('portfolio');
    await db.collection('contacts').insertOne({
      ...parsed.data,
      createdAt: new Date(),
    });
    return { success: true };
  } catch (e) {
    console.error('Failed to save contact message:', e);
    return { success: false, error: 'Failed to save your message. Please try again later.' };
  }
}

// import { connectToDB } from '@/lib/mongoose';
// import Contact from '@/lib/models/contact';

// export async function submitContactForm(data) {
//   try {
//     await connectToDB();
//     await Contact.create(data);
//     return { success: true };
//   } catch (error) {
//     console.error("Error submitting contact form:", error);
//     return { success: false, error: 'Failed to send message. Please try again.' };
//   }
// }
