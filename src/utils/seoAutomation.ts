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
  return plainText.substring(0, maxLength - 3) + '...';
};

/**
 * Suggests related posts based on category and shared keywords.
 */
export const getRelatedPosts = (currentPostId: number, category: string, allPosts: any[]): any[] => {
  return allPosts
    .filter(post => post.id !== currentPostId && post.category === category)
    .slice(0, 3);
};

/**
 * Generates social media sharing copy for various platforms.
 */
export const generateSocialPosts = (post: any) => {
  const url = `https://www.growwithmed.site/blog/${post.slug}`;
  const hashtags = post.metaKeywords 
    ? post.metaKeywords.split(',').map((k: string) => `#${k.trim().replace(/\s+/g, '')}`).join(' ')
    : '#AffiliateMarketing #DigitalGrowth #Solopreneur';

  return {
    twitter: {
      hook: `🚀 ${post.title}\n\n${post.excerpt || post.metaDescription}\n\nRead more here: ${url}\n\n${hashtags}`,
      hashtags: hashtags
    },
    linkedin: {
      hook: `I just published a new deep dive: "${post.title}"\n\n${post.excerpt || post.metaDescription}\n\nIf you're looking to scale your digital business, this is for you.\n\nCheck it out: ${url}\n\n${hashtags}`,
    },
    pinterest: {
      title: post.title,
      description: `${post.excerpt || post.metaDescription} #PinterestMarketing #PassiveIncome ${hashtags}`,
      link: url
    },
    reddit: {
      title: `[Guide] ${post.title}`,
      content: `Hey everyone, I just put together a guide on ${post.title.toLowerCase()}.\n\nSummary: ${post.excerpt || post.metaDescription}\n\nFull article: ${url}\n\nHope this helps someone!`,
    }
  };
};

/**
 * Suggests internal links based on content keywords.
 */
export const suggestInternalLinks = (content: string, allPosts: any[]): { text: string, url: string }[] => {
  const suggestions: { text: string, url: string }[] = [];
  const lowerContent = content.toLowerCase();

  allPosts.forEach(post => {
    const keywords = post.title.toLowerCase().split(' ');
    const match = keywords.some((k: string) => k.length > 4 && lowerContent.includes(k));
    
    if (match) {
      suggestions.push({
        text: post.title,
        url: `/blog/${post.slug}`
      });
    }
  });

  return suggestions.slice(0, 3);
};

/**
 * Suggests content clusters and future topics.
 */
export const suggestContentClusters = (category: string) => {
  const clusters: Record<string, string[]> = {
    'AI Tools': [
      'Top 10 AI Tools for Video Editing in 2026',
      'How to Use AI to Automate Customer Support',
      'The Future of Generative AI in Digital Marketing'
    ],
    'Marketing & Funnels': [
      'High-Converting Landing Page Templates for 2026',
      'How to Build a Webinar Funnel that Actually Sells',
      'Email Segmentation Strategies for Affiliate Marketers'
    ],
    'Automation': [
      'Make.com vs Zapier: Which is Better for Solopreneurs?',
      'Automating Your Social Media Calendar with AI',
      'How to Connect Your CRM to Your Sales Funnel'
    ],
    'YouTube Growth': [
      'YouTube SEO Checklist for 2026',
      'How to Monetize a Small YouTube Channel',
      'The Secret to Viral YouTube Shorts'
    ]
  };

  return clusters[category] || ['Advanced SEO Strategies', 'Digital Product Launch Guide', 'Affiliate Marketing Mastery'];
};
