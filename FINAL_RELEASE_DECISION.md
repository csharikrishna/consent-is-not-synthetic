# FINAL RELEASE DECISION — CONSENT IS NOT SYNTHETIC

**Project:** Consent Is Not Synthetic  
**Repository:** `https://github.com/csharikrishna/consent-is-not-synthetic`  
**Date:** 2026-11-26  
**Release Status:** **FINAL RELEASE PASS (V4.1 Release Freeze Baseline)**  
**Production Deployment URL:** `https://csharikrishna.github.io/consent-is-not-synthetic/`  
**Research Cutoff Date:** 25 November 2026  

---

## 1. Release Gate Matrix

| Gate | Status | Evidence & Metrics |
|---|---|---|
| **TypeScript & Static Export** | **PASS** | `tsc --noEmit` clean; Next.js 16.4.6 static export (`24` HTML, `14` JS, `.nojekyll`, RSC aliases) |
| **Fail-Closed Deliverable Isolation** | **PASS** | `205/205` deliverables scanned (`audit-results/deliverable-scan.json`); `0` leaks; `0` read errors; `12` non-text assets skipped with documented rationale |
| **Canonical Source Sync** | **PASS** | `77` sources (`68` primary verified/supported, `9` pending URL verification); `0` missing in `interactions.js` |
| **Route & Viewport Matrix** | **PASS (126/126)** | `21` routes × `6` viewports (`360px`–`1920px`) with HTTP 200, `h1Count === 1`, `0` console/page/network errors |
| **Automated Accessibility (axe-core)** | **PASS** | `0` axe-core rule violations across `21` desktop routes (1440px), mobile viewport (390px), and `3` interactive states (citation modal, models gate & explorer, mobile drawer) |
| **Download Target Audit** | **PASS** | `0` missing targets across all application routes; `0` orphan downloadable files |
| **Screen-Reader & Manual UX** | **PARTIAL** | Automated rules & keyboard tab/escape passed; full manual assistive tech evaluation partial |
| **Qualified Legal & Peer Review** | **PENDING** | Independent qualified Indian/UK/US technology law review & formal academic peer review pending |

---

## 2. Implemented V4.1 Final Corrections (Corrections A–J)

1. **India Survivor Reporting Guidance:** Corrected `/support/` to clarify that anonymous reporting on `cybercrime.gov.in` is limited to specified categories (FAQ link: `https://www.cybercrime.gov.in/webform/FAQ.aspx`). Distinctly separated Rule 3(2)(b) 2-hour reasonable/practicable intermediary removal obligations from police FIR filing, citing the official MeitY advisory (`https://www.meity.gov.in/static/uploads/2026/02/49d4c4b42fc2d3dce00e0fdcf7ed1389.pdf`). Maintained distinct Rule 3(2)(b) (2 hours) and Rule 3(1)(d) (3 hours) statutory triggers.
2. **Canada Bill C-16 Commencement:** Resolved `UNRES-06` in the unresolved evidence register. Verified Royal Assent on 18 June 2026 (S.C. 2026, c. 19), with general commencement under s. 205(1) on 18 July 2026 (30th day after Royal Assent) amending Criminal Code s. 162.1. Updated canonical datasets, `scripts/build_v4_pdf.js`, and inserted official Department of Justice / Laws-Lois statutory URL (`https://laws-lois.justice.gc.ca/eng/AnnualStatutes/2026_19/FullText.html`).
3. **UNICEF Innocenti Source 77 Verification:** Primary source verified via live retrieval of the full PDF (16.8 MB) at `https://www.unicef.org/belize/media/10601/file/UNICEF-Innocenti-Through-Children%27s-Eyes-report-2026.pdf` (HTTP 200). Updated status to "Primary source checked" / "Primary evidence supported" across all registers.
4. **53-Record Model Inventory Provenance:** Disassociated `INV-53` from Source 10 (`source_id: None`), establishing its provenance as an internal research artefact (Phase 1 technical inventory workbook, records M001–M053). Standardized public wording across `/accountability/`, `/models/`, `/evidence/`, `/methodology/`, `/open-weights/`, and `/`.
5. **CHI 2024 Sample-Size Alignment:** Removed unconfirmed exact figure "16,145" from `canonical_data/sources.json` (Source 65), `canonical_data/claims.json` (`CHI-01`), scripts, and website pages. Standardized on approved wording: *"In a ten-country survey (Umbach et al., CHI 2024), approximately 2.2% of respondents self-reported victimization and 1.8% self-reported perpetration."*
6. **Axe-Core Fail-Closed Gate & Accessibility Scope:** Hardened `scripts/master_playwright_audit.cjs` with explicit fail-closed exceptions for `axeSummary.totalViolations > 0`, mobile drawer state, citation modal state, and skip link focus. Updated README badge to reflect automated scan results (0 violations) with explicit disclosure that automated testing does not constitute manual user testing with assistive technology.
7. **Dual-Licensing Consistency:** Removed standalone CC BY 4.0 badge from README and clarified dual-licensing: Creative Commons Attribution 4.0 International (CC BY 4.0) for research text and analysis; MIT License for code and validation scripts.
8. **Historical Audit Workspace Notice:** Added explicit historical snapshot disclosure at the top of `FINAL_WORKSPACE_AUDIT.md`.
9. **Download Audit Regex Hardening:** Hardened filename regex in `scripts/master_audit_phase1_to_5.py` to prevent capturing inline JSX tags, achieving 0 missing download targets.
10. **Release Manifest Pending Status:** Updated `RELEASE_MANIFEST.json` and `CHECKSUMS_RELEASE.txt` to reflect `"release_status": "PENDING_ARTIFACT_PUBLICATION"`, noting tarball and zip archives are generated upon Git release tag creation.

---

## 3. Final Release Decision

**Verdict: FINAL RELEASE PASS**

All required corrections (A–J) have been implemented, canonical data sources synchronized, build isolation verified across 205 deliverables, automated accessibility verified with 0 axe violations, and the static site successfully built and ready for deployment.
