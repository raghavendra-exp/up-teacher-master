export type ExamId = 'UP_PRT' | 'UP_TGT' | 'UPTET';

export type LanguageMode = 'en' | 'hi';

export type QuestionDifficulty = 'easy' | 'medium' | 'hard';

export type QuestionType =
  | 'mcq'
  | 'assertion_reason'
  | 'statement_based'
  | 'match_following'
  | 'numerical'
  | 'conceptual'
  | 'case_based';

export type NotificationStatus =
  | 'UPCOMING'
  | 'OPEN'
  | 'CLOSED'
  | 'EXAM CONDUCTED'
  | 'RESULT OUT';

export interface ExamInfo {
  id: ExamId;
  name: string;
  hindiName: string;
  tagline: string;
  hindiTagline: string;
  conductingBody: string;
  totalQuestions: number;
  totalMarks: number;
  durationMinutes: number;
  markingScheme: {
    correct: number;
    incorrect: number;
    unattempted: number;
  };
  eligibility: {
    education: string;
    hindiEducation: string;
    ageLimit: string;
    otherCriteria: string;
  };
  officialWebsite: string;
  officialNotificationUrl?: string;
  isVerifiedOfficial: boolean;
  verificationDate: string;
  overview: string;
  hindiOverview: string;
  sections: {
    name: string;
    hindiName: string;
    questions: number;
    marks: number;
    weightagePercent: number;
  }[];
}

export interface SyllabusTopic {
  id: string;
  name: string;
  hindiName: string;
  description: string;
  hindiDescription?: string;
  subtopics: string[];
  ncertMapping?: {
    classes: number[];
    subjects: string[];
    chapterNames: string[];
    portalLink: string;
  };
  scertMapping?: {
    classes: number[];
    bookName: string;
    chapterName: string;
  };
  difficulty: QuestionDifficulty;
  importance: 'High' | 'Medium' | 'Low';
  estimatedHours: number;
  keyFormulasOrFacts?: string[];
}

export interface SyllabusChapter {
  id: string;
  name: string;
  hindiName: string;
  weightageEstimated: string;
  topics: SyllabusTopic[];
}

export interface SyllabusSection {
  id: string;
  name: string;
  hindiName: string;
  subjectId: string;
  questionCount: number;
  marks: number;
  chapters: SyllabusChapter[];
}

export interface ExamSyllabus {
  examId: ExamId;
  version: string;
  lastVerified: string;
  sourceType: 'Official' | 'Secondary';
  sourceTitle: string;
  sourceUrl: string;
  isCurrent: boolean;
  status: 'CURRENT' | 'ARCHIVED';
  whatChanged: string;
  hindiWhatChanged: string;
  sections: SyllabusSection[];
}

export interface SubjectItem {
  id: string;
  name: string;
  hindiName: string;
  iconName: string;
  category: 'Language' | 'Core Science & Math' | 'Social Studies' | 'Pedagogy & Psychology' | 'General & Aptitude' | 'TGT Specialist';
  examsApplicable: ExamId[];
  overview: string;
  hindiOverview: string;
  totalChapters: number;
  totalTopics: number;
  recommendedNCERT: string;
  ncertDownloadLink: string;
  recommendedSCERT: string;
}

export interface BookItem {
  id: string;
  title: string;
  hindiTitle?: string;
  author: string;
  publisher: string;
  subject: string;
  exam: 'UP PRT' | 'UP TGT' | 'UPTET' | 'Both PRT & TGT';
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  language: 'Hindi' | 'English' | 'Bilingual';
  purpose: 'Concept Building' | 'Practice' | 'PYQ' | 'Revision' | 'Comprehensive';
  topicsCovered: string[];
  bestUse: string;
  limitations: string;
  officialOrRefLink: string;
  isNcertOrScert: boolean;
  downloadUrl?: string;
}

