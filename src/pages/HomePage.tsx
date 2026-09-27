import React from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  BookOpen,
  CheckCircle2,
  Award,
  Search,
  Sparkles,
  ArrowRight,
  TrendingUp,
  FileText,
  Calendar,
  Layers,
  ShieldCheck,
  Zap,
  ChevronRight,
  ExternalLink,
  Flame,
  Clock,
  Compass
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { EXAMS_DATA } from '../data/exams';
import { SUBJECTS_DATA } from '../data/subjects';
import { BOOKS_DATA } from '../data/books';
import { NOTIFICATIONS_DATA } from '../data/notifications';
import { CURRENT_AFFAIRS_DATA } from '../data/current-affairs';
import { ZERO_TO_MASTER_PATH } from '../data/learning-paths';
import rawQuestions from '../data/questions.json';
import rawPyqs from '../data/pyqs.json';

export const HomePage: React.FC = () => {
  const { language, activeExam, setActiveExam, setIsSearchOpen, progress } = useApp();

  const totalQuestionsCount = (rawQuestions as any[]).length + (rawPyqs as any[]).length;
  const exam = EXAMS_DATA[activeExam] || EXAMS_DATA['UP_PRT'];

  return (
    <div className="w-full space-y-12 pb-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-600 via-amber-500 to-orange-600 text-white p-6 sm:p-10 lg:p-14 shadow-2xl">
        <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none"></div>
        <div className="absolute right-10 top-10 opacity-10 hidden lg:block pointer-events-none">
          <GraduationCap className="w-96 h-96" />
        </div>

        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/20 backdrop-blur-md text-amber-100 text-xs font-semibold border border-white/15">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>
              {language === 'hi'
                ? 'नवीनतम UPESSC 2026 परीक्षा पैटर्न अनुरूप'
                : 'Aligned with Official UPESSC 2026 Examination Norms'}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            UP Teacher<span className="text-amber-200"> Master</span>
          </h1>

          <p className="text-base sm:text-lg text-amber-100/90 font-medium leading-relaxed max-w-2xl">
            {language === 'hi'
              ? 'उत्तर प्रदेश प्राथमिक सहायक अध्यापक (सुपर टीईटी) एवं यूपी टीजीटी की संपूर्ण एवं समर्पित तैयारी का आधुनिक डिजिटल मंच। 1,100+ प्रश्न, आधिकारिक पाठ्यक्रम, एनसीईआरटी लिंक्स और शून्य-से-शिखर अध्ययन मार्ग।'
              : 'The complete self-study preparation platform for UP Primary Assistant Teacher (Super TET) and UP TGT exams. Featuring 1,100+ original practice items, official syllabi, direct NCERT links, and an 8-level mastery pathway.'}
          </p>

          {/* Interactive Search Box */}
          <div
            onClick={() => setIsSearchOpen(true)}
            className="flex items-center gap-3 bg-white text-slate-700 px-4 py-3.5 rounded-2xl shadow-xl hover:shadow-2xl transition-all cursor-pointer border border-amber-200 group max-w-xl"
          >
            <Search className="w-5 h-5 text-amber-600 shrink-0 group-hover:scale-110 transition-transform" />
            <span className="text-sm text-slate-400 flex-1 truncate">
              {language === 'hi'
                ? 'आप क्या पढ़ना चाहते हैं? (उदा. बाल मनोविज्ञान, संधि, एनसीईआरटी, प्रतिशत...)'
                : 'What do you want to study? (e.g., CDP, Sandhi, NCERT books, Math...)'}
            </span>
            <kbd className="hidden sm:inline-block px-2 py-1 text-xs font-mono bg-slate-100 border border-slate-200 rounded-md text-slate-500">
              Ctrl + K
            </kbd>
          </div>

          {/* Core Feature Badges */}
          <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-medium text-amber-100">
            <span className="flex items-center gap-1.5 bg-white/15 px-3 py-1 rounded-full backdrop-blur-xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />
              {totalQuestionsCount}+ {language === 'hi' ? 'अभ्यास प्रश्न' : 'Practice Questions'}
            </span>
            <span className="flex items-center gap-1.5 bg-white/15 px-3 py-1 rounded-full backdrop-blur-xs">
              <BookOpen className="w-3.5 h-3.5 text-amber-200" />
              {language === 'hi' ? '26+ संपूर्ण विषय' : '26+ Subjects Covered'}
            </span>
            <span className="flex items-center gap-1.5 bg-white/15 px-3 py-1 rounded-full backdrop-blur-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-200" />
              {language === 'hi' ? 'एनसीईआरटी सीधी पहुँच' : 'Direct NCERT Links'}
            </span>
            <span className="flex items-center gap-1.5 bg-white/15 px-3 py-1 rounded-full backdrop-blur-xs">
              <Zap className="w-3.5 h-3.5 text-yellow-300" />
              {language === 'hi' ? '100% नि:शुल्क एवं ऑफलाइन सक्षम (PWA)' : '100% Free & PWA Ready'}
            </span>
          </div>
        </div>
      </section>

      {/* Target Exam Switcher Cards */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {language === 'hi' ? 'लक्षित शिक्षक भर्ती परीक्षा' : 'Select Target Examination'}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {language === 'hi'
                ? 'अपनी परीक्षा का चयन करें ताकि अध्ययन सामग्री और टेस्ट स्वतः अनुकूलित हो जाएं'
                : 'Select your exam to dynamically adapt syllabus, practice questions, and mock tests'}
            </p>
          </div>
          <Link
            to="/exams"
            className="text-xs font-semibold text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1 self-start sm:self-auto"
          >
            {language === 'hi' ? 'सभी परीक्षाओं की विस्तृत तुलना →' : 'Compare All Exams in Detail →'}
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1: UP PRT */}
          <div
            onClick={() => setActiveExam('UP_PRT')}
            className={`p-5 rounded-2xl border-2 transition-all cursor-pointer relative ${
              activeExam === 'UP_PRT'
                ? 'border-amber-500 bg-amber-50/40 dark:bg-amber-950/30 shadow-md ring-2 ring-amber-500/20'
                : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-amber-300'
            }`}
          >
            {activeExam === 'UP_PRT' && (
              <span className="absolute top-4 right-4 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-600 text-white">
                {language === 'hi' ? 'सक्रिय' : 'Active'}
              </span>
            )}
            <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-600 flex items-center justify-center font-bold mb-3">
              PRT
            </div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white">
              {language === 'hi' ? 'यूपी प्राथमिक सहायक अध्यापक' : 'UP Primary Assistant Teacher'}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
              {language === 'hi'
                ? 'परिषदीय प्राथमिक विद्यालयों (कक्षा 1-5) में भर्ती परीक्षा। 120 प्रश्न, 360 अंक, 1/3 नेगेटिव मार्किंग।'
                : 'Recruitment for Classes 1–5 in parishadiya basic schools. 120 Questions, 360 Marks, 1/3 negative marking.'}
            </p>
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-600 dark:text-slate-300 font-medium">120 Qs • 360 Marks</span>
              <span className="text-amber-600 font-semibold">{language === 'hi' ? 'पाठ्यक्रम देखें →' : 'View Syllabus →'}</span>
            </div>
          </div>

          {/* Card 2: UP TGT */}
          <div
            onClick={() => setActiveExam('UP_TGT')}
            className={`p-5 rounded-2xl border-2 transition-all cursor-pointer relative ${
              activeExam === 'UP_TGT'
                ? 'border-amber-500 bg-amber-50/40 dark:bg-amber-950/30 shadow-md ring-2 ring-amber-500/20'
                : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-amber-300'
            }`}
          >
            {activeExam === 'UP_TGT' && (
              <span className="absolute top-4 right-4 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-600 text-white">
                {language === 'hi' ? 'सक्रिय' : 'Active'}
              </span>
            )}
            <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-950 text-orange-600 flex items-center justify-center font-bold mb-3">
              TGT
            </div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white">
              {language === 'hi' ? 'यूपी टीजीटी (प्रशिक्षित स्नातक)' : 'UP TGT (Secondary Disciplines)'}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
              {language === 'hi'
                ? 'अशासकीय सहायता प्राप्त माध्यमिक विद्यालयों (कक्षा 9-10) हेतु। 90 विषय + 30 अनिवार्य सामान्य अध्ययन।'
                : 'Secondary teachers for Classes 9–10. 90 Subject + 30 Compulsory General Studies questions.'}
            </p>
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-600 dark:text-slate-300 font-medium">15+ Subjects • 360 Marks</span>
              <span className="text-orange-600 font-semibold">{language === 'hi' ? 'विषय चुनें →' : 'Select Subject →'}</span>
            </div>
          </div>

          {/* Card 3: UPTET */}
          <div
            onClick={() => setActiveExam('UPTET')}
            className={`p-5 rounded-2xl border-2 transition-all cursor-pointer relative ${
              activeExam === 'UPTET'
                ? 'border-amber-500 bg-amber-50/40 dark:bg-amber-950/30 shadow-md ring-2 ring-amber-500/20'
                : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-amber-300'
            }`}
          >
            {activeExam === 'UPTET' && (
              <span className="absolute top-4 right-4 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-600 text-white">
                {language === 'hi' ? 'सक्रिय' : 'Active'}
              </span>
            )}
            <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 flex items-center justify-center font-bold mb-3">
              TET
            </div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white">
              {language === 'hi' ? 'यूपीटीईटी (केवल पात्रता परीक्षा)' : 'UPTET (Eligibility Module)'}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
              {language === 'hi'
                ? 'अनिवार्य शिक्षक पात्रता परीक्षा (भर्ती नहीं)। 150 प्रश्न, 150 अंक, कोई नेगेटिव मार्किंग नहीं, आजीवन वैधता।'
                : 'Strictly a qualifying teacher eligibility test. 150 questions, no negative marking, lifetime validity.'}
            </p>
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-600 dark:text-slate-300 font-medium">150 Qs • No Negative</span>
              <span className="text-blue-600 font-semibold">{language === 'hi' ? 'पात्रता मानक →' : 'Eligibility Info →'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Action Hub: Daily Practice, Current Affairs, Mock Test, Books */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Practice Module */}
        <Link
          to="/practice"
          className="group p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-amber-500 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white">
              {language === 'hi' ? 'आज का अभ्यास (Practice)' : "Today's Practice Session"}
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              {language === 'hi'
                ? '1,100+ विषयवार प्रश्नों से त्वरित 10 या 25 प्रश्नों का अभ्यास सेट लगाएं।'
                : 'Launch a quick 10 or 25 question topical drill with instant explanations.'}
            </p>
          </div>
          <div className="mt-4 text-xs font-semibold text-amber-600 flex items-center gap-1 group-hover:gap-2 transition-all">
            <span>{language === 'hi' ? 'प्रारंभ करें' : 'Start Practice'}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </div>
        </Link>

        {/* Mock Test Module */}
        <Link
          to="/tests"
          className="group p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-amber-500 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-950 text-orange-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Award className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white">
              {language === 'hi' ? 'पूर्ण 120-Q मॉक टेस्ट' : 'Full 120-Q Mock Test'}
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              {language === 'hi'
                ? '120 मिनट, 360 अंक, 1/3 नेगेटिव मार्किंग, टाइमर एवं विस्तृत विश्लेषण।'
                : '120 minutes, 360 marks, 1/3 negative marking, timer & performance report.'}
            </p>
          </div>
          <div className="mt-4 text-xs font-semibold text-orange-600 flex items-center gap-1 group-hover:gap-2 transition-all">
            <span>{language === 'hi' ? 'टेस्ट शुरू करें' : 'Take Mock Test'}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </div>
        </Link>

        {/* NCERT Direct Books Module (Highlighted as requested) */}
        <Link
          to="/books"
          className="group p-5 bg-amber-50/60 dark:bg-amber-950/30 rounded-2xl border-2 border-amber-300 dark:border-amber-800 hover:border-amber-500 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-xs">
              <BookOpen className="w-5 h-5" />
            </div>
            <div className="flex items-center gap-1.5">
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                {language === 'hi' ? 'एनसीईआरटी पुस्तकें (सरल लिंक)' : 'NCERT Official Books'}
              </h4>
              <span className="text-[10px] font-bold bg-amber-600 text-white px-1.5 py-0.2 rounded-sm">
                Direct
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
              {language === 'hi'
                ? 'कक्षा 1 से 12 तक की आधिकारिक एनसीईआरटी व एससीईआरटी पुस्तकों के सीधे डाउनलोड लिंक।'
                : 'Direct official access links for Classes 1 to 12 NCERT and UP SCERT textbooks.'}
            </p>
          </div>
          <div className="mt-4 text-xs font-bold text-amber-700 dark:text-amber-400 flex items-center gap-1 group-hover:gap-2 transition-all">
            <span>{language === 'hi' ? 'पुस्तकें देखें' : 'Access Books'}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </div>
        </Link>

        {/* UP Special GK Module */}
        <Link
          to="/up-gk"
          className="group p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-amber-500 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Compass className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white">
              {language === 'hi' ? 'उत्तर प्रदेश विशेष GK' : 'Uttar Pradesh Special GK'}
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              {language === 'hi'
                ? '75 जिले, नदियां, 1857 क्रांति, लोकनृत्य, मेले, वन, वन्यजीव व सरकारी योजनाएं।'
                : '75 districts, rivers, 1857 revolt in UP, folk dances, fairs, sanctuaries & state schemes.'}
            </p>
          </div>
          <div className="mt-4 text-xs font-semibold text-emerald-600 flex items-center gap-1 group-hover:gap-2 transition-all">
            <span>{language === 'hi' ? 'यूपी ज्ञान पढ़ें' : 'Explore UP GK'}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </div>
        </Link>
      </section>

      {/* Zero-to-Master Learning Path Preview (Section 49) */}
      <section className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 dark:text-amber-400 mb-1">
              <Flame className="w-4 h-4 text-amber-500" />
              <span>{language === 'hi' ? 'वैज्ञानिक अध्ययन क्रम' : '8-Stage Scientific Pathway'}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {language === 'hi'
                ? 'शून्य से शिखर (Zero-to-Master) अध्ययन पथ'
                : 'Zero-to-Master Teacher Learning Pathway'}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              {language === 'hi'
                ? 'बिना भटकाव के स्तर 1 (नींव) से लेकर स्तर 8 (वैज्ञानिक अंतराल दोहराव) तक की सुनियोजित तैयारी'
                : 'Step-by-step mastery starting from Level 1 Foundation up to Level 8 Spaced Repetition'}
            </p>
          </div>
          <Link
            to="/learning-path"
            className="text-xs font-bold text-amber-600 hover:text-amber-700 dark:text-amber-400 flex items-center gap-1"
          >
            {language === 'hi' ? 'पूरा अध्ययन रोडमैप देखें →' : 'View Full Roadmap →'}
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
          {ZERO_TO_MASTER_PATH.map((lvl, i) => {
            const isCompleted = progress.completedTopics.length >= (i + 1) * 3;
            return (
              <div
                key={lvl.levelNumber}
                className="p-3 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 flex flex-col justify-between text-center group hover:border-amber-300 transition-all"
              >
                <div>
                  <span className="inline-block px-1.5 py-0.5 rounded-sm text-[9px] font-bold uppercase bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 mb-1.5">
                    L-{lvl.levelNumber}
                  </span>
                  <p className="text-xs font-bold text-slate-900 dark:text-white line-clamp-1">
                    {lvl.badge}
                  </p>
                  <p className="text-[10px] text-slate-400 line-clamp-2 mt-1">
                    {language === 'hi' ? lvl.hindiTargetOutcome : lvl.targetOutcome}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-center">
                  {isCompleted ? (
                    <span className="text-[10px] font-bold text-emerald-600 flex items-center gap-0.5">
                      <CheckCircle2 className="w-3 h-3" /> {language === 'hi' ? 'पूर्ण' : 'Done'}
                    </span>
                  ) : (
                    <span className="text-[10px] text-slate-400">
                      {language === 'hi' ? 'अनलॉक' : 'Active'}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Two Column Section: Latest Verified Notice + Current Affairs Highlights */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Latest Verified Notification Card (Sections 24 & 51) */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-xs font-bold text-amber-600 dark:text-amber-400">
                <Calendar className="w-4 h-4" />
                {language === 'hi' ? 'आधिकारिक भर्ती सूचना ट्रैकर' : 'Official Notification Tracker'}
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300">
                {NOTIFICATIONS_DATA[0].status}
              </span>
            </div>

            <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">
              {language === 'hi' ? NOTIFICATIONS_DATA[0].hindiTitle : NOTIFICATIONS_DATA[0].title}
            </h3>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {language === 'hi' ? NOTIFICATIONS_DATA[0].hindiNotes : NOTIFICATIONS_DATA[0].notes}
            </p>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 text-xs space-y-1.5 border border-slate-100 dark:border-slate-700/60">
              <div className="flex justify-between">
                <span className="text-slate-400">{language === 'hi' ? 'आयोग:' : 'Commission:'}</span>
                <span className="font-semibold text-slate-700 dark:text-slate-200">UPESSC Prayagraj</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">{language === 'hi' ? 'परीक्षा तिथि:' : 'Exam Date:'}</span>
                <span className="font-semibold text-amber-600 dark:text-amber-400">
                  {NOTIFICATIONS_DATA[0].examDate}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <a
              href={NOTIFICATIONS_DATA[0].officialPortalUrl}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-amber-600 flex items-center gap-1"
            >
              <span>{language === 'hi' ? 'आधिकारिक पोर्टल (upessc.up.gov.in)' : 'Official Portal'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <Link
              to="/notifications"
              className="text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline"
            >
              {language === 'hi' ? 'सभी 4+ सूचनाएं देखें →' : 'View All Notices →'}
            </Link>
          </div>
        </div>

        {/* Current Affairs Highlight */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400">
                <Clock className="w-4 h-4" />
                {language === 'hi' ? 'समसामयिकी विशेष (Current Affairs)' : 'Education Current Affairs'}
              </span>
              <span className="text-[11px] text-slate-400">{CURRENT_AFFAIRS_DATA[0].date}</span>
            </div>

            <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">
              {language === 'hi' ? CURRENT_AFFAIRS_DATA[0].hindiTitle : CURRENT_AFFAIRS_DATA[0].title}
            </h3>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {language === 'hi' ? CURRENT_AFFAIRS_DATA[0].hindiSummary : CURRENT_AFFAIRS_DATA[0].summary}
            </p>

            <div className="p-3 rounded-xl bg-blue-50/60 dark:bg-blue-950/30 text-xs border border-blue-100 dark:border-blue-900/40">
              <span className="font-semibold text-blue-800 dark:text-blue-300 block mb-1">
                {language === 'hi' ? 'परीक्षा उपयोगिता:' : 'Exam Significance:'}
              </span>
              <span className="text-slate-600 dark:text-slate-300">
                {language === 'hi'
                  ? CURRENT_AFFAIRS_DATA[0].hindiExamSignificance
                  : CURRENT_AFFAIRS_DATA[0].examSignificance}
              </span>
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <span className="text-[11px] text-slate-400">Source: {CURRENT_AFFAIRS_DATA[0].source}</span>
            <Link
              to="/current-affairs"
              className="text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline"
            >
              {language === 'hi' ? 'समसामयिकी प्रश्न हल करें →' : 'Read & Solve MCQs →'}
            </Link>
          </div>
        </div>
      </section>

      {/* User Progress Tracker Bar if studied */}
      {progress.totalTimeMinutes > 0 && (
        <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-6 rounded-3xl shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center font-bold text-lg">
              🔥 {progress.streakDays}
            </div>
            <div>
              <h4 className="font-bold text-sm text-white">
                {language === 'hi' ? 'आपकी अध्ययन प्रगति सक्रिय है!' : 'Your Study Progress is Active!'}
              </h4>
              <p className="text-xs text-slate-300 mt-0.5">
                {progress.completedTopics.length} {language === 'hi' ? 'विषय पूर्ण' : 'topics mastered'} •{' '}
                {Object.keys(progress.solvedQuestions).length} {language === 'hi' ? 'प्रश्न हल किए गए' : 'questions solved'} •{' '}
                {progress.totalTimeMinutes} {language === 'hi' ? 'मिनट अध्ययन' : 'minutes studied'}
              </p>
            </div>
          </div>
          <Link
            to="/progress"
            className="px-4 py-2 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-600 text-slate-900 transition-colors shrink-0"
          >
            {language === 'hi' ? 'प्रगति डैशबोर्ड खोलें →' : 'Open Progress Dashboard →'}
          </Link>
        </section>
      )}
    </div>
  );
};
