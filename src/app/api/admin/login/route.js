import { NextResponse } from 'next/server';

import { ADMIN_COOKIE_NAME, isValidAdminCredentials } from '@/lib/admin-auth';

export async function POST(request) {
  const formData = await request.formData();
  const username = String(formData.get('username') || '').trim();
  const password = String(formData.get('password') || '');

  if (!(await isValidAdminCredentials(username, password))) {
    return NextResponse.redirect(new URL('/admin/login?error=1', request.url));
  }

  const token = process.env.ADMIN_SESSION_TOKEN || '';

  if (!token) {
    return NextResponse.redirect(new URL('/admin/login?error=2', request.url));
  }

  const response = NextResponse.redirect(new URL('/admin/messages', request.url));
  response.cookies.set(ADMIN_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  });

  return response;
}
