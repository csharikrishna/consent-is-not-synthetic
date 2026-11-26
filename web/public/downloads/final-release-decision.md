# FINAL RELEASE DECISION — CONSENT IS NOT SYNTHETIC

**Date:** 2026-11-26
**Release Status:** **PASS (Static Production Build & Live Deployment)**
**Production Deployment URL:** `https://csharikrishna.github.io/consent-is-not-synthetic/` (`NEXT_PUBLIC_SITE_URL` configured in GitHub Actions)

---

## 1. Release Gate Matrix

| Gate | Status | Evidence |
|---|---|---|
| TypeScript & Next.js Static Export | **PASS** | `tsc --noEmit` + `next build` (`24` HTML, `14` JS, `.nojekyll`, RSC aliases) |
| Fail-Closed Deliverable Isolation | **PASS** | `205/205` deliverables scanned (`audit-results/deliverable-scan.json`); `0` leaks; `0` read errors |
| Canonical Source Register Sync | **PASS** | `77` sources (`67` verified, `10` pending URL verification); `0` missing in `interactions.js` |
| Route & Viewport Matrix | **PASS** | `126/126` checks passed (`21` routes × `6` viewports) in `audit-results/route-audit.json` |
| Automated Accessibility (axe-core) | **PASS** | `axe-core` 0 rule violations across `21` desktop routes, mobile viewport (390px), and interactive states (modal, explorer, drawer) |
| Screen-Reader & Manual UX | **PARTIAL** | Automated rules & keyboard tab/escape passed; full manual assistive tech evaluation partial |
| Qualified Legal & Academic Peer Review | **PENDING** | Independent qualified Indian/UK/US technology law review & formal academic peer review pending |

---

## 2. Key Remediations & Statutory Alignments

- **Stale Offline Preview Eliminated & Git Policy:** The obsolete `web/offline-preview/` directory was permanently deleted from the active tree. Pre-deletion commits remain in the repository commit DAG as an immutable chronological audit trail documenting what was changed and when the purge occurred.
- **Fail-Closed Axe Accessibility Gate:** `scripts/master_playwright_audit.cjs` requires `axe-core` and fails closed on any violation across desktop (1440px), mobile (390px), and interactive dialog/drawer/explorer states (achieving 0 violations).
- **Asset Loading & Prefixing Verified:** Full resolution of visual illustrations (`/assets/hero.svg`, `/assets/mark.svg`, `/assets/social-card.png`) and downloadable assets verified live on GitHub Pages with HTTP 200 via `basePath` prefixing.
- **Model Governance Scoping:** Section 4 of `/models/` updated to reflect investigation completeness gaps and publisher verification priorities.
- **Top-50 Provenance Reproducibility:** Versioned source snapshot committed at `research/snapshots/huggingface_top50_nsfw_models_snapshot.md` with dynamic SHA-256 validation and date-level precision (`2026-11-25`).
- **India Statutory Precision:** Distinct triggers maintained: `Rule 3(2)(b)` (2-hour intimate image complaint response) and `Rule 3(1)(d)` (3-hour actual knowledge order removal), distinguished from `IT Act Section 79` safe harbour and `BNS Section 79` criminal offences.
- **United Kingdom & United States Timelines:** Crime and Policing Act 2026 ss. 99–101 commencement (`29 June 2026`, S.I. 2026/689) and TAKE IT DOWN Act Section 3 enforcement (`19 May 2026`) accurately specified.
