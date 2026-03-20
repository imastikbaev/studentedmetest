'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/i18n';

export function PublicFooter() {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-background py-20 px-6 lg:px-12">
      <div className="max-w-[90rem] mx-auto">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-8 mb-20">
          <div className="md:col-span-5">
            <span className="text-4xl font-serif font-black tracking-tight mb-8 block">
              Studented.me
            </span>
            <p className="text-background/60 font-light max-w-sm text-lg">
              {t('footer.description')}
            </p>
          </div>

          <div className="md:col-span-2 md:col-start-7">
            <h4 className="text-xs uppercase tracking-widest text-background/40 mb-6">{t('footer.directory')}</h4>
            <ul className="space-y-4 font-light">
              <li><Link href="/programs" className="hover:text-primary transition-colors">{t('footer.programs')}</Link></li>
              <li><Link href="/advisors" className="hover:text-primary transition-colors">{t('footer.advisors')}</Link></li>
              <li><Link href="/scholarships" className="hover:text-primary transition-colors">{t('footer.scholarships')}</Link></li>
              <li><Link href="/pricing" className="hover:text-primary transition-colors">{t('footer.pricing')}</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-widest text-background/40 mb-6">{t('footer.company')}</h4>
            <ul className="space-y-4 font-light">
              <li><Link href="/about" className="hover:text-primary transition-colors">{t('footer.about')}</Link></li>
              <li><Link href="/careers" className="hover:text-primary transition-colors">{t('footer.careers')}</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">{t('footer.contact')}</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-widest text-background/40 mb-6">{t('footer.legal')}</h4>
            <ul className="space-y-4 font-light">
              <li><Link href="/privacy" className="hover:text-primary transition-colors">{t('footer.privacy')}</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">{t('footer.terms')}</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center text-sm text-background/40 font-light">
          <p>© {new Date().getFullYear()} Studented.me. {t('footer.copyright')}</p>
          <p className="mt-4 md:mt-0 uppercase tracking-widest text-xs">{t('footer.tagline')}</p>
        </div>
      </div>
    </footer>
  );
}
