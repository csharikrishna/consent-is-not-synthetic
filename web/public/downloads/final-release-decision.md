# FINAL RELEASE DECISION — CONSENT IS NOT SYNTHETIC

**Date:** 2026-11-26
**Release Status:** **PASS (Static Production Build & Live Deployment)**
**Production Deployment URL:** `https://csharikrishna.github.io/consent-is-not-synthetic/` (`NEXT_PUBLIC_SITE_URL` configured in `.github/workflows/deploy-pages.yml`)

---

## 1. Release Gate Matrix

| Gate | Status | Evidence |
|---|---|---|
| TypeScript & Next.js Static Export | **PASS** | `tsc --noEmit` + `next build` (`24` HTML, `14` JS, `.nojekyll`, RSC aliases) |
| Deliverable Isolation & Claim Gate | **PASS** | `205` deliverables scanned (HTML, JS, JSON, CSV, MD, PDF) in `audit-results/deliverable-scan.json`; `0` leaks |
| Canonical Source Register Sync | **PASS** | `77` sources (`67` verified, `10` pending URL verification); `0` missing in `interactions.js` |
| Route & Viewport Matrix | **PASS** | `126/126` checks passed (`21` routes × `6` viewports) in `audit-results/route-audit.json` |
| Interactive Controls | **PASS** | Dropdowns, citation modal, evidence tabs/filters, Top-50 explorer, mobile drawer verified |
| Accessibility Verification | **PARTIAL** | DOM landmarks, skip link, image `alt`, table wrappers, and `Escape` keys verified; full `axe-core` audit pending |
| Qualified Legal & Peer Review | **PENDING** | Informational research release; external qualified Indian/UK/US legal review & academic peer review remain pending |

---

## 2. Statutory & Provenance Clarifications

- **India IT Rules 2021 (2026 Amendments):** Distinct triggers: `Rule 3(2)(b)` (2-hour reasonable and practicable measures on qualifying intimate-image complaints) and `Rule 3(1)(d)` (3-hour removal on qualifying court/government actual-knowledge orders). Distinct from `IT Act Section 79` (intermediary safe harbour) and `BNS Section 79` (criminal offence).
- **United Kingdom:** Crime and Policing Act 2026 ss. 99–101 commenced `29 June 2026` via S.I. 2026/689.
- **United States:** TAKE IT DOWN Act Section 3 FTC enforcement began `19 May 2026` (48-hour covered-platform removal window).
- **50-Listing HF Snapshot vs. 53-Record Desk Inventory:** Both are explicitly distinguished; `top50-hf-metadata-snapshot.json` publishes public repository IDs, `sort=likes` ranks, and reference URLs under Option B metadata-only governance disclosure, while weights/mirrors/prompts remain excluded.
