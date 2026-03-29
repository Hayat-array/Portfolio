import { cookies } from 'next/headers';
import clientPromise from './mongodb';

export const ADMIN_COOKIE_NAME = 'portfolio_admin_session';

function getSessionToken() {
  return process.env.ADMIN_SESSION_TOKEN || '';
}

export async function isValidAdminCredentials(username, password) {
  const expectedUsername = process.env.ADMIN_USERNAME || '';
  
  // Try to get password from DB first (if reset)
  let expectedPassword = process.env.ADMIN_PASSWORD || '';
  try {
    const client = await clientPromise;
    const db = client.db('portfolio');
    const dbSetting = await db.collection('admin_settings').findOne({ key: 'admin_password' });
    if (dbSetting && dbSetting.value) {
      expectedPassword = dbSetting.value;
    }
  } catch (error) {
    console.error('Error fetching admin password from DB:', error);
  }

  if (!expectedUsername || !expectedPassword) {
    return false;
  }

  return username === expectedUsername && password === expectedPassword;
}

export async function isAdminAuthenticated() {
  const cookieStore = await cookies();
  const expectedToken = getSessionToken();
  const actualToken = cookieStore.get(ADMIN_COOKIE_NAME)?.value || '';

  if (!expectedToken) {
    return false;
  }

  return actualToken === expectedToken;
}

export async function setAdminSession() {
  const expectedToken = getSessionToken();

  if (!expectedToken) {
    throw new Error('ADMIN_SESSION_TOKEN is not configured.');
  }

  const cookieStore = await cookies();
  cookieStore.set(ADMIN_COOKIE_NAME, expectedToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function clearAdminSession() {
  const cookieStore = await cookies();
  cookieStore.set(ADMIN_COOKIE_NAME, '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 0,
  });
}
