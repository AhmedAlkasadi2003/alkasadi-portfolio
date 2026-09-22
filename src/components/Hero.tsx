"use client";

import { ArrowRight, FileDown, Github, Linkedin, Code2 } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from '@/context/LanguageContext';
import { PERSONAL_INFO, SOCIAL_PROFILES } from '../data/portfolioData';

export default function Hero() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === 'ar';
  const stats = [
    { label: t('hero.stats.years'), value: '2020–2025' },
    { label: t('hero.stats.react'), value: 'React' },
    { label: t('hero.stats.next'), value: 'Next.js' },
    { label: t('hero.stats.languages'), value: 'AR / EN' },
  ];

  return (
    <section className="relative min-h-[92vh] flex items-center pt-8 pb-16 overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-12 left-10 w-[500px] h-[500px] bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-cyan-500/10 dark:bg-blue-500/15 rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-15 dark:opacity-25" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                {t('hero.tag')}
              </span>
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 py-1.5 px-3 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                {t('hero.agencyTag')}
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold leading-[1.1] mb-6 tracking-tight">
              {isAr ? PERSONAL_INFO.fullNameAr : PERSONAL_INFO.fullName}
            </h1>

            <p className="text-xl sm:text-2xl font-display font-medium text-emerald-600 dark:text-emerald-400 mb-4 leading-snug">
              {t('hero.valuePropHeadline')}
            </p>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl leading-relaxed">
              {t('hero.valuePropDesc')}
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Link href="/projects" className="px-7 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold transition-all flex items-center gap-2 group shadow-lg shadow-emerald-500/25 hover:-translate-y-0.5 active:translate-y-0">
                {t('hero.exploreProjects')}
                <ArrowRight size={18} className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
              </Link>
              <Link href="/contact" className="px-7 py-4 border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-slate-900/70 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-xl font-bold transition-all shadow-sm hover:-translate-y-0.5">
                {t('hero.initiateContact')}
              </Link>
              <Link href="/resume" className="px-5 py-4 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/40 bg-transparent text-slate-700 dark:text-slate-300 rounded-xl font-semibold transition-all flex items-center gap-2 hover:text-emerald-500">
                <FileDown size={18} />
                {t('nav.downloadCv')}
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono uppercase text-slate-400 mr-2 rtl:ml-2 rtl:mr-0">Profiles:</span>
              {SOCIAL_PROFILES.filter((social) => social.platform === 'GitHub' || social.platform === 'LinkedIn').map((social) => (
                <a key={social.platform} href={social.url} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-500 transition-colors p-2 hover:bg-slate-100 dark:hover:bg-slate-800/80 rounded-lg" title={social.platform} aria-label={social.platform}>
                  {social.platform === 'GitHub' ? <Github size={18} /> : <Linkedin size={18} />}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="relative mx-auto max-w-md lg:max-w-none p-6 md:p-8 bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-2xl overflow-hidden">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6 bg-slate-950 border border-slate-800">
                <Image src="/images/profile-avatar.svg" alt={PERSONAL_INFO.fullName} fill priority className="object-cover" />
                <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-emerald-500/40 text-emerald-400 text-xs font-mono font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {PERSONAL_INFO.username}
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-emerald-500 mb-3">
                <Code2 size={15} />
                <span>FRONT-END STACK</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {['HTML', 'CSS', 'JavaScript', 'React.js', 'Next.js', 'Tailwind CSS'].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700">{skill}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {stats.map((stat) => (
            <div key={stat.label} className="p-5 bg-white/80 dark:bg-slate-900/80 rounded-2xl border border-slate-200/80 dark:border-slate-800">
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-emerald-500 mb-1">{stat.value}</div>
              <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
