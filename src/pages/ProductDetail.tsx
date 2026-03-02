import { useParams, Link, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { Star, Check, ArrowLeft, ExternalLink, ShieldCheck, Zap, MessageSquare, Globe, Info } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { motion } from 'motion/react';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-32 text-center">
        <h1 className="text-4xl font-display font-black mb-4">Product not found</h1>
        <Link to="/" className="text-brand-primary font-bold hover:underline">Back to home</Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Breadcrumbs & Back */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button 
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-primary transition-colors text-sm font-bold group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back
        </button>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100 bg-slate-50"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full aspect-[4/3] object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-8"
          >
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  {product.category}
                </span>
                <div className="flex items-center gap-1 text-amber-500 bg-amber-50 px-3 py-1 rounded-full">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span className="text-xs font-bold">{product.rating} / 5.0</span>
                </div>
                {product.isEditorsPick && (
                  <span className="bg-brand-secondary text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                    Editor's Pick
                  </span>
                )}
              </div>
              
              <h1 className="text-4xl md:text-6xl font-display font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
                {product.name}
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed font-medium">
                {product.tagline}
              </p>
            </div>

            <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 shadow-sm">
              <div className="flex items-center justify-between mb-8">
                <div className="text-right w-full">
                  <span className="text-[10px] text-slate-400 block mb-2 uppercase tracking-[0.2em] font-bold">Verification</span>
                  <span className="inline-flex items-center gap-2 text-brand-secondary font-bold text-sm">
                    <ShieldCheck className="w-5 h-5" />
                    Verified Deal
                  </span>
                </div>
              </div>
              
              <a
                href={product.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-brand-secondary text-white px-8 py-5 rounded-2xl text-lg font-bold hover:opacity-90 transition-all shadow-xl shadow-brand-secondary/20 flex items-center justify-center gap-3 group"
              >
                Get {product.name} Now
                <ExternalLink className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              
              <div className="flex items-center justify-center gap-2 mt-6 text-[11px] text-slate-400 font-bold uppercase tracking-wider">
                <Info className="w-3.5 h-3.5" />
                Affiliate Disclosure: We may earn a commission
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
                <div className="w-10 h-10 bg-brand-primary/10 rounded-xl flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-brand-primary" />
                </div>
                <span className="text-sm font-bold text-slate-700">Expert Tested</span>
              </div>
              <div className="flex items-center gap-3 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
                <div className="w-10 h-10 bg-brand-secondary/10 rounded-xl flex items-center justify-center">
                  <Zap className="w-5 h-5 text-brand-secondary" />
                </div>
                <span className="text-sm font-bold text-slate-700">Fast Growth</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-16">
            {/* Review */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1.5 h-8 bg-brand-primary rounded-full" />
                <h2 className="text-3xl font-display font-extrabold text-slate-900">Our Expert Review</h2>
              </div>
              <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 prose prose-slate max-w-none prose-headings:font-display prose-headings:font-extrabold prose-p:font-medium prose-p:text-slate-600 prose-p:leading-relaxed">
                <ReactMarkdown>{product.review}</ReactMarkdown>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-10">
            <div className="bg-brand-primary text-white p-10 rounded-[2.5rem] shadow-2xl shadow-brand-primary/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-secondary/20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
              <h3 className="text-2xl font-display font-extrabold mb-6 relative z-10">Why we love it</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-8 relative z-10 font-medium">
                {product.description}
              </p>
              <ul className="space-y-4 relative z-10">
                {['High performance', 'Great support', 'Modern UI'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm font-bold">
                    <div className="w-5 h-5 bg-brand-secondary rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Gumroad Promotion */}
            <div className="group rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white">
              <a 
                href="https://growwithmed.gumroad.com/l/Solo-success-system" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img 
                    src="https://i.ibb.co/Rk39hMsm/Design-sans-titre-11.png" 
                    alt="Solo Success System" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <span className="text-white font-bold flex items-center gap-2">
                      Learn More <ExternalLink className="w-4 h-4" />
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-display font-extrabold text-slate-900 mb-3 group-hover:text-brand-primary transition-colors">
                    Solo Success System
                  </h4>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed mb-6">
                    The ultimate blueprint for building a profitable one-person business in 2026.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-brand-primary font-black text-2xl">$19</span>
                    <span className="bg-brand-primary/10 text-brand-primary px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest">
                      Limited Offer
                    </span>
                  </div>
                </div>
              </a>
            </div>

          </aside>
        </div>
      </section>
    </div>
  );
}
