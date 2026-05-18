import { motion } from 'motion/react';
import { MousePointer2, FileText, Rocket } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      title: "Submit Your Website",
      desc: "Fill out our form with your business goals and website URL. Our experts begin an deep-dive analysis.",
      icon: MousePointer2,
      number: "01"
    },
    {
      title: "Receive Custom Audit",
      desc: "Get a comprehensive breakdown of your site's performance, UX flaws, and missed conversion opportunities.",
      icon: FileText,
      number: "02"
    },
    {
      title: "Get Growth Solution",
      desc: "Review our proposed high-conversion strategy and launch your new customer-generating machine.",
      icon: Rocket,
      number: "03"
    }
  ];

  return (
    <section id="process" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 hidden lg:block" />
      
      <div className="text-center max-w-3xl mx-auto mb-20">
        <span className="text-brand-primary font-bold text-sm uppercase tracking-widest mb-4 block">Our Methodology</span>
        <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-6">
          Your Path to <span className="text-gradient">Higher Conversion</span>
        </h2>
        <p className="text-xl text-gray-400">
          A streamlined 3-step process to transform your online presence.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center group"
          >
            <div className="relative mb-10">
              <div className="w-24 h-24 rounded-full bg-dark-surface border border-white/10 flex items-center justify-center relative z-10 group-hover:border-brand-primary transition-colors duration-500">
                <step.icon size={36} className="text-gray-400 group-hover:text-brand-primary transition-colors" />
              </div>
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center font-display font-bold text-xl z-20 shadow-xl border-4 border-dark-bg">
                {step.number}
              </div>
              {/* Blur behind icon */}
              <div className="absolute inset-0 bg-brand-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            
            <h3 className="text-2xl font-display font-bold mb-4">{step.title}</h3>
            <p className="text-gray-400 leading-relaxed max-w-xs">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
