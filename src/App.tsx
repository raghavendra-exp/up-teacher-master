import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { GlobalSearchModal } from './components/GlobalSearchModal';

import { EligibilityModal } from './components/EligibilityModal';
import { SubjectSelectorModal } from './components/SubjectSelectorModal';
import { useApp } from './context/AppContext';

import { HomePage } from './pages/HomePage';
import { ExamsPage } from './pages/ExamsPage';
import { SyllabusPage } from './pages/SyllabusPage';
import { SubjectsPage } from './pages/SubjectsPage';
import { SubjectDetailPage } from './pages/SubjectDetailPage';
import { BooksPage } from './pages/BooksPage';
import { PracticePage } from './pages/PracticePage';
import { PYQsPage } from './pages/PYQsPage';
import { MockTestsPage } from './pages/MockTestsPage';
import { CurrentAffairsPage } from './pages/CurrentAffairsPage';
import { UPGKPage } from './pages/UPGKPage';
import { NotificationsPage } from './pages/NotificationsPage';
import { TipsTricksPage } from './pages/TipsTricksPage';
import { ProgressDashboardPage } from './pages/ProgressDashboardPage';
import { OfficialResourcesPage } from './pages/OfficialResourcesPage';
import { CoverageDashboardPage } from './pages/CoverageDashboardPage';
import { LearningPathPage } from './pages/LearningPathPage';

function AppShell() {
  const {
    isEligibilityModalOpen,
    eligibilityModalExam,
    closeEligibilityModal,
    isSubjectSelectorOpen,
    closeSubjectSelector
  } = useApp();

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
        <Navbar />
        <GlobalSearchModal />
        <EligibilityModal
          isOpen={isEligibilityModalOpen}
          onClose={closeEligibilityModal}
          defaultExam={eligibilityModalExam}
        />
        <SubjectSelectorModal
          isOpen={isSubjectSelectorOpen}
          onClose={closeSubjectSelector}
        />

        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/exams" element={<ExamsPage />} />
            <Route path="/exams/:examId" element={<ExamsPage />} />
            <Route path="/syllabus" element={<SyllabusPage />} />
            <Route path="/syllabus/:examType" element={<SyllabusPage />} />
            <Route path="/subjects" element={<SubjectsPage />} />
            <Route path="/subjects/:subjectId" element={<SubjectDetailPage />} />
            <Route path="/books" element={<BooksPage />} />
            <Route path="/practice" element={<PracticePage />} />
            <Route path="/pyqs" element={<PYQsPage />} />
            <Route path="/tests" element={<MockTestsPage />} />
            <Route path="/current-affairs" element={<CurrentAffairsPage />} />
            <Route path="/up-gk" element={<UPGKPage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/tips" element={<TipsTricksPage />} />
            <Route path="/progress" element={<ProgressDashboardPage />} />
            <Route path="/resources" element={<OfficialResourcesPage />} />
            <Route path="/coverage" element={<CoverageDashboardPage />} />
            <Route path="/learning-path" element={<LearningPathPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        <Footer />
        <MobileBottomNav />
      </div>
    </Router>
  );
}

export function App() {
  return (
    <AppProvider>
      <AppShell />
    </AppProvider>
  );
}

export default App;
