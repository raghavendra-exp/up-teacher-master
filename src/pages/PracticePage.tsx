import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  Clock,
  Bookmark,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Sparkles,
  Award,
  Zap,
  Filter,
  BarChart3,
  Layers
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { SubjectBreadcrumbs } from '../components/SubjectBreadcrumbs';
import { QuestionItem } from '../types';
import rawQuestions from '../data/questions.json';

export const PracticePage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const {
    language,
    activeExam,
    recordQuestionAttempt,
    toggleQuestionBookmark,
    isQuestionBookmarked,
    progress
  } = useApp();

  const filterSubject = searchParams.get('subject');
  const filterTopic = searchParams.get('topic');
  const specificQuestionId = searchParams.get('q');

  // Filter pool of questions
  const allQuestions: QuestionItem[] = (rawQuestions as any[]);

  const [mode, setMode] = useState<'quick' | 'all' | 'mistakes' | 'bookmarked'>('quick');
  const [activeList, setActiveList] = useState<QuestionItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showExplanation, setShowExplanation] = useState<Record<number, boolean>>({});
  const [markedForReview, setMarkedForReview] = useState<Record<number, boolean>>({});
  const [secondsElapsed, setSecondsElapsed] = useState<number>(0);
  const [isTestSubmitted, setIsTestSubmitted] = useState<boolean>(false);

  // Initialize questions list based on filters/mode
  useEffect(() => {
    let pool = allQuestions;

    if (specificQuestionId) {
      const single = allQuestions.find(q => q.id === specificQuestionId);
      if (single) {
        setActiveList([single]);
        setCurrentIndex(0);
        return;
      }
    }

    if (filterSubject) {
      pool = pool.filter(q => q.subject.toLowerCase() === filterSubject.toLowerCase());
    }
    if (filterTopic) {
      pool = pool.filter(q => q.topic.toLowerCase().includes(filterTopic.toLowerCase()));
    }

    if (mode === 'mistakes') {
      pool = pool.filter(q => progress.mistakeQuestions.includes(q.id));
    } else if (mode === 'bookmarked') {
      pool = pool.filter(q => progress.bookmarkedQuestions.includes(q.id));
    }

    // Limit to 20 for quick mode, or take up to 40
    const finalSet = mode === 'quick' ? pool.slice(0, 15) : pool.slice(0, 40);
    setActiveList(finalSet.length > 0 ? finalSet : allQuestions.slice(0, 15));
    setCurrentIndex(0);
    setSelectedAnswers({});
    setShowExplanation({});
    setMarkedForReview({});
    setIsTestSubmitted(false);
    setSecondsElapsed(0);
  }, [filterSubject, filterTopic, specificQuestionId, mode]);

  // Timer
  useEffect(() => {
    if (isTestSubmitted) return;
    const interval = setInterval(() => {
      setSecondsElapsed(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isTestSubmitted]);

  const currentQ = activeList[currentIndex] || activeList[0];

  const handleSelectOption = (optIndex: number) => {
    if (selectedAnswers[currentIndex] !== undefined) return; // already answered

    const isCorrect = optIndex === currentQ.answer;
    setSelectedAnswers(prev => ({ ...prev, [currentIndex]: optIndex }));
    setShowExplanation(prev => ({ ...prev, [currentIndex]: true }));

    // Record in global user progress
    recordQuestionAttempt(currentQ.id, isCorrect, optIndex);
  };

  const handleToggleReview = () => {
    setMarkedForReview(prev => ({
      ...prev,
      [currentIndex]: !prev[currentIndex]
    }));
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const rem = secs % 60;
    return `${mins}:${rem < 10 ? '0' : ''}${rem}`;
  };

  // Performance calculations
  const totalAttempted = Object.keys(selectedAnswers).length;
  let correctCount = 0;
  Object.keys(selectedAnswers).forEach(idx => {
    const q = activeList[Number(idx)];
    if (q && selectedAnswers[Number(idx)] === q.answer) {
      correctCount += 1;
    }
  });
  const incorrectCount = totalAttempted - correctCount;
  const accuracyPercent = totalAttempted > 0 ? Math.round((correctCount / totalAttempted) * 100) : 0;
  const score = correctCount * 3 - incorrectCount * 1; // +3 / -1 rule

  const breadcrumbs = [
    { label: 'Home', hindiLabel: 'होम', href: '/' },
    {
      label: currentQ ? currentQ.subject : 'Practice',
      hindiLabel: currentQ ? currentQ.subject : 'अभ्यास',
      href: '/practice'
    },
    {
      label: currentQ ? currentQ.chapter : 'Chapter Drill',
      hindiLabel: currentQ ? currentQ.chapter : 'अध्याय अभ्यास',
      active: true
    }
  ];

  return (
    <div className="w-full space-y-6">
      <SubjectBreadcrumbs items={breadcrumbs} />

      {/* Practice Header Bar */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-400">
              {currentQ ? currentQ.subject : 'Practice'}
            </span>
            <span className="text-xs text-slate-400 font-mono">
              {language === 'hi' ? 'प्रश्न' : 'Question'} {currentIndex + 1} / {activeList.length}
            </span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            {currentQ ? currentQ.chapter : 'Topic Practice Engine'}
          </h1>
        </div>

        {/* Practice Mode Switcher & Timer */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
            <Clock className="w-4 h-4 text-amber-500" />
            <span>{formatTime(secondsElapsed)}</span>
          </div>

          <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl text-xs font-semibold">
            <button
              onClick={() => setMode('quick')}
              className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                mode === 'quick' ? 'bg-amber-600 text-white' : 'text-slate-600 dark:text-slate-300'
              }`}
            >
              {language === 'hi' ? 'त्वरित 15' : 'Quick 15'}
            </button>
            <button
              onClick={() => setMode('mistakes')}
              className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                mode === 'mistakes' ? 'bg-amber-600 text-white' : 'text-slate-600 dark:text-slate-300'
              }`}
            >
              {language === 'hi' ? 'गलतियां (Mistakes)' : 'Mistakes'}
            </button>
          </div>
        </div>
      </div>

      {/* Main Practice Layout: Question on Left, Palette & Stats on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Interactive Question Card (2 cols) */}
        <div className="lg:col-span-2 space-y-4">
          {currentQ ? (
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xs space-y-6">
              {/* Question Top Row: Difficulty, Type, Bookmark */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <span
                    className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase ${
                      currentQ.difficulty === 'hard'
                        ? 'bg-rose-100 text-rose-700'
                        : currentQ.difficulty === 'medium'
                        ? 'bg-amber-100 text-amber-700'
                        : 'bg-emerald-100 text-emerald-700'
                    }`}
                  >
                    {currentQ.difficulty}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">{currentQ.id}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleToggleReview}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer ${
                      markedForReview[currentIndex]
                        ? 'bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-700'
                    }`}
                  >
                    <span>{language === 'hi' ? 'समीक्षा हेतु चिह्नित' : 'Review'}</span>
                  </button>

                  <button
                    onClick={() => toggleQuestionBookmark(currentQ.id)}
                    className={`p-2 rounded-lg transition-colors cursor-pointer ${
                      isQuestionBookmarked(currentQ.id)
                        ? 'bg-amber-100 text-amber-600 dark:bg-amber-950'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-amber-500'
                    }`}
                    title="Bookmark Question"
                  >
                    <Bookmark className="w-4 h-4 fill-current" />
                  </button>
                </div>
              </div>

              {/* Question Content (Bilingual based on toggle) */}
              <div className="space-y-3">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-relaxed">
                  {language === 'hi' ? currentQ.hindiQuestion : currentQ.question}
                </h3>
              </div>

              {/* Options A, B, C, D */}
              <div className="space-y-3">
                {currentQ.options.map((optEn, optIdx) => {
                  const optHi = currentQ.hindiOptions[optIdx];
                  const optText = language === 'hi' ? optHi : optEn;
                  const isSelected = selectedAnswers[currentIndex] === optIdx;
                  const isAnswered = selectedAnswers[currentIndex] !== undefined;
                  const isCorrectAnswer = optIdx === currentQ.answer;

                  let optionStyle =
                    'border-slate-200 dark:border-slate-700 bg-slate-50/60 dark:bg-slate-800/40 text-slate-800 dark:text-slate-100 hover:border-amber-400 hover:bg-amber-50/30';

                  if (isAnswered) {
                    if (isCorrectAnswer) {
                      optionStyle =
                        'border-emerald-500 bg-emerald-50/70 dark:bg-emerald-950/40 text-emerald-950 dark:text-emerald-100 font-semibold ring-1 ring-emerald-500';
                    } else if (isSelected && !isCorrectAnswer) {
                      optionStyle =
                        'border-rose-500 bg-rose-50/70 dark:bg-rose-950/40 text-rose-950 dark:text-rose-100 font-semibold ring-1 ring-rose-500';
                    } else {
                      optionStyle = 'border-slate-200 dark:border-slate-800 opacity-60';
                    }
                  }

                  return (
                    <button
                      key={optIdx}
                      disabled={isAnswered}
                      onClick={() => handleSelectOption(optIdx)}
                      className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-3 cursor-pointer ${optionStyle}`}
                    >
                      <span
                        className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 ${
                          isAnswered && isCorrectAnswer
                            ? 'bg-emerald-600 text-white'
                            : isAnswered && isSelected && !isCorrectAnswer
                            ? 'bg-rose-600 text-white'
                            : 'bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300'
                        }`}
                      >
                        {String.fromCharCode(65 + optIdx)}
                      </span>
                      <span className="text-xs sm:text-sm leading-relaxed flex-1">{optText}</span>
                      {isAnswered && isCorrectAnswer && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      )}
                      {isAnswered && isSelected && !isCorrectAnswer && (
                        <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Instant Explanation Box (Section 20) */}
              {showExplanation[currentIndex] && (
                <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 text-xs sm:text-sm space-y-2 animate-in fade-in duration-200">
                  <div className="flex items-center gap-1.5 font-bold text-amber-900 dark:text-amber-200">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    <span>{language === 'hi' ? 'विस्तृत व्याख्या (Explanation):' : 'Detailed Explanation:'}</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    {language === 'hi' ? currentQ.hindiExplanation : currentQ.explanation}
                  </p>
                </div>
              )}

              {/* Navigation Controls: Prev, Next, Skip */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <button
                  disabled={currentIndex === 0}
                  onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 disabled:opacity-40 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>{language === 'hi' ? 'पिछला' : 'Previous'}</span>
                </button>

                <button
                  disabled={currentIndex === activeList.length - 1}
                  onClick={() => setCurrentIndex(prev => Math.min(activeList.length - 1, prev + 1))}
                  className="px-5 py-2 rounded-xl text-xs font-bold bg-amber-600 hover:bg-amber-700 text-white transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>{language === 'hi' ? 'अगला प्रश्न' : 'Next Question'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            <div className="p-12 text-center text-slate-400 bg-white dark:bg-slate-900 rounded-3xl">
              {language === 'hi' ? 'कोई प्रश्न नहीं मिला' : 'No questions found'}
            </div>
          )}
        </div>

        {/* Right Column: Question Palette & Real-Time Stats */}
        <div className="space-y-4">
          {/* Real-time score & stats card */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
            <h4 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-amber-500" />
              <span>{language === 'hi' ? 'सत्र प्रगति एवं स्कोर' : 'Live Score & Accuracy'}</span>
            </h4>

            <div className="grid grid-cols-2 gap-3 text-center">
              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800">
                <span className="text-[10px] text-slate-400 uppercase font-semibold block">
                  {language === 'hi' ? 'शुद्ध स्कोर' : 'Net Score (+3/-1)'}
                </span>
                <span className="text-xl font-black text-amber-600 mt-0.5 block">
                  {score}
                </span>
              </div>
              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800">
                <span className="text-[10px] text-slate-400 uppercase font-semibold block">
                  {language === 'hi' ? 'सटीकता' : 'Accuracy'}
                </span>
                <span className="text-xl font-black text-emerald-600 mt-0.5 block">
                  {accuracyPercent}%
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100 dark:border-slate-800">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                {correctCount} {language === 'hi' ? 'सही' : 'Correct'}
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                {incorrectCount} {language === 'hi' ? 'गलत' : 'Wrong'}
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                {activeList.length - totalAttempted} {language === 'hi' ? 'शेष' : 'Left'}
              </span>
            </div>
          </div>

          {/* Question Palette Grid */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                {language === 'hi' ? 'प्रश्न पैलेट' : 'Question Palette'}
              </h4>
              <span className="text-xs text-slate-400 font-mono">
                {activeList.length} Qs
              </span>
            </div>

            <div className="grid grid-cols-5 gap-2 max-h-56 overflow-y-auto pr-1">
              {activeList.map((q, idx) => {
                const isCurrent = idx === currentIndex;
                const isAnswered = selectedAnswers[idx] !== undefined;
                const isMarked = markedForReview[idx];

                let pillColor = 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300';
                if (isCurrent) {
                  pillColor = 'ring-2 ring-amber-500 font-bold bg-amber-500 text-white';
                } else if (isMarked) {
                  pillColor = 'bg-purple-600 text-white font-bold';
                } else if (isAnswered) {
                  pillColor = 'bg-emerald-600 text-white font-semibold';
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-9 rounded-xl text-xs flex items-center justify-center transition-all cursor-pointer ${pillColor}`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
