'use client';

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const initialState = {
  mode: 'login',
  name: '',
  email: '',
  otp: '',
};

export function ChatAuthForm({ initialError = '' }) {
  const router = useRouter();
  const [form, setForm] = useState(initialState);
  const [otpRequested, setOtpRequested] = useState(false);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState(initialError);

  const modeLabel = useMemo(() => (form.mode === 'signup' ? 'Signup' : 'Login'), [form.mode]);
  const isDbUnavailableError = error.toLowerCase().includes('database connection failed') || error.toLowerCase().includes('mongodb dns/network');

  function onChange(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function requestOtp(event) {
    event.preventDefault();
    setBusy(true);
    setError('');
    setMessage('');

    try {
      const response = await fetch('/api/chat/auth/request-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          mode: form.mode,
          name: form.name,
          email: form.email,
        }),
      });

      const data = await response.json();
      if (!response.ok || !data.success) {
        setError(data.error || 'Failed to send OTP.');
        return;
      }

      setOtpRequested(true);
      setMessage(data.message || 'OTP sent. Check your email.');
    } catch {
      setError('Failed to send OTP. Please try again.');
    } finally {
      setBusy(false);
    }
  }

  async function verifyOtp(event) {
    event.preventDefault();
    setBusy(true);
    setError('');
    setMessage('');

    try {
      const response = await fetch('/api/chat/auth/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: form.email,
          otp: form.otp,
        }),
      });

      const data = await response.json();
      if (!response.ok || !data.success) {
        setError(data.error || 'OTP verification failed.');
        return;
      }

      router.push('/chat');
      router.refresh();
    } catch {
      setError('OTP verification failed. Please try again.');
    } finally {
      setBusy(false);
    }
  }

  function switchMode(nextMode) {
    setForm((prev) => ({ ...prev, mode: nextMode }));
    setOtpRequested(false);
    setError('');
    setMessage('');
  }

  return (
    <Card className="w-full max-w-md border-primary/20">
      <CardHeader>
        <CardTitle>Private Chat Authentication</CardTitle>
        <CardDescription>
          Use login or signup with your email to access your private chat thread.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-2">
          <Button
            type="button"
            variant={form.mode === 'login' ? 'default' : 'outline'}
            onClick={() => switchMode('login')}
            disabled={busy}
          >
            Login
          </Button>
          <Button
            type="button"
            variant={form.mode === 'signup' ? 'default' : 'outline'}
            onClick={() => switchMode('signup')}
            disabled={busy}
          >
            Signup
          </Button>
        </div>

        <form onSubmit={otpRequested ? verifyOtp : requestOtp} className="space-y-3">
          {form.mode === 'signup' ? (
            <Input
              placeholder="Your name"
              value={form.name}
              onChange={(event) => onChange('name', event.target.value)}
              required
              minLength={2}
              disabled={busy || otpRequested}
            />
          ) : null}

          <Input
            type="email"
            placeholder="Your email"
            value={form.email}
            onChange={(event) => onChange('email', event.target.value)}
            required
            disabled={busy || otpRequested}
          />

          {otpRequested ? (
            <Input
              placeholder="6-digit OTP"
              value={form.otp}
              onChange={(event) => onChange('otp', event.target.value)}
              required
              minLength={6}
              maxLength={6}
              inputMode="numeric"
              pattern="[0-9]{6}"
              disabled={busy}
            />
          ) : null}

          {error ? <p className="text-sm text-destructive">{error}</p> : null}

          {isDbUnavailableError ? (
            <div className="rounded-md border border-amber-500/40 bg-amber-500/10 p-3 text-xs text-amber-900 dark:text-amber-200 space-y-1">
              <p className="font-medium">Database is temporarily unreachable.</p>
              <p>Add a direct Mongo URI as <span className="font-semibold">MONGODB_URI_FALLBACK</span> in your env, then restart the server.</p>
              <p>Also verify Atlas Network Access allows your current IP.</p>
            </div>
          ) : null}
          {message ? <p className="text-sm text-muted-foreground">{message}</p> : null}

          <Button type="submit" className="w-full" disabled={busy}>
            {busy ? 'Please wait...' : otpRequested ? 'Verify OTP' : `Send OTP for ${modeLabel}`}
          </Button>

          {otpRequested ? (
            <Button
              type="button"
              variant="ghost"
              className="w-full"
              disabled={busy}
              onClick={() => {
                setOtpRequested(false);
                setForm((prev) => ({ ...prev, otp: '' }));
                setMessage('');
                setError('');
              }}
            >
              Change email or mode
            </Button>
          ) : null}
        </form>
      </CardContent>
    </Card>
  );
}
