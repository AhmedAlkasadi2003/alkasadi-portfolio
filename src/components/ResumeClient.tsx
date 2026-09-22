"use client";

import Link from 'next/link';
import { ArrowLeft, Download, Mail, MapPin, Phone } from 'lucide-react';
import { useTranslation } from '@/context/LanguageContext';
import { PERSONAL_INFO, SKILL_CATEGORIES, WORK_EXPERIENCES, CASE_STUDIES } from '../data/portfolioData';

export default function ResumeClient() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === 'ar';
  const name = isAr ? PERSONAL_INFO.fullNameAr : PERSONAL_INFO.fullName;
  const title = isAr ? PERSONAL_INFO.titleAr : PERSONAL_INFO.title;

  return (
    <section className="py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 print:hidden">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-emerald-500">
            <ArrowLeft size={16} className="rtl:rotate-180" />
            {t('resume.back')}
          </Link>
          <button type="button" onClick={() => window.print()} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 text-white font-bold text-sm hover:bg-emerald-600">
            <Download size={16} />
            {t('resume.print')}
          </button>
        </div>

        <article className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm p-7 md:p-12 print:border-0 print:shadow-none print:p-0">
          <header className="border-b border-slate-200 dark:border-slate-800 pb-8 mb-8">
            <h1 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 dark:text-white">{name}</h1>
            <p className="text-xl text-emerald-500 font-bold mt-2">{title}</p>
            <div className="flex flex-wrap gap-x-5 gap-y-2 mt-5 text-sm text-slate-600 dark:text-slate-300">
              <a href={`mailto:${PERSONAL_INFO.emails[0]}`} className="inline-flex items-center gap-1.5"><Mail size={14} />{PERSONAL_INFO.emails[0]}</a>
              <a href={`tel:${PERSONAL_INFO.phones[0].replace(/\s/g, '')}`} className="inline-flex items-center gap-1.5"><Phone size={14} />{PERSONAL_INFO.phones[0]}</a>
              <span className="inline-flex items-center gap-1.5"><MapPin size={14} />{isAr ? PERSONAL_INFO.locationAr : PERSONAL_INFO.location}</span>
            </div>
          </header>

          <div className="space-y-9">
            <section>
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-500 mb-3">{t('about.tag')}</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{t('about.bioP1')} {t('about.bioP2')}</p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-4">{t('experience.title')}</h2>
              <div className="space-y-5">
                {WORK_EXPERIENCES.map((experience) => (
                  <div key={experience.id}>
                    <div className="flex flex-wrap justify-between gap-2">
                      <h3 className="font-bold text-slate-900 dark:text-white">{isAr ? experience.roleAr : experience.role} · {isAr ? experience.companyAr : experience.company}</h3>
                      <span className="text-sm font-mono text-emerald-500">{isAr ? experience.periodAr : experience.period}</span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">{(isAr ? experience.descriptionAr : experience.description).join(' ')}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-4">{t('about.educationTitle')}</h2>
              <div className="text-slate-700 dark:text-slate-200 font-bold">{isAr ? PERSONAL_INFO.education.degreeAr : PERSONAL_INFO.education.degree}</div>
              <div className="text-sm text-slate-600 dark:text-slate-300 mt-1">{isAr ? PERSONAL_INFO.education.institutionAr : PERSONAL_INFO.education.institution} · {PERSONAL_INFO.education.period} · {PERSONAL_INFO.education.gpa}</div>
              <div className="text-sm text-slate-600 dark:text-slate-300 mt-2">{isAr ? PERSONAL_INFO.training.nameAr : PERSONAL_INFO.training.name} · {PERSONAL_INFO.training.period}</div>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-4">{t('skills.title')}</h2>
              <div className="flex flex-wrap gap-2">
                {SKILL_CATEGORIES.flatMap((category) => category.skills.map((skill) => skill.name)).map((skill) => (
                  <span key={skill} className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-sm text-slate-700 dark:text-slate-200">{skill}</span>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-4">{t('projects.title')}</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {CASE_STUDIES.map((project) => (
                  <div key={project.slug} className="border border-slate-200 dark:border-slate-800 rounded-xl p-4">
                    <h3 className="font-bold text-slate-900 dark:text-white">{isAr ? project.titleAr : project.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">{isAr ? project.summaryAr : project.summary}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-3">Languages</h2>
              <p className="text-slate-600 dark:text-slate-300">{PERSONAL_INFO.languages.map((language) => isAr ? language.nameAr : language.name).join(' · ')}</p>
            </section>
          </div>
        </article>
      </div>
    </section>
  );
}
