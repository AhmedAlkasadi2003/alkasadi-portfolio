import { Metadata } from 'next';
import ContactClient from '../../components/ContactClient';
import { SITE_CONFIG, SITE_URL, getCanonicalUrl, getOgImageUrl, generateBreadcrumbJsonLd } from '../../lib/siteConfig';

export const metadata: Metadata = {
  title: `Contact ${SITE_CONFIG.shortName} (${SITE_CONFIG.username}) | Front-End Developer`,
  description: `Reach out to ${SITE_CONFIG.fullName} (${SITE_CONFIG.username}) for front-end development, React.js and Next.js projects, UI implementation, and web application collaboration.`,
  alternates: {
    canonical: getCanonicalUrl('/contact'),
    languages: {
      'en': getCanonicalUrl('/contact'),
      'ar': getCanonicalUrl('/contact'),
      'x-default': getCanonicalUrl('/contact'),
    },
  },
  openGraph: {
    title: `Contact ${SITE_CONFIG.shortName} (${SITE_CONFIG.username}) | Front-End Developer`,
    description: `Get in touch for website development, UI design implementation, React.js work, and front-end product collaboration.`,
    url: getCanonicalUrl('/contact'),
    type: 'website',
    images: [
      {
        url: getOgImageUrl('/og-image.svg'),
        secureUrl: getOgImageUrl('/og-image.svg'),
        width: 1200,
        height: 630,
        type: 'image/png',
        alt: `Contact ${SITE_CONFIG.fullName} — Front-End Development`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Contact ${SITE_CONFIG.shortName} (${SITE_CONFIG.username}) | Front-End Development`,
    description: `Front-End Developer available for web UI, React.js, and Next.js collaboration.`,
    images: [getOgImageUrl('/og-image.svg')],
    creator: `@${SITE_CONFIG.username}`,
  },
};

export default function ContactPage() {
  const contactJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ContactPage',
        '@id': `${getCanonicalUrl('/contact')}#webpage`,
        url: getCanonicalUrl('/contact'),
        name: `Contact ${SITE_CONFIG.fullName}`,
        description: `Direct inquiry channel for front-end development, UI systems, and web application collaboration with ${SITE_CONFIG.fullName}.`,
        mainEntity: {
          '@id': `${SITE_URL}/#person`,
        },
      },
      generateBreadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'Contact', path: '/contact' },
      ]),
    ],
  };

  return (
    <>
      <script
        id="contact-page-jsonld"
        key="contact-page-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <ContactClient />
    </>
  );
}