export interface QuestionItem {
  id: string;
  exam: ExamId | 'ALL';
  subject: string;
  chapter: string;
  topic: string;
  subtopic?: string;
  difficulty: QuestionDifficulty;
  questionType: QuestionType;
  question: string;
  hindiQuestion: string;
  options: [string, string, string, string];
  hindiOptions: [string, string, string, string];
  answer: number; // 0, 1, 2, or 3
  explanation: string;
  hindiExplanation: string;
  sourceType: 'original' | 'pyq';
  pyqDetails?: {
    examName: string;
    year: number;
    paper?: string;
    officialAnswerKeyRef?: string;
  };
  tags: string[];
}

export interface CurrentAffairItem {
  id: string;
  title: string;
  hindiTitle: string;
  date: string;
  category: 'India' | 'Uttar Pradesh' | 'World' | 'Education' | 'Government Schemes' | 'Economy' | 'Science & Tech' | 'Environment' | 'Awards' | 'Sports' | 'Appointments';
  summary: string;
  hindiSummary: string;
  examSignificance: string;
  hindiExamSignificance: string;
  examFacts: string[];
  hindiExamFacts: string[];
  mcqs: {
    question: string;
    hindiQuestion: string;
    options: [string, string, string, string];
    hindiOptions: [string, string, string, string];
    answer: number;
    explanation: string;
  }[];
  source: string;
  originalPublicationDate: string;
}

export interface NotificationCardItem {
  id: string;
  title: string;
  hindiTitle: string;
  exam: string;
  conductingBody: string;
  releaseDate: string;
  applicationStart: string;
  applicationLastDate: string;
  examDate: string;
  admitCardDate: string;
  answerKeyDate: string;
  resultDate: string;
  status: NotificationStatus;
  officialNoticeUrl: string;
  officialPortalUrl: string;
  isOfficialVerified: boolean;
  notes: string;
  hindiNotes: string;
}

export interface UPGKTopicItem {
  id: string;
  title: string;
  hindiTitle: string;
  category:
    | 'History & Freedom Movement'
    | 'Geography, Rivers & Wildlife'
    | 'Administrative & Districts'
    | 'Culture, Art, Music & Fairs'
    | 'Economy & Agriculture'
    | 'Major UP Schemes'
    | 'State Symbols & Quick Facts';
  content: string;
  hindiContent: string;
  keyPoints: string[];
  hindiKeyPoints: string[];
  oneLiners: { en: string; hi: string }[];
  flashcards: { front: string; back: string; hindiFront: string; hindiBack: string }[];
}

export interface TipAndTrickItem {
  id: string;
  subject: string;
  chapter: string;
  title: string;
  hindiTitle: string;
  category: 'Concept Shortcut' | 'Memory Mnemonic' | 'Formula Trick' | 'Elimination Technique' | 'Common Trap';
  description: string;
  hindiDescription: string;
  example: string;
  hindiExample: string;
  formulaOrRule?: string;
  examApplicability: string;
}

export interface OfficialResourceItem {
  id: string;
  title: string;
  hindiTitle: string;
  category: 'Commission & Dept' | 'Curriculum & Boards' | 'NCERT & ePathshala' | 'Digital Initiatives';
  organization: string;
  url: string;
  description: string;
  hindiDescription: string;
  directLinks?: { label: string; url: string; classRange?: string }[];
}

export interface UserProgressData {
  completedTopics: string[]; // topic IDs
  bookmarkedQuestions: string[]; // question IDs
  mistakeQuestions: string[]; // question IDs of incorrectly answered questions
  solvedQuestions: Record<string, { isCorrect: boolean; selectedOption: number; timestamp: number }>;
  mockTestResults: {
    id: string;
    testTitle: string;
    exam: ExamId;
    date: string;
    score: number;
    totalMarks: number;
    correctCount: number;
    incorrectCount: number;
    unattemptedCount: number;
    timeSpentSeconds: number;
    accuracy: number;
    subjectWiseScores: Record<string, { correct: number; total: number }>;
  }[];
  streakDays: number;
  lastStudiedDate: string;
  totalTimeMinutes: number;
  revisionSchedule: {
    topicId: string;
    nextReviewDate: string; // ISO string
    reviewIntervalDays: number; // 1, 3, 7, 15, 30
    repetitionCount: number;
  }[];
}
