import { OfficialResourceItem } from '../types';

export const OFFICIAL_RESOURCES_DATA: OfficialResourceItem[] = [
  {
    id: 'res-ncert-portal',
    title: 'NCERT Official Textbook Repository (Classes 1 to 12)',
    hindiTitle: 'एनसीईआरटी आधिकारिक पाठ्यपुस्तक पोर्टल (कक्षा 1 से 12)',
    category: 'NCERT & ePathshala',
    organization: 'National Council of Educational Research and Training (NCERT)',
    url: 'https://ncert.nic.in/textbook.php',
    description: 'Official direct portal to access, view, and legally download complete NCERT textbooks for all subjects from primary to senior secondary levels in Hindi, English, and Urdu.',
    hindiDescription: 'कक्षा 1 से 12 तक की सभी विषयों की एनसीईआरटी पाठ्यपुस्तकों को निःशुल्क एवं विधिक रूप से डाउनलोड करने का आधिकारिक केंद्रीय पोर्टल।',
    directLinks: [
      { label: 'NCERT Primary Classes 1–5 (Math-Magic, Rimjhim, Looking Around)', url: 'https://ncert.nic.in/textbook.php', classRange: 'Classes 1–5 (PRT Base)' },
      { label: 'NCERT Upper Primary Classes 6–8 (Science, Social Science, Math)', url: 'https://ncert.nic.in/textbook.php', classRange: 'Classes 6–8' },
      { label: 'NCERT Secondary Classes 9–10 (Math, Science, Social Science)', url: 'https://ncert.nic.in/textbook.php', classRange: 'Classes 9–10 (TGT Foundation)' },
      { label: 'NCERT Higher Secondary Classes 11–12 (Physics, Chem, Bio, History, Polity)', url: 'https://ncert.nic.in/textbook.php', classRange: 'Classes 11–12 (TGT Advanced)' }
    ]
  },
  {
    id: 'res-epathshala',
    title: 'ePathshala Digital Learning Portal & Mobile Apps',
    hindiTitle: 'ई-पाठशाला डिजिटल शिक्षण पोर्टल एवं मोबाइल ऐप',
    category: 'NCERT & ePathshala',
    organization: 'CIET-NCERT & Ministry of Education, Govt. of India',
    url: 'https://epathshala.nic.in',
    description: 'Joint initiative showcasing educational audio, video, interactive flipbooks, periodicals, and teacher-educator pedagogical learning resources.',
    hindiDescription: 'शिक्षा मंत्रालय एवं एनसीईआरटी की डिजिटल पहल, जहाँ सभी पाठ्यपुस्तकों के डिजिटल प्रारूप, ऑडियो-विजुअल संसाधन एवं ई-पब उपलब्ध हैं।',
    directLinks: [
      { label: 'ePathshala Web E-Textbooks Viewer', url: 'https://epathshala.nic.in' },
      { label: 'Google Play Store Mobile App', url: 'https://play.google.com/store/apps/details?id=in.gov.epathshala' }
    ]
  },
  {
    id: 'res-upessc-official',
    title: 'Uttar Pradesh Education Service Selection Commission (UPESSC)',
    hindiTitle: 'उत्तर प्रदेश शिक्षा सेवा चयन आयोग (UPESSC)',
    category: 'Commission & Dept',
    organization: 'UP State Government, Prayagraj',
    url: 'https://upessc.up.gov.in',
    description: 'The sole unified official commission responsible for advertising, conducting examinations, releasing answer keys, and certifying merit lists for UP Assistant Teachers, TGT, and PGT recruitments.',
    hindiDescription: 'उत्तर प्रदेश में बेसिक, माध्यमिक एवं उच्च शिक्षण संस्थानों में शिक्षकों की भर्ती का एकमात्र अधिकृत राज्य आयोग।',
    directLinks: [
      { label: 'UPESSC Official Homepage & Notices', url: 'https://upessc.up.gov.in' },
      { label: 'UPESSC Recruitment Advertisements & Syllabus', url: 'https://upessc.up.gov.in' }
    ]
  },
  {
    id: 'res-up-basic-education',
    title: 'Uttar Pradesh Basic Education Department (बेसिक शिक्षा विभाग)',
    hindiTitle: 'उत्तर प्रदेश बेसिक शिक्षा विभाग / बेसिक शिक्षा परिषद',
    category: 'Commission & Dept',
    organization: 'Department of Basic Education, Government of Uttar Pradesh',
    url: 'https://basiceducation.up.gov.in',
    description: 'Governing department for primary and upper primary parishadiya schools across all 75 districts of Uttar Pradesh.',
    hindiDescription: 'उत्तर प्रदेश के प्राथमिक एवं उच्च प्राथमिक परिषदीय विद्यालयों का प्रशासनिक व नियामक विभाग।',
    directLinks: [
      { label: 'Basic Education Department Portal', url: 'https://basiceducation.up.gov.in' },
      { label: 'Mission Prerna Portal', url: 'https://prernaup.in' }
    ]
  },
  {
    id: 'res-scert-up',
    title: 'State Council of Educational Research & Training, UP (SCERT)',
    hindiTitle: 'राज्य शैक्षिक अनुसंधान एवं प्रशिक्षण परिषद, उत्तर प्रदेश (SCERT)',
    category: 'Curriculum & Boards',
    organization: 'SCERT Uttar Pradesh, Lucknow / Prayagraj',
    url: 'http://scertup.co.in',
    description: 'Academic authority designing primary school textbooks (Kalrav, Hamara Parivesh, Gintara, Sanskrit Piyusham) and D.El.Ed. (BTC) teacher training curricula in UP.',
    hindiDescription: 'उत्तर प्रदेश में प्राथमिक पाठ्यपुस्तकों (कलरव, हमारा परिवेश, गिनतारा) एवं डी.एल.एड. (बीटीसी) पाठ्यक्रम निर्माण की शीर्ष संस्था।',
    directLinks: [
      { label: 'SCERT UP Official Website', url: 'http://scertup.co.in' }
    ]
  },
  {
    id: 'res-upmsp',
    title: 'Uttar Pradesh Madhyamik Shiksha Parishad (UPMSP - UP Board)',
    hindiTitle: 'उत्तर प्रदेश माध्यमिक शिक्षा परिषद (यूपी बोर्ड, प्रयागराज)',
    category: 'Curriculum & Boards',
    organization: 'Board of High School and Intermediate Education Uttar Pradesh',
    url: 'https://upmsp.edu.in',
    description: 'The statutory secondary board prescribing syllabus and textbooks for Classes 9 to 12 in UP, directly aligned with UP TGT subject examination standards.',
    hindiDescription: 'कक्षा 9 से 12 तक के पाठ्यक्रम एवं पाठ्यपुस्तकों का आधिकारिक बोर्ड, जिसके पाठ्यक्रम पर यूपी टीजीटी परीक्षा आधारित होती है।',
    directLinks: [
      { label: 'UPMSP Official Portal', url: 'https://upmsp.edu.in' },
      { label: 'UPMSP High School & Intermediate Syllabus', url: 'https://upmsp.edu.in' }
    ]
  },
  {
    id: 'res-diksha-up',
    title: 'DIKSHA Uttar Pradesh Portal & QR-Enabled Resources',
    hindiTitle: 'दीक्षा उत्तर प्रदेश पोर्टल एवं डिजिटल पाठ्य सामग्री',
    category: 'Digital Initiatives',
    organization: 'Ministry of Education & UP Basic Education Department',
    url: 'https://diksha.gov.in/up',
    description: 'Interactive digital portal with video lessons mapped to QR codes printed inside UP SCERT primary and upper primary textbooks.',
    hindiDescription: 'उत्तर प्रदेश बेसिक शिक्षा की पाठ्यपुस्तकों में मुद्रित क्यूआर कोड से जुड़े डिजिटल पाठ, वीडियो और क्विज़ का आधिकारिक प्लेटफॉर्म।',
    directLinks: [
      { label: 'DIKSHA UP Portal', url: 'https://diksha.gov.in/up' }
    ]
  }
];
