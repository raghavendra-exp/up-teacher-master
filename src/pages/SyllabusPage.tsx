import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  BookOpen,
  CheckCircle2,
  Calendar,
  Layers,
  ArrowRight,
  ExternalLink,
  ChevronDown,
  Sparkles,
  ShieldCheck,
  Zap,
  Bookmark
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { SYLLABUS_DATA } from '../data/syllabus';
import { SubjectBreadcrumbs } from '../components/SubjectBreadcrumbs';
import { ExamId } from '../types';

export const SyllabusPage: React.FC = () => {
  const { examType } = useParams<{ examType?: string }>();
  const { language, activeExam, isTopicCompleted, toggleTopicCompletion } = useApp();

  const currentKey = examType?.toUpperCase() === 'TGT' ? 'UP_TGT' : examType?.toUpperCase() === 'UPTET' ? 'UPTET' : 'UP_PRT';
  const syllabus = SYLLABUS_DATA[currentKey] || SYLLABUS_DATA['UP_PRT'];

  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    [syllabus.sections[0]?.id || '']: true
  });

  const toggleSection = (id: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const breadcrumbs = [
    { label: 'Home', hindiLabel: 'होम', href: '/' },
    { label: 'Syllabus', hindiLabel: 'पाठ्यक्रम', href: '/syllabus' },
    {
      label: currentKey === 'UP_PRT' ? 'UP PRT Syllabus' : currentKey === 'UP_TGT' ? 'UP TGT Syllabus' : 'UPTET Syllabus',
      hindiLabel: currentKey === 'UP_PRT' ? 'यूपी प्राथमिक पाठ्यक्रम' : currentKey === 'UP_TGT' ? 'यूपी टीजीटी पाठ्यक्रम' : 'यूपीटीईटी पाठ्यक्रम',
      active: true
    }
  ];

  return (
    <div className="w-full space-y-6">
      <SubjectBreadcrumbs items={breadcrumbs} />

      {/* Exam Switcher Tabs for Syllabus */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200 dark:border-slate-800">
        {[
          { id: 'prt', key: 'UP_PRT', label: 'UP PRT (Assistant Teacher)', hi: 'यूपी प्राथमिक (PRT)' },
          { id: 'tgt', key: 'UP_TGT', label: 'UP TGT (Secondary Subject)', hi: 'यूपी टीजीटी (TGT)' },
          { id: 'uptet', key: 'UPTET', label: 'UPTET (Eligibility)', hi: 'यूपीटीईटी (पात्रता)' }
        ].map(tab => {
          const isSelected = (currentKey === tab.key);
          return (
            <Link
              key={tab.id}
              to={`/syllabus/${tab.id}`}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                isSelected
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-600/20'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-amber-400'
              }`}
            >
              {language === 'hi' ? tab.hi : tab.label}
            </Link>
          );
        })}
      </div>

      {/* Syllabus Header Card with Version & Verification Tracking (Section 25) */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              {syllabus.status}
            </span>
            <span className="text-xs font-mono text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md">
              {syllabus.version}
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-amber-500" />
              <span>{language === 'hi' ? 'सत्यापित तिथि:' : 'Last verified:'}</span>
              <strong className="text-slate-700 dark:text-slate-200">{syllabus.lastVerified}</strong>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
              <span>{language === 'hi' ? 'स्रोत:' : 'Source:'}</span>
              <strong className="text-slate-700 dark:text-slate-200">{syllabus.sourceType}</strong>
            </span>
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          {currentKey === 'UP_PRT'
            ? language === 'hi'
              ? 'उत्तर प्रदेश प्राथमिक सहायक अध्यापक (सुपर टीईटी) आधिकारिक पाठ्यक्रम'
              : 'UP Primary Assistant Teacher (Super TET) Official Syllabus'
            : currentKey === 'UP_TGT'
            ? language === 'hi'
              ? 'उत्तर प्रदेश टीजीटी (प्रशिक्षित स्नातक शिक्षक) आधिकारिक पाठ्यक्रम'
              : 'UP TGT (Trained Graduate Teacher) Official Syllabus'
            : language === 'hi'
            ? 'यूपीटीईटी पात्रता परीक्षा आधिकारिक पाठ्यक्रम'
            : 'UPTET Eligibility Examination Official Syllabus'}
        </h1>

        <p className="text-xs text-slate-500">
          Source: <a href={syllabus.sourceUrl} target="_blank" rel="noreferrer" className="text-amber-600 hover:underline">{syllabus.sourceTitle}</a>
        </p>

        {/* "What Changed?" Comparison Box (Section 25) */}
        <div className="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60 text-xs sm:text-sm space-y-1">
          <div className="flex items-center gap-1.5 font-bold text-amber-900 dark:text-amber-200">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>{language === 'hi' ? 'क्या बदलाव हुए? (What Changed?)' : 'What Changed in the Unified Syllabus?'}</span>
          </div>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            {language === 'hi' ? syllabus.hindiWhatChanged : syllabus.whatChanged}
          </p>
        </div>
      </div>

      {/* Sections and Topic Tree */}
      <div className="space-y-4">
        <div className="flex items-center justify-between px-1">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            {language === 'hi' ? 'खंडवार विषय सूची एवं अध्याय' : 'Sections & Chapter Tree'}
          </h2>
          <span className="text-xs text-slate-400">
            {syllabus.sections.length} {language === 'hi' ? 'मुख्य खंड' : 'Core Sections'}
          </span>
        </div>

        {syllabus.sections.map((section, sIdx) => {
          const isExpanded = !!expandedSections[section.id];
          return (
            <div
              key={section.id}
              className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs transition-colors"
            >
              {/* Section Header */}
              <div
                onClick={() => toggleSection(section.id)}
                className="p-5 sm:p-6 flex items-center justify-between cursor-pointer hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300 flex items-center justify-center font-bold text-sm shrink-0">
                    {sIdx + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                      {language === 'hi' ? section.hindiName : section.name}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {section.questionCount} {language === 'hi' ? 'प्रश्न' : 'Questions'} • {section.marks} {language === 'hi' ? 'अंक' : 'Marks'}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Link
                    to={`/practice?subject=${encodeURIComponent(section.name)}`}
                    onClick={e => e.stopPropagation()}
                    className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 hover:bg-amber-100 transition-colors"
                  >
                    <span>{language === 'hi' ? 'खंड का अभ्यास' : 'Practice Section'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                  />
                </div>
              </div>

              {/* Section Chapters & Topics Tree */}
              {isExpanded && (
                <div className="px-5 pb-6 pt-2 border-t border-slate-100 dark:border-slate-800/60 space-y-6">
                  {section.chapters.map(chapter => (
                    <div key={chapter.id} className="space-y-3">
                      <div className="flex items-center justify-between pb-1 border-b border-slate-100 dark:border-slate-800">
                        <span className="font-bold text-sm text-slate-800 dark:text-slate-200">
                          {language === 'hi' ? chapter.hindiName : chapter.name}
                        </span>
                        <span className="text-[11px] font-semibold text-amber-600 dark:text-amber-400">
                          {chapter.weightageEstimated}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {chapter.topics.map(topic => {
                          const completed = isTopicCompleted(topic.id);
                          return (
                            <div
                              key={topic.id}
                              className={`p-4 rounded-2xl border transition-all ${
                                completed
                                  ? 'border-emerald-300 dark:border-emerald-900 bg-emerald-50/30 dark:bg-emerald-950/20'
                                  : 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 hover:border-amber-400'
                              }`}
                            >
                              <div className="flex items-start justify-between gap-2">
                                <div className="space-y-1">
                                  <div className="flex items-center gap-2">
                                    <span
                                      className={`px-1.5 py-0.5 rounded-sm text-[10px] font-bold uppercase ${
                                        topic.difficulty === 'hard'
                                          ? 'bg-rose-100 text-rose-700'
                                          : topic.difficulty === 'medium'
                                          ? 'bg-amber-100 text-amber-700'
                                          : 'bg-emerald-100 text-emerald-700'
                                      }`}
                                    >
                                      {topic.difficulty}
                                    </span>
                                    <span className="text-[10px] text-slate-400">
                                      ~{topic.estimatedHours} {language === 'hi' ? 'घंटे' : 'hrs'}
                                    </span>
                                  </div>
                                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                                    {language === 'hi' ? topic.hindiName : topic.name}
                                  </h4>
                                </div>

                                <button
                                  onClick={() => toggleTopicCompletion(topic.id)}
                                  className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                                    completed
                                      ? 'text-emerald-600 bg-emerald-100 dark:bg-emerald-950'
                                      : 'text-slate-400 hover:text-slate-600 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700'
                                  }`}
                                  title={completed ? 'Mark as Incomplete' : 'Mark as Completed'}
                                >
                                  <CheckCircle2 className="w-4 h-4" />
                                </button>
                              </div>

                              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 line-clamp-2">
                                {language === 'hi' && topic.hindiDescription
                                  ? topic.hindiDescription
                                  : topic.description}
                              </p>

                              {/* NCERT & SCERT Mapping Links (Section 17) */}
                              {(topic.ncertMapping || topic.scertMapping) && (
                                <div className="mt-3 pt-2 border-t border-slate-200/60 dark:border-slate-700/60 flex flex-wrap gap-2 text-[11px]">
                                  {topic.ncertMapping && (
                                    <a
                                      href={topic.ncertMapping.portalLink}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                                    >
                                      <span>NCERT Class {topic.ncertMapping.classes.join(', ')}</span>
                                      <ExternalLink className="w-3 h-3" />
                                    </a>
                                  )}
                                  {topic.scertMapping && (
                                    <span className="text-slate-500 dark:text-slate-400 font-medium">
                                      SCERT: {topic.scertMapping.bookName} (Cl {topic.scertMapping.classes.join(', ')})
                                    </span>
                                  )}
                                </div>
                              )}

                              <div className="mt-3 flex items-center justify-between text-xs">
                                <Link
                                  to={`/subjects/${section.subjectId}`}
                                  className="text-slate-500 hover:text-amber-600 font-medium"
                                >
                                  {language === 'hi' ? 'अवधारणाएं →' : 'Study Notes →'}
                                </Link>
                                <Link
                                  to={`/practice?topic=${encodeURIComponent(topic.name)}`}
                                  className="font-bold text-amber-600 hover:text-amber-700 dark:text-amber-400"
                                >
                                  {language === 'hi' ? 'MCQ हल करें →' : 'Practice MCQs →'}
                                </Link>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
