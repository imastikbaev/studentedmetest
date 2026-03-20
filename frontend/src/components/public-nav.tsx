'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useLanguage, type Locale } from '@/lib/i18n';

export function PublicNav() {
  const pathname = usePathname();
  const { t, locale, setLocale } = useLanguage();

  const links = [
    { href: '/about', label: t('nav.about') },
    { href: '/programs', label: t('nav.programs') },
    { href: '/advisors', label: t('nav.advisors') },
    { href: '/scholarships', label: t('nav.scholarships') },
    { href: '/pricing', label: t('nav.pricing') },
  ];

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
            <div className="flex items-center border border-foreground/10 overflow-hidden">
              {(['en', 'ru'] as Locale[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLocale(l)}
                  className={`px-3 h-8 text-xs uppercase tracking-widest transition-colors ${
                    locale === l
                      ? 'bg-foreground text-background'
                      : 'text-foreground/40 hover:text-foreground'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
            <Link href="/login" className="text-sm tracking-wide uppercase hover:opacity-70 transition-opacity">
              {t('nav.login')}
            </Link>
            <Link href="/register">
              <Button className="rounded-none bg-foreground text-background hover:bg-foreground/90 px-8 h-12 text-sm tracking-wide uppercase shadow-none">
                {t('nav.cta')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
