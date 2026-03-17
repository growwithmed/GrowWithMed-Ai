import { BlogPost } from '../constants';

/**
 * Generates an SEO-friendly slug from a title.
 */
export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
};

/**
 * Generates a meta description from HTML content.
 */
export const generateMetaDescription = (content: string, maxLength: number = 160): string => {
  const plainText = content.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
  if (plainText.length <= maxLength) return plainText;
  
  // Try to cut at the last space before maxLength
  const truncated = plainText.substring(0, maxLength - 3);
  const lastSpace = truncated.lastIndexOf(' ');
  
  if (lastSpace > 120) {
    return plainText.substring(0, lastSpace) + '...';
  }
  
  return truncated + '...';
};

/**
 * Suggests related posts based on category and shared keywords.
 */
export const getRelatedPosts = (currentPostId: number, category: string, allPosts: any[]): any[] => {
  return allPosts
    .filter(post => post.id !== currentPostId && post.category === category)
    .slice(0, 3);
};
