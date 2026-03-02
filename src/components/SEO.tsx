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
  slug
}) => {
  const siteName = 'Grow With Med';
  const domain = 'https://www.growwithmed.site';
  
  // Auto-generation logic
  const metaTitle = title 
    ? (title.length > 60 ? title.substring(0, 57) + '...' : title)
    : siteName;
    
  // Use utility for description if it's too long or missing
  const metaDescription = description
    ? (description.length > 160 ? generateMetaDescription(description) : description)
    : 'Discover the best AI tools, marketing platforms & digital services. Compare trusted tools used by creators, marketers, and solopreneurs to grow faster online.';
    
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
      <title>{metaTitle}{title ? ` | ${siteName}` : ''}</title>
      <meta name="description" content={metaDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
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
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbData)}
      </script>
    </Helmet>
  );
};

export default SEO;
