import { Metadata } from 'next';
import ProjectsClient from '../../components/ProjectsClient';
import { SITE_CONFIG, SITE_URL, getCanonicalUrl, getOgImageUrl, generateBreadcrumbJsonLd } from '../../lib/siteConfig';

export const metadata: Metadata = {
  title: `Front-End Projects & Platforms | ${SITE_CONFIG.shortName}`,
  description: `Explore front-end projects by ${SITE_CONFIG.fullName}: enterprise platforms, dashboards, an e-commerce storefront, a movies app, and a hotel reservation website built with React, Next.js, and Tailwind CSS.`,
  alternates: {
    canonical: getCanonicalUrl('/projects'),
    languages: {
      'en': getCanonicalUrl('/projects'),
      'ar': getCanonicalUrl('/projects'),
      'x-default': getCanonicalUrl('/projects'),
    },
  },
  openGraph: {
    title: `Front-End Projects & Platforms | ${SITE_CONFIG.shortName} (${SITE_CONFIG.username})`,
    description: `Selected front-end platforms, dashboards, and web applications built with React, Next.js, and Tailwind CSS.`,
    url: getCanonicalUrl('/projects'),
    type: 'website',
    images: [
      {
        url: getOgImageUrl('/og-image.png'),
        secureUrl: getOgImageUrl('/og-image.png'),
        width: 1200,
        height: 630,
        type: 'image/png',
        alt: `${SITE_CONFIG.fullName} Front-End Projects and Platforms`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Engineering Projects & Case Studies | ${SITE_CONFIG.shortName}`,
    description: `Selected front-end projects in React, Next.js, and Tailwind CSS.`,
    images: [getOgImageUrl('/og-image.png')],
    creator: `@${SITE_CONFIG.username}`,
  },
};

export default function ProjectsPage() {
  const projectsJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${getCanonicalUrl('/projects')}#webpage`,
        url: getCanonicalUrl('/projects'),
        name: 'Front-End Projects & Platforms',
        description: `Portfolio of web applications, dashboards, and business platforms developed by ${SITE_CONFIG.fullName}.`,
        isPartOf: {
          '@id': `${SITE_URL}/#website`,
        },
      },
      generateBreadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/projects' },
      ]),
    ],
  };

  return (
    <>
      <script
        id="projects-collection-jsonld"
        key="projects-collection-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsJsonLd) }}
      />
      <ProjectsClient />
    </>
  );
}
