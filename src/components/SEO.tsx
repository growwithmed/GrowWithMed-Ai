import React from 'react';
import { Helmet } from 'react-helmet-async';
import { generateMetaDescription } from '../utils/seoAutomation';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  author?: string;
  publishDate?: string;
  updatedDate?: string;
  slug?: string;
  faqData?: { question: string; answer: string }[];
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  author = 'Med Koudi',
  publishDate,
  updatedDate,
  slug,
  faqData
}) => {
  const siteName = 'Grow With Med';
  const domain = 'https://www.growwithmed.site';
  
  // Auto-generation logic
  const metaTitle = title 
    ? (title.length > 60 ? title.substring(0, 57) + '...' : title)
    : siteName;
    
  // Use utility for description if it's too long or missing
  let metaDescription = description || 'Discover the best AI tools, marketing platforms & digital services. Compare trusted tools used by creators, marketers, and solopreneurs to grow faster online.';
  
  // If it's too long, truncate it
  if (metaDescription.length > 160) {
    metaDescription = generateMetaDescription(metaDescription, 160);
  }
  
  // If it's too short, try to expand it slightly to reach the 140-160 range
  if (metaDescription.length < 140 && !description) {
    // Default is already 154, so this only applies if a short description was passed
  } else if (metaDescription.length < 140 && description) {
    const suffix = " Compare the best AI tools and marketing platforms for creators and solopreneurs on Grow With Med.";
    if (metaDescription.length + suffix.length <= 160) {
      metaDescription += suffix;
    } else {
      const remaining = 160 - metaDescription.length - 1; // -1 for space
      if (remaining > 20) {
        metaDescription += " " + suffix.substring(1, remaining - 3) + "...";
      }
    }
  }
    
  const canonicalUrl = url || (slug ? `${domain}/blog/${slug}` : domain);
  const ogImage = image || 'https://i.ibb.co/zhS2txZW/Design-sans-titre-5.png';

  const structuredData = type === 'article' ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": metaDescription,
    "image": ogImage,
    "author": {
      "@type": "Person",
      "name": author,
      "url": "https://twitter.com/GrowWithMed"
    },
    "publisher": {
      "@type": "Organization",
      "name": siteName,
      "logo": {
        "@type": "ImageObject",
        "url": "https://i.ibb.co/zhS2txZW/Design-sans-titre-5.png"
      }
    },
    "datePublished": publishDate,
    "dateModified": updatedDate || publishDate,
    "mainEntityOfPage": canonicalUrl
  } : null;

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": domain
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": `${domain}/blog`
      },
      ...(slug ? [{
        "@type": "ListItem",
        "position": 3,
        "name": title,
        "item": canonicalUrl
      }] : [])
    ]
  };

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{metaTitle}{title && !title.includes(siteName) ? ` | ${siteName}` : ''}</title>
      <meta name="description" content={metaDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph tags */}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@GrowWithMed" />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      {faqData && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map(item => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
              }
            }))
          })}
        </script>
      )}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbData)}
      </script>
    </Helmet>
  );
};

export default SEO;
