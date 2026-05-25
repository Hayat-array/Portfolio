import { randomUUID, createHash } from 'crypto';
import { cookies } from 'next/headers';

import clientPromise from '@/lib/mongodb';
import { setChatProfile, CHAT_THREAD_COOKIE_NAME } from '@/lib/chat-auth';
import { sendChatAuthOtp } from '@/lib/mailer';

const CHAT_USER_SESSION_COOKIE_NAME = 'portfolio_chat_user_session';
const OTP_EXPIRY_MINUTES = Number.parseInt(process.env.CHAT_OTP_EXPIRY_MINUTES || '10', 10);
const OTP_CLOCK_SKEW_GRACE_SECONDS = 120;
const SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 30;

function cookieOptions(maxAge = SESSION_MAX_AGE_SECONDS) {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge,
  };
}

function hashOtp(email, otp) {
  return createHash('sha256').update(`${String(email).trim().toLowerCase()}:${String(otp)}`).digest('hex');
}

export function normalizeChatEmail(email) {
  return String(email || '').trim().toLowerCase();
}

export function isChatAuthConfigured() {
  return Boolean(
    process.env.SMTP_HOST &&
      process.env.SMTP_PORT &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS
  );
}

function generateOtpCode() {
  return String(Math.floor(100000 + Math.random() * 900000));
}

async function setChatThreadCookie(threadId) {
  const cookieStore = await cookies();
  cookieStore.set(CHAT_THREAD_COOKIE_NAME, threadId, cookieOptions(60 * 60 * 24 * 365));
}

export async function requestChatAuthOtp({ name, email, mode }) {
  const normalizedEmail = normalizeChatEmail(email);
  const normalizedName = String(name || '').trim();

  if (!normalizedEmail) {
    return { success: false, error: 'Email is required.' };
  }

  if (!isChatAuthConfigured()) {
    return {
      success: false,
      error: 'Chat authentication email service is not configured.',
    };
  }

  const client = await clientPromise;
  const db = client.db('portfolio');
  const users = db.collection('chat_users');
  const otpCollection = db.collection('chat_auth_otps');
  const existingUser = await users.findOne({ email: normalizedEmail }, { projection: { _id: 1 } });

  if (mode === 'signup' && existingUser) {
    return { success: false, error: 'This email is already registered. Please login instead.' };
  }

  if (mode === 'signup' && normalizedName.length < 2) {
    return { success: false, error: 'Name must be at least 2 characters for signup.' };
  }

  if (mode === 'login' && !existingUser) {
    return { success: false, error: 'No account found for this email. Please signup first.' };
  }

  const otp = generateOtpCode();
  const now = new Date();
  const expiresAt = new Date(now.getTime() + OTP_EXPIRY_MINUTES * 60 * 1000);

  // Keep only one active OTP per email+mode to avoid confusion from older emails.
  await otpCollection.deleteMany({
    email: normalizedEmail,
    mode,
    usedAt: null,
  });

  await otpCollection.insertOne({
    email: normalizedEmail,
    name: normalizedName || null,
    otpHash: hashOtp(normalizedEmail, otp),
    mode,
    createdAt: now,
    expiresAt,
    usedAt: null,
  });

  await sendChatAuthOtp({
    email: normalizedEmail,
    otp,
    expiresAt,
  });

  return {
    success: true,
    message: `OTP sent to ${normalizedEmail}. It expires in ${OTP_EXPIRY_MINUTES} minutes.`,
  };
}

async function ensureChatUserAndThread({ email, name }) {
  const client = await clientPromise;
  const db = client.db('portfolio');
  const users = db.collection('chat_users');
  const normalizedEmail = normalizeChatEmail(email);
  const normalizedName = String(name || '').trim();

  let user = await users.findOne({ email: normalizedEmail });

  if (!user) {
    const threadId = randomUUID();
    const now = new Date();
    await users.insertOne({
      email: normalizedEmail,
      name: normalizedName || 'Chat User',
      threadId,
      createdAt: now,
      updatedAt: now,
      lastLoginAt: now,
    });
    user = await users.findOne({ email: normalizedEmail });
  }

  if (!user.threadId) {
    const threadId = randomUUID();
    await users.updateOne(
      { _id: user._id },
      {
        $set: {
          threadId,
          updatedAt: new Date(),
        },
      }
    );
    user.threadId = threadId;
  }

  if (normalizedName && normalizedName !== user.name) {
    await users.updateOne(
      { _id: user._id },
      {
        $set: {
          name: normalizedName,
          updatedAt: new Date(),
        },
      }
    );
    user.name = normalizedName;
  }

  await users.updateOne(
    { _id: user._id },
    {
      $set: {
        lastLoginAt: new Date(),
      },
    }
  );

  return user;
}

