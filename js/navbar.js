/**
 * BPSC 101 — Shared Navigation
 * Adaptive navbar, theme toggle (sun/moon icon), language toggle, footer.
 * Uses CSS custom properties — no hardcoded colors.
 */

document.addEventListener('DOMContentLoaded', () => {
  applyThemeOnLoad();
  renderNavbar();
  renderSidebar();
  renderFooter();
  applyLanguageTranslations();
});

/* ── Language ── */

function getLang() {
  return (window.BPSCData && window.BPSCData.currentLang) || localStorage.getItem('bpsc_lang') || 'EN';
}

function setLang(lang) {
  if (window.BPSCData) window.BPSCData.currentLang = lang;
  localStorage.setItem('bpsc_lang', lang);
  renderNavbar();
  renderSidebar();
  renderFooter();
  applyLanguageTranslations();
  if (typeof renderPageContent === 'function') renderPageContent();
}

/* ── Theme ── */

function getTheme() {
  return localStorage.getItem('bpsc_theme') || 'dark';
}

function setTheme(theme) {
  localStorage.setItem('bpsc_theme', theme);
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  renderNavbar();
  if (typeof renderPageContent === 'function') renderPageContent();
}

function applyThemeOnLoad() {
  const theme = getTheme();
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

/* ── Navbar ── */

function renderNavbar() {
  const container = document.getElementById('navbar-container');
  if (!container) return;

  const path = window.location.pathname.split('/').pop() || 'index.html';
  const isPrelims = path === 'index.html' || path === '' || path === 'prelims.html';
  const isMains = path === 'mains.html';
  const isHi = getLang() === 'HI';
  const isDark = getTheme() === 'dark';
  const hasSidebar = !!document.getElementById('sidebar-container');

  const activeStyle = 'background: var(--bg-pill-active); color: var(--text-pill-active); border-radius: 0.375rem; padding: 0.375rem 0.75rem; font-size: 0.8125rem; font-weight: 600;';
  const inactiveStyle = 'background: transparent; color: var(--text-secondary); border-radius: 0.375rem; padding: 0.375rem 0.75rem; font-size: 0.8125rem; font-weight: 500; transition: color 0.15s;';

  container.innerHTML = `
    <nav style="background: var(--bg-nav); border-bottom: 1px solid var(--border); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);" class="sticky top-0 z-50">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between" style="height: 3.25rem;">

        <!-- Left Brand & Sidebar Toggle -->
        <div class="flex items-center">
          ${hasSidebar ? `
            <button id="sidebar-toggle-hamburger" title="Toggle Navigation" class="flex items-center justify-center mr-3" style="width: 2rem; height: 2rem; border-radius: 0.375rem; border: 1px solid var(--border); background: var(--bg-surface); color: var(--text-secondary); cursor: pointer; transition: border-color 0.15s;">
              ☰
            </button>
          ` : ''}
          <a href="index.html" class="flex items-center gap-1.5" style="text-decoration: none;">
            <span style="color: var(--accent); font-weight: 900; font-size: 1.05rem; letter-spacing: -0.02em;">BPSC 101</span>
          </a>
        </div>

        <!-- Center: [Prelims | Mains] -->
        <div style="background: var(--bg-hover); border: 1px solid var(--border); border-radius: 0.5rem; padding: 0.2rem;" class="flex items-center gap-0.5">
          <a href="index.html" style="${isPrelims ? activeStyle : inactiveStyle}" class="inline-flex items-center gap-1 nav-tab">
            <span class="nav-tab-label">${isHi ? 'प्रारम्भिक' : 'Prelims'}</span>
          </a>
          <a href="mains.html" style="${isMains ? activeStyle : inactiveStyle}" class="inline-flex items-center gap-1 nav-tab">
            <span class="nav-tab-label">${isHi ? 'मुख्य' : 'Mains'}</span>
          </a>
        </div>

        <!-- Right: theme + language -->
        <div class="flex items-center gap-2">
          <button id="theme-toggle-btn"
                  title="${isDark ? 'Switch to light mode' : 'Switch to dark mode'}"
                  style="width: 2rem; height: 2rem; border-radius: 9999px; border: 1px solid var(--border); background: var(--bg-surface); color: var(--text-secondary); display: flex; align-items: center; justify-content: center; cursor: pointer; transition: background 0.15s, border-color 0.15s; font-size: 0.9rem;"
                  onmouseover="this.style.borderColor='var(--border-strong)'"
                  onmouseout="this.style.borderColor='var(--border)'"
          >${isDark ? '☀️' : '🌙'}</button>

          <button id="lang-toggle-btn"
                  title="${isHi ? 'Switch to English' : 'हिंदी में बदलें'}"
                  style="padding: 0.25rem 0.625rem; border-radius: 9999px; border: 1px solid var(--border); background: var(--bg-surface); color: var(--text-secondary); font-size: 0.75rem; font-weight: 600; cursor: pointer; transition: background 0.15s, border-color 0.15s;"
                  onmouseover="this.style.borderColor='var(--border-strong)'"
                  onmouseout="this.style.borderColor='var(--border)'"
          >${isHi ? 'EN' : 'हिं'}</button>
        </div>

      </div>
    </nav>
  `;

  document.getElementById('theme-toggle-btn').addEventListener('click', () => {
    setTheme(getTheme() === 'dark' ? 'light' : 'dark');
  });

  document.getElementById('lang-toggle-btn').addEventListener('click', () => {
    setLang(getLang() === 'EN' ? 'HI' : 'EN');
  });

  if (hasSidebar) {
    document.getElementById('sidebar-toggle-hamburger').addEventListener('click', () => {
      const sidebar = document.getElementById('sidebar-container');
      if (sidebar) {
        sidebar.classList.toggle('collapsed');
        const isCollapsed = sidebar.classList.contains('collapsed');
        localStorage.setItem('bpsc_sidebar_state', isCollapsed ? 'collapsed' : 'expanded');
        
        // Also toggle overlay on mobile/tablet
        const overlay = document.getElementById('sidebar-overlay');
        if (overlay) {
          const isSmall = window.innerWidth < 1024;
          if (isSmall && !isCollapsed) {
            overlay.style.display = 'block';
          } else {
            overlay.style.display = 'none';
          }
        }
      }
    });
  }
}

/* ── Sidebar ── */

function renderSidebar() {
  const container = document.getElementById('sidebar-container');
  if (!container) return;

  const path = window.location.pathname.split('/').pop() || 'index.html';
  const isPrelims = path === 'index.html' || path === '' || path === 'prelims.html';
  const isMains = path === 'mains.html';
  const isStats = path === 'stats.html';
  const isHi = getLang() === 'HI';
  
  // Set initial collapsed class based on localStorage or viewport
  const savedState = localStorage.getItem('bpsc_sidebar_state');
  if (savedState === 'collapsed' || (savedState === null && window.innerWidth < 1024)) {
    container.classList.add('collapsed');
  } else {
    container.classList.remove('collapsed');
  }

  let html = `<nav class="sidebar-nav">`;

  if (isPrelims) {
    html += `
      <div class="sidebar-title" data-i18n="sidebarPrelimsBlue">${isHi ? 'प्रारम्भिक ब्लूप्रिंट' : 'Prelims Blueprint'}</div>
      <a class="sidebar-link" href="#pattern">⚙️ <span data-i18n="patternTitle">${isHi ? 'परीक्षा संरचना एवं अंकन प्रणाली' : 'Exam Pattern & Scoring'}</span></a>
      <a class="sidebar-link" href="#cutoffs">📋 <span data-i18n="cutoffTableTitle">${isHi ? 'श्रेणी-वार ऐतिहासिक प्रीलिम्स कटऑफ' : 'Category-Wise Cutoffs'}</span></a>
      <a class="sidebar-link" href="#weightage">📊 <span data-i18n="syllabusTitle">${isHi ? 'विषय भार एवं प्रश्न वितरण' : 'Subject Weightage'}</span></a>
      <a class="sidebar-link" href="#resources">📚 <span data-i18n="resourceTitle">${isHi ? 'अति-केंद्रित प्रीलिम्स पुस्तक सूची' : 'Prelims Resource Stack'}</span></a>
      <a class="sidebar-link" href="#calculator">🧮 <span data-i18n="calcTitle">${isHi ? 'सेफ-स्कोर कैलकुलेटर' : 'Safe-Score Calculator'}</span></a>
      
      <hr style="border-color: var(--border); margin: 0.75rem 0.5rem;" />
      <a class="sidebar-link" href="mains.html">📝 <span data-i18n="navMains">${isHi ? 'मुख्य परीक्षा (Mains)' : 'Mains Hub'}</span></a>
    `;
  } else if (isMains) {
    html += `
      <div class="sidebar-title" data-i18n="sidebarMainsBlue">${isHi ? 'मुख्य ब्लूप्रिंट' : 'Mains Blueprint'}</div>
      <a class="sidebar-link" href="#strategy">📊 <span data-i18n="sidebarStrategy">${isHi ? 'रणनीति व कैलकुलेटर' : 'Strategy & Calculator'}</span></a>
      <a class="sidebar-link" href="#syllabus">📚 <span data-i18n="sidebarSyllabus">${isHi ? 'पाठ्यक्रम एवं स्रोत' : 'Syllabus & Resources'}</span></a>
      <a class="sidebar-link" href="#essay">✍️ <span data-i18n="sidebarEssay">${isHi ? 'निबंध व कहावतें' : 'Essay & Proverbs'}</span></a>
      
      <hr style="border-color: var(--border); margin: 0.75rem 0.5rem;" />
      <a class="sidebar-link" href="stats.html">🧮 <span data-i18n="sidebarStats">${isHi ? 'सांख्यिकी मास्टरक्लास' : 'Stats Masterclass'}</span></a>
      <a class="sidebar-link" href="index.html">🔙 <span data-i18n="navPrelims">${isHi ? 'प्रारम्भिक परीक्षा (Prelims)' : 'Prelims Hub'}</span></a>
    `;
  } else if (isStats) {
    html += `
      <div class="sidebar-title" data-i18n="sidebarStats">${isHi ? 'सांख्यिकी मास्टरक्लास' : 'Stats Masterclass'}</div>
      <a class="sidebar-link" href="#stats-mindset">💡 <span data-i18n="statsMindsetTitle">${isHi ? 'मुख्य मानसिकता एवं अंक संरचना' : 'Core Mindset'}</span></a>
      <a class="sidebar-link" href="#stats-format">📝 <span data-i18n="statsFormatTitle">${isHi ? 'परीक्षा प्रारूप एवं अंक विभाजन' : 'Exam Format'}</span></a>
      <a class="sidebar-link" href="#stats-curriculum">🎓 <span data-i18n="statsCurriculumTitle">${isHi ? 'तकनीकी पाठ्यक्रम (क्या सीखें)' : 'Technical Curriculum'}</span></a>
      <a class="sidebar-link" href="#stats-execution">⚡ <span data-i18n="statsExecutionTitle">${isHi ? 'चरण-दर-चरण योजना' : 'Execution Plan'}</span></a>
      
      <hr style="border-color: var(--border); margin: 0.75rem 0.5rem;" />
      <a class="sidebar-link" href="mains.html">📝 <span data-i18n="navMains">${isHi ? 'मुख्य परीक्षा (Mains)' : 'Mains Hub'}</span></a>
    `;
  }

  html += `</nav>`;
  container.innerHTML = html;

  // Render/setup Overlay backdrop
  let overlay = document.getElementById('sidebar-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'sidebar-overlay';
    overlay.style.position = 'fixed';
    overlay.style.inset = '0';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
    overlay.style.backdropFilter = 'blur(1px)';
    overlay.style.zIndex = '85';
    overlay.style.display = 'none';
    overlay.style.transition = 'opacity 0.25s ease';
    document.body.appendChild(overlay);
  }

  function updateOverlayDisplay() {
    const isSmall = window.innerWidth < 1024;
    const isCollapsed = container.classList.contains('collapsed');
    if (isSmall && !isCollapsed) {
      overlay.style.display = 'block';
    } else {
      overlay.style.display = 'none';
    }
  }

  updateOverlayDisplay();

  overlay.onclick = () => {
    container.classList.add('collapsed');
    localStorage.setItem('bpsc_sidebar_state', 'collapsed');
    updateOverlayDisplay();
  };

  // Setup ScrollSpy using IntersectionObserver
  if (typeof IntersectionObserver !== 'undefined') {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -50% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          if (!id) return;
          const links = container.querySelectorAll('.sidebar-link');
          links.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${id}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    const hashLinks = container.querySelectorAll('.sidebar-link[href^="#"]');
    hashLinks.forEach(link => {
      const targetId = link.getAttribute('href').slice(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        observer.observe(targetEl);
      }
    });
  }

  window.addEventListener('resize', updateOverlayDisplay);
}

/* ── Translations ── */

function applyLanguageTranslations() {
  const lang = getLang();
  const t = (window.BPSCData && window.BPSCData.translations && window.BPSCData.translations[lang]) || {};
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.textContent = t[key];
  });
}

/* ── Footer ── */

function renderFooter() {
  const container = document.getElementById('footer-container');
  if (!container) return;

  const isHi = getLang() === 'HI';

  container.innerHTML = `
    <footer style="background: var(--bg-surface); border-top: 1px solid var(--border); color: var(--text-tertiary); padding: 2rem 0; margin-top: 4rem; font-size: 0.8rem;">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div class="flex items-center gap-3">
          <span style="color: var(--accent); font-weight: 800; font-size: 0.85rem;">BPSC 101</span>
          <span style="color: var(--text-tertiary);">•</span>
          <span>${isHi ? 'प्रीलिम्स एवं मेन्स तैयारी हब' : 'Prelims & Mains Preparation Hub'}</span>
        </div>
        <div class="flex items-center gap-3" style="color: var(--text-tertiary);">
          <a href="index.html" style="color: var(--text-secondary);" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color='var(--text-secondary)'">${isHi ? 'प्रारम्भिक' : 'Prelims'}</a>
          <span>•</span>
          <a href="mains.html" style="color: var(--text-secondary);" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color='var(--text-secondary)'">${isHi ? 'मुख्य' : 'Mains'}</a>
        </div>
      </div>
    </footer>
  `;
}

