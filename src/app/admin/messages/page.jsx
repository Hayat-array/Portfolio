import { Bell, CheckCircle2, MessageCircleReply } from 'lucide-react';
import { redirect } from 'next/navigation';

import {
  getAdminChatThreads,
  markThreadAsReadByAdmin,
  sendAdminChatReply,
} from '@/app/actions';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { isAdminAuthenticated } from '@/lib/admin-auth';

export const dynamic = 'force-dynamic';

function formatDate(value) {
  if (!value) return 'Unknown date';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return 'Unknown date';
  return new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(date);
}

export default async function AdminMessagesPage() {
  const isAuthenticated = await isAdminAuthenticated();

  if (!isAuthenticated) {
    redirect('/admin/login');
  }

  const threads = await getAdminChatThreads();
  const unreadCount = threads.reduce((acc, thread) => acc + thread.unreadForAdmin, 0);

  return (
    <main className="min-h-screen bg-background py-10">
      <div className="container mx-auto px-4 max-w-5xl space-y-6">
        <Card className="border-primary/20">
          <CardHeader>
            <div className="flex items-start justify-between gap-3">
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Bell className="h-6 w-6 text-primary" />
                Admin Inbox
              </CardTitle>
              <form action="/api/admin/logout" method="post">
                <Button type="submit" variant="outline" size="sm">
                  Logout
                </Button>
              </form>
            </div>
            <CardDescription>
              Only admin can access this page. Reply here and users will see only their own thread.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {unreadCount > 0 ? (
              <div className="rounded-md border border-primary/30 bg-primary/10 px-4 py-3 text-sm">
                You have <span className="font-semibold">{unreadCount}</span> unread message{unreadCount > 1 ? 's' : ''}.
              </div>
            ) : (
              <div className="rounded-md border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm">
                No unread messages right now.
              </div>
            )}
          </CardContent>
        </Card>

        {threads.length === 0 ? (
          <Card>
            <CardHeader>
              <CardTitle>No messages yet</CardTitle>
              <CardDescription>
                Users can send messages from Contact section or /chat.
              </CardDescription>
            </CardHeader>
          </Card>
        ) : (
          <div className="space-y-4">
            {threads.map((thread) => (
              <Card key={thread.threadId}>
                <CardHeader className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <CardTitle className="text-lg">{thread.name || 'Visitor'}</CardTitle>
                      <CardDescription>{thread.email || 'No email provided'}</CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={thread.unreadForAdmin > 0 ? 'default' : 'secondary'}>
                        {thread.unreadForAdmin > 0
                          ? `${thread.unreadForAdmin} Unread`
                          : 'Read'}
                      </Badge>
                      <Badge variant="outline">
                        Thread: {thread.threadId.slice(0, 8)}...
                      </Badge>
                    </div>
                  </div>
                  <CardDescription>
                    Last message: {formatDate(thread.lastMessageAt)}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
                    {thread.messages.map((msg) => (
                      <div
                        key={msg._id}
                        className={`rounded-md border p-3 text-sm whitespace-pre-wrap ${
                          msg.sender === 'admin' ? 'bg-primary/10 border-primary/30' : 'bg-muted/40'
                        }`}
                      >
                        <p className="font-medium mb-1">
                          {msg.sender === 'admin' ? 'Admin' : 'User'}
                        </p>
                        <p>{msg.message}</p>
                        <p className="text-xs text-muted-foreground mt-2">{formatDate(msg.createdAt)}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    {thread.unreadForAdmin > 0 && (
                      <form action={markThreadAsReadByAdmin.bind(null, thread.threadId)}>
                        <Button type="submit" variant="secondary" size="sm">
                          <CheckCircle2 className="h-4 w-4" />
                          Mark Thread Read
                        </Button>
                      </form>
                    )}
                  </div>

                  <form action={sendAdminChatReply} className="space-y-2">
                    <input type="hidden" name="threadId" value={thread.threadId} />
                    <Textarea
                      name="message"
                      rows={3}
                      placeholder="Type reply for this user..."
                      required
                    />
                    <Button type="submit" size="sm">
                      <MessageCircleReply className="h-4 w-4" />
                      Send Reply
                    </Button>
                  </form>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
