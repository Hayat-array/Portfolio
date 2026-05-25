import { NextResponse } from 'next/server';
import { z } from 'zod';

import { requestChatAuthOtp } from '@/lib/chat-user-auth';

export const runtime = 'nodejs';

const requestSchema = z.object({
  mode: z.enum(['login', 'signup']),
  name: z.string().trim().max(80).optional().default(''),
  email: z.string().email().transform((value) => value.trim().toLowerCase()),
});

export async function POST(request) {
  try {
    const body = await request.json();
    const parsed = requestSchema.safeParse(body);

    if (!parsed.success) {
      const errorMessages = parsed.error.issues.map((issue) => issue.message).join(', ');
      return NextResponse.json({ success: false, error: `Invalid input: ${errorMessages}` }, { status: 400 });
    }

    const result = await requestChatAuthOtp(parsed.data);
    const status = result.success ? 200 : 400;
    return NextResponse.json(result, { status });
  } catch (error) {
    console.error('Failed to request chat auth OTP:', error);

    if (error?.code === 'ECONNREFUSED' || String(error?.syscall || '').includes('querySrv')) {
      return NextResponse.json(
        {
          success: false,
          error: 'Database connection failed (MongoDB DNS/network). Check MONGODB_URI. If SRV DNS is blocked, set MONGODB_URI_FALLBACK (direct URI) and retry.',
        },
        { status: 503 }
      );
    }

    return NextResponse.json(
      { success: false, error: 'Could not send OTP right now. Please try again.' },
      { status: 500 }
    );
  }
}
