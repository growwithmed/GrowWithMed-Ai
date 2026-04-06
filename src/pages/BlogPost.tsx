import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import { 
  Calendar, 
  Clock, 
  ChevronRight, 
  Search, 
  Tag, 
  ArrowLeft,
  Share2,
  Bookmark,
  MessageSquare,
  ExternalLink,
  Zap
} from 'lucide-react';
import { cn } from '../lib/utils';
import SEO from '../components/SEO';
import { 
  getRelatedPosts
} from '../utils/seoAutomation';
import { POSTS, CATEGORIES as CONST_CATEGORIES } from '../constants';

export default function BlogPost() {
  const { id } = useParams();
  
  // Find post metadata from constants
  const post = POSTS.find(p => p.slug === id || p.id.toString() === id) || POSTS[0];

  const allPosts = POSTS;
  const currentPostIndex = allPosts.findIndex(p => p.slug === post.slug);
  const relatedPosts = getRelatedPosts(post.id, post.category || '', allPosts);
  
  const recentPosts = [...allPosts]
    .sort((a, b) => new Date(b.publishDate || b.date).getTime() - new Date(a.publishDate || a.date).getTime())
    .slice(0, 3);

  const categoriesWithCount = CONST_CATEGORIES
    .filter(c => c !== 'All')
    .map(name => ({
      name,
      count: allPosts.filter(p => p.category === name).length
    }));

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      <SEO 
        title={post.metaTitle || post.title}
        description={post.metaDescription || post.excerpt}
        keywords={post.metaKeywords}
        image={post.image}
        type="article"
        author={post.author}
        publishDate={post.publishDate}
        updatedDate={post.updatedDate}
        slug={post.slug}
        faqData={post.faqData}
      />
      {/* Breadcrumbs & Header */}
      <div className="bg-white border-b border-slate-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-brand-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                {post.category}
              </span>
              <div className="flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-slate-900 leading-tight tracking-tight mb-8">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Content */}
          <main className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden"
            >
              <div className="aspect-[21/9] overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              
              <div className="p-8 md:p-16">
                <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed prose-p:text-lg prose-blockquote:border-brand-primary prose-blockquote:bg-slate-50 prose-blockquote:rounded-r-xl prose-a:text-brand-primary prose-a:font-bold hover:prose-a:underline">
                  <ReactMarkdown>{post.content || ''}</ReactMarkdown>
                </div>
                
                {/* Post Footer */}
                <div className="mt-16 pt-12 border-t border-slate-100 flex flex-wrap items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Share this:</span>
                    <div className="flex items-center gap-2">
                      <button className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-brand-primary hover:text-white transition-all">
                        <Share2 className="w-4 h-4" />
                      </button>
                      <button className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-brand-primary hover:text-white transition-all">
                        <Bookmark className="w-4 h-4" />
                      </button>
                      <button className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-brand-primary hover:text-white transition-all">
                        <MessageSquare className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
                      <img src="https://i.ibb.co/zhS2txZW/Design-sans-titre-5.png" alt="Med Koudi" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">Med Koudi</div>
                      <div className="text-xs font-medium text-slate-400">Founder & Editor</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="mt-16 pt-16 border-t border-slate-100">
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-8">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map((related) => (
                    <Link 
                      key={related.slug} 
                      to={`/blog/${related.slug}`}
                      className="group"
                    >
                      <div className="aspect-[16/9] rounded-xl overflow-hidden mb-4">
                        <img 
                          src={related.image} 
                          alt={related.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <h4 className="font-bold text-slate-900 group-hover:text-brand-primary transition-colors line-clamp-2">
                        {related.title}
                      </h4>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </main>

          {/* Sidebar */}
          <aside className="w-full lg:w-96 space-y-8">
            
            {/* Search Widget */}
            <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">
              <h3 className="text-lg font-display font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Search className="w-5 h-5 text-brand-primary" />
                Search Blog
              </h3>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search articles..."
                  className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all font-medium"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-brand-primary transition-colors">
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Gumroad Promotion Widget */}
            <div className="group rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white">
              <a 
                href="https://growwithmed.gumroad.com/l/Make-Your-First-Sale-in-4-Weeks" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img 
                    src="https://i.ibb.co/p6jqcn7x/20260219-0147-Image-Generation-remix-01khsnszpxe4v9j9672sbzdw5n.png" 
                    alt="Make Your First Sale in 4 Weeks" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <span className="text-white font-bold flex items-center gap-2">
                      Get Started <ExternalLink className="w-4 h-4" />
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-display font-bold text-slate-900 mb-3 group-hover:text-brand-primary transition-colors leading-tight">
                    Make Your First Sale in 4 Weeks
                  </h4>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed mb-6">
                    The exact roadmap to launching your first digital product and securing your first sale in just 30 days.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-brand-primary font-black text-2xl">$9.99</span>
                    <span className="bg-brand-primary/10 text-brand-primary px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest">
                      Best Seller
                    </span>
                  </div>
                </div>
              </a>
            </div>

            {/* Categories Widget */}
            <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">
              <h3 className="text-lg font-display font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Tag className="w-5 h-5 text-brand-primary" />
                Categories
              </h3>
              <div className="space-y-2">
                {categoriesWithCount.map((cat) => (
                  <Link 
                    key={cat.name}
                    to={`/blog?category=${cat.name}`}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                  >
                    <span className="text-sm font-bold text-slate-600 group-hover:text-brand-primary transition-colors">{cat.name}</span>
                    <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded-lg group-hover:bg-brand-primary/10 group-hover:text-brand-primary transition-all">
                      {cat.count}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Recent Posts Widget */}
            <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">
              <h3 className="text-lg font-display font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Clock className="w-5 h-5 text-brand-primary" />
                Recent Posts
              </h3>
              <div className="space-y-6">
                {recentPosts.map((post) => (
                  <Link 
                    key={post.id} 
                    to={`/blog/${post.slug}`}
                    className="flex gap-4 group"
                  >
                    <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 border border-slate-100">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h4 className="text-sm font-bold text-slate-900 leading-snug group-hover:text-brand-primary transition-colors line-clamp-2 mb-1">
                        {post.title}
                      </h4>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{post.date}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </aside>
        </div>
      </div>
    </div>
  );
}
