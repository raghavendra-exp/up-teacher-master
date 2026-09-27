import React from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  BarChart3,
  Layers,
  Award,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  FileCheck
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { SYLLABUS_DATA } from '../data/syllabus';
import { SubjectBreadcrumbs } from '../components/SubjectBreadcrumbs';
import rawQuestions from '../data/questions.json';
import rawPyqs from '../data/pyqs.json';

export const CoverageDashboardPage: React.FC = () => {
  const { language, progress } = useApp();

  const questionsList: any[] = rawQuestions as any[];
  const pyqsList: any[] = rawPyqs as any[];
  const totalQuestions = questionsList.length + pyqsList.length;

  const prtQuestions = questionsList.filter(q => q.exam === 'UP_PRT' || q.exam === 'ALL');
  const tgtQuestions = questionsList.filter(q => q.exam === 'UP_TGT' || q.exam === 'ALL');

  // Calculate dynamic syllabus coverage
  const prtSyllabus = SYLLABUS_DATA['UP_PRT'];
  const tgtSyllabus = SYLLABUS_DATA['UP_TGT'];

  const getSectionStats = (sec: any) => {
    let totalTopics = 0;
    let completedTopics = 0;

    sec.chapters.forEach((ch: any) => {
      ch.topics.forEach((t: any) => {
        totalTopics += 1;
        if (progress.completedTopics.includes(t.id)) {
          completedTopics += 1;
        }
      });
    });

    const percent = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;
    return { totalTopics, completedTopics, percent };
  };

  const breadcrumbs = [
    { label: 'Home', hindiLabel: 'होम', href: '/' },
    { label: 'Syllabus & Question Coverage', hindiLabel: 'पाठ्यक्रम एवं प्रश्न कवरेज डैशबोर्ड', active: true }
  ];

  return (
    <div className="w-full space-y-6">
      <SubjectBreadcrumbs items={breadcrumbs} />

      {/* Header Banner */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
              {language === 'hi' ? 'गुणवत्ता एवं पूर्णता नियंत्रण' : 'Quality & Completeness Control'}
            </span>
            <span className="text-xs text-slate-400 font-semibold">Real-Time Dynamic Tracking</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            {language === 'hi'
              ? 'पाठ्यक्रम एवं प्रश्न बैंक पूर्णता डैशबोर्ड (Completeness Engine)'
              : 'Syllabus Coverage & Question Completeness Engine'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl leading-relaxed">
            {language === 'hi'
              ? 'आधिकारिक पाठ्यक्रम के प्रत्येक विषय की विषयवार तैयारी प्रतिशत एवं 1,160+ बहुविकल्पीय प्रश्नों का वास्तविक समय वितरण।'
              : 'Live tracking of syllabus topic mastery alongside dynamic breakdown of 1,160+ practice and previous year questions.'}
          </p>
        </div>

        {/* Question Bank Metrics (Section 48) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
          <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl">
            <span className="text-[10px] text-slate-400 uppercase font-semibold block">
              {language === 'hi' ? 'कुल प्रश्न बैंक' : 'Total Question Bank'}
            </span>
            <span className="text-2xl font-black text-amber-600 dark:text-amber-400 mt-1 block">
              {totalQuestions}+ Qs
            </span>
            <span className="text-[11px] text-emerald-600 font-semibold block mt-0.5">
              100% Validated
            </span>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl">
            <span className="text-[10px] text-slate-400 uppercase font-semibold block">
              PRT Questions
            </span>
            <span className="text-2xl font-black text-slate-900 dark:text-white mt-1 block">
              {prtQuestions.length} Qs
            </span>
            <span className="text-[11px] text-slate-400 block mt-0.5">11 Core Sections</span>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl">
            <span className="text-[10px] text-slate-400 uppercase font-semibold block">
              TGT Questions
            </span>
            <span className="text-2xl font-black text-slate-900 dark:text-white mt-1 block">
              {tgtQuestions.length} Qs
            </span>
            <span className="text-[11px] text-slate-400 block mt-0.5">15+ Disciplines</span>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl">
            <span className="text-[10px] text-slate-400 uppercase font-semibold block">
              Official PYQs
            </span>
            <span className="text-2xl font-black text-emerald-600 mt-1 block">
              {pyqsList.length} Papers
            </span>
            <span className="text-[11px] text-slate-400 block mt-0.5">Key-Certified</span>
          </div>
        </div>
      </div>

      {/* UP PRT Syllabus Coverage Progress Bars (Section 47) */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xs space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
              {language === 'hi' ? 'यूपी प्राथमिक सहायक अध्यापक (PRT) पाठ्यक्रम कवरेज' : 'UP PRT Syllabus Coverage Tracking'}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {language === 'hi' ? 'आपके द्वारा पूर्ण किए गए विषयों के आधार पर वास्तविक गणना' : 'Calculated in real-time from completed topic checklists'}
            </p>
          </div>
          <span className="text-xs font-bold text-amber-600 bg-amber-50 dark:bg-amber-950/60 px-3 py-1 rounded-full">
            120 Qs • 360 Marks
          </span>
        </div>

        <div className="space-y-4">
          {prtSyllabus.sections.map(sec => {
            const stats = getSectionStats(sec);
            return (
              <div key={sec.id} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    {language === 'hi' ? sec.hindiName : sec.name}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400">
                      {stats.completedTopics} / {stats.totalTopics} {language === 'hi' ? 'विषय' : 'topics'}
                    </span>
                    <span className="font-bold text-amber-600 w-10 text-right">{stats.percent}%</span>
                  </div>
                </div>

                <div className="w-full h-2.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-amber-500 to-amber-600 transition-all duration-500"
                    style={{ width: `${Math.max(5, stats.percent)}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* UP TGT Syllabus Coverage Progress Bars (Section 47) */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xs space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
              {language === 'hi' ? 'यूपी टीजीटी (प्रशिक्षित स्नातक) पाठ्यक्रम कवरेज' : 'UP TGT Syllabus Coverage Tracking'}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              90 Subject + 30 Compulsory GS Questions
            </p>
          </div>
          <span className="text-xs font-bold text-orange-600 bg-orange-50 dark:bg-orange-950/60 px-3 py-1 rounded-full">
            TGT Engine
          </span>
        </div>

        <div className="space-y-4">
          {tgtSyllabus.sections.map(sec => {
            const stats = getSectionStats(sec);
            return (
              <div key={sec.id} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    {language === 'hi' ? sec.hindiName : sec.name}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400">
                      {stats.completedTopics} / {stats.totalTopics} topics
                    </span>
                    <span className="font-bold text-orange-600 w-10 text-right">{stats.percent}%</span>
                  </div>
                </div>

                <div className="w-full h-2.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-orange-500 to-amber-600 transition-all duration-500"
                    style={{ width: `${Math.max(5, stats.percent)}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
