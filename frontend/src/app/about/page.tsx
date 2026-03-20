'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { PublicNav } from '@/components/public-nav';
import { PublicFooter } from '@/components/public-footer';
import { useLanguage } from '@/lib/i18n';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] },
};

const teamMembers = [
  { name: 'Dr. Amara Osei', roleKey: 'Former Dean of International Admissions, Harvard Extension' },
  { name: 'Yuki Tanaka', roleKey: '15 years guiding students from Japan, Korea, and Southeast Asia' },
  { name: 'Natalia Reyes', roleKey: 'Oxford & LSE alumni, specialist in European universities' },
  { name: 'James McAllister', roleKey: 'Built EdTech platforms serving 200k+ students globally' },
  { name: 'Priya Sharma', roleKey: 'Former immigration officer, expert in UK and Schengen visas' },
  { name: 'Lena Fischer', roleKey: 'Secured $14M+ in scholarships for students over 12 years' },
];

export default function AboutPage() {
  const { t } = useLanguage();

  const values = [
    { titleKey: t('about.value1Title'), descKey: t('about.value1Desc') },
    { titleKey: t('about.value2Title'), descKey: t('about.value2Desc') },
    { titleKey: t('about.value3Title'), descKey: t('about.value3Desc') },
    { titleKey: t('about.value4Title'), descKey: t('about.value4Desc') },
  ];

  return (
    <div className="min-h-screen bg-background bg-noise">
      <PublicNav />
      <main>
        <section className="pt-24 pb-32 lg:pt-36 lg:pb-48 px-6 lg:px-12 max-w-[90rem] mx-auto">
          <motion.div {...fadeInUp} className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <p className="text-xs uppercase tracking-widest text-primary mb-8">{t('about.badge')}</p>
              <h1 className="text-6xl md:text-8xl font-serif font-medium tracking-tighter text-foreground leading-[0.9]">
                {t('about.hero1')}<br />
                <span className="italic text-primary">{t('about.hero2')}</span> {t('about.hero3')}<br />
                {t('about.hero4')}
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-xl text-foreground/70 font-light leading-relaxed border-l border-foreground/10 pl-8">
                {t('about.heroPara')}
              </p>
            </div>
          </motion.div>
        </section>

        <section className="border-t border-b border-foreground/10 py-16 px-6 lg:px-12">
          <div className="max-w-[90rem] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: '12k+', label: t('about.stat1') },
              { num: '500+', label: t('about.stat2') },
              { num: '50+', label: t('about.stat3') },
              { num: '95%', label: t('about.stat4') },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-5xl font-serif text-foreground mb-2">{stat.num}</div>
                <div className="text-xs uppercase tracking-widest text-foreground/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-32 px-6 lg:px-12 bg-secondary text-secondary-foreground">
          <div className="max-w-[90rem] mx-auto">
            <p className="text-xs uppercase tracking-widest text-secondary-foreground/40 mb-6">{t('about.valuesLabel')}</p>
            <h2 className="text-5xl md:text-6xl font-serif mb-20 max-w-2xl">{t('about.valuesTitle')}</h2>
            <div className="grid md:grid-cols-2 gap-0">
              {values.map((v, i) => (
                <motion.div
                  key={v.titleKey}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="border border-secondary-foreground/10 p-12 flex flex-col gap-4"
                >
                  <span className="text-xs font-serif text-primary">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="text-2xl font-serif">{v.titleKey}</h3>
                  <p className="text-secondary-foreground/60 font-light">{v.descKey}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 px-6 lg:px-12">
          <div className="max-w-[90rem] mx-auto">
            <div className="border-t border-foreground/10 pt-12 mb-20">
              <p className="text-xs uppercase tracking-widest text-foreground/40 mb-6">{t('about.teamLabel')}</p>
              <h2 className="text-5xl font-serif">{t('about.teamTitle')}</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0">
              {teamMembers.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="border border-border p-10 flex flex-col gap-3 group hover:bg-muted transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-serif text-lg mb-4">
                    {member.name[0]}
                  </div>
                  <h3 className="text-xl font-serif">{member.name}</h3>
                  <p className="text-sm text-foreground/60 font-light leading-relaxed">{member.roleKey}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 px-6 lg:px-12 bg-primary">
          <div className="max-w-[90rem] mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
            <h2 className="text-5xl md:text-6xl font-serif text-primary-foreground max-w-xl">{t('about.ctaTitle')}</h2>
            <Link href="/register">
              <Button className="rounded-none bg-primary-foreground text-primary hover:bg-primary-foreground/90 h-16 px-12 text-sm tracking-widest uppercase shadow-none group">
                {t('about.ctaBtn')}
                <ArrowUpRight className="ml-3 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}
