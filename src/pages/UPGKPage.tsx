import React, { useState } from 'react';
import {
  Compass,
  FileText,
  HelpCircle,
  Sparkles,
  Layers,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  RotateCw,
  Search,
  BookOpen
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { UP_GK_DATA } from '../data/up-gk';
import { SubjectBreadcrumbs } from '../components/SubjectBreadcrumbs';

export const UPGKPage: React.FC = () => {
  const { language } = useApp();

  const [activeTab, setActiveTab] = useState<'topics' | 'oneliners' | 'flashcards'>('topics');
  const [selectedTopicId, setSelectedTopicId] = useState<string>(UP_GK_DATA[0].id);
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

  const activeTopic = UP_GK_DATA.find(t => t.id === selectedTopicId) || UP_GK_DATA[0];

  const toggleFlip = (index: number) => {
    setFlippedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const breadcrumbs = [
    { label: 'Home', hindiLabel: 'होम', href: '/' },
    { label: 'Uttar Pradesh Special GK', hindiLabel: 'उत्तर प्रदेश विशेष सामान्य ज्ञान', active: true }
  ];

  return (
    <div className="w-full space-y-6">
      <SubjectBreadcrumbs items={breadcrumbs} />

      {/* Header Banner */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                {language === 'hi' ? 'उत्तर प्रदेश विशेष ज्ञानकोश' : 'UP Special Encyclopedia'}
              </span>
              <span className="text-xs text-slate-400 font-semibold">
                {language === 'hi' ? '75 जिले • 18 मंडल • संपूर्ण तथ्य' : '75 Districts • 18 Divisions'}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {language === 'hi'
                ? 'उत्तर प्रदेश विशेष सामान्य ज्ञान (UP Special GK)'
                : 'Uttar Pradesh Special General Knowledge'}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl leading-relaxed">
              {language === 'hi'
                ? 'इतिहास, नदियां, वन्यजीव, 1857 क्रांति, कला, लोकनृत्य, मेले, घराने, अर्थव्यवस्था एवं प्रमुख राजकीय प्रतीक।'
                : 'Exhaustive state compendium for UP teacher recruitment exams featuring one-liners, flashcards, and conceptual overviews.'}
            </p>
          </div>
        </div>

        {/* Mode Switcher Tabs (Section 26: One-liner mode, Flashcard mode, Topic mode) */}
        <div className="flex items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
          <button
            onClick={() => setActiveTab('topics')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'topics'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
            }`}
          >
            {language === 'hi' ? 'अध्यायवार विषय ज्ञान (Detailed Topics)' : 'Detailed Topics'}
          </button>
          <button
            onClick={() => setActiveTab('oneliners')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'oneliners'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
            }`}
          >
            {language === 'hi' ? 'एक-पंक्ति तथ्य (One-Liners)' : 'High-Yield One-Liners'}
          </button>
          <button
            onClick={() => setActiveTab('flashcards')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'flashcards'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
            }`}
          >
            {language === 'hi' ? 'स्मृति फ्लैशकार्ड्स (Flashcards)' : 'Interactive Flashcards'}
          </button>
        </div>
      </div>

      {/* Tab 1: Detailed Topics View */}
      {activeTab === 'topics' && (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Topics Sidebar */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2">
              {language === 'hi' ? 'अध्याय सूची' : 'Topic Categories'}
            </h3>
            {UP_GK_DATA.map(t => {
              const isSelected = selectedTopicId === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setSelectedTopicId(t.id)}
                  className={`w-full text-left p-3.5 rounded-2xl text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-amber-600 text-white shadow-md shadow-amber-600/20'
                      : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-amber-400'
                  }`}
                >
                  <span className="truncate">{language === 'hi' ? t.hindiTitle : t.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0 opacity-80" />
                </button>
              );
            })}
          </div>

          {/* Active Topic Content Panel */}
          <div className="lg:col-span-3 bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xs space-y-6">
            <div className="space-y-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                {activeTopic.category}
              </span>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white">
                {language === 'hi' ? activeTopic.hindiTitle : activeTopic.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {language === 'hi' ? activeTopic.hindiContent : activeTopic.content}
              </p>
            </div>

            {/* Key Bullet Facts */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                {language === 'hi' ? 'परीक्षा उपयोगी मुख्य बिंदु (Core Key Points):' : 'Key Examination Points:'}
              </h4>
              <ul className="space-y-2">
                {(language === 'hi' ? activeTopic.hindiKeyPoints : activeTopic.keyPoints).map((pt, idx) => (
                  <li
                    key={idx}
                    className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-start gap-2.5 text-xs text-slate-800 dark:text-slate-200 leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: High-Yield One-Liners (Section 26) */}
      {activeTab === 'oneliners' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
            <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>{language === 'hi' ? 'त्वरित पुनरावलोकन: एक-पंक्ति तथ्य' : 'High-Yield Static One-Liners'}</span>
            </h3>
            <span className="text-xs text-slate-400">Direct Fact Recall</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {UP_GK_DATA.flatMap(t => t.oneLiners).map((line, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 flex items-start gap-3"
              >
                <span className="w-6 h-6 rounded-lg bg-amber-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <p className="text-xs font-semibold text-slate-800 dark:text-slate-100 leading-relaxed">
                  {language === 'hi' ? line.hi : line.en}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Interactive Memory Flashcards (Section 26) */}
      {activeTab === 'flashcards' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
            <div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">
                {language === 'hi' ? 'उत्तर प्रदेश स्मृति फ्लैशकार्ड्स (Click to Flip)' : 'UP Interactive Flashcards (Click to Flip)'}
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                {language === 'hi' ? 'कार्ड पर क्लिक करके उत्तर देखें' : 'Click on any card to reveal the answer.'}
              </p>
            </div>
            <RotateCw className="w-4 h-4 text-slate-400" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {UP_GK_DATA.flatMap(t => t.flashcards).map((card, idx) => {
              const isFlipped = !!flippedCards[idx];

              return (
                <div
                  key={idx}
                  onClick={() => toggleFlip(idx)}
                  className={`min-h-[160px] p-5 rounded-3xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isFlipped
                      ? 'bg-amber-600 text-white border-amber-600 shadow-md'
                      : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-amber-400'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] uppercase font-bold tracking-wider opacity-70">
                    <span>Card #{idx + 1}</span>
                    <span>{isFlipped ? 'Answer' : 'Question'}</span>
                  </div>

                  <p className="text-sm font-bold my-3 leading-relaxed">
                    {isFlipped
                      ? language === 'hi'
                        ? card.hindiBack
                        : card.back
                      : language === 'hi'
                      ? card.hindiFront
                      : card.front}
                  </p>

                  <div className="text-[11px] font-semibold opacity-80 flex items-center justify-between pt-2 border-t border-white/20">
                    <span>{isFlipped ? (language === 'hi' ? 'प्रश्न पर लौटें' : 'Back to question') : (language === 'hi' ? 'उत्तर देखें' : 'Tap to reveal')}</span>
                    <RotateCw className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
