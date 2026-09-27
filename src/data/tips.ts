import { TipAndTrickItem } from '../types';

export const TIPS_DATA: TipAndTrickItem[] = [
  {
    id: 'tip-math-percentage-fraction',
    subject: 'Mathematics',
    chapter: 'Arithmetic',
    title: 'Fast Percentage to Fraction Conversion Matrix',
    hindiTitle: 'प्रतिशत से भिन्न तीव्र गणना ट्रिक',
    category: 'Concept Shortcut',
    description: 'Memorizing standard reciprocal fractions saves 30–45 seconds per arithmetic question in UP PRT and TGT calculation steps.',
    hindiDescription: 'मानक भिन्नों के प्रतिशत मान याद रखने से गणना में 30 से 45 सेकंड की सीधी बचत होती है।',
    example: 'To find 37.5% of 640: Note that 37.5% = 3 × 12.5% = 3/8. So 640 × 3/8 = 80 × 3 = 240 in 3 seconds!',
    hindiExample: '640 का 37.5% ज्ञात करने के लिए: 37.5% = 3/8। अतः 640 × 3/8 = 80 × 3 = 240 मौखिक हल!',
    formulaOrRule: '1/2=50%, 1/3=33.33%, 1/4=25%, 1/5=20%, 1/6=16.66%, 1/7=14.28%, 1/8=12.5%, 1/9=11.11%, 1/11=9.09%, 1/12=8.33%',
    examApplicability: 'UP PRT Mathematics (16 Questions) & TGT Arithmetic'
  },
  {
    id: 'tip-hindi-sandhi-identification',
    subject: 'Hindi',
    chapter: 'Hindi Grammar',
    title: 'Quick Sandhi Identification via Root Signs (स्वर संधि पहचान ट्रिक)',
    hindiTitle: 'स्वर संधि के भेद पहचान की अचूक ट्रिक',
    category: 'Memory Mnemonic',
    description: 'Instantly identify Dirgha, Guna, Vriddhi, Yan, and Ayadi Sandhi by observing the central juncture letter without writing the full derivation.',
    hindiDescription: 'शब्द के मध्यवर्ती अक्षर की मात्रा देखकर बिना पूरा विच्छेद किए स्वर संधि का भेद 2 सेकंड में पहचानें।',
    example: 'नरेश, रमेश, महर्षि -> बीच में ए/ओ की एक मात्रा या \'र्\' = गुण संधि। सदैव, महौषध -> बीच में दो मात्राएं (ऐ/औ) = वृद्धि संधि। इत्यादि, स्वागत -> य/व से पहले आधा अक्षर = यण संधि।',
    hindiExample: 'दीर्घ: आ, ई, ऊ की बड़ी मात्रा (देवालय, कपीश)। गुण: ए, ओ की एक मात्रा (महेश, सूर्योदय)। वृद्धि: ऐ, औ की दो मात्राएं (एकैक, वनौषधि)। यण: य/व/र से पहले आधा व्यंजन (प्रत्येक, अन्वय)। अयादि: अय, आय, अव, आव का उच्चारण (नयन, पावक)।',
    formulaOrRule: 'दीर्घ -> बड़ी मात्रा | गुण -> एक मात्रा (ए, ओ) | वृद्धि -> दो मात्राएं (ऐ, औ) | यण -> य/व के पहले आधा अक्षर | अयादि -> 3 वर्णों का सरल शब्द बिना मात्रा',
    examApplicability: 'UP PRT Hindi (20 Questions), UPTET Hindi & TGT Hindi'
  },
  {
    id: 'tip-cdp-thinkers-mnemonics',
    subject: 'Child Development',
    chapter: 'Pedagogy & Psychology',
    title: 'Thinker -> Experiment Subject -> Theory Mapping',
    hindiTitle: 'मनोवैज्ञानिक -> प्रयोग पशु -> सिद्धांत याद करने की ट्रिक',
    category: 'Memory Mnemonic',
    description: 'Frequently tested pairings of major educational psychologists, their subjects of experimentation, and their foundational theories.',
    hindiDescription: 'प्रमुख मनोवैज्ञानिकों, उनके द्वारा प्रयोग किए गए जीवों और उनके सिद्धांतों को याद रखने की सरल तालिका।',
    example: 'Thorndike -> Cat in Puzzle Box -> Trial & Error / S-R Bond. Pavlov -> Dog -> Classical Conditioning / CR Theory. Skinner -> Rat & Pigeon -> Operant Conditioning / R-S Theory. Kohler -> Chimpanzee (Sultan) -> Insight Learning Theory.',
    hindiExample: 'थार्नडाइक: बिल्ली (प्रयास एवं त्रुटि) | पावलव: कुत्ता (अनुकूलित अनुक्रिया सिद्धांत) | स्किनर: चूहा व कबूतर (सक्रिय अनुबंधन सिद्धांत) | कोहलर: सुल्तान नामक चिम्पांजी (अंतर्दृष्टि / सूझ का सिद्धांत)।',
    formulaOrRule: 'थार की बिल्ली, पावलव का कुत्ता, स्किनर का चूहा, कोहलर का सुल्तान!',
    examApplicability: 'UP PRT Child Psychology & Teaching Skills (16 Questions) + UPTET'
  },
  {
    id: 'tip-polity-fundamental-rights',
    subject: 'Indian Polity & Constitution',
    chapter: 'Constitution',
    title: 'Fundamental Rights Articles Mnemonic (Articles 14 to 32)',
    hindiTitle: 'मौलिक अधिकारों के अनुच्छेदों का क्रमबद्ध सूत्र',
    category: 'Elimination Technique',
    description: 'Remember the sequence of the 6 fundamental rights guaranteed by the Indian Constitution using the English mnemonic E-F-E-R-C-C.',
    hindiDescription: 'संविधान में प्रदत्त 6 मौलिक अधिकारों को सरलता से याद रखने का संक्षिप्त सूत्र।',
    example: 'E (Equality: 14-18) -> F (Freedom: 19-22) -> E (Exploitation: 23-24) -> R (Religion: 25-28) -> C (Cultural/Educational: 29-30) -> C (Constitutional Remedies: Article 32).',
    hindiExample: 'समता का अधिकार (14-18) -> स्वतंत्रता का अधिकार (19-22) -> शोषण के विरुद्ध अधिकार (23-24) -> धार्मिक स्वतंत्रता (25-28) -> संस्कृति व शिक्षा (29-30) -> संवैधानिक उपचार (अनुच्छेद 32)।',
    formulaOrRule: 'समानता -> स्वतंत्रता -> शोषण -> धर्म -> संस्कृति -> उपचार',
    examApplicability: 'UP PRT General Knowledge (Polity) & TGT Civics'
  },
  {
    id: 'tip-exam-elimination-negative-marking',
    subject: 'General & Aptitude',
    chapter: 'Exam Strategy',
    title: 'Negative Marking Management (+3 / -1 Rule in UPESSC)',
    hindiTitle: '1/3 ऋणात्मक अंकन से बचने एवं उत्तर एलिमिनेशन की रणनीति',
    category: 'Common Trap',
    description: 'Under the UPESSC formula where a correct response fetches +3 and a mistake costs -1, blind guessing produces negative expectation. Use systematic option elimination.',
    hindiDescription: 'UPESSC में 1/3 नेगेटिव मार्किंग है (+3 सही, -1 गलत)। यदि आप 2 विकल्पों को 100% गलत सिद्ध कर सकते हैं, तभी अनुमान (50:50) लगाएं।',
    example: 'If 4 questions are attempted by 50:50 guess: 2 correct (+6) and 2 wrong (-2) = Net +4 marks gain. If blind guessed (25% chance): 1 correct (+3) and 3 wrong (-3) = Net 0 marks gain with fatigue risk.',
    hindiExample: '3-Round Strategy: Round 1 (100% निश्चित प्रश्न हल करें), Round 2 (जिनमें 2 विकल्प एलिमिनेट हो चुके हों), Round 3 (कठिन/अस्पष्ट प्रश्नों को छोड़ दें)।',
    formulaOrRule: 'Rule: 100% निश्चित -> Attempt | 50% कंफ्यूजन (2 विकल्प बचे) -> Attempt | 4 अज्ञात विकल्प -> अनिवार्य रूप से Skip!',
    examApplicability: 'Both UP PRT and UP TGT Examinations'
  }
];
