import React from 'react';
import {
  ExternalLink,
  ShieldCheck,
  BookOpen,
  GraduationCap,
  Download,
  CheckCircle2,
  FileText
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { OFFICIAL_RESOURCES_DATA } from '../data/official-resources';
import { SubjectBreadcrumbs } from '../components/SubjectBreadcrumbs';

export const OfficialResourcesPage: React.FC = () => {
  const { language } = useApp();

  const breadcrumbs = [
    { label: 'Home', hindiLabel: 'होम', href: '/' },
    { label: 'Official Resource Hub', hindiLabel: 'आधिकारिक संसाधन एवं पोर्टल हब', active: true }
  ];

  return (
    <div className="w-full space-y-6">
      <SubjectBreadcrumbs items={breadcrumbs} />

      {/* Header Banner */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-400">
              {language === 'hi' ? 'विधिक एवं आधिकारिक स्रोत' : 'Legal Official Repositories'}
            </span>
            <span className="flex items-center gap-1 text-[11px] text-emerald-600 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              100% Authentic Portals
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            {language === 'hi'
              ? 'आधिकारिक संसाधन एवं पाठ्यपुस्तक हब'
              : 'Official Resources & Textbooks Hub'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl leading-relaxed">
            {language === 'hi'
              ? 'उत्तर प्रदेश शिक्षा सेवा चयन आयोग (UPESSC), बेसिक शिक्षा विभाग, एससीईआरटी यूपी, एनसीईआरटी एवं ई-पाठशाला के आधिकारिक विधिक लिंक।'
              : 'Direct links to official portals: UPESSC, Basic Education Dept, SCERT UP, NCERT, ePathshala, and UPMSP. We do not host pirated PDFs.'}
          </p>
        </div>
      </div>

      {/* Resource Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {OFFICIAL_RESOURCES_DATA.map(res => (
          <div
            key={res.id}
            className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between space-y-4 hover:border-amber-400 transition-all"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                  {res.category}
                </span>
                <span className="text-[11px] font-semibold text-slate-400 truncate max-w-[200px]">
                  {res.organization}
                </span>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                  {language === 'hi' ? res.hindiTitle : res.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                  {language === 'hi' ? res.hindiDescription : res.description}
                </p>
              </div>

              {/* Direct links if present */}
              {res.directLinks && res.directLinks.length > 0 && (
                <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">
                    {language === 'hi' ? 'सीधे डाउनलोड एवं पोर्टल लिंक:' : 'Direct Links:'}
                  </span>
                  <div className="space-y-1">
                    {res.directLinks.map((dl, i) => (
                      <a
                        key={i}
                        href={dl.url}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-amber-50 dark:hover:bg-amber-950/40 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-amber-600 flex items-center justify-between transition-colors"
                      >
                        <span>{dl.label}</span>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
              <a
                href={res.url}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-xl text-xs font-bold text-amber-600 hover:text-white hover:bg-amber-600 border border-amber-600/30 transition-colors flex items-center justify-center gap-1.5"
              >
                <span>{language === 'hi' ? 'मूल आधिकारिक वेबसाइट खोलें' : 'Open Primary Website'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
