import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Lazy load pages for performance optimization
const Home = lazy(() => import('./pages/Home'));
const Categories = lazy(() => import('./pages/Categories'));
const Guide = lazy(() => import('./pages/Guide'));
const About = lazy(() => import('./pages/About'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const FAQ = lazy(() => import('./pages/FAQ'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));

// Loading component
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-10 h-10 border-4 border-brand-primary/20 border-t-brand-primary rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="categories" element={<Categories />} />
            <Route path="ai-tools" element={<Categories />} />
            <Route path="marketing" element={<Categories />} />
            <Route path="seo" element={<Categories />} />
            <Route path="youtube" element={<Categories />} />
            <Route path="guide" element={<Guide />} />
            <Route path="resources" element={<Blog />} />
            <Route path="deals" element={<Categories />} />
            <Route path="about" element={<About />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="terms" element={<Terms />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:id" element={<BlogPost />} />
            {/* Fallback for 404 */}
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
