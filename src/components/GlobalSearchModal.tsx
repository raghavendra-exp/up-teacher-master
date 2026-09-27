import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, BookOpen, FileText, CheckCircle2, Bell, Lightbulb, ExternalLink, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { SUBJECTS_DATA } from '../data/subjects';
import { BOOKS_DATA } from '../data/books';
import { NOTIFICATIONS_DATA } from '../data/notifications';
import { TIPS_DATA } from '../data/tips';
import { CURRENT_AFFAIRS_DATA } from '../data/current-affairs';
import rawQuestions from '../data/questions.json';
import rawPyqs from '../data/pyqs.json';

interface SearchResult {
  id: string;
  type: 'Subject' | 'Book' | 'Question' | 'PYQ' | 'Current Affairs' | 'Notification' | 'Tip';
  title: string;
  subtitle: string;
  route: string;
  badge?: string;
}

export const GlobalSearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen, language } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setSearchTerm('');
      setResults([]);
    }
  }, [isSearchOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, setIsSearchOpen]);

  // Perform search across datasets
  useEffect(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term || term.length < 2) {
      setResults([]);
      return;
    }

    const matches: SearchResult[] = [];

    // 1. Subjects
    SUBJECTS_DATA.forEach(sub => {
      if (
        sub.name.toLowerCase().includes(term) ||
        sub.hindiName.toLowerCase().includes(term) ||
        sub.overview.toLowerCase().includes(term) ||
        sub.hindiOverview.toLowerCase().includes(term)
      ) {
        matches.push({
          id: `sub-${sub.id}`,
          type: 'Subject',
          title: language === 'hi' ? sub.hindiName : sub.name,
          subtitle: `${sub.totalChapters} chapters • ${sub.recommendedNCERT}`,
          route: `/subjects/${sub.id}`,
          badge: sub.category
        });
      }
    });

    // 2. Books
    BOOKS_DATA.forEach(book => {
      if (
        book.title.toLowerCase().includes(term) ||
        (book.hindiTitle && book.hindiTitle.toLowerCase().includes(term)) ||
        book.author.toLowerCase().includes(term) ||
        book.subject.toLowerCase().includes(term) ||
        book.topicsCovered.some(t => t.toLowerCase().includes(term))
      ) {
        matches.push({
          id: `book-${book.id}`,
          type: 'Book',
          title: language === 'hi' && book.hindiTitle ? book.hindiTitle : book.title,
          subtitle: `${book.author} • ${book.publisher} • ${book.exam}`,
          route: '/books',
          badge: book.isNcertOrScert ? 'NCERT/SCERT' : 'Reference'
        });
      }
    });

    // 3. Current Affairs
    CURRENT_AFFAIRS_DATA.forEach(ca => {
      if (
        ca.title.toLowerCase().includes(term) ||
        ca.hindiTitle.toLowerCase().includes(term) ||
        ca.summary.toLowerCase().includes(term) ||
        ca.hindiSummary.toLowerCase().includes(term)
      ) {
        matches.push({
          id: `ca-${ca.id}`,
          type: 'Current Affairs',
          title: language === 'hi' ? ca.hindiTitle : ca.title,
          subtitle: `${ca.category} • ${ca.date}`,
          route: '/current-affairs',
          badge: 'Current Affairs'
        });
      }
    });

    // 4. Notifications
    NOTIFICATIONS_DATA.forEach(notif => {
      if (
        notif.title.toLowerCase().includes(term) ||
        notif.hindiTitle.toLowerCase().includes(term) ||
        notif.exam.toLowerCase().includes(term)
      ) {
        matches.push({
          id: `notif-${notif.id}`,
          type: 'Notification',
          title: language === 'hi' ? notif.hindiTitle : notif.title,
          subtitle: `${notif.conductingBody} • Status: ${notif.status}`,
          route: '/notifications',
          badge: notif.status
        });
      }
    });

    // 5. Tips & Tricks
    TIPS_DATA.forEach(tip => {
      if (
        tip.title.toLowerCase().includes(term) ||
        tip.hindiTitle.toLowerCase().includes(term) ||
        tip.description.toLowerCase().includes(term) ||
        tip.subject.toLowerCase().includes(term)
      ) {
        matches.push({
          id: `tip-${tip.id}`,
          type: 'Tip',
          title: language === 'hi' ? tip.hindiTitle : tip.title,
          subtitle: `${tip.subject} • ${tip.category}`,
          route: '/tips',
          badge: tip.category
        });
      }
    });

    // 6. Practice Questions (Sample from top matches to keep search instant)
    const qMatches = (rawQuestions as any[]).filter(q =>
      q.question.toLowerCase().includes(term) ||
      q.hindiQuestion.toLowerCase().includes(term) ||
      q.subject.toLowerCase().includes(term) ||
      q.tags.some((t: string) => t.toLowerCase().includes(term))
    ).slice(0, 5);

    qMatches.forEach(q => {
      matches.push({
        id: `q-${q.id}`,
        type: 'Question',
        title: language === 'hi' ? q.hindiQuestion : q.question,
        subtitle: `${q.subject} • ${q.chapter} • Difficulty: ${q.difficulty}`,
        route: `/practice?q=${q.id}`,
        badge: q.exam
      });
    });

    // 7. PYQs
    const pyqMatches = (rawPyqs as any[]).filter(p =>
      p.question.toLowerCase().includes(term) ||
      p.hindiQuestion.toLowerCase().includes(term) ||
      (p.pyqDetails?.examName && p.pyqDetails.examName.toLowerCase().includes(term))
    ).slice(0, 4);

    pyqMatches.forEach(p => {
      matches.push({
        id: `pyq-${p.id}`,
        type: 'PYQ',
        title: language === 'hi' ? p.hindiQuestion : p.question,
        subtitle: `${p.pyqDetails?.examName} (${p.pyqDetails?.year}) • ${p.subject}`,
        route: `/pyqs?id=${p.id}`,
        badge: 'Official PYQ'
      });
    });

    setResults(matches.slice(0, 20));
  }, [searchTerm, language]);

  if (!isSearchOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-900/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200">
      <div className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-100 dark:border-slate-800 gap-3">
          <Search className="w-5 h-5 text-amber-500 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder={
              language === 'hi'
                ? 'विषय, बाल मनोविज्ञान, संधि, एनसीईआरटी, प्रश्न, या आयोग खोजें...'
                : 'Search syllabus, CDP, Sandhi, NCERT books, PYQs, tips...'
            }
            className="w-full bg-transparent text-sm sm:text-base text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-hidden"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="px-2 py-1 text-xs font-medium text-slate-500 bg-slate-100 dark:bg-slate-800 rounded-md hover:bg-slate-200"
          >
            ESC
          </button>
        </div>

        {/* Results Container */}
        <div className="overflow-y-auto p-3 divide-y divide-slate-100 dark:divide-slate-800">
          {searchTerm.trim().length > 0 && results.length === 0 && (
            <div className="py-12 text-center text-slate-400 dark:text-slate-500">
              <Search className="w-10 h-10 mx-auto mb-2 opacity-40" />
              <p className="text-sm font-medium">
                {language === 'hi'
                  ? `"${searchTerm}" से संबंधित कोई परिणाम नहीं मिला`
                  : `No results found for "${searchTerm}"`}
              </p>
              <p className="text-xs text-slate-400 mt-1">
                {language === 'hi'
                  ? 'कृपया अन्य कीवर्ड जैसे \'गणित\', \'पियाजे\', \'UP GK\', \'NCERT\' का प्रयास करें।'
                  : 'Try keywords like \'Mathematics\', \'Piaget\', \'UP GK\', or \'NCERT\'.'}
              </p>
            </div>
          )}

          {searchTerm.trim().length === 0 && (
            <div className="p-4 text-xs text-slate-500 dark:text-slate-400">
              <p className="font-semibold text-slate-700 dark:text-slate-300 mb-2">
                {language === 'hi' ? 'त्वरित खोज सुझाव:' : 'Quick Search Suggestions:'}
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  'बाल मनोविज्ञान (CDP)',
                  'Piaget',
                  'Vygotsky',
                  'UP GK',
                  'NCERT Books',
                  'Sandhi',
                  'Percentage',
                  'UP TGT',
                  'Super TET',
                  '69000 PYQ'
                ].map((tag, i) => (
                  <button
                    key={i}
                    onClick={() => setSearchTerm(tag)}
                    className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 hover:bg-amber-100 dark:hover:bg-amber-950/60 hover:text-amber-700 dark:hover:text-amber-300 rounded-lg transition-colors cursor-pointer"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {results.map(res => (
            <div
              key={res.id}
              onClick={() => {
                setIsSearchOpen(false);
                navigate(res.route);
              }}
              className="p-3 hover:bg-amber-50/50 dark:hover:bg-amber-950/20 rounded-xl cursor-pointer transition-colors group flex items-start justify-between gap-3"
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 p-2 bg-slate-100 dark:bg-slate-800 group-hover:bg-amber-100 dark:group-hover:bg-amber-900/50 rounded-lg text-amber-600 transition-colors shrink-0">
                  {res.type === 'Subject' && <BookOpen className="w-4 h-4" />}
                  {res.type === 'Book' && <FileText className="w-4 h-4" />}
                  {res.type === 'Question' && <CheckCircle2 className="w-4 h-4" />}
                  {res.type === 'PYQ' && <ExternalLink className="w-4 h-4" />}
                  {res.type === 'Current Affairs' && <BookOpen className="w-4 h-4" />}
                  {res.type === 'Notification' && <Bell className="w-4 h-4" />}
                  {res.type === 'Tip' && <Lightbulb className="w-4 h-4" />}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {res.type}
                    </span>
                    {res.badge && (
                      <span className="text-[10px] font-medium px-1.5 py-0.2 rounded-sm bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300">
                        {res.badge}
                      </span>
                    )}
                  </div>
                  <h4 className="text-sm font-medium text-slate-900 dark:text-slate-100 mt-1 line-clamp-1 group-hover:text-amber-600 transition-colors">
                    {res.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                    {res.subtitle}
                  </p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-amber-500 shrink-0 mt-2 transition-colors" />
            </div>
          ))}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
          <span>{language === 'hi' ? 'द्विभाषी खोज (हिन्दी + English समर्थित)' : 'Bilingual Search (Hindi + English supported)'}</span>
          <span>{results.length} {language === 'hi' ? 'परिणाम' : 'results'}</span>
        </div>
      </div>
    </div>
  );
};
