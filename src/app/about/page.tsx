import { Metadata } from 'next';
import AboutClient from '../../components/AboutClient';
import { SITE_CONFIG, SITE_URL, getCanonicalUrl, getOgImageUrl, generateBreadcrumbJsonLd } from '../../lib/siteConfig';

export const metadata: Metadata = {
  title: `About ${SITE_CONFIG.shortName} (${SITE_CONFIG.username}) | Front-End Developer`,
  description: `Biography and professional profile of ${SITE_CONFIG.fullName} (${SITE_CONFIG.username}) — Front-End Developer focused on interactive, maintainable interfaces with HTML, CSS, JavaScript, React.js, Next.js, and Tailwind CSS.`,
  alternates: {
    canonical: getCanonicalUrl('/about'),
    languages: {
      'en': getCanonicalUrl('/about'),
      'ar': getCanonicalUrl('/about'),
      'x-default': getCanonicalUrl('/about'),
    },
  },
  openGraph: {
    title: `About ${SITE_CONFIG.shortName} (${SITE_CONFIG.username}) | Front-End Developer`,
    description: `Learn about ${SITE_CONFIG.fullName} — Front-End Developer building modern, interactive, and high-performance web interfaces.`,
    url: getCanonicalUrl('/about'),
    type: 'profile',
    firstName: 'Ahmed',
    lastName: 'Alkasadi',
    username: SITE_CONFIG.username,
    gender: 'male',
    images: [
      {
        url: getOgImageUrl('/og-image.png'),
        secureUrl: getOgImageUrl('/og-image.png'),
        width: 1200,
        height: 630,
        type: 'image/png',
        alt: `${SITE_CONFIG.fullName} Biography and Professional Profile`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `About ${SITE_CONFIG.shortName} (${SITE_CONFIG.username}) | Front-End Developer`,
    description: `Front-End Developer building modern, interactive, and high-performance user experiences.`,
    images: [getOgImageUrl('/og-image.png')],
    creator: `@${SITE_CONFIG.username}`,
  },
};

export default function AboutPage() {
  const aboutJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfilePage',
        '@id': `${getCanonicalUrl('/about')}#webpage`,
        url: getCanonicalUrl('/about'),
        name: `About ${SITE_CONFIG.fullName}`,
        description: `Detailed professional background, architectural tenets, and hardware engineering biography of ${SITE_CONFIG.fullName}.`,
        mainEntity: {
          '@id': `${SITE_URL}/#person`,
        },
      },
      generateBreadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
      ]),
    ],
  };

  return (
    <>
      <script
        id="about-profile-jsonld"
        key="about-profile-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <AboutClient />
    </>
  );
}
