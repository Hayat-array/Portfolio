'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { adaptResume } from '@/ai/flows/adapt-resume';
import clientPromise from '@/lib/mongodb';
import { sendAdminNewMessageNotification } from '@/lib/mailer';
import { isAdminAuthenticated } from '@/lib/admin-auth';
import {
  getChatProfileFromCookies,
  getChatThreadId,
  getOrCreateChatThreadId,
  setChatProfile,
} from '@/lib/chat-auth';

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
  email: z.string().email({ message: "Please enter a valid email address." }).transform((value) => value.trim().toLowerCase()),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const userChatMessageSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }).transform((value) => value.trim().toLowerCase()),
  message: z.string().min(1, { message: 'Message is required.' }).max(2000, { message: 'Message is too long.' }),
});

const adminReplySchema = z.object({
  threadId: z.string().min(1, { message: 'Invalid thread.' }),
  message: z.string().min(1, { message: 'Reply is required.' }).max(2000, { message: 'Reply is too long.' }),
});

async function insertChatMessage(db, payload) {
  await db.collection('chat_messages').insertOne({
    threadId: payload.threadId,
    name: payload.name,
    email: payload.email,
    message: payload.message,
    sender: payload.sender,
    createdAt: payload.createdAt || new Date(),
    isReadByAdmin: payload.sender === 'admin',
    isReadByUser: payload.sender === 'user',
    sourceContactId: payload.sourceContactId || null,
  });
}

async function backfillLegacyContactsToChat(db) {
  const legacyContacts = await db
    .collection('contacts')
    .find({ migratedToChat: { $ne: true } })
    .sort({ createdAt: 1 })
    .toArray();

  for (const contact of legacyContacts) {
    const sourceContactId = contact._id.toString();
    const existing = await db.collection('chat_messages').findOne(
      { sourceContactId },
      { projection: { _id: 1 } }
    );

    const threadId = contact.threadId || `legacy-${sourceContactId}`;

    if (!existing) {
      await insertChatMessage(db, {
        threadId,
        name: contact.name || 'Visitor',
        email: contact.email || '',
        message: contact.message || '',
        sender: 'user',
        createdAt: contact.createdAt || new Date(),
        sourceContactId,
      });
    }

    await db.collection('contacts').updateOne(
      { _id: contact._id },
      {
        $set: {
          migratedToChat: true,
          threadId,
        },
      }
    );
  }
}

async function attachLegacyContactsByEmailToThread(db, threadId, email) {
  if (!email) {
    return;
  }

  const normalizedEmail = String(email).trim().toLowerCase();

  const legacyContacts = await db
    .collection('contacts')
    .find({
      email: { $regex: `^${normalizedEmail.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}$`, $options: 'i' },
      migratedToChat: { $ne: true },
    })
    .sort({ createdAt: 1 })
    .toArray();

  for (const contact of legacyContacts) {
    const sourceContactId = contact._id.toString();
    const existing = await db.collection('chat_messages').findOne(
      { sourceContactId },
      { projection: { _id: 1 } }
    );

    if (!existing) {
      await insertChatMessage(db, {
        threadId,
        name: contact.name || 'Visitor',
        email: contact.email || '',
        message: contact.message || '',
        sender: 'user',
        createdAt: contact.createdAt || new Date(),
        sourceContactId,
      });
    }

    await db.collection('contacts').updateOne(
      { _id: contact._id },
      {
        $set: {
          migratedToChat: true,
          threadId,
        },
      }
    );
  }
}

