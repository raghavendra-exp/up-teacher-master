import React, { useState } from 'react';
import {
  Bell,
  Calendar,
  AlertTriangle,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Clock,
  HelpCircle,
  FileText
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { NOTIFICATIONS_DATA } from '../data/notifications';
import { SubjectBreadcrumbs } from '../components/SubjectBreadcrumbs';

export const NotificationsPage: React.FC = () => {
  const { language } = useApp();
  const [selectedStatusFilter, setSelectedStatusFilter] = useState<string>('All');

  const filteredNotifs = NOTIFICATIONS_DATA.filter(
    n => selectedStatusFilter === 'All' || n.status === selectedStatusFilter
  );

  const breadcrumbs = [
    { label: 'Home', hindiLabel: 'होम', href: '/' },
    { label: 'Official Notifications & Dates', hindiLabel: 'आधिकारिक सूचनाएं एवं परीक्षा कैलेंडर', active: true }
  ];

  return (
    <div className="w-full space-y-6">
      <SubjectBreadcrumbs items={breadcrumbs} />

      {/* Header Banner */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-400">
                {language === 'hi' ? 'उत्तर प्रदेश आयोग भर्ती कैलेंडर' : 'UP Teacher Recruitment Calendar'}
              </span>
              <span className="flex items-center gap-1 text-[11px] text-emerald-600 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                {language === 'hi' ? 'आधिकारिक स्रोत सत्यापित' : 'Verified Official Updates'}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {language === 'hi'
                ? 'आधिकारिक भर्ती विज्ञप्ति एवं परीक्षा सूचना ट्रैकर'
                : 'Official Recruitment Notification Tracker'}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl leading-relaxed">
              {language === 'hi'
                ? 'यूपी टीजीटी, प्राथमिक सहायक अध्यापक (सुपर टीईटी), यूपीटीईटी एवं यूपीपीएससी शिक्षक परीक्षाओं के आधिकारिक स्थिति ट्रैकर कार्ड।'
                : 'Track genuine status cards for UP TGT, UP PRT, UPTET, and UPPSC teacher recruitment with direct official notification links.'}
            </p>
          </div>
        </div>

        {/* Warning Banner on Unverified Information (Section 51) */}
        <div className="p-4 rounded-2xl bg-amber-50/80 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 flex items-start gap-3 text-xs sm:text-sm text-amber-950 dark:text-amber-200">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold block">
              {language === 'hi' ? 'सत्यता एवं सतर्कता चेतावनी (Anti-Rumor Protocol):' : 'Official Verification Warning Policy:'}
            </span>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              {language === 'hi'
                ? 'जब तक आयोग द्वारा आधिकारिक राजपत्र जारी नहीं किया जाता, तिथियां strictly "Official information not yet verified" के रूप में प्रदर्शित की जाती हैं। सोशल मीडिया पर प्रसारित असत्यापित तिथियों या पदों की संख्या पर भ्रमित न हों।'
                : 'Whenever official information is unavailable from the commission, dates are strictly marked as "Official information not yet verified." We never fabricate vacancies, cut-offs, or exam dates.'}
            </p>
          </div>
        </div>
      </div>

      {/* Status Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200 dark:border-slate-800 no-scrollbar">
        {['All', 'UPCOMING', 'OPEN', 'CLOSED', 'EXAM CONDUCTED', 'RESULT OUT'].map(st => (
          <button
            key={st}
            onClick={() => setSelectedStatusFilter(st)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
              selectedStatusFilter === st
                ? 'bg-amber-600 text-white shadow-xs'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-amber-400'
            }`}
          >
            {st}
          </button>
        ))}
      </div>

      {/* Notification Cards Grid (Section 24) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredNotifs.map(notif => (
          <div
            key={notif.id}
            className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between space-y-4 hover:border-amber-400 transition-all"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  {notif.exam}
                </span>

                <span
                  className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                    notif.status === 'OPEN'
                      ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                      : notif.status === 'UPCOMING'
                      ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                      : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
                  }`}
                >
                  {notif.status}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                  {language === 'hi' ? notif.hindiTitle : notif.title}
                </h3>
                <span className="text-xs text-slate-400 font-medium">{notif.conductingBody}</span>
              </div>

              {/* Comprehensive Dates Table */}
              <div className="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-2xl text-xs space-y-2 border border-slate-100 dark:border-slate-700/60">
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 dark:text-slate-400">{language === 'hi' ? 'विज्ञप्ति जारी:' : 'Notice Release:'}</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{notif.releaseDate}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 dark:text-slate-400">{language === 'hi' ? 'आवेदन प्रारंभ:' : 'Application Start:'}</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{notif.applicationStart}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 dark:text-slate-400">{language === 'hi' ? 'अंतिम तिथि:' : 'Last Date:'}</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{notif.applicationLastDate}</span>
                </div>
                <div className="flex justify-between items-center pt-1.5 border-t border-slate-200 dark:border-slate-700">
                  <span className="text-slate-500 dark:text-slate-400">{language === 'hi' ? 'परीक्षा तिथि:' : 'Exam Date:'}</span>
                  <span className="font-bold text-amber-600 dark:text-amber-400">{notif.examDate}</span>
                </div>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {language === 'hi' ? notif.hindiNotes : notif.notes}
              </p>
            </div>

            {/* Official Portal Link */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <span className="text-[11px] text-slate-400">
                {notif.isOfficialVerified ? (language === 'hi' ? 'सत्यापित पोर्टल' : 'Official Portal') : (language === 'hi' ? 'सूचना प्रतीक्षित' : 'Notice Awaited')}
              </span>

              <a
                href={notif.officialPortalUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-amber-600 hover:text-white hover:bg-amber-600 border border-amber-600/30 transition-colors flex items-center gap-1.5"
              >
                <span>{language === 'hi' ? 'आधिकारिक पोर्टल लिंक' : 'Official Portal'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
