import { motion } from 'motion/react';
import { AlertCircle, Smartphone, Gauge, Layout, Palette, Users } from 'lucide-react';

export default function ProblemSection() {
  const problems = [
    {
      icon: Gauge,
      title: "Crawl-Speed Loading",
      desc: "53% of mobile visits are abandoned if a site takes longer than 3 seconds to load. Speed is the silent killer of conversions."
    },
    {
      icon: Smartphone,
      title: "Broken Mobile UX",
      desc: "If your site isn't flawless on mobile, you're alienating 60% of your potential traffic right out of the gate."
    },
    {
      icon: AlertCircle,
      title: "Confusion = Exit",
      desc: "A cluttered layout or unclear messaging force visitors to think. If they have to think, they leave."
    }
  ];

  return (
    <section className="section-padding overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <span className="text-brand-primary font-bold text-sm uppercase tracking-widest mb-4 block">The Hard Truth</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight tracking-tighter">
            Most business websites look good but <span className="text-red-500/80">fail to convert</span>
          </h2>
          <p className="text-xl text-gray-400 mb-10 leading-relaxed">
            Beautiful design is useless if it doesn't solve your customer's problems or guide them toward a sale. Your website should be your hardest-working employee, not just an expensive business card.
          </p>
          
          <div className="space-y-6">
            <div className="p-6 bg-red-500/5 border border-red-500/10 rounded-2xl flex gap-5">
              <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center shrink-0">
                <Users className="text-red-500" size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1">Ignoring the User Journey</h4>
                <p className="text-sm text-gray-400">Visitors get lost because there's no clear path to the solution they need.</p>
              </div>
            </div>
            <div className="p-6 bg-red-500/5 border border-red-500/10 rounded-2xl flex gap-5">
              <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center shrink-0">
                <Palette className="text-red-500" size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1">Weak Brand Messaging</h4>
                <p className="text-sm text-gray-400">Your value proposition is buried under generic corporate jargon.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="grid gap-6">
            {problems.map((problem, i) => (
              <motion.div 
                key={problem.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-3xl relative group active:scale-[0.98] transition-transform"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <problem.icon size={80} />
                </div>
                <h3 className="text-2xl font-display font-bold mb-3 flex items-center gap-3">
                   <problem.icon className="text-red-500" size={24} />
                   {problem.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {problem.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Decorative element */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/5 blur-[100px] rounded-full" />
        </div>
      </div>
    </section>
  );
}
