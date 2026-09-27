import React from 'react';
import { Link } from 'react-router-dom';
import {
  Flame,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Award,
  Sparkles,
  Layers,
  ShieldCheck,
  Target
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ZERO_TO_MASTER_PATH } from '../data/learning-paths';
import { SubjectBreadcrumbs } from '../components/SubjectBreadcrumbs';

export const LearningPathPage: React.FC = () => {
  const { language, progress } = useApp();

  const breadcrumbs = [
    { label: 'Home', hindiLabel: 'होम', href: '/' },
    { label: 'Zero to Master Pathway', hindiLabel: 'शून्य से शिखर अध्ययन मार्ग', active: true }
  ];

  return (
    <div className="w-full space-y-6">
      <SubjectBreadcrumbs items={breadcrumbs} />

      {/* Header */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-400 flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 text-amber-500" />
              <span>8-Level Master Roadmap</span>
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            {language === 'hi'
              ? 'शून्य से शिखर (Zero-to-Master) अध्यापक अध्ययन पथ'
              : 'Zero-to-Master Teacher Learning Pathway'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl leading-relaxed">
            {language === 'hi'
              ? 'बिना किसी पूर्व ज्ञान के शुरुआत करें। स्तर 1 (नींव) से स्तर 8 (वैज्ञानिक अंतराल पुनरावलोकन) तक का चरणबद्ध रोडमैप।'
              : 'Start from zero knowledge and methodically ascend through foundations, basic concepts, advanced drills, official PYQs, full mock exams, and spaced repetition.'}
          </p>
        </div>
      </div>

      {/* 8 Levels Feed */}
      <div className="space-y-6">
        {ZERO_TO_MASTER_PATH.map((lvl, idx) => {
          const isUnlocked = true;
          const isCompleted = progress.completedTopics.length >= (idx + 1) * 3;

          return (
            <div
              key={lvl.levelNumber}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4 hover:border-amber-400 transition-all relative overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-600 to-amber-400 text-white font-black text-lg flex items-center justify-center shrink-0 shadow-md shadow-amber-500/20">
                    L{lvl.levelNumber}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 block">
                      {lvl.badge}
                    </span>
                    <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                      {language === 'hi' ? lvl.hindiLevelName : lvl.levelName}
                    </h2>
                  </div>
                </div>

                {isCompleted && (
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 flex items-center gap-1.5 self-start sm:self-auto">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>{language === 'hi' ? 'स्तर पूर्ण' : 'Level Completed'}</span>
                  </span>
                )}
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {language === 'hi' ? lvl.hindiDescription : lvl.description}
              </p>

              {/* Target Outcome */}
              <div className="p-3.5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-900/40 text-xs flex items-center gap-2">
                <Target className="w-4 h-4 text-amber-600 shrink-0" />
                <span className="text-slate-700 dark:text-slate-200 font-medium">
                  <strong>{language === 'hi' ? 'लक्षित परिणाम:' : 'Target Outcome:'}</strong>{' '}
                  {language === 'hi' ? lvl.hindiTargetOutcome : lvl.targetOutcome}
                </span>
              </div>

              {/* Recommended Resources and Tasks */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  {language === 'hi' ? 'इस स्तर के अनिवार्य कार्य:' : 'Milestone Tasks:'}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {lvl.tasks.map(task => (
                    <Link
                      key={task.id}
                      to={task.targetRoute}
                      className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 hover:bg-amber-50 dark:hover:bg-amber-950/40 border border-slate-200 dark:border-slate-700 hover:border-amber-300 transition-colors flex items-center justify-between text-xs font-semibold text-slate-800 dark:text-slate-200 group"
                    >
                      <span className="truncate">{language === 'hi' ? task.hindiTitle : task.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-600 shrink-0 ml-1 transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
