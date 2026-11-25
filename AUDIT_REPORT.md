# MASTER ENGINEERING AUDIT & PRODUCTION CERTIFICATION REPORT
**Project:** Consent Is Not Synthetic (`web/` + `canonical_data/` → `web/out/`)  
**Audit Date:** 25 November 2026  
**Certification:** **CONDITIONALLY CERTIFIED** (0 unresolved P0/P1 defects; external live-URL reachability, Lighthouse field scores, and independent peer/legal review remain `UNVERIFIED` in this offline local environment).

---

## A. Executive Summary
- **Overall Result:** **120 / 120** Playwright route-viewport checks passed across all **20 routes** and **6 viewports** (`360×640`, `390×844`, `768×1024`, `1024×768`, `1440×900`, `1920×1080`) with **0** console errors, **0** runtime page errors, **0** failed network requests, and **0** horizontal overflows.
- **Initial Defects Found:** `2` (`1` P1, `1` P2).
- **Resolved Defects:** `2` (`100%` of discovered defects fixed and re-verified).
- **Remaining Unresolved Defects:** `0` P0/P1.
- **Unverified (Offline / External):** External live-URL reachability, production Vercel HTTP header delivery, Lighthouse field metrics, and independent academic/legal counsel reviews.

---

## B. Architecture & Component Audit
See `audit-results/component-audit.json` and `audit-results/repository-inventory.json`.
- **Routes:** `20` App Router page routes (`web/app/`) + `sitemap.ts`, `robots.ts`, `not-found.tsx` (`24` static routes prerendered).
- **Components:** `ui.tsx` (`Header`, `Footer`, `Eyebrow`, `Heading`, `Section`, `Source`, `Stat`, `ButtonLink`, `Note`, `Bars`, `Chain`, `SignupCard`), `Explorer.tsx` (`MetricExplorer`, `IncidentExplorer`, `SourceExplorer`, `Completeness`, `JurisdictionExplorer`, `CorrectionExplorer`, `Top50SnapshotExplorer`), `ModelAccessGate.tsx`.
- **Orphan / Internal Symbols:** `Mark` is used internally by `Header` and `Footer` in `ui.tsx`; `RestrictionBanner` in `ui.tsx` is an unused export (superseded by `ModelAccessGate`).
- **`interactions.js` Integration:** All 8 `data-*` selectors (`data-dropdown`, `data-menu`, `data-filter-root`, `data-search`, `data-select`, `data-chart-group`, `data-citation`, `data-copy`) verified in JSX and in browser execution.

---

## C. Route & Navigation Integrity
See `audit-results/route-audit.json`.
- All **20 routes** (`/`, `/impact/`, `/evidence/`, `/incidents/`, `/technology/`, `/model-governance/`, `/regulation/`, `/accountability/`, `/research/`, `/library/`, `/sources/`, `/transparency/`, `/methodology/`, `/about/`, `/corrections/`, `/take-action/`, `/action/`, `/models/`, `/press/`, `/support/`) returned **HTTP 200** across all 6 viewports.
- Header organizes navigation into the 4 groups (**Understand**, **Explore**, **Research**, **Act**) plus direct **Support** and **Take action** links.
- Aliases `/library/` and `/action/` resolve cleanly without runtime errors. `robots.ts` and `sitemap.ts` safely gate indexing on `NEXT_PUBLIC_SITE_URL`.

---

## D. Research & Citation Integrity
See `audit-results/citation-audit.json`.
- **Sources:** `76` sources in `web/lib/data.json`, all `76` synced into `web/public/interactions.js` (`CITATION_DATA`). `0` missing source IDs across `<Source id={...} />` references.
- **Policy Guardrails:**
  - `722`: `0` occurrences in `web/out/` outside `/corrections/`.
  - `53`-record inventory: Framed strictly as investigation metadata completeness.
  - India helplines: `1930` labeled strictly for financial cyber fraud; `112`, `1098`, `181` (subject to availability), and `cybercrime.gov.in` verified; `1091` withheld.
  - Legal status (`/regulation/`): Non-legal-review disclaimer present; Regulation (EU) 2026/1744, US TAKE IT DOWN Act, UK CPA 2026, India IT Rules 2026, and Canada Bill C-16 qualified as of 25 Nov 2026 cutoff (`UNVERIFIED` against live external parliamentary portals offline).

