import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  X,
  BookOpen,
  CheckCircle2,
  Search,
  ArrowRight,
  ExternalLink,
  GraduationCap,
  Sparkles,
  Award
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { SUBJECTS_DATA } from '../data/subjects';

interface SubjectSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SubjectSelectorModal: React.FC<SubjectSelectorModalProps> = ({
  isOpen,
  onClose
}) => {
  const { language, setActiveExam, selectedTgtSubject, setSelectedTgtSubject } = useApp();
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  if (!isOpen) return null;

  // Filter subjects applicable to UP_TGT
  const tgtSubjects = SUBJECTS_DATA.filter(s =>
    s.examsApplicable.includes('UP_TGT') &&
    (s.name.toLowerCase().includes(search.toLowerCase()) ||
     s.hindiName.toLowerCase().includes(search.toLowerCase()) ||
     s.overview.toLowerCase().includes(search.toLowerCase()))
  );

  const handleSelectSubject = (subjectId: string, subjectName: string) => {
    setActiveExam('UP_TGT');
    setSelectedTgtSubject(subjectId);
    onClose();
    navigate(`/subjects/${subjectId}`);
  };

  const handlePracticeDirect = (subjectId: string, subjectName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveExam('UP_TGT');
    setSelectedTgtSubject(subjectId);
    onClose();
    navigate(`/practice?subject=${encodeURIComponent(subjectName)}`);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-slate-900 w-full max-w-4xl rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-6 transition-all"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-orange-600 to-amber-600 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/15 backdrop-blur-xs flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-white text-orange-700 uppercase">
                  UP TGT Classes 9–10
                </span>
                <span className="text-xs text-orange-100">90 Qs Subject Specialization</span>
              </div>
              <h2 className="text-lg sm:text-xl font-black mt-0.5">
                {language === 'hi'
                  ? 'अपना टीजीटी मुख्य विषय (Discipline) चुनें'
                  : 'Select Your TGT Subject Specialization'}
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search & Instruction Bar */}
        <div className="p-4 bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-600 dark:text-slate-300">
            {language === 'hi'
              ? 'टीजीटी में 90 प्रश्न आपके चुने हुए मुख्य विषय से और 30 प्रश्न अनिवार्य सामान्य अध्ययन से पूछे जाएंगे:'
              : 'The TGT exam consists of 90 questions from your chosen discipline + 30 compulsory General Studies questions:'}
          </p>

          <div className="flex items-center gap-2 bg-white dark:bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 shrink-0" />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder={language === 'hi' ? 'विषय खोजें...' : 'Filter discipline...'}
              className="w-full bg-transparent text-xs text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-hidden"
            />
          </div>
        </div>

        {/* Subjects Grid */}
        <div className="p-5 sm:p-6 max-h-[65vh] overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {tgtSubjects.map(sub => {
              const isSelected = selectedTgtSubject === sub.id;
              return (
                <div
                  key={sub.id}
                  onClick={() => handleSelectSubject(sub.id, sub.name)}
                  className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between group ${
                    isSelected
                      ? 'border-orange-500 bg-orange-50/40 dark:bg-orange-950/30 shadow-md ring-2 ring-orange-500/20'
                      : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-amber-400'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400">
                        {sub.category}
                      </span>
                      {isSelected && (
                        <span className="flex items-center gap-1 text-[10px] font-bold text-white bg-orange-600 px-2 py-0.5 rounded-full">
                          <CheckCircle2 className="w-3 h-3" />
                          {language === 'hi' ? 'चयनित' : 'Active'}
                        </span>
                      )}
                    </div>

                    <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white group-hover:text-orange-600 transition-colors">
                      {language === 'hi' ? sub.hindiName : sub.name}
                    </h3>

                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                      {language === 'hi' ? sub.hindiOverview : sub.overview}
                    </p>

                    <div className="text-[11px] text-slate-400 pt-1">
                      {sub.totalChapters} {language === 'hi' ? 'अध्याय' : 'Chapters'} • {sub.totalTopics} {language === 'hi' ? 'टॉपिक्स' : 'Topics'}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                    <button
                      onClick={e => handlePracticeDirect(sub.id, sub.name, e)}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                    >
                      {language === 'hi' ? 'अभ्यास करें' : 'Practice MCQs'}
                    </button>
                    <span className="text-xs font-bold text-orange-600 dark:text-orange-400 flex items-center gap-1 group-hover:gap-1.5 transition-all">
                      <span>{language === 'hi' ? 'अध्याय खोलें' : 'Open Notes'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 dark:bg-slate-800/60 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
          <span className="text-slate-500">
            {language === 'hi'
              ? 'सभी 15+ टीजीटी विषयों के विस्तृत नोट्स एवं एनसीईआरटी उपलब्ध हैं'
              : 'All 15+ TGT disciplines covered with verified syllabus trees'}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold hover:bg-slate-300 transition-colors cursor-pointer"
          >
            {language === 'hi' ? 'बंद करें' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
