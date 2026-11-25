# MASTER PRODUCTION & RESEARCH INTEGRITY AUDIT REPORT

**Project:** Consent Is Not Synthetic
**Repository:** `https://github.com/csharikrishna/consent-is-not-synthetic`
**Target Build:** Static Next.js 16.4.6 Export (`web/out/`)
**Audit Execution Date:** 2026-11-26 (Re-audit & Remediation Baseline)

---

## 1. Executive Summary & Overall Status

| Phase | Scope | Result | Notes |
|---|---|---|---|
| **TypeScript & Build** | `tsc --noEmit` + `next build` + `postbuild.cjs` | **PASS** | `24` HTML files, `14` JS files, `0` source maps, `.nojekyll` + RSC payload aliases generated |
| **Deliverable Isolation & Claim Gate** | `scripts/verify_build_isolation.py` | **PASS** | `205` deliverables scanned (`.html`, `.js`, `.json`, `.csv`, `.md`, `.pdf`); `0` leaks of withdrawn `722`, `68%`, withheld `UNICEF-04` wording, conflated `Section 79 takedown notice`, `2–3 hrs`, or contradictory `withheld from public display` |
| **Canonical Data & Citation Sync** | `scripts/master_audit_phase1_to_5.py` | **PASS** | `77` canonical sources (`67` verified, `10` pending URL verification); `0` missing sources; `0` sources missing from `web/public/interactions.js` |
| **Route & Viewport Rendering** | `21` routes × `6` viewports (`360px`–`1920px`) | **PASS (126/126)** | HTTP 200, `h1Count === 1`, `0` console/page/network errors, `0` horizontal overflow, `0` unwrapped tables |
| **Interactive Functional Matrix** | Header dropdowns, citation modal, evidence tabs/filters, Top-50 explorer, mobile drawer | **PASS** | All interactive controls verified in Chromium (`master_playwright_audit.cjs`) |
| **Accessibility (Automated WCAG)** | Structural DOM checks vs full axe-core | **PARTIAL** | Landmarks, skip link, `alt` attributes, wrapped tables, and `Escape` dismissal verified; full automated `axe-core` contrast/ARIA audit not yet executed |

---

## 2. Verified Route Inventory (21 Routes)

1. `/`
2. `/impact/`
3. `/evidence/`
4. `/incidents/`
5. `/technology/`
6. `/model-governance/`
7. `/open-weights/`
8. `/regulation/`
9. `/accountability/`
10. `/research/`
11. `/library/`
12. `/sources/`
13. `/transparency/`
14. `/methodology/`
15. `/about/`
16. `/corrections/`
17. `/take-action/`
18. `/action/`
19. `/models/`
20. `/press/`
21. `/support/`

---

## 3. Remediation Summary (P1 & P2 Backlog)

- **P1-01 (Withdrawn 68% LoRA Claim):** Removed from `regulatory_submissions/01_MeitY_India_Submission.md`, `04_Platform_Trust_and_Safety_Brief.md`, and `web/public/downloads/platform-trust-safety-brief.md`; replaced with the scoped 50-listing observation (`20 of 50` LoRA/adapters + `3` ambiguous/secondary).
- **P1-02 (Withheld UNICEF-04 Claim):** Marked `publication_eligible: false` in `citation-audit.json` / `citation-audit.csv` and redacted causal wording in `claim-verification-final.csv`.
- **P1-03 (India Legal Distinctions):** Separated `BNS Section 79` (criminal offence), `IT Act Section 79` (intermediary safe harbour), and `IT Rules Rule 3(2)(b)` / `Rule 3(1)(d)` across regulatory submissions, press materials, and `/support/`.
- **P1-04 / P2-03 / P2-04 / P2-07 (Model Governance Consistency):** Standardized on Option B metadata disclosure across `/models/` and `top50-hf-metadata-snapshot.json` with capture timestamp (`2026-11-25T00:00:00Z` UTC), query, sort, SHA-256 checksum, explicit `(year not displayed)` / `Not displayed` / `Unknown` labels, and explicit 53-record row-level non-reproducibility notice.
- **P1-05 (Accountability Claims):** Qualified `/accountability/` repository statements to reflect incomplete desk-review collection rather than unverified platform-wide absences.
- **P1-06 (Deliverable Verification):** Extended `scripts/verify_build_isolation.py` to scan all `.html`, `.js`, `.json`, `.csv`, `.md`, and `.pdf` deliverables and emit `audit-results/deliverable-scan.json`.
- **P1-07 / P2-01 / P2-02 / P2-08 / P2-09 (Audit Sync & Legal Precision):** Removed stale `web/QA_REPORT.txt`, updated `security-audit.json` word-boundary checks, synchronized `77` source counts (`67` verified, `10` pending), replaced `"2–3 hrs"` on `/regulation/` with a 2-row Rule `3(2)(b)` / `3(1)(d)` table, and documented UK Crime and Policing Act 2026 ss. 99–101 commencement (`29 June 2026`, S.I. 2026/689).

---

## 4. Machine-Readable Evidence Artifacts

- `audit-results/repository-inventory.json`
- `audit-results/deliverable-scan.json`
- `audit-results/citation-audit.json`
- `audit-results/download-audit.json`
- `audit-results/asset-audit.json`
- `audit-results/security-audit.json`
- `audit-results/route-audit.json`
- `audit-results/playwright-results.json`
