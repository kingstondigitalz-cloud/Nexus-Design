import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function LeadForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://formspree.io/f/xvzyovjj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const result = await response.json();
        console.error('Formspree error:', result);
        setIsError(true);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass p-8 rounded-3xl text-center flex flex-col items-center justify-center min-h-[400px]"
      >
        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 size={40} className="text-green-500" />
        </div>
        <h3 className="text-2xl font-display font-bold mb-4">Assessment Requested!</h3>
        <p className="text-gray-400">
          Thank you! We've received your details. One of our experts will review your website and send over your custom audit within 24-48 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <div id="audit" className="glass p-8 md:p-10 rounded-3xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-2 h-full bg-brand-primary opacity-50" />
      
      <div className="mb-8">
        <h3 className="text-2xl font-display font-bold mb-2">Claim Your Free Audit</h3>
        <p className="text-gray-400 text-sm">
          Discover why your website isn't converting like it should.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Full Name</label>
            <input 
              required
              name="full_name"
              type="text" 
              placeholder="Elon Musk"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand-primary transition-colors text-white"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Business Name</label>
            <input 
              required
              name="business_name"
              type="text" 
              placeholder="X.com"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand-primary transition-colors text-white"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Website URL</label>
          <input 
            required
            name="website_url"
            type="url" 
            placeholder="https://example.com"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand-primary transition-colors text-white"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Email Address</label>
            <input 
              required
              name="email"
              type="email" 
              placeholder="elon@mars.com"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand-primary transition-colors text-white"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Phone (Optional)</label>
            <input 
              name="phone"
              type="tel" 
              placeholder="+1 (555) 000-0000"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand-primary transition-colors text-white"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Biggest Challenge</label>
          <select 
            name="biggest_challenge"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand-primary transition-colors text-white appearance-none"
          >
            <option className="bg-dark-surface">Low Conversion Rate</option>
            <option className="bg-dark-surface">Slow Loading Speed</option>
            <option className="bg-dark-surface">Outdated Design</option>
            <option className="bg-dark-surface">Not Mobile Friendly</option>
            <option className="bg-dark-surface">Poor SEO Rankings</option>
          </select>
        </div>

        {isError && (
          <p className="text-red-500 text-xs text-center">Something went wrong. Please try again or contact us directly.</p>
        )}

        <button 
          disabled={isLoading}
          type="submit"
          className="w-full bg-brand-primary hover:bg-brand-secondary text-white font-bold py-4 rounded-xl mt-4 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 group"
        >
          {isLoading ? (
            <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              Claim My Free Website Assessment
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </>
          )}
        </button>

        <p className="text-[10px] text-center text-gray-500 mt-4 uppercase tracking-tighter">
          No obligation. 100% Free assessment. We'll identify what's hurting your conversions.
        </p>
      </form>
    </div>
  );
}
