import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "CEO",
      company: "Aether Health",
      content: "Nexus completely transformed our patient portal. Our engagement rate doubled within the first month of launch. Their attention to UX detail is unmatched.",
      avatar: "https://i.pravatar.cc/150?u=sarah",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Founder",
      company: "Vortex Capital",
      content: "We were losing high-net-worth clients because of our outdated site. Nexus built a premium experience that finally reflects our brand's authority.",
      avatar: "https://i.pravatar.cc/150?u=michael",
      rating: 5
    },
    {
      name: "David Ross",
      role: "Marketing Director",
      company: "Solara Eco",
      content: "The free assessment was a eye-opener. They identified critical flaws we didn't even know existed. The resulting redesign paid for itself in 3 weeks.",
      avatar: "https://i.pravatar.cc/150?u=david",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="section-padding overflow-hidden">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <span className="text-brand-primary font-bold text-sm uppercase tracking-widest mb-4 block">Client Feedback</span>
        <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter">
          What Brand Leaders <span className="text-gradient">Are Saying</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-3xl relative"
          >
            <Quote className="absolute top-8 right-8 text-white/5" size={60} />
            
            <div className="flex gap-1 mb-6">
              {[...Array(item.rating)].map((_, i) => (
                <Star key={i} size={16} className="fill-yellow-500 text-yellow-500" />
              ))}
            </div>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed italic">
              "{item.content}"
            </p>

            <div className="flex items-center gap-4">
              <img 
                src={item.avatar} 
                alt={item.name} 
                className="w-12 h-12 rounded-full border-2 border-brand-primary/20"
                referrerPolicy="no-referrer"
              />
              <div>
                <h4 className="font-bold">{item.name}</h4>
                <p className="text-xs text-gray-500">{item.role}, {item.company}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
