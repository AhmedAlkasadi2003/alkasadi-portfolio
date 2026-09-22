/**
 * Centralized identity, canonical URL, and schema configuration.
 * Set NEXT_PUBLIC_SITE_URL in production to the deployed portfolio URL.
 */

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/+$/, '');

export const SITE_CONFIG = {
  name: 'Ahmed Alkasadi',
  fullName: 'Ahmed Mahfoodh Alkasadi',
  fullNameAr: 'أحمد محفوظ الكاسدي',
  shortName: 'Ahmed Alkasadi',
  shortNameAr: 'أحمد الكاسدي',
  username: 'AhmedAlkasadi2003',
  title: 'Front-End Developer',
  titleAr: 'مطور واجهات أمامية',
  tagline: 'Modern, interactive, and high-performance front-end applications.',
  taglineAr: 'تطبيقات واجهات أمامية حديثة وتفاعلية وعالية الأداء.',
  description: 'Portfolio of Ahmed Mahfoodh Alkasadi, a Front-End Developer in Hadramout, Yemen. Skilled in HTML, CSS, JavaScript, React.js, Next.js, Tailwind CSS, Redux, Node.js, Express, Git, and GitHub.',
  descriptionAr: 'ملف أعمال أحمد محفوظ الكاسدي، مطور واجهات أمامية من حضرموت، اليمن. تشمل مهاراته HTML وCSS وJavaScript وReact.js وNext.js وTailwind CSS وRedux وNode.js وExpress وGit وGitHub.',
  location: 'Hadramout, Yemen',
  locationAr: 'حضرموت، اليمن',
  country: 'Yemen',
  countryCode: 'YE',
  emails: ['ahmed.alkasadi2003@gmail.com'],
  phones: ['+967 770 500 789'],
  education: {
    degree: 'Bachelor of Information Technology',
    institution: 'Hadramout University of Science and Technology',
    period: '2020 – 2025',
    grade: 'Very Good',
  },
  socials: {
    github: 'https://github.com/AhmedAlkasadi2003',
    linkedin: 'https://www.linkedin.com/in/ahmed-alkasadi',
  },
  aliases: [
    'Ahmed Alkasadi',
    'Ahmed Mahfoodh Alkasadi',
    'AhmedAlkasadi2003',
  ],
  aliasesAr: ['أحمد الكاسدي', 'أحمد محفوظ الكاسدي'],
  coreSkills: [
    'HTML',
    'CSS',
    'JavaScript',
    'jQuery',
    'Bootstrap',
    'Tailwind CSS',
    'React.js',
    'Redux',
    'Redux Toolkit',
    'React Hooks',
    'Next.js',
    'Node.js',
    'Express',
    'Git',
    'GitHub',
  ],
};

export function getAbsoluteUrl(path = ''): string {
  if (!path) return SITE_URL;
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

export function getCanonicalUrl(path = ''): string {
  return getAbsoluteUrl(path);
}

export function getOgImageUrl(imagePath = '/og-image.svg'): string {
  return getAbsoluteUrl(imagePath);
}

export function generateRootJsonLd() {
  const personId = `${SITE_URL}/#person`;
  const websiteId = `${SITE_URL}/#website`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': personId,
        name: SITE_CONFIG.fullName,
        alternateName: [...SITE_CONFIG.aliases, ...SITE_CONFIG.aliasesAr],
        jobTitle: SITE_CONFIG.title,
        description: SITE_CONFIG.description,
        url: SITE_URL,
        image: getAbsoluteUrl('/images/profile-avatar.svg'),
        email: `mailto:${SITE_CONFIG.emails[0]}`,
        telephone: SITE_CONFIG.phones[0],
        nationality: {
          '@type': 'Country',
          name: SITE_CONFIG.country,
        },
        address: {
          '@type': 'PostalAddress',
          addressRegion: 'Hadramout',
          addressCountry: SITE_CONFIG.country,
        },
        alumniOf: {
          '@type': 'EducationalOrganization',
          name: SITE_CONFIG.education.institution,
        },
        hasOccupation: {
          '@type': 'Occupation',
          name: SITE_CONFIG.title,
          skills: SITE_CONFIG.coreSkills.join(', '),
        },
        knowsLanguage: [
          { '@type': 'Language', name: 'Arabic', alternateName: 'ar' },
          { '@type': 'Language', name: 'English', alternateName: 'en' },
        ],
        sameAs: [SITE_CONFIG.socials.github, SITE_CONFIG.socials.linkedin],
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: SITE_URL,
        name: `${SITE_CONFIG.shortName} | Portfolio`,
        alternateName: ['Ahmed Alkasadi Portfolio', 'ملف أعمال أحمد الكاسدي'],
        description: SITE_CONFIG.description,
        inLanguage: ['en', 'ar'],
        publisher: { '@id': personId },
      },
    ],
  };
}

export function generateBreadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: getAbsoluteUrl(item.path),
    })),
  };
}
