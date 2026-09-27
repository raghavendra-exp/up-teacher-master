import React, { createContext, useContext, useState, useEffect } from 'react';
import { ExamId, LanguageMode, UserProgressData } from '../types';

interface AppContextType {
  language: LanguageMode;
  setLanguage: (lang: LanguageMode) => void;
  toggleLanguage: () => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  activeExam: ExamId;
  setActiveExam: (exam: ExamId) => void;
  progress: UserProgressData;
  toggleTopicCompletion: (topicId: string) => void;
  toggleQuestionBookmark: (questionId: string) => void;
  recordQuestionAttempt: (questionId: string, isCorrect: boolean, selectedOption: number) => void;
  recordTestResult: (result: UserProgressData['mockTestResults'][0]) => void;
  scheduleTopicRevision: (topicId: string, intervalDays?: number) => void;
  isTopicCompleted: (topicId: string) => boolean;
  isQuestionBookmarked: (questionId: string) => boolean;
  isQuestionInMistakes: (questionId: string) => boolean;
  clearProgress: () => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
}

const DEFAULT_PROGRESS: UserProgressData = {
  completedTopics: [],
  bookmarkedQuestions: [],
  mistakeQuestions: [],
  solvedQuestions: {},
  mockTestResults: [],
  streakDays: 1,
  lastStudiedDate: new Date().toISOString().split('T')[0],
  totalTimeMinutes: 45,
  revisionSchedule: []
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<LanguageMode>(() => {
    return (localStorage.getItem('up_teacher_lang') as LanguageMode) || 'hi';
  });

  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    return (localStorage.getItem('up_teacher_theme') as 'light' | 'dark') || 'light';
  });

  const [activeExam, setActiveExam] = useState<ExamId>(() => {
    return (localStorage.getItem('up_teacher_exam') as ExamId) || 'UP_PRT';
  });

  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  const [progress, setProgress] = useState<UserProgressData>(() => {
    try {
      const saved = localStorage.getItem('up_teacher_progress');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Failed to parse user progress', e);
    }
    return DEFAULT_PROGRESS;
  });

  // Apply theme to HTML
  useEffect(() => {
    localStorage.setItem('up_teacher_theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Persist language
  useEffect(() => {
    localStorage.setItem('up_teacher_lang', language);
  }, [language]);

  // Persist activeExam
  useEffect(() => {
    localStorage.setItem('up_teacher_exam', activeExam);
  }, [activeExam]);

  // Persist progress
  useEffect(() => {
    localStorage.setItem('up_teacher_progress', JSON.stringify(progress));
  }, [progress]);

  // Check and update study streak
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    if (progress.lastStudiedDate !== today) {
      const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
      const isConsecutive = progress.lastStudiedDate === yesterday;
      setProgress(prev => ({
        ...prev,
        lastStudiedDate: today,
        streakDays: isConsecutive ? prev.streakDays + 1 : 1
      }));
    }
  }, []);

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'hi' ? 'en' : 'hi'));
  };

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const toggleTopicCompletion = (topicId: string) => {
    setProgress(prev => {
      const exists = prev.completedTopics.includes(topicId);
      const updated = exists
        ? prev.completedTopics.filter(id => id !== topicId)
        : [...prev.completedTopics, topicId];
      return { ...prev, completedTopics: updated };
    });
  };

  const toggleQuestionBookmark = (questionId: string) => {
    setProgress(prev => {
      const exists = prev.bookmarkedQuestions.includes(questionId);
      const updated = exists
        ? prev.bookmarkedQuestions.filter(id => id !== questionId)
        : [...prev.bookmarkedQuestions, questionId];
      return { ...prev, bookmarkedQuestions: updated };
    });
  };

  const recordQuestionAttempt = (questionId: string, isCorrect: boolean, selectedOption: number) => {
    setProgress(prev => {
      const updatedSolved = {
        ...prev.solvedQuestions,
        [questionId]: { isCorrect, selectedOption, timestamp: Date.now() }
      };
      let updatedMistakes = [...prev.mistakeQuestions];
      if (!isCorrect && !updatedMistakes.includes(questionId)) {
        updatedMistakes.push(questionId);
      } else if (isCorrect && updatedMistakes.includes(questionId)) {
        // Can optionally remove if resolved
        updatedMistakes = updatedMistakes.filter(id => id !== questionId);
      }
      return {
        ...prev,
        solvedQuestions: updatedSolved,
        mistakeQuestions: updatedMistakes,
        totalTimeMinutes: prev.totalTimeMinutes + 1
      };
    });
  };

  const recordTestResult = (result: UserProgressData['mockTestResults'][0]) => {
    setProgress(prev => ({
      ...prev,
      mockTestResults: [result, ...prev.mockTestResults],
      totalTimeMinutes: prev.totalTimeMinutes + Math.ceil(result.timeSpentSeconds / 60)
    }));
  };

  const scheduleTopicRevision = (topicId: string, intervalDays: number = 3) => {
    setProgress(prev => {
      const nextDate = new Date(Date.now() + intervalDays * 86400000).toISOString();
      const existing = prev.revisionSchedule.filter(r => r.topicId !== topicId);
      return {
        ...prev,
        revisionSchedule: [
          ...existing,
          {
            topicId,
            nextReviewDate: nextDate,
            reviewIntervalDays: intervalDays,
            repetitionCount: 1
          }
        ]
      };
    });
  };

  const isTopicCompleted = (topicId: string) => progress.completedTopics.includes(topicId);
  const isQuestionBookmarked = (questionId: string) => progress.bookmarkedQuestions.includes(questionId);
  const isQuestionInMistakes = (questionId: string) => progress.mistakeQuestions.includes(questionId);

  const clearProgress = () => {
    if (window.confirm('Are you sure you want to reset your local study progress?')) {
      setProgress(DEFAULT_PROGRESS);
    }
  };

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        theme,
        toggleTheme,
        activeExam,
        setActiveExam,
        progress,
        toggleTopicCompletion,
        toggleQuestionBookmark,
        recordQuestionAttempt,
        recordTestResult,
        scheduleTopicRevision,
        isTopicCompleted,
        isQuestionBookmarked,
        isQuestionInMistakes,
        clearProgress,
        isSearchOpen,
        setIsSearchOpen
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
