import { Metadata } from 'next';
import BlogListClient from '../../components/BlogListClient';
import { SITE_CONFIG, SITE_URL, getCanonicalUrl, getOgImageUrl, generateBreadcrumbJsonLd } from '../../lib/siteConfig';

export const metadata: Metadata = {
  title: `Front-End Notes & Insights | ${SITE_CONFIG.shortName}`,
  description: `Front-end development notes and insights from ${SITE_CONFIG.fullName} (${SITE_CONFIG.username}).`,
  alternates: {
    canonical: getCanonicalUrl('/blog'),
    languages: {
      'en': getCanonicalUrl('/blog'),
      'ar': getCanonicalUrl('/blog'),
      'x-default': getCanonicalUrl('/blog'),
    },
  },
  openGraph: {
    title: `Front-End Notes & Insights | ${SITE_CONFIG.shortName}`,
    description: `Front-end development notes on React, Next.js, Tailwind CSS, and modern user interfaces.`,
    url: getCanonicalUrl('/blog'),
    type: 'website',
    images: [
      {
        url: getOgImageUrl('/og-image.png'),
        secureUrl: getOgImageUrl('/og-image.png'),
        width: 1200,
        height: 630,
        type: 'image/png',
        alt: `${SITE_CONFIG.fullName} Engineering Blog`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Engineering Blog & Technical Insights | ${SITE_CONFIG.shortName}`,
    description: `Articles on front-end development and modern web interfaces.`,
    images: [getOgImageUrl('/og-image.png')],
    creator: `@${SITE_CONFIG.username}`,
  },
};

export default function BlogPage() {
  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Blog',
        '@id': `${getCanonicalUrl('/blog')}#blog`,
        url: getCanonicalUrl('/blog'),
        name: `${SITE_CONFIG.shortName} Engineering Blog`,
        description: 'Technical insights covering front-end development and modern web interfaces.',
        publisher: {
          '@id': `${SITE_URL}/#website`,
        },
        author: {
          '@id': `${SITE_URL}/#person`,
        },
      },
      generateBreadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'Blog', path: '/blog' },
      ]),
    ],
  };

  return (
    <>
      <script
        id="blog-collection-jsonld"
        key="blog-collection-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <BlogListClient />
    </>
  );
}
