'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useAuth } from '@/lib/auth';

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(email, password);
      router.push('/dashboard');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background bg-noise flex">
      {/* Left brand panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-secondary flex-col justify-between p-16">
        <Link href="/">
          <span className="text-3xl font-serif font-black tracking-tight text-secondary-foreground hover:text-primary transition-colors">
            Studented.me
          </span>
        </Link>
        <div>
          <h2 className="text-5xl font-serif text-secondary-foreground mb-6 leading-tight">
            Your Global<br />
            <span className="italic text-primary">Education</span><br />
            Awaits.
          </h2>
          <p className="text-secondary-foreground/50 font-light text-lg">
            Access 10,000+ curated programs across 50+ countries.
          </p>
        </div>
        <p className="text-secondary-foreground/30 text-xs uppercase tracking-widest">
          Excellence in Education
        </p>
      </div>

      {/* Right form panel */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-md w-full mx-auto"
        >
          <div className="lg:hidden mb-12">
            <Link href="/">
              <span className="text-2xl font-serif font-black tracking-tight text-foreground">
                Studented.me
              </span>
            </Link>
          </div>

          <p className="text-xs uppercase tracking-widest text-primary mb-4">Welcome Back</p>
          <h1 className="text-4xl font-serif font-medium tracking-tight text-foreground mb-12">
            Sign in to your account
          </h1>

          <form onSubmit={handleSubmit} className="space-y-8">
            {error && (
              <div className="border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
                {error}
              </div>
            )}

            <div>
              <label className="block text-xs uppercase tracking-widest text-foreground/50 mb-3">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border-b border-foreground/20 bg-transparent py-3 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-foreground/50 mb-3">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full border-b border-foreground/20 bg-transparent py-3 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-none bg-foreground text-background hover:bg-foreground/90 disabled:opacity-50 h-14 text-sm tracking-widest uppercase transition-colors"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <p className="mt-10 text-sm text-foreground/50">
            Don't have an account?{' '}
            <Link href="/register" className="text-foreground underline underline-offset-4 hover:text-primary transition-colors">
              Create one
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
