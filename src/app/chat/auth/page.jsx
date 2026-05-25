import { redirect } from 'next/navigation';

import { ChatAuthForm } from '@/components/chat-auth-form';
import { getChatAuthenticatedUser } from '@/lib/chat-user-auth';

export const dynamic = 'force-dynamic';

export default async function ChatAuthPage({ searchParams }) {
  const params = await searchParams;
  const initialError = params?.error || '';
  const user = await getChatAuthenticatedUser();

  if (user) {
    redirect('/chat');
  }

  return (
    <main className="min-h-screen bg-background py-10">
      <div className="container mx-auto px-4 max-w-4xl space-y-6">
        <div className="flex justify-center">
          <ChatAuthForm initialError={initialError} />
        </div>
      </div>
    </main>
  );
}
