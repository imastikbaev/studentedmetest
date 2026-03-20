import Link from 'next/link';
import { PublicNav } from '@/components/public-nav';
import { PublicFooter } from '@/components/public-footer';

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: 'By accessing or using the Studented.me platform and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.',
  },
  {
    title: '2. Description of Services',
    content: 'Studented.me provides an education concierge platform that connects students with international university programs, scholarship opportunities, and education counselors. Our services include program matching, application support, document management, and visa guidance.',
  },
  {
    title: '3. User Accounts',
    content: 'You must create an account to use our services. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must provide accurate, current, and complete information during registration.',
  },
  {
    title: '4. Paid Services',
    content: 'Some features require payment. All fees are displayed prior to purchase and are non-refundable except as specified in our refund policy. We reserve the right to change pricing at any time with reasonable notice.',
  },
  {
    title: '5. Refund Policy',
    content: 'Refunds are available within 7 days of purchase if no counselor sessions have been used. After sessions have been conducted, refunds are issued on a pro-rata basis at our discretion. To request a refund, contact billing@studented.me.',
  },
  {
    title: '6. User Conduct',
    content: 'You agree not to use the platform for any unlawful purpose, to impersonate others, to submit false information, to interfere with platform operations, or to violate the rights of other users or third parties.',
  },
  {
    title: '7. Intellectual Property',
    content: 'All content, features, and functionality on the Studented.me platform are the exclusive property of Studented.me and are protected by copyright, trademark, and other intellectual property laws.',
  },
  {
    title: '8. Disclaimer of Warranties',
    content: 'Our services are provided "as is" without warranties of any kind. We do not guarantee specific outcomes such as university admission, scholarship awards, or visa approvals. Results depend on many factors outside our control.',
  },
  {
    title: '9. Limitation of Liability',
    content: 'To the fullest extent permitted by law, Studented.me shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of the platform.',
  },
  {
    title: '10. Governing Law',
    content: 'These Terms are governed by the laws of the Commonwealth of Massachusetts, USA, without regard to conflict of law principles. Disputes shall be resolved in the courts of Boston, Massachusetts.',
  },
  {
    title: '11. Changes to Terms',
    content: 'We reserve the right to modify these Terms at any time. We will notify you of material changes via email or platform notification. Continued use after changes constitutes acceptance.',
  },
  {
    title: '12. Contact',
    content: 'Questions about these Terms should be directed to legal@studented.me or by mail at 123 Education Street, Boston, MA 02101, USA.',
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <PublicNav />

      <main className="max-w-[90rem] mx-auto px-6 lg:px-12 py-24">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-primary mb-6">Legal</p>
          <h1 className="text-5xl md:text-6xl font-serif font-medium tracking-tighter text-foreground mb-6">
            Terms of Service
          </h1>
          <p className="text-foreground/50 text-sm font-light mb-20">Last updated: March 2025</p>

          <p className="text-lg text-foreground/70 font-light leading-relaxed mb-20">
            Please read these Terms of Service carefully before using the Studented.me platform. These terms constitute a legally binding agreement between you and Studented.me.
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
