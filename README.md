# UP Teacher Master (UPTeacherMaster)
> **UP PRT + UP TGT Complete Preparation Platform**  
> *A production-quality, responsive, bilingual educational self-study platform for Uttar Pradesh Teacher Recruitment Examinations.*

[![Deploy to GitHub Pages](https://github.com/raghavendra-exp/up-teacher-master/actions/workflows/deploy.yml/badge.svg)](https://github.com/raghavendra-exp/up-teacher-master/actions/workflows/deploy.yml)
[![Daily Updates](https://github.com/raghavendra-exp/up-teacher-master/actions/workflows/update-current-affairs.yml/badge.svg)](https://github.com/raghavendra-exp/up-teacher-master/actions/workflows/update-current-affairs.yml)
[![PWA Ready](https://img.shields.io/badge/PWA-Installable%20%26%20Offline-orange)](https://github.com)
[![License](https://img.shields.io/badge/License-Copyright--Safe%20Educational-emerald)](https://github.com)

---

## 🎯 Target Examinations Covered

1. **UP Primary Teacher / Assistant Teacher Recruitment (सहायक अध्यापक / सुपर टीईटी):**
   - Classes 1 to 5 Parishadiya Primary Schools
   - **Exam Pattern:** 120 Questions • 360 Marks • 120 Minutes
   - **Marking Scheme:** +3 Correct, -1 Incorrect (1/3rd Negative Marking under unified UPESSC)
   - **11 Core Sections:** General Knowledge & Current Affairs (25 Qs), Mathematics (16 Qs), Languages (Hindi 20 Qs, Sanskrit 5 Qs, English 5 Qs), Science (8 Qs), Environmental & Social Studies (8 Qs), Teaching Skills (8 Qs), Child Psychology (8 Qs), Life Skills & Attitude (8 Qs), Logical Reasoning (5 Qs), Information Technology (4 Qs).

2. **UP TGT — Trained Graduate Teacher (प्रशिक्षित स्नातक शिक्षक):**
   - Classes 9 and 10 in Aided and Secondary Schools
   - **Exam Pattern:** 90 Concerned Subject Questions + 30 Compulsory General Studies & UP GK Questions (Total 120 Questions • 360 Marks • 120 Minutes • +3 / -1 Marking).
   - **Supported Disciplines:** Hindi, English, Sanskrit, Urdu, Mathematics, Science (Physics/Chemistry), Biology, Social Science (History, Geography, Polity, Economics), Commerce, Agriculture, Home Science, Art, Music, Physical Education.

3. **UPTET — Teacher Eligibility Test (पात्रता परीक्षा - स्पष्ट पृथक मॉड्यूल):**
   - Strictly a qualifying state eligibility examination (NOT a direct recruitment exam).
   - 150 Questions • 150 Marks • NO negative marking • Lifetime certificate validity.

---

## 🌟 Key Architecture & Features

- **Subject Breadcrumbs on Every Learning Page:**
  - Mandatory clickable breadcrumb: `Home > Exams > UP PRT > Mathematics > Arithmetic > Percentage > Practice`
  - Integrated `← Previous Topic` and `Next Topic →` navigation controls.
  - Collapsible mobile breadcrumb bar for smartphones.
- **Direct NCERT & SCERT Easy-Access Links:**
  - Direct links to official NCERT portals (`https://ncert.nic.in/textbook.php`) for Classes 1 to 12.
  - Links to ePathshala flipbooks and UP SCERT textbooks (*Kalrav, Hamara Parivesh, Gintara, Sanskrit Piyusham*).
- **1,160+ Validated Practice & PYQ Question Bank:**
  - 1,143+ original multi-domain questions.
  - 17+ certified authentic Previous Year Questions from UP 69,000 (2019), UP TGT 2021, and UPTET with official answer keys.
- **Interactive Practice & Mock Test Engine:**
  - Full 120-Q Mock Test simulator with real-time countdown timer, question status palette, and instant review.
  - Adaptive recommendation: automatically generates *"Practice these 20 questions next"* based on detected weak subject areas.
- **Dedicated Uttar Pradesh Special GK:**
  - 75 Districts, 18 Divisions, Rivers, Wildlife Sanctuaries, 1857 Meerut revolt, Kakori action, Charkula dance, ODOP scheme.
  - High-yield One-liner mode and interactive flashcards.
- **Official Notification Tracker & Anti-Rumor Protocol:**
  - Verification stamps beside every update.
  - Displays *"Official information not yet verified"* whenever official commission gazettes are pending.
- **Personal Study Dashboard (No Backend / LocalStorage):**
  - Completed topics tracking, study streak, mistake notebook, bookmarked items, and 1-3-7-15-30 day spaced repetition review intervals.
- **Bilingual Interface:**
  - Instant one-click toggle between English and हिन्दी.
  - Bilingual definitions, explanations, question prompts, and options.
- **PWA Ready:**
  - Installable on Android, iOS, Windows, and Mac as a standalone web app with offline asset caching.

---

## 🚀 Quick Start / Local Development

### Prerequisites
- Node.js (v18+)
- npm or pnpm

### Installation
```bash
# Clone the repository
git clone https://github.com/your-username/up-teacher-master.git
cd up-teacher-master

# Install dependencies
npm install

# Start local development server
npm run dev
```

### Build for Production
```bash
npm run build
```
The output will be built into the `dist/` directory, ready to be hosted statically on GitHub Pages, Netlify, or Vercel.

---

## 🌐 GitHub Pages Deployment Instructions

This repository is pre-configured with `.github/workflows/deploy.yml` for automated GitHub Pages deployment:

1. Push this project to your GitHub repository (e.g. `main` branch).
2. Go to your repository on GitHub: **Settings** → **Pages**.
3. Under **Build and deployment** → **Source**, select **GitHub Actions**.
4. Every push to `main` will automatically build the React TypeScript app and deploy it to:
   ```
   https://<your-username>.github.io/<repo-name>/
   ```
5. Client-side routing uses `HashRouter` (`/#/subjects/mathematics`), ensuring 100% reliability on GitHub Pages with zero 404 errors on browser refresh!

---

## 🔄 Automated Daily Current Affairs Refresh

A dedicated GitHub Actions workflow (`.github/workflows/update-current-affairs.yml`) runs daily at 00:00 UTC:
```
Source Portals / Gazette
       ↓
GitHub Actions Cron
       ↓
scripts/fetch_current_affairs.py
       ↓
Normalize & Validate Schema
       ↓
Commit updated JSON to Repository
       ↓
Automated GitHub Pages Rebuild
```
You can also manually trigger a refresh anytime under the **Actions** tab on GitHub using **Run workflow**.

---

## 📚 Copyright and Content Policy Compliance

- Commercial books are referenced solely under fair educational citation guidelines (title, author, publisher, strengths, limitations, and purchase links).
- Textbooks are not reproduced verbatim or illegally mirrored. Direct links point to official repositories (*NCERT, ePathshala, SCERT UP*).
- All practice questions, explanations, formulas, and mnemonic shortcuts are original synthetic instructional content.

---

## 📄 License
Educational Open-Access MIT License.
