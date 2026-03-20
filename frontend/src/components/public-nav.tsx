'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';

const links = [
  { href: '/about', label: 'About' },
  { href: '/programs', label: 'Programs' },
  { href: '/advisors', label: 'Advisors' },
  { href: '/scholarships', label: 'Scholarships' },
  { href: '/pricing', label: 'Pricing' },
];

export function PublicNav() {
  const pathname = usePathname();

  return (
    <nav className="relative z-50 border-b border-black/5 bg-background">
      <div className="max-w-[90rem] mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-24">
          <Link href="/">
            <span className="text-3xl font-serif font-black tracking-tight text-foreground hover:text-primary transition-colors">
              Studented.me
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs tracking-widest uppercase transition-opacity ${
                  pathname === link.href
                    ? 'text-primary'
                    : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex gap-4 items-center">
            <Link href="/login" className="text-sm tracking-wide uppercase hover:opacity-70 transition-opacity">
              Log In
            </Link>
            <Link href="/register">
              <Button className="rounded-none bg-foreground text-background hover:bg-foreground/90 px-8 h-12 text-sm tracking-wide uppercase shadow-none">
                Begin Journey
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
