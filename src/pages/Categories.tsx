import React from 'react';
import { CATEGORIES, PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { 
  Sparkles, 
  Target, 
  Search, 
  Youtube, 
  Zap, 
  Tag, 
  LayoutGrid,
  ChevronRight
} from 'lucide-react';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  'AI Tools': <Sparkles className="w-5 h-5" />,
  'Marketing & Funnels': <Target className="w-5 h-5" />,
  'SEO Tools': <Search className="w-5 h-5" />,
  'YouTube Growth': <Youtube className="w-5 h-5" />,
  'Automation': <Zap className="w-5 h-5" />,
  'Deals': <Tag className="w-5 h-5" />,
  'All': <LayoutGrid className="w-5 h-5" />
};

export default function Categories() {
  const [activeCategory, setActiveCategory] = React.useState<string>('All');

  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-white border-b border-slate-100 pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl font-display font-black text-slate-900 mb-6 tracking-tight">
              Explore Our <span className="text-brand-primary">Toolbox</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed font-medium">
              We've curated the most powerful digital assets for solopreneurs and creators. 
              Browse by category to find the exact tool you need to scale your business.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Navigation */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-32 space-y-2">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-6 px-4">Categories</h3>
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "w-full flex items-center justify-between px-4 py-3.5 rounded-2xl text-sm font-bold transition-all group",
                    activeCategory === category
                      ? "bg-brand-primary text-white shadow-xl shadow-brand-primary/20"
                      : "text-slate-600 hover:bg-white hover:text-brand-primary border border-transparent hover:border-slate-100"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "transition-colors",
                      activeCategory === category ? "text-white" : "text-slate-400 group-hover:text-brand-primary"
                    )}>
                      {CATEGORY_ICONS[category]}
                    </div>
                    {category}
                  </div>
                  <span className={cn(
                    "text-[10px] px-2 py-0.5 rounded-full",
                    activeCategory === category ? "bg-white/20 text-white" : "bg-slate-100 text-slate-400"
                  )}>
                    {category === 'All' ? PRODUCTS.length : PRODUCTS.filter(p => p.category === category).length}
                  </span>
                </button>
              ))}
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-8 bg-brand-secondary rounded-full" />
                <h2 className="text-2xl font-display font-extrabold text-slate-900">
                  {activeCategory === 'All' ? 'All Featured Tools' : activeCategory}
                </h2>
              </div>
              <p className="text-sm font-bold text-slate-400">
                Showing {filteredProducts.length} results
              </p>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-[2.5rem] border border-slate-100 p-20 text-center">
                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <LayoutGrid className="w-10 h-10 text-slate-200" />
                </div>
                <h3 className="text-xl font-display font-extrabold text-slate-900 mb-2">No tools found</h3>
                <p className="text-slate-500 font-medium">We haven't added any tools to this category yet. Check back soon!</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
