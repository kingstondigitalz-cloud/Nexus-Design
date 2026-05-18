import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function PortfolioSection() {
  const projects = [
    {
      title: "Aether Health",
      category: "SaaS Platform",
      image: "https://picsum.photos/seed/aether/800/600",
      stats: "+142% Signup Rate"
    },
    {
      title: "Vortex Capital",
      category: "Fintech App",
      image: "https://picsum.photos/seed/vortex/800/600",
      stats: "0.8s Load Speed"
    },
    {
      title: "Solara Eco",
      category: "E-commerce",
      image: "https://picsum.photos/seed/solara/800/600",
      stats: "$2M Revenue Growth"
    },
    {
      title: "Prism Creative",
      category: "Portfolio Site",
      image: "https://picsum.photos/seed/prism/800/600",
      stats: "Perfect 100 Lighthouse"
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-black/40">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="max-w-2xl">
          <span className="text-brand-primary font-bold text-sm uppercase tracking-widest mb-4 block">Proven Results</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter">
            We don't just build sites. We build <span className="text-gradient">Profit Generators.</span>
          </h2>
        </div>
        <a href="#audit" className="group flex items-center gap-2 text-white font-bold text-lg">
          View all projects 
          <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
            <ArrowUpRight size={20} />
          </div>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.div 
            key={project.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-3xl cursor-pointer"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
            
            <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-brand-primary font-bold text-xs uppercase tracking-widest mb-2 block">{project.category}</span>
                  <h3 className="text-3xl font-display font-bold mb-4">{project.title}</h3>
                  <div className="inline-block bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg text-sm font-bold border border-white/10">
                    {project.stats}
                  </div>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0">
                  <div className="w-14 h-14 bg-brand-primary rounded-full flex items-center justify-center text-white">
                    <ArrowUpRight size={28} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
