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

function isMailerConfigured() {
  return Boolean(
    process.env.SMTP_HOST &&
      process.env.SMTP_PORT &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS &&
      process.env.ADMIN_NOTIFY_EMAIL
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
    console.warn('Email notification skipped: SMTP or ADMIN_NOTIFY_EMAIL env vars are missing.');
    return { success: false, skipped: true };
  }

  const transporter = getTransporter();
  const targetEmail = process.env.ADMIN_NOTIFY_EMAIL;
  const fromEmail = process.env.SMTP_FROM || process.env.SMTP_USER;
  const receivedAt = new Date(createdAt || new Date()).toLocaleString('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
  });
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message);
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || '';
  const adminInboxUrl = baseUrl ? `${baseUrl.replace(/\/$/, '')}/admin/messages` : '/admin/messages';

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
      <p style="margin: 16px 0 0;">Open your admin inbox: <a href="${adminInboxUrl}">${adminInboxUrl}</a></p>
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
