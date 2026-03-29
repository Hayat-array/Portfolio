import { MessageSquare } from 'lucide-react';

import {
  getUserChatMessages,
  getUserChatProfile,
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

export default async function ChatPage() {
  const [messages, profile] = await Promise.all([
    getUserChatMessages(),
    getUserChatProfile(),
  ]);

  return (
    <main className="min-h-screen bg-background py-10">
      <div className="container mx-auto px-4 max-w-4xl space-y-6">
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-primary" />
              Private Support Chat
            </CardTitle>
            <CardDescription>
              This chat is private. You can only see your own conversation with admin.
            </CardDescription>
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
          </CardHeader>
          <CardContent>
            <form action={sendUserChatMessage} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input name="name" placeholder="Your name" defaultValue={profile.name} required />
                <Input name="email" type="email" placeholder="Your email" defaultValue={profile.email} required />
              </div>
              <Textarea name="message" placeholder="Type your message..." rows={5} required />
              <Button type="submit">Send</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
