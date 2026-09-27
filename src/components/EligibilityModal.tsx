import React, { useState } from 'react';
import {
  X,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  FileText,
  GraduationCap,
  Award,
  ExternalLink,
  ChevronRight,
  Calculator,
  Scale
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ExamId } from '../types';
import { Link } from 'react-router-dom';

interface EligibilityModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultExam?: ExamId;
}

export const EligibilityModal: React.FC<EligibilityModalProps> = ({
  isOpen,
  onClose,
  defaultExam = 'UP_PRT'
}) => {
  const { language, activeExam, setActiveExam } = useApp();
  const [selectedExam, setSelectedExam] = useState<ExamId>(defaultExam || activeExam || 'UP_PRT');

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-slate-900 w-full max-w-4xl rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-6 transition-all"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-amber-600 to-orange-600 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/15 backdrop-blur-xs flex items-center justify-center">
              <Scale className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold">
                {language === 'hi'
                  ? 'आधिकारिक शैक्षणिक अर्हता एवं पात्रता मार्गदर्शिका'
                  : 'Official Teacher Eligibility & Qualifications Guide'}
              </h2>
              <p className="text-xs text-amber-100 mt-0.5">
                {language === 'hi'
                  ? 'उत्तर प्रदेश शिक्षा सेवा चयन आयोग (UPESSC) एवं बेसिक/माध्यमिक शिक्षा नियमावली अनुसार'
                  : 'In accordance with UPESSC regulations and Basic/Secondary Education Service Rules'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Exam Navigation Switcher Tabs */}
        <div className="flex items-center gap-2 p-4 bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 overflow-x-auto no-scrollbar">
          {[
            { id: 'UP_PRT' as ExamId, label: 'UP Primary Teacher (PRT / Super TET)', hi: '1. यूपी प्राथमिक (सुपर टीईटी)' },
            { id: 'UP_TGT' as ExamId, label: 'UP TGT (Secondary Classes 9–10)', hi: '2. यूपी टीजीटी (प्रशिक्षित स्नातक)' },
            { id: 'UPTET' as ExamId, label: 'UPTET (Qualifying Eligibility Test)', hi: '3. यूपीटीईटी (पात्रता परीक्षा)' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => {
                setSelectedExam(tab.id);
                setActiveExam(tab.id);
              }}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedExam === tab.id
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-amber-400'
              }`}
            >
              {language === 'hi' ? tab.hi : tab.label}
            </button>
          ))}
        </div>

        {/* Modal Body Content */}
        <div className="p-5 sm:p-7 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* TAB 1: UP PRT ELIGIBILITY */}
          {selectedExam === 'UP_PRT' && (
            <div className="space-y-5">
              {/* Supreme Court Verdict Clarification */}
              <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 flex items-start gap-3 text-xs">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-bold text-amber-900 dark:text-amber-200 block text-sm">
                    {language === 'hi'
                      ? 'प्राथमिक शिक्षक भर्ती हेतु सुप्रीम कोर्ट का विधिक आदेश'
                      : 'Supreme Court Binding Judgment on Primary Teachers'}
                  </span>
                  <p className="text-amber-800 dark:text-amber-300 leading-relaxed">
                    {language === 'hi'
                      ? 'माननीय सर्वोच्च न्यायालय (Supreme Court of India) के 11 अगस्त 2023 के आदेशानुसार, प्राथमिक विद्यालयों (कक्षा 1 से 5) में शिक्षक पद हेतु 2 वर्षीय डिप्लोमा इन एलीमेंट्री एजुकेशन (D.El.Ed / BTC) धारक ही पात्र हैं। बी.एड. (B.Ed.) प्राथमिक स्तर से विधिक रूप से बाहर है।'
                      : 'Per the Supreme Court judgment dated 11 Aug 2023, only 2-Year D.El.Ed. (BTC) / D.Ed. holders are eligible for Primary Teacher (Classes 1–5). B.Ed. degree holders are not eligible for Primary PRT recruitment.'}
                  </p>
                </div>
              </div>

              {/* Core Eligibility Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                    <GraduationCap className="w-4 h-4" />
                    <span>{language === 'hi' ? '1. शैक्षणिक अर्हता (Academic Qualifications)' : '1. Academic Qualifications'}</span>
                  </div>
                  <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1.5 list-disc list-inside leading-relaxed">
                    <li>
                      <strong>{language === 'hi' ? 'स्नातक (Graduation):' : 'Graduation:'}</strong>{' '}
                      {language === 'hi'
                        ? 'किसी मान्यता प्राप्त विश्वविद्यालय से न्यूनतम 50% अंकों के साथ स्नातक उपाधि (आरक्षित वर्ग हेतु 45%)।'
                        : 'Bachelor’s degree with minimum 50% marks (45% for SC/ST/OBC).'}
                    </li>
                    <li>
                      <strong>{language === 'hi' ? 'प्रशिक्षण (Teacher Training):' : 'Teacher Training:'}</strong>{' '}
                      {language === 'hi'
                        ? 'NCTE मान्यता प्राप्त 2-वर्षीय D.El.Ed (BTC) / 4-वर्षीय B.El.Ed / 2-वर्षीय D.Ed (विशेष शिक्षा)।'
                        : '2-Year D.El.Ed (BTC) / 4-Year B.El.Ed / 2-Year D.Ed (Special Education).'}
                    </li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-2">
                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{language === 'hi' ? '2. पात्रता परीक्षा (TET Requirement)' : '2. TET Requirement'}</span>
                  </div>
                  <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1.5 list-disc list-inside leading-relaxed">
                    <li>
                      <strong>{language === 'hi' ? 'अनिवार्य पात्रता:' : 'Mandatory Exam:'}</strong>{' '}
                      {language === 'hi'
                        ? 'आवेदन की अंतिम तिथि तक UPTET (पेपर-1: प्राथमिक) अथवा केंद्रीय CTET (पेपर-1: प्राथमिक) उत्तीर्ण होना अनिवार्य है।'
                        : 'Must have qualified UPTET Paper-1 (Primary) OR Central CTET Paper-1 (Primary).'}
                    </li>
                    <li>
                      <strong>{language === 'hi' ? 'अंक सीमा:' : 'Passing Cutoff:'}</strong>{' '}
                      {language === 'hi'
                        ? 'सामान्य/ईडब्ल्यूएस: 60% (90/150 अंक); ओबीसी/एससी/एसटी/दिव्यांग: 55% (82/150 अंक)।'
                        : 'General/EWS: 60% (90/150); Reserved (OBC/SC/ST/PH): 55% (82/150).'}
                    </li>
                  </ul>
                </div>
              </div>

              {/* Age Criteria */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-2">
                <h4 className="font-bold text-xs uppercase text-slate-400 tracking-wider">
                  {language === 'hi' ? 'आयु सीमा एवं छूट नियम (Age Criteria)' : 'Age Limit & Relaxations'}
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  <div className="p-2.5 bg-white dark:bg-slate-900 rounded-xl">
                    <span className="text-slate-400 block text-[11px]">{language === 'hi' ? 'न्यूनतम आयु' : 'Minimum Age'}</span>
                    <span className="font-bold text-slate-900 dark:text-white text-sm">21 Years</span>
                  </div>
                  <div className="p-2.5 bg-white dark:bg-slate-900 rounded-xl">
                    <span className="text-slate-400 block text-[11px]">{language === 'hi' ? 'अनारक्षित अधिकतम' : 'General Max'}</span>
                    <span className="font-bold text-slate-900 dark:text-white text-sm">40 Years</span>
                  </div>
                  <div className="p-2.5 bg-white dark:bg-slate-900 rounded-xl">
                    <span className="text-slate-400 block text-[11px]">{language === 'hi' ? 'ओबीसी / एससी / एसटी' : 'OBC / SC / ST'}</span>
                    <span className="font-bold text-emerald-600 text-sm">45 Years (+5)</span>
                  </div>
                  <div className="p-2.5 bg-white dark:bg-slate-900 rounded-xl">
                    <span className="text-slate-400 block text-[11px]">{language === 'hi' ? 'दिव्यांगजन' : 'Divyang / PH'}</span>
                    <span className="font-bold text-blue-600 text-sm">55 Years (+15)</span>
                  </div>
                </div>
              </div>

              {/* 100-Point Selection Merit Formula (60% Written + 40% Academic) */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border border-amber-200 dark:border-amber-900 space-y-3">
                <div className="flex items-center gap-2 text-amber-700 dark:text-amber-300 font-bold text-sm">
                  <Calculator className="w-4 h-4" />
                  <span>
                    {language === 'hi'
                      ? 'अंतिम चयन मेरिट निर्धारण सूत्र (100 अंक गुणांक व्यवस्था)'
                      : 'Final Selection Merit Formula (100-Point Quality Point Score)'}
                  </span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left">
                    <thead>
                      <tr className="border-b border-amber-200 dark:border-amber-800 text-slate-500 text-[11px] uppercase">
                        <th className="py-2">{language === 'hi' ? 'घटक / परीक्षा' : 'Component'}</th>
                        <th className="py-2 text-center">{language === 'hi' ? 'वेटेज (%)' : 'Weightage (%)'}</th>
                        <th className="py-2">{language === 'hi' ? 'गणना विधि (Formula)' : 'Calculation Formula'}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-amber-100 dark:divide-amber-900/50">
                      <tr>
                        <td className="py-2 font-semibold">1. {language === 'hi' ? 'हाईस्कूल (10वीं)' : 'High School (10th)'}</td>
                        <td className="py-2 text-center font-bold text-amber-700">10%</td>
                        <td className="py-2 font-mono text-[11px]">{language === 'hi' ? 'प्राप्तांक % × 0.10' : 'Marks % × 0.10'}</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-semibold">2. {language === 'hi' ? 'इंटरमीडिएट (12वीं)' : 'Intermediate (12th)'}</td>
                        <td className="py-2 text-center font-bold text-amber-700">10%</td>
                        <td className="py-2 font-mono text-[11px]">{language === 'hi' ? 'प्राप्तांक % × 0.10' : 'Marks % × 0.10'}</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-semibold">3. {language === 'hi' ? 'स्नातक (Graduation)' : 'Graduation'}</td>
                        <td className="py-2 text-center font-bold text-amber-700">10%</td>
                        <td className="py-2 font-mono text-[11px]">{language === 'hi' ? 'प्राप्तांक % × 0.10' : 'Marks % × 0.10'}</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-semibold">4. {language === 'hi' ? 'बीटीसी / D.El.Ed प्रशिक्षण' : 'D.El.Ed / BTC Training'}</td>
                        <td className="py-2 text-center font-bold text-amber-700">10%</td>
                        <td className="py-2 font-mono text-[11px]">{language === 'hi' ? 'प्राप्तांक % × 0.10' : 'Marks % × 0.10'}</td>
                      </tr>
                      <tr className="bg-amber-100/60 dark:bg-amber-900/40">
                        <td className="py-2.5 font-bold text-slate-900 dark:text-white">5. {language === 'hi' ? 'सुपर टीईटी लिखित परीक्षा (UPESSC)' : 'Super TET Written Exam'}</td>
                        <td className="py-2.5 text-center font-black text-amber-600">60%</td>
                        <td className="py-2.5 font-mono text-[11px] font-bold text-slate-900 dark:text-white">
                          {language === 'hi' ? '(लिखित परीक्षा प्राप्तांक / 360) × 60' : '(Score in Written / 360) × 60'}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: UP TGT ELIGIBILITY */}
          {selectedExam === 'UP_TGT' && (
            <div className="space-y-5">
              {/* TGT Core Criteria */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-3">
                <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-sm">
                  <GraduationCap className="w-4 h-4" />
                  <span>{language === 'hi' ? 'यूपी टीजीटी अनिवार्य अर्हता (Classes 9–10 Teachers)' : 'UP TGT Mandatory Eligibility'}</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-xl space-y-1">
                    <span className="font-bold text-slate-900 dark:text-white block">
                      {language === 'hi' ? '1. संबंधित विषय में स्नातक' : '1. Bachelor’s in Subject'}
                    </span>
                    <p className="text-slate-500">
                      {language === 'hi'
                        ? 'संबंधित विषय में न्यूनतम 50% अंकों के साथ स्नातक उपाधि।'
                        : 'Graduation in concerned subject with minimum 50% marks.'}
                    </p>
                  </div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-xl space-y-1">
                    <span className="font-bold text-slate-900 dark:text-white block">
                      {language === 'hi' ? '2. बी.एड. (B.Ed.) अनिवार्य' : '2. B.Ed. Mandatory'}
                    </span>
                    <p className="text-slate-500">
                      {language === 'hi'
                        ? 'NCTE मान्यता प्राप्त संस्थान से बी.एड. अथवा एल.टी. डिप्लोमा धारक।'
                        : 'B.Ed. or L.T. diploma from recognized institution is mandatory.'}
                    </p>
                  </div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-xl space-y-1">
                    <span className="font-bold text-emerald-600 block">
                      {language === 'hi' ? '3. टीईटी की आवश्यकता नहीं' : '3. NO TET Needed'}
                    </span>
                    <p className="text-slate-500">
                      {language === 'hi'
                        ? 'उत्तर प्रदेश टीजीटी भर्ती परीक्षा हेतु CTET या UPTET अनिवार्य नहीं है।'
                        : 'UPTET or CTET is NOT required for UP TGT as per state rules.'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Mandatory Subject Combinations for TGT */}
              <div className="space-y-3">
                <h4 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-amber-500" />
                  <span>{language === 'hi' ? 'महत्वपूर्ण विषय संयोजन (Subject Combinations Checklist)' : 'Mandatory TGT Subject Combinations'}</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-1">
                    <span className="font-bold text-amber-700 dark:text-amber-400 block">
                      {language === 'hi' ? '📚 टीजीटी हिन्दी (TGT Hindi)' : 'TGT Hindi'}
                    </span>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {language === 'hi'
                        ? 'बी.ए. में हिन्दी विषय तथा इंटरमीडिएट (12वीं) में संस्कृत अनिवार्य अथवा बी.ए. में संस्कृत।'
                        : 'B.A. with Hindi AND Sanskrit at Intermediate (12th) level OR B.A. with Sanskrit.'}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-1">
                    <span className="font-bold text-amber-700 dark:text-amber-400 block">
                      {language === 'hi' ? '🌍 टीजीटी सामाजिक विज्ञान (Social Science)' : 'TGT Social Science'}
                    </span>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {language === 'hi'
                        ? 'बी.ए. में किन्हीं 2 विषयों का संयोजन: इतिहास, भूगोल, राजनीति शास्त्र एवं अर्थशास्त्र।'
                        : 'B.A. with any 2 of the following 4: History, Geography, Political Science, Economics.'}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-1">
                    <span className="font-bold text-amber-700 dark:text-amber-400 block">
                      {language === 'hi' ? '🔬 टीजीटी विज्ञान (TGT Science)' : 'TGT Science'}
                    </span>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {language === 'hi'
                        ? 'बी.एससी. में भौतिक विज्ञान (Physics) तथा रसायन विज्ञान (Chemistry) दोनों का अध्ययन।'
                        : 'B.Sc. with both Physics AND Chemistry.'}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-1">
                    <span className="font-bold text-amber-700 dark:text-amber-400 block">
                      {language === 'hi' ? '🧬 टीजीटी जीव विज्ञान (TGT Biology)' : 'TGT Biology'}
                    </span>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {language === 'hi'
                        ? 'बी.एससी. में जंतु विज्ञान (Zoology) तथा वनस्पति विज्ञान (Botany) दोनों का अध्ययन।'
                        : 'B.Sc. with both Zoology AND Botany.'}
                    </p>
                  </div>
                </div>
              </div>

              {/* TGT Selection Scheme Note */}
              <div className="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 text-xs text-slate-700 dark:text-slate-300 space-y-1.5">
                <span className="font-bold text-amber-900 dark:text-amber-200 block text-xs uppercase">
                  {language === 'hi' ? 'चयन प्रक्रिया (100% लिखित परीक्षा - साक्षात्कार समाप्त)' : 'Selection Process (No Interview)'}
                </span>
                <p>
                  {language === 'hi'
                    ? 'यूपी टीजीटी चयन 100% लिखित परीक्षा (120 प्रश्न, 360 अंक, 1/3 नेगेटिव मार्किंग) के आधार पर होगा। इसमें 90 प्रश्न संबंधित विषय से तथा 30 प्रश्न अनिवार्य सामान्य अध्ययन व यूपी जीके से पूछे जाते हैं। टीजीटी में कोई इंटरव्यू (साक्षात्कार) नहीं होता है।'
                    : 'Final merit is 100% based on the written examination (120 Qs, 360 Marks, 1/3 negative marking). 90 Qs are Subject-specific and 30 Qs are Compulsory General Studies & UP GK. No interview is conducted for TGT.'}
                </p>
              </div>
            </div>
          )}

          {/* TAB 3: UPTET ELIGIBILITY */}
          {selectedExam === 'UPTET' && (
            <div className="space-y-5">
              {/* UPTET Crucial Banner */}
              <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 flex items-start gap-3 text-xs">
                <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-bold text-blue-950 dark:text-blue-100 block text-sm">
                    {language === 'hi'
                      ? 'यूपीटीईटी केवल पात्रता परीक्षा है (भर्ती परीक्षा नहीं)'
                      : 'UPTET is an Eligibility Qualifying Test (Not Recruitment)'}
                  </span>
                  <p className="text-blue-900 dark:text-blue-200 leading-relaxed">
                    {language === 'hi'
                      ? 'यूपीटीईटी उत्तीर्ण करना शिक्षक बनने हेतु केवल न्यूनतम अर्हता प्रदान करता है, यह सीधी नौकरी या नियुक्ति का अधिकार नहीं देता। इसे उत्तीर्ण करने के उपरांत उम्मीदवार प्राथमिक सहायक अध्यापक भर्ती (सुपर टीईटी) चयन परीक्षा में आवेदन कर सकते हैं।'
                      : 'UPTET certifies teacher eligibility only and does not grant automatic appointment. Candidates must subsequently clear the Assistant Teacher Recruitment Examination (Super TET) to be appointed.'}
                  </p>
                </div>
              </div>

              {/* Qualifying Cutoff Marks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-2">
                  <span className="text-xs font-bold text-slate-400 uppercase block">
                    {language === 'hi' ? 'सामान्य वर्ग अर्हक अंक' : 'General / EWS Cutoff'}
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-amber-600">60%</span>
                    <span className="text-sm font-bold text-slate-700 dark:text-slate-200">(90 / 150 Marks)</span>
                  </div>
                  <p className="text-xs text-slate-500">
                    {language === 'hi'
                      ? '150 में से न्यूनतम 90 अंक प्राप्त करना अनिवार्य।'
                      : 'Must score minimum 90 out of 150 questions.'}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-2">
                  <span className="text-xs font-bold text-slate-400 uppercase block">
                    {language === 'hi' ? 'आरक्षित वर्ग अर्हक अंक (OBC/SC/ST/PH)' : 'Reserved Categories Cutoff'}
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-emerald-600">55%</span>
                    <span className="text-sm font-bold text-slate-700 dark:text-slate-200">(82 / 150 Marks)</span>
                  </div>
                  <p className="text-xs text-slate-500">
                    {language === 'hi'
                      ? '150 में से न्यूनतम 82 अंक प्राप्त करना अनिवार्य।'
                      : 'Must score minimum 82 out of 150 questions.'}
                  </p>
                </div>
              </div>

              {/* Key Features of UPTET */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-2 text-xs">
                <span className="font-bold text-slate-700 dark:text-slate-200 block text-xs uppercase">
                  {language === 'hi' ? 'यूपीटीईटी परीक्षा विशेषताएं:' : 'UPTET Key Examination Highlights:'}
                </span>
                <ul className="space-y-1.5 list-disc list-inside text-slate-600 dark:text-slate-300">
                  <li>
                    <strong>{language === 'hi' ? 'नेगेटिव मार्किंग:' : 'Negative Marking:'}</strong>{' '}
                    {language === 'hi' ? 'शून्य (कोई ऋणात्मक अंकन नहीं)' : 'Zero negative marking applicable.'}
                  </li>
                  <li>
                    <strong>{language === 'hi' ? 'प्रमाण पत्र वैधता:' : 'Certificate Validity:'}</strong>{' '}
                    {language === 'hi' ? 'आजीवन (Lifetime Validity per NCTE)' : 'Lifetime validity once qualified.'}
                  </li>
                  <li>
                    <strong>{language === 'hi' ? 'प्रयासों की संख्या:' : 'Number of Attempts:'}</strong>{' '}
                    {language === 'hi' ? 'असीमित (उम्मीदवार अंक सुधार हेतु पुनः बैठ सकते हैं)' : 'Unlimited attempts allowed.'}
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer with Actions */}
        <div className="p-5 bg-slate-50 dark:bg-slate-800/60 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href="https://upessc.up.gov.in"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-amber-600 flex items-center gap-1"
          >
            <span>{language === 'hi' ? 'आधिकारिक UPESSC पोर्टल' : 'Official UPESSC Portal'}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <Link
              to={`/syllabus/${selectedExam === 'UP_PRT' ? 'prt' : selectedExam === 'UP_TGT' ? 'tgt' : 'uptet'}`}
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-bold text-amber-700 dark:text-amber-300 bg-amber-100 dark:bg-amber-950/60 hover:bg-amber-200 text-center flex-1 sm:flex-initial transition-colors"
            >
              {language === 'hi' ? 'पाठ्यक्रम देखें →' : 'View Syllabus →'}
            </Link>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-amber-600 hover:bg-amber-700 transition-colors flex-1 sm:flex-initial cursor-pointer"
            >
              {language === 'hi' ? 'समझ आ गया (बंद करें)' : 'Got it (Close)'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
