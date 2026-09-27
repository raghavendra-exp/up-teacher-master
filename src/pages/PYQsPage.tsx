import React, { useState } from 'react';
import {
  FileText,
  Calendar,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  Search,
  Filter,
  ShieldCheck,
  Bookmark,
  Award
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { SubjectBreadcrumbs } from '../components/SubjectBreadcrumbs';
import { QuestionItem } from '../types';
import rawPyqs from '../data/pyqs.json';

export const PYQsPage: React.FC = () => {
  const { language, toggleQuestionBookmark, isQuestionBookmarked } = useApp();
  const pyqsList: QuestionItem[] = (rawPyqs as any[]);

  const [selectedExamFilter, setSelectedExamFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [revealedAnswers, setRevealedAnswers] = useState<Record<string, boolean>>({});

  const filteredPyqs = pyqsList.filter(q => {
    const examName = q.pyqDetails?.examName || '';
    const matchesExam =
      selectedExamFilter === 'All' ||
      examName.toLowerCase().includes(selectedExamFilter.toLowerCase());

    const matchesSearch =
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.hindiQuestion.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      examName.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesExam && matchesSearch;
  });

  const toggleReveal = (id: string) => {
    setRevealedAnswers(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const breadcrumbs = [
    { label: 'Home', hindiLabel: 'होम', href: '/' },
    { label: 'Previous Year Papers (PYQs)', hindiLabel: 'विगत वर्षों के प्रश्न पत्र (PYQ)', active: true }
  ];

  return (
    <div className="w-full space-y-6">
      <SubjectBreadcrumbs items={breadcrumbs} />

      {/* Header Banner */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400">
                {language === 'hi' ? 'वास्तविक परीक्षा प्रश्न संग्रह' : 'Verified Previous Exam Archive'}
              </span>
              <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600">
                <ShieldCheck className="w-3.5 h-3.5" />
                {language === 'hi' ? 'आधिकारिक उत्तर कुंजी संदर्भ' : 'Official Key Certified'}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {language === 'hi'
                ? 'विगत वर्षों के मूल प्रश्न पत्र (Official PYQs)'
                : 'Official Previous Year Questions (PYQs Archive)'}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl leading-relaxed">
              {language === 'hi'
                ? 'उत्तर प्रदेश 69,000 सहायक अध्यापक (2019), 68,500 भर्ती (2018), यूपी टीजीटी 2021 एवं यूपीटीईटी के वास्तविक प्रश्न पत्र आधिकारिक उत्तर कुंजी संदर्भ सहित।'
                : 'Authentic previous examination questions from UP 69,000 Teacher (2019), UP TGT 2021, and UPTET with verified official answer key citations.'}
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 text-xs shrink-0 space-y-1">
            <span className="font-bold text-amber-900 dark:text-amber-200 block">
              {language === 'hi' ? 'सत्यता गारंटी:' : 'Authenticity Guarantee:'}
            </span>
            <span className="text-slate-600 dark:text-slate-300 block">
              {language === 'hi'
                ? 'किसी भी मौलिक प्रश्न को कृत्रिम रूप से PYQ नहीं दर्शाया गया है।'
                : 'Original questions are never falsely marked as PYQs.'}
            </span>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-3">
        {/* Exam Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
          {[
            { id: 'All', label: 'All PYQs (सभी)', hi: 'सभी PYQ' },
            { id: '69,000', label: 'UP 69k (2019)', hi: '69,000 शिक्षक (2019)' },
            { id: 'TGT', label: 'UP TGT (2021)', hi: 'यूपी टीजीटी (2021)' },
            { id: 'UPTET', label: 'UPTET Exam', hi: 'यूपीटीईटी' }
          ].map(item => (
            <button
              key={item.id}
              onClick={() => setSelectedExamFilter(item.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                selectedExamFilter === item.id
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              {language === 'hi' ? item.hi : item.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 w-full md:w-64">
          <Search className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder={language === 'hi' ? 'PYQ खोजें...' : 'Search PYQ topic...'}
            className="w-full bg-transparent text-xs text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-hidden"
          />
        </div>
      </div>

      {/* PYQ Cards List */}
      <div className="space-y-4">
        {filteredPyqs.map(q => {
          const isRevealed = !!revealedAnswers[q.id];
          const isBookmarked = isQuestionBookmarked(q.id);

          return (
            <div
              key={q.id}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4 hover:border-amber-300 transition-all"
            >
              {/* Top Meta info row */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    <span>Previous Year Question</span>
                  </span>
                  {q.pyqDetails && (
                    <span className="text-xs font-bold text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded-md">
                      {q.pyqDetails.examName} ({q.pyqDetails.year})
                    </span>
                  )}
                  {q.pyqDetails?.officialAnswerKeyRef && (
                    <span className="text-[10px] font-mono text-slate-400">
                      Ref: {q.pyqDetails.officialAnswerKeyRef}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => toggleQuestionBookmark(q.id)}
                  className={`p-2 rounded-xl transition-colors cursor-pointer ${
                    isBookmarked
                      ? 'bg-amber-100 text-amber-600 dark:bg-amber-950'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-amber-500'
                  }`}
                  title="Bookmark"
                >
                  <Bookmark className="w-4 h-4 fill-current" />
                </button>
              </div>

              {/* Question Text */}
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-relaxed">
                {language === 'hi' ? q.hindiQuestion : q.question}
              </h3>

              {/* Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {q.options.map((optEn, optIdx) => {
                  const optHi = q.hindiOptions[optIdx];
                  const optText = language === 'hi' ? optHi : optEn;
                  const isCorrect = optIdx === q.answer;

                  return (
                    <div
                      key={optIdx}
                      className={`p-3 rounded-2xl border text-xs sm:text-sm flex items-start gap-2.5 transition-colors ${
                        isRevealed && isCorrect
                          ? 'border-emerald-500 bg-emerald-50/70 dark:bg-emerald-950/40 font-bold text-emerald-950 dark:text-emerald-100'
                          : 'border-slate-200 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-800/40 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <span
                        className={`w-5 h-5 rounded-md text-[11px] font-bold flex items-center justify-center shrink-0 ${
                          isRevealed && isCorrect
                            ? 'bg-emerald-600 text-white'
                            : 'bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600'
                        }`}
                      >
                        {String.fromCharCode(65 + optIdx)}
                      </span>
                      <span>{optText}</span>
                    </div>
                  );
                })}
              </div>

              {/* Toggle Reveal Answer & Explanation */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <button
                  onClick={() => toggleReveal(q.id)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-amber-100 dark:hover:bg-amber-950/60 hover:text-amber-700 transition-colors w-fit cursor-pointer"
                >
                  {isRevealed
                    ? (language === 'hi' ? 'उत्तर छुपाएं' : 'Hide Answer')
                    : (language === 'hi' ? 'आधिकारिक उत्तर एवं व्याख्या देखें' : 'Reveal Official Answer & Key')}
                </button>

                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span>{q.subject}</span>
                  <span>•</span>
                  <span>{q.chapter}</span>
                </div>
              </div>

              {/* Explanation Card if revealed */}
              {isRevealed && (
                <div className="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 text-xs sm:text-sm space-y-1.5 animate-in fade-in duration-200">
                  <div className="font-bold text-amber-900 dark:text-amber-200 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    <span>
                      {language === 'hi'
                        ? `सही उत्तर: विकल्प ${String.fromCharCode(65 + q.answer)}`
                        : `Official Answer: Option ${String.fromCharCode(65 + q.answer)}`}
                    </span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    {language === 'hi' ? q.hindiExplanation : q.explanation}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
