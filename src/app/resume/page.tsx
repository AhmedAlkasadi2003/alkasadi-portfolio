import { Metadata } from 'next';
import ResumeClient from '../../components/ResumeClient';
import { SITE_CONFIG, SITE_URL, getCanonicalUrl, getOgImageUrl, generateBreadcrumbJsonLd } from '../../lib/siteConfig';

export const metadata: Metadata = {
  title: `Curriculum Vitae | ${SITE_CONFIG.shortName} (${SITE_CONFIG.username})`,
  description: `Official Curriculum Vitae of ${SITE_CONFIG.fullName} (${SITE_CONFIG.username}) — Front-End Developer focused on modern web interfaces with HTML, CSS, JavaScript, React.js, Next.js, and Tailwind CSS.`,
  alternates: {
    canonical: getCanonicalUrl('/resume'),
    languages: {
      'en': getCanonicalUrl('/resume'),
      'ar': getCanonicalUrl('/resume'),
      'x-default': getCanonicalUrl('/resume'),
    },
  },
  openGraph: {
    title: `Curriculum Vitae | ${SITE_CONFIG.fullName} (${SITE_CONFIG.username})`,
    description: `Front-End Developer profile, technical skills, and academic credentials for Ahmed Alkasadi.`,
    url: getCanonicalUrl('/resume'),
    type: 'profile',
    firstName: 'Ahmed',
    lastName: 'Alkasadi',
    username: SITE_CONFIG.username,
    gender: 'male',
    images: [
      {
        url: getOgImageUrl('/og-image.svg'),
        secureUrl: getOgImageUrl('/og-image.svg'),
        width: 1200,
        height: 630,
        type: 'image/png',
        alt: `${SITE_CONFIG.fullName} CV & Credentials`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Curriculum Vitae | ${SITE_CONFIG.shortName} (${SITE_CONFIG.username})`,
    description: `Front-End Developer specializing in modern web interfaces and application experiences.`,
    images: [getOgImageUrl('/og-image.svg')],
    creator: `@${SITE_CONFIG.username}`,
  },
};

export default function ResumePage() {
  const resumeJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfilePage',
        '@id': `${getCanonicalUrl('/resume')}#webpage`,
        url: getCanonicalUrl('/resume'),
        name: `Curriculum Vitae — ${SITE_CONFIG.fullName}`,
        description: `Professional CV for ${SITE_CONFIG.fullName}, highlighting front-end development, modern UI engineering, and academic credentials.`,
        mainEntity: {
          '@id': `${SITE_URL}/#person`,
        },
      },
      generateBreadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'Resume', path: '/resume' },
      ]),
    ],
  };

  return (
    <>
      <script
        id="resume-profile-jsonld"
        key="resume-profile-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(resumeJsonLd) }}
      />
      <ResumeClient />
    </>
  );
}
