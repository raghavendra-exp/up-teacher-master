import json
import os

def get_all_topics():
    from build_all_subject_topics import generate_topics
    catalog = generate_topics()

    # Add Mathematics
    catalog["mathematics"] = {
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

    # Add Pedagogy
    catalog["pedagogy"] = {
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
                        "subtopics": ["Bloom revised taxonomy levels", "Assessment FOR vs OF vs AS learning", "Formative vs Summative assessment contrast", "Scholastic vs Co-scholastic areas in CCE"],
                        "ncertMapping": {"classes": [1, 2, 3], "subjects": ["Teacher Education"], "chapterNames": ["Evaluation and Pedagogy"], "portalLink": "https://ncert.nic.in/textbook.php"},
                        "scertMapping": {"classes": [1, 2], "bookName": "D.El.Ed Mulyankan", "chapterName": "Satat Mulyankan"},
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
    }

    # Add specialized TGT & remaining subjects:
    catalog["biology"] = {
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
                        "subtopics": ["Calvin cycle & RuBisCO", "Kranz anatomy in C4 plants", "Glycolysis net ATP calculation", "Plant hormone functions chart"],
                        "ncertMapping": {"classes": [11, 12], "subjects": ["Biology"], "chapterNames": ["Photosynthesis in Higher Plants", "Plant Growth and Development"], "portalLink": "https://ncert.nic.in/textbook.php"},
                        "scertMapping": {"classes": [9, 10], "bookName": "Vigyan", "chapterName": "Padap Kariyan"},
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
                        "subtopics": ["Mendel 3 laws and ratios", "Watson-Crick DNA B-form dimensions", "Genetic code & central dogma", "Chromosomal disorders in humans"],
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
    }

    catalog["history"] = {
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
                        "subtopics": ["Indus valley key sites and findings", "Ashoka Rock Edict XIII", "Samudragupta Prayag Prashasti", "Akbar land revenue by Todar Mal"],
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
    }

    catalog["geography"] = {
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
                        "subtopics": ["5 Atmospheric layers and lapse rate", "Troposphere weather phenomena", "South-West monsoon branches", "Western Disturbances in North India"],
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
    }

    catalog["polity"] = {
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
                        "subtopics": ["Rajya Sabha permanent nature", "Money Bill Article 110 exclusive power of Lok Sabha", "Supreme Court advisory jurisdiction Article 143", "Emergency Articles 352, 356, 360"],
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
    }

    catalog["economics"] = {
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
                        "subtopics": ["GDP vs GNP vs NNP", "RBI establishment and nationalization dates", "Repo Rate vs Reverse Repo Rate", "Inflation types and CPI/WPI"],
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
    }

    catalog["commerce"] = {
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
                        "subtopics": ["Golden rules of 3 accounts", "Luca Pacioli 1494 milestone", "Conservatism vs Dual Aspect concepts", "Trial balance errors that affect/do not affect agreement"],
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
    }

    catalog["home-science"] = {
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
                        "subtopics": ["Energy values of macro-nutrients", "Kwashiorkor vs Marasmus symptoms", "Natural vs Synthetic textile fibers", "Ernst Engel family budget law"],
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
    }

    catalog["art"] = {
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
                        "subtopics": ["Shadanga 6 limbs shloka", "Ajanta Cave 1 Padmapani and Cave 16 Dying Princess", "Raja Ravi Varma oil painting style", "Abanindranath Tagore wash technique"],
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
    }

    catalog["physical-education"] = {
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
                        "subtopics": ["Olympic rings color to continent mapping", "Standard 400m running track lanes", "Volleyball & Basketball court dimensions", "PRICE first aid protocol for sprains"],
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
    }

    catalog["agriculture"] = {
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
                        "subtopics": ["Kharif, Rabi, Zaid crop classification", "NPK 4:2:1 ratio for wheat", "17 Essential plant nutrients list", "Green revolution milestones in India"],
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
    }

    catalog["music"] = {
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
                        "subtopics": ["Bhatkhande 10 Thaats", "Teental structure (16 matras, tali at 1,5,13; khali at 9)", "Bismillah Khan Shehnai legacy", "Birju Maharaj Kathak style"],
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
    }

    catalog["urdu"] = {
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
                        "subtopics": ["Matla vs Maqta distinction", "Radif and Qafia identification", "Mirza Ghalib life & letters", "Allama Iqbal famous works"],
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
    }

    catalog["current-affairs"] = {
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
                        "subtopics": ["NEP 2020 5+3+3+4 structure", "NIPUN Bharat FLN targets 2026-27", "UP Mahakumbh green initiatives", "Major sports tournaments & Grand Slams"],
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

    return catalog

def write_typescript():
    data = get_all_topics()
    ts_content = """import { SyllabusChapter } from '../types';

export interface SubjectTopicsMapping {
  title: string;
  chapters: SyllabusChapter[];
}

export const SUBJECT_TOPICS_CATALOG: Record<string, SubjectTopicsMapping> = """ + json.dumps(data, indent=2, ensure_ascii=False) + ";\n"

    target_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'src', 'data', 'subject-topics.ts')
    with open(target_path, 'w', encoding='utf-8') as f:
        f.write(ts_content)
    print(f"Successfully generated {target_path} covering {len(data)} subjects!")

if __name__ == "__main__":
    write_typescript()
