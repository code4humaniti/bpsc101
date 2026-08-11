# 0001: Zero-Backend Static Web Architecture

## Context & Decision
We are building a BPSC 5-Year Analytics & Preparation Portal for civil service aspirants. To ensure zero operational maintenance costs, maximum performance, and simple deployment on free static hosting services (GitHub Pages, Vercel, Netlify), we decided to build the portal as a zero-backend static web application using HTML5, Tailwind CSS, Vanilla JavaScript, and Chart.js.

## Rationale & Trade-offs
- **Pros**: Blazing fast load times, zero server infrastructure or database maintenance, free hosting, and high security.
- **Cons**: All dataset schemas (Subject Weightage, Cutoff Trends, PYQs) must be embedded in static JSON/JS structures; dynamic user data (e.g. user bookmarks or custom test tracking) requires browser `localStorage` rather than server accounts.
