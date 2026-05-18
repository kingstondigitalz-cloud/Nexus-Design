/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MockupPreview from './components/MockupPreview';
import TrustBar from './components/TrustBar';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import PortfolioSection from './components/PortfolioSection';
import TestimonialsSection from './components/TestimonialsSection';
import ProcessSection from './components/ProcessSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-brand-primary z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar />

      <main>
        <Hero />
        <MockupPreview />
        <TrustBar />
        <ProblemSection />
        <SolutionSection />
        
        {/* Benefits Quote Section */}
        <section className="py-20 px-6 border-y border-white/5 bg-brand-primary/[0.02]">
           <div className="max-w-7xl mx-auto text-center">
             <h2 className="text-3xl md:text-5xl font-display font-medium text-gray-300 italic leading-snug">
               "We don't just build websites. We build your most <span className="text-white font-bold not-italic">profitable asset</span>. 
               Experience design that pays for itself."
             </h2>
           </div>
        </section>

        <PortfolioSection />
        <ProcessSection />
        <TestimonialsSection />
        
        {/* FAQ Preview / Micro Section */}
        <section className="section-padding">
          <div className="max-w-3xl mx-auto glass p-12 rounded-[40px]">
            <h2 className="text-3xl font-display font-bold mb-10 text-center">Frequently Asked Questions</h2>
            <div className="space-y-8">
              {[
                { q: "How long does the audit take?", a: "Most audits are delivered within 48 business hours after submission." },
                { q: "Is it really 100% free?", a: "Yes. No credit card, no obligation. We provide high-value insights to earn your trust." },
                { q: "What do you need from me?", a: "Your website URL and an understanding of your main business challenges." }
              ].map((faq, i) => (
                <div key={i} className="border-b border-white/5 pb-6 last:border-0 last:pb-0">
                  <h4 className="font-bold mb-3 text-lg">{faq.q}</h4>
                  <p className="text-gray-400">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>

      <Footer />

      {/* Floating WhatsApp / Contact */}
      <motion.a 
        href="https://wa.me/15552345678"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl z-40 cursor-pointer"
      >
        <MessageCircle size={32} />
      </motion.a>

      {/* Sticky Mobile CTA */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-0 left-0 right-0 p-4 bg-dark-bg/80 backdrop-blur-md border-t border-white/10 md:hidden z-50"
      >
        <a 
          href="#audit" 
          className="w-full bg-brand-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2"
        >
          Claim Free Website Audit
        </a>
      </motion.div>
    </div>
  );
}

