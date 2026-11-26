# MASTER PRODUCTION & RESEARCH INTEGRITY AUDIT REPORT

**Project:** Consent Is Not Synthetic  
**Repository:** `https://github.com/csharikrishna/consent-is-not-synthetic`  
**Target Build:** Static Next.js 16.4.6 Export (`web/out/`)  
**Audit Execution Date:** 2026-11-26 (V4.1 Final Release Freeze Baseline)  
**Research Cutoff Date:** 25 November 2026  

---

## 1. Executive Summary & Quality Gates

| Quality Gate | Status | Evidence & Audit Tooling |
|---|---|---|
| **TypeScript & Next.js Build** | **PASS** | `tsc --noEmit` + `next build` + `postbuild.cjs` (`24` HTML, `14` JS, `0` maps, `.nojekyll`, RSC aliases) |
| **Fail-Closed Deliverable Isolation** | **PASS** | `scripts/verify_build_isolation.py` scanned `205/205` deliverables (HTML, JS, JSON, CSV, MD, PDF); `0` leaks; `0` read errors; `12` non-text assets skipped with explicit documented reasons |
| **Canonical Source Sync** | **PASS** | `scripts/master_audit_phase1_to_5.py`: `77` sources (`68` primary checked/supported, `9` pending verification); `0` missing sources in code or `interactions.js` |
| **Route & Viewport Matrix** | **PASS (126/126)** | `21` routes × `6` viewports (`360px`–`1920px`) with HTTP 200, `h1Count === 1`, `0` console/page/network errors, `0` unwrapped tables |
| **Automated WCAG 2.1 AA (axe-core)** | **PASS** | `axe-core` evaluated across `21` desktop routes (1440px), mobile viewport (390px), and interactive states (citation modal, models gate & explorer, mobile drawer): **0 violations** (contrast, ARIA attributes, form labels, landmarks, focus) |
| **Screen-Reader & Manual UX** | **PARTIAL** | Automated accessibility gates and keyboard navigation (`Tab` skip-link, `Escape` dismissal) passed; end-to-end assistive-technology user testing remains partial |
| **Download Target Audit** | **PASS** | `0` missing targets across all application routes and deliverables; `0` orphan downloadable files |
| **Qualified Legal & Peer Review** | **PENDING** | Independent qualified Indian/UK/US technology law review and formal academic journal peer review remain pending |

---

## 2. V4.1 Final Corrections Implemented (Corrections A–J)

1. **[Correction A] India Survivor Reporting Guidance (`web/app/support/page.tsx`):**
   - Corrected blanket anonymous reporting claims to accurately specify that anonymous complaints on the National Cyber Crime Reporting Portal (`cybercrime.gov.in`) are available only for specified cybercrime categories, providing the direct FAQ link (`https://www.cybercrime.gov.in/webform/FAQ.aspx`).
   - Distinctly explained the intermediary takedown obligation under Rule 3(2)(b) of the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021 (requiring intermediaries to act within 2 hours of receiving a complaint from the victim or person authorized) versus filing a police first information report (FIR).
   - Added official MeitY advisory reference URL (`https://www.meity.gov.in/static/uploads/2026/02/49d4c4b42fc2d3dce00e0fdcf7ed1389.pdf`).
   - Preserved distinct statutory triggers: Rule 3(2)(b) (2 hours for non-consensual intimate imagery complaints) vs Rule 3(1)(d) (3 hours for unlawful content upon actual knowledge via court order or authorized government notification).

2. **[Correction B] Canada Bill C-16 Commencement (`UNRESOLVED_EVIDENCE_REGISTER.md`, canonical data):**
   - Resolved item `UNRES-06` in the unresolved evidence register.
   - Verified statutory history: Bill C-16 (44th Parliament, 1st Session) received Royal Assent on 18 June 2026 (S.C. 2026, c. 19).
   - Recorded general commencement under s. 205(1) on 18 July 2026 (the 30th day after Royal Assent), amending Criminal Code s. 162.1.
   - Inserted official Department of Justice / Laws-Lois statutory URL (`https://laws-lois.justice.gc.ca/eng/AnnualStatutes/2026_19/FullText.html`) and synchronized `scripts/build_v4_pdf.js`.

3. **[Correction C] UNICEF Innocenti Source 77 Verification:**
   - Conducted live retrieval of the full primary publication (*Through Children's Eyes: Technology-Facilitated Sexual Exploitation and Abuse*, UNICEF Innocenti, 2026, 16.8 MB) at `https://www.unicef.org/belize/media/10601/file/UNICEF-Innocenti-Through-Children%27s-Eyes-report-2026.pdf` (HTTP 200).
   - Updated Source 77 status to "Primary source checked" / "Primary evidence supported" across `canonical_data/sources.json`, `canonical_data/claims.json`, `scripts/reconcile_canonical_db.py`, `scripts/generate_citation_audit.py`, and public download registers.

4. **[Correction D] 53-Record Model Inventory Desk-Audit Provenance:**
   - Clarified provenance of claim `INV-53` in `canonical_data/claims.json`: set `source_id: None` to reflect that it is an internal research artefact (Phase 1 technical inventory workbook, records M001–M053) rather than a third-party publication.
   - Standardized public phrasing across `/accountability/`, `/models/`, `/evidence/`, `/methodology/`, `/open-weights/`, and `/` to: *"a 53-record desk audit of public listings on community model hubs (records M001–M053; see Methodology)"*.

5. **[Correction E] CHI 2024 Sample-Size Alignment:**
   - Removed unverified exact participant count ("16,145") from `canonical_data/sources.json` (Source 65), `canonical_data/claims.json` (`CHI-01`), `scripts/reconcile_canonical_db.py`, `scripts/generate_citation_audit.py`, `web/app/page.tsx`, `web/app/evidence/page.tsx`, `web/app/methodology/page.tsx`, and `web/components/charts.tsx`.
   - Replaced with approved text: *"In a ten-country survey (Umbach et al., CHI 2024), approximately 2.2% of respondents self-reported victimization and 1.8% self-reported perpetration."*

6. **[Correction F] Axe-Core Gate Hardening & Accessibility Disclosure:**
   - Hardened `scripts/master_playwright_audit.cjs` with explicit fail-closed exceptions for `axeSummary.totalViolations > 0`, mobile drawer state, citation modal state, and skip link focus.
   - Replaced README badge with: `[![Accessibility](https://img.shields.io/badge/Accessibility-Automated%20axe%20scan%3A%200%20violations-brightgreen)](audit-results/accessibility-audit.json)` accompanied by explicit scope disclosures.

7. **[Correction G] Dual-Licensing Disclosure:**
   - Replaced standalone CC BY badge in `README.md` with explicit dual-licensing text: *"Text and analysis are licensed under Creative Commons Attribution 4.0 International (CC BY 4.0). Code and validation scripts are licensed under the MIT License."*

8. **[Correction H] Historical Audit Workspace Marking:**
   - Added explicit historical snapshot disclosure at the top of `FINAL_WORKSPACE_AUDIT.md`.

9. **[Correction I] Download Audit Regex Hardening:**
   - Updated filename extraction regex in `scripts/master_audit_phase1_to_5.py` to prevent capturing JSX inline code tags, resulting in `0` missing targets and `0` orphan files.

10. **[Correction J] Release Archive Manifest Status:**
    - Updated `RELEASE_MANIFEST.json` to `"release_status": "PENDING_ARTIFACT_PUBLICATION"`, clarifying archive creation upon GitHub tag push.

---

## 3. Verified Route Inventory (21 Routes)

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
