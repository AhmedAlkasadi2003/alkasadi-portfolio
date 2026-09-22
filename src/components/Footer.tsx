"use client";

import { ArrowUp, Github, Linkedin, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from '@/context/LanguageContext';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer() {
  const { t } = useTranslation();
  const socials = [
    { icon: Github, href: PERSONAL_INFO.github, label: 'GitHub' },
    { icon: Linkedin, href: PERSONAL_INFO.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${PERSONAL_INFO.emails[0]}`, label: 'Email' },
    { icon: Phone, href: 'tel:+967770500789', label: 'Phone' },
  ];

  return (
    <footer className="py-12 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <Link href="/" className="text-xl font-display font-bold tracking-tighter">AHMED<span className="text-emerald-500">.</span>ALKASADI</Link>
            <p className="text-sm text-slate-500 mt-2">© {new Date().getFullYear()} Ahmed Alkasadi. {t('footer.rights')}</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {socials.map((social) => <a key={social.label} href={social.href} target={social.label === 'Email' || social.label === 'Phone' ? undefined : '_blank'} rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-500 transition-colors" title={social.label}><social.icon size={20} /></a>)}
          </div>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="p-3 rounded-full bg-slate-50 dark:bg-slate-900 hover:bg-emerald-500 hover:text-white transition-all group" aria-label={t('footer.scrollToTop')}><ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" /></button>
        </div>
      </div>
    </footer>
  );
}
