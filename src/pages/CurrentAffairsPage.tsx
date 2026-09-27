import React, { useState } from 'react';
import {
  Clock,
  ExternalLink,
  BookOpen,
  Sparkles,
  CheckCircle2,
  XCircle,
  HelpCircle,
  RefreshCw,
  GitBranch,
  ShieldCheck
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { CURRENT_AFFAIRS_DATA } from '../data/current-affairs';
import { SubjectBreadcrumbs } from '../components/SubjectBreadcrumbs';

export const CurrentAffairsPage: React.FC = () => {
  const { language } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});

  const categories = ['All', 'Education', 'Government Schemes', 'Environment', 'India', 'Uttar Pradesh'];

  const filteredArticles = CURRENT_AFFAIRS_DATA.filter(
    art => selectedCategory === 'All' || art.category === selectedCategory
  );

  const handleSelectMcq = (mcqKey: string, optIdx: number) => {
    if (selectedAnswers[mcqKey] !== undefined) return;
    setSelectedAnswers(prev => ({ ...prev, [mcqKey]: optIdx }));
  };

  const breadcrumbs = [
    { label: 'Home', hindiLabel: 'होम', href: '/' },
    { label: 'Current Affairs & Schemes', hindiLabel: 'समसामयिक घटनाएं एवं योजनाएं', active: true }
  ];

  return (
    <div className="w-full space-y-6">
      <SubjectBreadcrumbs items={breadcrumbs} />

      {/* Header Banner */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-400">
                {language === 'hi' ? 'उत्तर प्रदेश एवं राष्ट्रीय समसामयिकी' : 'UP & National Current Affairs'}
              </span>
              <span className="flex items-center gap-1 text-[11px] text-emerald-600 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                {language === 'hi' ? 'आधिकारिक स्रोत सत्यापित' : 'Official Gazette Citations'}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {language === 'hi'
                ? 'शिक्षक भर्ती समसामयिकी एवं सरकारी योजनाएं'
                : 'Teacher Recruitment Current Affairs & Schemes'}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl leading-relaxed">
              {language === 'hi'
                ? 'प्रत्येक लेख में संक्षिप्त सार, परीक्षा हेतु 5 महत्वपूर्ण तथ्य, अभ्यास प्रश्न और स्रोत उद्धरण शामिल हैं।'
                : 'Curated specifically for UP teacher exams. Each article contains summary, exam relevance, 5 key facts, and practice MCQs.'}
            </p>
          </div>

          {/* GitHub Actions Architecture Pill (Section 23) */}
          <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs shrink-0 space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-slate-700 dark:text-slate-200">
              <GitBranch className="w-3.5 h-3.5 text-amber-500" />
              <span>{language === 'hi' ? 'गिटहब एक्शन्स स्वचालित रिफ्रेश' : 'GitHub Actions Auto-Updater'}</span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 max-w-xs">
              Daily cron workflow parses official RSS feeds, commits JSON, and rebuilds GitHub Pages automatically.
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200 dark:border-slate-800 no-scrollbar">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
              selectedCategory === cat
                ? 'bg-amber-600 text-white shadow-xs'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-amber-400'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Current Affairs Articles Feed */}
      <div className="space-y-6">
        {filteredArticles.map(art => (
          <article
            key={art.id}
            className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xs space-y-5"
          >
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="px-2.5 py-0.5 rounded-full font-bold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 text-[10px] uppercase">
                {art.category}
              </span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-500" />
                <span>{art.date}</span>
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-snug">
              {language === 'hi' ? art.hindiTitle : art.title}
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {language === 'hi' ? art.hindiSummary : art.summary}
            </p>

            {/* Why important for UP Teacher Exam */}
            <div className="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-900/40 text-xs space-y-1">
              <span className="font-bold text-amber-900 dark:text-amber-200 block">
                {language === 'hi' ? 'उत्तर प्रदेश शिक्षक परीक्षा में महत्व:' : 'Significance for UP Teacher Exams:'}
              </span>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {language === 'hi' ? art.hindiExamSignificance : art.examSignificance}
              </p>
            </div>

            {/* 5 Key Exam Facts (Section 22) */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                {language === 'hi' ? '5 प्रमुख परीक्षा तथ्य (Key Exam Facts):' : '5 Essential Exam Facts:'}
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                {(language === 'hi' ? art.hindiExamFacts : art.examFacts).map((fact, idx) => (
                  <li
                    key={idx}
                    className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-start gap-2 text-slate-700 dark:text-slate-300"
                  >
                    <span className="w-4 h-4 rounded-full bg-amber-500 text-white font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Practice MCQs related to Article */}
            {art.mcqs && art.mcqs.length > 0 && (
              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>{language === 'hi' ? 'इस समसामयिक लेख पर आधारित अभ्यास प्रश्न:' : 'Practice Question from this Article:'}</span>
                </h4>

                {art.mcqs.map((mcq, mIdx) => {
                  const mcqKey = `${art.id}-${mIdx}`;
                  const userAns = selectedAnswers[mcqKey];
                  const isAnswered = userAns !== undefined;

                  return (
                    <div
                      key={mIdx}
                      className="p-4 rounded-2xl bg-slate-50/60 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 space-y-3 text-xs"
                    >
                      <p className="font-bold text-slate-900 dark:text-white">
                        Q. {language === 'hi' ? mcq.hindiQuestion : mcq.question}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {mcq.options.map((optEn, oIdx) => {
                          const optHi = mcq.hindiOptions[oIdx];
                          const optText = language === 'hi' ? optHi : optEn;
                          const isCorrect = oIdx === mcq.answer;
                          const isSelected = userAns === oIdx;

                          let btnStyle = 'bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200';
                          if (isAnswered) {
                            if (isCorrect) {
                              btnStyle = 'bg-emerald-100 dark:bg-emerald-950 border-emerald-500 font-bold text-emerald-900 dark:text-emerald-200';
                            } else if (isSelected && !isCorrect) {
                              btnStyle = 'bg-rose-100 dark:bg-rose-950 border-rose-500 font-bold text-rose-900 dark:text-rose-200';
                            } else {
                              btnStyle = 'opacity-50 border-slate-200';
                            }
                          }

                          return (
                            <button
                              key={oIdx}
                              disabled={isAnswered}
                              onClick={() => handleSelectMcq(mcqKey, oIdx)}
                              className={`p-2.5 rounded-xl border text-left flex items-center justify-between transition-colors cursor-pointer ${btnStyle}`}
                            >
                              <span>{String.fromCharCode(65 + oIdx)}. {optText}</span>
                              {isAnswered && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                              {isAnswered && isSelected && !isCorrect && <XCircle className="w-4 h-4 text-rose-600" />}
                            </button>
                          );
                        })}
                      </div>

                      {isAnswered && (
                        <p className="text-[11px] text-emerald-700 dark:text-emerald-300 font-medium">
                          {mcq.explanation}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Source transparency */}
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
              <span>Source: {art.source}</span>
              <span>Pub Date: {art.originalPublicationDate}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
