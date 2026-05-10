import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "QuickMart - Fresh Groceries in Minutes", 
  description = "Get fresh groceries, dairy, snacks, and daily essentials delivered to your doorstep in minutes. Experience the fastest delivery with QuickMart.",
  keywords = "grocery delivery, fresh vegetables, dairy products, quick commerce, online supermarket",
  ogImage = "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1000",
  ogUrl = "https://quickmart.example.com",
  twitterHandle = "@quickmart"
}) => {
  const siteTitle = title.includes("QuickMart") ? title : `${title} | QuickMart`;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={ogUrl} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEO;
