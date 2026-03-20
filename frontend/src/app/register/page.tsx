'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useAuth } from '@/lib/auth';

export default function RegisterPage() {
  const router = useRouter();
  const { register } = useAuth();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    dateOfBirth: '',
    nationality: '',
    countryOfResidence: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const cleanData = Object.fromEntries(
        Object.entries(formData).filter(([_, v]) => v !== '')
      ) as typeof formData;
      await register(cleanData);
      router.push('/dashboard');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background bg-noise flex">
      {/* Left brand panel */}
      <div className="hidden lg:flex lg:w-2/5 bg-primary flex-col justify-between p-16">
        <Link href="/">
          <span className="text-3xl font-serif font-black tracking-tight text-primary-foreground hover:opacity-80 transition-opacity">
            Studented.me
          </span>
        </Link>
        <div>
          <h2 className="text-5xl font-serif text-primary-foreground mb-6 leading-tight">
            Begin Your<br />
            <span className="italic">Journey</span><br />
            Today.
          </h2>
          <p className="text-primary-foreground/70 font-light text-lg">
            Join 12,000+ students who found their path to global education.
          </p>
        </div>
        <p className="text-primary-foreground/40 text-xs uppercase tracking-widest">
          Excellence in Education
        </p>
      </div>

      {/* Right form panel */}
      <div className="w-full lg:w-3/5 flex flex-col justify-center px-8 md:px-16 lg:px-20 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl w-full mx-auto"
        >
          <div className="lg:hidden mb-12">
            <Link href="/">
              <span className="text-2xl font-serif font-black tracking-tight text-foreground">
                Studented.me
              </span>
            </Link>
          </div>

          <p className="text-xs uppercase tracking-widest text-primary mb-4">New Account</p>
          <h1 className="text-4xl font-serif font-medium tracking-tight text-foreground mb-12">
            Create your account
          </h1>

          <form onSubmit={handleSubmit} className="space-y-8">
            {error && (
              <div className="border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
                {error}
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-xs uppercase tracking-widest text-foreground/50 mb-3">First Name</label>
                <input
                  name="firstName"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full border-b border-foreground/20 bg-transparent py-3 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-foreground/50 mb-3">Last Name</label>
                <input
                  name="lastName"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full border-b border-foreground/20 bg-transparent py-3 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-foreground/50 mb-3">Email</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border-b border-foreground/20 bg-transparent py-3 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-foreground/50 mb-3">Password</label>
              <input
                type="password"
                name="password"
                placeholder="At least 8 characters"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full border-b border-foreground/20 bg-transparent py-3 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary transition-colors"
              />
              <p className="text-xs text-foreground/40 mt-2">Must include uppercase, lowercase, and number</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-xs uppercase tracking-widest text-foreground/50 mb-3">Phone <span className="normal-case">(Optional)</span></label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+1234567890"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border-b border-foreground/20 bg-transparent py-3 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-foreground/50 mb-3">Date of Birth <span className="normal-case">(Optional)</span></label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="w-full border-b border-foreground/20 bg-transparent py-3 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-xs uppercase tracking-widest text-foreground/50 mb-3">Nationality <span className="normal-case">(Optional)</span></label>
                <input
                  name="nationality"
                  placeholder="USA"
                  value={formData.nationality}
                  onChange={handleChange}
                  className="w-full border-b border-foreground/20 bg-transparent py-3 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-foreground/50 mb-3">Country of Residence <span className="normal-case">(Optional)</span></label>
                <input
                  name="countryOfResidence"
                  placeholder="United States"
                  value={formData.countryOfResidence}
                  onChange={handleChange}
                  className="w-full border-b border-foreground/20 bg-transparent py-3 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-none bg-foreground text-background hover:bg-foreground/90 disabled:opacity-50 h-14 text-sm tracking-widest uppercase transition-colors"
            >
              {loading ? 'Creating account...' : 'Create Account'}
            </button>
          </form>

          <p className="mt-10 text-sm text-foreground/50">
            Already have an account?{' '}
            <Link href="/login" className="text-foreground underline underline-offset-4 hover:text-primary transition-colors">
              Sign in
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
