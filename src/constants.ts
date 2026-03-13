import postsData from './data/posts.json';
import productsData from './data/products.json';

export interface UserReview {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  avatar?: string;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: 'AI Tools' | 'Marketing & Funnels' | 'SEO Tools' | 'YouTube Growth' | 'Automation' | 'Deals';
  rating: number;
  image: string;
  affiliateUrl: string;
  features: string[];
  review: string;
  userReviews?: UserReview[];
  isEditorsPick?: boolean;
  isFreePlan?: boolean;
  isBestForBeginners?: boolean;
  isSponsored?: boolean;
}

export const PRODUCTS: Product[] = productsData as Product[];

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  author?: string;
  category?: string;
  publishDate?: string;
  updatedDate?: string;
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
  content?: string;
}

export const POSTS: BlogPost[] = postsData as BlogPost[];

export const CATEGORIES = ['All', 'AI Tools', 'Marketing & Funnels', 'SEO Tools', 'YouTube Growth', 'Automation', 'Deals'] as const;
