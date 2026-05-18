import { motion } from 'motion/react';
import { ArrowRight, MessageSquare } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="section-padding">
      <div className="glass rounded-[40px] p-10 md:p-20 relative overflow-hidden">
        {/* Background Decorative */}
        <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-brand-primary/10 blur-[100px] -z-10 rounded-full translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[30%] h-[50%] bg-cyan-500/10 blur-[80px] -z-10 rounded-full -translate-x-1/2" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight tracking-tighter">
              Your Competitors Are Already Improving. <span className="text-gradient">Don't Get Left Behind.</span>
            </h2>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              Take the first step toward a high-performance website. Get your free assessment today and see exactly what's holding you back.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#audit" 
                className="bg-brand-primary text-white py-4 px-10 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-brand-secondary transition-all hover:scale-105"
              >
                Claim My Free Audit
                <ArrowRight size={20} />
              </a>
              <a 
                href="https://wa.me/15552345678" 
                className="bg-green-600 text-white py-4 px-10 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-green-500 transition-all hover:scale-105"
              >
                <MessageSquare size={20} />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="relative group">
             <div className="absolute inset-0 bg-brand-primary/20 blur-3xl opacity-0 group-hover:opacity-40 transition-opacity rounded-full" />
             <div className="glass p-8 rounded-3xl relative border-brand-primary/20 rotate-2 group-hover:rotate-0 transition-transform duration-500">
               <div className="flex justify-between items-center mb-8">
                 <div className="flex gap-2">
                   <div className="w-3 h-3 rounded-full bg-red-500" />
                   <div className="w-3 h-3 rounded-full bg-yellow-500" />
                   <div className="w-3 h-3 rounded-full bg-green-500" />
                 </div>
                 <div className="text-[10px] uppercase font-bold text-gray-500">Nexus Security Audit Passed</div>
               </div>
               <div className="space-y-4">
                 {[78, 92, 64].map((val, i) => (
                   <div key={i} className="space-y-2">
                     <div className="flex justify-between text-xs font-bold">
                       <span>{['Conversion', 'Speed', 'SEO'][i]}</span>
                       <span className="text-brand-primary">+{val}%</span>
                     </div>
                     <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                       <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${val}%` }}
                        transition={{ duration: 1, delay: i * 0.2 }}
                        className="h-full bg-brand-primary" 
                       />
                     </div>
                   </div>
                 ))}
               </div>
               <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-center text-sm font-bold text-brand-primary gap-2">
                 PREDICTED GROWTH REVENUE: $2.4M/YR
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
