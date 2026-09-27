import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  BookOpen,
  Search,
  Moon,
  Sun,
  Globe,
  Menu,
  X,
  GraduationCap,
  Sparkles,
  Award,
  Layers,
  HelpCircle,
  FileCheck2,
  Bell,
  Compass
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ExamId } from '../types';

export const Navbar: React.FC = () => {
  const {
    language,
    toggleLanguage,
    theme,
    toggleTheme,
    activeExam,
    setActiveExam,
    setIsSearchOpen
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Home', hindiLabel: 'होम' },
    { to: '/exams', label: 'Exams', hindiLabel: 'परीक्षाएं' },
    { to: '/syllabus', label: 'Syllabus', hindiLabel: 'पाठ्यक्रम' },
    { to: '/subjects', label: 'Subjects', hindiLabel: 'विषय सूची' },
    { to: '/books', label: 'NCERT & Books', hindiLabel: 'एनसीईआरटी व पुस्तकें', highlight: true },
    { to: '/practice', label: 'Practice', hindiLabel: 'अभ्यास' },
    { to: '/pyqs', label: 'PYQs', hindiLabel: 'विगत वर्ष (PYQ)' },
    { to: '/tests', label: 'Mock Tests', hindiLabel: 'मॉक टेस्ट' },
    { to: '/current-affairs', label: 'Current Affairs', hindiLabel: 'समसामयिकी' },
    { to: '/up-gk', label: 'UP GK', hindiLabel: 'यूपी विशेष GK' },
    { to: '/notifications', label: 'Notices', hindiLabel: 'विज्ञप्ति/सूचनाएं' },
    { to: '/progress', label: 'Dashboard', hindiLabel: 'प्रगति डैशबोर्ड' },
    { to: '/tips', label: 'Tips & Tricks', hindiLabel: 'ट्रिक्स' }
  ];

  const handleExamChange = (exam: ExamId) => {
    setActiveExam(exam);
  };

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      {/* Top Banner with Exam Quick Switcher & Live Alerts */}
      <div className="bg-amber-600 dark:bg-amber-700 text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto py-0.5 no-scrollbar">
            <span className="font-semibold text-amber-100 hidden sm:inline">
              {language === 'hi' ? 'लक्षित परीक्षा चयन:' : 'Select Target Exam:'}
            </span>
            {(['UP_PRT', 'UP_TGT', 'UPTET'] as ExamId[]).map(exam => {
              const labels: Record<ExamId, { en: string; hi: string }> = {
                UP_PRT: { en: 'UP PRT (Super TET)', hi: 'यूपी प्राथमिक (सुपर टीईटी)' },
                UP_TGT: { en: 'UP TGT (Classes 9–10)', hi: 'यूपी टीजीटी (माध्यमिक)' },
                UPTET: { en: 'UPTET (Eligibility Only)', hi: 'यूपीटीईटी (पात्रता)' }
              };
              const active = activeExam === exam;
              return (
                <button
                  key={exam}
                  onClick={() => handleExamChange(exam)}
                  className={`px-2.5 py-0.5 rounded-full text-[11px] font-medium transition-all ${
                    active
                      ? 'bg-white text-amber-700 font-bold shadow-xs'
                      : 'bg-amber-700/60 hover:bg-amber-800 text-amber-50'
                  }`}
                >
                  {language === 'hi' ? labels[exam].hi : labels[exam].en}
                </button>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-3 shrink-0 text-[11px] font-medium text-amber-100">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              {language === 'hi' ? 'UPESSC आधिकारिक 2026 मानक अनुरूप' : 'UPESSC 2026 Aligned'}
            </span>
            <span>•</span>
            <Link to="/resources" className="hover:text-white underline">
              {language === 'hi' ? 'आधिकारिक स्रोत हब' : 'Official Resource Hub'}
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 to-amber-400 flex items-center justify-center text-white shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 dark:text-white">
                  UP Teacher<span className="text-amber-600 dark:text-amber-500"> Master</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-md bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800 hidden sm:inline">
                  2026
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium hidden sm:block">
                {language === 'hi'
                  ? 'यूपी प्राथमिक (PRT) + यूपी टीजीटी संपूर्ण अध्ययन मंच'
                  : 'UP PRT + UP TGT Complete Preparation Platform'}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map(link => {
              const active = isActive(link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    active
                      ? 'bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 font-bold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                  } ${link.highlight ? 'border border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20' : ''}`}
                >
                  {language === 'hi' ? link.hindiLabel : link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action Tools: Search, Language, Theme, Mobile toggle */}
          <div className="flex items-center gap-2">
            {/* Search Trigger */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
              title="Global Search (Ctrl + K)"
            >
              <Search className="w-4 h-4 text-amber-500" />
              <span className="hidden sm:inline">
                {language === 'hi' ? 'खोजें...' : 'Search...'}
              </span>
              <kbd className="hidden md:inline px-1.5 py-0.5 text-[10px] font-mono bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-sm text-slate-400">
                ⌘K
              </kbd>
            </button>

            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-bold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-amber-50 dark:hover:bg-amber-950/40 hover:text-amber-600 rounded-lg transition-colors"
              title="Toggle Hindi / English"
            >
              <Globe className="w-4 h-4 text-amber-600" />
              <span>{language === 'hi' ? 'English' : 'हिन्दी'}</span>
            </button>

            {/* Dark / Light Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              title="Toggle Theme"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-600" />
              )}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200 max-h-[80vh] overflow-y-auto">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${
                  isActive(link.to)
                    ? 'bg-amber-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-amber-50 dark:hover:bg-amber-950/40'
                }`}
              >
                {language === 'hi' ? link.hindiLabel : link.label}
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
            <span>UP Teacher Master v2026</span>
            <Link
              to="/coverage"
              onClick={() => setMobileMenuOpen(false)}
              className="text-amber-600 dark:text-amber-400 font-semibold"
            >
              {language === 'hi' ? 'पाठ्यक्रम कवरेज रिपोर्ट →' : 'Syllabus Coverage Report →'}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
