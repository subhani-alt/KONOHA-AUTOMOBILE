import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, image, url }) => {
  const defaultTitle = 'VALENCE AUTOMOBILI | Kinetic Artistry. Uncompromised Power.';
  const defaultDesc = 'Discover Valence Automobili, the world premier hypercar atelier forging 2,150 HP quad-turbo V12 and hybrid electric engineering marvels.';
  const siteUrl = 'https://valence-automobili.com';

  return (
    <Helmet>
      <title>{title ? `${title} | VALENCE AUTOMOBILI` : defaultTitle}</title>
      <meta name="description" content={description || defaultDesc} />
      <meta name="keywords" content={keywords || 'hypercar, luxury cars, V12 engine, electric hypercar, bespoke configurator, Valence Automobili'} />
      <link rel="canonical" href={url || siteUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDesc} />
      <meta property="og:image" content={image || 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1920&q=85'} />
      <meta property="og:url" content={url || siteUrl} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description || defaultDesc} />
      <meta name="twitter:image" content={image || 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1920&q=85'} />
    </Helmet>
  );
};

export default SEO;
