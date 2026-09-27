import { ExamInfo } from '../types';

export const EXAMS_DATA: Record<string, ExamInfo> = {
  UP_PRT: {
    id: 'UP_PRT',
    name: 'UP Primary Teacher / Assistant Teacher (सहायक अध्यापक)',
    hindiName: 'उत्तर प्रदेश प्राथमिक सहायक अध्यापक भर्ती परीक्षा (सुपर टीईटी)',
    tagline: 'Comprehensive recruitment examination for Classes 1 to 5 Primary Teachers across Uttar Pradesh Basic Education Parishad schools.',
    hindiTagline: 'उत्तर प्रदेश बेसिक शिक्षा परिषद के प्राथमिक विद्यालयों (कक्षा 1 से 5) में सहायक अध्यापक पद हेतु भर्ती परीक्षा।',
    conductingBody: 'Uttar Pradesh Education Service Selection Commission (UPESSC)',
    totalQuestions: 120,
    totalMarks: 360,
    durationMinutes: 120,
    markingScheme: {
      correct: 3,
      incorrect: -1,
      unattempted: 0
    },
    eligibility: {
      education: 'Graduation + 2-year D.El.Ed. (BTC) / D.Ed. (Special) + Qualified UPTET Paper-1 / CTET Paper-1. (B.Ed. status subject to latest Supreme Court orders).',
      hindiEducation: 'स्नातक + 2-वर्षीय डी.एल.एड. (BTC) अथवा डी.एड. (विशेष शिक्षा) + यूपीटीईटी पेपर-1 अथवा सीटीईटी पेपर-1 उत्तीर्ण।',
      ageLimit: '21 to 40 years (Relaxation for SC/ST/OBC/Ex-servicemen/PH as per UP Govt norms)',
      otherCriteria: 'Resident of Uttar Pradesh / Indian Citizen satisfying state domicile requirements.'
    },
    officialWebsite: 'https://upessc.up.gov.in',
    officialNotificationUrl: 'https://upessc.up.gov.in',
    isVerifiedOfficial: true,
    verificationDate: '2026-09-15',
    overview: 'The UP Primary Assistant Teacher examination is the decisive recruitment test conducted for merit-based appointment in government primary schools. Under the unified UPESSC framework, the pattern comprises 120 objective questions worth 360 marks with a 1/3rd penalty for incorrect answers.',
    hindiOverview: 'उत्तर प्रदेश प्राथमिक सहायक अध्यापक भर्ती परीक्षा प्रदेश के परिषदीय प्राथमिक विद्यालयों में चयन का अंतिम एवं निर्णायक चरण है। नए आयोग (UPESSC) के ढांचे के तहत 120 प्रश्न (360 अंक) 120 मिनट में हल करने होते हैं, जिसमें 1/3rd ऋणात्मक अंकन (-1 अंक) लागू है।',
    sections: [
      { name: 'General Knowledge & Current Affairs', hindiName: 'सामान्य ज्ञान एवं समसामयिक घटनाएं', questions: 25, marks: 75, weightagePercent: 20.8 },
      { name: 'Mathematics', hindiName: 'गणित', questions: 16, marks: 48, weightagePercent: 13.3 },
      { name: 'Languages (Hindi, Sanskrit, English)', hindiName: 'भाषा (हिन्दी, संस्कृत, अंग्रेजी)', questions: 30, marks: 90, weightagePercent: 25.0 },
      { name: 'Science', hindiName: 'विज्ञान', questions: 8, marks: 24, weightagePercent: 6.7 },
      { name: 'Environmental & Social Studies', hindiName: 'पर्यावरण एवं सामाजिक अध्ययन', questions: 8, marks: 24, weightagePercent: 6.7 },
      { name: 'Teaching Skills', hindiName: 'शिक्षण कौशल', questions: 8, marks: 24, weightagePercent: 6.7 },
      { name: 'Child Psychology', hindiName: 'बाल मनोविज्ञान', questions: 8, marks: 24, weightagePercent: 6.7 },
      { name: 'Life Skills, Management & Attitude', hindiName: 'जीवन कौशल, प्रबंधन एवं अभिवृत्ति', questions: 8, marks: 24, weightagePercent: 6.7 },
      { name: 'Logical Reasoning', hindiName: 'तार्किक ज्ञान (रीजनिंग)', questions: 5, marks: 15, weightagePercent: 4.2 },
      { name: 'Information Technology (ICT)', hindiName: 'सूचना तकनीकी', questions: 4, marks: 12, weightagePercent: 3.3 }
    ]
  },
  UP_TGT: {
    id: 'UP_TGT',
    name: 'UP TGT — Trained Graduate Teacher (प्रशिक्षित स्नातक शिक्षक)',
    hindiName: 'उत्तर प्रदेश टीजीटी — प्रशिक्षित स्नातक शिक्षक भर्ती परीक्षा',
    tagline: 'Recruitment examination for subject teachers for Classes 9 and 10 in secondary and aided schools of Uttar Pradesh.',
    hindiTagline: 'उत्तर प्रदेश के अशासकीय सहायता प्राप्त अशासकीय माध्यमिक विद्यालयों में कक्षा 9 व 10 के विषय अध्यापकों हेतु परीक्षा।',
    conductingBody: 'Uttar Pradesh Education Service Selection Commission (UPESSC)',
    totalQuestions: 120,
    totalMarks: 360,
    durationMinutes: 120,
    markingScheme: {
      correct: 3,
      incorrect: -1,
      unattempted: 0
    },
    eligibility: {
      education: 'Relevant Bachelor’s Degree with at least 50% marks in the concerned subject + B.Ed. from an NCTE-recognized institution.',
      hindiEducation: 'संबंधित विषय में न्यूनतम 50% अंकों के साथ स्नातक उपाधि + किसी मान्यता प्राप्त विश्वविद्यालय से बी.एड. (B.Ed.)।',
      ageLimit: 'Minimum 21 years; No upper age limit cap specified by commission as per traditional rules, subject to official notification.',
      otherCriteria: 'Candidate must fulfill subject combination criteria prescribed in the official UPESSC service rules.'
    },
    officialWebsite: 'https://upessc.up.gov.in',
    officialNotificationUrl: 'https://upessc.up.gov.in',
    isVerifiedOfficial: true,
    verificationDate: '2026-09-15',
    overview: 'UP TGT selects specialized educators for UP Secondary Education. The standardized examination features 90 questions on the specific concerned subject plus 30 compulsory General Studies questions (Total 120 questions, 360 marks, 120 minutes with negative marking).',
    hindiOverview: 'यूपी टीजीटी अशासकीय सहायता प्राप्त माध्यमिक विद्यालयों के लिए विषय-विशेषज्ञ शिक्षकों का चयन करता है। नए पैटर्न के अनुसार 90 प्रश्न संबंधित विषय से तथा 30 प्रश्न अनिवार्य सामान्य अध्ययन (GS) से पूछे जाते हैं (कुल 120 प्रश्न, 360 अंक, 1/3rd नेगेटिव मार्किंग)।',
    sections: [
      { name: 'Concerned Subject Specialization', hindiName: 'संबंधित विषय विशेषज्ञता', questions: 90, marks: 270, weightagePercent: 75.0 },
      { name: 'Compulsory General Studies & UP GK', hindiName: 'अनिवार्य सामान्य अध्ययन एवं यूपी विशेष', questions: 30, marks: 90, weightagePercent: 25.0 }
    ]
  },
  UPTET: {
    id: 'UPTET',
    name: 'UPTET — UP Teacher Eligibility Test (पात्रता परीक्षा)',
    hindiName: 'उत्तर प्रदेश शिक्षक पात्रता परीक्षा (केवल पात्रता हेतु - भर्ती नहीं)',
    tagline: 'Mandatory state qualifying eligibility test for aspiring teachers. Not a direct recruitment examination.',
    hindiTagline: 'प्राथमिक एवं उच्च प्राथमिक स्तर पर शिक्षक बनने हेतु अनिवार्य अर्हक पात्रता परीक्षा। यह सीधी भर्ती परीक्षा नहीं है।',
    conductingBody: 'Uttar Pradesh Education Service Selection Commission (UPESSC)',
    totalQuestions: 150,
    totalMarks: 150,
    durationMinutes: 150,
    markingScheme: {
      correct: 1,
      incorrect: 0,
      unattempted: 0
    },
    eligibility: {
      education: 'D.El.Ed. / B.Ed. enrolled or passed for Paper-1 (Primary 1-5) and Paper-2 (Upper Primary 6-8).',
      hindiEducation: 'डी.एल.एड. / बी.एड. उत्तीर्ण अथवा अंतिम वर्ष में अध्ययनरत।',
      ageLimit: 'Minimum 18 years; No upper age limit.',
      otherCriteria: 'Qualifying marks: 60% for General (90/150) and 55% for Reserved categories (82/150). Certificate has lifetime validity.'
    },
    officialWebsite: 'https://upessc.up.gov.in',
    officialNotificationUrl: 'https://upessc.up.gov.in',
    isVerifiedOfficial: true,
    verificationDate: '2026-09-10',
    overview: 'UPTET is strictly an eligibility examination designed to benchmark teacher readiness. Qualifying UPTET makes the candidate eligible to apply for Assistant Teacher (Super TET) vacancies. There is NO negative marking in UPTET.',
    hindiOverview: 'यूपीटीईटी पूर्णतः एक पात्रता परीक्षा है, जो शिक्षक पद के लिए न्यूनतम योग्यता सुनिश्चित करती है। इसे उत्तीर्ण करने के उपरांत ही अभ्यर्थी सुपर टीईटी (सहायक अध्यापक भर्ती) में आवेदन कर सकते हैं। यूपीटीईटी में कोई नकारात्मक अंकन नहीं होता है।',
    sections: [
      { name: 'Child Development & Pedagogy', hindiName: 'बाल विकास एवं शिक्षण विधि', questions: 30, marks: 30, weightagePercent: 20.0 },
      { name: 'Language 1 (Hindi - Compulsory)', hindiName: 'भाषा 1 (हिन्दी - अनिवार्य)', questions: 30, marks: 30, weightagePercent: 20.0 },
      { name: 'Language 2 (English / Sanskrit / Urdu)', hindiName: 'भाषा 2 (अंग्रेजी / संस्कृत / उर्दू में से एक)', questions: 30, marks: 30, weightagePercent: 20.0 },
      { name: 'Mathematics', hindiName: 'गणित', questions: 30, marks: 30, weightagePercent: 20.0 },
      { name: 'Environmental Studies (EVS)', hindiName: 'पर्यावरणीय अध्ययन (ईवीएस)', questions: 30, marks: 30, weightagePercent: 20.0 }
    ]
  }
};
