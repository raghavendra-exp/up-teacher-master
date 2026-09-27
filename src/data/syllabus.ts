import { ExamSyllabus } from '../types';

export const SYLLABUS_DATA: Record<string, ExamSyllabus> = {
  UP_PRT: {
    examId: 'UP_PRT',
    version: 'UPESSC-PRT-2026-V1',
    lastVerified: '15 Sep 2026',
    sourceType: 'Official',
    sourceTitle: 'UPESSC Primary Assistant Teacher Selection Notification & Guidelines',
    sourceUrl: 'https://upessc.up.gov.in',
    isCurrent: true,
    status: 'CURRENT',
    whatChanged: 'Unified 120-question, 360-mark structure with 1/3 negative marking under the new UP Education Service Selection Commission (UPESSC). Enhanced weightage for General Knowledge & Current Affairs (25 Qs / 75 Marks), integrated pedagogy, and mandatory ICT/Digital education components.',
    hindiWhatChanged: 'नए उत्तर प्रदेश शिक्षा सेवा चयन आयोग (UPESSC) के तहत 120 प्रश्न, 360 अंक और 1/3 ऋणात्मक अंकन लागू। सामान्य ज्ञान व समसामयिकी को 25 प्रश्न (75 अंक) का सर्वोच्च वेटेज, शिक्षण कौशल एवं आईसीटी के व्यावहारिक अनुप्रयोग शामिल।',
    sections: [
      {
        id: 'prt-sec-gk-ca',
        name: 'General Knowledge & Current Affairs',
        hindiName: 'सामान्य ज्ञान एवं समसामयिक घटनाएं',
        subjectId: 'general-knowledge',
        questionCount: 25,
        marks: 75,
        chapters: [
          {
            id: 'prt-gk-up',
            name: 'Uttar Pradesh Special GK & Schemes',
            hindiName: 'उत्तर प्रदेश विशेष सामान्य ज्ञान एवं योजनाएं',
            weightageEstimated: '8–10 Questions',
            topics: [
              {
                id: 'up-geo-hist',
                name: 'UP Geography, Rivers & Freedom Movement',
                hindiName: 'उत्तर प्रदेश का भूगोल, नदियां एवं 1857 से 1947 का स्वतंत्रता संग्राम',
                description: '75 districts, 18 divisions, Ganga-Yamuna Doab, Terai region, Meerut 1857, Kakori action, Chauri Chaura.',
                hindiDescription: '75 जिले, 18 मंडल, तराई क्षेत्र, गंगा-यमुना दोआब, 1857 क्रांति (मेरठ), काकोरी एक्शन, चौरी-चौरा।',
                subtopics: ['Districts & Divisions', 'Major Rivers (Ganga, Yamuna, Sarayu, Gomti)', '1857 Revolt in UP', 'Kakori Train Action'],
                ncertMapping: {
                  classes: [6, 7, 8],
                  subjects: ['Our Pasts', 'Social Science'],
                  chapterNames: ['Rebels and the Raj', 'India Physical Environment'],
                  portalLink: 'https://ncert.nic.in/textbook.php'
                },
                scertMapping: {
                  classes: [4, 5],
                  bookName: 'Hamara Parivesh',
                  chapterName: 'Hamara Uttar Pradesh'
                },
                difficulty: 'medium',
                importance: 'High',
                estimatedHours: 6,
                keyFormulasOrFacts: ['Dudhwa National Park is in Lakhimpur Kheri', 'UP shares boundary with 8 states + 1 UT + 1 Country (Nepal)', 'State Animal: Barasingha; Bird: Sarus; Tree: Ashoka; Flower: Palash']
              },
              {
                id: 'up-culture-schemes',
                name: 'UP Art, Culture, Fairs & Govt Schemes',
                hindiName: 'उत्तर प्रदेश की कला, संस्कृति, मेले एवं प्रमुख सरकारी योजनाएं',
                description: 'Folk dances (Nautanki, Raslila, Charkula), Kumbh Mela, Bateshwar Mela, ODOP, Mission Shakti, Kanya Sumangala.',
                hindiDescription: 'लोक नृत्य (नौटंकी, चरकुला), कुंभ मेला, बटेश्वर मेला, ओडीओपी, मिशन शक्ति, कन्या सुमंगला योजना।',
                subtopics: ['Classical Dance Kathak', 'Braj, Awadh & Bundelkhand Folk Arts', 'One District One Product (ODOP)', 'Mukhyamantri Abhyudaya Yojana'],
                difficulty: 'medium',
                importance: 'High',
                estimatedHours: 5,
                keyFormulasOrFacts: ['Charkula is performed in Braj region with 108 lamps', 'ODOP launched on 24 Jan 2018 (UP Day)']
              }
            ]
          },
          {
            id: 'prt-gk-national',
            name: 'National & International GK & Static Facts',
            hindiName: 'राष्ट्रीय एवं अंतरराष्ट्रीय सामान्य ज्ञान एवं तथ्य',
            weightageEstimated: '8–10 Questions',
            topics: [
              {
                id: 'polity-const',
                name: 'Indian Constitution & Governance',
                hindiName: 'भारतीय संविधान, मूल अधिकार एवं शासन प्रणाली',
                description: 'Preamble, Fundamental Rights (Articles 12-35), DPSPs, President, Parliament, Panchayati Raj 73rd/74th amendments.',
                hindiDescription: 'प्रस्तावना, मौलिक अधिकार (अनुच्छेद 12-35), नीति निदेशक तत्व, राष्ट्रपति, संसद, 73वां/74वां संविधान संशोधन।',
                subtopics: ['Preamble & Sources', 'Fundamental Rights & Writs', 'DPSPs & Fundamental Duties', 'Panchayati Raj'],
                difficulty: 'medium',
                importance: 'High',
                estimatedHours: 8,
                keyFormulasOrFacts: ['Right to Education is Article 21A (86th Amendment 2002)', 'Panchayati Raj Day is celebrated on 24 April']
              }
            ]
          }
        ]
      },
      {
        id: 'prt-sec-math',
        name: 'Mathematics',
        hindiName: 'गणित (अंकगणित, बीजगणित, रेखागणित)',
        subjectId: 'mathematics',
        questionCount: 16,
        marks: 48,
        chapters: [
          {
            id: 'prt-math-arithmetic',
            name: 'Arithmetic & Number Foundations',
            hindiName: 'अंकगणित एवं संख्या पद्धति',
            weightageEstimated: '8–10 Questions',
            topics: [
              {
                id: 'num-system-lcm',
                name: 'Number System, Divisibility, HCF & LCM',
                hindiName: 'संख्या पद्धति, विभाज्यता के नियम, ल.स. एवं म.स.',
                description: 'Prime numbers, co-primes, divisibility tests (2 to 11), HCF-LCM relation, fraction HCF/LCM.',
                subtopics: ['Divisibility Rules', 'Product of Numbers = LCM × HCF', 'Recurring Decimals to Fractions'],
                ncertMapping: {
                  classes: [6, 7],
                  subjects: ['Mathematics'],
                  chapterNames: ['Knowing Our Numbers', 'Playing with Numbers'],
                  portalLink: 'https://ncert.nic.in/textbook.php'
                },
                difficulty: 'easy',
                importance: 'High',
                estimatedHours: 5,
                keyFormulasOrFacts: ['HCF of Fractions = HCF(Numerators) / LCM(Denominators)', 'LCM of Fractions = LCM(Numerators) / HCF(Denominators)']
              },
              {
                id: 'percentage-profit-loss',
                name: 'Percentage, Profit-Loss & Simple Interest',
                hindiName: 'प्रतिशतता, लाभ-हानि एवं साधारण ब्याज',
                description: 'Fraction-to-percentage conversions, profit/loss percentage, discount, SI = (P×R×T)/100, CI fundamentals.',
                subtopics: ['Fraction conversion shortcuts', 'Cost price, Marked price, Selling price', 'Simple Interest formulas'],
                difficulty: 'medium',
                importance: 'High',
                estimatedHours: 7,
                keyFormulasOrFacts: ['1/8 = 12.5%, 1/6 = 16.66%, 1/7 = 14.28%', 'Gain % = (Gain / CP) × 100']
              }
            ]
          },
          {
            id: 'prt-math-mensuration',
            name: 'Geometry, Mensuration & Statistics',
            hindiName: 'ज्यामिति, क्षेत्रमिति एवं सांख्यिकी',
            weightageEstimated: '6–8 Questions',
            topics: [
              {
                id: 'geometry-area-perimeter',
                name: 'Lines, Angles, Triangles, 2D Area & Perimeter',
                hindiName: 'रेखाएं, कोण, त्रिभुज एवं 2D क्षेत्रफल व परिमाप',
                description: 'Types of angles, triangle congruence, Heron formula, Circle circumference/area, Quadrilaterals.',
                subtopics: ['Angle sum property', 'Heron formula: sqrt(s(s-a)(s-b)(s-c))', 'Area of trapezium = 1/2 × (sum of parallel sides) × height'],
                difficulty: 'medium',
                importance: 'High',
                estimatedHours: 6
              }
            ]
          }
        ]
      },
      {
        id: 'prt-sec-lang',
        name: 'Languages (Hindi, Sanskrit, English)',
        hindiName: 'भाषाएं (हिन्दी - 20 प्रश्न, संस्कृत - 5 प्रश्न, अंग्रेजी - 5 प्रश्न)',
        subjectId: 'hindi',
        questionCount: 30,
        marks: 90,
        chapters: [
          {
            id: 'prt-lang-hindi',
            name: 'General Hindi Grammar & Comprehension',
            hindiName: 'सामान्य हिन्दी व्याकरण एवं अपठित गद्यांश (20 प्रश्न)',
            weightageEstimated: '20 Questions (60 Marks)',
            topics: [
              {
                id: 'hindi-varnamala-sandhi',
                name: 'Varnamala, Sandhi & Samas',
                hindiName: 'वर्णमाला (स्वर, व्यंजन), संधि एवं समास',
                description: 'Alpaprana, Mahaprana, Ghosha, Aghosha, Swar Sandhi (Dirgha, Guna, Vriddhi, Yan, Ayadi), Vyanjan & Visarga Sandhi, 6 types of Samas.',
                subtopics: ['Uchcharan Sthan', 'Sandhi Rules & Exceptions', 'Samas Vigrah'],
                difficulty: 'medium',
                importance: 'High',
                estimatedHours: 8,
                keyFormulasOrFacts: ['अ/आ + इ/ई = ए (गुण संधि)', 'इ/ई + असमान स्वर = य् (यण संधि)', 'पहला पद प्रधान = अव्ययीभाव समास']
              },
              {
                id: 'hindi-vocab-kavya',
                name: 'Vocabulary, Ras, Chhand & Alankar',
                hindiName: 'विलोम, पर्यायवाची, तत्सम-तद्भव, रस, छंद व अलंकार',
                description: 'Anupras, Yamak, Shlesh, Rupak, Utpreksha; Ras and Sthayi Bhav; Doha, Chaupai matras.',
                subtopics: ['Ras & Sthayi Bhav (Navarasa)', 'Chaupai (16-16 matras)', 'Doha (13-11 matras)', 'Tatsam/Tadbhav identification'],
                difficulty: 'medium',
                importance: 'High',
                estimatedHours: 6,
                keyFormulasOrFacts: ['श्रृंगार रस का स्थायी भाव = रति', 'उत्प्रेक्षा वाचक शब्द = जनु, मनु, जानहु, मानहु']
              }
            ]
          },
          {
            id: 'prt-lang-sanskrit',
            name: 'Sanskrit Language Fundamentals',
            hindiName: 'संस्कृत व्याकरण एवं सूक्तियां (5 प्रश्न)',
            weightageEstimated: '5 Questions (15 Marks)',
            topics: [
              {
                id: 'sanskrit-maheshwar-sandhi',
                name: 'Maheshwar Sutras, Sandhi & Dhatu Roop',
                hindiName: 'माहेश्वर सूत्र, प्रत्याहार, संधि एवं शब्द-धातु रूप',
                description: '14 Maheshwar Sutras, Ak, Ach, Hal Pratyahara, basic Sanskrit Sandhi (Akah Savarne Dirghah), Lat/Lot/Lrit Lakar.',
                subtopics: ['14 Maheshwar Sutras', 'Pratyahara Nirman', 'Ram, Hari, Guru Shabda Roop'],
                difficulty: 'medium',
                importance: 'Medium',
                estimatedHours: 5,
                keyFormulasOrFacts: ['14 सूत्र: अइउण्, ऋऌक्, एओङ्, ऐऔच्...', 'अकः सवर्णे दीर्घः (दीर्घ संधि सूत्र)']
              }
            ]
          },
          {
            id: 'prt-lang-english',
            name: 'English Language Competence',
            hindiName: 'अंग्रेजी व्याकरण एवं बोधगम्यता (5 प्रश्न)',
            weightageEstimated: '5 Questions (15 Marks)',
            topics: [
              {
                id: 'eng-grammar-usage',
                name: 'Parts of Speech, Tenses, Voice & Vocabulary',
                hindiName: 'पार्ट्स ऑफ स्पीच, काल, एक्टिव-पैसिव एवं वोकैबुलरी',
                description: 'Noun, Pronoun, Adjective, Preposition rules, Tenses, Active/Passive Voice, Synonyms/Antonyms, Idioms.',
                subtopics: ['Preposition of place and time', 'Subject-Verb Agreement rules', 'Active to Passive conversion'],
                difficulty: 'medium',
                importance: 'Medium',
                estimatedHours: 5,
                keyFormulasOrFacts: ['Neither/Nor takes verb agreeing with the nearer subject', 'Present Perfect: has/have + V3']
              }
            ]
          }
        ]
      },
      {
        id: 'prt-sec-science',
        name: 'Science (विज्ञान)',
        hindiName: 'सामान्य विज्ञान (दैनिक जीवन में विज्ञान, स्वास्थ्य, बल, गति)',
        subjectId: 'science',
        questionCount: 8,
        marks: 24,
        chapters: [
          {
            id: 'prt-sci-core',
            name: 'Everyday Science, Physics & Health Biology',
            hindiName: 'दैनिक जीवन में विज्ञान, गति, बल एवं मानव स्वास्थ्य',
            weightageEstimated: '8 Questions (24 Marks)',
            topics: [
              {
                id: 'sci-motion-light',
                name: 'Speed, Force, Energy, Light & Sound',
                hindiName: 'दूरी, चाल, बल, ऊर्जा, प्रकाश के नियम एवं ध्वनि',
                description: 'Newton laws of motion, types of energy, reflection/refraction of light, lenses, human eye defects, sound propagation.',
                subtopics: ['Newton 3 Laws of Motion', 'Concave & Convex mirrors/lenses', 'Myopia & Hypermetropia'],
                difficulty: 'easy',
                importance: 'High',
                estimatedHours: 5,
                keyFormulasOrFacts: ['Force = mass × acceleration (F = ma)', 'Power of lens P = 1/f (in meters, Unit: Dioptre)']
              },
              {
                id: 'sci-biology-nutrition',
                name: 'Human Body, Nutrition, Vitamins & Diseases',
                hindiName: 'मानव शरीर, पोषण, विटामिन एवं प्रमुख संक्रामक रोग',
                description: 'Digestive & circulatory system, deficiency diseases, Vitamins A, B, C, D, E, K chemical names, bacterial vs viral diseases.',
                subtopics: ['Vitamin deficiency chart', 'Blood groups (AB universal receiver, O universal donor)', 'Bacterial vs Viral diseases'],
                difficulty: 'medium',
                importance: 'High',
                estimatedHours: 5,
                keyFormulasOrFacts: ['Vitamin C (Ascorbic acid) deficiency causes Scurvy', 'Vitamin D (Calciferol) deficiency causes Rickets']
              }
            ]
          }
        ]
      },
      {
        id: 'prt-sec-evs-ss',
        name: 'Environmental & Social Studies',
        hindiName: 'पर्यावरण एवं सामाजिक अध्ययन (सौरमंडल, भारत का भूगोल, संविधान)',
        subjectId: 'evs',
        questionCount: 8,
        marks: 24,
        chapters: [
          {
            id: 'prt-evs-core',
            name: 'Ecology, Solar System & Indian Geography',
            hindiName: 'पारिस्थितिकी, सौरमंडल, भारत की नदियां व पर्वत',
            weightageEstimated: '8 Questions (24 Marks)',
            topics: [
              {
                id: 'evs-ecosystem-parks',
                name: 'Ecosystem, Trophic Levels & National Parks',
                hindiName: 'पारिस्थितिक तंत्र, खाद्य श्रृंखला एवं प्रमुख राष्ट्रीय उद्यान',
                description: '10% law of Lindeman, producers, primary consumers, Jim Corbett, Kaziranga, Keoladeo, Gir, Sundarbans.',
                subtopics: ['Trophic energy transfer', 'In-situ vs Ex-situ conservation', 'Ramsar Wetlands in UP'],
                difficulty: 'medium',
                importance: 'High',
                estimatedHours: 5,
                keyFormulasOrFacts: ['Lindeman 10% Energy Transfer Law (1942)', 'UP has 10 Ramsar Wetland sites (e.g. Upper Ganga, Sur Sarovar, Bakhira)']
              }
            ]
          }
        ]
      },
      {
        id: 'prt-sec-pedagogy-psychology',
        name: 'Teaching Skills & Child Psychology',
        hindiName: 'शिक्षण कौशल (8 प्रश्न) एवं बाल मनोविज्ञान (8 प्रश्न)',
        subjectId: 'child-development',
        questionCount: 16,
        marks: 48,
        chapters: [
          {
            id: 'prt-teaching-skills',
            name: 'Teaching Methods, Skills & Inclusive Education',
            hindiName: 'शिक्षण कौशल, शिक्षण सूत्र, पाठ योजना एवं समावेशी शिक्षा',
            weightageEstimated: '8 Questions (24 Marks)',
            topics: [
              {
                id: 'teaching-sutras-methods',
                name: 'Teaching Sutras, Micro-teaching & Evaluation (CCE)',
                hindiName: 'शिक्षण सूत्र (ज्ञात से अज्ञात, मूर्त से अमूर्त), सूक्ष्म शिक्षण व सतत मूल्यांकन',
                description: 'Maxims of teaching, micro-teaching cycle (36 mins by NCERT), diagnostic vs remedial teaching, Formative & Summative assessment.',
                subtopics: ['Maxims of Teaching', 'Micro-teaching steps (6 steps)', 'Diagnostic and Remedial Teaching', 'RTE Act 2009 provisions'],
                difficulty: 'medium',
                importance: 'High',
                estimatedHours: 6,
                keyFormulasOrFacts: ['NCERT Indian Micro-teaching standard cycle = 36 minutes', 'RTE Act 2009 came into force on 1 April 2010']
              }
            ]
          },
          {
            id: 'prt-child-psy',
            name: 'Child Psychology & Major Thinkers',
            hindiName: 'बाल मनोविज्ञान, पियाजे, कोहलबर्ग एवं थार्नडाइक के सिद्धांत',
            weightageEstimated: '8 Questions (24 Marks)',
            topics: [
              {
                id: 'piaget-vygotsky-kohlberg',
                name: 'Piaget, Vygotsky, Kohlberg & Thorndike Theories',
                hindiName: 'पियाजे के 4 संज्ञानात्मक चरण, वाइगोत्स्की का ZPD, थार्नडाइक के 3 मुख्य नियम',
                description: 'Sensorimotor, Pre-operational, Concrete, Formal operational; Zone of Proximal Development & Scaffolding; Primary laws of learning (Readiness, Exercise, Effect).',
                subtopics: ['Piaget 4 Cognitive Stages', 'Vygotsky ZPD and MKO', 'Kohlberg 3 levels of morality', 'Thorndike Law of Effect'],
                difficulty: 'hard',
                importance: 'High',
                estimatedHours: 8,
                keyFormulasOrFacts: ['Piaget Stages: 0-2 (Sensorimotor), 2-7 (Pre-operational), 7-11 (Concrete), 11+ (Formal)', 'Thorndike Main Laws: Law of Readiness, Law of Exercise, Law of Effect']
              }
            ]
          }
        ]
      },
      {
        id: 'prt-sec-ict-life',
        name: 'Information Technology & Life Skills',
        hindiName: 'सूचना तकनीकी (4 प्रश्न) एवं जीवन कौशल, प्रबंधन व अभिवृत्ति (8 प्रश्न)',
        subjectId: 'ict',
        questionCount: 12,
        marks: 36,
        chapters: [
          {
            id: 'prt-ict-chapter',
            name: 'Information Technology in Education',
            hindiName: 'शिक्षा में कम्प्यूटर एवं सूचना तकनीकी का अनुप्रयोग',
            weightageEstimated: '4 Questions (12 Marks)',
            topics: [
              {
                id: 'ict-basics-diksha',
                name: 'Computer Basics, MS Office, DIKSHA & PRERNA Portals',
                hindiName: 'कम्प्यूटर मूल बातें, शॉर्टकट, इंटरनेट, दीक्षा ऐप व मिशन प्रेरणा',
                description: 'Input/output devices, memory (RAM, ROM, Cache), shortcut keys (Ctrl+C, Ctrl+V, Ctrl+Z, Ctrl+P), UP Mission Prerna, Prerna Lakshya.',
                subtopics: ['Binary to Decimal & Byte conversions (1 KB = 1024 Bytes)', 'Common Keyboard Shortcuts', 'DIKSHA Portal & QR codes in SCERT books'],
                difficulty: 'easy',
                importance: 'Medium',
                estimatedHours: 4,
                keyFormulasOrFacts: ['1 Byte = 8 Bits; 1 KB = 1024 Bytes; 1 MB = 1024 KB', 'DIKSHA stands for Digital Infrastructure for Knowledge Sharing']
              }
            ]
          },
          {
            id: 'prt-life-skills-chapter',
            name: 'Life Skills, Professional Ethics & Motivation',
            hindiName: 'जीवन कौशल, व्यावसायिक आचरण व नीति एवं संवैधानिक मूल्य',
            weightageEstimated: '8 Questions (24 Marks)',
            topics: [
              {
                id: 'life-skills-ethics',
                name: 'Professional Ethics, Motivation & Classroom Leadership',
                hindiName: 'शिक्षक की व्यावसायिक आचार संहिता, प्रेरणा के प्रकार एवं नेतृत्व',
                description: 'Intrinsic vs extrinsic motivation, Maslow hierarchy of needs, teacher as facilitator (NCF 2005), constitutional values, child rights.',
                subtopics: ['Maslow Need Hierarchy Pyramid', 'Intrinsic vs Extrinsic Motivation', 'Role of Reward & Punishment according to modern pedagogy'],
                difficulty: 'medium',
                importance: 'High',
                estimatedHours: 5,
                keyFormulasOrFacts: ['Maslow 5 Needs: Physiological → Safety → Belongingness → Esteem → Self-Actualization', 'Modern pedagogy favors Positive Reinforcement over punitive measures']
              }
            ]
          }
        ]
      },
      {
        id: 'prt-sec-reasoning',
        name: 'Logical Reasoning',
        hindiName: 'तार्किक ज्ञान (रीजनिंग - 5 प्रश्न)',
        subjectId: 'reasoning',
        questionCount: 5,
        marks: 15,
        chapters: [
          {
            id: 'prt-reasoning-core',
            name: 'Logical Reasoning Patterns',
            hindiName: 'कोडिंग-डिकोडिंग, दिशा परीक्षण, रक्त संबंध एवं श्रृंखला',
            weightageEstimated: '5 Questions (15 Marks)',
            topics: [
              {
                id: 'reasoning-speed-tricks',
                name: 'Coding-Decoding, Direction Sense & Blood Relations',
                hindiName: 'कोडिंग-डिकोडिंग, दिशा ज्ञान परीक्षण, रक्त संबंध एवं वेन आरेख',
                description: 'Letter positions (EJOTY 5,10,15,20,25), opposite letters (AZ, BY, CX, DW, EV, FU...), Pythagoras theorem in directions.',
                subtopics: ['EJOTY letter positioning rule', 'Shadow and sunset/sunrise direction problems', 'Direct and indirect blood relationships'],
                difficulty: 'easy',
                importance: 'Medium',
                estimatedHours: 4,
                keyFormulasOrFacts: ['EJOTY trick: E=5, J=10, O=15, T=20, Y=25', 'Opposite letter trick: Sum of positions = 27 (e.g., A(1) + Z(26) = 27)']
              }
            ]
          }
        ]
      }
    ]
  },
  UP_TGT: {
    examId: 'UP_TGT',
    version: 'UPESSC-TGT-2026-V1',
    lastVerified: '15 Sep 2026',
    sourceType: 'Official',
    sourceTitle: 'UPESSC Trained Graduate Teacher (TGT) Service Rules & Exam Scheme',
    sourceUrl: 'https://upessc.up.gov.in',
    isCurrent: true,
    status: 'CURRENT',
    whatChanged: 'Standardized 120-question, 360-mark structure: 90 Questions from Concerned Subject Specialization + 30 Questions from Compulsory General Studies & UP GK, with 1/3 negative marking. Dynamic subject engine for 15+ subjects.',
    hindiWhatChanged: 'नया 120 प्रश्न (360 अंक) का स्वरूप: 90 प्रश्न संबंधित विषय से + 30 प्रश्न अनिवार्य सामान्य अध्ययन व यूपी विशेष से। 1/3 नेगेटिव मार्किंग लागू। 15+ विषयों का आधिकारिक सिलेबस इंजन।',
    sections: [
      {
        id: 'tgt-sec-subject',
        name: 'Concerned Subject (Discipline Specific)',
        hindiName: 'संबंधित विषय (90 प्रश्न / 270 अंक)',
        subjectId: 'mathematics',
        questionCount: 90,
        marks: 270,
        chapters: [
          {
            id: 'tgt-math-algebra',
            name: 'Algebra, Equations, Matrices & Determinants',
            hindiName: 'बीजगणित, समीकरण सिद्धांत, आव्यूह एवं सारणिक',
            weightageEstimated: '20–25 Questions',
            topics: [
              {
                id: 'tgt-theory-equations',
                name: 'Quadratic & Higher Degree Equations',
                hindiName: 'द्विघात एवं उच्च घात के समीकरण, मूलों के लक्षण',
                description: 'Nature of roots (Discriminant D = b^2 - 4ac), relation between roots and coefficients, symmetric functions of roots.',
                subtopics: ['Roots condition for equal/real/imaginary', 'Formation of equation with given roots', 'Cubic equations Cardano method concept'],
                ncertMapping: {
                  classes: [10, 11],
                  subjects: ['Mathematics'],
                  chapterNames: ['Quadratic Equations', 'Complex Numbers and Quadratic Equations'],
                  portalLink: 'https://ncert.nic.in/textbook.php'
                },
                difficulty: 'medium',
                importance: 'High',
                estimatedHours: 8,
                keyFormulasOrFacts: ['Sum of roots = -b/a, Product of roots = c/a', 'D > 0 (Real & Distinct), D = 0 (Real & Equal), D < 0 (Complex conjugates)']
              },
              {
                id: 'tgt-ap-gp-hp',
                name: 'Arithmetic, Geometric & Harmonic Progressions',
                hindiName: 'समान्तर श्रेणी (AP), गुणोत्तर श्रेणी (GP) एवं हरात्मक श्रेणी (HP)',
                description: 'nth term, sum of n terms, infinite GP sum (S_inf = a/(1-r)), AM >= GM >= HM inequality and relations.',
                subtopics: ['AM = (a+b)/2, GM = sqrt(ab), HM = 2ab/(a+b)', 'GM^2 = AM × HM property'],
                difficulty: 'medium',
                importance: 'High',
                estimatedHours: 6,
                keyFormulasOrFacts: ['AM >= GM >= HM', 'Sum of infinite GP = a / (1 - r) for |r| < 1']
              }
            ]
          },
          {
            id: 'tgt-math-calculus',
            name: 'Differential & Integral Calculus',
            hindiName: 'अवकलन एवं समाकलन कलन',
            weightageEstimated: '22–26 Questions',
            topics: [
              {
                id: 'tgt-limits-diff',
                name: 'Limits, Continuity, Derivatives & Maxima/Minima',
                hindiName: 'सीमा, सांतत्य, अवकलनीयता एवं उच्चिष्ठ व निम्निष्ठ',
                description: 'L’Hopital rule, standard limits, chain rule, Rolle theorem, Lagrange Mean Value Theorem, First and Second derivative tests.',
                subtopics: ['L’Hopital 0/0 and inf/inf rules', 'Rolle Theorem conditions', 'Maxima/Minima conditions (f\'(x)=0, f\'\'(x)<0)'],
                ncertMapping: {
                  classes: [11, 12],
                  subjects: ['Mathematics'],
                  chapterNames: ['Limits and Derivatives', 'Continuity and Differentiability', 'Application of Derivatives'],
                  portalLink: 'https://ncert.nic.in/textbook.php'
                },
                difficulty: 'hard',
                importance: 'High',
                estimatedHours: 10,
                keyFormulasOrFacts: ['lim(x->0) (sin x)/x = 1', 'lim(x->0) (e^x - 1)/x = 1', 'd/dx (tan x) = sec^2 x']
              }
            ]
          }
        ]
      },
      {
        id: 'tgt-sec-gs',
        name: 'Compulsory General Studies & UP GK',
        hindiName: 'अनिवार्य सामान्य अध्ययन एवं यूपी विशेष (30 प्रश्न / 90 अंक)',
        subjectId: 'general-knowledge',
        questionCount: 30,
        marks: 90,
        chapters: [
          {
            id: 'tgt-gs-core',
            name: 'Indian History, Geography, Polity, Science & UP Special',
            hindiName: 'भारतीय इतिहास, भूगोल, राजव्यवस्था, विज्ञान एवं यूपी समसामयिकी',
            weightageEstimated: '30 Questions (90 Marks)',
            topics: [
              {
                id: 'tgt-gs-freedom-struggle',
                name: 'Indian National Movement & Constitution',
                hindiName: 'भारतीय राष्ट्रीय आंदोलन (1885-1947) एवं संविधान की विशेषताएं',
                description: 'Congress sessions, Swadeshi movement, Non-cooperation, Civil disobedience, Quit India, Constitutional articles and amendments.',
                subtopics: ['Important INC Presidents & Sessions', 'Fundamental Rights & Judicial Review', 'Panchayati Raj structure'],
                difficulty: 'medium',
                importance: 'High',
                estimatedHours: 8,
                keyFormulasOrFacts: ['1929 Lahore Session adopted Purna Swaraj (Presided by J.L. Nehru)', 'First President of INC: W.C. Bonnerjee (1885 Bombay)']
              }
            ]
          }
        ]
      }
    ]
  },
  UPTET: {
    examId: 'UPTET',
    version: 'UPTET-ELIGIBILITY-2026-V1',
    lastVerified: '10 Sep 2026',
    sourceType: 'Official',
    sourceTitle: 'UPESSC / Basic Education Department Teacher Eligibility Test Rules',
    sourceUrl: 'https://upessc.up.gov.in',
    isCurrent: true,
    status: 'CURRENT',
    whatChanged: 'Conducted under the unified UP Education Service Selection Commission. Strictly a qualifying eligibility exam with lifetime certificate validity. 150 questions, 150 marks, NO negative marking. 60% (90 marks) qualifying for General, 55% (82 marks) for OBC/SC/ST. NOT to be confused with the Assistant Teacher recruitment examination.',
    hindiWhatChanged: 'आयोग द्वारा संचालित केवल पात्रता परीक्षा (भर्ती नहीं)। आजीवन वैधता प्रमाण पत्र। 150 प्रश्न, 150 अंक, कोई नेगेटिव मार्किंग नहीं। सामान्य वर्ग हेतु 90 अंक (60%) तथा आरक्षित वर्ग हेतु 82 अंक (55%) अर्हक।',
    sections: [
      {
        id: 'uptet-sec-cdp',
        name: 'Child Development & Pedagogy',
        hindiName: 'बाल विकास एवं शिक्षण विधि (30 प्रश्न / 30 अंक)',
        subjectId: 'child-development',
        questionCount: 30,
        marks: 30,
        chapters: [
          {
            id: 'uptet-cdp-core',
            name: 'Child Psychology, Development & Learning Theories',
            hindiName: 'बाल विकास के आधार, अधिगम सिद्धांत एवं मापन',
            weightageEstimated: '30 Questions',
            topics: [
              {
                id: 'uptet-learning-theories',
                name: 'Classical Theories: Thorndike, Pavlov, Skinner, Kohler',
                hindiName: 'अधिगम के प्रमुख सिद्धांत: थार्नडाइक, पावलव, स्किनर, कोहलर की अंतर्दृष्टि',
                description: 'Pavlov dog salivary conditioning, Skinner operant conditioning box, Kohler chimpanzee Sultan experiment, Thorndike puzzle box.',
                subtopics: ['Pavlov UCS, UCR, CS, CR concepts', 'Skinner positive & negative reinforcement', 'Kohler insight learning steps'],
                difficulty: 'medium',
                importance: 'High',
                estimatedHours: 6,
                keyFormulasOrFacts: ['Pavlov Experiment: Food (UCS) → Salivation (UCR); Bell (CS) → Salivation (CR)', 'Kohler conducted experiments on chimpanzee named Sultan']
              }
            ]
          }
        ]
      },
      {
        id: 'uptet-sec-evs',
        name: 'Environmental Studies (EVS)',
        hindiName: 'पर्यावरण अध्ययन (30 प्रश्न / 30 अंक)',
        subjectId: 'evs',
        questionCount: 30,
        marks: 30,
        chapters: [
          {
            id: 'uptet-evs-core',
            name: 'Environment, Ecosystem, Plants, Animals & Constitution',
            hindiName: 'पर्यावरण, पारिस्थितिकी तंत्र, पेड़-पौधे, जंतु एवं हमारा संविधान',
            weightageEstimated: '30 Questions',
            topics: [
              {
                id: 'uptet-pollution-conservation',
                name: 'Pollution, Greenhouse Effect, Ozone Layer & Wildlife Acts',
                hindiName: 'प्रदूषण, ग्रीनहाउस प्रभाव, ओजोन क्षरण एवं वन्यजीव संरक्षण अधिनियम',
                description: 'Ozone depletion in Stratosphere, Montreal Protocol, Wildlife Protection Act 1972, Forest Conservation Act 1980, Environment Protection Act 1986.',
                subtopics: ['Dobson Unit for Ozone thickness', 'Major Greenhouse gases (CO2, CH4, N2O, Water vapor)', 'Chipko Movement (Sunderlal Bahuguna)'],
                difficulty: 'medium',
                importance: 'High',
                estimatedHours: 6,
                keyFormulasOrFacts: ['Wildlife Protection Act enacted in 1972', 'Environment Protection Act enacted in 1986 (following Bhopal Gas Tragedy)', 'World Environment Day is 5 June']
              }
            ]
          }
        ]
      }
    ]
  }
};
