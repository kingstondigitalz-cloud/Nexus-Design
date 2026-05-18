import { motion } from 'motion/react';
import { Mail, Phone, Instagram, Linkedin, Twitter, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-surface pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          {/* Brand */}
          <div className="md:col-span-4">
            <a href="/" className="flex items-center gap-2 mb-8 group">
              <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center font-display font-bold text-xl text-white transform group-hover:rotate-12 transition-transform">
                N
              </div>
              <span className="font-display font-bold text-2xl tracking-tighter">NEXUS</span>
            </a>
            <p className="text-gray-400 mb-8 max-w-sm leading-relaxed">
              We engineer high-performance digital experiences that convert visitors into loyal customers. Let's transform your online presence.
            </p>
            <div className="flex gap-4">
              {[Twitter, Instagram, Linkedin, MessageCircle].map((Icon, i) => (
                <motion.a 
                  key={i}
                  href="#" 
                  whileHover={{ y: -5, color: '#3b82f6' }}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 transition-colors"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 md:col-start-6">
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-gray-500">Agency</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Process</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="md:col-span-2">
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-gray-500">Help</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-gray-500">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-brand-primary" />
                hello@nexusdesign.com
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-brand-primary" />
                +1 (555) 234-5678
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={16} className="text-brand-primary" />
                WhatsApp: +1 555-CHAT
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-gray-500">
            © {currentYear} Nexus Design Agency. All rights reserved. Built for conversion.
          </p>
          <div className="flex items-center gap-6">
             <span className="flex items-center gap-2 text-[10px] text-gray-500 uppercase tracking-widest">
               <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
               Current Assessment Capacity: 84%
             </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
