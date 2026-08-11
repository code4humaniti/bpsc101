# 0002: Minimalist 2-Page Portal Architecture & Single-Source Resource Strategy

## Context & Decision
Based on user feedback, aspirants find multi-page navigation and visual chart plots redundant when the tabular data provides exact numbers cleanly. Furthermore, long lists of 10+ book recommendations create cognitive overload. 

We decided to rebuild the portal into a clean, minimal 2-page architecture:
1. `index.html` (or `prelims.html`): Prelims Command Center
2. `mains.html`: Mains Command Center

## Key Changes & Trade-offs
- **Removed Visual Plots**: Eliminated Chart.js canvas plots in favor of clean, responsive HTML data tables containing exact category-wise cutoffs (including EWS Male & Female).
- **Single-Source Hyper-Focused Resources**: Replaced expansive booklists with 1-2 authoritative resources per subject aimed at helping candidates score >80% with minimal clutter.
- **Native Dual-Language (Bilingual)**: Built native Devanagari Hindi and English side-by-side display into every section.
