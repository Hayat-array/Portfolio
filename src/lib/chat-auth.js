import { randomUUID } from 'crypto';
import { cookies } from 'next/headers';

export const CHAT_THREAD_COOKIE_NAME = 'portfolio_chat_thread';
const CHAT_NAME_COOKIE_NAME = 'portfolio_chat_name';
const CHAT_EMAIL_COOKIE_NAME = 'portfolio_chat_email';

function cookieOptions() {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
  };
}

export async function getChatThreadId() {
  const cookieStore = await cookies();
  return cookieStore.get(CHAT_THREAD_COOKIE_NAME)?.value || null;
}

export async function getOrCreateChatThreadId() {
  const cookieStore = await cookies();
  let threadId = cookieStore.get(CHAT_THREAD_COOKIE_NAME)?.value || null;

  if (!threadId) {
    threadId = randomUUID();
    cookieStore.set(CHAT_THREAD_COOKIE_NAME, threadId, cookieOptions());
  }

  return threadId;
}

export async function setChatProfile({ name, email }) {
  const cookieStore = await cookies();

  if (name) {
    cookieStore.set(CHAT_NAME_COOKIE_NAME, String(name).trim(), cookieOptions());
  }

  if (email) {
    cookieStore.set(CHAT_EMAIL_COOKIE_NAME, String(email).trim().toLowerCase(), cookieOptions());
  }
}

export async function getChatProfileFromCookies() {
  const cookieStore = await cookies();
  return {
    name: cookieStore.get(CHAT_NAME_COOKIE_NAME)?.value || '',
    email: cookieStore.get(CHAT_EMAIL_COOKIE_NAME)?.value || '',
  };
}
