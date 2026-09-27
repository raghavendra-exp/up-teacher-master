import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BarChart3,
  CheckCircle2,
  Bookmark,
  AlertOctagon,
  Clock,
  Flame,
  Calendar,
  RotateCcw,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Award,
  Layers,
  Trash2
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { SubjectBreadcrumbs } from '../components/SubjectBreadcrumbs';
import rawQuestions from '../data/questions.json';

export const ProgressDashboardPage: React.FC = () => {
  const { language, progress, clearProgress } = useApp();
  const allQuestions: any[] = rawQuestions as any[];

  const [activeTab, setActiveTab] = useState<'overview' | 'mistakes' | 'bookmarks' | 'revision'>('overview');

  // Metrics
  const totalSolved = Object.keys(progress.solvedQuestions).length;
  let correctCount = 0;
  Object.values(progress.solvedQuestions).forEach(s => {
    if (s.isCorrect) correctCount += 1;
  });
  const overallAccuracy = totalSolved > 0 ? Math.round((correctCount / totalSolved) * 100) : 0;

  // Bookmarked questions
  const bookmarkedItems = allQuestions.filter(q => progress.bookmarkedQuestions.includes(q.id));

  // Mistake Notebook questions
  const mistakeItems = allQuestions.filter(q => progress.mistakeQuestions.includes(q.id));

  const breadcrumbs = [
    { label: 'Home', hindiLabel: 'होम', href: '/' },
    { label: 'Study Progress & Revision', hindiLabel: 'अध्ययन प्रगति एवं पुनरावलोकन', active: true }
  ];

  return (
    <div className="w-full space-y-6">
      <SubjectBreadcrumbs items={breadcrumbs} />

      {/* Header Banner */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-400 flex items-center gap-1">
                <Flame className="w-3.5 h-3.5" />
                <span>{progress.streakDays} Day Study Streak</span>
              </span>
              <span className="text-xs text-slate-400">100% Client-Side LocalStorage</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {language === 'hi'
                ? 'व्यक्तिगत अध्ययन प्रगति एवं वैज्ञानिक पुनरावलोकन डैशबोर्ड'
                : 'Personal Study Dashboard & Spaced Repetition'}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl leading-relaxed">
              {language === 'hi'
                ? 'पूर्ण किए गए विषय, गलतियों की डायरी (Mistake Notebook), बुकमार्क किए गए प्रश्न और 1, 3, 7, 15, 30 दिन का अंतराल दोहराव।'
                : 'Track mastered chapters, mistake notebook, bookmarked items, mock test score history, and active spaced repetition review schedules.'}
            </p>
          </div>

          <button
            onClick={clearProgress}
            className="p-2.5 rounded-xl border border-rose-200 dark:border-rose-900/60 text-xs font-semibold text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 flex items-center gap-1.5 transition-colors cursor-pointer shrink-0 self-start md:self-center"
            title="Reset Local Progress"
          >
            <Trash2 className="w-4 h-4" />
            <span>{language === 'hi' ? 'प्रगति रीसेट करें' : 'Reset Progress'}</span>
          </button>
        </div>

        {/* Metric Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
          <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl">
            <span className="text-[10px] text-slate-400 uppercase font-semibold block">
              {language === 'hi' ? 'पूर्ण विषय' : 'Topics Mastered'}
            </span>
            <span className="text-2xl font-black text-slate-900 dark:text-white mt-1 block">
              {progress.completedTopics.length}
            </span>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl">
            <span className="text-[10px] text-slate-400 uppercase font-semibold block">
              {language === 'hi' ? 'हल किए प्रश्न' : 'Questions Solved'}
            </span>
            <span className="text-2xl font-black text-amber-600 dark:text-amber-400 mt-1 block">
              {totalSolved}
            </span>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl">
            <span className="text-[10px] text-slate-400 uppercase font-semibold block">
              {language === 'hi' ? 'समग्र सटीकता' : 'Overall Accuracy'}
            </span>
            <span className="text-2xl font-black text-emerald-600 mt-1 block">
              {overallAccuracy}%
            </span>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl">
            <span className="text-[10px] text-slate-400 uppercase font-semibold block">
              {language === 'hi' ? 'अध्ययन समय' : 'Study Time'}
            </span>
            <span className="text-2xl font-black text-slate-900 dark:text-white mt-1 block">
              {progress.totalTimeMinutes}m
            </span>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3 py-1.5 rounded-xl transition-colors cursor-pointer ${
              activeTab === 'overview'
                ? 'bg-amber-600 text-white'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
            }`}
          >
            {language === 'hi' ? 'सिंहावलोकन एवं टेस्ट रिकॉर्ड' : 'Test History'}
          </button>

          <button
            onClick={() => setActiveTab('mistakes')}
            className={`px-3 py-1.5 rounded-xl transition-colors cursor-pointer flex items-center gap-1 ${
              activeTab === 'mistakes'
                ? 'bg-amber-600 text-white'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
            }`}
          >
            <span>{language === 'hi' ? 'गलतियों की डायरी (Mistakes)' : 'Mistake Notebook'}</span>
            <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-rose-500 text-white font-bold">
              {progress.mistakeQuestions.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('bookmarks')}
            className={`px-3 py-1.5 rounded-xl transition-colors cursor-pointer flex items-center gap-1 ${
              activeTab === 'bookmarks'
                ? 'bg-amber-600 text-white'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
            }`}
          >
            <span>{language === 'hi' ? 'बुकमार्क्स' : 'Bookmarks'}</span>
            <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-amber-500 text-white font-bold">
              {progress.bookmarkedQuestions.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('revision')}
            className={`px-3 py-1.5 rounded-xl transition-colors cursor-pointer ${
              activeTab === 'revision'
                ? 'bg-amber-600 text-white'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
            }`}
          >
            {language === 'hi' ? 'अंतराल पुनरावलोकन (1-3-7-15-30)' : 'Spaced Repetition'}
          </button>
        </div>
      </div>

      {/* Tab Content 1: Overview & Mock Test Results History */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
            <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-500" />
              <span>{language === 'hi' ? 'विगत मॉक टेस्ट स्कोर इतिहास' : 'Mock Test Score History'}</span>
            </h3>

            {progress.mockTestResults.length > 0 ? (
              <div className="divide-y divide-slate-100 dark:divide-slate-800">
                {progress.mockTestResults.map((t, idx) => (
                  <div key={idx} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-900 dark:text-white">{t.testTitle}</span>
                        <span className="text-[10px] font-mono text-slate-400">{t.date}</span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        {t.correctCount} Correct • {t.incorrectCount} Incorrect • {t.accuracy}% Accuracy
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-base font-black text-amber-600">
                        {t.score} / {t.totalMarks}
                      </span>
                      <span className="text-[11px] text-slate-400">
                        {Math.ceil(t.timeSpentSeconds / 60)} mins
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-8 text-center text-slate-400 text-xs">
                {language === 'hi'
                  ? 'अभी तक कोई मॉक टेस्ट नहीं दिया गया है।'
                  : 'No mock tests completed yet.'}{' '}
                <Link to="/tests" className="text-amber-600 font-bold hover:underline">
                  {language === 'hi' ? 'पहला टेस्ट शुरू करें →' : 'Launch your first test →'}
                </Link>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Tab Content 2: Mistake Notebook (Section 29) */}
      {activeTab === 'mistakes' && (
        <div className="space-y-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs flex items-center justify-between">
            <div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                <AlertOctagon className="w-5 h-5 text-rose-500" />
                <span>{language === 'hi' ? 'गलतियों की डायरी (Mistake Notebook)' : 'Mistake Notebook'}</span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {language === 'hi'
                  ? 'अभ्यास या टेस्ट में गलत हुए प्रश्नों का संकलन। परीक्षा से पहले इन पर पुनः अभ्यास करें।'
                  : 'Questions you answered incorrectly during practice drills or mock tests.'}
              </p>
            </div>
            {mistakeItems.length > 0 && (
              <Link
                to="/practice?mode=mistakes"
                className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 transition-colors"
              >
                {language === 'hi' ? 'सभी गलत प्रश्न हल करें →' : 'Re-practice All Mistakes →'}
              </Link>
            )}
          </div>

          {mistakeItems.length > 0 ? (
            mistakeItems.map(q => (
              <div
                key={q.id}
                className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3"
              >
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-bold text-amber-600">{q.subject} • {q.chapter}</span>
                  <span className="font-mono text-[10px]">{q.id}</span>
                </div>
                <p className="font-bold text-sm text-slate-900 dark:text-white">
                  {language === 'hi' ? q.hindiQuestion : q.question}
                </p>
                <div className="p-3 bg-amber-50/70 dark:bg-amber-950/40 rounded-xl text-xs space-y-1">
                  <span className="font-bold text-amber-900 dark:text-amber-200">
                    {language === 'hi'
                      ? `सही उत्तर: विकल्प ${String.fromCharCode(65 + q.answer)}`
                      : `Correct Answer: Option ${String.fromCharCode(65 + q.answer)}`}
                  </span>
                  <p className="text-slate-700 dark:text-slate-300">
                    {language === 'hi' ? q.hindiExplanation : q.explanation}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="p-12 text-center text-slate-400 bg-white dark:bg-slate-900 rounded-3xl">
              <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto mb-2 opacity-50" />
              <p className="text-sm font-semibold">
                {language === 'hi' ? 'गलतियों की डायरी खाली है! बहुत बढ़िया!' : 'Mistake notebook is clean! Excellent work!'}
              </p>
            </div>
          )}
        </div>
      )}

      {/* Tab Content 3: Bookmarks */}
      {activeTab === 'bookmarks' && (
        <div className="space-y-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs">
            <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <Bookmark className="w-5 h-5 text-amber-500" />
              <span>{language === 'hi' ? 'बुकमार्क किए गए प्रश्न' : 'Bookmarked Questions'}</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              {language === 'hi'
                ? 'त्वरित रिवीजन हेतु आपके द्वारा सहेजे गए महत्वपूर्ण प्रश्न।'
                : 'Questions you marked for quick revision.'}
            </p>
          </div>

          {bookmarkedItems.length > 0 ? (
            bookmarkedItems.map(q => (
              <div
                key={q.id}
                className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3"
              >
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-bold text-amber-600">{q.subject} • {q.chapter}</span>
                  <span className="font-mono text-[10px]">{q.id}</span>
                </div>
                <p className="font-bold text-sm text-slate-900 dark:text-white">
                  {language === 'hi' ? q.hindiQuestion : q.question}
                </p>
                <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl text-xs space-y-1">
                  <span className="font-bold text-slate-700 dark:text-slate-200">
                    {language === 'hi'
                      ? `सही उत्तर: विकल्प ${String.fromCharCode(65 + q.answer)}`
                      : `Answer: Option ${String.fromCharCode(65 + q.answer)}`}
                  </span>
                  <p className="text-slate-600 dark:text-slate-400">
                    {language === 'hi' ? q.hindiExplanation : q.explanation}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="p-12 text-center text-slate-400 bg-white dark:bg-slate-900 rounded-3xl">
              <Bookmark className="w-10 h-10 mx-auto mb-2 opacity-30" />
              <p className="text-sm font-semibold">
                {language === 'hi' ? 'कोई बुकमार्क प्रश्न नहीं मिला।' : 'No bookmarked questions yet.'}
              </p>
            </div>
          )}
        </div>
      )}

      {/* Tab Content 4: Spaced Repetition Revision (Section 40) */}
      {activeTab === 'revision' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
            <div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-500" />
                <span>{language === 'hi' ? 'वैज्ञानिक अंतराल दोहराव चक्र (1-3-7-15-30 दिन)' : 'Scientific Spaced Repetition Intervals'}</span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {language === 'hi'
                  ? 'एबिंगहास की विस्मृति वक्र (Forgetting Curve) के आधार पर प्रत्येक विषय को 1, 3, 7, 15 और 30 दिन के अंतराल पर दोहराएं।'
                : 'Based on the Ebbinghaus forgetting curve: review concepts at 1-day, 3-day, 7-day, 15-day, and 30-day intervals.'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            {[
              { day: '1 Day', label: 'First Recall (24h)', hi: 'प्रथम दोहराव (24 घंटे)' },
              { day: '3 Days', label: 'Reinforce', hi: 'दृढ़ीकरण (3 दिन)' },
              { day: '7 Days', label: 'Weekly Lock', hi: 'साप्ताहिक रिवीजन (7 दिन)' },
              { day: '15 Days', label: 'Bi-Weekly Polish', hi: 'पाक्षिक परिमार्जन (15 दिन)' },
              { day: '30 Days', label: 'Permanent Memory', hi: 'स्थाई स्मृति (30 दिन)' }
            ].map((slot, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-center space-y-2"
              >
                <span className="w-8 h-8 rounded-full bg-amber-600 text-white font-bold text-xs flex items-center justify-center mx-auto">
                  {idx + 1}
                </span>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white">{slot.day}</h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  {language === 'hi' ? slot.hi : slot.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
