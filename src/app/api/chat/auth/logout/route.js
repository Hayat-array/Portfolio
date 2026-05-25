import { NextResponse } from 'next/server';

import { clearChatAuthenticatedSession } from '@/lib/chat-user-auth';

export const runtime = 'nodejs';

export async function POST() {
  try {
    await clearChatAuthenticatedSession();
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to logout chat user:', error);
    return NextResponse.json(
      { success: false, error: 'Logout failed. Please try again.' },
      { status: 500 }
    );
  }
}