export async function submitContactForm(values) {
  const parsed = contactFormSchema.safeParse(values);

  if (!parsed.success) {
    const errorMessages = parsed.error.issues.map((issue) => issue.message).join(', ');
    return { success: false, error: `Invalid input: ${errorMessages}` };
  }

  try {
    const client = await clientPromise;
    const db = client.db('portfolio');
    const createdAt = new Date();
    let threadId = null;

    try {
      threadId = await getOrCreateChatThreadId();
      await setChatProfile({
        name: parsed.data.name,
        email: parsed.data.email,
      });
    } catch (cookieError) {
      console.warn('Contact message saved without chat session binding:', cookieError?.message || cookieError);
    }

    await db.collection('contacts').insertOne({
      ...parsed.data,
      threadId,
      isRead: false,
      replied: false,
      repliedAt: null,
      createdAt,
    });

    if (threadId) {
      await insertChatMessage(db, {
        threadId,
        ...parsed.data,
        sender: 'user',
        createdAt,
      });
    }

    try {
      await sendAdminNewMessageNotification({
        ...parsed.data,
        createdAt,
      });
    } catch (mailError) {
      console.error('Message saved, but email notification failed:', mailError);
    }

    revalidatePath('/admin/messages');
    revalidatePath('/chat');
    return { success: true };
  } catch (e) {
    console.error('Failed to save contact message:', e);
    return { success: false, error: 'Failed to save your message. Please try again later.' };
  }
}

export async function sendUserChatMessage(formData) {
  const parsed = userChatMessageSchema.safeParse({
    name: String(formData.get('name') || '').trim(),
    email: String(formData.get('email') || '').trim(),
    message: String(formData.get('message') || '').trim(),
  });

  if (!parsed.success) {
    const errorMessages = parsed.error.issues.map((issue) => issue.message).join(', ');
    return { success: false, error: `Invalid input: ${errorMessages}` };
  }

  if (!(await isAdminAuthenticated())) {
    try {
      const client = await clientPromise;
      const db = client.db('portfolio');
      const threadId = await getOrCreateChatThreadId();
      const createdAt = new Date();
      await setChatProfile({
        name: parsed.data.name,
        email: parsed.data.email,
      });

      await attachLegacyContactsByEmailToThread(db, threadId, parsed.data.email);

      await insertChatMessage(db, {
        threadId,
        ...parsed.data,
        sender: 'user',
        createdAt,
      });

      try {
        await sendAdminNewMessageNotification({
          ...parsed.data,
          createdAt,
        });
      } catch (mailError) {
        console.error('Chat message saved, but email notification failed:', mailError);
      }

      revalidatePath('/chat');
      revalidatePath('/admin/messages');
      return { success: true };
    } catch (error) {
      console.error('Failed to send chat message:', error);
      return { success: false, error: 'Could not send your message right now.' };
    }
  }

  return { success: false, error: 'Unauthorized route for user chat.' };
}

export async function getUserChatProfile() {
  try {
    const threadId = await getChatThreadId();
    const cookieProfile = await getChatProfileFromCookies();

    if (!threadId) {
      return cookieProfile;
    }

    const client = await clientPromise;
    const db = client.db('portfolio');

    if (cookieProfile.email) {
      await attachLegacyContactsByEmailToThread(db, threadId, cookieProfile.email);
    }

    const latestUserMessage = await db.collection('chat_messages').findOne(
      { threadId, sender: 'user' },
      {
        sort: { createdAt: -1 },
        projection: { _id: 0, name: 1, email: 1 },
      }
    );

    return {
      name: latestUserMessage?.name || cookieProfile.name || '',
      email: latestUserMessage?.email || cookieProfile.email || '',
    };
  } catch {
    return { name: '', email: '' };
  }
}

export async function getUserChatMessages() {
  try {
    const threadId = await getChatThreadId();
    if (!threadId) {
      return [];
    }

    const client = await clientPromise;
    const db = client.db('portfolio');
    const cookieProfile = await getChatProfileFromCookies();

    await backfillLegacyContactsToChat(db);
    if (cookieProfile.email) {
      await attachLegacyContactsByEmailToThread(db, threadId, cookieProfile.email);
    }

    await db.collection('chat_messages').updateMany(
      { threadId, sender: 'admin', isReadByUser: false },
      { $set: { isReadByUser: true } }
    );

    const messages = await db
      .collection('chat_messages')
      .find({ threadId })
      .sort({ createdAt: 1 })
      .toArray();

    return messages.map((message) => ({
      _id: message._id.toString(),
      threadId: message.threadId,
      name: message.name,
      email: message.email,
      message: message.message,
      sender: message.sender,
      createdAt: message.createdAt ? new Date(message.createdAt).toISOString() : null,
    }));
  } catch (error) {
    console.error('Failed to fetch user chat messages:', error);
    return [];
  }
}

