import nodemailer from 'nodemailer';

let cachedTransporter;

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function parsePort(value, fallback) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function isSmtpConfigured() {
  return Boolean(
    process.env.SMTP_HOST &&
      process.env.SMTP_PORT &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS
  );
}

function isMailerConfigured() {
  return Boolean(
    isSmtpConfigured() &&
      (process.env.ADMIN_NOTIFY_EMAIL || process.env.ADMIN_EMAIL || process.env.CONTACT_EMAIL || process.env.SMTP_USER || 'Hayatali123786@gmail.com')
  );
}

function getTransporter() {
  if (cachedTransporter) {
    return cachedTransporter;
  }

  cachedTransporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parsePort(process.env.SMTP_PORT, 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  return cachedTransporter;
}

export async function sendAdminNewMessageNotification({ name, email, message, createdAt }) {
  if (!isMailerConfigured()) {
    console.warn('Email notification skipped: SMTP settings or an admin recipient email are missing.');
    return { success: false, skipped: true };
  }

  const transporter = getTransporter();
  const targetEmail =
    process.env.ADMIN_NOTIFY_EMAIL ||
    process.env.ADMIN_EMAIL ||
    process.env.CONTACT_EMAIL ||
    process.env.SMTP_USER ||
    'Hayatali123786@gmail.com';
  const fromEmail = process.env.SMTP_FROM || process.env.SMTP_USER;
  const receivedAt = new Date(createdAt || new Date()).toLocaleString('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
  });
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message);
  const safeTargetEmail = escapeHtml(targetEmail);

  const subject = `📩 New portfolio message from ${name}`;
  const text = [
    'You received a new message from your portfolio contact form.',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Received: ${receivedAt}`,
    '',
    'Message:',
    message,
  ].join('\n');

  const html = `
    <div style="font-family: Inter, Arial, sans-serif; line-height: 1.6; color: #111827;">
      <h2 style="margin: 0 0 12px;">📩 New Portfolio Message</h2>
      <p style="margin: 0 0 12px;">Someone sent you a new message from your contact form.</p>
      <table style="border-collapse: collapse; margin-bottom: 16px;">
        <tr>
          <td style="padding: 4px 8px 4px 0;"><strong>Name:</strong></td>
          <td style="padding: 4px 0;">${safeName}</td>
        </tr>
        <tr>
          <td style="padding: 4px 8px 4px 0;"><strong>Email:</strong></td>
          <td style="padding: 4px 0;">${safeEmail}</td>
        </tr>
        <tr>
          <td style="padding: 4px 8px 4px 0;"><strong>Received:</strong></td>
          <td style="padding: 4px 0;">${receivedAt}</td>
        </tr>
      </table>
      <p style="margin: 0 0 8px;"><strong>Message:</strong></p>
      <div style="padding: 12px; border: 1px solid #e5e7eb; border-radius: 8px; background: #f9fafb; white-space: pre-wrap;">${safeMessage}</div>
      <p style="margin: 16px 0 0;">Delivered to: <a href="mailto:${safeTargetEmail}">${safeTargetEmail}</a></p>
    </div>
  `;

  await transporter.sendMail({
    from: fromEmail,
    to: targetEmail,
    replyTo: email,
    subject,
    text,
    html,
  });

  return { success: true };
}

export async function sendChatAuthOtp({ email, otp, expiresAt }) {
  if (!isSmtpConfigured()) {
    console.warn('Chat auth OTP email skipped: SMTP env vars are missing.');
    return { success: false, skipped: true };
  }

  const transporter = getTransporter();
  const fromEmail = process.env.SMTP_FROM || process.env.SMTP_USER;
  const safeEmail = escapeHtml(email);
  const safeOtp = escapeHtml(otp);
  const expiresText = new Date(expiresAt || new Date()).toLocaleString('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
  });

  const subject = 'Your Private Chat Login Code';
  const text = [
    'Use this code to complete your private chat login/signup:',
    '',
    `OTP: ${otp}`,
    `Expires: ${expiresText}`,
    '',
    'If you did not request this code, you can ignore this email.',
  ].join('\n');

  const html = `
    <div style="font-family: Inter, Arial, sans-serif; line-height: 1.6; color: #111827;">
      <h2 style="margin: 0 0 12px;">Private Chat Verification</h2>
      <p style="margin: 0 0 12px;">Use the OTP below to continue your private chat authentication.</p>
      <p style="margin: 0 0 12px;"><strong>Email:</strong> ${safeEmail}</p>
      <div style="display: inline-block; padding: 10px 14px; border-radius: 8px; background: #111827; color: #ffffff; font-size: 22px; letter-spacing: 3px; font-weight: 700;">
        ${safeOtp}
      </div>
      <p style="margin: 12px 0 0;">Expires at: ${expiresText}</p>
      <p style="margin: 12px 0 0; color: #6b7280;">If you did not request this code, you can ignore this email.</p>
    </div>
  `;

  await transporter.sendMail({
    from: fromEmail,
    to: email,
    subject,
    text,
    html,
  });

  return { success: true };
}
