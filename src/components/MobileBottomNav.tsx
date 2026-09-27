import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, CheckCircle, Award, BarChart3, Search } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const MobileBottomNav: React.FC = () => {
  const { language, setIsSearchOpen } = useApp();
  const location = useLocation();

  const items = [
    { to: '/', label: 'Home', hindiLabel: 'होम', icon: Home },
    { to: '/subjects', label: 'Subjects', hindiLabel: 'विषय', icon: BookOpen },
    { to: '/practice', label: 'Practice', hindiLabel: 'अभ्यास', icon: CheckCircle },
    { to: '/tests', label: 'Tests', hindiLabel: 'मॉक टेस्ट', icon: Award },
    { to: '/progress', label: 'Progress', hindiLabel: 'प्रगति', icon: BarChart3 }
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Floating Quick Search Button for Mobile */}
      <button
        onClick={() => setIsSearchOpen(true)}
        className="md:hidden fixed right-4 bottom-20 z-40 w-12 h-12 rounded-full bg-gradient-to-tr from-amber-600 to-amber-500 text-white flex items-center justify-center shadow-lg shadow-amber-600/30 hover:scale-105 active:scale-95 transition-transform"
        aria-label="Search"
      >
        <Search className="w-5 h-5" />
      </button>

      {/* Sticky Bottom Navigation Bar */}
      <nav aria-label="Mobile Navigation" className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 shadow-lg px-2 py-1.5 transition-colors">
        <div className="flex items-center justify-around">
          {items.map(item => {
            const Icon = item.icon;
            const active = isActive(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`flex flex-col items-center justify-center py-1 px-3 rounded-lg transition-colors ${
                  active
                    ? 'text-amber-600 dark:text-amber-400 font-bold'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
              >
                <Icon className={`w-5 h-5 mb-0.5 ${active ? 'stroke-[2.5px]' : 'stroke-[1.8px]'}`} />
                <span className="text-[10px] tracking-tight">
                  {language === 'hi' ? item.hindiLabel : item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
};
