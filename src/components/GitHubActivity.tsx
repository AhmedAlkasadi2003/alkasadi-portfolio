"use client";

import { useEffect, useState } from 'react';
import { Circle, GitFork, Github, Star } from 'lucide-react';
import { useTranslation } from '@/context/LanguageContext';
import { PERSONAL_INFO } from '../data/portfolioData';

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
}

const languageColors: Record<string, string> = {
  TypeScript: 'text-blue-400',
  JavaScript: 'text-yellow-400',
  HTML: 'text-orange-500',
  CSS: 'text-blue-300',
};

export default function GitHubActivity() {
  const { t } = useTranslation();
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${PERSONAL_INFO.username}/repos?sort=updated&per_page=4`)
      .then(async (response) => (response.ok ? response.json() : []))
      .then((data: unknown) => setRepos(Array.isArray(data) ? data : []))
      .catch(() => setRepos([]));
  }, []);

  return (
    <section className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-sm font-bold text-emerald-500 uppercase tracking-widest mb-4">{t('github.tag')}</h2>
            <h3 className="text-4xl font-display font-bold">{t('github.title')}</h3>
          </div>
          <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-semibold hover:scale-105 transition-transform shadow-lg">
            <Github size={20} />
            {t('github.viewAll')}
          </a>
        </div>

        {repos.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {repos.map((repo) => (
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer" key={repo.id} className="p-6 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl rounded-[2rem] border border-slate-200/50 dark:border-slate-800/50 hover:border-emerald-500/50 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold font-display group-hover:text-emerald-500 transition-colors truncate pr-4 rtl:pr-0 rtl:pl-4">{repo.name}</h4>
                  <Github className="text-slate-400 group-hover:text-emerald-500 transition-colors shrink-0" size={24} />
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-2 flex-grow">{repo.description || 'No description provided.'}</p>
                <div className="flex items-center gap-6 text-sm text-slate-500 dark:text-slate-400 mt-auto">
                  {repo.language && <div className="flex items-center gap-1.5"><Circle size={12} className={`fill-current ${languageColors[repo.language] || 'text-slate-400'}`} /><span>{repo.language}</span></div>}
                  <div className="flex items-center gap-1.5"><Star size={16} /><span>{repo.stargazers_count}</span></div>
                  <div className="flex items-center gap-1.5"><GitFork size={16} /><span>{repo.forks_count}</span></div>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <p className="text-slate-500 dark:text-slate-400">{t('github.fallbackNotice')}</p>
        )}
      </div>
    </section>
  );
}
