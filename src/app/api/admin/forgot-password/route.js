import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import clientPromise from '@/lib/mongodb';

function generateOTP() {
  const length = parseInt(process.env.OTP_LENGTH || '6', 10);
  let otp = '';
  for (let i = 0; i < length; i++) {
    otp += Math.floor(Math.random() * 10).toString();
  }
  return otp;
}

export async function POST(request) {
  try {
    const { email } = await request.json();
    const adminEmail = process.env.ADMIN_USERNAME || '';

    // Only allow the configured admin email
    if (!email || email.trim().toLowerCase() !== adminEmail.trim().toLowerCase()) {
      // Return generic message to avoid leaking which emails are valid
      return NextResponse.json({ success: true });
    }

    const otp = generateOTP();
    const expiryMinutes = parseInt(process.env.OTP_EXPIRY_MINUTES || '5', 10);
    const expiresAt = new Date(Date.now() + expiryMinutes * 60 * 1000);

    // Store OTP in DB (upsert — one active OTP at a time)
    const client = await clientPromise;
    const db = client.db('portfolio');
    await db.collection('admin_otps').updateOne(
      { type: 'forgot_password' },
      {
        $set: {
          type: 'forgot_password',
          otp,
          expiresAt,
          createdAt: new Date(),
          used: false,
        },
      },
      { upsert: true }
    );

    // Send OTP email
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587', 10),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: adminEmail,
      subject: '🔐 Portfolio Admin — Password Reset OTP',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 480px; margin: 0 auto; padding: 32px; background: #0f0f1a; color: #e2e8f0; border-radius: 12px; border: 1px solid #2d3748;">
          <h2 style="color: #a855f7; margin: 0 0 8px;">NeuroGuard Portfolio</h2>
          <h3 style="margin: 0 0 24px; color: #fff;">Password Reset Request</h3>
          <p style="margin: 0 0 16px; color: #94a3b8;">Your one-time password (OTP) for resetting your admin password is:</p>
          <div style="background: #1a1a2e; border: 2px solid #a855f7; border-radius: 12px; padding: 24px; text-align: center; margin-bottom: 24px;">
            <span style="font-size: 48px; font-weight: 900; letter-spacing: 12px; color: #a855f7; font-family: monospace;">${otp}</span>
          </div>
          <p style="margin: 0 0 8px; color: #94a3b8; font-size: 14px;">⏱️ This OTP expires in <strong style="color: #fff;">${expiryMinutes} minutes</strong>.</p>
          <p style="margin: 0; color: #94a3b8; font-size: 14px;">🛡️ If you did not request this, you can safely ignore this email.</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Forgot password error:', error);
    return NextResponse.json({ success: false, error: 'Failed to send OTP.' }, { status: 500 });
  }
}
