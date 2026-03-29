import { randomUUID } from 'crypto';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { z } from 'zod';

import clientPromise from '@/lib/mongodb';
import { sendAdminNewMessageNotification } from '@/lib/mailer';

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email().transform((value) => value.trim().toLowerCase()),
  message: z.string().min(10),
});

export async function POST(request) {
  try {
    const body = await request.json();
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      const errorMessages = parsed.error.issues.map((issue) => issue.message).join(', ');
      return NextResponse.json({ success: false, error: `Invalid input: ${errorMessages}` }, { status: 400 });
    }

    const cookieStore = await cookies();
    let threadId = cookieStore.get('portfolio_chat_thread')?.value || null;

    if (!threadId) {
      threadId = randomUUID();
      const cookieOptions = {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24 * 365,
      };
      cookieStore.set('portfolio_chat_thread', threadId, cookieOptions);
      cookieStore.set('portfolio_chat_name', parsed.data.name, cookieOptions);
      cookieStore.set('portfolio_chat_email', parsed.data.email, cookieOptions);
    }

    const client = await clientPromise;
    const db = client.db('portfolio');
    const createdAt = new Date();

    await db.collection('contacts').insertOne({
      ...parsed.data,
      threadId,
      isRead: false,
      replied: false,
      repliedAt: null,
      createdAt,
    });

    await db.collection('chat_messages').insertOne({
      threadId,
      name: parsed.data.name,
      email: parsed.data.email,
      message: parsed.data.message,
      sender: 'user',
      createdAt,
      isReadByAdmin: false,
      isReadByUser: true,
      sourceContactId: null,
    });

    try {
      await sendAdminNewMessageNotification({
        ...parsed.data,
        createdAt,
      });
    } catch (error) {
      console.error('Message saved, but email notification failed:', error);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to submit contact form:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to save your message. Please try again later.' },
      { status: 500 }
    );
  }
}
