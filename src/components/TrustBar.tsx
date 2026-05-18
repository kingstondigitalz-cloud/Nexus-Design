import { motion } from 'motion/react';

export default function TrustBar() {
  const logos = [
    { name: 'TechFlow', url: 'https://cdn.brandfetch.io/stripe.com/fallback/logo/theme/dark/h/512/w/512?t=1' },
    { name: 'Nexus', url: 'https://cdn.brandfetch.io/uber.com/fallback/logo/theme/dark/h/512/w/512?t=1' },
    { name: 'Aether', url: 'https://cdn.brandfetch.io/airbnb.com/fallback/logo/theme/dark/h/512/w/512?t=1' },
    { name: 'Prism', url: 'https://cdn.brandfetch.io/postman.com/fallback/logo/theme/dark/h/512/w/512?t=1' },
    { name: 'Vortex', url: 'https://cdn.brandfetch.io/framer.com/fallback/logo/theme/dark/h/512/w/512?t=1' },
  ];

  return (
    <div className="border-y border-white/5 py-12 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-[10px] uppercase tracking-[0.3em] font-bold text-gray-500 mb-10">
          POWERING NEXT-GEN INTERFACES FOR INDUSTRY LEADERS
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo) => (
            <motion.div 
              whileHover={{ scale: 1.1, opacity: 1 }}
              key={logo.name} 
              className="h-8 md:h-10 filter brightness-200"
            >
              <img 
                src={logo.url} 
                alt={logo.name} 
                className="h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
