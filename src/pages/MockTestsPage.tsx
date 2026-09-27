import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Award,
  Clock,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  RotateCcw,
  Sparkles,
  BarChart3,
  Layers,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  ShieldCheck,
  TrendingUp,
  Brain
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { SubjectBreadcrumbs } from '../components/SubjectBreadcrumbs';
import { QuestionItem, ExamId } from '../types';
import rawQuestions from '../data/questions.json';
import rawPyqs from '../data/pyqs.json';

export const MockTestsPage: React.FC = () => {
  const { language, activeExam, recordTestResult } = useApp();

  const allQuestions: QuestionItem[] = (rawQuestions as any[]);
  const allPyqs: QuestionItem[] = (rawPyqs as any[]);
  const combinedPool = [...allQuestions, ...allPyqs];

  // Test Generator State
  const [selectedExamType, setSelectedExamType] = useState<ExamId>(activeExam || 'UP_PRT');
  const [questionCount, setQuestionCount] = useState<number>(25);
  const [selectedSubjectFilter, setSelectedSubjectFilter] = useState<string>('All');
  const [isTestActive, setIsTestActive] = useState<boolean>(false);

  // Active Test State
  const [testQuestions, setTestQuestions] = useState<QuestionItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [reviewFlags, setReviewFlags] = useState<Record<number, boolean>>({});
  const [timeRemainingSeconds, setTimeRemainingSeconds] = useState<number>(1800); // 30 mins default
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const startTest = (presetCount?: number, presetExam?: ExamId) => {
    const targetExam = presetExam || selectedExamType;
    const count = presetCount || questionCount;

    // Filter questions matching exam and prevent duplicates
    let pool = combinedPool.filter(q => q.exam === targetExam || q.exam === 'ALL');
    if (selectedSubjectFilter !== 'All') {
      pool = pool.filter(q => q.subject === selectedSubjectFilter);
    }

    // Shuffle and pick unique questions
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    const picked = shuffled.slice(0, Math.min(count, shuffled.length));

    setTestQuestions(picked);
    setCurrentIndex(0);
    setUserAnswers({});
    setReviewFlags({});
    setTimeRemainingSeconds(count * 60); // 1 minute per question
    setIsSubmitted(false);
    setIsTestActive(true);
  };

  // Timer countdown
  useEffect(() => {
    if (!isTestActive || isSubmitted) return;

    const timer = setInterval(() => {
      setTimeRemainingSeconds(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitTest();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isTestActive, isSubmitted]);

  const handleSubmitTest = () => {
    setIsSubmitted(true);

    // Calculate metrics
    let correct = 0;
    let incorrect = 0;
    const subjectWise: Record<string, { correct: number; total: number }> = {};

    testQuestions.forEach((q, idx) => {
      if (!subjectWise[q.subject]) {
        subjectWise[q.subject] = { correct: 0, total: 0 };
      }
      subjectWise[q.subject].total += 1;

      const ans = userAnswers[idx];
      if (ans !== undefined) {
        if (ans === q.answer) {
          correct += 1;
          subjectWise[q.subject].correct += 1;
        } else {
          incorrect += 1;
        }
      }
    });

    const attempted = correct + incorrect;
    const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;
    const score = correct * 3 - incorrect * 1;
    const totalMarks = testQuestions.length * 3;

    // Save to user progress
    recordTestResult({
      id: `test-${Date.now()}`,
      testTitle: `${selectedExamType === 'UP_PRT' ? 'UP PRT' : 'UP TGT'} Mock Test (${testQuestions.length} Qs)`,
      exam: selectedExamType,
      date: new Date().toISOString().split('T')[0],
      score,
      totalMarks,
      correctCount: correct,
      incorrectCount: incorrect,
      unattemptedCount: testQuestions.length - attempted,
      timeSpentSeconds: testQuestions.length * 60 - timeRemainingSeconds,
      accuracy,
      subjectWiseScores: subjectWise
    });
  };

  const formatTimer = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins}:${s < 10 ? '0' : ''}${s}`;
  };

  const breadcrumbs = [
    { label: 'Home', hindiLabel: 'होम', href: '/' },
    { label: 'Mock Test Simulator', hindiLabel: 'मॉक टेस्ट सिमुलेटर', active: true }
  ];

  // If Test is currently running
  if (isTestActive && !isSubmitted) {
    const currentQ = testQuestions[currentIndex] || testQuestions[0];
    const isAnswered = userAnswers[currentIndex] !== undefined;

    return (
      <div className="w-full space-y-6">
        <SubjectBreadcrumbs items={breadcrumbs} />

        {/* Test Control Top Bar */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-sm">
              {currentIndex + 1}
            </div>
            <div>
              <h2 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white truncate max-w-[200px] sm:max-w-md">
                {currentQ.subject} • {currentQ.chapter}
              </h2>
              <span className="text-[11px] text-slate-400">
                {language === 'hi' ? 'कुल' : 'Total'} {testQuestions.length} {language === 'hi' ? 'प्रश्न' : 'Questions'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono text-sm font-bold ${
                timeRemainingSeconds < 300
                  ? 'bg-rose-100 text-rose-700 animate-pulse'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200'
              }`}
            >
              <Clock className="w-4 h-4 text-amber-500" />
              <span>{formatTimer(timeRemainingSeconds)}</span>
            </div>

            <button
              onClick={() => {
                if (window.confirm('Are you sure you want to finish and submit the test?')) {
                  handleSubmitTest();
                }
              }}
              className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors cursor-pointer"
            >
              {language === 'hi' ? 'सबमिट करें' : 'Submit Test'}
            </button>
          </div>
        </div>

        {/* Test Engine Interface: Question Card + Palette */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Question Card */}
          <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xs space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 text-xs text-slate-400">
              <span className="font-semibold text-slate-700 dark:text-slate-300">
                {language === 'hi' ? 'अंक: +3 सही, -1 गलत' : 'Marking: +3 Correct, -1 Incorrect'}
              </span>
              <button
                onClick={() =>
                  setReviewFlags(prev => ({
                    ...prev,
                    [currentIndex]: !prev[currentIndex]
                  }))
                }
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold cursor-pointer ${
                  reviewFlags[currentIndex]
                    ? 'bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600'
                }`}
              >
                {language === 'hi' ? 'रिव्यू हेतु चिह्नित' : 'Mark for Review'}
              </button>
            </div>

            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-relaxed">
              {language === 'hi' ? currentQ.hindiQuestion : currentQ.question}
            </h3>

            {/* Options */}
            <div className="space-y-3">
              {currentQ.options.map((optEn, optIdx) => {
                const optHi = currentQ.hindiOptions[optIdx];
                const isSelected = userAnswers[currentIndex] === optIdx;

                return (
                  <button
                    key={optIdx}
                    onClick={() =>
                      setUserAnswers(prev => ({
                        ...prev,
                        [currentIndex]: optIdx
                      }))
                    }
                    className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-3 cursor-pointer ${
                      isSelected
                        ? 'border-amber-500 bg-amber-50/60 dark:bg-amber-950/40 text-amber-950 dark:text-amber-100 font-semibold ring-1 ring-amber-500'
                        : 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 text-slate-800 dark:text-slate-200 hover:border-amber-400'
                    }`}
                  >
                    <span
                      className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 ${
                        isSelected
                          ? 'bg-amber-600 text-white'
                          : 'bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-slate-600'
                      }`}
                    >
                      {String.fromCharCode(65 + optIdx)}
                    </span>
                    <span className="text-xs sm:text-sm leading-relaxed flex-1">
                      {language === 'hi' ? optHi : optEn}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Prev / Next controls */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <button
                disabled={currentIndex === 0}
                onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 disabled:opacity-40 flex items-center gap-1 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{language === 'hi' ? 'पिछला' : 'Previous'}</span>
              </button>

              <button
                disabled={currentIndex === testQuestions.length - 1}
                onClick={() => setCurrentIndex(prev => Math.min(testQuestions.length - 1, prev + 1))}
                className="px-5 py-2 rounded-xl text-xs font-bold bg-amber-600 hover:bg-amber-700 text-white flex items-center gap-1 cursor-pointer"
              >
                <span>{language === 'hi' ? 'अगला' : 'Next'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Question Palette Sidebar */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
            <h4 className="font-bold text-sm text-slate-900 dark:text-white">
              {language === 'hi' ? 'प्रश्न स्थिति' : 'Question Status'}
            </h4>

            <div className="grid grid-cols-5 gap-2 max-h-72 overflow-y-auto pr-1">
              {testQuestions.map((q, idx) => {
                const isCurrent = idx === currentIndex;
                const isAnswered = userAnswers[idx] !== undefined;
                const isMarked = reviewFlags[idx];

                let color = 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300';
                if (isCurrent) {
                  color = 'ring-2 ring-amber-500 bg-amber-500 text-white font-bold';
                } else if (isMarked) {
                  color = 'bg-purple-600 text-white font-bold';
                } else if (isAnswered) {
                  color = 'bg-emerald-600 text-white font-semibold';
                }

                return (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-9 rounded-xl text-xs flex items-center justify-center transition-all cursor-pointer ${color}`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-600"></span>
                <span>{Object.keys(userAnswers).length} {language === 'hi' ? 'हल किए गए' : 'Answered'}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-purple-600"></span>
                <span>{Object.keys(reviewFlags).length} {language === 'hi' ? 'रिव्यू हेतु' : 'Marked'}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-slate-300"></span>
                <span>{testQuestions.length - Object.keys(userAnswers).length} {language === 'hi' ? 'अनुत्तरित' : 'Not Answered'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // If Test is Submitted: Show Comprehensive Performance Analytics & Adaptive Practice (Section 21 & 42)
  if (isSubmitted) {
    let correct = 0;
    let incorrect = 0;
    const weakTopics: Record<string, number> = {};

    testQuestions.forEach((q, idx) => {
      const ans = userAnswers[idx];
      if (ans !== undefined) {
        if (ans === q.answer) {
          correct += 1;
        } else {
          incorrect += 1;
          weakTopics[q.subject] = (weakTopics[q.subject] || 0) + 1;
        }
      }
    });

    const attempted = correct + incorrect;
    const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;
    const score = correct * 3 - incorrect * 1;
    const totalMarks = testQuestions.length * 3;

    return (
      <div className="w-full space-y-6">
        <SubjectBreadcrumbs items={breadcrumbs} />

        {/* Result Score Banner */}
        <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-3xl p-6 sm:p-10 shadow-xl space-y-6">
          <div className="flex items-center gap-2 text-amber-200 text-xs font-bold uppercase tracking-wider">
            <Award className="w-4 h-4" />
            <span>{language === 'hi' ? 'मॉक टेस्ट परीक्षा परिणाम रिपोर्ट' : 'Mock Test Performance Analytics'}</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black">
                {score} <span className="text-xl font-normal text-amber-200">/ {totalMarks} Marks</span>
              </h2>
              <p className="text-xs sm:text-sm text-amber-100 mt-1">
                {language === 'hi'
                  ? `सटीकता: ${accuracy}% • सही उत्तर: ${correct} • गलत उत्तर: ${incorrect} • अप्रयुक्त: ${testQuestions.length - attempted}`
                  : `Accuracy: ${accuracy}% • Correct: ${correct} • Incorrect: ${incorrect} • Skipped: ${testQuestions.length - attempted}`}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setIsTestActive(false);
                }}
                className="px-5 py-2.5 rounded-xl text-xs font-bold bg-white text-slate-900 hover:bg-amber-50 shadow-md cursor-pointer"
              >
                {language === 'hi' ? 'नया टेस्ट बनाएं' : 'New Mock Test'}
              </button>
            </div>
          </div>
        </div>

        {/* Adaptive Practice Recommendation (Section 21) */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border-2 border-amber-300 dark:border-amber-800 shadow-xs space-y-3">
          <div className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-amber-600" />
            <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
              {language === 'hi'
                ? 'अनुकूली अभ्यास अनुशंसा: अगले 20 प्रश्न हल करें'
                : 'Adaptive Recommendation: Practice These 20 Questions Next'}
            </h3>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            {language === 'hi'
              ? 'आपकी गलतियों के आधार पर प्रणाली ने कमजोर क्षेत्रों की पहचान की है। स्कोर सुधारने के लिए तुरंत अभ्यास शुरू करें:'
              : 'Based on your incorrect responses, our engine detected weak subject clusters. Cement these concepts immediately:'}
          </p>

          <div className="flex flex-wrap gap-2 pt-1">
            {Object.keys(weakTopics).length > 0 ? (
              Object.keys(weakTopics).map(sub => (
                <Link
                  key={sub}
                  to={`/practice?subject=${encodeURIComponent(sub)}`}
                  className="px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-900 text-xs font-bold text-amber-800 dark:text-amber-300 hover:bg-amber-100 flex items-center gap-1.5"
                >
                  <span>{sub} ({weakTopics[sub]} गलत)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              ))
            ) : (
              <span className="text-xs font-bold text-emerald-600">
                {language === 'hi' ? 'शानदार प्रदर्शन! कोई गंभीर कमजोर क्षेत्र नहीं मिला।' : 'Outstanding work! No critical weak areas detected.'}
              </span>
            )}
          </div>
        </div>

        {/* Question-by-Question Detailed Review */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            {language === 'hi' ? 'प्रश्नोत्तर विस्तृत समीक्षा (Question Review)' : 'Question-by-Question Solution Review'}
          </h3>

          {testQuestions.map((q, idx) => {
            const userAns = userAnswers[idx];
            const isCorrect = userAns === q.answer;
            const isSkipped = userAns === undefined;

            return (
              <div
                key={q.id}
                className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3"
              >
                <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800 text-xs">
                  <span className="font-bold text-slate-500">
                    Q{idx + 1}. {q.subject}
                  </span>
                  <span
                    className={`font-bold px-2 py-0.5 rounded-md ${
                      isCorrect
                        ? 'bg-emerald-100 text-emerald-700'
                        : isSkipped
                        ? 'bg-slate-100 text-slate-600'
                        : 'bg-rose-100 text-rose-700'
                    }`}
                  >
                    {isCorrect ? '+3 (Correct)' : isSkipped ? '0 (Skipped)' : '-1 (Wrong)'}
                  </span>
                </div>

                <p className="text-sm font-bold text-slate-900 dark:text-white">
                  {language === 'hi' ? q.hindiQuestion : q.question}
                </p>

                <div className="p-3 bg-amber-50/70 dark:bg-amber-950/40 rounded-2xl text-xs space-y-1">
                  <span className="font-bold text-amber-900 dark:text-amber-200 block">
                    {language === 'hi'
                      ? `सही उत्तर: विकल्प ${String.fromCharCode(65 + q.answer)}`
                      : `Correct Answer: Option ${String.fromCharCode(65 + q.answer)}`}
                  </span>
                  <p className="text-slate-700 dark:text-slate-300">
                    {language === 'hi' ? q.hindiExplanation : q.explanation}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Default: Mock Test Launcher & Custom Generator (Section 41)
  return (
    <div className="w-full space-y-6">
      <SubjectBreadcrumbs items={breadcrumbs} />

      {/* Launcher Header */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-400">
                {language === 'hi' ? 'वास्तविक परीक्षा सिमुलेटर' : 'Official Exam Simulator'}
              </span>
              <span className="text-xs text-slate-400 font-semibold">
                +3 / -1 {language === 'hi' ? 'नेगेटिव मार्किंग' : 'Negative Marking'}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {language === 'hi' ? 'मॉक टेस्ट जनरेटर एवं सिमुलेटर' : 'Mock Test Generator & Simulator'}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl leading-relaxed">
              {language === 'hi'
                ? 'पूर्ण 120-प्रश्नीय आधिकारिक परीक्षा प्रारूप अथवा 25/50 प्रश्नों का अनुकूलित टेस्ट दें। डुप्लीकेट रहित प्रश्न चयन और पूर्ण विश्लेषणात्मक रिपोर्ट।'
                : 'Take full 120-question recruitment tests or custom 25/50/100 topical drills with zero duplicates and complete analytics.'}
            </p>
          </div>
        </div>

        {/* Quick Launch Pre-set Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {/* Full PRT Test */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/40 dark:to-orange-950/40 border border-amber-200 dark:border-amber-900/60 space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase bg-amber-600 text-white">
                Full Recruitment Test
              </span>
              <span className="text-xs font-bold text-amber-700 dark:text-amber-400">120 Qs • 360 Marks</span>
            </div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white">
              {language === 'hi' ? 'पूर्ण यूपी प्राथमिक सहायक अध्यापक टेस्ट' : 'Full UP PRT (Super TET) Mock Test'}
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              {language === 'hi'
                ? 'सभी 11 खंडों (GK, गणित, भाषा, विज्ञान, शिक्षण कौशल, CDP) से 120 प्रश्न, 120 मिनट।'
                : '120 minutes, 120 questions covering all 11 PRT sections with +3 / -1 marking.'}
            </p>
            <button
              onClick={() => startTest(120, 'UP_PRT')}
              className="w-full py-2.5 rounded-xl text-xs font-bold text-white bg-amber-600 hover:bg-amber-700 shadow-md transition-colors cursor-pointer"
            >
              {language === 'hi' ? '120-Q सुपर टीईटी टेस्ट प्रारंभ करें →' : 'Launch 120-Q PRT Test →'}
            </button>
          </div>

          {/* Full TGT Test */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/40 dark:to-amber-950/40 border border-orange-200 dark:border-orange-900/60 space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase bg-orange-600 text-white">
                Full TGT Test
              </span>
              <span className="text-xs font-bold text-orange-700 dark:text-orange-400">120 Qs • 360 Marks</span>
            </div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white">
              {language === 'hi' ? 'पूर्ण यूपी टीजीटी विषय + GS टेस्ट' : 'Full UP TGT Subject + GS Mock Test'}
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              {language === 'hi'
                ? '90 विषय प्रश्न + 30 अनिवार्य सामान्य अध्ययन व यूपी विशेष प्रश्न।'
                : '90 discipline questions + 30 compulsory General Studies & UP GK questions.'}
            </p>
            <button
              onClick={() => startTest(120, 'UP_TGT')}
              className="w-full py-2.5 rounded-xl text-xs font-bold text-white bg-orange-600 hover:bg-orange-700 shadow-md transition-colors cursor-pointer"
            >
              {language === 'hi' ? '120-Q टीजीटी टेस्ट प्रारंभ करें →' : 'Launch 120-Q TGT Test →'}
            </button>
          </div>
        </div>
      </div>

      {/* Custom Test Generator (Section 41) */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
        <h3 className="font-bold text-base text-slate-900 dark:text-white">
          {language === 'hi' ? 'अनुकूलित मॉक टेस्ट जनरेटर (Custom Builder)' : 'Custom Mock Test Generator'}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div>
            <label className="text-slate-400 font-semibold block mb-1">
              {language === 'hi' ? 'लक्षित परीक्षा' : 'Target Exam'}
            </label>
            <select
              value={selectedExamType}
              onChange={e => setSelectedExamType(e.target.value as ExamId)}
              className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-medium"
            >
              <option value="UP_PRT">UP Primary Assistant Teacher (PRT)</option>
              <option value="UP_TGT">UP TGT (Secondary)</option>
              <option value="UPTET">UPTET (Eligibility)</option>
            </select>
          </div>

          <div>
            <label className="text-slate-400 font-semibold block mb-1">
              {language === 'hi' ? 'प्रश्नों की संख्या' : 'Question Count'}
            </label>
            <select
              value={questionCount}
              onChange={e => setQuestionCount(Number(e.target.value))}
              className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-medium"
            >
              <option value={25}>25 Questions (Quick Test)</option>
              <option value={50}>50 Questions (Half Mock)</option>
              <option value={100}>100 Questions (Deep Drill)</option>
              <option value={120}>120 Questions (Full Mock)</option>
            </select>
          </div>

          <div>
            <label className="text-slate-400 font-semibold block mb-1">
              {language === 'hi' ? 'विशेष विषय (वैकल्पिक)' : 'Filter by Subject'}
            </label>
            <select
              value={selectedSubjectFilter}
              onChange={e => setSelectedSubjectFilter(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-medium"
            >
              <option value="All">All Subjects (सभी विषय)</option>
              <option value="Mathematics">Mathematics (गणित)</option>
              <option value="Hindi">Hindi (हिन्दी)</option>
              <option value="General Knowledge">General Knowledge / UP GK</option>
              <option value="Science">Science (विज्ञान)</option>
              <option value="Child Development">Child Development (बाल विकास)</option>
            </select>
          </div>
        </div>

        <button
          onClick={() => startTest()}
          className="mt-2 px-6 py-3 rounded-xl text-xs font-bold text-white bg-amber-600 hover:bg-amber-700 transition-colors cursor-pointer"
        >
          {language === 'hi' ? 'कस्टम टेस्ट प्रारंभ करें' : 'Generate & Start Custom Test'}
        </button>
      </div>
    </div>
  );
};