export async function getAdminChatThreads() {
  if (!(await isAdminAuthenticated())) {
    return [];
  }

  try {
    const client = await clientPromise;
    const db = client.db('portfolio');
    await backfillLegacyContactsToChat(db);
    const messages = await db
      .collection('chat_messages')
      .find({})
      .sort({ createdAt: 1 })
      .toArray();

    const threadsMap = new Map();

    for (const message of messages) {
      const threadId = message.threadId;
      if (!threadId) {
        continue;
      }

      if (!threadsMap.has(threadId)) {
        threadsMap.set(threadId, {
          threadId,
          name: message.name || 'Visitor',
          email: message.email || '',
          unreadForAdmin: 0,
          lastMessageAt: null,
          messages: [],
        });
      }

      const thread = threadsMap.get(threadId);
      thread.name = message.name || thread.name;
      thread.email = message.email || thread.email;
      thread.lastMessageAt = message.createdAt;

      if (message.sender === 'user' && !message.isReadByAdmin) {
        thread.unreadForAdmin += 1;
      }

      thread.messages.push({
        _id: message._id.toString(),
        sender: message.sender,
        message: message.message,
        name: message.name,
        email: message.email,
        createdAt: message.createdAt ? new Date(message.createdAt).toISOString() : null,
      });
    }

    return Array.from(threadsMap.values()).sort((a, b) => {
      const aTime = a.lastMessageAt ? new Date(a.lastMessageAt).getTime() : 0;
      const bTime = b.lastMessageAt ? new Date(b.lastMessageAt).getTime() : 0;
      return bTime - aTime;
    });
  } catch (error) {
    console.error('Failed to fetch admin chat threads:', error);
    return [];
  }
}

export async function markThreadAsReadByAdmin(threadId) {
  if (!(await isAdminAuthenticated())) {
    return { success: false, error: 'Unauthorized' };
  }

  try {
    const client = await clientPromise;
    const db = client.db('portfolio');
    await db.collection('chat_messages').updateMany(
      { threadId, sender: 'user', isReadByAdmin: false },
      {
        $set: {
          isReadByAdmin: true,
        },
      }
    );
    revalidatePath('/admin/messages');
    return { success: true };
  } catch (error) {
    console.error('Failed to mark thread as read:', error);
    return { success: false, error: 'Could not mark this thread as read.' };
  }
}

export async function sendAdminChatReply(formData) {
  if (!(await isAdminAuthenticated())) {
    return { success: false, error: 'Unauthorized' };
  }

  const parsed = adminReplySchema.safeParse({
    threadId: String(formData.get('threadId') || '').trim(),
    message: String(formData.get('message') || '').trim(),
  });

  if (!parsed.success) {
    const errorMessages = parsed.error.issues.map((issue) => issue.message).join(', ');
    return { success: false, error: `Invalid input: ${errorMessages}` };
  }

  try {
    const client = await clientPromise;
    const db = client.db('portfolio');
    const latestThreadMessage = await db.collection('chat_messages').findOne(
      { threadId: parsed.data.threadId },
      {
        sort: { createdAt: -1 },
        projection: { _id: 0, name: 1, email: 1 },
      }
    );

    await insertChatMessage(db, {
      threadId: parsed.data.threadId,
      name: latestThreadMessage?.name || 'Admin',
      email: latestThreadMessage?.email || '',
      message: parsed.data.message,
      sender: 'admin',
      createdAt: new Date(),
    });

    await db.collection('chat_messages').updateMany(
      { threadId: parsed.data.threadId, sender: 'user', isReadByAdmin: false },
      { $set: { isReadByAdmin: true } }
    );

    revalidatePath('/admin/messages');
    revalidatePath('/chat');
    return { success: true };
  } catch (error) {
    console.error('Failed to send admin reply:', error);
    return { success: false, error: 'Could not send admin reply.' };
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
