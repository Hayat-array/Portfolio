import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export default async function AdminLoginPage({ searchParams }) {
  const params = await searchParams;
  const errorCode = params?.error;

  const errorMessage =
    errorCode === '2'
      ? 'Admin setup is incomplete. Add admin environment variables first.'
      : errorCode === '1'
        ? 'Invalid username or password.'
        : '';

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4 py-10">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Admin Login</CardTitle>
          <CardDescription>
            Only admin users can access portfolio messages.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action="/api/admin/login" method="post" className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="username">
                Username
              </label>
              <Input id="username" name="username" type="text" placeholder="Enter admin username" required />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="password">
                Password
              </label>
              <Input id="password" name="password" type="password" placeholder="Enter admin password" required />
            </div>

            {errorMessage ? (
              <p className="text-sm text-destructive" role="alert">
                {errorMessage}
              </p>
            ) : null}

            <Button type="submit" className="w-full">
              Sign In
            </Button>
            
            <div className="text-right">
              <Link
                href="/admin/forgot-password"
                className="text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                Forgot password?
              </Link>
            </div>
          </form>

          <div className="mt-6 text-sm text-muted-foreground text-center pt-4 border-t">
            <Link href="/" className="hover:underline flex items-center justify-center gap-2">
              <span>←</span> Back to portfolio
            </Link>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
