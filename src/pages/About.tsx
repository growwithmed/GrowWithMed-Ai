import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Users, Zap, Globe } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 mb-6">About Grow With Med</h1>
        <p className="text-slate-500 text-lg leading-relaxed">
          We are a team of tech enthusiasts, developers, and digital marketers dedicated to bringing transparency to the digital service industry.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
        <div>
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">Our Mission</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            In an era of endless options and aggressive marketing, finding the right digital tool can be overwhelming. Grow With Med was founded to cut through the noise.
          </p>
          <p className="text-slate-600 leading-relaxed">
            We provide unbiased, data-driven reviews and comparisons of the services that power the modern web. Whether you're a solo founder or a growing team, we help you find the tools that actually work.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: ShieldCheck, title: 'Unbiased', desc: 'No paid rankings.' },
            { icon: Users, title: 'Community', desc: '50k+ active users.' },
            { icon: Zap, title: 'Fast', desc: 'Real-time updates.' },
            { icon: Globe, title: 'Global', desc: 'Worldwide coverage.' },
          ].map((item) => (
            <div key={item.title} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <item.icon className="w-8 h-8 text-brand-primary mb-4" />
              <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
              <p className="text-xs text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-slate-900 rounded-[2rem] p-12 md:p-20 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">Join our growing community</h2>
        <p className="text-slate-400 mb-12 max-w-2xl mx-auto">
          Stay updated with the latest tool reviews, exclusive deals, and digital growth strategies.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-brand-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-brand-primary/90 transition-all">
            Subscribe to Newsletter
          </button>
          <button className="bg-white/10 text-white border border-white/20 px-8 py-3 rounded-xl font-bold hover:bg-white/20 transition-all">
            Follow on Twitter
          </button>
        </div>
      </div>
    </div>
  );
}
