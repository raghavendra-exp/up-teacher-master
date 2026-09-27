import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import {
  BookOpen,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Bookmark,
  Sparkles,
  FileText,
  Lightbulb,
  ShieldCheck,
  ChevronRight,
  Award
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { SUBJECTS_DATA } from '../data/subjects';
import { SYLLABUS_DATA } from '../data/syllabus';
import { SUBJECT_TOPICS_CATALOG } from '../data/subject-topics';
import { SubjectBreadcrumbs } from '../components/SubjectBreadcrumbs';

export const SubjectDetailPage: React.FC = () => {
  const { subjectId } = useParams<{ subjectId: string }>();
  const [searchParams, setSearchParams] = useSearchParams();
  const { language, activeExam, isTopicCompleted, toggleTopicCompletion } = useApp();

  const subject = SUBJECTS_DATA.find(s => s.id === subjectId) || SUBJECTS_DATA[0];
  const examKey = activeExam === 'UP_TGT' ? 'UP_TGT' : 'UP_PRT';
  const syllabus = SYLLABUS_DATA[examKey];

  // Retrieve rich authentic subject chapters from catalog or fallback to syllabus
  const catalogEntry = SUBJECT_TOPICS_CATALOG[subject.id];
  const matchingSection = syllabus.sections.find(
    s => s.subjectId === subject.id || s.name.toLowerCase().includes(subject.name.toLowerCase().split(' ')[0])
  ) || syllabus.sections[0];

  const chapters = (catalogEntry && catalogEntry.chapters.length > 0)
    ? catalogEntry.chapters
    : (matchingSection?.chapters || []);

  const chQuery = parseInt(searchParams.get('ch') || '0', 10);
  const [activeChapterIndex, setActiveChapterIndex] = useState(
    isNaN(chQuery) || chQuery < 0 || chQuery >= chapters.length ? 0 : chQuery
  );

  useEffect(() => {
    const ch = parseInt(searchParams.get('ch') || '0', 10);
    if (!isNaN(ch) && ch >= 0 && ch < chapters.length) {
      setActiveChapterIndex(ch);
    }
  }, [searchParams, chapters.length]);

  const handleSelectChapter = (idx: number) => {
    setActiveChapterIndex(idx);
    setSearchParams({ ch: idx.toString() });
  };

  const currentChapter = chapters[activeChapterIndex] || chapters[0];

  // Setup previous and next topics for navigation
  const nextChapter = chapters[activeChapterIndex + 1];
  const prevChapter = chapters[activeChapterIndex - 1];

  const prevTopic = prevChapter
    ? {
        title: prevChapter.name,
        hindiTitle: prevChapter.hindiName,
        route: `/subjects/${subject.id}?ch=${activeChapterIndex - 1}`
      }
    : undefined;

  const nextTopic = nextChapter
    ? {
        title: nextChapter.name,
        hindiTitle: nextChapter.hindiName,
        route: `/subjects/${subject.id}?ch=${activeChapterIndex + 1}`
      }
    : undefined;

  const breadcrumbs = [
    { label: 'Home', hindiLabel: 'होम', href: '/' },
    {
      label: activeExam === 'UP_PRT' ? 'UP PRT' : activeExam === 'UP_TGT' ? 'UP TGT' : 'Exams',
      hindiLabel: activeExam === 'UP_PRT' ? 'यूपी प्राथमिक' : activeExam === 'UP_TGT' ? 'यूपी टीजीटी' : 'परीक्षाएं',
      href: `/exams/${activeExam}`
    },
    { label: subject.name, hindiLabel: subject.hindiName, href: '/subjects' },
    { label: currentChapter?.name || subject.name, hindiLabel: currentChapter?.hindiName || subject.hindiName, active: true }
  ];

  return (
    <div className="w-full space-y-6">
      {/* Mandatory Clickable Breadcrumbs with Previous and Next Topic navigation */}
      <SubjectBreadcrumbs
        items={breadcrumbs}
        prevTopic={prevTopic}
        nextTopic={nextTopic}
      />

      {/* Subject Header */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-400">
              {subject.category}
            </span>
            <span className="text-xs text-slate-400">
              {subject.totalChapters} Chapters • {subject.totalTopics} Topics
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <a
              href="https://epathshala.ncert.gov.in"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 rounded-xl text-xs font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-900 flex items-center gap-1.5 hover:underline"
            >
              <span>{language === 'hi' ? 'ई-पाठशाला (ePathshala)' : 'ePathshala Portal'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href={subject.ncertDownloadLink || 'https://ncert.nic.in/textbook.php'}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 rounded-xl text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900 flex items-center gap-1.5 hover:underline"
            >
              <span>{language === 'hi' ? 'एनसीईआरटी पोर्टल' : 'NCERT Portal'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <Link
              to="/books"
              className="px-3 py-1.5 rounded-xl text-xs font-bold text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-900 flex items-center gap-1.5 hover:underline"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>{language === 'hi' ? 'सभी पुस्तकें हब' : 'Books Hub'}</span>
            </Link>
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
          {language === 'hi' ? subject.hindiName : subject.name}
        </h1>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
          {language === 'hi' ? subject.hindiOverview : subject.overview}
        </p>

        {/* NCERT & SCERT Cross-reference Banner (Section 17) */}
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div>
            <span className="font-bold text-slate-400 uppercase text-[10px] block mb-0.5">
              {language === 'hi' ? 'एनसीईआरटी पाठ्यपुस्तक मैपिंग' : 'NCERT Official Mapping'}
            </span>
            <span className="font-semibold text-slate-800 dark:text-slate-200">
              {subject.recommendedNCERT}
            </span>
          </div>
          <div>
            <span className="font-bold text-slate-400 uppercase text-[10px] block mb-0.5">
              {language === 'hi' ? 'उत्तर प्रदेश बेसिक / माध्यमिक परिषद' : 'UP Basic / Board Mapping'}
            </span>
            <span className="font-semibold text-slate-800 dark:text-slate-200">
              {subject.recommendedSCERT}
            </span>
          </div>
        </div>
      </div>

      {/* Chapter Selection Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200 dark:border-slate-800 no-scrollbar">
        {chapters.map((ch, idx) => {
          const isSelected = activeChapterIndex === idx;
          return (
            <button
              key={ch.id}
              onClick={() => handleSelectChapter(idx)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                isSelected
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-amber-400'
              }`}
            >
              <span>{idx + 1}. {language === 'hi' ? ch.hindiName : ch.name}</span>
            </button>
          );
        })}
      </div>

      {/* Active Chapter Details & Deep Topic Engine (Section 9 & 10) */}
      <div className="space-y-6">
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
              {language === 'hi' ? 'वर्तमान अध्ययन अध्याय' : 'Current Active Chapter'}
            </span>
            <span className="text-xs font-bold bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 px-2 py-0.5 rounded-full">
              {currentChapter?.weightageEstimated || 'High Priority'}
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            {language === 'hi' ? (currentChapter?.hindiName || subject.hindiName) : (currentChapter?.name || subject.name)}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(currentChapter?.topics || []).map(topic => {
              const completed = isTopicCompleted(topic.id);
              return (
                <div
                  key={topic.id}
                  className={`p-5 rounded-2xl border transition-all ${
                    completed
                      ? 'border-emerald-300 dark:border-emerald-900 bg-emerald-50/20 dark:bg-emerald-950/20'
                      : 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 hover:border-amber-400'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                        {topic.difficulty} difficulty
                      </span>
                      <h3 className="font-bold text-base text-slate-900 dark:text-white mt-1.5">
                        {language === 'hi' ? topic.hindiName : topic.name}
                      </h3>
                    </div>

                    <button
                      onClick={() => toggleTopicCompletion(topic.id)}
                      className={`p-2 rounded-xl transition-colors cursor-pointer ${
                        completed
                          ? 'bg-emerald-600 text-white'
                          : 'bg-white dark:bg-slate-700 text-slate-400 border border-slate-200 dark:border-slate-600 hover:text-slate-600'
                      }`}
                      title={completed ? 'Completed' : 'Mark as Complete'}
                    >
                      <CheckCircle2 className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                    {language === 'hi' && topic.hindiDescription
                      ? topic.hindiDescription
                      : topic.description}
                  </p>

                  {/* Subtopics bullet checklist */}
                  <div className="mt-3 pt-3 border-t border-slate-200/60 dark:border-slate-700/60 space-y-1.5">
                    <span className="text-[10px] font-bold text-slate-400 uppercase block">
                      {language === 'hi' ? 'प्रमुख उप-विषय (Key Subtopics):' : 'Key Concepts Covered:'}
                    </span>
                    <ul className="space-y-1">
                      {topic.subtopics.map((st, i) => (
                        <li key={i} className="text-xs text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></span>
                          <span>{st}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Important formulas / facts if available */}
                  {topic.keyFormulasOrFacts && topic.keyFormulasOrFacts.length > 0 && (
                    <div className="mt-3 p-3 bg-amber-50/70 dark:bg-amber-950/30 rounded-xl border border-amber-200/80 dark:border-amber-900/40 text-xs">
                      <span className="font-bold text-amber-900 dark:text-amber-200 block mb-1 flex items-center gap-1">
                        <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
                        {language === 'hi' ? 'महत्वपूर्ण सूत्र एवं स्मृति बिंदु' : 'Important Formulas / Facts'}
                      </span>
                      <ul className="space-y-0.5 text-slate-700 dark:text-slate-300 font-mono text-[11px]">
                        {topic.keyFormulasOrFacts.map((fact, idx) => (
                          <li key={idx}>• {fact}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Direct Practice Button */}
                  <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">
                      ~{topic.estimatedHours} {language === 'hi' ? 'घंटे अध्ययन' : 'hrs study'}
                    </span>
                    <Link
                      to={`/practice?topic=${encodeURIComponent(topic.name)}`}
                      className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-white bg-amber-600 hover:bg-amber-700 transition-colors flex items-center gap-1"
                    >
                      <span>{language === 'hi' ? 'विषय के MCQs हल करें' : 'Practice MCQs'}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
