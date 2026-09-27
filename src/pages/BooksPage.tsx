import React, { useState } from 'react';
import {
  BookOpen,
  ExternalLink,
  Download,
  Filter,
  Search,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Star,
  FileText
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { BOOKS_DATA } from '../data/books';
import { SubjectBreadcrumbs } from '../components/SubjectBreadcrumbs';

export const BooksPage: React.FC = () => {
  const { language, activeExam } = useApp();

  const [selectedExam, setSelectedExam] = useState<string>('All');
  const [selectedLevel, setSelectedLevel] = useState<string>('All');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('All');
  const [selectedPurpose, setSelectedPurpose] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const breadcrumbs = [
    { label: 'Home', hindiLabel: 'होम', href: '/' },
    { label: 'Recommended Books & NCERT', hindiLabel: 'एनसीईआरटी एवं अनुशंसित पुस्तकें', active: true }
  ];

  const filteredBooks = BOOKS_DATA.filter(book => {
    const matchesExam =
      selectedExam === 'All' ||
      book.exam === selectedExam ||
      (selectedExam === 'UP PRT' && book.exam === 'Both PRT & TGT') ||
      (selectedExam === 'UP TGT' && book.exam === 'Both PRT & TGT');

    const matchesLevel = selectedLevel === 'All' || book.level === selectedLevel || book.level === 'All Levels';
    const matchesLang = selectedLanguage === 'All' || book.language === selectedLanguage || book.language === 'Bilingual';
    const matchesPurpose = selectedPurpose === 'All' || book.purpose === selectedPurpose || book.purpose === 'Comprehensive';
    const matchesSearch =
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (book.hindiTitle && book.hindiTitle.toLowerCase().includes(searchQuery.toLowerCase())) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.subject.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesExam && matchesLevel && matchesLang && matchesPurpose && matchesSearch;
  });

  return (
    <div className="w-full space-y-6">
      <SubjectBreadcrumbs items={breadcrumbs} />

      {/* Header Banner */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-400">
                {language === 'hi' ? 'एनसीईआरटी + एससीईआरटी + मानक संदर्भ' : 'NCERT + SCERT + Standard Books'}
              </span>
              <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600">
                <ShieldCheck className="w-3.5 h-3.5" />
                {language === 'hi' ? 'विधिक एवं आधिकारिक लिंक' : 'Legal Official Access'}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {language === 'hi'
                ? 'अनुशंसित पुस्तकें एवं एनसीईआरटी सीधी पहुँच हब'
                : 'Recommended Books & Direct NCERT Access Hub'}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl leading-relaxed">
              {language === 'hi'
                ? 'कॉपीराइट नियमों का अनुपालन करते हुए आधिकारिक एनसीईआरटी एवं एससीईआरटी पाठ्यपुस्तकों के सीधे डाउनलोड लिंक तथा मानक संदर्भ पुस्तकों की समीक्षा।'
                : 'Direct official access links for official NCERT & SCERT textbooks alongside objective reviews of premier competitive reference books.'}
            </p>
          </div>

          <a
            href="https://ncert.nic.in/textbook.php"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-amber-600 hover:bg-amber-700 flex items-center gap-2 shadow-md shadow-amber-600/20 shrink-0 self-start md:self-center"
          >
            <Download className="w-4 h-4" />
            <span>{language === 'hi' ? 'एनसीईआरटी ई-बुक पोर्टल' : 'NCERT Official Portal'}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Dedicated Direct NCERT Highlight Card (User request: "also provide the links of NCERT books for easy access") */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/40 border border-blue-200 dark:border-blue-900/60 space-y-3">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h3 className="font-bold text-sm sm:text-base text-blue-950 dark:text-blue-100">
              {language === 'hi'
                ? 'एनसीईआरटी पाठ्यपुस्तकें: कक्षा 1 से 12 तक सीधे डाउनलोड लिंक (Direct Access)'
                : 'NCERT Textbooks: Direct Official Download Links (Classes 1 to 12)'}
            </h3>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-300">
            {language === 'hi'
              ? 'एनसीईआरटी की आधिकारिक वेबसाइट ncert.nic.in एवं ई-पाठशाला पोर्टल पर कक्षा 1 से 12 तक की सभी पुस्तकें (हिन्दी, अंग्रेजी व उर्दू माध्यम) अध्यायवार निःशुल्क उपलब्ध हैं। नीचे दिए गए आधिकारिक लिंक्स पर क्लिक करके सीधे अपनी कक्षा व विषय की पुस्तक डाउनलोड करें:'
              : 'Direct official links to access free authentic NCERT chapter-wise PDFs in Hindi, English, and Urdu directly from NCERT & ePathshala servers:'}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 pt-1">
            <a
              href="https://ncert.nic.in/textbook.php"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-blue-200 dark:border-blue-800 text-xs font-semibold text-blue-700 dark:text-blue-300 hover:border-blue-500 flex items-center justify-between transition-colors"
            >
              <span>{language === 'hi' ? 'प्राथमिक कक्षा 1-5 (गणित/आसपास)' : 'Primary Cl 1–5 (Math/EVS)'}</span>
              <ExternalLink className="w-3.5 h-3.5 shrink-0" />
            </a>
            <a
              href="https://ncert.nic.in/textbook.php"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-blue-200 dark:border-blue-800 text-xs font-semibold text-blue-700 dark:text-blue-300 hover:border-blue-500 flex items-center justify-between transition-colors"
            >
              <span>{language === 'hi' ? 'उच्च प्राथमिक कक्षा 6-8' : 'Middle Cl 6–8 (Sci/SST)'}</span>
              <ExternalLink className="w-3.5 h-3.5 shrink-0" />
            </a>
            <a
              href="https://ncert.nic.in/textbook.php"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-blue-200 dark:border-blue-800 text-xs font-semibold text-blue-700 dark:text-blue-300 hover:border-blue-500 flex items-center justify-between transition-colors"
            >
              <span>{language === 'hi' ? 'माध्यमिक कक्षा 9-10 (TGT)' : 'Secondary Cl 9–10 (TGT)'}</span>
              <ExternalLink className="w-3.5 h-3.5 shrink-0" />
            </a>
            <a
              href="https://epathshala.nic.in"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-blue-200 dark:border-blue-800 text-xs font-semibold text-indigo-700 dark:text-indigo-300 hover:border-indigo-500 flex items-center justify-between transition-colors"
            >
              <span>{language === 'hi' ? 'ई-पाठशाला फ्लिपबुक पोर्टल' : 'ePathshala Flipbooks'}</span>
              <ExternalLink className="w-3.5 h-3.5 shrink-0" />
            </a>
          </div>
        </div>
      </div>

      {/* Filter Engine (Section 39) */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300">
            <Filter className="w-4 h-4 text-amber-500" />
            <span>{language === 'hi' ? 'पुस्तक अनुशंसा फिल्टर:' : 'Filter Books by Parameters:'}</span>
          </div>

          <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 w-full md:w-64">
            <Search className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder={language === 'hi' ? 'शीर्षक या लेखक खोजें...' : 'Search title or author...'}
              className="w-full bg-transparent text-xs text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-hidden"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-xs">
          {/* Exam Filter */}
          <div>
            <label className="text-[10px] text-slate-400 font-semibold block mb-1">
              {language === 'hi' ? 'परीक्षा' : 'Exam'}
            </label>
            <select
              value={selectedExam}
              onChange={e => setSelectedExam(e.target.value)}
              className="w-full p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-200 font-medium"
            >
              <option value="All">All Exams (सभी)</option>
              <option value="UP PRT">UP PRT (Primary)</option>
              <option value="UP TGT">UP TGT (Secondary)</option>
              <option value="UPTET">UPTET (Eligibility)</option>
            </select>
          </div>

          {/* Level Filter */}
          <div>
            <label className="text-[10px] text-slate-400 font-semibold block mb-1">
              {language === 'hi' ? 'स्तर' : 'Level'}
            </label>
            <select
              value={selectedLevel}
              onChange={e => setSelectedLevel(e.target.value)}
              className="w-full p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-200 font-medium"
            >
              <option value="All">All Levels (सभी)</option>
              <option value="Beginner">Beginner (आरंभिक)</option>
              <option value="Intermediate">Intermediate (मध्यम)</option>
              <option value="Advanced">Advanced (उच्च)</option>
            </select>
          </div>

          {/* Language Filter */}
          <div>
            <label className="text-[10px] text-slate-400 font-semibold block mb-1">
              {language === 'hi' ? 'भाषा' : 'Language'}
            </label>
            <select
              value={selectedLanguage}
              onChange={e => setSelectedLanguage(e.target.value)}
              className="w-full p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-200 font-medium"
            >
              <option value="All">All Languages</option>
              <option value="Hindi">Hindi (हिन्दी)</option>
              <option value="English">English</option>
              <option value="Bilingual">Bilingual (द्विभाषी)</option>
            </select>
          </div>

          {/* Purpose Filter */}
          <div>
            <label className="text-[10px] text-slate-400 font-semibold block mb-1">
              {language === 'hi' ? 'उपयोग का उद्देश्य' : 'Purpose'}
            </label>
            <select
              value={selectedPurpose}
              onChange={e => setSelectedPurpose(e.target.value)}
              className="w-full p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-200 font-medium"
            >
              <option value="All">All Purposes</option>
              <option value="Concept Building">Concept Building</option>
              <option value="Practice">Practice MCQs</option>
              <option value="Revision">Revision</option>
            </select>
          </div>
        </div>
      </div>

      {/* Book Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredBooks.map(book => (
          <div
            key={book.id}
            className={`p-6 rounded-3xl border transition-all flex flex-col justify-between ${
              book.isNcertOrScert
                ? 'bg-blue-50/20 dark:bg-blue-950/20 border-blue-200 dark:border-blue-900/60'
                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800'
            }`}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span
                  className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                    book.isNcertOrScert
                      ? 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300'
                      : 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                  }`}
                >
                  {book.isNcertOrScert ? 'Official Textbook' : 'Reference Book'}
                </span>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  {book.exam} • {book.language}
                </span>
              </div>

              <div>
                <h3 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white leading-snug">
                  {language === 'hi' && book.hindiTitle ? book.hindiTitle : book.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  by <strong className="text-slate-700 dark:text-slate-300">{book.author}</strong> • {book.publisher}
                </p>
              </div>

              {/* Best Use & Limitations */}
              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 text-emerald-900 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-900/40">
                  <span className="font-bold block mb-0.5">
                    {language === 'hi' ? 'सर्वोत्तम उपयोग (Best Use):' : 'Best Use:'}
                  </span>
                  <span>{book.bestUse}</span>
                </div>

                <div className="p-2.5 rounded-xl bg-rose-50/70 dark:bg-rose-950/30 text-rose-900 dark:text-rose-300 border border-rose-200/60 dark:border-rose-900/40">
                  <span className="font-bold block mb-0.5">
                    {language === 'hi' ? 'सीमाएं एवं ध्यान रखने योग्य:' : 'Limitations:'}
                  </span>
                  <span>{book.limitations}</span>
                </div>
              </div>

              {/* Topics Covered Tag Pills */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {book.topicsCovered.map((topic, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            {/* Official / Legal Action Link */}
            <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <span className="text-[11px] text-slate-400">
                {book.isNcertOrScert ? 'Free Official PDF' : 'Publisher Reference'}
              </span>

              <a
                href={book.downloadUrl || book.officialOrRefLink}
                target="_blank"
                rel="noreferrer"
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5 ${
                  book.isNcertOrScert
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200'
                }`}
              >
                <span>{book.isNcertOrScert ? (language === 'hi' ? 'सीधे डाउनलोड करें' : 'Direct Download') : (language === 'hi' ? 'संदर्भ लिंक' : 'Official Page')}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