export async function verifyChatAuthOtp({ email, otp }) {
  const normalizedEmail = normalizeChatEmail(email);
  const normalizedOtp = String(otp || '').trim();

  if (!normalizedEmail || !normalizedOtp) {
    return { success: false, error: 'Email and OTP are required.' };
  }

  const client = await clientPromise;
  const db = client.db('portfolio');

  const verifyTime = new Date();
  const skewAdjustedNow = new Date(verifyTime.getTime() - OTP_CLOCK_SKEW_GRACE_SECONDS * 1000);

  const otpDoc = await db.collection('chat_auth_otps').findOne(
    {
      email: normalizedEmail,
      usedAt: null,
      expiresAt: { $gt: skewAdjustedNow },
    },
    { sort: { createdAt: -1 } }
  );

  if (!otpDoc) {
    return { success: false, error: 'OTP expired or not found. Please request a new one.' };
  }

  const expectedHash = hashOtp(normalizedEmail, normalizedOtp);
  if (otpDoc.otpHash !== expectedHash) {
    return { success: false, error: 'Invalid OTP code.' };
  }

  await db.collection('chat_auth_otps').updateOne(
    { _id: otpDoc._id },
    {
      $set: {
        usedAt: new Date(),
      },
    }
  );

  const user = await ensureChatUserAndThread({
    email: normalizedEmail,
    name: otpDoc.name || 'Chat User',
  });

  const sessionId = randomUUID();
  const sessionCreateTime = new Date();
  const expiresAt = new Date(sessionCreateTime.getTime() + SESSION_MAX_AGE_SECONDS * 1000);

  await db.collection('chat_user_sessions').insertOne({
    sessionId,
    userId: user._id,
    email: user.email,
    createdAt: sessionCreateTime,
    expiresAt,
    revokedAt: null,
  });

  const cookieStore = await cookies();
  cookieStore.set(CHAT_USER_SESSION_COOKIE_NAME, sessionId, cookieOptions());
  await setChatThreadCookie(user.threadId);
  await setChatProfile({ name: user.name, email: user.email });

  return {
    success: true,
    user: {
      name: user.name,
      email: user.email,
      threadId: user.threadId,
    },
  };
}

export async function getChatAuthenticatedUser() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get(CHAT_USER_SESSION_COOKIE_NAME)?.value || '';

  if (!sessionId) {
    return null;
  }

  const client = await clientPromise;
  const db = client.db('portfolio');

  const session = await db.collection('chat_user_sessions').findOne({
    sessionId,
    revokedAt: null,
    expiresAt: { $gt: new Date() },
  });

  if (!session) {
    cookieStore.set(CHAT_USER_SESSION_COOKIE_NAME, '', cookieOptions(0));
    return null;
  }

  const user = await db.collection('chat_users').findOne(
    { _id: session.userId },
    { projection: { _id: 0, email: 1, name: 1, threadId: 1 } }
  );

  if (!user) {
    cookieStore.set(CHAT_USER_SESSION_COOKIE_NAME, '', cookieOptions(0));
    return null;
  }

  if (!user.threadId) {
    const threadId = randomUUID();
    await db.collection('chat_users').updateOne(
      { email: user.email },
      {
        $set: {
          threadId,
          updatedAt: new Date(),
        },
      }
    );
    user.threadId = threadId;
  }

  // Note: Profile cookies (name/email) were already set during OTP verification.
  // This function is read-only and validates the session; it doesn't modify cookies.
  // setChatProfile() cannot be called here from Server Components.

  return user;
}

export async function clearChatAuthenticatedSession() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get(CHAT_USER_SESSION_COOKIE_NAME)?.value || '';

  if (sessionId) {
    try {
      const client = await clientPromise;
      const db = client.db('portfolio');
      await db.collection('chat_user_sessions').updateOne(
        { sessionId },
        {
          $set: {
            revokedAt: new Date(),
          },
        }
      );
    } catch (error) {
      console.error('Failed to revoke chat session:', error);
    }
  }

  cookieStore.set(CHAT_USER_SESSION_COOKIE_NAME, '', cookieOptions(0));
}
