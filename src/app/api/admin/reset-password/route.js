import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { ADMIN_COOKIE_NAME } from '@/lib/admin-auth';

export async function POST(request) {
  try {
    const { otp, newPassword } = await request.json();

    if (!otp || !newPassword || newPassword.length < 8) {
      return NextResponse.json(
        { success: false, error: 'Invalid OTP or password too short (min 8 chars).' },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db('portfolio');

    // Find the OTP record
    const record = await db.collection('admin_otps').findOne({ type: 'forgot_password' });

    if (!record || record.used) {
      return NextResponse.json({ success: false, error: 'OTP not found or already used.' }, { status: 400 });
    }

    if (new Date() > new Date(record.expiresAt)) {
      return NextResponse.json({ success: false, error: 'OTP has expired. Please request a new one.' }, { status: 400 });
    }

    if (record.otp !== otp.trim()) {
      return NextResponse.json({ success: false, error: 'Incorrect OTP.' }, { status: 400 });
    }

    // Mark OTP as used
    await db.collection('admin_otps').updateOne(
      { type: 'forgot_password' },
      { $set: { used: true } }
    );

    // Store the new password in DB (so it takes effect without redeploying)
    await db.collection('admin_settings').updateOne(
      { key: 'admin_password' },
      { $set: { key: 'admin_password', value: newPassword, updatedAt: new Date() } },
      { upsert: true }
    );

    // Auto-login: set session cookie
    const token = process.env.ADMIN_SESSION_TOKEN || '';
    const response = NextResponse.json({ success: true, redirect: '/admin/messages' });

    if (token) {
      response.cookies.set(ADMIN_COOKIE_NAME, token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24 * 7,
      });
    }

    return response;
  } catch (error) {
    console.error('Reset password error:', error);
    return NextResponse.json({ success: false, error: 'Server error. Try again.' }, { status: 500 });
  }
}
