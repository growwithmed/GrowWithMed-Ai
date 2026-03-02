import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, Clock, ChevronRight } from 'lucide-react';
import { POSTS } from '../constants';
import SEO from '../components/SEO';

export default function Blog() {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      <SEO 
        title="The Growth Blog | Grow With Med"
        description="Expert insights, tutorials, and deep dives into the digital tools that power the modern web. Learn how to grow your online business with AI and automation."
      />
      {/* Hero Header */}
      <section className="bg-white border-b border-slate-100 pt-20 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-black text-slate-900 mb-6 tracking-tight"
          >
            The <span className="text-brand-primary">Growth</span> Blog
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-500 font-medium max-w-2xl mx-auto"
          >
            Expert insights, tutorials, and deep dives into the digital tools that power the modern web.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {POSTS.map((post, index) => (
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
      </div>

    </div>
  );
}
