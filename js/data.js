/**
 * BPSC Analytics & Preparation Portal - Minimalist 2-Page Centralized Data Module
 */

window.BPSCData = {
  currentLang: localStorage.getItem('bpsc_lang') || 'EN',

  translations: {
    EN: {
      navPrelims: "Prelims",
      navMains: "Mains",
      brandTitle: "BPSC Analytics Portal",
      brandSub: "66th to 71st CCE • Prelims & Mains Command Center",

      // Prelims Page
      prelimsBadge: "Prelims Command Center",
      prelimsTitle: "BPSC Prelims Examination Blueprint & Analytics",
      prelimsDesc: "Single-page minimal hub for BPSC Prelims (150 Marks). Category cutoffs, syllabus distribution, ultra-focused >80% resource stack, and 1/3rd negative marking calculator.",
      
      patternTitle: "⚙️ Exam Pattern & Scoring Mechanics",
      patternOptions: "4 Options (A to D)",
      patternOptionsSub: "Option E removed in 69th BPSC",
      patternNegative: "1/3rd (-0.33) Penalty",
      patternNegativeSub: "Negative marking introduced in 68th BPSC",
      patternMarks: "150 Marks / 150 Qs",
      patternMarksSub: "Duration: 2 Hours (120 Mins)",
      patternCutoff: "91 - 92 Marks",
      patternCutoffSub: "Latest UR Male qualifying cutoff range",

      cutoffTableTitle: "📋 Category-Wise Historical Prelims Cutoff Marks (Out of 150)",
      cutoffTableDesc: "Official Prelims qualifying thresholds from 66th to 71st BPSC CCE. Horizontal reservation applies for female categories.",

      syllabusTitle: "📊 Subject Weightage & Question Distribution",
      syllabusDesc: "Historical average question counts across recent BPSC Prelims examinations.",

      resourceTitle: "📚 Ultra-Focused Prelims Resource Stack (Target >80% Score)",
      resourceDesc: "Single-source recommended textbook + practice tool per subject to prevent resource fatigue and maximize efficiency.",

      calcTitle: "🧮 Interactive Safe-Score & 1/3rd Negative Marking Calculator",
      calcDesc: "Calculate your net score and safe accuracy threshold under 1/3rd negative marking penalty.",
      calcAttempts: "Total Questions Attempted (out of 150)",
      calcWrong: "Expected Incorrect Attempts",
      calcCalculate: "Calculate Net Score",

      // Mains Page
      mainsBadge: "Mains Command Center",
      mainsTitle: "BPSC Mains Structure & Final Selection Cutoffs (1020 Marks)",
      mainsDesc: "Single-page minimal hub for BPSC Mains written stage and Interview. 1020 Merit Marks breakdown, topper blueprints, visual score matrix, and Bihar proverbs library.",

      // Strategy Banner
      strategyBannerTitle: "🎯 Core Selection Strategy: Maximize Mains Written Marks",
      strategyBannerDesc: "Interview scores can be unpredictable. Do not leave your final selection to luck at the interview stage. Maximize your score in the Mains written papers (GS-1 + GS-2 + Essay = 900 Marks) to guarantee your rank regardless of interview variation!",

      // Topper Highlight
      topperTitle: "🏆 70th BPSC Topper Marks Blueprint (Out of 1020 Total Marks)",
      topperDesc: "Notice the razor-thin 1-mark gap between Rank 1 and Ranks 2/3 in 70th BPSC! Every single mark in written papers matters.",

      // Score Comparison Matrix
      matrixTitle: "📊 Mains Paper Score Comparison Matrix (Top vs High vs Good)",
      matrixDesc: "Target benchmark scores across GS-1, GS-2, Essay, and Interview to secure a Top Rank.",

      // Explainer Panel
      explainerTitle: "💡 Why are GS-2 Marks Comparatively Low? (GS-1 vs GS-2 Analysis)",
      explainerGs1Title: "GS Paper 1 (High Scoring Potential)",
      explainerGs1Point1: "Contains a 72-mark Statistics/DI section where candidates can easily score a perfect 72/72.",
      explainerGs1Point2: "History topics (Maurya Art, Pala Art, Patna Qalam, Tribal uprisings) are highly repetitive and predictable.",
      explainerGs1Point3: "High scores usually cluster around 180-195 marks.",
      explainerGs2Title: "GS Paper 2 (Strict Evaluation)",
      explainerGs2Point1: "Entirely subjective paper containing Indian Polity, Economy/Geography of Bihar, and Science & Tech.",
      explainerGs2Point2: "Polity and Economic responses are evaluated strictly, requiring critical analysis, articles, and recommendations (Punchhi, Sarkaria).",
      explainerGs2Point3: "Top scores rarely exceed 155-162 marks. Even a score of 140+ is considered excellent.",

      // Proverbs Card Labels
      proverbMeaningLabel: "Meaning",
      proverbContextLabel: "Context",

      // Target Calculator
      topperCalcTitle: "🎯 Topper's Target Score Blueprint Calculator",
      topperCalcDesc: "Customize your target marks across GS-1, GS-2, Essay, and Interview to project your total merit score against the 593-mark Topper Benchmark.",

      mainsPatternTitle: "📜 Merit Score Breakdown & Qualifying Papers",
      mainsCutoffTableTitle: "📋 Category-Wise Historical Mains Final Cutoffs (Out of 1020)",
      mainsCutoffTableDesc: "Final selection cutoffs after Mains written exam and Interview for 68th, 69th, and 70th BPSC CCE.",

      mainsSyllabusTitle: "🎯 Mains Syllabus & High-Yield Marks Distribution",
      mainsResourceTitle: "📚 Ultra-Focused Mains Resource Stack (Target >80% Score)",
      mainsResourceDesc: "Hyper-focused study stack for GS 1, GS 2, and Essay paper preparation.",

      proverbsTitle: "✍️ Bihar Cultural Proverbs Library for Essay Section 3 (100 Marks)",
      proverbsDesc: "Curated collection of traditional Bihar proverbs in Devanagari script with contextual meanings for Section 3 of the 300-mark Essay paper.",

      // Sidebar Navigation
      sidebarPrelimsBlue: "Prelims Blueprint",
      sidebarMainsBlue: "Mains Blueprint",
      sidebarStrategy: "Strategy & Calculator",
      sidebarSyllabus: "Syllabus & Resources",
      sidebarEssay: "Essay & Proverbs",
      sidebarStats: "Stats Masterclass",

      // Tag Filter Labels
      tagAll: "All",
      tagHardwork: "Hard Work",
      tagAgriculture: "Agriculture",
      tagGovernance: "Governance",
      tagEthics: "Ethics & Wisdom",
      tagCulture: "Culture & Heritage",
      tagSelfreliance: "Self-Reliance",

      // Statistics Page
      statsTitle: "GS-1 Statistics Masterclass (72/72 Guide)",
      statsDesc: "A comprehensive strategic blueprint to secure a perfect score in BPSC GS-1 Section III (Data Interpretation).",
      statsMindsetTitle: "💡 Core Mindset & Scoring Mechanics",
      statsMindsetBody: "Subjective evaluation in GS-1 varies, but Statistics is purely mathematical. Scoring 72/72 builds an unbeatable lead over competitors.",
      statsFormatTitle: "📝 Exam Format & Mark Distribution",
      statsFormatBody: "Candidates must solve 2 out of 4 long Data Interpretation questions (36 marks each) in GS Paper 1 Section III. Recommended duration is 40-45 minutes.",
      statsCurriculumTitle: "🎓 Technical Curriculum (What to Master)",
      statsExecutionTitle: "⚡ Step-by-Step Execution Plan"
    },

    HI: {
      navPrelims: "प्रारम्भिक परीक्षा (Prelims)",
      navMains: "मुख्य परीक्षा (Mains)",
      brandTitle: "BPSC एनालिटिक्स पोर्टल",
      brandSub: "66वीं से 71वीं CCE • प्रीलिम्स व मेन्स कमांड सेंटर",

      // Prelims Page
      prelimsBadge: "प्रारम्भिक परीक्षा कमांड सेंटर",
      prelimsTitle: "BPSC प्रारम्भिक परीक्षा (Prelims) ब्लूप्रिंट एवं एनालिटिक्स",
      prelimsDesc: "BPSC प्रीलिम्स (150 अंक) का 1-पेज न्यूनतम हब। श्रेणी-वार कटऑफ, विषय भार, >80% अंकदायी केंद्रित पुस्तक सूची और 1/3 ऋणात्मक अंकन कैलकुलेटर।",
      
      patternTitle: "⚙️ परीक्षा संरचना एवं अंकन प्रणाली",
      patternOptions: "4 विकल्प (A से D)",
      patternOptionsSub: "69वीं BPSC से 5वां विकल्प E समाप्त",
      patternNegative: "1/3rd (-0.33) ऋणात्मक अंकन",
      patternNegativeSub: "68वीं BPSC से नकारात्मक अंकन लागू",
      patternMarks: "150 अंक / 150 प्रश्न",
      patternMarksSub: "समय: 2 घंटे (120 मिनट)",
      patternCutoff: "91 - 92 अंक",
      patternCutoffSub: "नवीनतम अनारक्षित पुरुष कटऑफ सीमा",

      cutoffTableTitle: "📋 श्रेणी-वार ऐतिहासिक प्रारम्भिक कटऑफ अंक तालिका (150 में से)",
      cutoffTableDesc: "66वीं से 71वीं BPSC CCE के आधिकारिक प्रीलिम्स कटऑफ अंक। महिला श्रेणियों के लिए 35% क्षैतिज आरक्षण लागू है।",

      syllabusTitle: "📊 विषय भार एवं प्रश्न वितरण (Question Weightage)",
      syllabusDesc: "हाल की BPSC प्रारम्भिक परीक्षाओं में विषयों का औसत प्रश्न भार।",

      resourceTitle: "📚 अति-केंद्रित प्रीलिम्स पुस्तक सूची (लक्ष्य >80% अंक)",
      resourceDesc: "संसाधन भटकाव से बचने के लिए प्रत्येक विषय की 1 मानक पुस्तक + 1 अभ्यास स्रोत।",

      calcTitle: "🧮 सेफ-स्कोर एवं 1/3rd ऋणात्मक अंकन कैलकुलेटर",
      calcDesc: "1/3nd ऋणात्मक अंकन पेनल्टी के तहत अपने प्रयास और शुद्ध प्राप्तांक की गणना करें।",
      calcAttempts: "कुल हल किए गए प्रश्न (150 में से)",
      calcWrong: "अनुमानित गलत उत्तर",
      calcCalculate: "शुद्ध प्राप्तांक की गणना करें",

      // Mains Page
      mainsBadge: "मुख्य परीक्षा कमांड सेंटर",
      mainsTitle: "BPSC Mains अंक संरचना एवं अंतिम चयन कटऑफ (1020 अंक)",
      mainsDesc: "BPSC मुख्य परीक्षा और साक्षात्कार का 1-पेज न्यूनतम हब। 1020 मेधा अंकों का विभाजन, टॉपर ब्लूप्रिंट, विजुअल स्कोर मैट्रिक्स और बिहार लोकोक्ति पुस्तकालय।",

      // Strategy Banner
      strategyBannerTitle: "🎯 मुख्य चयन रणनीति: मेन्स लिखित परीक्षा में अधिकतम अंक लाएं",
      strategyBannerDesc: "साक्षात्कार (Interview) के अंक अनिश्चित हो सकते हैं। अपने अंतिम चयन को साक्षात्कार के भरोसे न छोड़ें। लिखित परीक्षा के 900 अंकों (GS-1 + GS-2 + Essay) में अधिकतम स्कोर हासिल करें ताकि साक्षात्कार में औसत अंक मिलने पर भी आपका चयन पक्का हो सके!",

      // Topper Highlight
      topperTitle: "🏆 70वीं BPSC टॉपर अंक ब्लूप्रिंट (कुल 1020 मेधा अंकों में से)",
      topperDesc: "70वीं BPSC में रैंक 1 और रैंक 2/3 के बीच केवल 1 अंक का बारीक अंतर देखें! लिखित परीक्षा का प्रत्येक 1 अंक आपकी रैंक तय करता है।",

      // Score Comparison Matrix
      matrixTitle: "📊 मेन्स प्रश्नपत्र अंक तुलनात्मक मैट्रिक्स (Top vs High vs Good)",
      matrixDesc: "शीर्ष रैंक सुरक्षित करने के लिए GS-1, GS-2, निबंध और इंटरव्यू का लक्ष्य अंक मानदंड।",

      // Explainer Panel
      explainerTitle: "💡 GS-2 में अंक तुलनात्मक रूप से कम क्यों आते हैं? (GS-1 बनाम GS-2 विश्लेषण)",
      explainerGs1Title: "GS प्रश्नपत्र 1 (अधिकतम स्कोरिंग क्षमता)",
      explainerGs1Point1: "इसमें 72 अंकों का सांख्यिकी (DI) खंड होता है, जहां उम्मीदवार आसानी से पूर्ण 72/72 अंक प्राप्त कर सकते हैं।",
      explainerGs1Point2: "इतिहास के विषय (मौर्य कला, पाल कला, पटना कलम, जनजातीय विद्रोह) अत्यधिक दोहराव वाले और अनुमानित होते हैं।",
      explainerGs1Point3: "उच्च स्कोर आमतौर पर 180-195 अंकों के आसपास केंद्रित होते हैं।",
      explainerGs2Title: "GS प्रश्नपत्र 2 (कठिन मूल्यांकन)",
      explainerGs2Point1: "यह पूरी तरह से विश्लेषणात्मक पेपर है जिसमें भारतीय राजव्यवस्था, बिहार की अर्थव्यवस्था/भूगोल और विज्ञान एवं प्रौद्योगिकी शामिल हैं।",
      explainerGs2Point2: "राजव्यवस्था और अर्थव्यवस्था के उत्तरों का कड़ाई से मूल्यांकन किया जाता है, जिसके लिए समालोचनात्मक विश्लेषण, अनुच्छेदों और समितियों की सिफारिशों (पुंछी, सरकारिया) की आवश्यकता होती है।",
      explainerGs2Point3: "शीर्ष स्कोर शायद ही कहीं 155-162 अंकों से अधिक होते हैं। यहाँ तक कि 140+ का स्कोर भी उत्कृष्ट माना जाता है।",

      // Proverbs Card Labels
      proverbMeaningLabel: "अर्थ",
      proverbContextLabel: "प्रासंगिकता (Context)",

      // Target Calculator
      topperCalcTitle: "🎯 टॉपर टार्गेट स्कोर ब्लूप्रिंट कैलकुलेटर",
      topperCalcDesc: "593 अंकों के टॉपर मानदंड के विरुद्ध अपने कुल मेधा अंकों का अनुमान लगाने के लिए GS-1, GS-2, निबंध और इंटरव्यू के अपने लक्षित अंकों को दर्ज करें।",

      mainsPatternTitle: "📜 मेधा अंक विभाजन एवं क्वालीफाइंग प्रश्नपत्र",
      mainsCutoffTableTitle: "📋 श्रेणी-वार ऐतिहासिक मेन्स अंतिम कटऑफ तालिका (1020 में से)",
      mainsCutoffTableDesc: "निबंध पत्र लागू होने के बाद 68वीं, 69वीं और 70वीं BPSC का अंतिम चयन कटऑफ अंक।",

      mainsSyllabusTitle: "🎯 Mains पाठ्यक्रम एवं उच्च-अंकदायी विषय",
      mainsResourceTitle: "📚 अति-केंद्रित मेन्स पुस्तक सूची (लक्ष्य >80% अंक)",
      mainsResourceDesc: "GS 1, GS 2 एवं निबंध पत्र की तैयारी हेतु hyper-focused अध्ययन सामग्री।",

      proverbsTitle: "✍️ निबंध खंड 3 हेतु बिहार सांस्कृतिक कहावतें (100 अंक)",
      proverbsDesc: "300 अंकों के निबंध पत्र के खंड 3 हेतु देवनागरी लिपि में पारंपरिक बिहार कहावतों एवं लोकोक्तियों का संकलन।",

      // Sidebar Navigation
      sidebarPrelimsBlue: "प्रीलिम्स ब्लूप्रिंट",
      sidebarMainsBlue: "मेन्स ब्लूप्रिंट",
      sidebarStrategy: "रणनीति व कैलकुलेटर",
      sidebarSyllabus: "पाठ्यक्रम एवं स्रोत",
      sidebarEssay: "निबंध व कहावतें",
      sidebarStats: "सांख्यिकी मास्टरक्लास",

      // Tag Filter Labels
      tagAll: "सभी",
      tagHardwork: "कठिन परिश्रम",
      tagAgriculture: "कृषि",
      tagGovernance: "प्रशासन",
      tagEthics: "नैतिकता एवं ज्ञान",
      tagCulture: "संस्कृति एवं विरासत",
      tagSelfreliance: "आत्मनिर्भरता",

      // Statistics Page
      statsTitle: "GS-1 सांख्यिकी मास्टरक्लास (72/72 गाइड)",
      statsDesc: "BPSC GS-1 सेक्शन III (डेटा इंटरप्रिटेशन) में शत-प्रतिशत अंक प्राप्त करने की विस्तृत रणनीति।",
      statsMindsetTitle: "💡 मुख्य मानसिकता एवं अंक संरचना",
      statsMindsetBody: "GS-1 के वर्णनात्मक प्रश्नों में अंक भिन्न हो सकते हैं, लेकिन सांख्यिकी विशुद्ध गणितीय है। 72/72 स्कोर करने से आप अन्य अभ्यर्थियों पर बढ़त बना सकते हैं।",
      statsFormatTitle: "📝 परीक्षा प्रारूप एवं अंक विभाजन",
      statsFormatBody: "अभ्यर्थियों को GS पेपर 1 के सेक्शन III में 4 दीर्घ डेटा इंटरप्रिटेशन प्रश्नों में से 2 प्रश्नों को हल करना होता है (प्रत्येक 36 अंक)। अनुशंसित समय 40-45 मिनट है।",
      statsCurriculumTitle: "🎓 तकनीकी पाठ्यक्रम (क्या सीखें)",
      statsExecutionTitle: "⚡ चरण-दर-चरण क्रियान्वयन योजना"
    }
  },

  // Prelims Cutoff Table Data (66th to 71st BPSC)
  prelimsCutoffs: [
    { edition: "66th BPSC (2020)", urMale: 108, urFem: 100, ewsMale: 103, ewsFem: 95, bc: 104, ebc: 102, sc: 95, st: 98, notes: "5 Options (A-E), No negative marking", notesHi: "5 विकल्प (A-E), कोई नकारात्मक अंकन नहीं" },
    { edition: "67th BPSC (2022)", urMale: 113, urFem: 109, ewsMale: 109, ewsFem: 105, bc: 109, ebc: 106, sc: 99, st: 103, notes: "Peak cutoff before reforms", notesHi: "सुधारों से पहले का उच्चतम कटऑफ अंक" },
    { edition: "68th BPSC (2023)", urMale: 91.00, urFem: 84.00, ewsMale: 87.25, ewsFem: 81.25, bc: 87.00, ebc: 86.50, sc: 79.25, st: 74.00, notes: "REFORM: 1/4th negative marking introduced", notesHi: "सुधार: 1/4 ऋणात्मक अंकन प्रणाली लागू" },
    { edition: "69th BPSC (2023)", urMale: 91.67, urFem: 84.00, ewsMale: 86.67, ewsFem: 77.67, bc: 84.00, ebc: 84.00, sc: 75.00, st: 79.33, notes: "REFORM: Options reduced to 4, 1/3rd penalty", notesHi: "सुधार: 4 विकल्प प्रणाली और 1/3 ऋणात्मक अंकन लागू" },
    { edition: "70th BPSC (2025)", urMale: 91.00, urFem: 81.00, ewsMale: 83.00, ewsFem: 73.00, bc: 75.00, ebc: 82.00, sc: 70.33, st: 65.33, notes: "Official declared prelims cutoffs", notesHi: "आधिकारिक घोषित प्रारंभिक परीक्षा कटऑफ अंक" },
    { edition: "71st BPSC (Est.)", urMale: 92.00, urFem: 82.00, ewsMale: 84.00, ewsFem: 75.00, bc: 77.00, ebc: 83.00, sc: 72.00, st: 68.00, notes: "Current target threshold (4-option & 1/3rd penalty)", notesHi: "वर्तमान लक्षित सीमा (4-विकल्प और 1/3 नकारात्मक अंकन)" }
  ],

  // Prelims Subject Weightage Data
  prelimsWeightage: [
    { subject: "History (India + Bihar)", subjectHi: "इतिहास (भारत + बिहार)", avgQs: 28, pct: "18.6%", isHighYield: true, focus: "Ancient, Medieval, Modern & Bihar Freedom Movement (Kunwar Singh, JP Narayan)", focusHi: "प्राचीन, मध्यकालीन, आधुनिक भारत का इतिहास एवं बिहार का स्वतंत्रता आंदोलन (कुंवर सिंह, जेपी नारायण)" },
    { subject: "General Science", subjectHi: "सामान्य विज्ञान", avgQs: 26, pct: "17.3%", isHighYield: true, focus: "Everyday Physics applications, Chemistry compounds, Biology & Human diseases", focusHi: "दैनिक भौतिकी अनुप्रयोग, रासायनिक यौगिक, जीव विज्ञान और मानव रोग" },
    { subject: "Current Affairs (National + Bihar)", subjectHi: "समसामयिकी (Current Affairs)", avgQs: 28, pct: "18.6%", isHighYield: true, focus: "Last 12 months national events, Bihar Govt Schemes (Saat Nischay 2.0) & Budget", focusHi: "विगत 12 महीनों के राष्ट्रीय घटनाक्रम, बिहार सरकार की योजनाएं (सात निश्चय 2.0) और बजट" },
    { subject: "Bihar Special GK", subjectHi: "बिहार विशेष GK", avgQs: 22, pct: "14.6%", isHighYield: true, focus: "Bihar Geography, Rivers (Ganges, Kosi), Mineral zones, Census 2011 & Dynasties", focusHi: "बिहार का भूगोल, प्रमुख नदियां (गंगा, कोसी), खनिज क्षेत्र, जनगणना 2011 और स्थानीय राजवंश" },
    { subject: "Indian Polity", subjectHi: "भारतीय राजव्यवस्था (Polity)", avgQs: 13, pct: "8.6%", isHighYield: false, focus: "Fundamental Rights, DPSP, Governor, Judiciary, Panchayati Raj 2006 (50% Women)", focusHi: "मौलिक अधिकार, नीति निर्देशक तत्व, राज्यपाल, न्यायपालिका, पंचायती राज अधिनियम 2006 (महिला 50% आरक्षण)" },
    { subject: "Geography (India + Bihar)", subjectHi: "भूगोल (India & Bihar Geography)", avgQs: 12, pct: "8.0%", isHighYield: false, focus: "Physical Geography, Bihar District Boundaries, River Drainage & Soil types", focusHi: "भौतिक भूगोल, बिहार के जिलों की सीमाएं, नदी अपवाह तंत्र और मिट्टी के प्रकार" },
    { subject: "Indian Economy", subjectHi: "भारतीय अर्थव्यवस्था (Economy)", avgQs: 10, pct: "6.6%", isHighYield: false, focus: "Inflation, GDP, Bihar Economic Survey Highlights & State Budget allocations", focusHi: "मुद्रास्फीति, जीडीपी, बिहार आर्थिक सर्वेक्षण के मुख्य अंश और बजट आवंटन" },
    { subject: "Quantitative Aptitude & Reasoning", subjectHi: "गणित एवं रीजनिंग", avgQs: 10, pct: "6.6%", isHighYield: false, focus: "Basic Algebra, Percentage, Profit/Loss, Time & Work, Logical Series", focusHi: "मूल बीजगणित, प्रतिशत, लाभ/हानि, समय और कार्य, तार्किक श्रृंखला" }
  ],

  // Ultra-Focused Prelims Resource Stack
  prelimsResources: [
    {
      subject: "History (Modern & Bihar)",
      subjectHi: "इतिहास (आधुनिक एवं बिहार)",
      primarySource: "Spectrum (Modern India) + NCERT Class 11 Old (Ancient/Medieval)",
      primarySourceHi: "स्पेक्ट्रम (आधुनिक भारत) + पुरानी NCERT कक्षा 11 (प्राचीन/मध्यकालीन)",
      practiceTool: "Ghatna Chakra Purvavalokan (History)",
      practiceToolHi: "घटना चक्र पूर्वावलोकन (इतिहास)",
      strategyTip: "Focus heavily on 1857 Revolt in Bihar (Kunwar Singh), 1942 Quit India (Azad Dasta), Champaran 1917, and Bihar Provincial Conference 1908.",
      strategyTipHi: "बिहार में 1857 के विद्रोह (कुंवर सिंह), 1942 भारत छोड़ो (आज़ाद दस्ता), चंपारण 1917 और बिहार प्रांतीय सम्मेलन 1908 पर विशेष ध्यान दें।"
    },
    {
      subject: "General Science",
      subjectHi: "सामान्य विज्ञान",
      primarySource: "Class 9 & 10 NCERT Science Textbooks",
      primarySourceHi: "कक्षा 9 एवं 10 NCERT विज्ञान पाठ्यपुस्तकें",
      practiceTool: "Ghatna Chakra Purvavalokan (Samanya Vigyan)",
      practiceToolHi: "घटना चक्र पूर्वावलोकन (सामान्य विज्ञान)",
      strategyTip: "Solve all PYQs from Ghatna Chakra. Focus on applied physics, human anatomy, vitamins/deficiencies, and common chemical formulas.",
      strategyTipHi: "घटना चक्र के सभी पिछले वर्षों के प्रश्नों (PYQs) को हल करें। व्यावहारिक भौतिकी, मानव शरीर रचना, विटामिन/कमियों और सामान्य रासायनिक सूत्रों पर ध्यान केंद्रित करें।"
    },
    {
      subject: "Indian Polity",
      subjectHi: "भारतीय राजव्यवस्था",
      primarySource: "M. Laxmikanth (Selected Core Chapters)",
      primarySourceHi: "एम. लक्ष्मीकांत (चयनित मुख्य अध्याय)",
      practiceTool: "Ghatna Chakra Purvavalokan (Polity)",
      practiceToolHi: "घटना चक्र पूर्वावलोकन (राजव्यवस्था)",
      strategyTip: "Selective reading: Preamble, Fundamental Rights, DPSP, President/Governor, Panchayati Raj Act 2006, and Constitutional Bodies.",
      strategyTipHi: "चयनात्मक अध्ययन: प्रस्तावना, मौलिक अधिकार, राज्य के नीति निर्देशक तत्व, राष्ट्रपति/राज्यपाल, पंचायती राज अधिनियम 2006 और संवैधानिक निकाय।"
    },
    {
      subject: "Geography & Economy",
      subjectHi: "भूगोल एवं अर्थव्यवस्था",
      primarySource: "NCERT Class 11-12 Geography + Core Economy Concepts",
      primarySourceHi: "NCERT कक्षा 11-12 भूगोल + मुख्य अर्थव्यवस्था अवधारणाएं",
      practiceTool: "Ghatna Chakra (Geography & Economy)",
      practiceToolHi: "घटना चक्र (भूगोल एवं अर्थव्यवस्था)",
      strategyTip: "Master Bihar district map boundaries (bordering UP, Nepal, WB, Jharkhand) and Bihar river drainage systems.",
      strategyTipHi: "बिहार के जिला मानचित्र की सीमाओं (यूपी, नेपाल, पश्चिम बंगाल, झारखंड की सीमा से लगे जिले) और बिहार नदी अपवाह तंत्र में महारत हासिल करें।"
    },
    {
      subject: "Bihar Special GK",
      subjectHi: "बिहार विशेष GK",
      primarySource: "Imtiaz Ahmad / Crown Bihar Special (Textbook format)",
      primarySourceHi: "इम्तियाज अहमद / क्राउन बिहार विशेष (पाठ्यपुस्तक प्रारूप)",
      practiceTool: "Past 10 Years BPSC Prelims PYQs",
      practiceToolHi: "विगत 10 वर्षों के BPSC प्रीलिम्स PYQs",
      strategyTip: "Memorize Bihar Census 2011 data (Literacy: Rohtas 73.37%, Sex Ratio, Population Density) and Bihar Forest Report.",
      strategyTipHi: "बिहार जनगणना 2011 के आंकड़ों (साक्षरता: रोहतास 73.37%, लिंगानुपात, जनसंख्या घनत्व) और बिहार वन रिपोर्ट को याद करें।"
    },
    {
      subject: "Current Affairs",
      subjectHi: "समसामयिकी",
      primarySource: "Eduteria / Speedy Annual Magazine + Monthly Magazine (Vision / Pratiyogita Darpan)",
      primarySourceHi: "एड्यूटिरिया / स्पीडी वार्षिकांक + मासिक पत्रिका (विज़न / प्रतियोगिता दर्पण)",
      practiceTool: "Eduteria Practice Sets",
      practiceToolHi: "एड्यूटिरिया प्रैक्टिस सेट्स",
      strategyTip: "Cover past 12 months. Thoroughly revise Bihar State Budget & Economic Survey key figures and Bihar welfare schemes.",
      strategyTipHi: "विगत 12 महीनों के घटनाक्रम को कवर करें। बिहार राज्य बजट और आर्थिक सर्वेक्षण के प्रमुख आंकड़ों और बिहार कल्याणकारी योजनाओं को अच्छी तरह से दोहराएं।"
    }
  ],

  // NEW: 70th BPSC Toppers Blueprint Data
  topperBlueprintData: [
    { rank: "Rank 1", name: "Shraddha Pandey", nameHi: "श्रद्धा पांडे", totalMarks: 593, badgeColor: "border-amber-500 bg-amber-500/10 text-amber-300" },
    { rank: "Rank 2", name: "Shashank Gaurav", nameHi: "शशांक गौरव", totalMarks: 592, badgeColor: "border-slate-400 bg-slate-800 text-slate-200" },
    { rank: "Rank 3", name: "Ayush Bijoy", nameHi: "आयुष बिजॉय", totalMarks: 592, badgeColor: "border-amber-700 bg-amber-900/30 text-amber-400" }
  ],

  // NEW: Visual Score Comparison Matrix Data (Top vs High vs Good/Safe)
  mainsBenchmarkMatrix: [
    {
      paper: "GS Paper 1 (300 Marks)",
      paperHi: "GS प्रश्नपत्र 1 (300 अंक)",
      maxMarks: 300,
      topScore: "185 - 195",
      topScorePill: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
      highScore: "165 - 175",
      highScorePill: "bg-blue-500/20 text-blue-300 border-blue-500/40",
      goodScore: "150+",
      goodScorePill: "bg-amber-500/20 text-amber-300 border-amber-500/40",
      insight: "Highly dependent on acing the 72-mark Statistics/DI section (72/72 potential score).",
      insightHi: "72 अंकों के सांख्यिकी/डीआई खंड में 72/72 अंक प्राप्त करने पर अत्यधिक निर्भर।"
    },
    {
      paper: "GS Paper 2 (300 Marks)",
      paperHi: "GS प्रश्नपत्र 2 (300 अंक)",
      maxMarks: 300,
      topScore: "162 (70th BPSC)",
      topScorePill: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
      highScore: "155+",
      highScorePill: "bg-blue-500/20 text-blue-300 border-blue-500/40",
      goodScore: "140+",
      goodScorePill: "bg-amber-500/20 text-amber-300 border-amber-500/40",
      insight: "Lowest scoring paper due to 100% subjective nature and strict evaluation in Polity & Economy.",
      insightHi: "100% विश्लेषणात्मक व राजव्यवस्था/अर्थव्यवस्था में सख्त मूल्यांकन के कारण सबसे कम अंक वाला पेपर।"
    },
    {
      paper: "Essay Paper (300 Marks)",
      paperHi: "निबंध पत्र (300 अंक)",
      maxMarks: 300,
      topScore: "190 - 199",
      topScorePill: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
      highScore: "170 - 180",
      highScorePill: "bg-blue-500/20 text-blue-300 border-blue-500/40",
      goodScore: "155+",
      goodScorePill: "bg-amber-500/20 text-amber-300 border-amber-500/40",
      insight: "Features a unique Section 3 on Bihar folk idioms & proverbs in Devanagari script (100 marks).",
      insightHi: "देवनागरी में बिहार की लोक कहावतों व लोकोक्तियों पर 100 अंकों का विशिष्ट खंड 3 शामिल।"
    },
    {
      paper: "Interview / Personality Test (120 Marks)",
      paperHi: "साक्षात्कार / व्यक्तित्व परीक्षण (120 अंक)",
      maxMarks: 120,
      topScore: "85 - 92",
      topScorePill: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
      highScore: "75 - 84",
      highScorePill: "bg-blue-500/20 text-blue-300 border-blue-500/40",
      goodScore: "65 - 72",
      goodScorePill: "bg-amber-500/20 text-amber-300 border-amber-500/40",
      insight: "Crucial rank differentiator due to tight Mains written score clustering.",
      insightHi: "मेन्स लिखित अंकों के अत्यधिक पास होने के कारण अंतिम रैंक तय करने में निर्णायक।"
    }
  ],

  // Mains Stage Selection Cutoff Data (68th to 70th BPSC - Out of 1020 Marks)
  mainsCutoffs: [
    { edition: "68th BPSC (1020 Marks)", urMale: 521, urFem: 512, ewsMale: 518, ewsFem: 508, bc: 520, ebc: 510, sc: 465, st: 475, notes: "First exam with 300-mark Essay & Qualifying Optional", notesHi: "300 अंकों का निबंध पत्र और क्वालिफाइंग वैकल्पिक विषय वाला पहला संस्करण" },
    { edition: "69th BPSC (1020 Marks)", urMale: 532, urFem: 523, ewsMale: 526, ewsFem: 516, bc: 528, ebc: 520, sc: 478, st: 485, notes: "Integrated CCE mains format", notesHi: "एकीकृत संयुक्त मुख्य परीक्षा प्रारूप" },
    { edition: "70th BPSC (1020 Marks)", urMale: 528, urFem: 521, ewsMale: 528, ewsFem: 520, bc: 528, ebc: 523, sc: 472, st: 480, notes: "Official final selection cutoff scores", notesHi: "आधिकारिक घोषित अंतिम चयन कटऑफ अंक" }
  ],

  // Mains Paper Breakdown & Syllabus
  mainsPapers: [
    {
      code: "GS1",
      name: "General Studies Paper 1",
      nameHi: "सामान्य अध्ययन प्रश्नपत्र 1",
      marks: 300,
      isMerit: true,
      pct: "29.4%",
      topics: "Modern History of India & Bihar Culture, National & International Current Events, Statistical Analysis, Graphs & Diagrams.",
      topicsHi: "भारत का आधुनिक इतिहास एवं बिहार की संस्कृति (पटना कलम, मौर्य, पाल कला), राष्ट्रीय/अंतरराष्ट्रीय समसामयिकी, सांख्यिकीय विश्लेषण व आरेख।",
      keyFocus: "⭐ High-Scoring Focus: Practice Statistics PYQs thoroughly — it carries 72 marks where full marks (72/72) are possible!",
      keyFocusHi: "⭐ उच्च स्कोरिंग क्षेत्र: सांख्यिकी (DI) के पिछले वर्षों के प्रश्नों का गहन अभ्यास करें — यह 72 अंकों का है जहां पूरे 72/72 अंक प्राप्त किए जा सकते हैं!"
    },
    {
      code: "GS2",
      name: "General Studies Paper 2",
      nameHi: "सामान्य अध्ययन प्रश्नपत्र 2",
      marks: 300,
      isMerit: true,
      pct: "29.4%",
      topics: "Indian Polity & Governance, Indian & Bihar Economy & Geography, Role and Impact of Science & Technology in Development.",
      topicsHi: "भारतीय राजव्यवस्था व शासन प्रणाली, भारत एवं बिहार की अर्थव्यवस्था व भूगोल, विकास में विज्ञान एवं प्रौद्योगिकी की भूमिका।",
      keyFocus: "⭐ High-Scoring Focus: Anchor Economy answers with Bihar Economic Survey data & Budget figures; link S&T to agriculture and waste mgmt.",
      keyFocusHi: "⭐ उच्च स्कोरिंग क्षेत्र: अर्थव्यवस्था के उत्तरों में बिहार आर्थिक सर्वेक्षण और बजट के आंकड़ों को शामिल करें; विज्ञान एवं तकनीक को कृषि तथा अपशिष्ट प्रबंधन से जोड़ें।"
    },
    {
      code: "ESSAY",
      name: "Essay Paper (3 Essays)",
      nameHi: "निबंध पत्र (3 निबंध)",
      marks: 300,
      isMerit: true,
      pct: "29.4%",
      topics: "Section 1: General/National Topic (100). Section 2: Socio-Economic/State Topic (100). Section 3: Bihar Proverbs & Folklore (100).",
      topicsHi: "खंड 1: राष्ट्रीय/दार्शनिक विषय (100)। खंड 2: सामाजिक-आर्थिक विषय (100)। खंड 3: बिहार सांस्कृतिक कहावतें व लोकोक्तियां (100)।",
      keyFocus: "⭐ High-Scoring Focus: Section 3 is dedicated to Bihar proverbs in Devanagari script. Writing structured, rich local essays guarantees 200+ marks!",
      keyFocusHi: "⭐ उच्च स्कोरिंग क्षेत्र: खंड 3 देवनागरी में बिहार की लोकोक्तियों और कहावतों पर केंद्रित है। संरचनात्मक रूप से स्थानीय संदर्भ जोड़कर लिखने पर 200+ अंक मिल सकते हैं!"
    },
    {
      code: "INT",
      name: "Interview / Personality Test",
      nameHi: "साक्षात्कार / व्यक्तित्व परीक्षण",
      marks: 120,
      isMerit: true,
      pct: "11.8%",
      topics: "Personality evaluation, administrative aptitude, situational decision-making, Bihar state awareness, and general knowledge.",
      topicsHi: "व्यक्तित्व परीक्षण, प्रशासनिक दृष्टिकोण, परिस्थितिजन्य निर्णय क्षमता, बिहार राज्य ज्ञान एवं सामान्य जागरूकता।",
      keyFocus: "⭐ Merit Decider: Final selection threshold out of 1020 total merit marks.",
      keyFocusHi: "⭐ मेधा निर्धारक: कुल 1020 मेधा अंकों के आधार पर अंतिम चयन सीमा।"
    }
  ],

  // Ultra-Focused Mains Resource Stack
  mainsResources: [
    {
      paper: "GS Paper 1 (300 Marks)",
      paperHi: "GS प्रश्नपत्र 1 (300 अंक)",
      sources: "Spectrum + Imtiaz Ahmad (Bihar Freedom Movement & Tribal Uprisings) + RS Aggarwal (Statistics PYQ Practice)",
      sourcesHi: "स्पेक्ट्रम + इम्तियाज अहमद (बिहार स्वतंत्रता संग्राम व जनजाति विद्रोह) + RS अग्रवाल (सांख्यिकी अभ्यास)",
      strategy: "Master Bihar tribal/peasant uprisings (Santhal 1855, Munda 1899, Indigo, Champaran). Practice past 10 years BPSC Statistics questions to score full 72 marks.",
      strategyHi: "बिहार के जनजातीय/किसान आंदोलनों (संथाल 1855, मुंडा 1899, नील विद्रोह, चंपारण) पर नियंत्रण करें। पूरे 72 अंक प्राप्त करने के लिए पिछले 10 वर्षों के सांख्यिकी प्रश्नों का अभ्यास करें।"
    },
    {
      paper: "GS Paper 2 (300 Marks)",
      paperHi: "GS प्रश्नपत्र 2 (300 अंक)",
      sources: "M. Laxmikanth (Polity) + Bihar Economic Survey & Budget Summary + Applied S&T Notes",
      sourcesHi: "एम. लक्ष्मीकांत (राजव्यवस्था) + बिहार आर्थिक सर्वेक्षण एवं बजट सार + व्यावहारिक विज्ञान व टेक नोट्स",
      strategy: "Polity: Focus on Governor's role, Centre-State relations, Judicial Activism, Panchayati Raj. Economy: Quote exact Bihar Economic Survey statistics. S&T: Energy, Space, Waste Mgmt, Agriculture Tech.",
      strategyHi: "राजव्यवस्था: राज्यपाल की भूमिका, केंद्र-राज्य संबंध, न्यायिक सक्रियता, पंचायती राज। अर्थव्यवस्था: बिहार आर्थिक सर्वेक्षण के सटीक आंकड़े उद्धृत करें। विज्ञान एवं तकनीक: ऊर्जा, अंतरिक्ष, अपशिष्ट प्रबंधन, कृषि तकनीक।"
    },
    {
      paper: "Essay Paper (300 Marks)",
      paperHi: "निबंध पत्र (300 अंक)",
      sources: "Devanagari Bihar Proverbs Library + Editorial Pages (Dainik Jagran Rashtriya Edition / The Hindu) + Model Essays",
      sourcesHi: "देवनागरी बिहार कहावतें पुस्तकालय + संपादकीय पृष्ठ (दैनिक जागरण राष्ट्रीय संस्करण / द हिंदू) + मॉडल निबंध",
      strategy: "Build logical arguments from quality editorials. Practice writing Section 3 essays based on traditional Bihar proverbs in Devanagari script.",
      strategyHi: "गुणवत्तापूर्ण संपादकीय से तार्किक तर्क विकसित करें। देवनागरी लिपि में पारंपरिक बिहार लोकोक्तियों पर आधारित खंड 3 के निबंध लिखने का अभ्यास करें।"
    }
  ],

  // Devanagari Bihar Proverbs Library for Section 3 Essay Paper
  biharProverbs: [
    {
      proverbHi: "बिना मवले काम ना होला",
      proverbEn: "Bina Mawle Kaam Na Hola",
      meaningHi: "कड़ी मेहनत और प्रयास के बिना कोई भी लक्ष्य या सफलता प्राप्त नहीं होती।",
      meaningEn: "No goal or success can be achieved without hard work, effort, and perseverance.",
      essayContext: "Relevant for essays on hard work, self-reliance, administrative dedication, and economic development of Bihar.",
      essayContextHi: "कठिन परिश्रम, आत्मनिर्भरता, प्रशासनिक समर्पण और बिहार के आर्थिक विकास से संबंधित निबंधों के लिए प्रासंगिक।",
      tags: ["hardwork", "selfreliance"]
    },
    {
      proverbHi: "खेती आपन सेती",
      proverbEn: "Kheti Aapan Seti",
      meaningHi: "कृषि या व्यवसाय में सफलता स्वयं की देखरेख और व्यक्तिगत जिम्मेदारी से ही संभव है।",
      meaningEn: "Success in agriculture, enterprise, or governance requires direct personal oversight and accountability.",
      essayContext: "Ideal for essays on agriculture reforms, Bihar agrarian economy, farm management, and grassroots governance.",
      essayContextHi: "कृषि सुधारों, बिहार की कृषि अर्थव्यवस्था, खेत प्रबंधन और जमीनी स्तर के प्रशासन पर निबंधों के लिए आदर्श।",
      tags: ["agriculture", "selfreliance", "governance"]
    },
    {
      proverbHi: "अधजल गगरी छलकत जाए",
      proverbEn: "Adhjal Gagari Chhalkat Jaaye",
      meaningHi: "कम ज्ञान या अनुभव रखने वाला व्यक्ति अधिक दिखावा और घमंड करता है, जबकि ज्ञानी व्यक्ति गंभीर और शांत रहता है।",
      meaningEn: "A person with superficial knowledge makes the most noise, whereas a truly wise individual remains humble and composed.",
      essayContext: "Useful for essays on education policy, intellectual humility, leadership qualities, and social awareness.",
      essayContextHi: "शिक्षा नीति, बौद्धिक विनम्रता, नेतृत्व गुण और सामाजिक जागरूकता पर निबंधों के लिए उपयोगी।",
      tags: ["ethics"]
    },
    {
      proverbHi: "बाप के नाम पर साग ना बिकाए",
      proverbEn: "Baap Ke Naam Par Saag Na Bikaaye",
      meaningHi: "पूर्वजों की ख्याति पर जीवन भर निर्भर नहीं रहा जा सकता; अपनी योग्यता और पहचान स्वयं बनानी पड़ती है।",
      meaningEn: "Inherited legacy alone cannot guarantee success; one must build personal competence, merit, and identity.",
      essayContext: "Applicable for essays on meritocracy, youth empowerment, innovation, and breaking feudal structures.",
      essayContextHi: "योग्यता-तंत्र (meritocracy), युवा सशक्तिकरण, नवाचार और सामंती संरचनाओं को तोड़ने से संबंधित निबंधों के लिए उपयुक्त।",
      tags: ["hardwork", "selfreliance", "culture"]
    },
    {
      proverbHi: "आस-पास बसे देव, त ओकर पूजा कब?",
      proverbEn: "Aas-Paas Base Dev, Ta Okar Pooja Kab?",
      meaningHi: "पास की मूल्यवान वस्तुओं या स्थानीय प्रतिभाओं की उपेक्षा करना और दूर की वस्तुओं के पीछे भागना।",
      meaningEn: "Neglecting local resources, cultural heritage, and indigenous talents while seeking external solutions.",
      essayContext: "Perfect for essays on local governance, Vocal for Local, promoting Bihar handicraft (Madhubani art, Manjusha), and regional tourism.",
      essayContextHi: "स्थानीय शासन, 'वोकल फॉर लोकल', बिहार हस्तशिल्प (मधुबनी कला, मंजूषा) को बढ़ावा देने और क्षेत्रीय पर्यटन पर निबंधों के लिए उपयुक्त।",
      tags: ["culture", "governance"]
    }
  ]
};
