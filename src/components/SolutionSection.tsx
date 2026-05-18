import { motion } from 'motion/react';
import { Target, Zap, Shield, Search, TrendingUp, Sparkles } from 'lucide-react';

export default function SolutionSection() {
  const solutions = [
    {
      icon: Zap,
      title: "Lighting-Fast Speed",
      description: "We optimize every line of code to ensure your site loads in under 1 second, keeping visitors engaged."
    },
    {
      icon: Target,
      title: "Conversion Engine",
      description: "We design with strategic UI/UX patterns that guide visitors intuitively toward your primary goals."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "State-of-the-art security protocols to keep your business data and your customers safe from threats."
    },
    {
      icon: Search,
      title: "SEO Foundation",
      description: "Baked-in SEO best practices ensure your site is built to climb search engine rankings from day one."
    },
    {
      icon: TrendingUp,
      title: "Performance Data",
      description: "Integrated analytics help you understand your visitors' behavior and continuously improve performance."
    },
    {
      icon: Sparkles,
      title: "Premium Branding",
      description: "Visuals that communicate authority and trust, positioning you as the leader in your industry."
    }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <span className="text-brand-primary font-bold text-sm uppercase tracking-widest mb-4 block">The Nexus Solution</span>
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tighter">
          Engineering High-Growth <span className="text-gradient">Digital Experiences</span>
        </h2>
        <p className="text-xl text-gray-400">
          We combine cutting-edge technology with conversion-focused design to solve your digital challenges.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {solutions.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="p-8 rounded-3xl bg-dark-surface border border-white/5 hover:border-brand-primary/50 transition-all group"
          >
            <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-primary transition-colors">
              <item.icon className="text-brand-primary group-hover:text-white transition-colors" size={28} />
            </div>
            <h3 className="text-2xl font-display font-bold mb-4">{item.title}</h3>
            <p className="text-gray-400 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
