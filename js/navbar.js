/**
 * BPSC 101 — Shared Navigation
 * Adaptive navbar, theme toggle (sun/moon icon), language toggle, footer.
 * Uses CSS custom properties — no hardcoded colors.
 */

document.addEventListener('DOMContentLoaded', () => {
  applyThemeOnLoad();
  renderNavbar();
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

  const activeStyle = 'background: var(--bg-pill-active); color: var(--text-pill-active); border-radius: 0.375rem; padding: 0.375rem 0.75rem; font-size: 0.8125rem; font-weight: 600;';
  const inactiveStyle = 'background: transparent; color: var(--text-secondary); border-radius: 0.375rem; padding: 0.375rem 0.75rem; font-size: 0.8125rem; font-weight: 500; transition: color 0.15s;';

  container.innerHTML = `
    <nav style="background: var(--bg-nav); border-bottom: 1px solid var(--border); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);" class="sticky top-0 z-50">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between" style="height: 3.25rem;">

        <!-- Logo -->
        <a href="index.html" class="flex items-center gap-1.5" style="text-decoration: none;">
          <span style="color: var(--accent); font-weight: 900; font-size: 1.05rem; letter-spacing: -0.02em;">BPSC 101</span>
        </a>

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
