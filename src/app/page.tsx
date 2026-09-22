import { Metadata } from 'next';
import Hero from '../components/Hero';
import HardwareDifferentiator from '../components/HardwareDifferentiator';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import GitHubActivity from '../components/GitHubActivity';
import Contact from '../components/Contact';
import { SITE_CONFIG, SITE_URL, getCanonicalUrl, getOgImageUrl } from '../lib/siteConfig';

export const metadata: Metadata = {
  title: `${SITE_CONFIG.fullName} (${SITE_CONFIG.username}) | Front-End Developer`,
  description: SITE_CONFIG.description,
  alternates: {
    canonical: getCanonicalUrl(),
    languages: {
      'en': getCanonicalUrl(),
      'ar': getCanonicalUrl(),
      'x-default': getCanonicalUrl(),
    },
  },
  openGraph: {
    title: `${SITE_CONFIG.fullName} (${SITE_CONFIG.username}) | Front-End Developer`,
    description: SITE_CONFIG.description,
    url: SITE_URL,
    type: 'website',
    images: [
      {
        url: getOgImageUrl('/og-image.png'),
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.fullName} (${SITE_CONFIG.username}) — Front-End Developer`,
      },
    ],
  },
};

export default function Home() {
  return (
    <div className="relative">
      {/* 1. Hero Section */}
      <Hero />
      
      {/* 2. Front-End Focus Spotlight */}
      <HardwareDifferentiator />

      {/* 3. Categorized Capabilities & Skills */}
      <Skills />
      
      {/* 4. Selected Projects */}
      <Projects />

      {/* 5. Professional Experience */}
      <Experience />

      {/* 6. Live GitHub Engineering Feed */}
      <GitHubActivity />

      {/* 7. Contact */}
      <Contact />
    </div>
  );
}