---

## E. Download & Asset Audit
See `audit-results/download-audit.json` and `audit-results/asset-audit.json`.
- **Downloads:** `25` files in `web/public/downloads/` (including all 8 PDFs: `v4-journal.pdf`, `v3-journal.pdf`, `v2-journal.pdf`, `v1-journal.pdf`, `public-evidence-brief.pdf`, `india-policy-brief.pdf`, `annotated-evidence.pdf`, `resource-directory.pdf`, plus CSV/JSON/MD deliverables). `Synthetic_Abuse_Research_V4.pdf` is retained as an unreferenced filename alias of `v4-journal.pdf`.
- **Assets:** `3` files in `web/public/assets/` (`hero.svg`, `mark.svg`, `social-card.png`), all referenced and present in `web/out/assets/`.
- **Broken Links in `web/out/`:** `0`.

---

## F. UI/UX & Accessibility
See `audit-results/responsive-audit.json`, `audit-results/accessibility-audit.json`, and `audit-results/screenshots/`.
- **Responsive:** `0` horizontal overflows (`scrollWidth <= innerWidth`), `0` unwrapped tables across all 120 checks.
- **Accessibility:** `h1Count === 1` on all 20 routes (including gated `/models/`), `hasHeader`, `hasMain`, `hasFooter`, `hasSkipLink` all `true`, `imgsNoAlt === 0`, mobile menu button height `44px`, Escape-dismissible citation modal verified. Screen-reader assistive-tech manual testing remains `UNVERIFIED`.

---

## G. Performance & Security
See `audit-results/performance-audit.json`, `audit-results/security-audit.json`, and `audit-results/npm-audit.json`.
- **Security:** `npm audit` exited `0` (0 vulnerabilities). `0` `.env` files, `0` `.xlsx` files, and `0` `.map` source maps in `web/out/`.
- **Performance:** Local `domContentLoaded` and `load` timings recorded in `performance-audit.json`; Lighthouse field scores remain `UNVERIFIED` offline.

---

## H. Repairs Executed
See `audit-results/repair-log.json`:
1. **`DEF-01` (P2) — `web/public/interactions.js`:** Embedded `CITATION_DATA` was out of sync with V4.1 updates in `web/lib/data.json`. Resynced all 76 sources and verified `citationModal` in Playwright.
2. **`DEF-02` (P1) — `web/components/ui.tsx` (`ButtonLink`):** `ButtonLink` used Next.js `<Link>` for `/downloads/...` files, causing `404` RSC prefetch requests (`/downloads/v4-journal.pdf/__next._tree.txt?_rsc=...`) on `/transparency/`. Fixed `ButtonLink` to render `<a href={href} download>` for `/downloads/` paths; re-verified `120/120` Playwright checks with `0` failed requests.

---

## I. Final Test Evidence
- `npm run typecheck`: exited `0` (0 TypeScript errors).
- `npm run build` (`next build && node postbuild.cjs`): exited `0` (`24/24` static routes prerendered).
- `python scripts/master_audit_phase1_to_5.py`: `0` missing sources, `0` missing asset targets, `0` `722` leaks.
- `python scripts/verify_build_isolation.py`: `23` HTML files, `13` JS files, `0` `.map`, `0` `.xlsx`, `0` missing download/asset links.
- `node scripts/master_playwright_audit.cjs`: **`120/120` route-viewport checks passed**; functional matrix (`citationModal`, `evidenceTabsAndFilter`, `modelsGateAndTop50`, `mobileDrawer`) all passed.
- `python scripts/build_v41_release_packages.py`: All 7 `CINS_*.zip` archives rebuilt and SHA-256 verified.

---

## J. Release Certification
**CONDITIONALLY CERTIFIED** — Zero unresolved P0/P1 defects remain in the local production build (`web/out/`). External live-URL reachability, production HTTP header checks, Lighthouse field scores, screen-reader manual testing, and independent academic/legal reviews remain `UNVERIFIED` until owner-authorized deployment and external review.
