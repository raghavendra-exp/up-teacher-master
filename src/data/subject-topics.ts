import { SyllabusChapter } from '../types';

export interface SubjectTopicsMapping {
  title: string;
  chapters: SyllabusChapter[];
}

export const SUBJECT_TOPICS_CATALOG: Record<string, SubjectTopicsMapping> = {
  "hindi": {
    "title": "Hindi Language & Literature",
    "chapters": [
      {
        "id": "hi-varn-vichar",
        "name": "Phonetics & Alphabet (वर्ण विचार एवं उच्चारण)",
        "hindiName": "वर्ण विचार, स्वर, व्यंजन एवं उच्चारण स्थान",
        "weightageEstimated": "2–3 Questions",
        "topics": [
          {
            "id": "hi-top-varnmala",
            "name": "52 Characters, Swar, Vyanjan, Alpapran & Mahapran",
            "hindiName": "स्वर, व्यंजन, अल्पप्राण-महाप्राण, अघोष-सघोष एवं उच्चारण स्थान",
            "description": "Classification of 52 Hindi alphabets, 11 Swaras, 33 original consonants, Sanyukta Vyanjan (क्ष, त्र, ज्ञ, श्र), Alpapran (1,3,5), Mahapran (2,4), Aghosh (1,2), Saghosh (3,4,5).",
            "hindiDescription": "वर्णमाला के 52 वर्ण, ह्रस्व/दीर्घ/प्लुत स्वर, स्पर्श (25), अंतःस्थ (य,र,ल,व), ऊष्म (श,ष,स,ह)। उच्चारण स्थान: कंठ्य, तालव्य, मूर्धन्य, दंत्य, ओष्ठ्य।",
            "subtopics": [
              "52 Varn classification",
              "Alpapran vs Mahapran",
              "Aghosh vs Saghosh",
              "Nasikya Vyanjan",
              "Kanthya & Talavya positions"
            ],
            "ncertMapping": {
              "classes": [
                6,
                7,
                8
              ],
              "subjects": [
                "Hindi"
              ],
              "chapterNames": [
                "Varn Vichar"
              ],
              "portalLink": "https://ncert.nic.in/textbook.php"
            },
            "scertMapping": {
              "classes": [
                4,
                5
              ],
              "bookName": "Kalrav",
              "chapterName": "Varnamala"
            },
            "difficulty": "easy",
            "importance": "High",
            "estimatedHours": 3,
            "keyFormulasOrFacts": [
              "अल्पप्राण: वर्ग का 1, 3, 5 वर्ण + अंतःस्थ (य,र,ल,व)",
              "महाप्राण: वर्ग का 2, 4 वर्ण + ऊष्म (श,ष,स,ह)",
              "अघोष: वर्ग का 1, 2 वर्ण + श, ष, स",
              "सघोष: वर्ग का 3, 4, 5 वर्ण + सभी स्वर + ह + अंतःस्थ"
            ]
          }
        ]
      },
      {
        "id": "hi-sandhi",
        "name": "Sandhi Rules (स्वर, व्यंजन, विसर्ग संधि)",
        "hindiName": "संधि प्रकरण (दीर्घ, गुण, वृद्धि, यण, अयादि)",
        "weightageEstimated": "3–4 Questions",
        "topics": [
          {
            "id": "hi-top-swar-sandhi",
            "name": "5 Types of Swar Sandhi & Identification Tricks",
            "hindiName": "स्वर संधि के 5 भेद, नियम एवं पहचान की अचूक ट्रिक्स",
            "description": "Dirgha, Guna, Vriddhi, Yan, and Ayadi sandhi transformations with standard root words and exam pitfalls.",
            "hindiDescription": "दीर्घ संधि (अ+अ=आ), गुण (अ+इ=ए, अ+उ=ओ, अ+ऋ=अर्), वृद्धि (अ+ए=ऐ), यण (इ+स्वर=य, उ+स्वर=व), अयादि (ए+स्वर=अय, ओ+स्वर=अव)।",
            "subtopics": [
              "Dirgha Sandhi rules",
              "Guna & Vriddhi identification",
              "Yan Sandhi half-letter trick",
              "Ayadi Sandhi sounds"
            ],
            "ncertMapping": {
              "classes": [
                7,
                8
              ],
              "subjects": [
                "Hindi Vasant"
              ],
              "chapterNames": [
                "Sandhi"
              ],
              "portalLink": "https://ncert.nic.in/textbook.php"
            },
            "scertMapping": {
              "classes": [
                6,
                7
              ],
              "bookName": "Manjari",
              "chapterName": "Sandhi Prakaran"
            },
            "difficulty": "medium",
            "importance": "High",
            "estimatedHours": 4,
            "keyFormulasOrFacts": [
              "यण संधि: य, व, र से पहले आधा वर्ण आए (यद्यपि, स्वागत, अन्वय)",
              "वृद्धि संधि: ऊपर दो मात्राएं (ै, ौ) दिखाई दें (एकैक, महौषध)",
              "गुण संधि: एक मात्रा (े, ो) अथवा महर्षि जैसा 'अर्' भाव"
            ]
          }
        ]
      },
      {
        "id": "hi-samas",
        "name": "Samas (Compound Formations)",
        "hindiName": "समास: 6 प्रमुख भेद एवं विग्रह",
        "weightageEstimated": "2–3 Questions",
        "topics": [
          {
            "id": "hi-top-samas-types",
            "name": "Avyayibhav, Tatpurush, Karmadharaya, Dvigu, Dvandva & Bahuvrihi",
            "hindiName": "समास के 6 भेद, पद प्रधानता एवं विग्रह",
            "description": "Rules for determining compound words based on Purvapad and Uttarapad dominance.",
            "hindiDescription": "अव्ययीभाव (यथाशक्ति), तत्पुरुष (राजपुत्र), कर्मधारय (नीलकमल), द्विगु (पंचवटी), द्वंद्व (माता-पिता), बहुव्रीहि (दशानन, पीतांबर)।",
            "subtopics": [
              "Purvapad vs Uttarapad",
              "Karmadharaya vs Bahuvrihi",
              "Dvigu numerical test",
              "Dvandva hyphen trick"
            ],
            "difficulty": "medium",
            "importance": "High",
            "estimatedHours": 4,
            "keyFormulasOrFacts": [
              "अव्ययीभाव: पूर्वपद अव्यय (प्रति, यथा, आ, भर, बे)",
              "द्विगु: पहला पद संख्या (त्रिफला, चौराहा, नवग्रह)",
              "द्वंद्व: दोनों पद समान एवं योजक चिह्न (दिन-रात, लाभ-हानि)"
            ]
          }
        ]
      },
      {
        "id": "hi-ras-chhand-alankar",
        "name": "Poetics: Ras, Chhand & Alankar",
        "hindiName": "रस, छंद एवं अलंकार",
        "weightageEstimated": "3–4 Questions",
        "topics": [
          {
            "id": "hi-top-alankar",
            "name": "Shabdalankar & Arthalankar Clue Words",
            "hindiName": "शब्दालंकार (अनुप्रास, यमक, श्लेष) व अर्थालंकार (उपमा, रूपक, उत्प्रेक्षा)",
            "description": "Anuprasa, Yamak, Shlesh, Upama, Rupak, Utpreksha, Atishayokti, Bhrantiman.",
            "hindiDescription": "अनुप्रास (वर्ण की आवृत्ति), यमक (शब्द अनेक बार भिन्न अर्थ), श्लेष (एक शब्द कई अर्थ), उपमा (सा, सी, सरिस), उत्प्रेक्षा (मानो, जानो)।",
            "subtopics": [
              "Anuprasa 5 bhed",
              "Yamak vs Shlesh",
              "Upama 4 ang",
              "Utpreksha clue indicators"
            ],
            "difficulty": "medium",
            "importance": "High",
            "estimatedHours": 5,
            "keyFormulasOrFacts": [
              "उत्प्रेक्षा: मानो, मनु, जानो, जनु शब्द आएं",
              "उपमा: सा, सी, से, सम, सरिस शब्द आएं",
              "रसराज: शृंगार रस को कहा जाता है"
            ]
          }
        ]
      },
      {
        "id": "hi-sahitya",
        "name": "Hindi Literature & Award Winners",
        "hindiName": "हिन्दी साहित्य का इतिहास, प्रमुख काल एवं रचनाएं",
        "weightageEstimated": "4–6 Questions (TGT 25+ Qs)",
        "topics": [
          {
            "id": "hi-top-sahitya-periods",
            "name": "Adikal, Bhaktikal, Ritikal & Modern Chhayavad",
            "hindiName": "आदिकाल, भक्तिकाल, रीतिकाल एवं आधुनिक छायावादी कवि",
            "description": "Prithviraj Raso, Kabir, Surdas, Tulsidas, Jayasi, Bihari, Bharatendu, Prasad, Pant, Nirala, Mahadevi Varma.",
            "hindiDescription": "पृथ्वीराज रासो (चंदबरदाई), बीजक (कबीर), रामचरितमानस (तुलसीदास), पद्मावत (जायसी), कामायनी (जयशंकर प्रसाद), यामा (महादेवी वर्मा)।",
            "subtopics": [
              "Chhayavad 4 pillars",
              "Ramcharitmanas 7 Kand",
              "Jnanpith winners in Hindi",
              "Prominent UP poets"
            ],
            "difficulty": "hard",
            "importance": "High",
            "estimatedHours": 6,
            "keyFormulasOrFacts": [
              "प्रथम ज्ञानपीठ: सुमित्रानंदन पंत ('चिदंबरा' 1968)",
              "महादेवी वर्मा को ज्ञानपीठ: 'यामा' (1982)",
              "कामायनी में कुल 15 सर्ग हैं (प्रथम: चिंता, अंतिम: आनंद)"
            ]
          }
        ]
      }
    ]
  },
  "english": {
    "title": "English Language & Literature",
    "chapters": [
      {
        "id": "eng-grammar",
        "name": "Grammar, Parts of Speech & Concord",
        "hindiName": "अंग्रेजी व्याकरण, पार्ट्स ऑफ स्पीच एवं सब्जेक्ट-वर्ब एग्रीमेंट",
        "weightageEstimated": "3–4 Questions",
        "topics": [
          {
            "id": "eng-top-parts-speech",
            "name": "Nouns, Pronouns, Adjectives, Verbs, Adverbs, Prepositions & Conjunctions",
            "hindiName": "पार्ट्स ऑफ स्पीच, प्रपोजिशन के सटीक प्रयोग एवं एरर डिटेक्शन",
            "description": "Rules of countable/uncountable nouns, relative pronouns (who vs whom), tricky prepositions (between vs among, into vs in), and subject-verb concord rules (either...or, neither...nor, as well as).",
            "hindiDescription": "संज्ञा, सर्वनाम, विशेषण, क्रिया एवं अव्यय। प्रपोजिशन (Between 2 हेतु, Among 2 से अधिक हेतु; In स्थिति हेतु, Into गतिशीलता हेतु)। Subject-Verb Agreement के नियम।",
            "subtopics": [
              "Singular/Plural noun exceptions",
              "Preposition collocations",
              "Subject-Verb concord with collective nouns",
              "Correlative conjunctions"
            ],
            "ncertMapping": {
              "classes": [
                6,
                7,
                8,
                9
              ],
              "subjects": [
                "English"
              ],
              "chapterNames": [
                "Grammar & Composition"
              ],
              "portalLink": "https://ncert.nic.in/textbook.php"
            },
            "scertMapping": {
              "classes": [
                4,
                5
              ],
              "bookName": "Rainbow",
              "chapterName": "Language Practice"
            },
            "difficulty": "medium",
            "importance": "High",
            "estimatedHours": 5,
            "keyFormulasOrFacts": [
              "With 'Neither...nor' / 'Either...or', the verb agrees with the NEAREST subject",
              "With 'As well as' / 'Along with' / 'Together with', the verb agrees with the FIRST subject",
              "Words like 'Furniture', 'Advice', 'Information', 'Luggage' are uncountable and take singular verbs"
            ]
          }
        ]
      },
      {
        "id": "eng-tenses-voice",
        "name": "Tenses, Voice & Narration",
        "hindiName": "टेन्स, एक्टिव/पैसिव वॉइस एवं डायरेक्ट/इनडायरेक्ट स्पीच",
        "weightageEstimated": "3 Questions",
        "topics": [
          {
            "id": "eng-top-voice-narration",
            "name": "Active to Passive Conversion & Reported Speech Transformation",
            "hindiName": "एक्टिव-पैसिव वॉइस एवं डायरेक्ट से इनडायरेक्ट नरेशन नियम",
            "description": "Passive voice of interrogative and imperative sentences (Let + object + be + V3). Narration tense shifts, universal truth exceptions, modal verb changes.",
            "hindiDescription": "वॉइस परिवर्तन (Subject-Object विनिमय, V3 का प्रयोग)। आज्ञासूचक वाक्यों का पैसिव (Let + Object + be + V3)। डायरेक्ट से इनडायरेक्ट में काल परिवर्तन एवं सार्वभौमिक सत्य (Universal Truth) में काल अपरिवर्तित रहने का नियम।",
            "subtopics": [
              "Imperative passive structures",
              "Passive of continuous tenses with 'being'",
              "Universal truths in reported speech",
              "Question tag formation"
            ],
            "difficulty": "medium",
            "importance": "High",
            "estimatedHours": 4,
            "keyFormulasOrFacts": [
              "Universal Truths / Scientific facts NEVER change tense in Indirect Speech",
              "Imperative: 'Close the door' → 'Let the door be closed'",
              "Present Perfect 'has/have + V3' becomes 'has/have + been + V3' in Passive"
            ]
          }
        ]
      },
      {
        "id": "eng-vocab",
        "name": "Vocabulary, Idioms & Figures of Speech",
        "hindiName": "शब्द संपदा, विलोम-पर्यायवाची, मुहावरे एवं अलंकार (Figures of Speech)",
        "weightageEstimated": "3 Questions",
        "topics": [
          {
            "id": "eng-top-figures-speech",
            "name": "Simile, Metaphor, Personification, Oxymoron, Hyperbole, Apostrophe, Onomatopoeia",
            "hindiName": "अंग्रेजी के 7 प्रमुख अलंकार (POISE / SHAMPOO) एवं मुहावरे",
            "description": "Simile (explicit comparison with 'like' or 'as'), Metaphor (implicit comparison), Personification (giving human traits to non-human things), Oxymoron (contradictory terms), Hyperbole (exaggeration).",
            "hindiDescription": "Simile (Life is like a dream), Metaphor (Life is a dream), Personification (Love is blind), Oxymoron (open secret), Hyperbole (rivers of blood), Onomatopoeia (sound echo).",
            "subtopics": [
              "Simile vs Metaphor",
              "Personification identification",
              "High-frequency idioms for UP exams",
              "One-word substitutions"
            ],
            "difficulty": "medium",
            "importance": "High",
            "estimatedHours": 4,
            "keyFormulasOrFacts": [
              "Simile mnemonic: Contains 'like' or 'as'",
              "Oxymoron mnemonic: Two opposite words together ('sweet sorrow', 'open secret')",
              "Hyperbole: Deliberate massive overstatement"
            ]
          }
        ]
      },
      {
        "id": "eng-literature",
        "name": "TGT English Literature & Major Authors",
        "hindiName": "यूपी टीजीटी अंग्रेजी साहित्य: शेक्सपियर, मिल्टन, वर्ड्सवर्थ एवं गाल्सवर्दी",
        "weightageEstimated": "TGT 30+ Questions",
        "topics": [
          {
            "id": "eng-top-tgt-authors",
            "name": "Shakespeare, John Milton, William Wordsworth & John Galsworthy",
            "hindiName": "प्रमुख साहित्यकार, नाटक, सॉनेट, महाकाव्य एवं साहित्यिक काल",
            "description": "William Shakespeare (4 great tragedies: Hamlet, Othello, King Lear, Macbeth; 154 sonnets), John Milton (Paradise Lost, Areopagitica, Samson Agonistes), William Wordsworth (Lyrical Ballads 1798, The Prelude, Nature poetry), John Galsworthy (The Forsyte Saga, Justice, Strife).",
            "hindiDescription": "शेक्सपियर के 4 प्रसिद्ध त्रासदी नाटक (HOKL), 154 सॉनेट। जॉन मिल्टन (पैराडाइज लॉस्ट - 12 पुस्तकें)। विलियम वर्ड्सवर्थ (लिरिकल बैलड्स 1798 - रोमांटिक युग का प्रारंभ)। जॉन गाल्सवर्दी (द फोरसाइट सागा, जस्टिस)।",
            "subtopics": [
              "Shakespeare 4 Great Tragedies",
              "Milton blank verse & Paradise Lost",
              "Wordsworth Romanticism & Lake Poets",
              "Galsworthy social problem plays"
            ],
            "difficulty": "hard",
            "importance": "High",
            "estimatedHours": 8,
            "keyFormulasOrFacts": [
              "Shakespeare 4 Great Tragedies order: Hamlet (1600), Othello (1604), King Lear (1605), Macbeth (1606) [Trick: H-O-K-L]",
              "Lyrical Ballads was published jointly by Wordsworth and Coleridge in 1798",
              "Shakespeare wrote 154 Sonnets (1-126 to Fair Youth, 127-152 to Dark Lady)"
            ]
          }
        ]
      }
    ]
  },
  "sanskrit": {
    "title": "Sanskrit Language & Literature",
    "chapters": [
      {
        "id": "sk-sutra",
        "name": "Maheshwar Sutras & Pratyahara",
        "hindiName": "माहेश्वर सूत्र (14 सूत्र) एवं प्रत्याहार निर्माण",
        "weightageEstimated": "2–3 Questions",
        "topics": [
          {
            "id": "sk-top-14sutras",
            "name": "14 Maheshwar Sutras, It-Sanjna & 42 Pratyaharas",
            "hindiName": "14 माहेश्वर सूत्र, इत् संज्ञा, अण्, अच्, हल् एवं अल् प्रत्याहार",
            "description": "Lord Shiva's damru gave 14 sutras: 1. अइउण् 2. ऋऌक् 3. एओङ् 4. ऐऔच् (अच् = 9 स्वर) 5. हयवरट् 6. लण् 7. ञमङणनम् 8. झभञ् 9. घढधष् 10. जबगडदश् 11. खफछठथचटतव् 12. कपय् 13. शषसर् 14. हल् (हल् = 33 व्यंजन). Total 42 Pratyaharas.",
            "hindiDescription": "महर्षि पाणिनि के 14 माहेश्वर सूत्र। 'अच्' प्रत्याहार का अर्थ सभी 9 स्वर है। 'हल्' प्रत्याहार का अर्थ सभी 33 व्यंजन है। 'अल्' प्रत्याहार में सभी वर्ण (स्वर + व्यंजन) आते हैं।",
            "subtopics": [
              "14 Sutras chanting",
              "Pratyahara formation technique",
              "Ach pratyahara (Swar)",
              "Hal pratyahara (Vyanjan)"
            ],
            "ncertMapping": {
              "classes": [
                6,
                7,
                8
              ],
              "subjects": [
                "Sanskrit Ruchira"
              ],
              "chapterNames": [
                "Sanskrit Varnamala"
              ],
              "portalLink": "https://ncert.nic.in/textbook.php"
            },
            "scertMapping": {
              "classes": [
                4,
                5
              ],
              "bookName": "Sanskrit Piyusham",
              "chapterName": "Varn Parichay"
            },
            "difficulty": "medium",
            "importance": "High",
            "estimatedHours": 4,
            "keyFormulasOrFacts": [
              "माहेश्वर सूत्रों की कुल संख्या = 14",
              "संस्कृत व्याकरण में कुल प्रत्याहार = 42",
              "'अच्' प्रत्याहार = 9 स्वर (अ, इ, उ, ऋ, ऌ, ए, ओ, ऐ, औ)",
              "'हल्' प्रत्याहार = 33 व्यंजन",
              "सूत्रों में 'ह' वर्ण का पाठ दो बार हुआ है (हयवरट् एवं हल् में)"
            ]
          }
        ]
      },
      {
        "id": "sk-sandhi-karak",
        "name": "Sandhi & Karak-Vibhakti",
        "hindiName": "संधि (अच्, हल्, विसर्ग) एवं कारक-विभक्ति प्रकरण",
        "weightageEstimated": "3–4 Questions",
        "topics": [
          {
            "id": "sk-top-karak-sutra",
            "name": "Panini Karak Sutras (Karta, Karma, Karan, Sampradan, Apadan, Adhikaran)",
            "hindiName": "कारक के 6 भेद, उपपद विभक्ति सूत्र (सहार्थे तृतीया, नमः स्वस्ति स्वाहा स्वधा...)",
            "description": "In Sanskrit grammar, there are 6 Karakas (Sambandh and Sambodhan are not considered direct Karakas). Important formulas: Karturiipsitatamam Karma (Dvitiya), Sadhakatamam Karanam (Tritiya), Saharthe Tritiya (सह, साकम्, सार्धम्), Yenaangavikarah (येनांगविकारः - तृतीया), Namah Swasti Swaha (Chaturthi), Bhitrarthanam Bhayahetuh (Panchami).",
            "hindiDescription": "संस्कृत में कारक 6 होते हैं (सम्बन्ध व सम्बोधन कारक नहीं माने जाते)। 'सहार्थे तृतीया' (राम के साथ सीता वन गईं: रामेण सह), 'येनांगविकारः' (अक्ष्णा काणः, पादेन खंजः - तृतीया), 'नमः स्वस्ति स्वाहा स्वधा' (चतुर्थी: श्री गणेशाय नमः), 'भीत्रार्थानां भयहेतुः' (पंचमी: चोराद् बिभेति)।",
            "subtopics": [
              "6 Karakas identification",
              "Yenangvikarah body defect rule",
              "Saharthe tritiya rule",
              "Namah swasti chaturthi rule",
              "Apadan panchami fear rule"
            ],
            "difficulty": "medium",
            "importance": "High",
            "estimatedHours": 5,
            "keyFormulasOrFacts": [
              "संस्कृत में कुल कारक = 6 (सम्बन्ध एवं सम्बोधन को क्रिया से सीधा सम्बन्ध न होने के कारण कारक नहीं माना जाता)",
              "येनांगविकारः सूत्र से अंग विकार में तृतीया विभक्ति होती है (उदा. पादेन खंजः)",
              "'नमः' के योग में सदैव चतुर्थी विभक्ति होती है (उदा. शिवाय नमः, गुरवे नमः)",
              "भीत्रार्थानां भयहेतुः सूत्र से डरने या रक्षा करने में पंचमी विभक्ति होती है (उदा. वृक्षात् पत्रं पतति)"
            ]
          }
        ]
      },
      {
        "id": "sk-roop-sahitya",
        "name": "Shabda-Roop, Dhatu-Roop & Literature",
        "hindiName": "शब्द रूप (राम, हरि, नदी, अस्मद्, युष्मद्), धातु रूप एवं संस्कृत साहित्य",
        "weightageEstimated": "3–5 Questions",
        "topics": [
          {
            "id": "sk-top-dhatu-sahitya",
            "name": "5 Lakaras (Lat, Lot, Lang, Vidhiling, Lrit) & Classical Sanskrit Authors",
            "hindiName": "5 लकार (लट, लोट, लङ्, विधिलिङ्, लृट्) एवं कालिदास, भारवि, भवभूति",
            "description": "Verbal conjugations in Parasmaipada. Classical literature: Kalidasa (Abhijnanashakuntalam, Raghuvamsham, Meghadutam), Bharavi (Kiratarjuniyam), Bhavabhuti (Uttararamacharitam - Karun Rasa supremacy), Banabhatta (Kadambari).",
            "hindiDescription": "पठ्, गम्, भू धातुओं के 5 लकार। कालिदास (अभिज्ञानशाकुंतलम् - 7 अंक), भारवि (किरातार्जुनीयम् - 18 सर्ग), भवभूति (उत्तररामचरितम् - 'एको रसः करुण एव'), बाणभट्ट (कादंबरी - गद्य काव्य)।",
            "subtopics": [
              "5 Lakaras memory matrix",
              "Asmad & Yushmad pronoun forms",
              "Kalidasa works",
              "Great Sanskrit epics"
            ],
            "difficulty": "hard",
            "importance": "High",
            "estimatedHours": 6,
            "keyFormulasOrFacts": [
              "लट लकार = वर्तमान काल; लृट् लकार = भविष्यत् काल; लङ् लकार = भूतकाल",
              "लोट लकार = आज्ञा / प्रार्थना; विधिलिङ् लकार = चाहिए के अर्थ में",
              "'उपमा कालिदासस्य, भारवेरर्थगौरवम्। दण्डिनः पदलालित्यं, माघे सन्ति त्रयो गुणाः॥'",
              "उत्तररामचरितम् में करुण रस की प्रधानता है (भवभूति)"
            ]
          }
        ]
      }
    ]
  },
  "science": {
    "title": "General Science (Physics, Chemistry, Biology)",
    "chapters": [
      {
        "id": "sci-physics",
        "name": "Motion, Force, Work, Energy, Light & Electricity",
        "hindiName": "भौतिक विज्ञान: गति, बल, कार्य, ऊर्जा, प्रकाश एवं विद्युत",
        "weightageEstimated": "3–4 Questions",
        "topics": [
          {
            "id": "sci-top-motion-force",
            "name": "Newton Laws of Motion, Gravitation, Work, Power & Energy",
            "hindiName": "न्यूटन के गति के 3 नियम, जड़त्व, संवेग, गुरुत्वाकर्षण (g = 9.8 m/s²) एवं ऊर्जा संरक्षण",
            "description": "Newton's 1st Law (Law of Inertia), 2nd Law (F = ma, Momentum rate), 3rd Law (Action-Reaction). Universal gravitation F = G(m1.m2)/r^2. Value of g at poles vs equator. Kinetic Energy = 1/2 mv^2, Potential Energy = mgh. Power = Work / Time (Watt).",
            "hindiDescription": "न्यूटन के 3 नियम: 1. जड़त्व का नियम (बस के अचानक चलने पर पीछे झुकना), 2. संवेग परिवर्तन की दर (F = ma, कैच लेते समय हाथ पीछे खींचना), 3. क्रिया-प्रतिक्रिया (रॉकेट प्रणोदन, तैरना)। g का मान ध्रुवों पर अधिकतम तथा भूमध्य रेखा पर न्यूनतम। गतिज ऊर्जा = 1/2 mv², स्थितिज ऊर्जा = mgh। 1 अश्वशक्ति (HP) = 746 वाट।",
            "subtopics": [
              "Newton 3 laws real-life examples",
              "Acceleration due to gravity variations",
              "Kinetic vs Potential energy problems",
              "Units of Force (Newton), Work (Joule), Power (Watt)"
            ],
            "ncertMapping": {
              "classes": [
                8,
                9,
                10
              ],
              "subjects": [
                "Science"
              ],
              "chapterNames": [
                "Force and Laws of Motion",
                "Gravitation",
                "Work and Energy"
              ],
              "portalLink": "https://ncert.nic.in/textbook.php"
            },
            "scertMapping": {
              "classes": [
                6,
                7,
                8
              ],
              "bookName": "Vigyan",
              "chapterName": "Gati Evam Bal"
            },
            "difficulty": "medium",
            "importance": "High",
            "estimatedHours": 5,
            "keyFormulasOrFacts": [
              "F = ma (बल = द्रव्यमान × त्वरण)",
              "गतिज ऊर्जा KE = 1/2 mv²; स्थितिज ऊर्जा PE = mgh",
              "1 अश्वशक्ति (Horsepower) = 746 वाट (Watts)",
              "g का मान ध्रुवों (Poles) पर अधिकतम तथा भूमध्य रेखा (Equator) पर न्यूनतम होता है",
              "पृथ्वी के केंद्र पर g का मान शून्य होता है"
            ]
          },
          {
            "id": "sci-top-optics-electricity",
            "name": "Light (Reflection, Refraction, Lenses, Mirrors) & Electric Current",
            "hindiName": "प्रकाश (दर्पण, लेंस, दृष्टि दोष - निकट/दूर) एवं विद्युत धारा (ओम का नियम V = IR)",
            "description": "Plane mirror (virtual, erect, equal size, lateral inversion). Concave mirror (dentist, headlight, shaving), Convex mirror (vehicle rear-view). Myopia (short-sightedness, corrected by Concave lens), Hypermetropia (long-sightedness, corrected by Convex lens). Ohm's Law: V = IR. Resistance in series (R1+R2) and parallel (1/R1 + 1/R2).",
            "hindiDescription": "समतल दर्पण (पार्श्व परिवर्तन)। अवतल दर्पण (गाड़ियों की हेडलाइट, दाढ़ी बनाने में), उत्तल दर्पण (वाहनों में साइड मिरर - दृष्टि क्षेत्र बड़ा)। निकट दृष्टि दोष (मायोपिया - अवतल लेंस द्वारा निवारण), दूर दृष्टि दोष (हाइपरमेट्रोपिया - उत्तल लेंस द्वारा निवारण)। ओम का नियम: V = IR। घरों में वायरिंग समानांतर क्रम में होती है।",
            "subtopics": [
              "Concave vs Convex mirror uses",
              "Myopia and Hypermetropia lens remedies",
              "Ohm's Law formula V = IR",
              "Series vs Parallel circuits",
              "Electric power P = VI = I^2 R"
            ],
            "difficulty": "medium",
            "importance": "High",
            "estimatedHours": 5,
            "keyFormulasOrFacts": [
              "वाहनों में पीछे का दृश्य देखने हेतु उत्तल दर्पण (Convex mirror) का प्रयोग होता है",
              "निकट दृष्टि दोष (Myopia) के निवारण हेतु अवतल लेंस (Concave lens) का प्रयोग होता है",
              "दूर दृष्टि दोष (Hypermetropia) के निवारण हेतु उत्तल लेंस (Convex lens) का प्रयोग होता है",
              "ओम का नियम: V = IR (प्रतिरोध का मात्रक ओम Ω है)",
              "घरों में सभी विद्युत उपकरण समानांतर क्रम (Parallel connection) में जुड़े होते हैं"
            ]
          }
        ]
      },
      {
        "id": "sci-chemistry",
        "name": "Matter, Acids, Bases, Salts, Metals & Non-Metals",
        "hindiName": "रसायन विज्ञान: पदार्थ, अम्ल, क्षार, लवण, धातु एवं रासायनिक अभिक्रियाएं",
        "weightageEstimated": "2–3 Questions",
        "topics": [
          {
            "id": "sci-top-acids-metals",
            "name": "pH Scale, Natural Acids, Chemical Formulas & Metal Reactivity",
            "hindiName": "pH पैमाना, प्राकृतिक अम्ल, महत्वपूर्ण रासायनिक सूत्र एवं धातु सक्रियता श्रेणी",
            "description": "pH scale (0-14, pH < 7 acidic, pH = 7 neutral, pH > 7 basic). Blood pH = 7.4. Natural acids: Vinegar (Acetic acid), Lemon/Orange (Citric acid), Tamarind (Tartaric acid), Tomato (Oxalic acid), Sour milk/curd (Lactic acid), Ant sting (Formic/Methanoic acid). Litmus: Blue to Red = Acid; Red to Blue = Base. Common formulas: Baking soda (NaHCO3), Washing soda (Na2CO3.10H2O), Bleaching powder (CaOCl2), Plaster of Paris (CaSO4. 1/2 H2O).",
            "hindiDescription": "pH पैमाना (सोरेनसन द्वारा)। मानव रक्त का pH = 7.4। प्राकृतिक अम्ल: सिरका (एसिटिक), नींबू (साइट्रिक), इमली (टार्टरिक), टमाटर (ऑक्सालिक), दही (लैक्टिक), चींटी का डंक (मेथेनोइक/फॉर्मिक अम्ल)। बेकिंग सोडा (मीठा सोडा): NaHCO3; धावन सोडा: Na2CO3.10H2O; ब्लीचिंग पाउडर: CaOCl2; प्लास्टर ऑफ पेरिस (POP): CaSO4. 1/2 H2O।",
            "subtopics": [
              "pH scale values",
              "Natural acid sources table",
              "Litmus and phenolphthalein indicators",
              "Daily chemical formulas (Baking soda, POP, Bleaching powder)"
            ],
            "difficulty": "medium",
            "importance": "High",
            "estimatedHours": 4,
            "keyFormulasOrFacts": [
              "मानव रक्त (Human Blood) का pH मान = 7.4 (हल्का क्षारीय)",
              "चींटी के डंक में फॉर्मिक / मेथेनोइक अम्ल (Methanoic acid) पाया जाता है",
              "बेकिंग सोडा (खाने का सोडा) का रासायनिक नाम: सोडियम हाइड्रोजन कार्बोनेट (NaHCO₃)",
              "प्लास्टर ऑफ पेरिस का सूत्र: CaSO₄·½H₂O (जिप्सम CaSO₄·2H₂O को गर्म करने पर बनता है)",
              "अम्ल नीले लिटमस को लाल कर देता है, जबकि क्षार लाल लिटमस को नीला करता है"
            ]
          }
        ]
      },
      {
        "id": "sci-biology",
        "name": "Cell, Human Physiology, Nutrition & Diseases",
        "hindiName": "जीव विज्ञान: कोशिका संरचना, मानव शरीर क्रिया विज्ञान, पोषण एवं प्रमुख रोग",
        "weightageEstimated": "3–4 Questions",
        "topics": [
          {
            "id": "sci-top-cell-organs",
            "name": "Cell Structure, Organelles, Photosynthesis & Human Systems",
            "hindiName": "पादप व जंतु कोशिका, माइटोकॉन्ड्रिया, प्रकाश संश्लेषण एवं मानव पाचन-परिसंचरण तंत्र",
            "description": "Robert Hooke discovered cell (1665). Mitochondria = Powerhouse of the cell (ATP generation). Ribosome = Protein factory. Lysosome = Suicidal bags. Chloroplast = Kitchen of plant cell. Photosynthesis: 6CO2 + 12H2O + Light → C6H12O6 + 6O2 + 6H2O. Chlorophyll contains Magnesium (Mg). Human Circulatory system: Heart (4 chambers), Arteries (pure blood, except pulmonary artery), Veins (impure blood). Universal Donor = O-negative; Universal Recipient = AB-positive.",
            "hindiDescription": "कोशिका की खोज 1665 में रॉबर्ट हुक ने की। माइटोकॉन्ड्रिया: कोशिका का पावरहाउस (ATP निर्माण)। राइबोसोम: प्रोटीन फैक्ट्री। लाइसोसोम: आत्मघाती थैली। क्लोरोफिल में मैग्नीशियम धातु पाई जाती है। मानव हृदय में 4 कोष्ठ होते हैं। सर्वदाता रक्त समूह: O नेगेटिव (O-); सर्वग्राही रक्त समूह: AB पॉजिटिव (AB+)।",
            "subtopics": [
              "Cell organelle functions chart",
              "Photosynthesis chemical equation",
              "Human heart 4 chambers & circulation",
              "Blood groups and Rh factor"
            ],
            "ncertMapping": {
              "classes": [
                8,
                9,
                10
              ],
              "subjects": [
                "Science"
              ],
              "chapterNames": [
                "Fundamental Unit of Life",
                "Life Processes"
              ],
              "portalLink": "https://ncert.nic.in/textbook.php"
            },
            "scertMapping": {
              "classes": [
                6,
                7,
                8
              ],
              "bookName": "Vigyan",
              "chapterName": "Jeev Jagat"
            },
            "difficulty": "medium",
            "importance": "High",
            "estimatedHours": 5,
            "keyFormulasOrFacts": [
              "कोशिका का 'पावर हाउस' (Powerhouse of the Cell): माइटोकॉन्ड्रिया",
              "क्लोरोफिल (पर्णहरित) में मुख्य रूप से मैग्नीशियम (Mg) धातु पाई जाती है",
              "सर्वदाता (Universal Donor) रक्त समूह: O-negative (O-)",
              "सर्वग्राही (Universal Recipient) रक्त समूह: AB-positive (AB+)",
              "मानव शरीर की सबसे बड़ी ग्रंथि: यकृत (Liver)"
            ]
          },
          {
            "id": "sci-top-vitamins-diseases",
            "name": "Vitamins, Deficiency Diseases, Bacteria, Virus & Protozoa",
            "hindiName": "विटामिन (जल/वसा में घुलनशील), हीनताजन्य रोग, जीवाणु, विषाणु व प्रोटोजोआ जनित रोग",
            "description": "Vitamins fat soluble: K, E, D, A (KEDA). Water soluble: B and C. Vitamin A (Retinol, Night blindness), B1 (Thiamine, Beriberi), B12 (Cyanocobalamin, contains Cobalt, Pernicious anemia), C (Ascorbic acid, Scurvy, destroyed by heating), D (Calciferol, Rickets), E (Tocopherol, Infertility), K (Phylloquinone, Blood clotting). Viral diseases: Polio, Rabies, AIDS, Chickenpox. Bacterial diseases: Tuberculosis (BCG vaccine), Cholera, Typhoid, Tetanus. Protozoan: Malaria (Plasmodium, Female Anopheles mosquito).",
            "hindiDescription": "वसा में घुलनशील विटामिन: K, E, D, A। जल में घुलनशील: B और C। विटामिन A (रतौंधी), विटामिन B1 (बेरी-बेरी), विटामिन B12 (कोबाल्ट धातु), विटामिन C (एस्कॉर्बिक एसिड, स्कर्वी - गर्म करने पर नष्ट), विटामिन D (रिकेट्स), विटामिन K (रक्त का थक्का न जमना)। विषाणु जनित: पोलियो, रेबीज, एड्स, चेचक। जीवाणु जनित: टीबी (BCG टीका), हैजा, टाइफाइड। प्रोटोजोआ जनित: मलेरिया (प्लास्मोडियम, मादा एनाफिलीज़ मच्छर)।",
            "subtopics": [
              "Fat vs Water soluble vitamins",
              "Vitamin chemical names and deficiency chart",
              "Viral vs Bacterial diseases mnemonic",
              "Malaria lifecycle and mosquito vector"
            ],
            "difficulty": "medium",
            "importance": "High",
            "estimatedHours": 4,
            "keyFormulasOrFacts": [
              "जल में घुलनशील विटामिन: Vitamin B और Vitamin C",
              "वसा में घुलनशील विटामिन: Vitamin K, E, D, A (Trick: KEDA)",
              "विटामिन B12 (साइनोकोबालामिन) में कोबाल्ट (Cobalt) धातु पाई जाती है",
              "विटामिन C (एस्कॉर्बिक अम्ल) गर्म करने पर सबसे पहले नष्ट होता है",
              "मलेरिया रोग प्रोटोजोआ (प्लास्मोडियम) द्वारा फैलता है, वाहक: मादा एनाफिलीज़ मच्छर"
            ]
          }
        ]
      }
    ]
  },
  "social-science": {
    "title": "Social Studies & History-Polity-Geo",
    "chapters": [
      {
        "id": "sst-history",
        "name": "1857 Revolt, Freedom Struggle & Major Dynasties",
        "hindiName": "भारतीय इतिहास: 1857 की क्रांति, स्वतंत्रता आंदोलन एवं प्रमुख राजवंश",
        "weightageEstimated": "3–4 Questions",
        "topics": [
          {
            "id": "sst-top-1857-struggle",
            "name": "1857 Revolt in UP (Meerut, Jhansi, Kanpur, Lucknow, Faizabad) & INC Sessions",
            "hindiName": "1857 का विद्रोह (मेरठ, झांसी, कानपुर, लखनऊ), काकोरी एक्शन एवं राष्ट्रीय आंदोलन",
            "description": "Outbreak of 1857 revolt on 10 May 1857 in Meerut. Key UP leaders: Rani Lakshmibai (Jhansi), Nana Saheb & Tatya Tope (Kanpur), Begum Hazrat Mahal (Lucknow), Maulvi Liaquat Ali (Prayagraj/Allahabad), Maulvi Ahmadullah Shah (Faizabad). Indian National Congress (founded 1885 by A.O. Hume, 1st session Bombay, President W.C. Bonnerjee). Non-Cooperation Movement (1920, ended after Chauri Chaura incident 4 Feb 1922 in Gorakhpur). Kakori Train Action (9 Aug 1925, Ram Prasad Bismil, Ashfaqulla Khan).",
            "hindiDescription": "1857 की क्रांति का प्रारंभ 10 मई 1857 को मेरठ से हुआ। प्रमुख नेतृत्वकर्ता: रानी लक्ष्मीबाई (झांसी), नाना साहेब व तात्या टोपे (कानपुर), बेगम हज़रत महल (लखनऊ), लियाकत अली (प्रयागराज), मौलवी अहमदुल्लाह शाह (फैजाबाद)। भारतीय राष्ट्रीय कांग्रेस की स्थापना 1885 में ए.ओ. ह्यूम द्वारा। असहयोग आंदोलन (1920) चौरी-चौरा कांड (4 फरवरी 1922, गोरखपुर) के कारण गांधीजी द्वारा स्थगित किया गया। काकोरी ट्रेन एक्शन (9 अगस्त 1925)।",
            "subtopics": [
              "1857 revolt centers and leaders in UP",
              "Chauri Chaura incident date & location",
              "Kakori Train Action patriots",
              "Major INC sessions (1907 Surat, 1916 Lucknow, 1929 Lahore)"
            ],
            "ncertMapping": {
              "classes": [
                8,
                10
              ],
              "subjects": [
                "History Our Pasts"
              ],
              "chapterNames": [
                "When People Rebel 1857",
                "Nationalist Movement in India"
              ],
              "portalLink": "https://ncert.nic.in/textbook.php"
            },
            "scertMapping": {
              "classes": [
                5,
                6,
                7
              ],
              "bookName": "Hamara Itihas Aur Nagrik Jeevan",
              "chapterName": "1857 Ka Sangram"
            },
            "difficulty": "medium",
            "importance": "High",
            "estimatedHours": 5,
            "keyFormulasOrFacts": [
              "1857 की क्रांति का श्रीगणेश 10 मई 1857 को मेरठ छावनी से हुआ था",
              "लखनऊ में 1857 के विद्रोह का नेतृत्व बेगम हज़रत महल ने किया था",
              "चौरी-चौरा कांड 4 फरवरी 1922 को उत्तर प्रदेश के गोरखपुर जिले में हुआ",
              "काकोरी ट्रेन एक्शन 9 अगस्त 1925 को लखनऊ के निकट हुआ था",
              "1916 का लखनऊ समझौता (Lucknow Pact) कांग्रेस और मुस्लिम लीग के बीच हुआ (अध्यक्ष: ए.सी. मजूमदार)"
            ]
          }
        ]
      },
      {
        "id": "sst-geography",
        "name": "Geography: Physical Features, Rivers, Climate & Soil",
        "hindiName": "भारत एवं उत्तर प्रदेश का भूगोल: नदियां, पर्वत, जलवायु, मिट्टी व कृषि",
        "weightageEstimated": "3–4 Questions",
        "topics": [
          {
            "id": "sst-top-india-up-geo",
            "name": "Himalayas, Ganga River Basin, Soils, Monsoons & UP Geography",
            "hindiName": "हिमालयी श्रेणियां, गंगा-यमुना नदी तंत्र, प्रमुख मृदा प्रकार एवं उत्तर प्रदेश का भौगोलिक स्वरूप",
            "description": "Himalayan ranges (Himadri, Himachal, Shivalik). Peninsular rivers vs Himalayan rivers. Ganga enters UP at Bijnor and leaves at Ballia. Yamuna meets Ganga at Prayagraj (Sangam). UP geographical extent: Bhabhar and Terai belt in north, Gangetic plains in center, Vindhyan plateau/Bundelkhand in south. Alluvial soil (Khadar = new alluvium, Bangar = old alluvium). Black soil (Regur) for cotton.",
            "hindiDescription": "गंगा नदी उत्तर प्रदेश में बिजनौर जिले से प्रवेश करती है और बलिया जिले से बाहर निकलती है। प्रयागराज में गंगा, यमुना व सरस्वती का संगम। भाभर एवं तराई क्षेत्र (महीन अवसाद, नम दलदली भूमि)। जलोढ़ मिट्टी (खादर = नवीन उपजाऊ जलोढ़, बांगर = पुरानी जलोढ़)। काली मिट्टी को 'रेगुर' मिट्टी भी कहते हैं।",
            "subtopics": [
              "Ganga entry and exit in UP",
              "Bhabhar vs Terai belt features",
              "Khadar vs Bangar soil difference",
              "Major dams and multipurpose projects"
            ],
            "ncertMapping": {
              "classes": [
                7,
                9,
                11
              ],
              "subjects": [
                "Geography"
              ],
              "chapterNames": [
                "Drainage",
                "Physical Features of India"
              ],
              "portalLink": "https://ncert.nic.in/textbook.php"
            },
            "scertMapping": {
              "classes": [
                5,
                6,
                7
              ],
              "bookName": "Hamara Parivesh / Hamari Prithvi",
              "chapterName": "Bharat Ka Bhugol"
            },
            "difficulty": "medium",
            "importance": "High",
            "estimatedHours": 5,
            "keyFormulasOrFacts": [
              "गंगा नदी उत्तर प्रदेश के बिजनौर जिले से प्रवेश करती है तथा बलिया से बाहर निकलती है",
              "नवीन जलोढ़ मृदा को 'खादर' तथा पुरानी जलोढ़ मृदा को 'बांगर' कहा जाता है",
              "काली मिट्टी को 'रेगुर' अथवा 'कपास की मिट्टी' भी कहते हैं",
              "उत्तर प्रदेश का सबसे दक्षिणी भाग 'बुंदेलखंड पठार' कहलाता है",
              "भारत की मानक समय रेखा 82.5° पूर्वी देशांतर प्रयागराज (मिर्जापुर/नैनी) से होकर गुजरती है"
            ]
          }
        ]
      },
      {
        "id": "sst-polity",
        "name": "Indian Constitution & Governance System",
        "hindiName": "भारतीय संविधान, मौलिक अधिकार, संसद एवं पंचायती राज",
        "weightageEstimated": "3–4 Questions",
        "topics": [
          {
            "id": "sst-top-constitution-core",
            "name": "Preamble, Fundamental Rights (12-35), DPSPs, President & 73rd Amendment",
            "hindiName": "प्रस्तावना, मूल अधिकार (अनुच्छेद 12-35), नीति निदेशक तत्व, राष्ट्रपति एवं पंचायती राज",
            "description": "Constitution adopted on 26 Nov 1949 (Constitution Day), enforced 26 Jan 1950. Fundamental Rights (6 currently): Equality (14-18), Freedom (19-22), Right to Education (Article 21A, 86th amendment 2002), Against Exploitation (23-24, child labor prohibition), Freedom of Religion (25-28), Cultural & Educational (29-30), Constitutional Remedies (Article 32 - Heart and Soul of Constitution per Dr. Ambedkar; 5 writs: Habeas Corpus, Mandamus, Prohibition, Quo-Warranto, Certiorari). DPSP (Part IV, Articles 36-51, borrowed from Ireland). 73rd Amendment 1992 (Panchayati Raj, 11th Schedule, 29 subjects).",
            "hindiDescription": "संविधान सभा की प्रथम बैठक: 9 दिसंबर 1946 (अस्थायी अध्यक्ष: डॉ. सच्चिदानंद सिन्हा)। स्थायी अध्यक्ष: डॉ. राजेंद्र प्रसाद। प्रारूप समिति के अध्यक्ष: डॉ. बी.आर. अम्बेडकर। मौलिक अधिकार (भाग 3, अनुच्छेद 12-35)। शिक्षा का मौलिक अधिकार: अनुच्छेद 21A (86वां संविधान संशोधन 2002)। अनुच्छेद 32 को डॉ. अम्बेडकर ने 'संविधान की आत्मा एवं हृदय' कहा। पंचायती राज (73वां संशोधन 1992, 11वीं अनुसूची, 29 विषय)।",
            "subtopics": [
              "Constituent Assembly milestones",
              "Article 21A RTE provisions",
              "Article 32 & 5 Writs",
              "Panchayati Raj 73rd amendment",
              "Fundamental Duties (Part IV-A, Article 51A, 11 duties)"
            ],
            "ncertMapping": {
              "classes": [
                8,
                9,
                11
              ],
              "subjects": [
                "Political Science"
              ],
              "chapterNames": [
                "The Indian Constitution",
                "Fundamental Rights"
              ],
              "portalLink": "https://ncert.nic.in/textbook.php"
            },
            "scertMapping": {
              "classes": [
                6,
                7,
                8
              ],
              "bookName": "Nagrik Jeevan",
              "chapterName": "Hamara Samvidhan"
            },
            "difficulty": "medium",
            "importance": "High",
            "estimatedHours": 6,
            "keyFormulasOrFacts": [
              "शिक्षा का अधिकार (RTE) संविधान के अनुच्छेद 21A में 86वें संविधान संशोधन 2002 द्वारा जोड़ा गया",
              "डॉ. अम्बेडकर ने अनुच्छेद 32 (संवैधानिक उपचारों का अधिकार) को 'संविधान का हृदय और आत्मा' कहा",
              "प्रारूप समिति (Drafting Committee) के अध्यक्ष: डॉ. भीमराव अम्बेडकर",
              "राष्ट्रीय पंचायती राज दिवस प्रत्येक वर्ष 24 अप्रैल को मनाया जाता है (73वां संशोधन)",
              "मूल कर्तव्य (Fundamental Duties) 42वें संशोधन 1976 द्वारा स्वर्ण सिंह समिति की सिफारिश पर जोड़े गए (भाग 4A, अनु. 51A)"
            ]
          }
        ]
      }
    ]
  },
  "evs": {
    "title": "Environmental Studies (EVS)",
    "chapters": [
      {
        "id": "evs-ecosystem",
        "name": "Ecosystem, Food Chains, Biomes & Biodiversity",
        "hindiName": "पारिस्थितिकी तंत्र, खाद्य श्रृंखला, जैव विविधता एवं राष्ट्रीय उद्यान",
        "weightageEstimated": "4–6 Questions (UPTET 15+ Qs)",
        "topics": [
          {
            "id": "evs-top-eco-chains",
            "name": "Biotic/Abiotic Factors, 10% Energy Rule, Dudhwa & UP Sanctuaries",
            "hindiName": "पारिस्थितिकी तंत्र, 10% ऊर्जा का नियम (लिंडमैन), दुधवा नेशनल पार्क व पक्षी विहार",
            "description": "Ecosystem term coined by A.G. Tansley (1935). Ecology term by Ernst Haeckel (1866). Trophic levels: Producers (autotrophs), Primary consumers (herbivores), Secondary consumers, Decomposers. Lindeman's 10% law of energy transfer (1942). UP's only National Park: Dudhwa National Park (Lakhimpur Kheri - Tiger, Rhinoceros, Barasingha). Prominent UP Bird Sanctuaries: Nawabganj / Shahid Chandra Shekhar Azad (Unnao), Samaspur (Rae Bareli), Okhla (Gautam Buddha Nagar), Sandi (Hardoi), Bakira (Sant Kabir Nagar).",
            "hindiDescription": "पारिस्थितिकी तंत्र (Ecosystem) शब्द का प्रथम प्रयोग: ए.जी. टांसले (1935)। लिंडमैन का 10% ऊर्जा नियम: एक पोषण स्तर से दूसरे पोषण स्तर में केवल 10% ऊर्जा स्थानांतरित होती है। उत्तर प्रदेश का एकमात्र राष्ट्रीय उद्यान: दुधवा राष्ट्रीय उद्यान (लखीमपुर खीरी - बाघ व बारहसिंगा)। प्रमुख पक्षी विहार: नवाबगंज (उन्नाव - प्रथम पक्षी विहार), समसपुर (रायबरेली), ओखला (नोएडा), बखिरा (संत कबीर नगर)।",
            "subtopics": [
              "Lindeman 10% energy transfer rule",
              "Producers vs Consumers vs Decomposers",
              "Dudhwa National Park wildlife",
              "UP Bird Sanctuaries locations table"
            ],
            "ncertMapping": {
              "classes": [
                7,
                8,
                10
              ],
              "subjects": [
                "Science / EVS"
              ],
              "chapterNames": [
                "Our Environment",
                "Ecosystem"
              ],
              "portalLink": "https://ncert.nic.in/textbook.php"
            },
            "scertMapping": {
              "classes": [
                3,
                4,
                5
              ],
              "bookName": "Hamara Parivesh",
              "chapterName": "Jeev Jantu Aur Hum"
            },
            "difficulty": "medium",
            "importance": "High",
            "estimatedHours": 5,
            "keyFormulasOrFacts": [
              "लिंडमैन का 10% नियम (1942): प्रत्येक अगले पोषण स्तर पर केवल 10% ऊर्जा का प्रवाह होता है (90% ऊर्जा का ह्रास होता है)",
              "उत्तर प्रदेश का एकमात्र राष्ट्रीय उद्यान: दुधवा नेशनल पार्क (लखीमपुर खीरी जिला)",
              "पारिस्थितिकी तंत्र (Ecosystem) शब्द सर्वप्रथम ए.जी. टांसले ने 1935 में दिया",
              "ऊर्जा का पिरामिड (Pyramid of Energy) सदैव सीधा (Upright) होता है",
              "चिपको आंदोलन के प्रणेता सुंदरलाल बहुगुणा व चंडी प्रसाद भट्ट थे (उत्तराखंड के चमोली में प्रारंभ)"
            ]
          }
        ]
      },
      {
        "id": "evs-pollution-acts",
        "name": "Pollution, Global Warming, Ozone Layer & Environmental Acts",
        "hindiName": "प्रदूषण, ग्रीनहाउस प्रभाव, ओजोन परत क्षरण एवं प्रमुख पर्यावरण कानून",
        "weightageEstimated": "4–6 Questions",
        "topics": [
          {
            "id": "evs-top-pollution-laws",
            "name": "Greenhouse Gases, Ozone Depletion (Dobson Unit) & EPA 1986",
            "hindiName": "ग्रीनहाउस गैसें, ओजोन परत (डॉबसन इकाई), मॉन्ट्रियल प्रोटोकॉल व पर्यावरण अधिनियम",
            "description": "Greenhouse gases: Carbon dioxide (CO2), Methane (CH4), Nitrous oxide (N2O), CFCs, Water vapor. Ozone layer is present in Stratosphere, protects from UV rays. Ozone hole discovered over Antarctica. Ozone thickness measured in Dobson Units (DU). Montreal Protocol (1987) for Ozone protection. Wildlife Protection Act 1972, Project Tiger (1973), Forest Conservation Act 1980, Environment Protection Act 1986 (Umbrella legislation passed after Bhopal Gas Tragedy 1984). World Environment Day = 5 June; World Ozone Day = 16 September.",
            "hindiDescription": "ग्रीनहाउस गैसें: CO2, मीथेन (CH4 - धान के खेतों व जुगाली करने वाले पशुओं से), CFC। ओजोन परत समताप मंडल (Stratosphere) में स्थित है; यह पराबैंगनी (UV-B) किरणों को अवशोषित करती है। ओजोन परत की मोटाई 'डॉबसन' (Dobson) इकाई में मापी जाती है। मॉन्ट्रियल प्रोटोकॉल (1987) ओजोन संरक्षण हेतु हुआ। प्रमुख कानून: वन्यजीव संरक्षण अधिनियम (1972), प्रोजेक्ट टाइगर (1973), वन संरक्षण अधिनियम (1980), पर्यावरण संरक्षण अधिनियम (1986)। विश्व पर्यावरण दिवस: 5 जून; विश्व ओजोन दिवस: 16 सितंबर।",
            "subtopics": [
              "Major greenhouse gases sources",
              "Stratospheric ozone & Dobson units",
              "Montreal Protocol vs Kyoto Protocol",
              "Chronology of Indian Environmental Acts (1972, 1973, 1980, 1986)"
            ],
            "difficulty": "medium",
            "importance": "High",
            "estimatedHours": 5,
            "keyFormulasOrFacts": [
              "ओजोन परत समताप मंडल (Stratosphere) में पाई जाती है",
              "ओजोन परत की मोटाई मापने की इकाई: डॉबसन इकाई (Dobson Unit)",
              "विश्व पर्यावरण दिवस: 5 जून; विश्व ओजोन दिवस: 16 सितंबर",
              "पर्यावरण संरक्षण अधिनियम 1986 (EPA 1986) भोपाल गैस त्रासदी (1984) के बाद पारित हुआ",
              "प्रोजेक्ट टाइगर (Project Tiger) की शुरुआत वर्ष 1973 में हुई थी"
            ]
          }
        ]
      }
    ]
  },
  "teaching-skills": {
    "title": "Teaching Skills & Methodology",
    "chapters": [
      {
        "id": "ts-methods",
        "name": "Teaching Methods, Maxims & Micro-Teaching",
        "hindiName": "शिक्षण की विधियां, शिक्षण सूत्र, सूक्ष्म शिक्षण एवं पाठ योजना",
        "weightageEstimated": "4–5 Questions",
        "topics": [
          {
            "id": "ts-top-maxims-micro",
            "name": "Teaching Maxims, Inductive/Deductive, Project Method & 36-Min Microteaching",
            "hindiName": "शिक्षण सूत्र (ज्ञात से अज्ञात, मूर्त से अमूर्त), आगमन-निगमन विधि एवं 36 मिनट का सूक्ष्म शिक्षण",
            "description": "Maxims of teaching: Simple to Complex, Known to Unknown, Concrete to Abstract (Murta se Amurta), Direct to Indirect, Particular to General, Whole to Part (Gestalt). Teaching Methods: Inductive (Aagaman: Example to Rule), Deductive (Nigaman: Rule to Example), Project Method (Kilpatrick, Pragmatism/John Dewey), Kindergarten (Froebel), Heuristic/Discovery Method (Armstrong), Problem Solving Method. Micro-teaching cycle by NCERT standard (Total 36 Minutes): 1. Planning (pre-session), 2. Teach (6 min), 3. Feedback (6 min), 4. Re-plan (12 min), 5. Re-teach (6 min), 6. Re-feedback (6 min).",
            "hindiDescription": "शिक्षण सूत्र: ज्ञात से अज्ञात की ओर, सरल से कठिन की ओर, मूर्त से अमूर्त की ओर, पूर्ण से अंश की ओर (गेस्टाल्ट सिद्धांत)। शिक्षण विधियां: आगमन विधि (उदाहरण से नियम की ओर - बाल केंद्रित), निगमन विधि (नियम से उदाहरण की ओर), प्रोजेक्ट विधि (विलियम किलपैट्रिक), किंडरगार्टन (फ्रोबेल), ह्यूरिस्टिक/खोज विधि (एच.ई. आर्मस्ट्रांग)। एनसीईआरटी का सूक्ष्म शिक्षण चक्र (कुल 36 मिनट): 1. शिक्षण (6 मिनट), 2. प्रतिपुष्टि (6 मिनट), 3. पुनः पाठ योजना (12 मिनट), 4. पुनः शिक्षण (6 मिनट), 5. पुनः प्रतिपुष्टि (6 मिनट)।",
            "subtopics": [
              "6 Maxims of Teaching",
              "Inductive vs Deductive contrast",
              "Kilpatrick Project Method principles",
              "NCERT 36-Minute Microteaching breakdown"
            ],
            "ncertMapping": {
              "classes": [
                1,
                2,
                3
              ],
              "subjects": [
                "Pedagogy Guidelines"
              ],
              "chapterNames": [
                "Child Centered Pedagogy"
              ],
              "portalLink": "https://ncert.nic.in/textbook.php"
            },
            "scertMapping": {
              "classes": [
                1,
                2
              ],
              "bookName": "D.El.Ed Shikshan Adhigam Ke Siddhant",
              "chapterName": "Shikshan Vidhiyan"
            },
            "difficulty": "medium",
            "importance": "High",
            "estimatedHours": 5,
            "keyFormulasOrFacts": [
              "आगमन विधि (Inductive): पहले उदाहरण फिर नियम (उदाहरण → नियम)",
              "निगमन विधि (Deductive): पहले नियम फिर उदाहरण (नियम → उदाहरण)",
              "प्रोजेक्ट विधि के प्रतिपादक: विलियम किलपैट्रिक (जॉन डीवी के शिष्य)",
              "किंडरगार्टन (Kindergarten) प्रणाली के जनक: फ्रोबेल (Froebel)",
              "एनसीईआरटी के अनुसार भारतीय सूक्ष्म शिक्षण चक्र की मानक अवधि = 36 मिनट"
            ]
          }
        ]
      },
      {
        "id": "ts-inclusive-rte",
        "name": "Inclusive Education, CCE & RTE Act 2009",
        "hindiName": "समावेशी शिक्षा, सतत व व्यापक मूल्यांकन (CCE) एवं आरटीई 2009",
        "weightageEstimated": "3–4 Questions",
        "topics": [
          {
            "id": "ts-top-rte-cce",
            "name": "RTE Act 2009 Key Clauses, PTR Ratios & Diagnostic vs Remedial Teaching",
            "hindiName": "शिक्षा का अधिकार अधिनियम 2009 (धाराएं, छात्र-शिक्षक अनुपात 30:1) एवं निदानात्मक-उपचारात्मक शिक्षण",
            "description": "Right of Children to Free and Compulsory Education Act (RTE 2009): Enacted 4 Aug 2009, enforced across India on 1 April 2010. Covers ages 6–14 years (up to 18 years for children with disabilities). Pupil-Teacher Ratio (PTR): Primary (1-5) = 30:1 (up to 200 students); Upper Primary (6-8) = 35:1. Minimum working days: 200 days / 800 hours for Primary; 220 days / 1000 hours for Upper Primary. Minimum working hours per week for teachers: 45 hours (including preparation hours). Section 17 bans physical punishment. Diagnostic Teaching (identifying learning gaps) followed by Remedial Teaching (corrective instruction).",
            "hindiDescription": "आरटीई अधिनियम 2009 पूरे देश में 1 अप्रैल 2010 से प्रभावी हुआ (6 से 14 वर्ष तक निःशुल्क व अनिवार्य शिक्षा)। छात्र-शिक्षक अनुपात (PTR): प्राथमिक स्तर पर 30:1; उच्च प्राथमिक स्तर पर 35:1। प्राथमिक स्तर पर न्यूनतम कार्य दिवस: 200 दिन (800 घंटे); उच्च प्राथमिक पर: 220 दिन (1000 घंटे)। शिक्षक हेतु प्रति सप्ताह न्यूनतम 45 कार्य घंटे (तैयारी सहित)। धारा 17 शारीरिक दंड पर प्रतिबंध लगाती है। निदानात्मक शिक्षण (कमियों का पता लगाना) के बाद उपचारात्मक शिक्षण (कमियों को दूर करना) किया जाता है।",
            "subtopics": [
              "RTE 2009 implementation date (1 April 2010)",
              "Primary PTR 30:1 and Upper Primary 35:1",
              "Weekly 45 hours for teachers rule",
              "Diagnostic vs Remedial teaching pipeline"
            ],
            "difficulty": "medium",
            "importance": "High",
            "estimatedHours": 5,
            "keyFormulasOrFacts": [
              "आरटीई अधिनियम 2009 पूरे भारत में लागू हुआ: 1 अप्रैल 2010 से",
              "प्राथमिक विद्यालयों में छात्र-शिक्षक अनुपात (PTR): 30:1",
              "उच्च प्राथमिक विद्यालयों में छात्र-शिक्षक अनुपात: 35:1",
              "शिक्षक के लिए प्रति सप्ताह न्यूनतम कार्य घंटे: 45 घंटे (तैयारी के घंटों सहित)",
              "निदानात्मक परीक्षण (Diagnostic Test) में कमियों की पहचान की जाती है, उपचारात्मक शिक्षण (Remedial Teaching) में उनका निवारण किया जाता है"
            ]
          }
        ]
      }
    ]
  },
  "child-development": {
    "title": "Child Development & Psychology",
    "chapters": [
      {
        "id": "cd-theories",
        "name": "Core Development & Learning Theories (Piaget, Vygotsky, Kohlberg, Thorndike)",
        "hindiName": "बाल विकास के सिद्धांत: पियाजे, वाइगोत्स्की, कोहलबर्ग, थार्नडाइक, पावलव व स्किनर",
        "weightageEstimated": "5–6 Questions",
        "topics": [
          {
            "id": "cd-top-piaget-vygotsky",
            "name": "Jean Piaget 4 Cognitive Stages, Vygotsky ZPD & Kohlberg Morality",
            "hindiName": "पियाजे के 4 संज्ञानात्मक चरण, वाइगोत्स्की का ZPD व स्केफोल्डिंग, कोहलबर्ग के नैतिक विकास के 3 स्तर",
            "description": "Jean Piaget (Constructivism): 1. Sensorimotor (0-2 yrs, Object Permanence), 2. Pre-operational (2-7 yrs, Egocentrism, Centration, Animism), 3. Concrete Operational (7-11 yrs, Conservation, Reversibility, Classification), 4. Formal Operational (11+ yrs, Abstract & Hypothetical Deductive reasoning). Lev Vygotsky (Socio-cultural theory): Zone of Proximal Development (ZPD), Scaffolding (temporary support by MKO - More Knowledgeable Other), Private Speech. Lawrence Kohlberg (Moral Development): Pre-conventional, Conventional (Good boy/nice girl orientation, Law & Order), Post-conventional.",
            "hindiDescription": "जीन पियाजे के 4 अवस्थाएं: 1. संवेदी-गामक (0-2 वर्ष, वस्तु स्थायित्व), 2. पूर्व-संक्रियात्मक (2-7 वर्ष, अहंकेंद्रित, जीववाद), 3. मूर्त-संक्रियात्मक (7-11 वर्ष, संरक्षण, पलटावी गुण), 4. औपचारिक/अमूर्त संक्रियात्मक (11+ वर्ष, अमूर्त चिंतन)। वाइगोत्स्की का सामाजिक-सांस्कृतिक सिद्धांत: ZPD (संभावित विकास का क्षेत्र), स्केफोल्डिंग (मचान / पाड़ - अस्थायी सहायता)। कोहलबर्ग के नैतिक विकास के 3 स्तर व 6 चरण ('हिंज की दुविधा')।",
            "subtopics": [
              "Piaget 4 stages and hallmark characteristics",
              "Object Permanence vs Conservation",
              "Vygotsky ZPD and Scaffolding concept",
              "Kohlberg 3 levels and Heinz dilemma"
            ],
            "ncertMapping": {
              "classes": [
                11,
                12
              ],
              "subjects": [
                "Psychology"
              ],
              "chapterNames": [
                "Human Development"
              ],
              "portalLink": "https://ncert.nic.in/textbook.php"
            },
            "scertMapping": {
              "classes": [
                1,
                2
              ],
              "bookName": "D.El.Ed Bal Vikas",
              "chapterName": "Vikas Ki Awasthayein"
            },
            "difficulty": "hard",
            "importance": "High",
            "estimatedHours": 6,
            "keyFormulasOrFacts": [
              "पियाजे के अनुसार वस्तु स्थायित्व (Object Permanence) संवेदी-गामक अवस्था (0-2 वर्ष) में आता है",
              "संरक्षण (Conservation) एवं पलटावी गुण मूर्त-संक्रियात्मक अवस्था (7-11 वर्ष) में विकसित होते हैं",
              "ZPD (Zone of Proximal Development) की अवधारणा लेव वाइगोत्स्की द्वारा दी गई",
              "सीखने में बड़ों द्वारा दी जाने वाली अस्थायी सहायता को 'स्केफोल्डिंग' (Scaffolding / पाड़) कहते हैं"
            ]
          },
          {
            "id": "cd-top-thorndike-pavlov-skinner",
            "name": "Classical & Operant Conditioning: Thorndike, Pavlov, Skinner & Kohler",
            "hindiName": "थार्नडाइक का प्रयास व त्रुटि, पावलव का शास्त्रीय अनुबंधन, स्किनर का क्रियाप्रसूत व कोहलर की अंतर्दृष्टि",
            "description": "E.L. Thorndike (Trial & Error, Connectionism, Cat in puzzle box): 3 Primary laws: Law of Readiness, Law of Exercise, Law of Effect. 5 Secondary laws. Ivan Pavlov (Classical Conditioning, Dog salivary response): Unconditioned Stimulus (UCS: Food) -> Unconditioned Response (UCR: Salivation); Conditioned Stimulus (CS: Bell) -> Conditioned Response (CR: Salivation). B.F. Skinner (Operant Conditioning, Rat & Pigeon in Skinner box): Positive & Negative reinforcement, Punishment. Wolfgang Kohler (Insight Learning, Chimpanzee 'Sultan' box and stick experiment, Gestalt psychology).",
            "hindiDescription": "थार्नडाइक (प्रयास एवं त्रुटि सिद्धांत - बिल्ली पर प्रयोग): 3 मुख्य नियम = 1. तत्परता का नियम, 2. अभ्यास का नियम, 3. प्रभाव/संतोष का नियम। पावलव (शास्त्रीय अनुबंधन - कुत्ते पर प्रयोग): भोजन (UCS) → लार (UCR); घंटी (CS) → लार (CR)। बी.एफ. स्किनर (क्रियाप्रसूत अनुबंधन - चूहे व कबूतर पर प्रयोग): पुनर्बलन (धनात्मक व ऋणात्मक)। कोहलर (अंतर्दृष्टि / सूझ का सिद्धांत - 'सुल्तान' नामक चिंपैंजी पर प्रयोग, गेस्टाल्टवाद)।",
            "subtopics": [
              "Thorndike 3 Primary laws",
              "Pavlov UCS, UCR, CS, CR framework",
              "Skinner positive vs negative reinforcement",
              "Kohler Sultan chimpanzee experiments"
            ],
            "difficulty": "medium",
            "importance": "High",
            "estimatedHours": 5,
            "keyFormulasOrFacts": [
              "थार्नडाइक के 3 मुख्य नियम: तत्परता का नियम, अभ्यास का नियम, प्रभाव का नियम",
              "पावलव के प्रयोग में अस्वाभाविक उद्दीपक (CS): घंटी की आवाज; स्वाभाविक उद्दीपक (UCS): भोजन",
              "क्रियाप्रसूत अनुबंधन सिद्धांत (Operant Conditioning) के प्रतिपादक: बी.एफ. स्किनर",
              "कोहलर ने अपने अंतर्दृष्टि सिद्धांत के प्रयोग 'सुल्तान' नामक चिंपैंजी पर किए थे (गेस्टाल्टवादी)"
            ]
          }
        ]
      }
    ]
  },
  "life-skills": {
    "title": "Life Skills, Management & Attitude",
    "chapters": [
      {
        "id": "ls-core",
        "name": "Professional Ethics, Maslow Hierarchy & Teacher's Role",
        "hindiName": "जीवन कौशल, शिक्षक की व्यावसायिक आचार संहिता, प्रेरणा एवं नेतृत्व",
        "weightageEstimated": "8 Questions (24 Marks)",
        "topics": [
          {
            "id": "ls-top-maslow-ethics",
            "name": "Maslow Need Hierarchy (5 Levels), Intrinsic Motivation & Constitutional Values",
            "hindiName": "अब्राहम मास्लो का आवश्यकता पदानुक्रम, आंतरिक बनाम बाह्य प्रेरणा एवं शिक्षक की आचार संहिता",
            "description": "Abraham Maslow's Hierarchy of Human Needs (Pyramid): 1. Physiological needs (food, water, sleep), 2. Safety needs (security, shelter), 3. Love and belongingness needs (social relationships), 4. Esteem needs (respect, status), 5. Self-Actualization (highest peak). Intrinsic motivation (joy of learning, internal curiosity) vs Extrinsic motivation (rewards, grades, praise). Teacher as Facilitator (Subidhadatta) per NCF 2005. Professional ethics: integrity, student-centered orientation, secularism, non-discrimination.",
            "hindiDescription": "मास्लो का आवश्यकता पदानुक्रम सिद्धांत (5 स्तर): 1. शारीरिक आवश्यकताएं (भूख, प्यास), 2. सुरक्षा की आवश्यकता, 3. स्नेह व अपनत्व (सामाजिक आवश्यकता), 4. सम्मान की आवश्यकता, 5. आत्म-सिद्धि (Self-Actualization - सर्वोच्च शिखर)। प्रेरणा के प्रकार: आंतरिक प्रेरणा (स्वयं की जिज्ञासा, दीर्घकालिक) बनाम बाह्य प्रेरणा (पुरस्कार, अंक, प्रशंसा)। NCF 2005 के अनुसार शिक्षक की भूमिका 'सुविधादाता' (Facilitator) की है।",
            "subtopics": [
              "Maslow 5 levels hierarchy",
              "Intrinsic vs Extrinsic motivation",
              "Teacher as Facilitator in NCF 2005",
              "Positive reinforcement vs Punishment ethics"
            ],
            "ncertMapping": {
              "classes": [
                1,
                2,
                3
              ],
              "subjects": [
                "Teacher Education"
              ],
              "chapterNames": [
                "Ethics and Life Skills"
              ],
              "portalLink": "https://ncert.nic.in/textbook.php"
            },
            "scertMapping": {
              "classes": [
                1,
                2
              ],
              "bookName": "D.El.Ed Jeevan Kaushal",
              "chapterName": "Vyavsayik Acharan"
            },
            "difficulty": "medium",
            "importance": "High",
            "estimatedHours": 4,
            "keyFormulasOrFacts": [
              "मास्लो के आवश्यकता पदानुक्रम में सर्वोच्च आवश्यकता: आत्म-सिद्धि (Self-Actualization)",
              "मास्लो के अनुसार सबसे निचली (प्राथमिक) आवश्यकता: शारीरिक आवश्यकताएं (Physiological Needs)",
              "NCF 2005 के अनुसार एक शिक्षक की मुख्य भूमिका: सुविधादाता (Facilitator)",
              "आंतरिक अभिप्रेरणा (Intrinsic Motivation) सीखने के लिए बाह्य अभिप्रेरणा से अधिक प्रभावी व स्थायी होती है"
            ]
          }
        ]
      }
    ]
  },
  "ict": {
    "title": "Information Technology in Education",
    "chapters": [
      {
        "id": "ict-fundamentals",
        "name": "Computer Basics, Digital Education Portals & Shortcuts",
        "hindiName": "कंप्यूटर मूल बातें, शॉर्टकट कीज, दीक्षा ऐप व डिजिटल शिक्षण पहल",
        "weightageEstimated": "4 Questions (12 Marks)",
        "topics": [
          {
            "id": "ict-top-basics-diksha",
            "name": "Hardware/Software, Memory Units (Bits to TB), DIKSHA, SWAYAM & Prerna Portal",
            "hindiName": "हार्डवेयर/सॉफ्टवेयर, मेमोरी इकाइयां (1 KB = 1024 Bytes), शॉर्टकट कीज एवं दीक्षा व प्रेरणा पोर्टल",
            "description": "Hardware (CPU, ALU, CU, RAM, ROM, Cache, SSD). Memory units: 1 Byte = 8 Bits; 1 KB = 1024 Bytes; 1 MB = 1024 KB; 1 GB = 1024 MB; 1 TB = 1024 GB. Shortcuts: Ctrl+C (Copy), Ctrl+V (Paste), Ctrl+X (Cut), Ctrl+Z (Undo), Ctrl+Y (Redo), Ctrl+S (Save), Ctrl+P (Print), F5 (Refresh). UP Educational Portals: DIKSHA (Digital Infrastructure for Knowledge Sharing, QR code textbooks), SWAYAM (Free online courses), Prerna Portal (UP Basic Education mission monitoring).",
            "hindiDescription": "कंप्यूटर के अंग: सीपीयू (कंप्यूटर का मस्तिष्क), रैम (अस्थायी/Volatile मेमोरी), रोम (स्थायी/Non-volatile)। मेमोरी इकाइयां: 8 बिट्स = 1 बाइट; 1024 बाइट्स = 1 किलोबाइट (KB); 1024 KB = 1 मेगाबाइट (MB); 1024 MB = 1 गीगाबाइट (GB)। प्रमुख शॉर्टकट: Ctrl+C (कॉपी), Ctrl+V (पेस्ट), Ctrl+Z (अनडू)। दीक्षा (DIKSHA): पाठ्यपुस्तकों में क्यूआर कोड द्वारा डिजिटल पाठ्य सामग्री; प्रेरणा पोर्टल (उत्तर प्रदेश बेसिक शिक्षा का गुणवत्ता निगरानी पोर्टल)।",
            "subtopics": [
              "RAM vs ROM differences",
              "Binary memory scale (Bits, Bytes, KB, MB, GB, TB)",
              "Standard Windows shortcuts",
              "DIKSHA and SWAYAM portals purpose"
            ],
            "ncertMapping": {
              "classes": [
                6,
                7,
                8
              ],
              "subjects": [
                "Computer Science / ICT"
              ],
              "chapterNames": [
                "Basics of Computers"
              ],
              "portalLink": "https://ncert.nic.in/textbook.php"
            },
            "scertMapping": {
              "classes": [
                6,
                7,
                8
              ],
              "bookName": "Computer Siksha",
              "chapterName": "Computer Parichay"
            },
            "difficulty": "easy",
            "importance": "High",
            "estimatedHours": 3,
            "keyFormulasOrFacts": [
              "1 बाइट (Byte) = 8 बिट्स (Bits); 1 किलोबाइट (KB) = 1024 बाइट्स",
              "कंप्यूटर का मस्तिष्क (Brain of Computer): CPU (Central Processing Unit)",
              "RAM एक अस्थायी (Volatile) मेमोरी है, जबकि ROM एक स्थायी (Non-volatile) मेमोरी है",
              "दीक्षा (DIKSHA) का पूर्ण रूप: Digital Infrastructure for Knowledge Sharing",
              "Ctrl + Z = Undo (किए गए कार्य को वापस लाना); Ctrl + Y = Redo"
            ]
          }
        ]
      }
    ]
  },
  "reasoning": {
    "title": "Logical Reasoning & Aptitude",
    "chapters": [
      {
        "id": "reas-core",
        "name": "Analogy, Series, Coding-Decoding, Direction & Relations",
        "hindiName": "सादृश्यता, श्रृंखला, कोडिंग-डिकोडिंग, दिशा ज्ञान व रक्त संबंध",
        "weightageEstimated": "5 Questions (15 Marks)",
        "topics": [
          {
            "id": "reas-top-speed-rules",
            "name": "EJOTY Letter Matrix, Opposite Letters (Sum 27), Direction Clocks & Blood Tree",
            "hindiName": "EJOTY नियम, विपरीत अक्षर (योग = 27), दिशा ज्ञान (पाइथागोरस प्रमेय) एवं रक्त संबंध वृक्ष",
            "description": "Alphabet position trick: EJOTY (E=5, J=10, O=15, T=20, Y=25). Opposite letter pairs: Sum of alphabetical positions equals 27 (A+Z=1+26=27, B+Y=2+25=27, C+X=3+24=27, D+W=4+23=27, E+V=5+22=27, F+U=6+21=27, G+T=7+20=27, H+S=8+19=27, I+R=9+18=27, J+Q=10+17=27, K+P=11+16=27, L+O=12+15=27, M+N=13+14=27). Direction sense: Pythagoras theorem (H^2 = P^2 + B^2) for shortest distance. Sunrise shadow falls to the West; Sunset shadow falls to the East. Family tree diagrams for blood relations.",
            "hindiDescription": "वर्णमाला क्रमांक ट्रिक: EJOTY (5, 10, 15, 20, 25)। विपरीत अक्षर ट्रिक: दोनों अक्षरों के क्रमांकों का योग सदैव 27 होता है (A-Z, B-Y, C-X, D-W, E-V, F-U, G-T, H-S, I-R, J-Q, K-P, L-O, M-N)। दिशा ज्ञान: सूर्योदय के समय परछाई पश्चिम में बनती है, सूर्यास्त के समय पूर्व में। न्यूनतम दूरी हेतु पाइथागोरस प्रमेय का प्रयोग। रक्त संबंध में पीढ़ीवार आरेख (Generation Tree)।",
            "subtopics": [
              "EJOTY position matrix",
              "Opposite letters 27 sum rule",
              "Sunrise/Sunset shadow direction rules",
              "Family tree blood relations conventions"
            ],
            "difficulty": "easy",
            "importance": "High",
            "estimatedHours": 4,
            "keyFormulasOrFacts": [
              "EJOTY ट्रिक: E=5, J=10, O=15, T=20, Y=25",
              "विपरीत अक्षरों के स्थानों का योग सदैव 27 होता है (A+Z=27, M+N=27)",
              "सूर्योदय के समय किसी व्यक्ति की छाया सदैव पश्चिम (West) दिशा में पड़ती है",
              "सूर्यास्त के समय छाया सदैव पूर्व (East) दिशा में पड़ती है"
            ]
          }
        ]
      }
    ]
  },
  "general-knowledge": {
    "title": "General Knowledge & UP Special",
    "chapters": [
      {
        "id": "gk-up-special",
        "name": "75 Districts, 18 Divisions, Rivers, Heritage & ODOP Scheme",
        "hindiName": "उत्तर प्रदेश विशेष: 75 जिले, 18 मंडल, नदियां, धरोहर, मेले व ओडीओपी योजना",
        "weightageEstimated": "10–12 Questions",
        "topics": [
          {
            "id": "gk-top-up-core-facts",
            "name": "State Symbols, Demographics, Folk Dances (Charkula, Nautanki) & ODOP Products",
            "hindiName": "उत्तर प्रदेश के राजकीय प्रतीक, लोकनृत्य (चरकुला, रासलीला, नौटंकी) एवं ओडीओपी उत्पाद सूची",
            "description": "UP State Symbols: Animal = Barasingha (Swamp deer); Bird = Sarus crane; Tree = Ashoka; Flower = Palash/Tesu; Aquatic animal = Chitala fish. 75 districts, 18 administrative divisions. Largest district by area = Lakhimpur Kheri; Smallest by area = Hapur. Most populated = Prayagraj. Highest literacy = Gautam Buddha Nagar. Folk Dances: Charkula (Braj region, 108 oil lamps on head), Raslila, Nautanki, Kajari (Mirzapur/monsoon), Alha (Bundelkhand), Dhobiya, Rai dance. One District One Product (ODOP) launched 24 Jan 2018: Bhadohi (Carpet), Kannauj (Attar/Perfume), Firozabad (Glass bangles), Varanasi (Banarasi Silk), Aligarh (Locks), Moradabad (Brassware), Saharanpur (Wood carving).",
            "hindiDescription": "उत्तर प्रदेश के राजकीय प्रतीक: पशु: बारहसिंगा, पक्षी: सारस/क्रौंच, वृक्ष: अशोक, पुष्प: पलाश (टेसू), जलीय जीव: चीतल। क्षेत्रफल में सबसे बड़ा जिला: लखीमपुर खीरी; सबसे छोटा जिला: हापुड़। सर्वाधिक जनसंख्या: प्रयागराज। सर्वाधिक साक्षरता: गौतम बुद्ध नगर। लोकनृत्य: चरकुला (ब्रज क्षेत्र, 108 दीपकों का पिंजरा सिर पर रखकर), कजरी (मिर्जापुर), आल्हा (बुंदेलखंड)। ओडीओपी (ODOP) 24 जनवरी 2018 को प्रारंभ: भदोही (कालीन), कन्नौज (इत्र), फिरोजाबाद (कांच की चूड़ियां), अलीगढ़ (ताले), मुरादाबाद (पीतल के बर्तन), वाराणसी (बनारसी साड़ी)।",
            "subtopics": [
              "UP State symbols card",
              "Largest and smallest districts by area and population",
              "Folk dances of Braj, Awadh and Bundelkhand",
              "Key ODOP district matching list"
            ],
            "ncertMapping": {
              "classes": [
                6,
                7,
                8
              ],
              "subjects": [
                "Social Science"
              ],
              "chapterNames": [
                "Our State Uttar Pradesh"
              ],
              "portalLink": "https://ncert.nic.in/textbook.php"
            },
            "scertMapping": {
              "classes": [
                4,
                5
              ],
              "bookName": "Hamara Parivesh",
              "chapterName": "Uttar Pradesh Darshan"
            },
            "difficulty": "medium",
            "importance": "High",
            "estimatedHours": 6,
            "keyFormulasOrFacts": [
              "उत्तर प्रदेश का राजकीय पुष्प: पलाश (टेसू); राजकीय पक्षी: सारस (क्रौंच)",
              "उत्तर प्रदेश का क्षेत्रफल में सबसे बड़ा जिला: लखीमपुर खीरी; सबसे छोटा जिला: हापुड़",
              "चरकुला नृत्य उत्तर प्रदेश के ब्रज क्षेत्र का प्रसिद्ध लोक नृत्य है (108 दीपकों का रथ पहिया)",
              "कन्नौज को 'इत्र नगरी' (City of Perfumes) कहा जाता है (ओडीओपी उत्पाद: इत्र)",
              "फिरोजाबाद 'सुहाग नगरी' कहलाता है (ओडीओपी उत्पाद: कांच की चूड़ियां)"
            ]
          }
        ]
      }
    ]
  },
  "mathematics": {
    "title": "Mathematics (अंकगणित, बीजगणित, रेखागणित व क्षेत्रमिति)",
    "chapters": [
      {
        "id": "math-num-sys",
        "name": "Number System, Divisibility & Fractions",
        "hindiName": "संख्या पद्धति, स्थानीय मान, भाज्यता नियम एवं भिन्न",
        "weightageEstimated": "3–4 Questions",
        "topics": [
          {
            "id": "math-num-properties",
            "name": "Natural, Whole, Integers, Rational, Irrational, Prime & Composite Numbers",
            "hindiName": "प्राकृतिक, पूर्ण, पूर्णांक, परिमेय, अपरिमेय, अभाज्य एवं सह-अभाज्य संख्याएं",
            "description": "Classification of numbers, place value (Sthaniya Maan) vs face value (Jatiya Maan), tests of divisibility (2, 3, 4, 5, 6, 7, 8, 9, 11), properties of prime numbers (smallest prime = 2, only even prime), recurring decimals to fractions conversion, unit digit calculation (cyclicity of powers).",
            "hindiDescription": "संख्याओं का वर्गीकरण: प्राकृतिक (1,2,3...), पूर्ण (0,1,2...), पूर्णांक, परिमेय (p/q, q!=0), अपरिमेय (√2, π)। स्थानीय मान एवं जातीय मान में अंतर। भाज्यता नियम (3 और 9: अंकों का योग; 11: विषम व सम स्थानों के अंकों के योग का अंतर 0 या 11 का गुणज)। अभाज्य संख्याएं (1 से 100 तक कुल 25 अभाज्य संख्याएं)। इकाई अंक ज्ञात करने की चक्रीयता (Cyclicity)।",
            "subtopics": [
              "Place value vs Face value calculation",
              "Divisibility rule of 7 and 11",
              "Prime number properties (1 is neither prime nor composite)",
              "Conversion of recurring decimals (0.333... = 1/3, 0.4777...)",
              "Unit digit in large power expressions (e.g. 7^95 - 3^58)"
            ],
            "ncertMapping": {
              "classes": [
                6,
                7,
                9
              ],
              "subjects": [
                "Mathematics"
              ],
              "chapterNames": [
                "Knowing Our Numbers",
                "Number Systems"
              ],
              "portalLink": "https://ncert.nic.in/textbook.php"
            },
            "scertMapping": {
              "classes": [
                4,
                5
              ],
              "bookName": "Gintara",
              "chapterName": "Sankhyaen"
            },
            "difficulty": "medium",
            "importance": "High",
            "estimatedHours": 5,
            "keyFormulasOrFacts": [
              "सबसे छोटी अभाज्य संख्या: 2 (एकमात्र सम अभाज्य संख्या)",
              "1 से 50 तक कुल अभाज्य संख्याएं = 15; 1 से 100 तक = 25",
              "π एक अपरिमेय संख्या है, जबकि 22/7 एक परिमेय संख्या है",
              "11 से भाज्यता नियम: (विषम स्थानों के अंकों का योग) - (सम स्थानों के अंकों का योग) = 0 या 11 का गुणज",
              "इकाई अंक चक्रीयता (Cyclicity): 2, 3, 7, 8 की चक्रीयता 4 होती है"
            ]
          }
        ]
      },
      {
        "id": "math-lcm-hcf",
        "name": "LCM & HCF Applications",
        "hindiName": "लघुत्तम समापवर्त्य (LCM) एवं महत्तम समापवर्तक (HCF)",
        "weightageEstimated": "2 Questions",
        "topics": [
          {
            "id": "math-lcm-formula",
            "name": "LCM, HCF, Product Rule, Bell & Traffic Light Problems",
            "hindiName": "ल.स., म.स., भिन्न का ल.स./म.स., घंटियों व बत्तियों वाले व्यावहारिक प्रश्न",
            "description": "Methods of factorization and division. Fundamental theorem: Product of two numbers = LCM x HCF. LCM of fractions = LCM of Numerators / HCF of Denominators. HCF of fractions = HCF of Numerators / LCM of Denominators. Circular track running and simultaneous bell ringing word problems.",
            "hindiDescription": "सूत्र: पहली संख्या x दूसरी संख्या = ल.स. x म.स.। भिन्नों का ल.स. = अंशों का ल.स. / हरों का म.स.। भिन्नों का म.स. = अंशों का म.स. / हरों का ल.स.। मंदिर की घंटियां एक साथ कब बजेंगी? (समय अंतरालों का ल.स. ज्ञात करना)।",
            "subtopics": [
              "Prime factorization for LCM/HCF",
              "Two number product formula",
              "Fractions LCM and HCF",
              "Remaining remainder problems ('Find greatest number that divides x, y, z leaving remainder r')"
            ],
            "difficulty": "medium",
            "importance": "High",
            "estimatedHours": 3,
            "keyFormulasOrFacts": [
              "Number 1 x Number 2 = LCM x HCF",
              "भिन्नों का LCM = (अंशों का LCM) / (हरों का HCF)",
              "भिन्नों का HCF = (अंशों का HCF) / (हरों का LCM)",
              "सह-अभाज्य संख्याओं (Co-prime numbers) का HCF सदैव 1 होता है"
            ]
          }
        ]
      },
      {
        "id": "math-percent-profit",
        "name": "Percentage, Profit, Loss & Discount",
        "hindiName": "प्रतिशतता, लाभ-हानि एवं बट्टा",
        "weightageEstimated": "3–4 Questions",
        "topics": [
          {
            "id": "math-percentage-tricks",
            "name": "Percentage Calculations, Successive Changes & Population Growth",
            "hindiName": "प्रतिशत वृद्धि/कमी, क्रमिक परिवर्तन [x + y + (xy/100)] एवं उपभोग संतुलन",
            "description": "Base conversions between fractions and percentages (1/2=50%, 1/3=33.33%, 1/4=25%, 1/6=16.66%, 1/7=14.28%, 1/8=12.5%). If sugar price increases by r%, consumption decrease = [r / (100 + r)] x 100. Net percentage change after successive changes of a% and b% = a + b + (ab/100). Population change formulas.",
            "hindiDescription": "भिन्न को प्रतिशत में बदलना। यदि किसी वस्तु के मूल्य में r% की वृद्धि हो, तो व्यय न बढ़ने हेतु उपभोग में कमी = [r / (100 + r)] x 100। दो क्रमिक प्रतिशत परिवर्तन: कुल परिवर्तन = a + b + (ab / 100)%। आय-व्यय एवं चुनाव वाले प्रश्न।",
            "subtopics": [
              "Fraction to percentage memory chart",
              "Price-consumption inverse rule",
              "Successive percentage formula",
              "Population depreciation / appreciation"
            ],
            "difficulty": "medium",
            "importance": "High",
            "estimatedHours": 4,
            "keyFormulasOrFacts": [
              "Net Successive Change = a + b + (ab / 100) %",
              "मूल्य में r% वृद्धि पर खपत में कमी = [r / (100 + r)] × 100 %",
              "मूल्य में r% कमी पर खपत में वृद्धि = [r / (100 - r)] × 100 %",
              "1/3 = 33.33%, 1/6 = 16.67%, 1/7 = 14.28%, 1/8 = 12.5%, 1/9 = 11.11%"
            ]
          },
          {
            "id": "math-profit-loss-discount",
            "name": "Cost Price, Selling Price, Marked Price & Successive Discounts",
            "hindiName": "क्रय मूल्य, विक्रय मूल्य, अंकित मूल्य, समतुल्य बट्टा एवं बेईमान दुकानदार",
            "description": "Profit% = (Profit / CP) x 100. Loss% = (Loss / CP) x 100. SP = CP x [(100 + P%) / 100]. Marked Price and Discount%: Discount is always calculated on Marked Price (MP). SP = MP x [(100 - D%) / 100]. Equivalent single discount for successive discounts d1 and d2 = [d1 + d2 - (d1 x d2 / 100)]%. Dishonest dealer formula.",
            "hindiDescription": "लाभ % = (लाभ / क्रय मूल्य) × 100। हानि % = (हानि / क्रय मूल्य) × 100। बट्टा सदैव अंकित मूल्य (Marked Price) पर दिया जाता है। समतुल्य बट्टा सूत्र = d1 + d2 - (d1 × d2 / 100)%। यदि x वस्तुओं का क्रय मूल्य = y वस्तुओं का विक्रय मूल्य, तो लाभ/हानि % = [(x - y) / y] × 100।",
            "subtopics": [
              "Basic CP, SP, MP relationships",
              "Successive discount equivalent formula",
              "When CP of x items = SP of y items",
              "False weight / dishonest dealer percentage gain"
            ],
            "difficulty": "medium",
            "importance": "High",
            "estimatedHours": 5,
            "keyFormulasOrFacts": [
              "समतुल्य बट्टा (Equivalent Discount) = d1 + d2 - (d1 × d2 / 100) %",
              "यदि x वस्तुओं का CP = y वस्तुओं का SP, तो लाभ % = [(x - y) / y] × 100",
              "बट्टा % = (छूट / अंकित मूल्य) × 100",
              "लाभ अथवा हानि सदैव क्रय मूल्य (Cost Price) पर आकलित की जाती है"
            ]
          }
        ]
      },
      {
        "id": "math-si-ci",
        "name": "Simple & Compound Interest",
        "hindiName": "साधारण ब्याज (SI) एवं चक्रवृद्धि ब्याज (CI)",
        "weightageEstimated": "2 Questions",
        "topics": [
          {
            "id": "math-interest-formulas",
            "name": "SI Formula, CI Formula & 2/3 Year Difference Formulas",
            "hindiName": "साधारण ब्याज (PRT/100), चक्रवृद्धि ब्याज [A = P(1+R/100)^n] एवं 2 वर्ष का अंतर सूत्र",
            "description": "SI = (P x R x T) / 100. Compound Amount A = P(1 + R/100)^n; CI = A - P. When compounded half-yearly: Rate becomes R/2, Time becomes 2n. Golden shortcut for difference between CI and SI for 2 years: Diff = P(R / 100)^2. For 3 years: Diff = P(R / 100)^2 x [(300 + R) / 100].",
            "hindiDescription": "साधारण ब्याज = (मूलधन × दर × समय) / 100। चक्रवृद्धि मिश्रधन = P(1 + R/100)^n। अर्धवार्षिक संयोजन: दर आधी (R/2) तथा समय दुगुना (2n)। 2 वर्ष हेतु CI और SI का अंतर = P × (R / 100)^2।",
            "subtopics": [
              "Simple interest yearly proportionality",
              "Half-yearly and quarterly compounding",
              "2-year CI and SI difference shortcut",
              "3-year CI and SI difference shortcut"
            ],
            "difficulty": "medium",
            "importance": "High",
            "estimatedHours": 4,
            "keyFormulasOrFacts": [
              "2 वर्ष के CI और SI का अंतर (Difference) = P × (R / 100)²",
              "3 वर्ष के CI और SI का अंतर = P × (R / 100)² × [(300 + R) / 100]",
              "यदि कोई धनराशि साधारण ब्याज से T वर्षों में n गुनी हो जाए, तो दर R = [(n - 1) / T] × 100 %"
            ]
          }
        ]
      },
      {
        "id": "math-geometry-mensuration",
        "name": "Geometry & Mensuration (2D & 3D)",
        "hindiName": "रेखागणित एवं क्षेत्रमिति (त्रिभुज, चतुर्भुज, वृत्त, बेलन, शंकु, गोला)",
        "weightageEstimated": "3–4 Questions",
        "topics": [
          {
            "id": "math-geometry-theorems",
            "name": "Lines, Angles, Triangles (Congruence & Similarity) & Circles",
            "hindiName": "कोण, त्रिभुज के गुण, पाइथागोरस प्रमेय, वृत्त एवं स्पर्श रेखाएं",
            "description": "Complementary angles (sum = 90 deg), Supplementary angles (sum = 180 deg), Alternate and corresponding angles in parallel lines. Triangles: Sum of angles = 180 deg, Pythagoras theorem (a^2 + b^2 = c^2). Common triplets (3,4,5), (5,12,13), (7,24,25), (8,15,17). Congruence criteria (SAS, ASA, SSS, RHS). Circle theorems: Angle subtended at center is double the angle at circumference; Angle in semicircle is 90 deg.",
            "hindiDescription": "पूरक कोण (योग = 90°), संपूरक कोण (योग = 180°)। त्रिभुज के तीनों कोणों का योग = 180°। पाइथागोरस प्रमेय (कर्ण² = लम्ब² + आधार²)। प्रमुख त्रिक: (3,4,5), (5,12,13), (7,24,25), (8,15,17)। वृत्त के गुण: अर्धवृत्त में बना कोण समकोण (90°) होता है; केंद्र पर बना कोण परिधि पर बने कोण का दुगुना होता है।",
            "subtopics": [
              "Angle pairs and transversal lines",
              "Pythagorean triplets",
              "Center angle vs circumference angle theorem",
              "Cyclic quadrilateral opposite angle sum = 180 deg"
            ],
            "difficulty": "medium",
            "importance": "High",
            "estimatedHours": 5,
            "keyFormulasOrFacts": [
              "अर्धवृत्त में बना कोण सदैव समकोण (90°) होता है",
              "चक्रीय चतुर्भुज (Cyclic Quadrilateral) के सम्मुख कोणों का योग = 180°",
              "पाइथागोरस त्रिक: 3-4-5, 5-12-13, 7-24-25, 8-15-17, 9-40-41",
              "समबाहु त्रिभुज का क्षेत्रफल = (√3 / 4) × a²"
            ]
          },
          {
            "id": "math-mensuration-formulas",
            "name": "Area, Perimeter & Volume Formulas (2D & 3D)",
            "hindiName": "क्षेत्रफल, परिमाप, वक्रपृष्ठ एवं आयतन (आयत, वृत्त, बेलन, शंकु, गोला)",
            "description": "Rectangle: Area = l x b, Perimeter = 2(l+b). Square: Area = a^2, Diagonal = a√2. Circle: Area = πr^2, Circumference = 2πr. Cylinder: Volume = πr^2h, Curved Surface Area = 2πrh, Total Surface Area = 2πr(r+h). Cone: Volume = (1/3)πr^2h, Slant height l = √(r^2+h^2), CSA = πrl. Sphere: Volume = (4/3)πr^3, Surface Area = 4πr^2. Hemisphere: Volume = (2/3)πr^3, Total Surface Area = 3πr^2.",
            "hindiDescription": "आयत का क्षेत्रफल = l × b, परिमाप = 2(l + b)। वृत्त का क्षेत्रफल = πr², परिधि = 2πr। बेलन (Cylinder): आयतन = πr²h, वक्रपृष्ठ = 2πrh, कुल पृष्ठ = 2πr(h + r)। शंकु (Cone): आयतन = (1/3)πr²h, तिर्यक ऊंचाई l = √(r² + h²), वक्रपृष्ठ = πrl। गोला (Sphere): आयतन = (4/3)πr³, संपूर्ण पृष्ठ = 4πr²। अर्धगोला (Hemisphere): कुल पृष्ठ = 3πr²।",
            "subtopics": [
              "2D formulas: Triangle, Rectangle, Square, Rhombus, Trapezium, Circle",
              "3D formulas: Cylinder, Cone, Sphere, Hemisphere, Cube, Cuboid",
              "Melting and recasting questions (Volume conservation)"
            ],
            "difficulty": "medium",
            "importance": "High",
            "estimatedHours": 5,
            "keyFormulasOrFacts": [
              "बेलन का आयतन = πr²h, वक्रपृष्ठ = 2πrh",
              "शंकु का आयतन = (1/3)πr²h, वक्रपृष्ठ = πrl (जहाँ l = √(r² + h²))",
              "गोले का आयतन = (4/3)πr³, पृष्ठ क्षेत्रफल = 4πr²",
              "अर्धगोले का कुल पृष्ठ = 3πr² (वक्रपृष्ठ = 2πr²)",
              "धातु की एक आकृति को पिघलाकर दूसरी आकृति बनाने पर आयतन (Volume) समान रहता है"
            ]
          }
        ]
      }
    ]
  },
  "pedagogy": {
    "title": "Pedagogy & Child Learning Principles",
    "chapters": [
      {
        "id": "ped-core-eval",
        "name": "CCE, Bloom Taxonomy & Diagnostic Teaching",
        "hindiName": "सतत एवं व्यापक मूल्यांकन (CCE), ब्लूम का वर्गीकरण एवं निदानात्मक शिक्षण",
        "weightageEstimated": "5–6 Questions",
        "topics": [
          {
            "id": "ped-top-bloom-eval",
            "name": "Bloom Taxonomy (Knowledge to Evaluation), Formative vs Summative Assessment",
            "hindiName": "ब्लूम का संज्ञानात्मक टैक्सोनॉमी (6 स्तर) एवं रचनात्मक व संकलनात्मक मूल्यांकन",
            "description": "Benjamin Bloom (1956, revised by Anderson & Krathwohl 2001): 6 Cognitive levels: Remembering, Understanding, Applying, Analyzing, Evaluating, Creating. Assessment FOR Learning (Formative, diagnostic, during learning), Assessment OF Learning (Summative, judgmental, end of term), Assessment AS Learning (Self-assessment by learner). Continuous and Comprehensive Evaluation (CCE): Scholastic and Co-scholastic domains.",
            "hindiDescription": "बेंजामिन ब्लूम का संज्ञानात्मक क्षेत्र (Cognitive Domain): 1. ज्ञान (याद रखना), 2. बोध (समझना), 3. अनुप्रयोग (लागू करना), 4. विश्लेषण, 5. मूल्यांकन, 6. सृजन (निर्माण करना)। सीखने के लिए आकलन (Formative - शिक्षण के दौरान प्रतिपुष्टि हेतु), सीखने का आकलन (Summative - सत्रांत परीक्षा), सीखने के रूप में आकलन (स्व-मूल्यांकन)।",
            "subtopics": [
              "Bloom revised taxonomy levels",
              "Assessment FOR vs OF vs AS learning",
              "Formative vs Summative assessment contrast",
              "Scholastic vs Co-scholastic areas in CCE"
            ],
            "ncertMapping": {
              "classes": [
                1,
                2,
                3
              ],
              "subjects": [
                "Teacher Education"
              ],
              "chapterNames": [
                "Evaluation and Pedagogy"
              ],
              "portalLink": "https://ncert.nic.in/textbook.php"
            },
            "scertMapping": {
              "classes": [
                1,
                2
              ],
              "bookName": "D.El.Ed Mulyankan",
              "chapterName": "Satat Mulyankan"
            },
            "difficulty": "medium",
            "importance": "High",
            "estimatedHours": 5,
            "keyFormulasOrFacts": [
              "ब्लूम के संशोधित संज्ञानात्मक पदानुक्रम में सर्वोच्च स्तर: सृजन करना (Creating)",
              "सीखने के लिए आकलन (Assessment FOR Learning): रचनात्मक (Formative) मूल्यांकन होता है",
              "सीखने का आकलन (Assessment OF Learning): संकलनात्मक (Summative) मूल्यांकन होता है",
              "CCE का मुख्य उद्देश्य: रटंत प्रणाली से मुक्त कर बच्चे का सर्वांगीण विकास करना"
            ]
          }
        ]
      }
    ]
  },
  "biology": {
    "title": "TGT Biology (Zoology & Botany)",
    "chapters": [
      {
        "id": "bio-botany-core",
        "name": "Plant Physiology, Anatomy & Taxonomy",
        "hindiName": "पादप कार्यिकी, शारीरिकी एवं पादप वर्गीकरण (शैवाल, कवक, ब्रायोफाइटा)",
        "weightageEstimated": "TGT 45 Questions",
        "topics": [
          {
            "id": "bio-top-photosynthesis-respiration",
            "name": "C3, C4 Cycles, Photosynthesis & Plant Hormones (Auxin, Cytokinin, Gibberellin)",
            "hindiName": "प्रकाश संश्लेषण (C3 व C4 चक्र), क्रेब्स चक्र एवं पादप हॉर्मोन (ऑक्सिन, जिबरेलिन, साइटोकाइनिन)",
            "description": "Light reaction (Thylakoid, Z-scheme), Dark reaction / Calvin cycle (Stroma, RuBisCO enzyme). C4 pathway (Hatch-Slack, Kranz anatomy in Maize/Sugarcane). Respiration: Glycolysis (EMP pathway in cytoplasm, net 2 ATP), Krebs cycle (Mitochondrial matrix). Plant growth regulators: Auxin (apical dominance, indole-3-acetic acid), Gibberellin (bolting, stem elongation), Cytokinin (cell division), Ethylene (fruit ripening gas), Abscisic acid (stress hormone, stomatal closure).",
            "hindiDescription": "प्रकाश संश्लेषण: प्रकाशिक अभिक्रिया थाइलाकॉइड में तथा अप्रकाशिक (केल्विन चक्र) स्ट्रोमा में होती है। रुबिस्को (RuBisCO) पृथ्वी पर सर्वाधिक मात्रा में पाया जाने वाला एंजाइम है। C4 पौधों (मक्का, गन्ना) में क्रैंज शारीरिकी पाई जाती है। पादप हॉर्मोन: ऑक्सिन (शीर्ष प्रभाविता), जिबरेलिन (तने की वृद्धि), साइटोकाइनिन (कोशिका विभाजन), एथिलीन (फल पकाने वाली गैसीय हॉर्मोन), एब्सिसिक एसिड (तनाव हॉर्मोन, रंध्र बंद करना)।",
            "subtopics": [
              "Calvin cycle & RuBisCO",
              "Kranz anatomy in C4 plants",
              "Glycolysis net ATP calculation",
              "Plant hormone functions chart"
            ],
            "ncertMapping": {
              "classes": [
                11,
                12
              ],
              "subjects": [
                "Biology"
              ],
              "chapterNames": [
                "Photosynthesis in Higher Plants",
                "Plant Growth and Development"
              ],
              "portalLink": "https://ncert.nic.in/textbook.php"
            },
            "scertMapping": {
              "classes": [
                9,
                10
              ],
              "bookName": "Vigyan",
              "chapterName": "Padap Kariyan"
            },
            "difficulty": "hard",
            "importance": "High",
            "estimatedHours": 8,
            "keyFormulasOrFacts": [
              "RuBisCO पृथ्वी पर सबसे प्रचुर मात्रा में पाया जाने वाला एंजाइम / प्रोटीन है",
              "C4 पौधों (जैसे मक्का व गन्ना) की पत्तियों में 'क्रैंज एनाटॉमी' (Kranz Anatomy) पाई जाती है",
              "फलों को प्राकृतिक रूप से पकाने वाला एकमात्र गैसीय पादप हॉर्मोन: एथिलीन (Ethylene)",
              "ग्लाइकोलिसिस (EMP Pathway) कोशिका द्रव्य में होता है तथा इसमें शुद्ध 2 ATP का लाभ होता है"
            ]
          }
        ]
      },
      {
        "id": "bio-zoology-core",
        "name": "Animal Taxonomy, Physiology & Genetics",
        "hindiName": "जंतु वर्गीकरण (प्रोटोजोआ से स्तनधारी), मानव शारीरिकी एवं आनुवंशिकी",
        "weightageEstimated": "TGT 45 Questions",
        "topics": [
          {
            "id": "bio-top-genetics-mendel",
            "name": "Mendelian Genetics, DNA Structure, Replication & Human Chromosomes",
            "hindiName": "मेंडल के आनुवंशिकता के नियम (प्रभाविता, पृथक्करण, स्वतंत्र अपव्यूहन) एवं डीएनए संरचना (वाटसन-क्रिक मॉडल)",
            "description": "Gregor Johann Mendel: Father of Genetics (experiments on Pisum sativum / garden pea, 7 pairs of contrasting traits). 3 Laws: Law of Dominance, Law of Segregation (Purity of gametes, 3:1 monohybrid ratio), Law of Independent Assortment (9:3:3:1 dihybrid ratio). DNA Double Helix model by Watson & Crick (1953, Nobel Prize 1962). A=T (2 hydrogen bonds), G≡C (3 hydrogen bonds). Human karyotype: 46 chromosomes (22 pairs autosomes + 1 pair sex chromosomes XX/XY). Down syndrome (Trisomy 21), Turner syndrome (45, XO), Klinefelter syndrome (47, XXY).",
            "hindiDescription": "आनुवंशिकी के जनक: ग्रेगर जॉन मेंडल (उद्यान मटर - पाइसम सैटाइवम पर प्रयोग, 7 जोड़ी विपर्यासी लक्षण)। एकसंकर क्रॉस का फीनोटाइप अनुपात = 3:1, द्विसंकर क्रॉस का अनुपात = 9:3:3:1। डीएनए का द्विकुंडली मॉडल: 1953 में जेम्स वाटसन एवं फ्रांसिस क्रिक द्वारा। A और T के बीच 2 हाइड्रोजन बंध, G और C के बीच 3 हाइड्रोजन बंध। मानव में 23 जोड़ी (46) गुणसूत्र। डाउन सिंड्रोम: 21वें गुणसूत्र की त्रिसूत्रता (Trisomy 21)।",
            "subtopics": [
              "Mendel 3 laws and ratios",
              "Watson-Crick DNA B-form dimensions",
              "Genetic code & central dogma",
              "Chromosomal disorders in humans"
            ],
            "difficulty": "hard",
            "importance": "High",
            "estimatedHours": 8,
            "keyFormulasOrFacts": [
              "द्विसंकर क्रॉस (Dihybrid Cross) का फीनोटाइप अनुपात = 9:3:3:1",
              "डीएनए में एडेनिन (A) और थायमीन (T) के बीच 2 हाइड्रोजन बंध, जबकि गुआनिन (G) और साइटोसिन (C) के बीच 3 हाइड्रोजन बंध होते हैं",
              "डाउन सिंड्रोम (Down Syndrome) 21वें गुणसूत्र की ट्राइसोमी (Trisomy 21) के कारण होता है",
              "मेंडल ने अपने प्रयोग उद्यान मटर (Pisum sativum) पर किए थे"
            ]
          }
        ]
      }
    ]
  },
  "history": {
    "title": "History (प्राचीन, मध्यकालीन एवं आधुनिक भारत)",
    "chapters": [
      {
        "id": "hist-ancient-medieval",
        "name": "Indus Valley, Vedic, Mauryan, Gupta & Mughal Eras",
        "hindiName": "सिंधु घाटी सभ्यता, वैदिक काल, मौर्य, गुप्त एवं मुगल साम्राज्य",
        "weightageEstimated": "TGT 25 Questions",
        "topics": [
          {
            "id": "hist-top-indus-mauryan",
            "name": "Harappan Sites, Ashoka Edicts, Gupta Golden Age & Akbar Navratnas",
            "hindiName": "हड़प्पा सभ्यता (कालीबंगा, लोथल), मौर्य साम्राज्य (अशोक के 14 शिलालेख) व अकबर के नवरत्न",
            "description": "Harappa (Daya Ram Sahni 1921), Mohenjo-daro (R.D. Banerjee 1922, Great Bath). Lothal (dockyard in Gujarat), Kalibangan (ploughed field in Rajasthan). Mauryan Empire founded by Chandragupta Maurya with Chanakya (Arthashastra). Ashoka Kalinga War (261 BCE, Rock Edict XIII). Gupta Empire (Chandragupta I, Samudragupta - 'Napoleon of India' per V.A. Smith, Allahabad Pillar/Prayag Prashasti by Harisena). Mughal Dynasty: Babur (Panipat 1526), Akbar (Din-i-Ilahi 1582, Mansabdari system, Navratnas: Birbal, Todar Mal, Tansen, Abul Fazl).",
            "hindiDescription": "सिंधु घाटी: हड़प्पा की खोज 1921 (दयाराम साहनी), मोहनजोदड़ो (विशाल स्नानागार, राखालदास बनर्जी)। लोथल में प्राचीन गोदीबाड़ा (डॉकयार्ड)। मौर्य साम्राज्य: चंद्रगुप्त मौर्य व चाणक्य (अर्थशास्त्र)। अशोक का कलिंग युद्ध 261 ईसा पूर्व (13वां शिलालेख)। समुद्रगुप्त को 'भारत का नेपोलियन' कहा जाता है (प्रयाग प्रशस्ति - हरिषेण द्वारा रचित)। अकबर: दीन-ए-इलाही (1582), मनसबदारी व्यवस्था, आइन-ए-अकबरी (अबुल फजल)।",
            "subtopics": [
              "Indus valley key sites and findings",
              "Ashoka Rock Edict XIII",
              "Samudragupta Prayag Prashasti",
              "Akbar land revenue by Todar Mal"
            ],
            "difficulty": "medium",
            "importance": "High",
            "estimatedHours": 6,
            "keyFormulasOrFacts": [
              "सिंधु घाटी सभ्यता का प्रमुख बंदरगाह (Dockyard): लोथल (गुजरात)",
              "अशोक के कलिंग युद्ध (261 ईसा पूर्व) का उल्लेख 13वें शिलालेख में मिलता है",
              "समुद्रगुप्त को 'भारत का नेपोलियन' विंसेंट स्मिथ ने कहा; प्रयाग प्रशस्ति हरिषेण द्वारा लिखी गई",
              "अकबर ने 'दीन-ए-इलाही' धर्म की स्थापना वर्ष 1582 में की थी"
            ]
          }
        ]
      }
    ]
  },
  "geography": {
    "title": "Geography (भूगोल - भौतिक, भारत एवं विश्व)",
    "chapters": [
      {
        "id": "geo-physical-india",
        "name": "Geomorphology, Atmosphere, Indian Rivers & Monsoons",
        "hindiName": "भू-आकृति विज्ञान, वायुमंडल की परतें, भारत की नदियां एवं मानसून",
        "weightageEstimated": "TGT 25 Questions",
        "topics": [
          {
            "id": "geo-top-atmosphere-monsoon",
            "name": "Layers of Atmosphere (Troposphere to Exosphere), Jet Streams & Monsoons",
            "hindiName": "वायुमंडल की 5 परतें (क्षोभमंडल से बहिर्मंडल), जेट स्ट्रीम एवं दक्षिण-पश्चिम मानसून",
            "description": "Atmospheric layers: Troposphere (all weather phenomena, temperature lapse rate 6.5 deg C/km), Stratosphere (contains Ozone layer, ideal for jet flying), Mesosphere (coldest layer, meteors burn), Thermosphere/Ionosphere (radio waves reflection), Exosphere. Indian Monsoon: South-West monsoon mechanism (Arabian Sea branch and Bay of Bengal branch, enters Kerala around 1 June). Retreating monsoon gives rain to Coromandel coast (Tamil Nadu).",
            "hindiDescription": "वायुमंडल की 5 परतें: 1. क्षोभमंडल (सभी मौसमी घटनाएं - वर्षा, बादल, आंधी), 2. समताप मंडल (ओजोन परत, वायुयान उड़ाने हेतु आदर्श), 3. मध्यमंडल (सबसे ठंडी परत, उल्कापिंड जलते हैं), 4. आयनमंडल (रेडियो तरंगों का परावर्तन), 5. बहिर्मंडल। भारत में सर्वाधिक वर्षा दक्षिण-पश्चिम मानसून (South-West Monsoon) से होती है। लौटते मानसून से तमिलनाडु के कोरोमंडल तट पर वर्षा होती है।",
            "subtopics": [
              "5 Atmospheric layers and lapse rate",
              "Troposphere weather phenomena",
              "South-West monsoon branches",
              "Western Disturbances in North India"
            ],
            "difficulty": "medium",
            "importance": "High",
            "estimatedHours": 6,
            "keyFormulasOrFacts": [
              "मौसम संबंधी सभी घटनाएं (वर्षा, बादल, कोहरा) क्षोभमंडल (Troposphere) में घटित होती हैं",
              "ओजोन परत समताप मंडल (Stratosphere) में स्थित है",
              "रेडियो तरंगों का परावर्तन आयनमंडल (Ionosphere) से होता है",
              "भारत में लौटते हुए मानसून (उत्तर-पूर्वी मानसून) से तमिलनाडु के कोरोमंडल तट पर शीतकाल में वर्षा होती है"
            ]
          }
        ]
      }
    ]
  },
  "polity": {
    "title": "Polity & Indian Constitution",
    "chapters": [
      {
        "id": "pol-judiciary-parliament",
        "name": "Parliament, Supreme Court & Federal System",
        "hindiName": "भारतीय संसद (लोकसभा, राज्यसभा), सर्वोच्च न्यायालय एवं केंद्र-राज्य संबंध",
        "weightageEstimated": "TGT 25 Questions",
        "topics": [
          {
            "id": "pol-top-parliament-supreme",
            "name": "Lok Sabha, Rajya Sabha, Supreme Court (Article 124) & Emergency Provisions",
            "hindiName": "लोकसभा, राज्यसभा, सर्वोच्च न्यायालय (अनुच्छेद 124) एवं आपातकालीन उपबंध (352, 356, 360)",
            "description": "Parliament (Article 79) = President + Rajya Sabha (Article 80, Permanent body, 6-year tenure, 1/3 members retire every 2 years, Vice President is ex-officio Chairman) + Lok Sabha (Article 81, 5-year tenure). Supreme Court: Article 124, Guardian of Constitution and Fundamental Rights. Emergency Provisions (Part XVIII, Germany Weimar): National Emergency (Article 352 - war, external aggression, armed rebellion), President's Rule (Article 356 - failure of constitutional machinery in states), Financial Emergency (Article 360 - never imposed in India).",
            "hindiDescription": "संसद के तीन अंग: राष्ट्रपति, राज्यसभा (उच्च सदन, स्थायी सदन, 6 वर्ष कार्यकाल, 1/3 सदस्य प्रति 2 वर्ष में सेवानिवृत्त) एवं लोकसभा (निम्न सदन, 5 वर्ष)। सर्वोच्च न्यायालय (अनुच्छेद 124)। तीन आपातकाल: 1. राष्ट्रीय आपातकाल (अनुच्छेद 352), 2. राष्ट्रपति शासन (अनुच्छेद 356), 3. वित्तीय आपातकाल (अनुच्छेद 360 - भारत में अब तक एक बार भी नहीं लगा)।",
            "subtopics": [
              "Rajya Sabha permanent nature",
              "Money Bill Article 110 exclusive power of Lok Sabha",
              "Supreme Court advisory jurisdiction Article 143",
              "Emergency Articles 352, 356, 360"
            ],
            "difficulty": "medium",
            "importance": "High",
            "estimatedHours": 5,
            "keyFormulasOrFacts": [
              "राज्यसभा एक स्थायी सदन है, जिसे कभी भंग नहीं किया जा सकता (सदस्यों का कार्यकाल 6 वर्ष)",
              "धन विधेयक (Money Bill) केवल लोकसभा में ही प्रस्तुत किया जा सकता है (अनुच्छेद 110)",
              "भारत में वित्तीय आपातकाल (अनुच्छेद 360) आज तक एक बार भी लागू नहीं किया गया है",
              "राष्ट्रपति पर महाभियोग (Impeachment) संविधान के अनुच्छेद 61 के तहत चलाया जाता है"
            ]
          }
        ]
      }
    ]
  },
  "economics": {
    "title": "Economics & Indian Economy",
    "chapters": [
      {
        "id": "eco-macro-banking",
        "name": "National Income, Banking, RBI & Inflation",
        "hindiName": "राष्ट्रीय आय (GDP, GNP), भारतीय रिजर्व बैंक (RBI), मौद्रिक नीति एवं मुद्रास्फीति",
        "weightageEstimated": "TGT 25 Questions",
        "topics": [
          {
            "id": "eco-top-rbi-monetary",
            "name": "GDP/NNP, RBI Monetary Policy (Repo Rate, CRR, SLR) & Budget",
            "hindiName": "जीडीपी, आरबीआई की मौद्रिक नीति (रेपो रेट, सीआरआर, एसएलआर) एवं बजट प्रक्रिया",
            "description": "National income aggregates: GDP (Gross Domestic Product within geographical boundaries), GNP = GDP + Net Factor Income from Abroad, NNP at factor cost = National Income. Reserve Bank of India (established 1 April 1935 under RBI Act 1934, Hilton Young Commission; nationalized 1 Jan 1949). Monetary policy tools: Repo Rate (rate at which RBI lends to commercial banks), Reverse Repo Rate, Cash Reserve Ratio (CRR), Statutory Liquidity Ratio (SLR). Inflation: Demand-pull vs Cost-push inflation. Fiscal policy vs Monetary policy.",
            "hindiDescription": "राष्ट्रीय आय: जीडीपी (घरेलू सीमा के भीतर कुल उत्पादन)। साधन लागत पर शुद्ध राष्ट्रीय उत्पाद (NNP at Factor Cost) को ही 'राष्ट्रीय आय' कहा जाता है। भारतीय रिजर्व बैंक (RBI) की स्थापना: 1 अप्रैल 1935 (हिल्टन यंग कमीशन की सिफारिश पर); राष्ट्रीयकरण: 1 जनवरी 1949। मौद्रिक नीति उपकरण: रेपो रेट (जिस दर पर आरबीआई बैंकों को अल्पकालिक ऋण देता है), सीआरआर (CRR), एसएलआर (SLR)।",
            "subtopics": [
              "GDP vs GNP vs NNP",
              "RBI establishment and nationalization dates",
              "Repo Rate vs Reverse Repo Rate",
              "Inflation types and CPI/WPI"
            ],
            "difficulty": "medium",
            "importance": "High",
            "estimatedHours": 5,
            "keyFormulasOrFacts": [
              "भारतीय रिजर्व बैंक (RBI) की स्थापना 1 अप्रैल 1935 को हुई थी (राष्ट्रीयकरण 1 जनवरी 1949)",
              "साधन लागत पर शुद्ध राष्ट्रीय उत्पाद (NNP at Factor Cost) ही 'राष्ट्रीय आय' (National Income) कहलाती है",
              "रेपो दर (Repo Rate) वह दर है जिस पर केंद्रीय बैंक (RBI) वाणिज्यिक बैंकों को अल्पकालिक ऋण देता है",
              "भारत में बजट का उल्लेख संविधान के अनुच्छेद 112 में 'वार्षिक वित्तीय विवरण' (Annual Financial Statement) के रूप में है"
            ]
          }
        ]
      }
    ]
  },
  "commerce": {
    "title": "TGT Commerce (Accounting, Business Org & Auditing)",
    "chapters": [
      {
        "id": "comm-accounting",
        "name": "Double Entry System, Trial Balance & Final Accounts",
        "hindiName": "दोहरा लेखा प्रणाली, तलपट, अंतिम खाते एवं लेखांकन मानक",
        "weightageEstimated": "TGT 90 Questions",
        "topics": [
          {
            "id": "comm-top-double-entry",
            "name": "Principles of Double Entry (Luca Pacioli 1494), Golden Rules & Balance Sheet",
            "hindiName": "दोहरा लेखा प्रणाली के जनक (लूका पैसियोली), लेखांकन के स्वर्ण नियम एवं आर्थिक चिट्ठा",
            "description": "Father of Double Entry Bookkeeping: Luca Pacioli (1494, Venice). Golden Rules of Accounting: 1. Personal Account: Debit the receiver, Credit the giver. 2. Real Account: Debit what comes in, Credit what goes out. 3. Nominal Account: Debit all expenses and losses, Credit all incomes and gains. Accounting concepts: Going Concern, Matching, Dual Aspect, Conservatism (anticipate no profits, provide for all losses). Final Accounts: Trading A/c (Gross Profit/Loss), P&L A/c (Net Profit/Loss), Balance Sheet (Assets = Capital + Liabilities).",
            "hindiDescription": "दोहरा लेखा प्रणाली के जनक: लूका पैसियोली (1494, इटली)। लेखांकन के 3 स्वर्णिम नियम: 1. व्यक्तिगत खाता: पाने वाले को डेबिट, देने वाले को क्रेडिट। 2. वास्तविक खाता: जो व्यापार में आए डेबिट, जो जाए क्रेडिट। 3. नाममात्र/अवास्तविक खाता: सभी व्यय व हानियां डेबिट, सभी आय व लाभ क्रेडिट। रूढ़िवादिता की परंपरा (Convention of Conservatism): भावी हानियों का प्रावधान करना किंतु भावी लाभों को न मानना।",
            "subtopics": [
              "Golden rules of 3 accounts",
              "Luca Pacioli 1494 milestone",
              "Conservatism vs Dual Aspect concepts",
              "Trial balance errors that affect/do not affect agreement"
            ],
            "difficulty": "hard",
            "importance": "High",
            "estimatedHours": 8,
            "keyFormulasOrFacts": [
              "दोहरा लेखा प्रणाली के जनक: लूका पैसियोली (1494, इटली)",
              "नाममात्र खाता (Nominal Account) का नियम: सभी खर्चे एवं हानियां Debit, सभी आमदनी एवं लाभ Credit",
              "रूढ़िवादिता की संकल्पना (Conservatism) के अनुसार संभावित हानियों का प्रावधान किया जाता है किंतु संभावित लाभों का नहीं",
              "लेखांकन समीकरण: Assets = Capital + Liabilities (संपत्तियां = पूंजी + दायित्व)"
            ]
          }
        ]
      }
    ]
  },
  "home-science": {
    "title": "TGT Home Science (गृह विज्ञान)",
    "chapters": [
      {
        "id": "hs-nutrition-textile",
        "name": "Food & Nutrition, Human Physiology, Textile & Home Management",
        "hindiName": "आहार एवं पोषण विज्ञान, मानव शारीरिकी, वस्त्र विज्ञान एवं गृह प्रबंध",
        "weightageEstimated": "TGT 90 Questions",
        "topics": [
          {
            "id": "hs-top-nutrients-fabrics",
            "name": "Macronutrients, RDA, Fiber Classification (Cotton, Silk, Wool) & Family Budget (Engel's Law)",
            "hindiName": "संतुलित आहार, आरडीए, वस्त्र तंतु वर्गीकरण (कपास, रेशम, ऊन) एवं एंजिल का उपभोग नियम",
            "description": "Nutritional science: Carbohydrates (4 kcal/g), Proteins (4 kcal/g, building blocks, Kwashiorkor/Marasmus deficiency), Fats (9 kcal/g, highest energy density). RDA 2020 by ICMR-NIN. Textile fibers: Natural (Cellulose: Cotton/King of fibers, Linen; Protein: Silk/Queen of fibers, Wool). Burning test of fibers. Home Management: Family life cycle stages, Decision making process. Ernst Engel's Law of Family Expenditure: As family income increases, the percentage spent on food decreases, on housing remains constant, and on education/recreation increases.",
            "hindiDescription": "संतुलित आहार: कार्बोहाइड्रेट (4 kcal/g), प्रोटीन (4 kcal/g, क्वाशिओरकोर व मरास्मस हीनता रोग), वसा (9 kcal/g - सर्वाधिक ऊर्जा)। वस्त्र तंतु: कपास (सैल्यूलोजिक, तंतुओं का राजा), रेशम (प्रोटीन तंतु, तंतुओं की रानी, सेरीकल्चर)। एंजिल का पारिवारिक बजट नियम: आय बढ़ने पर भोजन पर होने वाले व्यय का प्रतिशत घट जाता है, आवास/वस्त्र पर स्थिर रहता है, तथा शिक्षा/मनोरंजन पर बढ़ जाता है।",
            "subtopics": [
              "Energy values of macro-nutrients",
              "Kwashiorkor vs Marasmus symptoms",
              "Natural vs Synthetic textile fibers",
              "Ernst Engel family budget law"
            ],
            "difficulty": "medium",
            "importance": "High",
            "estimatedHours": 7,
            "keyFormulasOrFacts": [
              "1 ग्राम वसा (Fat) से सर्वाधिक ऊर्जा (9 किलोकैलोरी) प्राप्त होती है",
              "प्रोटीन की कमी से बच्चों में क्वाशिओरकोर (Kwashiorkor) एवं मरास्मस रोग होते हैं",
              "रेशम को 'वस्त्रों की रानी' (Queen of Fabrics) कहा जाता है; यह प्रोटीन तंतु (फाइब्रॉइन) है",
              "एंजिल के नियम के अनुसार: आय बढ़ने पर भोजन पर होने वाले व्यय का अनुपात कम हो जाता है"
            ]
          }
        ]
      }
    ]
  },
  "art": {
    "title": "TGT Art (कला एवं चित्रकला)",
    "chapters": [
      {
        "id": "art-indian-painting",
        "name": "Ajanta Caves, Mughal, Rajput Miniatures & Modern Masters",
        "hindiName": "अजंता की गुफाएं, षडांग, मुगल-राजपूत लघु चित्रकला एवं आधुनिक चित्रकार (राजा रवि वर्मा, अवनींद्रनाथ)",
        "weightageEstimated": "TGT 90 Questions",
        "topics": [
          {
            "id": "art-top-shadan-ajanta",
            "name": "6 Limbs of Indian Painting (Shadanga), Ajanta Frescoes & Raja Ravi Varma",
            "hindiName": "चित्रकला के 6 अंग (षडांग: रूपभेद, प्रमाण, भाव, लावण्य, सादृश्य, वर्णिकाभंग) एवं अजंता गुफा चित्र",
            "description": "Yashodhar Pandit's Kamasutra commentary introduces 6 Limbs of Painting (Shadanga): 'Roopbheda Pramanani Bhava Lavanya Yojanam, Sadrishyam Varnikabhangam iti chitram Shadangakam'. Ajanta Caves (30 caves in Aurangabad, Maharashtra; Buddhist Jataka tales, Fresco and Tempera techniques; Padmapani Bodhisattva in Cave 1). Raja Ravi Varma (Father of Modern Indian Art, Oil paintings of Indian deities, established lithographic press in Ghatkopar/Malavli). Bengal School of Art (Abanindranath Tagore, Wash technique, 'Bharat Mata' 1905).",
            "hindiDescription": "चित्रकला के 6 अंग (षडांग): 1. रूपभेद (आकृतियों का ज्ञान), 2. प्रमाण (अनुपात), 3. भाव (अभिव्यक्ति), 4. लावण्य योजना (बाह्य सौंदर्य), 5. सादृश्य (समानता), 6. वर्णिकाभंग (रंगों का संमिश्रण)। अजंता की गुफाएं: कुल 30 गुफाएं (महाराष्ट्र के औरंगाबाद में); गुफा संख्या 1 में 'बोधिसत्व पद्मपाणि' का विश्वप्रसिद्ध चित्र। राजा रवि वर्मा (भारतीय पौराणिक विषयों के तैल चित्रकार)। अवनींद्रनाथ टैगोर (बंगाल शैली के जनक, 'भारत माता' 1905)।",
            "subtopics": [
              "Shadanga 6 limbs shloka",
              "Ajanta Cave 1 Padmapani and Cave 16 Dying Princess",
              "Raja Ravi Varma oil painting style",
              "Abanindranath Tagore wash technique"
            ],
            "difficulty": "medium",
            "importance": "High",
            "estimatedHours": 7,
            "keyFormulasOrFacts": [
              "भारतीय चित्रकला के षडांग (6 अंग): रूपभेद, प्रमाण, भाव, लावण्य योजना, सादृश्य, वर्णिकाभंग",
              "'बोधिसत्व पद्मपाणि' का विश्वप्रसिद्ध भित्तिचित्र अजंता की गुफा संख्या 1 में स्थित है",
              "भारत में तैल चित्रण (Oil Painting) के जनक: राजा रवि वर्मा (केरल के किलिमानूर में जन्म)",
              "प्रसिद्ध 'भारत माता' का जलरंग चित्र 1905 में अवनींद्रनाथ टैगोर ने चित्रित किया था"
            ]
          }
        ]
      }
    ]
  },
  "physical-education": {
    "title": "TGT Physical Education (शारीरिक शिक्षा)",
    "chapters": [
      {
        "id": "pe-sports-anatomy",
        "name": "Physical Fitness, Olympic Movement, Kinesiology & Rules of Games",
        "hindiName": "शारीरिक पुष्टि, ओलंपिक आंदोलन, गति विज्ञान (किनेसियोलॉजी) एवं प्रमुख खेलों के नियम",
        "weightageEstimated": "TGT 90 Questions",
        "topics": [
          {
            "id": "pe-top-olympics-rules",
            "name": "Modern Olympics (1896, Pierre de Coubertin), Ground Measurements & First Aid (PRICE)",
            "hindiName": "आधुनिक ओलंपिक (1896 एथेंस), 5 छल्ले, प्रमुख खेल माप (ट्रैक, वॉलीबॉल, फुटबॉल) व प्राथमिक उपचार (PRICE)",
            "description": "Modern Olympics founded by Baron Pierre de Coubertin (1st games 1896 in Athens, Greece). Olympic rings (5 interlaced rings representing 5 continents: Blue=Europe, Yellow=Asia, Black=Africa, Green=Australia, Red=Americas). Olympic motto: 'Citius, Altius, Fortius - Communiter' (Faster, Higher, Stronger - Together). Standard 400m track specifications. Volleyball court: 18m x 9m; Football field: 100-110m x 64-75m; Basketball court: 28m x 15m. Sports Injuries & First Aid formula: PRICE (Protect, Rest, Ice, Compression, Elevation).",
            "hindiDescription": "आधुनिक ओलंपिक के जनक: बैरन पियरे डी कुबर्तिन (प्रथम ओलंपिक 1896 एथेंस में)। 5 रंगीन छल्ले 5 महाद्वीपों के प्रतीक: नीला (यूरोप), पीला (एशिया), काला (अफ्रीका), हरा (ऑस्ट्रेलिया), लाल (अमेरिका)। ओलंपिक आदर्श वाक्य: सिटियस, अल्टियस, फोर्टियस - कम्युनिटर (तेज, उच्च, बलवान - साथ-साथ)। खेल मैदान माप: वॉलीबॉल (18m × 9m), बास्केटबॉल (28m × 15m), फुटबॉल (105m × 68m)। खेल चोटों का प्राथमिक उपचार: PRICE नियम (Protect, Rest, Ice, Compress, Elevate)।",
            "subtopics": [
              "Olympic rings color to continent mapping",
              "Standard 400m running track lanes",
              "Volleyball & Basketball court dimensions",
              "PRICE first aid protocol for sprains"
            ],
            "difficulty": "medium",
            "importance": "High",
            "estimatedHours": 6,
            "keyFormulasOrFacts": [
              "आधुनिक ओलंपिक खेल सर्वप्रथम 1896 में एथेंस (ग्रीस) में आयोजित किए गए (जनक: पियरे डी कुबर्तिन)",
              "ओलंपिक ध्वज के 5 छल्ले 5 महाद्वीपों का प्रतिनिधित्व करते हैं (पीला छल्ला एशिया का प्रतीक है)",
              "वॉलीबॉल कोर्ट का मानक माप: 18 मीटर × 9 मीटर (नेट की ऊंचाई: पुरुष 2.43m, महिला 2.24m)",
              "खेल चोटों (मोच/Sprain) में प्राथमिक उपचार का स्वर्णिम नियम: PRICE (Protect, Rest, Ice, Compress, Elevate)"
            ]
          }
        ]
      }
    ]
  },
  "agriculture": {
    "title": "TGT Agriculture (कृषि विज्ञान)",
    "chapters": [
      {
        "id": "agri-crops-soils",
        "name": "Agronomy, Soil Science, Horticulture & Plant Protection",
        "hindiName": "सस्य विज्ञान, मृदा विज्ञान, रबी-खरीफ-जायद फसलें, बागवानी एवं कीट प्रबंधन",
        "weightageEstimated": "TGT 90 Questions",
        "topics": [
          {
            "id": "agri-top-cropping-nutrients",
            "name": "Rabi/Kharif/Zaid Crops, NPK Ratios & Green Revolution in UP",
            "hindiName": "रबी, खरीफ व जायद फसलें, प्राथमिक पोषक तत्व (NPK 4:2:1) एवं हरित क्रांति (डॉ. एम.एस. स्वामीनाथन)",
            "description": "Cropping seasons: Kharif (Sown June-July, harvested Sep-Oct: Paddy, Maize, Jowar, Bajra, Cotton, Soybean), Rabi (Sown Oct-Nov, harvested March-April: Wheat, Mustard, Gram, Barley, Potato), Zaid (Summer March-June: Watermelon, Cucumber, Muskmelon). Essential plant nutrients (17 elements): Primary macro-nutrients NPK (ideal ratio for cereals = 4:2:1). Green Revolution in India: Started in mid-1960s with semi-dwarf wheat varieties (Kalyan Sona, Sonalika) developed by Norman Borlaug; Indian Father: Dr. M.S. Swaminathan; First agricultural university in India: GB Pant University, Pantnagar (1960).",
            "hindiDescription": "फसल चक्र: खरीफ (धान, मक्का, ज्वार, बाजरा, कपास), रबी (गेहूं, सरसों, चना, जौ, आलू), जायद (तरबूज, खीरा, ककड़ी)। पौधों हेतु 17 आवश्यक पोषक तत्व; प्राथमिक पोषक तत्व: N-P-K (अनाज वाली फसलों हेतु आदर्श अनुपात 4:2:1)। भारत में हरित क्रांति के जनक: डॉ. एम.एस. स्वामीनाथन (विश्व में: डॉ. नॉर्मन बोरलॉग)। भारत का प्रथम कृषि विश्वविद्यालय: गोविंद वल्लभ पंत कृषि विश्वविद्यालय, पंतनगर (1960)।",
            "subtopics": [
              "Kharif, Rabi, Zaid crop classification",
              "NPK 4:2:1 ratio for wheat",
              "17 Essential plant nutrients list",
              "Green revolution milestones in India"
            ],
            "difficulty": "medium",
            "importance": "High",
            "estimatedHours": 6,
            "keyFormulasOrFacts": [
              "भारत में हरित क्रांति के जनक: डॉ. एम.एस. स्वामीनाथन (विश्व स्तर पर: नॉर्मन बोरलॉग)",
              "अनाज वाली फसलों (जैसे गेहूं) हेतु N:P:K का आदर्श अनुपात = 4 : 2 : 1",
              "भारत का प्रथम कृषि विश्वविद्यालय: पंतनगर (1960 में स्थापित)",
              "रबी की मुख्य फसलें: गेहूं, जौ, चना, सरसों, मटर, आलू"
            ]
          }
        ]
      }
    ]
  },
  "music": {
    "title": "TGT Music (संगीत - गायन एवं वादन)",
    "chapters": [
      {
        "id": "mus-indian-classical",
        "name": "Ragas, Talas, Gharanas & Bhatkhande Swarlipi",
        "hindiName": "राग, ताल (तीनताल, दादरा, कहरवा), घराने (लखनऊ, बनारस) एवं भातखंडे स्वरलिपि पद्धति",
        "weightageEstimated": "TGT 90 Questions",
        "topics": [
          {
            "id": "mus-top-ragas-talas",
            "name": "10 Thaats, Teental (16 Matras), Lucknow & Banaras Gharanas",
            "hindiName": "भातखंडे के 10 थाट, तीनताल (16 मात्रा, 4 विभाग: धा धिं धिं धा) एवं लखनऊ-बनारस घराना",
            "description": "Pt. Vishnu Narayan Bhatkhande classified North Indian Classical Music into 10 Thaats (Bilawal, Kalyan, Khamaj, Bhairav, Bhairavi, Asavari, Todi, Poorvi, Marwa, Kafi). Tala: Teental (16 Matras, 4 Vibhags of 4 Matras each, Tali at 1, 5, 13; Khali at 9). UP Musical Gharanas: Lucknow Gharana (Kathak: Pt. Birju Maharaj; Tabla: Ustad Modu Khan, Bakshu Khan), Banaras Gharana (Shehnai: Ustad Bismillah Khan - Bharat Ratna 2001; Thumri: Girija Devi; Tabla: Pt. Kishan Maharaj).",
            "hindiDescription": "पंडित भातखंडे द्वारा प्रतिपादित 10 थाट (बिलावल, कल्याण, खमाज, भैरव, भैरवी, आसावरी, तोड़ी, पूर्वी, मारवा, काफी)। तीनताल: कुल 16 मात्राएं, 4 विभाग (प्रत्येक में 4 मात्रा), ताली 1, 5, 13 पर तथा खाली 9 पर (धा धिं धिं धा...)। उत्तर प्रदेश के प्रमुख घराने: लखनऊ घराना (कथक के प्रणेता - पं. बिरजू महाराज, लच्छू महाराज), बनारस घराना (शहनाई सम्राट - उस्ताद बिस्मिल्लाह खान / भारत रत्न 2001, ठुमरी साम्राज्ञी - गिरिजा देवी, तबला - पं. किशन महाराज)।",
            "subtopics": [
              "Bhatkhande 10 Thaats",
              "Teental structure (16 matras, tali at 1,5,13; khali at 9)",
              "Bismillah Khan Shehnai legacy",
              "Birju Maharaj Kathak style"
            ],
            "difficulty": "medium",
            "importance": "High",
            "estimatedHours": 6,
            "keyFormulasOrFacts": [
              "पं. भातखंडे के अनुसार उत्तर भारतीय संगीत में कुल 10 थाट होते हैं",
              "तीनताल में कुल 16 मात्राएं होती हैं (ताली: 1, 5, 13 पर; खाली: 9वीं मात्रा पर)",
              "शहनाई सम्राट उस्ताद बिस्मिल्लाह खान (बनारस घराना) को वर्ष 2001 में 'भारत रत्न' से सम्मानित किया गया",
              "पंडित बिरजू महाराज का संबंध लखनऊ घराने (कथक) से था"
            ]
          }
        ]
      }
    ]
  },
  "urdu": {
    "title": "Urdu Language & Literature (उर्दू ज़बान-ओ-अदब)",
    "chapters": [
      {
        "id": "urdu-qawaid-shayari",
        "name": "Urdu Qawaid, Nazm, Ghazal & Prominent Poets",
        "hindiName": "उर्दू कवायद (व्याकरण), नज़्म, ग़ज़ल, असनाफ़ एवं मीर-ग़ालिब-इक़बाल",
        "weightageEstimated": "TGT 90 Questions",
        "topics": [
          {
            "id": "urdu-top-ghazal-poets",
            "name": "Matla, Maqta, Radif, Qafia & Poetry of Mirza Ghalib, Mir Taqi Mir, Allama Iqbal",
            "hindiName": "मतला, मक़्ता, रदीफ़, क़ाफ़िया एवं मिर्ज़ा ग़ालिब, मीर तक़ी मीर, अल्लामा इक़बाल की शायरी",
            "description": "Ghazal elements: Matla (first sher where both misras rhyme with radif and qafia), Husn-e-Matla (second matla), Maqta (last sher containing poet's takhallus/pen-name), Radif (exact word repeated after qafia), Qafia (rhyming sound). Prominent poets: Mir Taqi Mir (Khuda-e-Sukhan), Mirza Asadullah Khan Ghalib (Diwan-e-Ghalib, letters / Khutoot), Allama Iqbal (Bang-e-Dra, 'Saare Jahan Se Achha'), Faiz Ahmed Faiz.",
            "hindiDescription": "ग़ज़ल के अंग: मतला (ग़ज़ल का पहला शेर जिसके दोनों मिसरों में रदीफ़ व क़ाफ़िया होता है), मक़्ता (ग़ज़ल का अंतिम शेर जिसमें शायर अपना उपनाम/तख़ल्लुस लिखता है), रदीफ़ (वह शब्द जो क़ाफ़िया के बाद ज्यों-का-त्यों दोहराया जाता है), क़ाफ़िया (समान तुकांत वाले शब्द)। प्रमुख शायर: मीर तक़ी मीर ('ख़ुदा-ए-सुख़न'), मिर्ज़ा असदुल्लाह ख़ाँ 'ग़ालिब' (दीवान-ए-ग़ालिब), अल्लामा इक़बाल ('सारे जहाँ से अच्छा हिन्दोस्ताँ हमारा')।",
            "subtopics": [
              "Matla vs Maqta distinction",
              "Radif and Qafia identification",
              "Mirza Ghalib life & letters",
              "Allama Iqbal famous works"
            ],
            "difficulty": "medium",
            "importance": "High",
            "estimatedHours": 6,
            "keyFormulasOrFacts": [
              "ग़ज़ल का पहला शेर जिसके दोनों मिसरे हम-क़ाफ़िया व हम-रदीफ़ हों: 'मतला' कहलाता है",
              "ग़ज़ल का अंतिम शेर जिसमें शायर अपना तख़ल्लुस (उपनाम) इस्तेमाल करता है: 'मक़्ता' कहलाता है",
              "मीर तक़ी मीर को 'ख़ुदा-ए-सुख़न' के लक़ब से याद किया जाता है",
              "'सारे जहाँ से अच्छा हिन्दोस्ताँ हमारा' तराना अल्लामा इक़बाल द्वारा रचित है"
            ]
          }
        ]
      }
    ]
  },
  "current-affairs": {
    "title": "Current Affairs & Annual Events",
    "chapters": [
      {
        "id": "ca-annual",
        "name": "State & National Events, Awards, Sports & Summits",
        "hindiName": "राष्ट्रीय व अंतरराष्ट्रीय समसामयिकी, पुरस्कार, खेलकूद, सूचकांक व सम्मेलन",
        "weightageEstimated": "15 Questions",
        "topics": [
          {
            "id": "ca-top-schemes-awards",
            "name": "UP Govt Flagship Schemes, Bharat Ratna, Olympic Medals & Global Indexes",
            "hindiName": "उत्तर प्रदेश की प्रमुख योजनाएं, बजट, भारत रत्न 2024-2026, ओलंपिक व वैश्विक सूचकांक",
            "description": "Comprehensive tracking of UP state development, Mahakumbh Prayagraj initiatives, ODOP expansion, PM-SHRI schools, NIPUN Bharat mission targets (Foundational Literacy & Numeracy by 2026-27), National Education Policy 2020 (5+3+3+4 structure). Bharat Ratna recipients, Grand Slam tennis winners, Nobel Prize laureates, and India's ranks in Global Innovation, Human Development and Happiness indices.",
            "hindiDescription": "उत्तर प्रदेश बजट व महाकुंभ प्रयागराज की ऐतिहासिक तैयारियां। पीएम-श्री (PM-SHRI) योजना, निपुण भारत मिशन (वर्ष 2026-27 तक ग्रेड 3 तक बुनियादी साक्षरता व संख्याज्ञान - FLN प्राप्त करना)। राष्ट्रीय शिक्षा नीति 2020 (5+3+3+4 स्कूली संरचना)। भारत रत्न विजेता, नोबेल पुरस्कार एवं प्रमुख अंतरराष्ट्रीय सूचकांकों में भारत का स्थान।",
            "subtopics": [
              "NEP 2020 5+3+3+4 structure",
              "NIPUN Bharat FLN targets 2026-27",
              "UP Mahakumbh green initiatives",
              "Major sports tournaments & Grand Slams"
            ],
            "difficulty": "medium",
            "importance": "High",
            "estimatedHours": 5,
            "keyFormulasOrFacts": [
              "राष्ट्रीय शिक्षा नीति (NEP 2020) की नई स्कूली शिक्षा संरचना: 5 + 3 + 3 + 4",
              "निपुण भारत मिशन (NIPUN Bharat) का लक्ष्य: वर्ष 2026-27 तक कक्षा 3 तक बुनियादी साक्षरता व संख्याज्ञान (FLN)",
              "पीएम-श्री (PM-SHRI) योजना का उद्देश्य: 14,500 से अधिक उत्कृष्ट मॉडल विद्यालयों का उन्नयन करना",
              "महाकुंभ प्रयागराज का आयोजन त्रिवेणी संगम (गंगा, यमुना, सरस्वती) पर होता है"
            ]
          }
        ]
      }
    ]
  }
};
