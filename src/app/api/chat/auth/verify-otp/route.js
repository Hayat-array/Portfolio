import { NextResponse } from 'next/server';
import { z } from 'zod';

import { verifyChatAuthOtp } from '@/lib/chat-user-auth';

export const runtime = 'nodejs';

const verifySchema = z.object({
  email: z.string().email().transform((value) => value.trim().toLowerCase()),
  otp: z.string().trim().length(6),
});

export async function POST(request) {
  try {
    const body = await request.json();
    const parsed = verifySchema.safeParse(body);

    if (!parsed.success) {
      const errorMessages = parsed.error.issues.map((issue) => issue.message).join(', ');
      return NextResponse.json({ success: false, error: `Invalid input: ${errorMessages}` }, { status: 400 });
    }

    const result = await verifyChatAuthOtp(parsed.data);
    const status = result.success ? 200 : 400;
    return NextResponse.json(result, { status });
  } catch (error) {
    console.error('Failed to verify chat auth OTP:', error);
    return NextResponse.json(
      { success: false, error: 'Could not verify OTP right now. Please try again.' },
      { status: 500 }
    );
  }
}
