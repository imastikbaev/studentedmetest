import Link from 'next/link';

export function PublicFooter() {
  return (
    <footer className="bg-foreground text-background py-20 px-6 lg:px-12">
      <div className="max-w-[90rem] mx-auto">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-8 mb-20">
          <div className="md:col-span-5">
            <span className="text-4xl font-serif font-black tracking-tight mb-8 block">
              Studented.me
            </span>
            <p className="text-background/60 font-light max-w-sm text-lg">
              Curators of exceptional international academic experiences.
            </p>
          </div>

          <div className="md:col-span-2 md:col-start-7">
            <h4 className="text-xs uppercase tracking-widest text-background/40 mb-6">Directory</h4>
            <ul className="space-y-4 font-light">
              <li><Link href="/programs" className="hover:text-primary transition-colors">Programs</Link></li>
              <li><Link href="/advisors" className="hover:text-primary transition-colors">Advisors</Link></li>
              <li><Link href="/scholarships" className="hover:text-primary transition-colors">Scholarships</Link></li>
              <li><Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-widest text-background/40 mb-6">Company</h4>
            <ul className="space-y-4 font-light">
              <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-widest text-background/40 mb-6">Legal</h4>
            <ul className="space-y-4 font-light">
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center text-sm text-background/40 font-light">
          <p>© {new Date().getFullYear()} Studented.me. All rights reserved.</p>
          <p className="mt-4 md:mt-0 uppercase tracking-widest text-xs">Excellence in Education</p>
        </div>
      </div>
    </footer>
  );
}
