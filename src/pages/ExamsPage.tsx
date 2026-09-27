import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  GraduationCap,
  CheckCircle2,
  AlertCircle,
  Clock,
  Award,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  ExternalLink,
  HelpCircle,
  FileCheck
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { EXAMS_DATA } from '../data/exams';
import { SubjectBreadcrumbs } from '../components/SubjectBreadcrumbs';
import { ExamId } from '../types';

export const ExamsPage: React.FC = () => {
  const { examId } = useParams<{ examId?: string }>();
  const { language, activeExam, setActiveExam } = useApp();

  const selectedKey = (examId as ExamId) || activeExam || 'UP_PRT';
  const currentExam = EXAMS_DATA[selectedKey] || EXAMS_DATA['UP_PRT'];

  const breadcrumbs = [
    { label: 'Home', hindiLabel: 'होम', href: '/' },
    { label: 'Exams', hindiLabel: 'परीक्षाएं', href: '/exams' },
    { label: currentExam.name, hindiLabel: currentExam.hindiName, active: true }
  ];

  return (
    <div className="w-full space-y-6">
      <SubjectBreadcrumbs items={breadcrumbs} />

      {/* Exam Navigation Switcher Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200 dark:border-slate-800">
        {(Object.keys(EXAMS_DATA) as ExamId[]).map(key => {
          const item = EXAMS_DATA[key];
          const isSelected = selectedKey === key;
          return (
            <Link
              key={key}
              to={`/exams/${key}`}
              onClick={() => setActiveExam(key)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
                isSelected
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-600/20'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-amber-400'
              }`}
            >
              <span>{key === 'UP_PRT' ? 'Primary PRT' : key === 'UP_TGT' ? 'TGT Secondary' : 'UPTET Eligibility'}</span>
              {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white"></span>}
            </Link>
          );
        })}
      </div>

      {/* Main Exam Header */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xs space-y-6">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-400">
                {currentExam.conductingBody}
              </span>
              {currentExam.isVerifiedOfficial && (
                <span className="flex items-center gap-1 text-[11px] text-emerald-600 font-semibold bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-md">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {language === 'hi' ? 'आधिकारिक सत्यापित' : 'Official Verified'} ({currentExam.verificationDate})
                </span>
              )}
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {language === 'hi' ? currentExam.hindiName : currentExam.name}
            </h1>

            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
              {language === 'hi' ? currentExam.hindiOverview : currentExam.overview}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-2 shrink-0">
            <Link
              to={`/syllabus/${currentExam.id === 'UP_PRT' ? 'prt' : currentExam.id === 'UP_TGT' ? 'tgt' : 'uptet'}`}
              className="px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-amber-600 hover:bg-amber-700 text-center transition-colors"
            >
              {language === 'hi' ? 'विस्तृत पाठ्यक्रम खोलें' : 'View Full Syllabus'}
            </Link>
            <Link
              to="/tests"
              className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-center transition-colors"
            >
              {language === 'hi' ? 'मॉक टेस्ट दें' : 'Launch Mock Test'}
            </Link>
          </div>
        </div>

        {/* Quick Highlights Metrics Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
          <div className="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-2xl">
            <span className="text-[11px] text-slate-400 block">{language === 'hi' ? 'कुल प्रश्न' : 'Total Questions'}</span>
            <span className="text-xl font-black text-slate-900 dark:text-white mt-0.5 block">
              {currentExam.totalQuestions} MCQs
            </span>
          </div>
          <div className="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-2xl">
            <span className="text-[11px] text-slate-400 block">{language === 'hi' ? 'कुल अंक' : 'Total Marks'}</span>
            <span className="text-xl font-black text-amber-600 dark:text-amber-400 mt-0.5 block">
              {currentExam.totalMarks} Marks
            </span>
          </div>
          <div className="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-2xl">
            <span className="text-[11px] text-slate-400 block">{language === 'hi' ? 'परीक्षा अवधि' : 'Duration'}</span>
            <span className="text-xl font-black text-slate-900 dark:text-white mt-0.5 block">
              {currentExam.durationMinutes} Mins
            </span>
          </div>
          <div className="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-2xl">
            <span className="text-[11px] text-slate-400 block">{language === 'hi' ? 'अंकन पद्धति' : 'Marking Scheme'}</span>
            <span className="text-base sm:text-lg font-black text-slate-900 dark:text-white mt-0.5 block">
              +{currentExam.markingScheme.correct} / {currentExam.markingScheme.incorrect}
            </span>
          </div>
        </div>
      </div>

      {/* Specific UPTET Warning Note if on UPTET */}
      {currentExam.id === 'UPTET' && (
        <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 text-xs text-blue-900 dark:text-blue-200 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-bold">
              {language === 'hi'
                ? 'महत्वपूर्ण सूचना: यूपीटीईटी केवल पात्रता परीक्षा है'
                : 'Crucial Distinction: UPTET is an Eligibility Test Only'}
            </p>
            <p>
              {language === 'hi'
                ? 'यूपीटीईटी सीधे नौकरी या सहायक अध्यापक पद की भर्ती नहीं है। इसे उत्तीर्ण करने के उपरांत उम्मीदवार सुपर टीईटी (प्राथमिक सहायक अध्यापक भर्ती) की चयन परीक्षा में बैठने हेतु पात्र होते हैं। इसमें ऋणात्मक अंकन (Negative Marking) नहीं होता है।'
                : 'UPTET guarantees teacher eligibility, not direct recruitment. Qualifying UPTET is the prerequisite to apply for the UP Primary Assistant Teacher recruitment examination. No negative marking is applicable.'}
            </p>
          </div>
        </div>
      )}

      {/* Section-wise Exam Structure Table */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xs space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
              {language === 'hi' ? 'विषयवार प्रश्न एवं अंक विभाजन' : 'Section-wise Question & Marks Distribution'}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {language === 'hi'
                ? 'आधिकारिक अधिसूचना अनुसार प्रत्येक विषय का वेटेज एवं प्रश्नों की संख्या'
                : 'Subject weightages and question counts according to official commission scheme'}
            </p>
          </div>
          <span className="text-xs font-semibold text-amber-600 dark:text-amber-400">
            {currentExam.sections.length} {language === 'hi' ? 'खंड' : 'Sections'}
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-400 text-[11px] uppercase">
                <th className="py-3 px-3">#</th>
                <th className="py-3 px-3">{language === 'hi' ? 'विषय / खंड का नाम' : 'Subject / Section Name'}</th>
                <th className="py-3 px-3 text-center">{language === 'hi' ? 'प्रश्न' : 'Questions'}</th>
                <th className="py-3 px-3 text-center">{language === 'hi' ? 'अंक' : 'Marks'}</th>
                <th className="py-3 px-3 text-center">{language === 'hi' ? 'वेटेज (%)' : 'Weightage'}</th>
                <th className="py-3 px-3 text-right">{language === 'hi' ? 'कार्यवाही' : 'Action'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {currentExam.sections.map((sec, idx) => (
                <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="py-3.5 px-3 font-mono text-slate-400 text-xs">{idx + 1}</td>
                  <td className="py-3.5 px-3 font-semibold text-slate-900 dark:text-white">
                    {language === 'hi' ? sec.hindiName : sec.name}
                  </td>
                  <td className="py-3.5 px-3 text-center font-bold text-slate-700 dark:text-slate-200">
                    {sec.questions}
                  </td>
                  <td className="py-3.5 px-3 text-center font-bold text-amber-600 dark:text-amber-400">
                    {sec.marks}
                  </td>
                  <td className="py-3.5 px-3 text-center">
                    <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {sec.weightagePercent}%
                    </span>
                  </td>
                  <td className="py-3.5 px-3 text-right">
                    <Link
                      to={`/practice?subject=${encodeURIComponent(sec.name)}`}
                      className="text-xs font-semibold text-amber-600 hover:text-amber-700 dark:text-amber-400 hover:underline"
                    >
                      {language === 'hi' ? 'अभ्यास करें →' : 'Practice →'}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Eligibility & Qualifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
          <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
            <span>{language === 'hi' ? 'शैक्षणिक योग्यता एवं अर्हता' : 'Educational Eligibility Criteria'}</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {language === 'hi' ? currentExam.eligibility.hindiEducation : currentExam.eligibility.education}
          </p>
          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500">
            <span className="font-semibold text-slate-700 dark:text-slate-300">{language === 'hi' ? 'आयु सीमा:' : 'Age Limit:'}</span>{' '}
            {currentExam.eligibility.ageLimit}
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
          <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
            <FileCheck className="w-5 h-5 text-amber-500" />
            <span>{language === 'hi' ? 'आधिकारिक स्रोत एवं अधिसूचना' : 'Official Portal & Notifications'}</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {language === 'hi'
              ? 'आयोग की आधिकारिक वेबसाइट upessc.up.gov.in पर प्रकाशित विज्ञप्ति को ही अंतिम व विधिक माना जाए।'
              : 'Always consult the official gazette notices published directly on the Uttar Pradesh Education Service Selection Commission portal.'}
          </p>
          <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
            <a
              href={currentExam.officialWebsite}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 hover:text-amber-700 dark:text-amber-400 hover:underline"
            >
              <span>{language === 'hi' ? 'आधिकारिक वेबसाइट खोलें' : 'Open UPESSC Official Website'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
