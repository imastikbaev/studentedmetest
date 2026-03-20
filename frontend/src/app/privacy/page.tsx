import Link from 'next/link';
import { PublicNav } from '@/components/public-nav';
import { PublicFooter } from '@/components/public-footer';

const sections = [
  {
    title: '1. Information We Collect',
    content: 'We collect information you provide directly to us, such as your name, email address, date of birth, nationality, country of residence, and educational background when you create an account or use our services. We also collect usage data, device information, and cookies to improve your experience on our platform.',
  },
  {
    title: '2. How We Use Your Information',
    content: 'We use your information to provide and improve our services, match you with relevant programs and scholarships, communicate with you about your applications, send service-related notifications, and comply with legal obligations. We do not sell your personal information to third parties.',
  },
  {
    title: '3. Information Sharing',
    content: 'We share your information with partner universities and institutions only when you explicitly apply to their programs. We may share data with trusted service providers who assist us in operating the platform. All third parties are contractually bound to protect your information.',
  },
  {
    title: '4. Data Retention',
    content: 'We retain your personal data for as long as your account is active or as needed to provide services. You may request deletion of your account and associated data at any time by contacting us at privacy@studented.me.',
  },
  {
    title: '5. Your Rights',
    content: 'Depending on your location, you may have the right to access, correct, delete, or export your personal data. You may also object to or restrict certain processing activities. To exercise any of these rights, contact us at privacy@studented.me.',
  },
  {
    title: '6. Cookies',
    content: 'We use cookies and similar tracking technologies to enhance your experience. You can control cookies through your browser settings. Disabling cookies may affect certain features of the platform.',
  },
  {
    title: '7. Security',
    content: 'We implement industry-standard security measures to protect your information, including encryption, secure data transmission, and access controls. However, no method of transmission over the internet is 100% secure.',
  },
  {
    title: '8. Changes to This Policy',
    content: 'We may update this Privacy Policy from time to time. We will notify you of significant changes by email or through a prominent notice on the platform. Your continued use of the platform after changes constitutes acceptance of the updated policy.',
  },
  {
    title: '9. Contact Us',
    content: 'If you have any questions about this Privacy Policy, please contact us at privacy@studented.me or by mail at 123 Education Street, Boston, MA 02101, USA.',
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <PublicNav />

      <main className="max-w-[90rem] mx-auto px-6 lg:px-12 py-24">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-primary mb-6">Legal</p>
          <h1 className="text-5xl md:text-6xl font-serif font-medium tracking-tighter text-foreground mb-6">
            Privacy Policy
          </h1>
          <p className="text-foreground/50 text-sm font-light mb-20">Last updated: March 2025</p>

          <p className="text-lg text-foreground/70 font-light leading-relaxed mb-20">
            At Studented.me, we take your privacy seriously. This policy explains how we collect, use, and protect your personal information when you use our platform and services.
          </p>

          <div className="space-y-16">
            {sections.map((section) => (
              <div key={section.title} className="border-t border-foreground/10 pt-10">
                <h2 className="text-2xl font-serif mb-6">{section.title}</h2>
                <p className="text-foreground/60 font-light leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <PublicFooter />
    </div>
  );
}
