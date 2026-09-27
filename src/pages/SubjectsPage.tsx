import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  ArrowRight,
  ExternalLink,
  Search,
  Filter,
  Layers,
  GraduationCap
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { SUBJECTS_DATA } from '../data/subjects';
import { SubjectBreadcrumbs } from '../components/SubjectBreadcrumbs';

export const SubjectsPage: React.FC = () => {
  const { language, activeExam } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Language',
    'Core Science & Math',
    'Social Studies',
    'Pedagogy & Psychology',
    'General & Aptitude',
    'TGT Specialist'
  ];

  const filteredSubjects = SUBJECTS_DATA.filter(sub => {
    const matchesCategory = selectedCategory === 'All' || sub.category === selectedCategory;
    const matchesSearch =
      sub.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sub.hindiName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sub.overview.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const breadcrumbs = [
    { label: 'Home', hindiLabel: 'होम', href: '/' },
    { label: 'Subjects', hindiLabel: 'विषय सूची', active: true }
  ];

  return (
    <div className="w-full space-y-6">
      <SubjectBreadcrumbs items={breadcrumbs} />

      {/* Header */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider block mb-1">
            {language === 'hi' ? '26+ संपूर्ण शिक्षक भर्ती विषय' : 'Comprehensive 26+ Subject Catalogs'}
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            {language === 'hi' ? 'अध्यापक विषय अन्वेषक (Subject Explorer)' : 'Teacher Subject Explorer'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
            {language === 'hi'
              ? 'प्राथमिक सहायक अध्यापक एवं टीजीटी के सभी विषयों के अध्याय, अवधारणाएं, फॉर्मूला शीट, एनसीईआरटी लिंकेज एवं वस्तुनिष्ठ प्रश्न।'
              : 'Detailed topic trees, NCERT alignments, chapter notes, formulas, and objective practice across all PRT & TGT subjects.'}
          </p>
        </div>

        {/* Filter Input */}
        <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 w-full md:w-64">
          <Search className="w-4 h-4 text-slate-400 shrink-0" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder={language === 'hi' ? 'विषय खोजें...' : 'Search subjects...'}
            className="w-full bg-transparent text-xs text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-hidden"
          />
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200 dark:border-slate-800 no-scrollbar">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
              selectedCategory === cat
                ? 'bg-amber-600 text-white shadow-xs'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-amber-400'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Subjects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredSubjects.map(sub => (
          <div
            key={sub.id}
            className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md hover:border-amber-400 transition-all flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                  {sub.category}
                </span>
                <span className="text-[11px] font-semibold text-amber-600 dark:text-amber-400">
                  {sub.totalChapters} Chapters • {sub.totalTopics} Topics
                </span>
              </div>

              <div>
                <h3 className="font-extrabold text-lg text-slate-900 dark:text-white group-hover:text-amber-600 transition-colors">
                  {language === 'hi' ? sub.hindiName : sub.name}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed line-clamp-3">
                  {language === 'hi' ? sub.hindiOverview : sub.overview}
                </p>
              </div>

              <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl text-xs space-y-1">
                <div className="text-[11px] text-slate-400 font-medium">
                  {language === 'hi' ? 'अनुशंसित एनसीईआरटी / एससीईआरटी:' : 'Recommended NCERT / SCERT:'}
                </div>
                <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 truncate">
                  {sub.recommendedNCERT}
                </div>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <a
                href={sub.ncertDownloadLink}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
              >
                <span>NCERT Link</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <Link
                to={`/subjects/${sub.id}`}
                className="text-xs font-bold text-amber-600 dark:text-amber-400 hover:text-amber-700 flex items-center gap-1 group-hover:gap-1.5 transition-all"
              >
                <span>{language === 'hi' ? 'अध्याय खोलें' : 'Explore Subject'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
