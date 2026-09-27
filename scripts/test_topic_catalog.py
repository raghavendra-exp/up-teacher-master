# Script to create comprehensive subject-wise detailed chapters and topics
import json
import os

topics_catalog = {
    "hindi": {
        "subjectId": "hindi",
        "chapters": [
            {
                "id": "hi-varn",
                "name": "Varn Vichar & Hindi Phonetics",
                "hindiName": "वर्ण विचार, स्वर, व्यंजन एवं उच्चारण स्थान",
                "weightageEstimated": "2–3 Questions",
                "topics": [
                    {
                        "id": "hi-varn-ucharan",
                        "name": "Swara, Vyanjan, Alpapran, Mahapran, Aghosh & Ghosh",
                        "hindiName": "स्वर, व्यंजन, अल्पप्राण-महाप्राण, अघोष-सघोष एवं कंठ्य-तालव्य-मूर्धन्य उच्चारण स्थान",
                        "description": "Comprehensive phonetic classification of Hindi alphabets (52 characters), vowel types (Hrasva, Deergha, Pluta), consonant categories (Sparsh, Antastha, Ushma, Sanyukta), and phonetic points of articulation (Kanthya, Talavya, Murdhanya, Dantya, Oshthya).",
                        "hindiDescription": "हिन्दी वर्णमाला के 52 वर्ण, 11 स्वर (ह्रस्व, दीर्घ, प्लुत), 33 मूल व्यंजन + 4 संयुक्त व्यंजन (क्ष, त्र, ज्ञ, श्र)। अल्पप्राण (1,3,5 + अंतःस्थ) एवं महाप्राण (2,4 + ऊष्म)। अघोष (1,2 + श,ष,स) एवं सघोष (3,4,5 + सभी स्वर + ह + अंतःस्थ)।",
                        "subtopics": ["52 Varn classification", "Sparsha Vyanjan (25 from Ka-varga to Pa-varga)", "Antastha (य, र, ल, व) & Ushma (श, ष, स, ह)", "Alpapran vs Mahapran", "Aghosh vs Saghosh", "Nāsikya Vyanjan (ङ, ञ, ण, न, म)"],
                        "ncertMapping": {"classes": [6, 7, 8], "subjects": ["Hindi Vasant"], "chapterNames": ["Varn Vichar"], "portalLink": "https://ncert.nic.in/textbook.php"},
                        "scertMapping": {"classes": [4, 5], "bookName": "Kalrav", "chapterName": "Varnmala"},
                        "difficulty": "easy",
                        "importance": "High",
                        "estimatedHours": 3,
                        "keyFormulasOrFacts": [
                            "अल्पप्राण (Alpapran): वर्ग का 1, 3, 5 वर्ण + अंतःस्थ (य,र,ल,व)",
                            "महाप्राण (Mahapran): वर्ग का 2, 4 वर्ण + ऊष्म (श,ष,स,ह)",
                            "अघोष (Aghosh): वर्ग का 1, 2 वर्ण + श, ष, स",
                            "सघोष (Saghosh): वर्ग का 3, 4, 5 वर्ण + सभी स्वर + अंतःस्थ + ह",
                            "उच्चारण सूत्र: अकुहविसर्जनीयानां कण्ठः (कंठ्य), इचुयशानां तालु (तालव्य)"
                        ]
                    }
                ]
            },
            {
                "id": "hi-sandhi-samas",
                "name": "Sandhi & Samas (Compound Words)",
                "hindiName": "संधि एवं समास प्रकरण (नियम, भेद एवं उदाहरण)",
                "weightageEstimated": "3–4 Questions",
                "topics": [
                    {
                        "id": "hi-sandhi-types",
                        "name": "Swar Sandhi (5 types), Vyanjan Sandhi & Visarga Sandhi",
                        "hindiName": "स्वर संधि (दीर्घ, गुण, वृद्धि, यण, अयादि), व्यंजन संधि एवं विसर्ग संधि",
                        "description": "Rules of letter combination (Varn-mel). Detailed identification of Dirgha (a+a=aa), Guna (a+i=e, a+u=o), Vriddhi (a+e=ai, a+o=au), Yan (i+any swar=y, u+any swar=v, ri+any swar=r), and Ayadi (e+swar=ay, ai+swar=aay, o+swar=av, au+swar=aav). Vyanjan Sandhi transformations and Visarga to 'O', 'R', or 'S'.",
                        "hindiDescription": "स्वर संधि के 5 भेद: दीर्घ (देव+आलय=देवालय), गुण (नर+इंद्र=नरेंद्र, महा+ऋषि=महर्षि), वृद्धि (एक+एक=एकैक), यण (यदि+अपि=यद्यपि, सु+आगत=स्वागत), अयादि (ने+अन=नयन, पौ+अक=पावक)। व्यंजन संधि (सत्+जन=सज्जन, उत्+चारण=उच्चारण)। विसर्ग संधि (मनः+रथ=मनोरथ)।",
                        "subtopics": ["Dirgha Swar Sandhi", "Guna Swar Sandhi", "Vriddhi Swar Sandhi", "Yan Swar Sandhi", "Ayadi Swar Sandhi", "Key Vyanjan & Visarga rules"],
                        "difficulty": "medium",
                        "importance": "High",
                        "estimatedHours": 5,
                        "keyFormulasOrFacts": [
                            "यण संधि ट्रिक: य, व, र से पहले आधा अक्षर आए तो प्रायः यण संधि (यद्यपि, स्वागत, अन्वय)",
                            "अयादि संधि ट्रिक: ऐ, आय, अव, आव का उच्चारण (नयन, गायक, पवन, पावक)",
                            "वृद्धि संधि ट्रिक: दो मात्राएं (ै, ौ) दिखाई दें (एकैक, महौषध)",
                            "गुण संधि ट्रिक: एक मात्रा (े, ो) अथवा 'अर्' की ध्वनि (नरेश, सूर्योदय, महर्षि)"
                        ]
                    },
                    {
                        "id": "hi-samas-6types",
                        "name": "Samas: 6 Major Compounds & Vigrah",
                        "hindiName": "समास: 6 भेद (अव्ययीभाव, तत्पुरुष, कर्मधारय, द्विगु, द्वंद्व, बहुव्रीहि)",
                        "description": "Definition of Samas (word shortening), Purvapad vs Uttarapad dominance, Avyayibhav (first word indeclinable/prefix), Tatpurush (case-inflected Karaka signs), Karmadharaya (visheshan-visheshya/upman-upmeya), Dvigu (numerical first word), Dvandva (both words equal, 'aur/ya'), Bahuvrihi (third-party meaning).",
                        "hindiDescription": "अव्ययीभाव (यथाशक्ति, प्रतिदिन, रातोंरात), तत्पुरुष (राजपुत्र, देशप्रेम), कर्मधारय (नीलकमल, चरणकमल), द्विगु (पंचवटी, त्रिफला, चौराहा), द्वंद्व (माता-पिता, सुख-दुःख), बहुव्रीहि (दशानन = रावण, लंबोदर = गणेश, पीतांबर = कृष्ण)।",
                        "subtopics": ["Pradhan pad identification rule", "Avyayibhav with repeated words (दिनोंदिन, हाथोंहाथ)", "Tatpurush 6 Vibhakti variations", "Karmadharaya vs Bahuvrihi distinction (पीतांबर, नीलकंठ)", "Dvigu vs Bahuvrihi (दशानन, त्रिनेत्र)"],
                        "difficulty": "medium",
                        "importance": "High",
                        "estimatedHours": 4,
                        "keyFormulasOrFacts": [
                            "अव्ययीभाव: पूर्वपद प्रधान व अव्यय (यथा, प्रति, बे, आ, नि)",
                            "तत्पुरुष: उत्तरपद प्रधान, कारक चिह्नों (को, से, के लिए, का, में) का लोप",
                            "कर्मधारय: विशेषण-विशेष्य अथवा उपमेय-उपमान संबंध",
                            "द्विगु: पूर्वपद संख्यावाचक विशेषण",
                            "द्वंद्व: दोनों पद प्रधान तथा 'और' / 'या' का लोप",
                            "बहुव्रीहि: दोनों पद अप्रधान, अन्य तीसरा अर्थ प्रधान"
                        ]
                    }
                ]
            },
            {
                "id": "hi-ras-chhand-alankar",
                "name": "Ras, Chhand & Alankar (Poetics)",
                "hindiName": "रस, छंद एवं अलंकार (काव्यशास्त्र एवं सौंदर्य)",
                "weightageEstimated": "3–4 Questions",
                "topics": [
                    {
                        "id": "hi-ras-elements",
                        "name": "Ras: 9 Classic + 2 Modern, Sthayi Bhav & Sanchari Bhav",
                        "hindiName": "रस के 4 अंग (स्थायी भाव, विभाव, अनुभाव, संचारी भाव 33) एवं 11 रस",
                        "description": "Bharat Muni Natyashastra definition: 'Vibhav-anubhav-vyabhichari-samyogad-rasa-nishpattih'. 9 classic Ras + Vatsalya (Surdas) + Bhakti (Rupa Goswami). Sthayi bhav of each Ras, Alamban and Uddipan Vibhav, Kayik/Vachik/Aharya/Satvik Anubhav, 33 Sanchari Bhavas.",
                        "hindiDescription": "रस निष्पत्ति सूत्र: विभाव, अनुभाव व संचारी भाव के संयोग से रस की निष्पत्ति। शृंगार (रति), करुण (शोक), हास्य (हास), वीर (उत्साह), रौद्र (क्रोध), भयानक (भय), बीभत्स (जुगुप्सा), अद्भुत (विस्मय), शांत (निर्वेद), वात्सल्य (वत्सलता), भक्ति (भगवद-विषयक रति)। संचारी भाव = 33।",
                        "subtopics": ["Bharat Muni Rasa Sutra", "11 Sthayi Bhav chart", "Vibhav: Alamban vs Uddipan", "8 Satvik Anubhav", "33 Sanchari Bhav"],
                        "difficulty": "medium",
                        "importance": "High",
                        "estimatedHours": 4,
                        "keyFormulasOrFacts": [
                            "रसराज (रसों का राजा): शृंगार रस को कहा जाता है",
                            "शांत रस का स्थायी भाव: निर्वेद",
                            "बीभत्स रस का स्थायी भाव: जुगुप्सा (घृणा)",
                            "भरत मुनि ने अपने नाट्यशास्त्र में 8 रस माने हैं (शांत रस नहीं माना)"
                        ]
                    },
                    {
                        "id": "hi-alankar-types",
                        "name": "Shabdalankar & Arthalankar",
                        "hindiName": "शब्दालंकार (अनुप्रास, यमक, श्लेष) एवं अर्थालंकार (उपमा, रूपक, उत्प्रेक्षा, अतिशयोक्ति, भ्रांतिमान, संदेह)",
                        "description": "Ornaments of poetry. Shabdalankar: Anuprasa (repetition of sounds/varnas, 5 types: Cheka, Vritya, Lat, Shruty, Antya), Yamak (same word different meanings: 'Kanak Kanak te sau guni'), Shlesh (one word multiple meanings). Arthalankar: Upama (4 ang: Upamey, Upman, Sadharan Dharma, Vachak shabd: sa, si, sam, jyo), Rupak (identity without difference: 'Charan Kamal bando Harirayi'), Utpreksha (imagination: manhu, janhu, manu, janu), Atishayokti, Sandeh vs Bhrantiman.",
                        "hindiDescription": "अनुप्रास (तरनि तनूजा तट तमाल तरुवर बहु छाये), यमक (कनक कनक ते सौ गुनी, मादकता अधिकाय), श्लेष (रहिमन पानी राखिए, बिन पानी सब सून), उपमा (पीपर पात सरिस मन डोला), रूपक (चरण कमल बंदौ हरिराई), उत्प्रेक्षा (सोहत ओढ़े पीत पट... मानहु नीलमणि शैल पर)।",
                        "subtopics": ["Anuprasa 5 sub-varieties", "Yamak vs Shlesh distinction", "Upama 4 essential components", "Utpreksha clue words (मनु, मानो, जनु, जानो)", "Rupak vs Upama identification"],
                        "difficulty": "medium",
                        "importance": "High",
                        "estimatedHours": 5,
                        "keyFormulasOrFacts": [
                            "उत्प्रेक्षा पहचान: मनहु, मानो, जनहु, जानो, मन, जनु शब्द आएं तो उत्प्रेक्षा",
                            "उपमा पहचान: सा, सी, से, सम, सरिस, जैसा, ज्यौं शब्द आएं तो उपमा",
                            "यमक पहचान: एक शब्द 2 या अधिक बार आए और अर्थ अलग-अलग हों (कनक = सोना/धतूरा)",
                            "श्लेष पहचान: शब्द एक ही बार आए किंतु प्रसंगवश अर्थ अनेक हों"
                        ]
                    }
                ]
            },
            {
                "id": "hi-sahitya-history",
                "name": "History of Hindi Literature (काल विभाजन व प्रमुख रचनाएं)",
                "hindiName": "हिन्दी साहित्य का इतिहास (आदिकाल, भक्तिकाल, रीतिकाल, आधुनिक काल)",
                "weightageEstimated": "4–6 Questions (TGT 25+ Questions)",
                "topics": [
                    {
                        "id": "hi-sahitya-periods",
                        "name": "Acharya Ramchandra Shukla Era Classification & Masterpieces",
                        "hindiName": "आचार्य शुक्ल का काल विभाजन: वीरगाथा काल, भक्तिकाल, रीतिकाल एवं आधुनिक काल",
                        "description": "Veergatha Kal/Adikal (Chandbardai - Prithviraj Raso, Jagnik - Parmal Raso/Alha-Khand). Bhaktikal (Nirgun: Kabir, Jayasi - Padmavat; Sagun: Surdas - Sur Sagar, Tulsidas - Ramcharitmanas). Ritikal (Bihari - Bihari Satsai, Keshavdas, Bhushan). Adhunik Kal (Bharatendu Harishchandra, Mahavir Prasad Dwivedi, Chhayavad: Prasad, Pant, Nirala, Mahadevi Varma). Jnanpith and Sahitya Akademi award winners.",
                        "hindiDescription": "आदिकाल: पृथ्वीराज रासो (चंदबरदाई - प्रथम महाकाव्य)। भक्तिकाल को 'स्वर्ण युग' कहा जाता है; कबीरदास (बीजक: साखी, सबद, रमैनी), मलिक मुहम्मद जायसी (पद्मावत), सूरदास (सूरसागर), तुलसीदास (रामचरितमानस - अवधी)। रीतिकाल: बिहारी (बिहारी सतसई - 719 दोहे), भूषण (वीर रस के कवि)। छायावाद के चार स्तंभ: जयशंकर प्रसाद (कामायनी), सूर्यकांत त्रिपाठी 'निराला' (सरोज स्मृति), सुमित्रानंदन पंत (चिदंबरा - प्रथम ज्ञानपीठ 1968), महादेवी वर्मा (यामा - ज्ञानपीठ 1982)।",
                        "subtopics": ["Adikal & Raso Sahitya", "Bhaktikal Nirgun & Sagun streams", "Surdas, Tulsidas, Kabir, Jayasi", "Chhayavad 4 pillars", "Famous Jnanpith Awards in Hindi"],
                        "difficulty": "hard",
                        "importance": "High",
                        "estimatedHours": 8,
                        "keyFormulasOrFacts": [
                            "हिन्दी का प्रथम महाकाव्य: पृथ्वीराज रासो (चंदबरदाई)",
                            "हिन्दी में प्रथम ज्ञानपीठ पुरस्कार: सुमित्रानंदन पंत को 'चिदंबरा' हेतु (1968)",
                            "महादेवी वर्मा को ज्ञानपीठ: 'यामा' काव्य संग्रह हेतु (1982)",
                            "रामचरितमानस की भाषा: अवधी, इसमें 7 कांड हैं (बालकांड से उत्तरकांड तक)",
                            "कामायनी के रचयिता: जयशंकर प्रसाद, इसमें 15 सर्ग हैं (प्रथम सर्ग: चिंता, अंतिम: आनंद)"
                        ]
                    }
                ]
            }
        ]
    },
    "mathematics": {
        "subjectId": "mathematics",
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
                        "subtopics": ["Place value vs Face value calculation", "Divisibility rule of 7 and 11", "Prime number properties (1 is neither prime nor composite)", "Conversion of recurring decimals (0.333... = 1/3, 0.4777...)", "Unit digit in large power expressions (e.g. 7^95 - 3^58)"],
                        "ncertMapping": {"classes": [6, 7, 9], "subjects": ["Mathematics"], "chapterNames": ["Knowing Our Numbers", "Number Systems"], "portalLink": "https://ncert.nic.in/textbook.php"},
                        "scertMapping": {"classes": [4, 5], "bookName": "Gintara", "chapterName": "Sankhyaen"},
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
                        "subtopics": ["Prime factorization for LCM/HCF", "Two number product formula", "Fractions LCM and HCF", "Remaining remainder problems ('Find greatest number that divides x, y, z leaving remainder r')"],
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
                        "subtopics": ["Fraction to percentage memory chart", "Price-consumption inverse rule", "Successive percentage formula", "Population depreciation / appreciation"],
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
                        "subtopics": ["Basic CP, SP, MP relationships", "Successive discount equivalent formula", "When CP of x items = SP of y items", "False weight / dishonest dealer percentage gain"],
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
                        "subtopics": ["Simple interest yearly proportionality", "Half-yearly and quarterly compounding", "2-year CI and SI difference shortcut", "3-year CI and SI difference shortcut"],
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
                        "subtopics": ["Angle pairs and transversal lines", "Pythagorean triplets", "Center angle vs circumference angle theorem", "Cyclic quadrilateral opposite angle sum = 180 deg"],
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
                        "subtopics": ["2D formulas: Triangle, Rectangle, Square, Rhombus, Trapezium, Circle", "3D formulas: Cylinder, Cone, Sphere, Hemisphere, Cube, Cuboid", "Melting and recasting questions (Volume conservation)"],
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
    }
}

print(f"Generated core subject topic mappings.")
