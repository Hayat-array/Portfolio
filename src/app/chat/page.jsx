import { MessageSquare } from 'lucide-react';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import {
  deleteUserChatConversation,
  getUserChatMessages,
  getUserChatProfile,
  logoutChatUserSession,
  sendUserChatMessage,
} from '@/app/actions';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { getChatAuthenticatedUser } from '@/lib/chat-user-auth';

export const dynamic = 'force-dynamic';

function formatDate(value) {
  if (!value) return '';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '';
  return new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(date);
}

export default async function ChatPage({ searchParams }) {
  const params = await searchParams;
  const status = params?.status;
  const statusMessage = params?.message || '';

  const authenticatedUser = await getChatAuthenticatedUser();

  if (!authenticatedUser) {
    redirect('/chat/auth');
  }

  const [messages, profile] = await Promise.all([
    getUserChatMessages(),
    getUserChatProfile(),
  ]);
  const resolvedName = profile.name || authenticatedUser.name || '';
  const resolvedEmail = authenticatedUser.email;

  return (
    <main className="min-h-screen bg-background py-10">
      <div className="container mx-auto px-4 max-w-4xl space-y-6">
        {status === 'sent' ? (
          <Card className="border-green-500/30 bg-green-500/10">
            <CardContent className="py-4 text-sm text-green-900 dark:text-green-200">
              Message sent successfully.
            </CardContent>
          </Card>
        ) : null}

        {status === 'deleted' ? (
          <Card className="border-amber-500/30 bg-amber-500/10">
            <CardContent className="py-4 text-sm text-amber-900 dark:text-amber-200">
              Your chat conversation was deleted.
            </CardContent>
          </Card>
        ) : null}

        {status === 'error' ? (
          <Card className="border-destructive/40 bg-destructive/10">
            <CardContent className="py-4 text-sm text-destructive">
              {statusMessage || 'Unable to send your message.'}
            </CardContent>
          </Card>
        ) : null}

        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-primary" />
              Private Support Chat
            </CardTitle>
            <CardDescription>
              This chat is private. You can only see your own conversation with admin.
            </CardDescription>
            <CardDescription>
              Logged in as {resolvedEmail}
            </CardDescription>
            <div className="flex flex-wrap gap-2">
              <form action={deleteUserChatConversation}>
                <Button type="submit" size="sm" variant="destructive">
                  Delete My Chat
                </Button>
              </form>
              <form action={logoutChatUserSession}>
                <Button type="submit" size="sm" variant="outline">Logout</Button>
              </form>
            </div>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Conversation</CardTitle>
            <CardDescription>
              {messages.length === 0
                ? 'No messages yet. Send your first message below.'
                : `${messages.length} message${messages.length > 1 ? 's' : ''}`}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {messages.length === 0 ? (
              <div className="rounded-md border border-dashed p-4 text-sm text-muted-foreground">
                Start chatting with admin.
              </div>
            ) : (
              messages.map((msg) => (
                <div
                  key={msg._id}
                  className={`rounded-md border p-3 text-sm whitespace-pre-wrap ${
                    msg.sender === 'admin' ? 'bg-primary/10 border-primary/30' : 'bg-muted/40'
                  }`}
                >
                  <p className="font-medium mb-1">
                    {msg.sender === 'admin' ? 'Admin' : 'You'}
                  </p>
                  <p>{msg.message}</p>
                  <p className="text-xs text-muted-foreground mt-2">{formatDate(msg.createdAt)}</p>
                </div>
              ))
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Send Message</CardTitle>
            <CardDescription>
              Signed in as {resolvedEmail}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action={sendUserChatMessage} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  name="name"
                  placeholder="Your name"
                  defaultValue={resolvedName}
                  required
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Your authenticated email"
                  value={resolvedEmail}
                  readOnly
                  required
                />
              </div>
              <Textarea
                name="message"
                placeholder="Type your message..."
                rows={5}
                required
              />
              <Button type="submit">
                Send
              </Button>
              <p className="text-xs text-muted-foreground">
                Need a different account? <Link href="/chat/auth" className="underline">Switch chat account</Link>.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
