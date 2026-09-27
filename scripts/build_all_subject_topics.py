import json
import os

# We will build a comprehensive, multi-chapter, multi-topic database for all 27 subjects
# Each chapter will have realistic syllabus topics, subtopics, NCERT class & chapter alignments, SCERT references, key formulas/facts, and duration.

def generate_topics():
    subjects_data = {
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
                            "subtopics": ["52 Varn classification", "Alpapran vs Mahapran", "Aghosh vs Saghosh", "Nasikya Vyanjan", "Kanthya & Talavya positions"],
                            "ncertMapping": {"classes": [6, 7, 8], "subjects": ["Hindi"], "chapterNames": ["Varn Vichar"], "portalLink": "https://ncert.nic.in/textbook.php"},
                            "scertMapping": {"classes": [4, 5], "bookName": "Kalrav", "chapterName": "Varnamala"},
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
                            "subtopics": ["Dirgha Sandhi rules", "Guna & Vriddhi identification", "Yan Sandhi half-letter trick", "Ayadi Sandhi sounds"],
                            "ncertMapping": {"classes": [7, 8], "subjects": ["Hindi Vasant"], "chapterNames": ["Sandhi"], "portalLink": "https://ncert.nic.in/textbook.php"},
                            "scertMapping": {"classes": [6, 7], "bookName": "Manjari", "chapterName": "Sandhi Prakaran"},
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
                            "subtopics": ["Purvapad vs Uttarapad", "Karmadharaya vs Bahuvrihi", "Dvigu numerical test", "Dvandva hyphen trick"],
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
                            "subtopics": ["Anuprasa 5 bhed", "Yamak vs Shlesh", "Upama 4 ang", "Utpreksha clue indicators"],
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
                            "subtopics": ["Chhayavad 4 pillars", "Ramcharitmanas 7 Kand", "Jnanpith winners in Hindi", "Prominent UP poets"],
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
                            "subtopics": ["Singular/Plural noun exceptions", "Preposition collocations", "Subject-Verb concord with collective nouns", "Correlative conjunctions"],
                            "ncertMapping": {"classes": [6, 7, 8, 9], "subjects": ["English"], "chapterNames": ["Grammar & Composition"], "portalLink": "https://ncert.nic.in/textbook.php"},
                            "scertMapping": {"classes": [4, 5], "bookName": "Rainbow", "chapterName": "Language Practice"},
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
                            "subtopics": ["Imperative passive structures", "Passive of continuous tenses with 'being'", "Universal truths in reported speech", "Question tag formation"],
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
                            "subtopics": ["Simile vs Metaphor", "Personification identification", "High-frequency idioms for UP exams", "One-word substitutions"],
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
                            "subtopics": ["Shakespeare 4 Great Tragedies", "Milton blank verse & Paradise Lost", "Wordsworth Romanticism & Lake Poets", "Galsworthy social problem plays"],
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
                            "subtopics": ["14 Sutras chanting", "Pratyahara formation technique", "Ach pratyahara (Swar)", "Hal pratyahara (Vyanjan)"],
                            "ncertMapping": {"classes": [6, 7, 8], "subjects": ["Sanskrit Ruchira"], "chapterNames": ["Sanskrit Varnamala"], "portalLink": "https://ncert.nic.in/textbook.php"},
                            "scertMapping": {"classes": [4, 5], "bookName": "Sanskrit Piyusham", "chapterName": "Varn Parichay"},
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
                            "subtopics": ["6 Karakas identification", "Yenangvikarah body defect rule", "Saharthe tritiya rule", "Namah swasti chaturthi rule", "Apadan panchami fear rule"],
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
                            "subtopics": ["5 Lakaras memory matrix", "Asmad & Yushmad pronoun forms", "Kalidasa works", "Great Sanskrit epics"],
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
                            "subtopics": ["Newton 3 laws real-life examples", "Acceleration due to gravity variations", "Kinetic vs Potential energy problems", "Units of Force (Newton), Work (Joule), Power (Watt)"],
                            "ncertMapping": {"classes": [8, 9, 10], "subjects": ["Science"], "chapterNames": ["Force and Laws of Motion", "Gravitation", "Work and Energy"], "portalLink": "https://ncert.nic.in/textbook.php"},
                            "scertMapping": {"classes": [6, 7, 8], "bookName": "Vigyan", "chapterName": "Gati Evam Bal"},
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
                            "subtopics": ["Concave vs Convex mirror uses", "Myopia and Hypermetropia lens remedies", "Ohm's Law formula V = IR", "Series vs Parallel circuits", "Electric power P = VI = I^2 R"],
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
                            "subtopics": ["pH scale values", "Natural acid sources table", "Litmus and phenolphthalein indicators", "Daily chemical formulas (Baking soda, POP, Bleaching powder)"],
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
                            "subtopics": ["Cell organelle functions chart", "Photosynthesis chemical equation", "Human heart 4 chambers & circulation", "Blood groups and Rh factor"],
                            "ncertMapping": {"classes": [8, 9, 10], "subjects": ["Science"], "chapterNames": ["Fundamental Unit of Life", "Life Processes"], "portalLink": "https://ncert.nic.in/textbook.php"},
                            "scertMapping": {"classes": [6, 7, 8], "bookName": "Vigyan", "chapterName": "Jeev Jagat"},
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
                            "subtopics": ["Fat vs Water soluble vitamins", "Vitamin chemical names and deficiency chart", "Viral vs Bacterial diseases mnemonic", "Malaria lifecycle and mosquito vector"],
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
                            "subtopics": ["1857 revolt centers and leaders in UP", "Chauri Chaura incident date & location", "Kakori Train Action patriots", "Major INC sessions (1907 Surat, 1916 Lucknow, 1929 Lahore)"],
                            "ncertMapping": {"classes": [8, 10], "subjects": ["History Our Pasts"], "chapterNames": ["When People Rebel 1857", "Nationalist Movement in India"], "portalLink": "https://ncert.nic.in/textbook.php"},
                            "scertMapping": {"classes": [5, 6, 7], "bookName": "Hamara Itihas Aur Nagrik Jeevan", "chapterName": "1857 Ka Sangram"},
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
                            "subtopics": ["Ganga entry and exit in UP", "Bhabhar vs Terai belt features", "Khadar vs Bangar soil difference", "Major dams and multipurpose projects"],
                            "ncertMapping": {"classes": [7, 9, 11], "subjects": ["Geography"], "chapterNames": ["Drainage", "Physical Features of India"], "portalLink": "https://ncert.nic.in/textbook.php"},
                            "scertMapping": {"classes": [5, 6, 7], "bookName": "Hamara Parivesh / Hamari Prithvi", "chapterName": "Bharat Ka Bhugol"},
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
                            "subtopics": ["Constituent Assembly milestones", "Article 21A RTE provisions", "Article 32 & 5 Writs", "Panchayati Raj 73rd amendment", "Fundamental Duties (Part IV-A, Article 51A, 11 duties)"],
                            "ncertMapping": {"classes": [8, 9, 11], "subjects": ["Political Science"], "chapterNames": ["The Indian Constitution", "Fundamental Rights"], "portalLink": "https://ncert.nic.in/textbook.php"},
                            "scertMapping": {"classes": [6, 7, 8], "bookName": "Nagrik Jeevan", "chapterName": "Hamara Samvidhan"},
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
                            "subtopics": ["Lindeman 10% energy transfer rule", "Producers vs Consumers vs Decomposers", "Dudhwa National Park wildlife", "UP Bird Sanctuaries locations table"],
                            "ncertMapping": {"classes": [7, 8, 10], "subjects": ["Science / EVS"], "chapterNames": ["Our Environment", "Ecosystem"], "portalLink": "https://ncert.nic.in/textbook.php"},
                            "scertMapping": {"classes": [3, 4, 5], "bookName": "Hamara Parivesh", "chapterName": "Jeev Jantu Aur Hum"},
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
                            "subtopics": ["Major greenhouse gases sources", "Stratospheric ozone & Dobson units", "Montreal Protocol vs Kyoto Protocol", "Chronology of Indian Environmental Acts (1972, 1973, 1980, 1986)"],
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
                            "subtopics": ["6 Maxims of Teaching", "Inductive vs Deductive contrast", "Kilpatrick Project Method principles", "NCERT 36-Minute Microteaching breakdown"],
                            "ncertMapping": {"classes": [1, 2, 3], "subjects": ["Pedagogy Guidelines"], "chapterNames": ["Child Centered Pedagogy"], "portalLink": "https://ncert.nic.in/textbook.php"},
                            "scertMapping": {"classes": [1, 2], "bookName": "D.El.Ed Shikshan Adhigam Ke Siddhant", "chapterName": "Shikshan Vidhiyan"},
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
                            "subtopics": ["RTE 2009 implementation date (1 April 2010)", "Primary PTR 30:1 and Upper Primary 35:1", "Weekly 45 hours for teachers rule", "Diagnostic vs Remedial teaching pipeline"],
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
                            "subtopics": ["Piaget 4 stages and hallmark characteristics", "Object Permanence vs Conservation", "Vygotsky ZPD and Scaffolding concept", "Kohlberg 3 levels and Heinz dilemma"],
                            "ncertMapping": {"classes": [11, 12], "subjects": ["Psychology"], "chapterNames": ["Human Development"], "portalLink": "https://ncert.nic.in/textbook.php"},
                            "scertMapping": {"classes": [1, 2], "bookName": "D.El.Ed Bal Vikas", "chapterName": "Vikas Ki Awasthayein"},
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
                            "subtopics": ["Thorndike 3 Primary laws", "Pavlov UCS, UCR, CS, CR framework", "Skinner positive vs negative reinforcement", "Kohler Sultan chimpanzee experiments"],
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
                            "subtopics": ["Maslow 5 levels hierarchy", "Intrinsic vs Extrinsic motivation", "Teacher as Facilitator in NCF 2005", "Positive reinforcement vs Punishment ethics"],
                            "ncertMapping": {"classes": [1, 2, 3], "subjects": ["Teacher Education"], "chapterNames": ["Ethics and Life Skills"], "portalLink": "https://ncert.nic.in/textbook.php"},
                            "scertMapping": {"classes": [1, 2], "bookName": "D.El.Ed Jeevan Kaushal", "chapterName": "Vyavsayik Acharan"},
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
                            "subtopics": ["RAM vs ROM differences", "Binary memory scale (Bits, Bytes, KB, MB, GB, TB)", "Standard Windows shortcuts", "DIKSHA and SWAYAM portals purpose"],
                            "ncertMapping": {"classes": [6, 7, 8], "subjects": ["Computer Science / ICT"], "chapterNames": ["Basics of Computers"], "portalLink": "https://ncert.nic.in/textbook.php"},
                            "scertMapping": {"classes": [6, 7, 8], "bookName": "Computer Siksha", "chapterName": "Computer Parichay"},
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
                            "subtopics": ["EJOTY position matrix", "Opposite letters 27 sum rule", "Sunrise/Sunset shadow direction rules", "Family tree blood relations conventions"],
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
                            "subtopics": ["UP State symbols card", "Largest and smallest districts by area and population", "Folk dances of Braj, Awadh and Bundelkhand", "Key ODOP district matching list"],
                            "ncertMapping": {"classes": [6, 7, 8], "subjects": ["Social Science"], "chapterNames": ["Our State Uttar Pradesh"], "portalLink": "https://ncert.nic.in/textbook.php"},
                            "scertMapping": {"classes": [4, 5], "bookName": "Hamara Parivesh", "chapterName": "Uttar Pradesh Darshan"},
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
        }
    }

    return subjects_data

if __name__ == "__main__":
    data = generate_topics()
    print(f"Generated {len(data)} detailed subject topics.")
