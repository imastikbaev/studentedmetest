'use client';

import { motion } from 'framer-motion';
import { PublicNav } from '@/components/public-nav';
import { PublicFooter } from '@/components/public-footer';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] },
};

const offices = [
  { city: 'Boston', country: 'USA', address: '123 Education Street, Boston, MA 02101', phone: '+1 (555) 123-4567', email: 'boston@studented.me' },
  { city: 'London', country: 'UK', address: '45 Oxford Street, London W1D 2DZ', phone: '+44 20 1234 5678', email: 'london@studented.me' },
  { city: 'Singapore', country: 'Singapore', address: '1 Marina Boulevard, Singapore 018989', phone: '+65 6123 4567', email: 'singapore@studented.me' },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background bg-noise">
      <PublicNav />

      <main>
        {/* Hero */}
        <section className="pt-24 pb-20 lg:pt-36 px-6 lg:px-12 max-w-[90rem] mx-auto border-b border-foreground/10">
          <motion.div {...fadeInUp}>
            <p className="text-xs uppercase tracking-widest text-primary mb-8">Contact</p>
            <h1 className="text-6xl md:text-8xl font-serif font-medium tracking-tighter text-foreground leading-[0.9]">
              Let's Start a<br />
              <span className="italic text-primary">Conversation.</span>
            </h1>
            <p className="mt-10 text-xl text-foreground/70 font-light max-w-lg leading-relaxed">
              Whether you have questions about programs, pricing, or the admissions process — our team is here to guide you.
            </p>
          </motion.div>
        </section>

        {/* Contact form + info */}
        <section className="py-32 px-6 lg:px-12 max-w-[90rem] mx-auto">
          <div className="grid lg:grid-cols-2 gap-24">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-serif mb-12">Send Us a Message</h2>
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-foreground/50 mb-3">First Name</label>
                    <input
                      type="text"
                      placeholder="John"
                      className="w-full border-b border-foreground/20 bg-transparent py-3 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-foreground/50 mb-3">Last Name</label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="w-full border-b border-foreground/20 bg-transparent py-3 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-foreground/50 mb-3">Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full border-b border-foreground/20 bg-transparent py-3 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-foreground/50 mb-3">Subject</label>
                  <input
                    type="text"
                    placeholder="How can we help?"
                    className="w-full border-b border-foreground/20 bg-transparent py-3 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-foreground/50 mb-3">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Tell us more about what you need..."
                    className="w-full border-b border-foreground/20 bg-transparent py-3 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-none bg-foreground text-background hover:bg-foreground/90 px-12 h-14 text-sm tracking-widest uppercase transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-16"
            >
              <div>
                <p className="text-xs uppercase tracking-widest text-foreground/40 mb-4">General</p>
                <p className="text-lg font-light text-foreground/70">support@studented.me</p>
                <p className="text-lg font-light text-foreground/70">+1 (555) 123-4567</p>
                <p className="text-sm text-foreground/40 mt-2">Mon–Fri, 9AM–6PM EST</p>
              </div>

              <div className="border-t border-foreground/10 pt-12">
                <p className="text-xs uppercase tracking-widest text-foreground/40 mb-8">Our Offices</p>
                <div className="space-y-10">
                  {offices.map((office) => (
                    <div key={office.city} className="border-l border-foreground/10 pl-8">
                      <h3 className="font-serif text-xl mb-1">{office.city}</h3>
                      <p className="text-xs uppercase tracking-widest text-foreground/40 mb-3">{office.country}</p>
                      <p className="text-sm text-foreground/60 font-light">{office.address}</p>
                      <p className="text-sm text-foreground/60 font-light mt-1">{office.phone}</p>
                      <p className="text-sm text-primary font-light mt-1">{office.email}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <PublicFooter />
    </div>
  );
}
