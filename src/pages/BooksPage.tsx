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
  FileText,
  ChevronDown,
  Info,
  Sparkles,
  Compass,
  ArrowRight
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
  const [activeDirectoryTab, setActiveDirectoryTab] = useState<'all' | 'primary' | 'middle' | 'secondary' | 'senior' | 'scert'>('all');
  const [isGuideOpen, setIsGuideOpen] = useState<boolean>(true);

  const breadcrumbs = [
    { label: 'Home', hindiLabel: 'होम', href: '/' },
    { label: 'Recommended Books & NCERT', hindiLabel: 'एनसीईआरटी एवं अनुशंसित पुस्तकें', active: true }
  ];

  // NCERT & SCERT Curated Direct Directory Entries
  const DIRECTORY_ITEMS = [
    {
      id: 'prt-math',
      category: 'primary',
      title: 'Math-Magic / गणित का जादू (Classes 1–5)',
      hindiTitle: 'गणित का जादू (कक्षा 1 से 5)',
      examTarget: 'UP PRT',
      ncertUrl: 'https://ncert.nic.in/textbook.php?eemh1=0-14',
      epathshalaUrl: 'https://epathshala.ncert.gov.in/',
      dikshaUrl: 'https://diksha.gov.in/explore',
      badge: 'Classes 1–5',
      note: 'Number system, basic arithmetic, fractions, measurement, shapes & primary pedagogy.'
    },
    {
      id: 'prt-evs',
      category: 'primary',
      title: 'Looking Around / आसपास (Classes 3–5)',
      hindiTitle: 'आसपास — पर्यावरण अध्ययन (कक्षा 3 से 5)',
      examTarget: 'UP PRT',
      ncertUrl: 'https://ncert.nic.in/textbook.php?eeap1=0-24',
      epathshalaUrl: 'https://epathshala.ncert.gov.in/',
      dikshaUrl: 'https://diksha.gov.in/explore',
      badge: 'Classes 3–5',
      note: 'Direct themes on family, food, water, shelters, animals, and local environment.'
    },
    {
      id: 'prt-hindi',
      category: 'primary',
      title: 'Rimjhim / रिमझिम (Classes 1–5)',
      hindiTitle: 'रिमझिम — हिन्दी भाषा (कक्षा 1 से 5)',
      examTarget: 'UP PRT',
      ncertUrl: 'https://ncert.nic.in/textbook.php?eehn1=0-18',
      epathshalaUrl: 'https://epathshala.ncert.gov.in/',
      dikshaUrl: 'https://diksha.gov.in/explore',
      badge: 'Classes 1–5',
      note: 'Phonetics, elementary grammar, stories, poems, and vocabulary foundation.'
    },
    {
      id: 'scert-kalrav',
      category: 'scert',
      title: 'UP SCERT Kalrav / कलरव (Classes 1–5)',
      hindiTitle: 'कलरव — बेसिक शिक्षा परिषद उत्तर प्रदेश (कक्षा 1 से 5)',
      examTarget: 'UP PRT',
      ncertUrl: 'https://basiceducation.up.gov.in/',
      epathshalaUrl: 'https://diksha.gov.in/up/',
      dikshaUrl: 'https://diksha.gov.in/up/',
      badge: 'UP SCERT',
      note: 'Official parishadiya primary reader prescribed in UP Basic schools.'
    },
    {
      id: 'scert-gintara',
      category: 'scert',
      title: 'UP SCERT Gintara / गिनतारा (Classes 1–5)',
      hindiTitle: 'गिनतारा — बेसिक शिक्षा परिषद उत्तर प्रदेश (कक्षा 1 से 5)',
      examTarget: 'UP PRT',
      ncertUrl: 'https://basiceducation.up.gov.in/',
      epathshalaUrl: 'https://diksha.gov.in/up/',
      dikshaUrl: 'https://diksha.gov.in/up/',
      badge: 'UP SCERT',
      note: 'Primary mathematical foundation and local measurement methods.'
    },
    {
      id: 'scert-hamara-parivesh',
      category: 'scert',
      title: 'UP SCERT Hamara Parivesh / हमारा परिवेश (Classes 3–5)',
      hindiTitle: 'हमारा परिवेश — बेसिक शिक्षा परिषद उत्तर प्रदेश (कक्षा 3 से 5)',
      examTarget: 'UP PRT',
      ncertUrl: 'https://basiceducation.up.gov.in/',
      epathshalaUrl: 'https://diksha.gov.in/up/',
      dikshaUrl: 'https://diksha.gov.in/up/',
      badge: 'UP SCERT',
      note: 'UP-specific flora, fauna, water bodies, fairs, handicrafts & community life.'
    },
    {
      id: 'middle-science',
      category: 'middle',
      title: 'NCERT Science / विज्ञान (Classes 6–8)',
      hindiTitle: 'एनसीईआरटी विज्ञान (कक्षा 6 से 8)',
      examTarget: 'Both PRT & TGT',
      ncertUrl: 'https://ncert.nic.in/textbook.php?hesc1=0-18',
      epathshalaUrl: 'https://epathshala.ncert.gov.in/',
      dikshaUrl: 'https://diksha.gov.in/explore',
      badge: 'Classes 6–8',
      note: 'Core physical, chemical, and biological concepts essential for PRT and TGT foundation.'
    },
    {
      id: 'middle-math',
      category: 'middle',
      title: 'NCERT Mathematics / गणित (Classes 6–8)',
      hindiTitle: 'एनसीईआरटी गणित (कक्षा 6 से 8)',
      examTarget: 'Both PRT & TGT',
      ncertUrl: 'https://ncert.nic.in/textbook.php?hemh1=0-16',
      epathshalaUrl: 'https://epathshala.ncert.gov.in/',
      dikshaUrl: 'https://diksha.gov.in/explore',
      badge: 'Classes 6–8',
      note: 'Fractions, decimals, integers, simple equations, ratio-proportion, geometry & mensuration.'
    },
    {
      id: 'middle-history',
      category: 'middle',
      title: 'Our Pasts I, II, III / हमारे अतीत (Classes 6–8)',
      hindiTitle: 'हमारे अतीत भाग 1, 2, 3 — इतिहास (कक्षा 6 से 8)',
      examTarget: 'Both PRT & TGT',
      ncertUrl: 'https://ncert.nic.in/textbook.php?hess1=0-10',
      epathshalaUrl: 'https://epathshala.ncert.gov.in/',
      dikshaUrl: 'https://diksha.gov.in/explore',
      badge: 'Classes 6–8',
      note: 'Ancient, Medieval, and Modern Indian history with source-based archaeology and maps.'
    },
    {
      id: 'sec-math',
      category: 'secondary',
      title: 'NCERT Mathematics / गणित (Classes 9–10)',
      hindiTitle: 'एनसीईआरटी गणित (कक्षा 9 एवं 10)',
      examTarget: 'UP TGT',
      ncertUrl: 'https://ncert.nic.in/textbook.php?jemh1=0-15',
      epathshalaUrl: 'https://epathshala.ncert.gov.in/',
      dikshaUrl: 'https://diksha.gov.in/explore',
      badge: 'Classes 9–10',
      note: 'Polynomials, quadratic equations, trigonometry, coordinate geometry, circles, statistics & probability.'
    },
    {
      id: 'sec-science',
      category: 'secondary',
      title: 'NCERT Science / विज्ञान (Classes 9–10)',
      hindiTitle: 'एनसीईआरटी विज्ञान (कक्षा 9 एवं 10)',
      examTarget: 'UP TGT',
      ncertUrl: 'https://ncert.nic.in/textbook.php?jesc1=0-16',
      epathshalaUrl: 'https://epathshala.ncert.gov.in/',
      dikshaUrl: 'https://diksha.gov.in/explore',
      badge: 'Classes 9–10',
      note: 'Laws of motion, gravitation, electricity, magnetism, chemical reactions, acids-bases, life processes.'
    },
    {
      id: 'sec-sst',
      category: 'secondary',
      title: 'NCERT Social Science (History, Geo, Civics, Eco) Classes 9–10',
      hindiTitle: 'एनसीईआरटी सामाजिक विज्ञान (इतिहास, भूगोल, नागरिक शास्त्र, अर्थशास्त्र)',
      examTarget: 'UP TGT',
      ncertUrl: 'https://ncert.nic.in/textbook.php?jess1=0-5',
      epathshalaUrl: 'https://epathshala.ncert.gov.in/',
      dikshaUrl: 'https://diksha.gov.in/explore',
      badge: 'Classes 9–10',
      note: 'India and the Contemporary World, Democratic Politics, Contemporary India, Understanding Economics.'
    },
    {
      id: 'sr-polity',
      category: 'senior',
      title: 'Indian Constitution at Work / भारत का संविधान (Class 11)',
      hindiTitle: 'भारत का संविधान: सिद्धांत और व्यवहार (कक्षा 11)',
      examTarget: 'Both PRT & TGT',
      ncertUrl: 'https://ncert.nic.in/textbook.php?keps2=0-10',
      epathshalaUrl: 'https://epathshala.ncert.gov.in/',
      dikshaUrl: 'https://diksha.gov.in/explore',
      badge: 'Class 11',
      note: 'Preamble, Fundamental Rights, Directive Principles, Executive, Parliament, Judiciary & Federalism.'
    },
    {
      id: 'sr-history',
      category: 'senior',
      title: 'Themes in Indian History / भारतीय इतिहास के कुछ विषय (Classes 11–12)',
      hindiTitle: 'भारतीय इतिहास के कुछ विषय भाग 1, 2, 3 (कक्षा 11 एवं 12)',
      examTarget: 'UP TGT',
      ncertUrl: 'https://ncert.nic.in/textbook.php?lehs1=0-4',
      epathshalaUrl: 'https://epathshala.ncert.gov.in/',
      dikshaUrl: 'https://diksha.gov.in/explore',
      badge: 'Classes 11–12',
      note: 'Harappan civilization, Bhakti-Sufi traditions, Mughal courts, 1857 Revolt, Mahatma Gandhi & Constitution.'
    },
    {
      id: 'sr-physics',
      category: 'senior',
      title: 'NCERT Physics / भौतिकी (Classes 11–12)',
      hindiTitle: 'एनसीईआरटी भौतिक विज्ञान (कक्षा 11 एवं 12)',
      examTarget: 'UP TGT',
      ncertUrl: 'https://ncert.nic.in/textbook.php?keph1=0-8',
      epathshalaUrl: 'https://epathshala.ncert.gov.in/',
      dikshaUrl: 'https://diksha.gov.in/explore',
      badge: 'Classes 11–12',
      note: 'Mechanics, thermodynamics, wave optics, electrostatics, current electricity & modern physics.'
    },
    {
      id: 'sr-math',
      category: 'senior',
      title: 'NCERT Mathematics / गणित (Classes 11–12)',
      hindiTitle: 'एनसीईआरटी गणित (कक्षा 11 एवं 12)',
      examTarget: 'UP TGT',
      ncertUrl: 'https://ncert.nic.in/textbook.php?lemh1=0-6',
      epathshalaUrl: 'https://epathshala.ncert.gov.in/',
      dikshaUrl: 'https://diksha.gov.in/explore',
      badge: 'Classes 11–12',
      note: 'Sets, relations & functions, limits, derivatives, integrals, differential equations, vectors & 3D geometry.'
    }
  ];

  const filteredDirectory = DIRECTORY_ITEMS.filter(item => {
    if (activeDirectoryTab === 'all') return true;
    return item.category === activeDirectoryTab;
  });

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
                {language === 'hi' ? '100% सत्यापित आधिकारिक लिंक' : '100% Verified Official Links'}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {language === 'hi'
                ? 'अनुशंसित पुस्तकें एवं एनसीईआरटी सीधी पहुँच हब'
                : 'Recommended Books & Direct NCERT Access Hub'}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl leading-relaxed">
              {language === 'hi'
                ? 'आधिकारिक ई-पाठशाला, एनसीईआरटी एवं दीक्षा पोर्टलों के सीधे एवं सत्यापित लिंक। कक्षा 1 से 12 तक की सभी पाठ्यपुस्तकें और मानक संदर्भ साहित्य।'
                : 'Verified direct access links to ePathshala, NCERT, and DIKSHA cloud portals alongside comprehensive reviews of competitive reference books.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <a
              href="https://epathshala.ncert.gov.in"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 flex items-center gap-2 shadow-sm transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>{language === 'hi' ? 'ई-पाठशाला पोर्टल' : 'ePathshala Cloud Portal'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://ncert.nic.in/textbook.php"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-amber-600 hover:bg-amber-700 flex items-center gap-2 shadow-sm transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>{language === 'hi' ? 'एनसीईआरटी पोर्टल' : 'NCERT Portal'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 4 Official Verified Pillars Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
          <a
            href="https://epathshala.ncert.gov.in"
            target="_blank"
            rel="noreferrer"
            className="p-3.5 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/60 hover:border-emerald-400 transition-all group"
          >
            <div className="flex items-center justify-between text-xs font-bold text-emerald-800 dark:text-emerald-300">
              <span>ई-पाठशाला (ePathshala)</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
            <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1">
              {language === 'hi'
                ? 'शिक्षा मंत्रालय व NCERT का क्लाउड पोर्टल — तेज़ फ्लिपबुक्स एवं मोबाइल ऐप'
                : 'Ministry of Education & NCERT Cloud — Fast flipbooks & chapter PDFs'}
            </p>
          </a>

          <a
            href="https://ncert.nic.in/textbook.php"
            target="_blank"
            rel="noreferrer"
            className="p-3.5 rounded-2xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60 hover:border-amber-400 transition-all group"
          >
            <div className="flex items-center justify-between text-xs font-bold text-amber-800 dark:text-amber-300">
              <span>एनसीईआरटी केंद्रीय पोर्टल</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
            <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1">
              {language === 'hi'
                ? 'कक्षा 1 से 12 तक की संपूर्ण पाठ्यपुस्तक ज़िप (ZIP) एवं अध्यायवार पीडीएफ'
                : 'Complete textbook ZIP files & individual chapter PDFs (Classes 1–12)'}
            </p>
          </a>

          <a
            href="https://diksha.gov.in/explore"
            target="_blank"
            rel="noreferrer"
            className="p-3.5 rounded-2xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/60 hover:border-blue-400 transition-all group"
          >
            <div className="flex items-center justify-between text-xs font-bold text-blue-800 dark:text-blue-300">
              <span>दीक्षा (DIKSHA) राष्ट्रीय पोर्टल</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
            <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1">
              {language === 'hi'
                ? 'क्यूआर कोड सक्षम डिजिटल पाठ्यपुस्तकें एवं वीडियो पाठ'
                : 'QR-enabled interactive textbooks and multimedia lesson modules'}
            </p>
          </a>

          <a
            href="https://diksha.gov.in/up/"
            target="_blank"
            rel="noreferrer"
            className="p-3.5 rounded-2xl bg-purple-50/60 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-900/60 hover:border-purple-400 transition-all group"
          >
            <div className="flex items-center justify-between text-xs font-bold text-purple-800 dark:text-purple-300">
              <span>उत्तर प्रदेश बेसिक परिषद (DIKSHA UP)</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
            <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1">
              {language === 'hi'
                ? 'कलरव, गिनतारा, हमारा परिवेश आदि यूपी परिषदीय पाठ्यपुस्तकें'
                : 'Official UP SCERT Parishadiya textbooks (Kalrav, Gintara, Hamara Parivesh)'}
            </p>
          </a>
        </div>
      </div>

      {/* Step-by-Step Interactive Guide: How to Download from NCERT Portal */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs">
        <button
          type="button"
          onClick={() => setIsGuideOpen(!isGuideOpen)}
          className="w-full p-4 sm:p-5 flex items-center justify-between text-left hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 flex items-center justify-center font-bold">
              <Info className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                {language === 'hi'
                  ? 'एनसीईआरटी पोर्टल से पुस्तक डाउनलोड करने की सरल 3-चरणीय विधि'
                  : 'How to Download Any Textbook from the Official NCERT Portal (3 Simple Steps)'}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {language === 'hi'
                  ? 'यदि सीधा लिंक खोलने पर केवल ड्रॉपडाउन दिखे, तो इन चरणों का पालन करें'
                  : 'Follow these steps to download chapter-by-chapter or the complete textbook ZIP'}
              </p>
            </div>
          </div>
          <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${isGuideOpen ? 'rotate-180' : ''}`} />
        </button>

        {isGuideOpen && (
          <div className="px-5 pb-5 pt-1 border-t border-slate-100 dark:border-slate-800/80">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 space-y-1">
                <span className="px-2 py-0.5 rounded-md bg-amber-600 text-white font-bold text-[10px]">चरण 1 (Step 1)</span>
                <h4 className="font-bold text-xs text-slate-800 dark:text-slate-200 mt-1">पोर्टल खोलें</h4>
                <p className="text-[11px] text-slate-600 dark:text-slate-400">
                  <a href="https://ncert.nic.in/textbook.php" target="_blank" rel="noreferrer" className="text-amber-600 font-bold hover:underline">ncert.nic.in/textbook.php</a> या <a href="https://epathshala.ncert.gov.in" target="_blank" rel="noreferrer" className="text-emerald-600 font-bold hover:underline">epathshala.ncert.gov.in</a> खोलें।
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 space-y-1">
                <span className="px-2 py-0.5 rounded-md bg-amber-600 text-white font-bold text-[10px]">चरण 2 (Step 2)</span>
                <h4 className="font-bold text-xs text-slate-800 dark:text-slate-200 mt-1">कक्षा, विषय व पुस्तक चुनें</h4>
                <p className="text-[11px] text-slate-600 dark:text-slate-400">
                  Select Class (उदा. Class X), Select Subject (उदा. Mathematics), और Book Title चुनकर 'Go' बटन पर क्लिक करें।
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 space-y-1">
                <span className="px-2 py-0.5 rounded-md bg-emerald-600 text-white font-bold text-[10px]">चरण 3 (Step 3)</span>
                <h4 className="font-bold text-xs text-slate-800 dark:text-slate-200 mt-1">अध्याय या पूरी पुस्तक डाउनलोड करें</h4>
                <p className="text-[11px] text-slate-600 dark:text-slate-400">
                  बाएं पैनल पर अध्याय पर क्लिक करके तुरंत पीडीएफ पढ़ें, या नीचे दिए 'Download Complete Book' लिंक से पूरी किताब ज़िप में डाउनलोड करें।
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Class-wise Direct Subject Directory */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-amber-600 dark:text-amber-400 mb-0.5">
              <Sparkles className="w-4 h-4" />
              <span>{language === 'hi' ? 'सीधे विषयवार लिंक्स' : 'Direct Subject Directory'}</span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
              {language === 'hi' ? 'कक्षावार एवं विषयवार सीधे पाठ्यपुस्तक लिंक्स' : 'Class-wise & Subject-wise Direct Textbook Directory'}
            </h2>
          </div>

          {/* Directory Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
            {[
              { id: 'all', label: 'सभी (All)' },
              { id: 'primary', label: 'प्राथमिक 1–5 (PRT)' },
              { id: 'middle', label: 'उच्च प्राथमिक 6–8' },
              { id: 'secondary', label: 'माध्यमिक 9–10 (TGT)' },
              { id: 'senior', label: 'उच्च माध्यमिक 11–12' },
              { id: 'scert', label: 'UP SCERT परिषदीय' }
            ].map(tab => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveDirectoryTab(tab.id as any)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
                  activeDirectoryTab === tab.id
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-amber-100 dark:hover:bg-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredDirectory.map(item => (
            <div
              key={item.id}
              className="p-4 rounded-2xl bg-slate-50/60 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700/60 flex flex-col justify-between space-y-3"
            >
              <div>
                <div className="flex items-center justify-between gap-1 mb-1.5">
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300">
                    {item.badge}
                  </span>
                  <span className="text-[10px] font-semibold text-slate-400">
                    {item.examTarget}
                  </span>
                </div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white leading-snug">
                  {language === 'hi' ? item.hindiTitle : item.title}
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                  {item.note}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-200/60 dark:border-slate-700/60 flex flex-wrap items-center gap-1.5">
                <a
                  href={item.epathshalaUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-2.5 py-1 rounded-lg text-[11px] font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-100/70 dark:bg-emerald-950 hover:bg-emerald-200 transition-colors flex items-center gap-1"
                  title="Open on ePathshala / DIKSHA cloud"
                >
                  <span>{item.category === 'scert' ? 'DIKSHA UP' : 'ePathshala'}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <a
                  href={item.ncertUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-2.5 py-1 rounded-lg text-[11px] font-bold text-white bg-amber-600 hover:bg-amber-700 transition-colors flex items-center gap-1 shadow-2xs"
                  title="Open on NCERT Portal / Basic Education"
                >
                  <span>{item.category === 'scert' ? 'बेसिक शिक्षा' : 'NCERT Portal'}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Filter Engine (Section 39) */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300">
            <Filter className="w-4 h-4 text-amber-500" />
            <span>{language === 'hi' ? 'समग्र पुस्तक अनुशंसा सूची एवं समीक्षा:' : 'Comprehensive Book Recommendations & Reviews:'}</span>
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
              {language === 'hi' ? 'परीक्षा' : 'Exam Target'}
            </label>
            <select
              value={selectedExam}
              onChange={e => setSelectedExam(e.target.value)}
              className="w-full p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-200 font-medium"
            >
              <option value="All">All Exams (सभी)</option>
              <option value="UP PRT">UP PRT (प्राथमिक)</option>
              <option value="UP TGT">UP TGT (माध्यमिक)</option>
            </select>
          </div>

          {/* Level Filter */}
          <div>
            <label className="text-[10px] text-slate-400 font-semibold block mb-1">
              {language === 'hi' ? 'कठिनाई स्तर' : 'Difficulty Level'}
            </label>
            <select
              value={selectedLevel}
              onChange={e => setSelectedLevel(e.target.value)}
              className="w-full p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-200 font-medium"
            >
              <option value="All">All Levels (सभी स्तर)</option>
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
                  {book.id === 'ramchandra-shukla-hindi'
                    ? 'Public Domain Archive Book'
                    : book.isNcertOrScert
                    ? 'Official Textbook'
                    : 'Reference Book'}
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
            <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2">
              <span className="text-[11px] text-slate-400">
                {book.isNcertOrScert ? 'Official Open Resource' : 'Publisher Reference'}
              </span>

              <div className="flex flex-wrap items-center gap-1.5">
                {book.isNcertOrScert ? (
                  <>
                    <a
                      href="https://epathshala.ncert.gov.in"
                      target="_blank"
                      rel="noreferrer"
                      className="px-2.5 py-1.5 rounded-xl text-xs font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 transition-colors flex items-center gap-1"
                      title="Open on ePathshala Cloud Portal"
                    >
                      <span>ePathshala</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <a
                      href={book.downloadUrl || book.officialOrRefLink}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors flex items-center gap-1.5 shadow-xs"
                    >
                      <span>
                        {book.id.startsWith('scert') || book.id.includes('deled')
                          ? (language === 'hi' ? 'दीक्षा UP पोर्टल' : 'DIKSHA UP Portal')
                          : book.id === 'ramchandra-shukla-hindi'
                          ? (language === 'hi' ? 'मुफ्त डिजिटल पुस्तक (Archive)' : 'Read on Archive')
                          : (language === 'hi' ? 'एनसीईआरटी पोर्टल' : 'NCERT Portal')}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </>
                ) : (
                  <a
                    href={book.officialOrRefLink}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 transition-colors flex items-center gap-1.5"
                  >
                    <span>{language === 'hi' ? 'प्रकाशक आधिकारिक विवरण' : 'Publisher Catalog'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
