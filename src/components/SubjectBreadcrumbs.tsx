import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowLeft, ArrowRight, Layers, ChevronDown } from 'lucide-react';
import { useApp } from '../context/AppContext';

export interface BreadcrumbItem {
  label: string;
  hindiLabel?: string;
  href?: string;
  active?: boolean;
}

interface SubjectBreadcrumbsProps {
  items: BreadcrumbItem[];
  prevTopic?: { title: string; hindiTitle?: string; route: string };
  nextTopic?: { title: string; hindiTitle?: string; route: string };
}

export const SubjectBreadcrumbs: React.FC<SubjectBreadcrumbsProps> = ({
  items,
  prevTopic,
  nextTopic
}) => {
  const { language } = useApp();
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);

  if (!items || items.length === 0) return null;

  return (
    <div className="w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-xs mb-6 px-4 py-3 rounded-xl transition-colors">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
        {/* Desktop Breadcrumbs (and full view) */}
        <nav aria-label="Breadcrumb" className="hidden sm:flex items-center flex-wrap gap-1.5 text-xs md:text-sm font-medium">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            const text = (language === 'hi' && item.hindiLabel) ? item.hindiLabel : item.label;

            return (
              <React.Fragment key={index}>
                {index > 0 && (
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 shrink-0" />
                )}
                {item.href && !isLast ? (
                  <Link
                    to={item.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors truncate max-w-[180px]"
                    title={text}
                  >
                    {text}
                  </Link>
                ) : (
                  <span
                    className={`${
                      isLast
                        ? 'text-amber-600 dark:text-amber-400 font-semibold'
                        : 'text-slate-700 dark:text-slate-300'
                    } truncate max-w-[220px]`}
                    title={text}
                  >
                    {text}
                  </span>
                )}
              </React.Fragment>
            );
          })}
        </nav>

        {/* Collapsible Mobile Breadcrumbs */}
        <div className="sm:hidden w-full">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setIsMobileExpanded(!isMobileExpanded)}
              className="flex items-center gap-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2.5 py-1.5 rounded-lg"
            >
              <Layers className="w-3.5 h-3.5 text-amber-500" />
              <span className="truncate max-w-[200px]">
                {items[items.length - 1] && (
                  language === 'hi' && items[items.length - 1].hindiLabel
                    ? items[items.length - 1].hindiLabel
                    : items[items.length - 1].label
                )}
              </span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isMobileExpanded ? 'rotate-180' : ''}`} />
            </button>
            <span className="text-[11px] text-slate-400">
              {items.length} {language === 'hi' ? 'चरण' : 'levels'}
            </span>
          </div>

          {isMobileExpanded && (
            <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-1 text-xs">
              {items.map((item, idx) => {
                const text = (language === 'hi' && item.hindiLabel) ? item.hindiLabel : item.label;
                return (
                  <div key={idx} className="flex items-center gap-2 pl-2 border-l-2 border-amber-500">
                    {item.href ? (
                      <Link
                        to={item.href}
                        className="text-slate-600 dark:text-slate-400 hover:text-amber-600 py-0.5"
                      >
                        {text}
                      </Link>
                    ) : (
                      <span className="font-semibold text-amber-600 dark:text-amber-400 py-0.5">
                        {text}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Previous Topic & Next Topic Navigation */}
        {(prevTopic || nextTopic) && (
          <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
            {prevTopic && (
              <Link
                to={prevTopic.route}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-amber-50 dark:hover:bg-amber-950/40 hover:text-amber-600 transition-colors"
                title={language === 'hi' && prevTopic.hindiTitle ? prevTopic.hindiTitle : prevTopic.title}
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">
                  {language === 'hi' ? 'पिछला विषय' : 'Previous Topic'}
                </span>
                <span className="sm:hidden">
                  {language === 'hi' ? 'पिछला' : 'Prev'}
                </span>
              </Link>
            )}

            {nextTopic && (
              <Link
                to={nextTopic.route}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium text-white bg-amber-600 hover:bg-amber-700 dark:bg-amber-500 dark:hover:bg-amber-600 transition-colors"
                title={language === 'hi' && nextTopic.hindiTitle ? nextTopic.hindiTitle : nextTopic.title}
              >
                <span className="hidden sm:inline">
                  {language === 'hi' ? 'अगला विषय' : 'Next Topic'}
                </span>
                <span className="sm:hidden">
                  {language === 'hi' ? 'अगला' : 'Next'}
                </span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
