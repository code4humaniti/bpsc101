# BPSC 5-Year Analytics & Preparation Portal (66th to 71st CCE)

A minimalist, high-performance, zero-backend static web application built for Bihar Public Service Commission (BPSC) civil services aspirants preparing for the Combined Competitive Examination (CCE).

---

## 🌟 2-Page Architecture

The portal has been consolidated into 2 hyper-focused command centers:

### 1. Prelims Command Center (`index.html`)
- **Top Center Switch**: `[ 📍 Prelims | 📜 Mains ]`
- **Exam Pattern & Mechanics**: 150 Qs, 4 Options (A-D), 1/3rd Negative Marking (-0.33).
- **Category-Wise Cutoffs Table**: 66th to 71st BPSC (UR Male/Female, EWS Male/Female, BC, EBC, SC, ST).
- **Subject Weightage Table**: 8 Prelims subjects with historical question counts.
- **Ultra-Focused Resource Stack**: Single-source primary textbook + practice tool per subject (Spectrum, NCERTs, Ghatna Chakra, Imtiaz Ahmad, Eduteria).
- **Interactive Safe-Score Calculator**: Calculates net score under 1/3rd negative marking penalty.

### 2. Mains Command Center (`mains.html`)
- **Top Center Switch**: `[ 📍 Prelims | 📜 Mains ]`
- **Merit Score Breakdown**: 1020 Total Merit Marks (GS 1: 300, GS 2: 300, Essay: 300, Interview: 120) + 2 Qualifying Papers.
- **Category-Wise Final Cutoffs Table**: 68th to 70th BPSC final selection cutoffs (out of 1020).
- **Syllabus Breakdown**: Highlights 72 marks Statistics in GS 1 & Bihar Economic Survey in GS 2.
- **Ultra-Focused Mains Resource Stack**: Spectrum, Laxmikanth, Imtiaz Ahmad, Economic Survey & Budget, Editorials.
- **Bihar Cultural Proverbs Library**: Devanagari Bihar proverbs for Section 3 of the 300-mark Essay paper.

---

## 🚀 How to Run Locally

```bash
# Option 1: Python Server
python3 -m http.server 8080

# Option 2: Node.js serve
npx serve ./ -p 8080
```
Then open **`http://localhost:8080`** in your browser.
