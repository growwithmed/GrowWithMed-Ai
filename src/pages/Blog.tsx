import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, Clock, ChevronRight } from 'lucide-react';
import { POSTS } from '../constants';
import SEO from '../components/SEO';

export default function Blog() {
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');

  const filteredPosts = categoryFilter 
    ? POSTS.filter(post => post.category === categoryFilter)
    : POSTS;

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      <SEO 
        title={categoryFilter ? `${categoryFilter} Articles | Grow With Med` : "The Growth Blog | Grow With Med"}
        description={categoryFilter 
          ? `Explore our latest articles and tutorials about ${categoryFilter}. Learn how to grow your online business with expert insights.`
          : "Expert insights, tutorials, and deep dives into the digital tools that power the modern web. Learn how to grow your online business with AI and automation."}
      />
      {/* Hero Header */}
      <section className="bg-white border-b border-slate-100 pt-20 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-black text-slate-900 mb-6 tracking-tight"
          >
            {categoryFilter ? (
              <>Articles in <span className="text-brand-primary">{categoryFilter}</span></>
            ) : (
              <>The <span className="text-brand-primary">Growth</span> Blog</>
            )}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-500 font-medium max-w-2xl mx-auto"
          >
            {categoryFilter 
              ? `Discover our best resources and guides for ${categoryFilter} to help you scale your business.`
              : "Expert insights, tutorials, and deep dives into the digital tools that power the modern web."}
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                  <h2 className="text-lg font-display font-bold text-slate-900 mb-3 leading-tight group-hover:text-brand-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-bold text-brand-primary hover:gap-2 transition-all"
                    >
                      Read More
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white rounded-3xl border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-3">No posts found</h3>
            <p className="text-slate-500">We haven't published any articles in this category yet.</p>
            <Link 
              to="/blog"
              className="mt-8 inline-block bg-brand-primary text-white px-8 py-3 rounded-xl font-bold hover:opacity-90 transition-all"
            >
              Back to Blog
            </Link>
          </div>
        )}
      </div>

    </div>
  );
}
