import { Star, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../constants';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl hover:border-brand-primary/20 transition-all duration-300 flex flex-col h-full relative"
    >
      <Link to={`/product/${product.id}`} className="absolute inset-0 z-0" />
      
      <div className="relative p-6 pb-0 z-10 pointer-events-none">
        <div className="flex justify-between items-start mb-4">
          <div className="w-12 h-12 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col items-end gap-2">
            {product.isEditorsPick && (
              <span className="bg-brand-primary text-white px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider">
                Editor's Pick
              </span>
            )}
            {product.isBestForBeginners && (
              <span className="bg-brand-secondary text-white px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider">
                Best for Beginners
              </span>
            )}
            {product.isSponsored && (
              <span className="bg-slate-100 text-slate-500 px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider">
                Sponsored
              </span>
            )}
          </div>
        </div>
        
        <div className="flex items-center gap-1.5 mb-1">
          <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-primary transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center gap-0.5 text-amber-500">
            <Star className="w-3 h-3 fill-current" />
            <span className="text-xs font-bold">{product.rating}</span>
          </div>
        </div>
        
        <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2 min-h-[40px]">
          {product.tagline}
        </p>
      </div>

      <div className="mt-auto p-6 pt-0 z-10">
        <div className="flex flex-wrap gap-2 mb-4 pointer-events-none">
          {product.isFreePlan && (
            <span className="text-[10px] font-bold text-brand-primary bg-brand-primary/5 px-2 py-0.5 rounded">
              Free Plan
            </span>
          )}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <Link
            to={`/product/${product.id}`}
            className="text-sm font-bold text-brand-primary hover:text-brand-secondary transition-colors flex items-center gap-1 relative z-20"
          >
            Review
            <ArrowUpRight className="w-3 h-3" />
          </Link>
          <a
            href={product.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-slate-400 hover:text-brand-primary transition-colors relative z-20"
          >
            Visit Site
          </a>
        </div>
      </div>
    </motion.div>
  );
}
