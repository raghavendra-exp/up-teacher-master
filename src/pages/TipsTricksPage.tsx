import React, { useState } from 'react';
import {
  Lightbulb,
  Sparkles,
  Zap,
  Filter,
  CheckCircle2,
  AlertTriangle,
  Flame,
  Layers,
  ArrowRight
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { TIPS_DATA } from '../data/tips';
import { SubjectBreadcrumbs } from '../components/SubjectBreadcrumbs';

export const TipsTricksPage: React.FC = () => {
  const { language } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedSubject, setSelectedSubject] = useState<string>('All');

  const categories = [
    'All',
    'Concept Shortcut',
    'Memory Mnemonic',
    'Formula Trick',
    'Elimination Technique',
    'Common Trap'
  ];

  const subjects = ['All', 'Mathematics', 'Hindi', 'Child Development', 'Indian Polity & Constitution', 'General & Aptitude'];

  const filteredTips = TIPS_DATA.filter(t => {
    const matchesCat = selectedCategory === 'All' || t.category === selectedCategory;
    const matchesSub = selectedSubject === 'All' || t.subject === selectedSubject;
    return matchesCat && matchesSub;
  });

  const breadcrumbs = [
    { label: 'Home', hindiLabel: 'होम', href: '/' },
    { label: 'Tips & Tricks Engine', hindiLabel: 'शॉर्टकट एवं ट्रिक्स इंजन', active: true }
  ];

  return (
    <div className="w-full space-y-6">
      <SubjectBreadcrumbs items={breadcrumbs} />

      {/* Header Banner */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-400 flex items-center gap-1">
              <Zap className="w-3.5 h-3.5" />
              <span>Speed & Elimination Tactics</span>
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            {language === 'hi'
              ? 'परीक्षा शॉर्टकट, स्मृति सूत्र एवं एलिमिनेशन ट्रिक्स'
              : 'Exam Shortcuts, Memory Mnemonics & Elimination Tactics'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl leading-relaxed">
            {language === 'hi'
              ? '120 मिनट में 120 प्रश्नों के हल हेतु तीव्र गणना तकनीकें, संधि पहचान सूत्र, मनोवैज्ञानिक सिद्धांत स्मृति ट्रिक्स एवं 1/3 नेगेटिव मार्किंग से बचाव के नियम।'
              : 'Proven mnemonic shortcuts, quick sandhi identification, psychological thinker formulas, and negative marking elimination strategies.'}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar text-xs">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <select
            value={selectedSubject}
            onChange={e => setSelectedSubject(e.target.value)}
            className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-700 dark:text-slate-200 shrink-0"
          >
            {subjects.map(s => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Tips Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredTips.map(tip => (
          <div
            key={tip.id}
            className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between space-y-4 hover:border-amber-400 transition-all"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                  {tip.category}
                </span>
                <span className="text-xs font-semibold text-slate-400">
                  {tip.subject} • {tip.chapter}
                </span>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                  {language === 'hi' ? tip.hindiTitle : tip.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                  {language === 'hi' ? tip.hindiDescription : tip.description}
                </p>
              </div>

              {/* Formula or Rule Banner */}
              {tip.formulaOrRule && (
                <div className="p-3 bg-amber-50/70 dark:bg-amber-950/40 rounded-2xl border border-amber-200 dark:border-amber-900/60 font-mono text-xs font-bold text-amber-900 dark:text-amber-200">
                  ⚡ {tip.formulaOrRule}
                </div>
              )}

              {/* Solved Example */}
              <div className="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-100 dark:border-slate-800 text-xs space-y-1">
                <span className="font-bold text-slate-400 uppercase text-[10px] block">
                  {language === 'hi' ? 'व्यावहारिक उदाहरण (Live Example):' : 'Application Example:'}
                </span>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                  {language === 'hi' ? tip.hindiExample : tip.example}
                </p>
              </div>
            </div>

            {/* Exam Applicability Tag */}
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
              <span>{tip.examApplicability}</span>
              <span className="text-amber-600 font-semibold">{language === 'hi' ? 'प्रमाणित ट्रिक' : 'Verified'}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
