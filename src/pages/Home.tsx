import React from 'react';
import { Search, Twitter, ShieldCheck, BookOpen, Zap, CheckCircle2, ArrowRight, Download, Calendar } from 'lucide-react';
import { PRODUCTS, CATEGORIES, POSTS } from '../constants';
import ProductCard from '../components/ProductCard';
import SEO from '../components/SEO';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

const FILTERS = ['Today', 'New', 'Top Rated', 'Best Value', 'Free Tools', 'Editor\'s Pick'];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = React.useState<string>('All');
  const [selectedFilter, setSelectedFilter] = React.useState<string>('Today');
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (selectedFilter === 'Editor\'s Pick') return matchesCategory && matchesSearch && product.isEditorsPick;
    if (selectedFilter === 'Free Tools') return matchesCategory && matchesSearch && product.isFreePlan;
    if (selectedFilter === 'Top Rated') return matchesCategory && matchesSearch && product.rating >= 4.8;
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title="AI Tools for Creators – Compare Top Marketing & SEO Platforms"
        description="Discover the best AI tools for creators, marketers, and solopreneurs. Compare top SEO, email, and automation platforms, read honest reviews, and find the best affiliate tools."
        keywords="AI tools for creators, AI marketing tools for solopreneurs, best AI tools for affiliate marketing, AI tools directory for creators"
      />
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-diamond border-b border-slate-100 shadow-[0_1px_3px_rgba(0,0,0,0.05)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl font-display font-extrabold text-slate-900 tracking-tight mb-8">
              Discover The Best <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-[#2563EB] via-[#7E22CE] to-[#EC4899] bg-clip-text text-transparent">
                AI Tools, Marketing Platforms & Digital Services
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-[#374151] mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
              Compare trusted tools used by creators, marketers, and solopreneurs to grow faster online.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative mb-16">
              <div className="flex items-center bg-white border border-slate-200 rounded-2xl p-1.5 shadow-lg shadow-slate-200/50 focus-within:border-[#10B981] transition-all">
                <Search className="w-5 h-5 text-slate-400 ml-4" />
                <input
                  type="text"
                  placeholder="Search AI tools, SEO software, email platforms…"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 px-4 py-3 text-slate-900 focus:outline-none placeholder:text-slate-400 font-medium"
                />
                <button className="bg-[#10B981] text-white px-8 py-3.5 rounded-xl font-bold hover:bg-[#059669] transition-all shadow-md shadow-[#10B981]/20">
                  Search
                </button>
              </div>
            </div>

            {/* Category Tabs */}
            <div className="flex items-center justify-center border-b border-slate-100 overflow-x-auto no-scrollbar">
              <div className="flex space-x-10">
                {CATEGORIES.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={cn(
                      "pb-5 text-[15px] font-bold transition-all relative whitespace-nowrap",
                      selectedCategory === category
                        ? "text-brand-secondary"
                        : "text-slate-400 hover:text-slate-600"
                    )}
                  >
                    {category}
                    {selectedCategory === category && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-secondary"
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Pills & Trust Info */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-wrap gap-3">
              {FILTERS.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={cn(
                    "px-5 py-2 rounded-full text-[13px] font-bold transition-all border",
                    selectedFilter === filter
                      ? "bg-brand-primary border-brand-primary text-white shadow-lg shadow-brand-primary/20"
                      : "bg-white border-slate-200 text-slate-500 hover:border-slate-300"
                  )}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2 text-[14px] text-slate-400 font-bold">
                <ShieldCheck className="w-4 h-4 text-brand-primary" />
                Reviewed & tested by our team • Updated daily
              </div>
              <a
                href="https://twitter.com/GrowWithMed"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl border border-slate-100 text-[14px] font-bold text-slate-600 hover:text-brand-primary transition-colors"
              >
                <Twitter className="w-4 h-4 fill-current" />
                @GrowWithMed
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-2 h-2 bg-brand-secondary rounded-full" />
            <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Trusted by 50,000+ creators</span>
          </div>
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-24 bg-slate-50 rounded-[2rem] border border-dashed border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">No tools found</h3>
              <p className="text-slate-500">Try adjusting your filters or search query.</p>
              <button
                onClick={() => { setSelectedCategory('All'); setSelectedFilter('Today'); setSearchQuery(''); }}
                className="mt-8 bg-brand-primary text-white px-8 py-3 rounded-xl font-bold hover:opacity-90 transition-all"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-900 mb-4">Latest from the Blog</h2>
              <p className="text-slate-500 font-medium">Expert insights and tutorials to help you scale your digital business.</p>
            </div>
            <Link to="/blog" className="hidden md:flex items-center gap-2 text-brand-primary font-bold hover:underline">
              View all posts <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {POSTS.slice(0, 6).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                  <h3 className="text-lg font-display font-bold text-slate-900 mb-3 leading-tight group-hover:text-brand-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-bold text-brand-primary hover:gap-2 transition-all"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          <div className="mt-12 text-center md:hidden">
            <Link to="/blog" className="inline-flex items-center gap-2 text-brand-primary font-bold hover:underline">
              View all posts <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Free Resources Section */}
      <section className="py-24 bg-brand-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-secondary/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-extrabold mb-8 leading-tight">The Ultimate AI <br />Business Vault</h2>
              <p className="text-xl text-slate-300 mb-12 font-medium leading-relaxed">
                Get access to our curated bundle of 500+ high-converting AI prompts designed to automate your marketing, content creation, and sales.
              </p>
              <div className="space-y-6 mb-12">
                {[
                  '500+ Expert-Crafted AI Prompts',
                  'Marketing & Sales Automation Scripts',
                  'Content Repurposing Frameworks',
                  'Lifetime Updates Included'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-brand-secondary" />
                    </div>
                    <span className="text-lg font-bold">{item}</span>
                  </div>
                ))}
              </div>
              <a 
                href="https://growwithmed.gumroad.com/l/ai-business-vault"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-brand-secondary text-white px-10 py-5 rounded-2xl text-xl font-black hover:opacity-90 transition-all shadow-2xl shadow-brand-secondary/40 group"
              >
                Access The Vault Now
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-square rounded-[3rem] overflow-hidden border-8 border-white/10 shadow-2xl"
              >
                <img 
                  src="https://public-files.gumroad.com/0ztn55cxhp9x9t8r1j5nuwi6dix3" 
                  alt="AI Business Vault" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
