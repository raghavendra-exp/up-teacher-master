export interface LearningLevel {
  levelNumber: number;
  levelName: string;
  hindiLevelName: string;
  badge: string;
  description: string;
  hindiDescription: string;
  targetOutcome: string;
  hindiTargetOutcome: string;
  recommendedResources: string[];
  tasks: {
    id: string;
    title: string;
    hindiTitle: string;
    actionType: 'read' | 'notes' | 'practice' | 'pyq' | 'test' | 'revision';
    targetRoute: string;
  }[];
}

export const ZERO_TO_MASTER_PATH: LearningLevel[] = [
  {
    levelNumber: 1,
    levelName: 'LEVEL 1 — FOUNDATION (नींव निर्माण)',
    hindiLevelName: 'स्तर 1 — आधारभूत समझ (फाउंडेशन)',
    badge: 'Foundation',
    description: 'Establish foundational conceptual understanding from NCERT and SCERT primary/secondary textbooks without speed pressure.',
    hindiDescription: 'एनसीईआरटी और एससीईआरटी पाठ्यपुस्तकों से विषय की आधारभूत अवधारणाओं का स्पष्ट ज्ञान प्राप्त करना।',
    targetOutcome: 'Master 100% of core definitions, terminology, and foundational facts.',
    hindiTargetOutcome: 'सभी मूल परिभाषाओं, शब्दावलियों और आधारभूत तथ्यों पर शत-प्रतिशत पकड़।',
    recommendedResources: ['NCERT Classes 3 to 10 Textbooks', 'UP SCERT Kalrav & Hamara Parivesh', 'Official Resource Hub'],
    tasks: [
      { id: 'task-1-1', title: 'Download & skim NCERT Mathematics / EVS chapters', hindiTitle: 'एनसीईआरटी गणित व पर्यावरण के अध्याय डाउनलोड करें', actionType: 'read', targetRoute: '/books' },
      { id: 'task-1-2', title: 'Review UP Primary Assistant Teacher official syllabus', hindiTitle: 'सहायक अध्यापक भर्ती परीक्षा के आधिकारिक पाठ्यक्रम की समीक्षा', actionType: 'read', targetRoute: '/syllabus/prt' },
      { id: 'task-1-3', title: 'Attempt 10-Question Untimed Concept Diagnostic Quiz', hindiTitle: '10 प्रश्नों का बिना समय सीमा वाला अवधारणात्मक टेस्ट दें', actionType: 'practice', targetRoute: '/practice' }
    ]
  },
  {
    levelNumber: 2,
    levelName: 'LEVEL 2 — BASIC CONCEPTS (मूल अवधारणाएं)',
    hindiLevelName: 'स्तर 2 — विषयवार बुनियादी समझ',
    badge: 'Basic',
    description: 'Transition from general school textbooks to exam-oriented topic notes: Varnamala, Number System, Ecosystem, Thinkers.',
    hindiDescription: 'वर्णमाला, संख्या पद्धति, पारिस्थितिकी तंत्र एवं प्रमुख मनोवैज्ञानिकों के सिद्धांतों का क्रमबद्ध अध्ययन।',
    targetOutcome: 'Solve standard level 1 textbook problems with 90%+ accuracy.',
    hindiTargetOutcome: 'स्तर 1 के मानक अभ्यास प्रश्नों को 90% से अधिक शुद्धता से हल करना।',
    recommendedResources: ['Subject Explorer Modules', 'Concept Notes & Formula Sheets'],
    tasks: [
      { id: 'task-2-1', title: 'Study Hindi Sandhi & Samas identification rules', hindiTitle: 'हिन्दी संधि एवं समास के भेद और नियमों का अध्ययन', actionType: 'notes', targetRoute: '/subjects/hindi' },
      { id: 'task-2-2', title: 'Master arithmetic divisibility rules and HCF-LCM methods', hindiTitle: 'विभाज्यता के नियम तथा ल.स.-म.स. के सूत्रों का अभ्यास', actionType: 'notes', targetRoute: '/subjects/mathematics' },
      { id: 'task-2-3', title: 'Review Piaget 4 Cognitive Stages & Vygotsky ZPD concept', hindiTitle: 'पियाजे के 4 चरण और वाइगोत्स्की के ZPD सिद्धांत का अध्ययन', actionType: 'notes', targetRoute: '/subjects/child-development' }
    ]
  },
  {
    levelNumber: 3,
    levelName: 'LEVEL 3 — INTERMEDIATE MASTERY (मध्यम स्तर अभ्यास)',
    hindiLevelName: 'स्तर 3 — बहुविकल्पीय प्रश्न एवं गति निर्माण',
    badge: 'Intermediate',
    description: 'Solve topic-wise objective MCQs, understand options elimination, and build systematic note cards.',
    hindiDescription: 'विषयवार वस्तुनिष्ठ प्रश्नों का अभ्यास, ऑप्शन्स एलिमिनेशन विधि और रिवीजन कार्ड्स तैयार करना।',
    targetOutcome: 'Consistent score above 70% in chapter-wise practice tests.',
    hindiTargetOutcome: 'अध्यायवार अभ्यास टेस्ट में लगातार 70% से अधिक अंक प्राप्त करना।',
    recommendedResources: ['Lucent GK', 'S.P. Bakshi English', 'R.S. Aggarwal Quant'],
    tasks: [
      { id: 'task-3-1', title: 'Practice 25 questions on UP Geography & 75 Districts', hindiTitle: 'उत्तर प्रदेश भूगोल एवं 75 जिलों पर 25 प्रश्नों का अभ्यास', actionType: 'practice', targetRoute: '/up-gk' },
      { id: 'task-3-2', title: 'Practice 20 questions on Pedagogy & Teaching Sutras', hindiTitle: 'शिक्षण कौशल एवं शिक्षण सूत्रों पर 20 प्रश्नों का अभ्यास', actionType: 'practice', targetRoute: '/practice' }
    ]
  },
  {
    levelNumber: 4,
    levelName: 'LEVEL 4 — ADVANCED APPLICATION (उच्च स्तरीय अनुप्रयोग)',
    hindiLevelName: 'स्तर 4 — कठिन प्रश्न एवं बहु-कथनात्मक प्रारूप',
    badge: 'Advanced',
    description: 'Tackle Assertion-Reason, Statement-based, and multi-concept questions common in UPESSC examination standards.',
    hindiDescription: 'अभिकथन-कारण (Assertion-Reason), कथन-निष्कर्ष और मिश्रित अवधारणा वाले प्रश्नों का अभ्यास।',
    targetOutcome: 'Eliminate conceptual confusions between similar thinkers and formulas.',
    hindiTargetOutcome: 'समान सिद्धांतों (जैसे पावलव बनाम स्किनर) के मध्य सूक्ष्म अंतर को स्पष्ट करना।',
    recommendedResources: ['TGT Specialist Chapters', 'Tips & Tricks Engine'],
    tasks: [
      { id: 'task-4-1', title: 'Master Tips & Tricks shortcuts for fast elimination', hindiTitle: 'शॉर्टकट एवं एलिमिनेशन ट्रिक्स की कार्यप्रणाली समझें', actionType: 'read', targetRoute: '/tips' },
      { id: 'task-4-2', title: 'Solve 25 Advanced Level questions in Science & Math', hindiTitle: 'विज्ञान व गणित में 25 कठिन प्रश्नों का अभ्यास करें', actionType: 'practice', targetRoute: '/practice' }
    ]
  },
  {
    levelNumber: 5,
    levelName: 'LEVEL 5 — EXAM LEVEL DRILLS (परीक्षा स्तर गति अभ्यास)',
    hindiLevelName: 'स्तर 5 — 1/3 नेगेटिव मार्किंग रणनीति अभ्यास',
    badge: 'Exam Level',
    description: 'Simulate exact exam conditions with 1/3 negative marking penalties (+3 / -1) and strict time budgeting.',
    hindiDescription: '120 मिनट में 120 प्रश्नों के वास्तविक परीक्षा प्रारूप (+3 सही, -1 गलत) में अभ्यास।',
    targetOutcome: 'Maintain under 60 seconds per question with high net positive yield.',
    hindiTargetOutcome: 'प्रति प्रश्न 60 सेकंड से कम समय में सकारात्मक शुद्ध स्कोर बनाए रखना।',
    recommendedResources: ['Timed Practice Engine', 'Mistake Notebook Tracker'],
    tasks: [
      { id: 'task-5-1', title: 'Attempt 50-Question Timed Subject Sprint', hindiTitle: '50 प्रश्नों का समयबद्ध विषयवार टेस्ट दें', actionType: 'test', targetRoute: '/tests' }
    ]
  },
  {
    levelNumber: 6,
    levelName: 'LEVEL 6 — PYQ DEEP-DIVE (विगत वर्षों के प्रश्न पत्र)',
    hindiLevelName: 'स्तर 6 — पिछले वर्षों के वास्तविक प्रश्न (PYQs)',
    badge: 'PYQ Master',
    description: 'Analyze real questions from UP 69k (2019), UP 68.5k (2018), UP TGT 2021/2016, and UPTET with official answer keys.',
    hindiDescription: '69000 सहायक अध्यापक, 68500 भर्ती, टीजीटी 2021 एवं यूपीटीईटी के वास्तविक प्रश्न पत्रों का विश्लेषण।',
    targetOutcome: 'Identify examiner favorite themes, recurring questions, and official key interpretations.',
    hindiTargetOutcome: 'आयोग के पसंदीदा विषयों और बार-बार पूछे जाने वाले प्रश्नों की सटीक पहचान।',
    recommendedResources: ['Dedicated PYQ Repository', 'Official Question Archives'],
    tasks: [
      { id: 'task-6-1', title: 'Solve UP 69,000 Teacher (2019) Real Exam Questions', hindiTitle: '69000 शिक्षक भर्ती (2019) के वास्तविक प्रश्न हल करें', actionType: 'pyq', targetRoute: '/pyqs' },
      { id: 'task-6-2', title: 'Review UP TGT Subject Previous Year Questions', hindiTitle: 'यूपी टीजीटी के पिछले वर्षों के प्रश्नों का विश्लेषण', actionType: 'pyq', targetRoute: '/pyqs' }
    ]
  },
  {
    levelNumber: 7,
    levelName: 'LEVEL 7 — FULL MOCK TESTS (पूर्ण मॉक टेस्ट सिमुलेटर)',
    hindiLevelName: 'स्तर 7 — संपूर्ण 120-प्रश्नीय मॉक टेस्ट (360 अंक)',
    badge: 'Mock Pro',
    description: 'Take full-length 120-question, 360-mark mock tests simulating the comprehensive UPESSC examination interface.',
    hindiDescription: 'पूरा 120 प्रश्नों का 360 अंकों वाला टेस्ट दें, जिसमें नेगेटिव मार्किंग और विषयवार विश्लेषण शामिल है।',
    targetOutcome: 'Score above cutoff target (280+ marks for PRT / TGT) consistently.',
    hindiTargetOutcome: 'लगातार 280+ अंकों का सुरक्षित स्कोर प्राप्त करना।',
    recommendedResources: ['Full Mock Test Engine', 'Question Palette & Analytics'],
    tasks: [
      { id: 'task-7-1', title: 'Launch Full UP PRT Mock Test (120 Questions / 120 Mins)', hindiTitle: 'पूर्ण सुपर टीईटी मॉक टेस्ट (120 प्रश्न / 120 मिनट) प्रारंभ करें', actionType: 'test', targetRoute: '/tests' }
    ]
  },
  {
    levelNumber: 8,
    levelName: 'LEVEL 8 — SPACED REPETITION REVISION (वैज्ञानिक दोहराव)',
    hindiLevelName: 'स्तर 8 — 1, 3, 7, 15, 30 दिवसीय अंतराल दोहराव',
    badge: 'Mastery',
    description: 'Review saved bookmarks, mistake notebooks, and spaced revision alerts to prevent memory decay before exam day.',
    hindiDescription: 'गलत हुए प्रश्नों की डायरी और 1, 3, 7, 15, 30 दिन के अंतराल पर वैज्ञानिक पुनरावलोकन।',
    targetOutcome: 'Near zero mistake repetition in weak areas on exam day.',
    hindiTargetOutcome: 'परीक्षा हॉल में पुरानी गलतियों की शून्य पुनरावृत्ति।',
    recommendedResources: ['Progress Dashboard', 'Mistake Notebook & Spaced Review Queue'],
    tasks: [
      { id: 'task-8-1', title: 'Review Mistake Notebook and Re-solve wrong questions', hindiTitle: 'गलत प्रश्नों की नोटबुक देखें और पुनः हल करें', actionType: 'revision', targetRoute: '/progress' },
      { id: 'task-8-2', title: 'Check today’s Spaced Repetition Due Topics', hindiTitle: 'आज के देय अंतराल पुनरावलोकन विषयों का रिवीजन करें', actionType: 'revision', targetRoute: '/progress' }
    ]
  }
];
