import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, ShieldCheck, ExternalLink, Heart, BookOpen, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Footer: React.FC = () => {
  const { language } = useApp();

  return (
    <footer className="w-full bg-slate-900 text-slate-300 border-t border-slate-800 pt-12 pb-24 md:pb-12 mt-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-600 to-amber-400 flex items-center justify-center text-white shadow-md">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                UP Teacher<span className="text-amber-500"> Master</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-4 max-w-sm">
              {language === 'hi'
                ? 'उत्तर प्रदेश प्राथमिक सहायक अध्यापक (सुपर टीईटी) एवं यूपी टीजीटी परीक्षा तैयारी हेतु एक संपूर्ण, पारदर्शी, एवं नि:शुल्क डिजिटल शिक्षण मंच।'
                : 'A comprehensive, transparent, and complete digital self-study ecosystem for UP Primary Assistant Teacher (Super TET) and UP TGT recruitments.'}
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 bg-slate-800/80 px-3 py-2 rounded-lg border border-slate-700/60 w-fit">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                {language === 'hi'
                  ? 'कॉपीराइट सुरक्षित एवं आधिकारिक स्रोतों (UPESSC, NCERT, SCERT) से सत्यापित'
                  : 'Copyright Safe & Grounded in Official Sources'}
              </span>
            </div>
          </div>

          {/* Quick Examination Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3 tracking-wide uppercase text-[11px]">
              {language === 'hi' ? 'शिक्षक परीक्षाएं' : 'Target Examinations'}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link to="/exams/UP_PRT" className="hover:text-amber-400 transition-colors">
                  {language === 'hi' ? 'यूपी प्राथमिक सहायक अध्यापक (PRT)' : 'UP Primary Assistant Teacher'}
                </Link>
              </li>
              <li>
                <Link to="/exams/UP_TGT" className="hover:text-amber-400 transition-colors">
                  {language === 'hi' ? 'यूपी टीजीटी (प्रशिक्षित स्नातक)' : 'UP TGT (Secondary Disciplines)'}
                </Link>
              </li>
              <li>
                <Link to="/exams/UPTET" className="hover:text-amber-400 transition-colors">
                  {language === 'hi' ? 'यूपीटीईटी (पात्रता परीक्षा - पृथक)' : 'UPTET (Eligibility Module)'}
                </Link>
              </li>
              <li>
                <Link to="/syllabus" className="hover:text-amber-400 transition-colors">
                  {language === 'hi' ? 'आधिकारिक पाठ्यक्रम ट्रैकर' : 'Official Syllabus Tracker'}
                </Link>
              </li>
              <li>
                <Link to="/coverage" className="hover:text-amber-400 transition-colors">
                  {language === 'hi' ? 'पाठ्यक्रम कवरेज रिपोर्ट' : 'Syllabus Coverage Dashboard'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Study Engines */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3 tracking-wide uppercase text-[11px]">
              {language === 'hi' ? 'अध्ययन इंजन' : 'Study Modules'}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link to="/books" className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-amber-300 font-medium">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{language === 'hi' ? 'एनसीईआरटी पुस्तकें (सरल लिंक)' : 'NCERT Direct Links'}</span>
                </Link>
              </li>
              <li>
                <Link to="/practice" className="hover:text-amber-400 transition-colors">
                  {language === 'hi' ? '1,000+ वस्तुनिष्ठ प्रश्न अभ्यास' : '1,000+ Question Practice Bank'}
                </Link>
              </li>
              <li>
                <Link to="/pyqs" className="hover:text-amber-400 transition-colors">
                  {language === 'hi' ? 'विगत वर्ष प्रश्न (PYQ Archive)' : 'Previous Year Papers (PYQs)'}
                </Link>
              </li>
              <li>
                <Link to="/tests" className="hover:text-amber-400 transition-colors">
                  {language === 'hi' ? '120-प्रश्नीय पूर्ण मॉक टेस्ट' : 'Full 120-Q Mock Tests'}
                </Link>
              </li>
              <li>
                <Link to="/up-gk" className="hover:text-amber-400 transition-colors">
                  {language === 'hi' ? 'उत्तर प्रदेश विशेष सामान्य ज्ञान' : 'Uttar Pradesh Special GK'}
                </Link>
              </li>
              <li>
                <Link to="/tips" className="hover:text-amber-400 transition-colors">
                  {language === 'hi' ? 'शॉर्टकट एवं एलिमिनेशन ट्रिक्स' : 'Exam Tips & Tricks'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Official Verification Portals */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3 tracking-wide uppercase text-[11px]">
              {language === 'hi' ? 'आधिकारिक पोर्टल लिंक' : 'Official Portals'}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a
                  href="https://upessc.up.gov.in"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-400 flex items-center gap-1 transition-colors"
                >
                  <span>UPESSC Prayagraj</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://ncert.nic.in/textbook.php"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-400 flex items-center gap-1 transition-colors"
                >
                  <span>NCERT Textbooks</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://epathshala.nic.in"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-400 flex items-center gap-1 transition-colors"
                >
                  <span>ePathshala Portal</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="http://scertup.co.in"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-400 flex items-center gap-1 transition-colors"
                >
                  <span>SCERT Uttar Pradesh</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://basiceducation.up.gov.in"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-400 flex items-center gap-1 transition-colors"
                >
                  <span>Basic Education UP</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <Link to="/resources" className="text-amber-400 font-medium hover:underline">
                  {language === 'hi' ? 'सभी 7+ आधिकारिक स्रोत देखें →' : 'View All 7+ Official Hubs →'}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer and copyright policy */}
        <div className="pt-8 border-t border-slate-800 text-xs text-slate-400 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-center md:text-left leading-relaxed max-w-3xl">
            <span className="font-semibold text-slate-300">Disclaimer:</span> This platform provides original educational synthesis, original practice items, and links directly to official government repositories. Commercial books are referenced under fair educational citation guidelines. Where official government notifications are not yet gazetted, dates are strictly marked as <em>"Official information not yet verified"</em>.
          </p>
          <div className="shrink-0 text-slate-400 flex items-center gap-1">
            <span>UP Teacher Master © 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
