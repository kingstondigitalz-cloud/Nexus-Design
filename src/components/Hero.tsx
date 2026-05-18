import { motion } from 'motion/react';
import { ArrowRight, Star, ShieldCheck, Zap } from 'lucide-react';
import LeadForm from './LeadForm';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/30 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-600/20 blur-[120px] rounded-full animate-pulse " style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Content */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8">
              <span className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-yellow-500 text-yellow-500" />
                ))}
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Trusted by 250+ Brands</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-8 tracking-tighter">
              Your Website Might Be <span className="text-gradient">Costing You</span> High-Value Customers
            </h1>
            
            <p className="text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
              Stop guessing why your visitors aren't converting. We turn outdated websites into high-performance, customer-generating machines.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <ShieldCheck size={18} className="text-brand-primary" />
                No-Obligation Audit
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Zap size={18} className="text-brand-primary" />
                Fast 48h Turnaround
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#audit" 
                className="bg-brand-primary text-white py-4 px-8 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all hover:bg-brand-secondary hover:scale-105"
              >
                Get Free Website Audit
                <ArrowRight size={20} />
              </a>
              <a 
                href="#portfolio" 
                className="bg-white/5 border border-white/10 text-white py-4 px-8 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all hover:bg-white/10"
              >
                See Our Recent Work
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Form */}
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <LeadForm />
          </motion.div>
        </div>
      </div>

      {/* Visual Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-gray-700 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-gray-500 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
