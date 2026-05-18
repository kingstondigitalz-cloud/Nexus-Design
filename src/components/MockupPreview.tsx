import { motion } from 'motion/react';

export default function MockupPreview() {
  // Use the generated image path from the environment
  // This is a placeholder for the actual path which I will update
  const imageUrl = "/src/assets/images/hero_mockup_1779098925792.png";

  return (
    <section className="pb-20 px-6 max-w-7xl mx-auto -mt-20 relative z-20">
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative group"
      >
        {/* Glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
        
        <div className="relative glass p-4 rounded-[2rem] overflow-hidden">
          <img 
            src={imageUrl} 
            alt="Nexus Design Premium Website Mockup" 
            className="w-full h-auto rounded-[1.5rem] shadow-2xl"
            referrerPolicy="no-referrer"
          />
          
          {/* HUD Elements Overlay */}
          <div className="absolute top-10 left-10 hidden md:block">
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="glass px-6 py-4 rounded-2xl border-white/20 backdrop-blur-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center font-bold text-green-500">
                  98
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-gray-500">Page Speed</div>
                  <div className="text-sm font-bold">Industry Leading</div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-10 right-10 hidden md:block">
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="glass px-6 py-4 rounded-2xl border-white/20 backdrop-blur-2xl"
            >
              <div className="text-[10px] uppercase font-bold text-gray-500 mb-2">Monthly Conversions</div>
              <div className="text-2xl font-display font-bold text-gradient">+342%</div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
