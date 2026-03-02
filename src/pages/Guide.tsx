import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, CheckCircle2, ArrowRight } from 'lucide-react';

const GUIDES = [
  {
    title: 'How to Choose the Right AI Tool',
    desc: 'A comprehensive guide on evaluating AI models for your business workflow.',
    category: 'AI Tools'
  },
  {
    title: 'Web Hosting Comparison 2026',
    desc: 'Shared vs VPS vs Dedicated: Which one do you actually need?',
    category: 'Hosting'
  },
  {
    title: 'VPN Security Checklist',
    desc: '10 things to look for before trusting a VPN provider with your data.',
    category: 'Security'
  }
];

export default function Guide() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-3xl mb-16">
        <h1 className="text-4xl font-display font-extrabold text-slate-900 mb-6">Expert Guides</h1>
        <p className="text-slate-500 text-lg leading-relaxed">
          Our in-depth guides help you navigate the complex world of digital services. We break down the technical jargon so you can make informed decisions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {GUIDES.map((guide, idx) => (
          <motion.div
            key={guide.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-brand-primary/30 hover:shadow-xl transition-all group cursor-pointer"
          >
            <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-primary/10 transition-colors">
              <BookOpen className="w-6 h-6 text-brand-primary" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 block">{guide.category}</span>
            <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-brand-primary transition-colors">{guide.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">{guide.desc}</p>
            <div className="flex items-center gap-2 text-brand-primary font-bold text-sm">
              Read Guide <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 bg-brand-primary rounded-3xl p-12 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-3xl font-display font-bold mb-6">Need a custom recommendation?</h2>
          <p className="text-slate-200 mb-8">
            Tell us about your project and we'll help you find the perfect stack of tools to get it off the ground.
          </p>
          <button className="bg-white text-brand-primary px-8 py-3 rounded-xl font-bold hover:bg-slate-50 transition-all">
            Contact Our Experts
          </button>
        </div>
      </div>
    </div>
  );
}
