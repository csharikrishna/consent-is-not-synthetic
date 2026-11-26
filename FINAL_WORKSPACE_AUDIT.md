# FINAL WORKSPACE AUDIT — Consent Is Not Synthetic (V4.1)

> **Historical audit snapshot.** This document records an earlier investigation state and is superseded by the final V4.1 release audit and its associated verification reports. Historical findings should not be interpreted as the current production state.

**Audit Date:** 25 November 2026  
**Research Cutoff:** 25 November 2026  
**Status:** Verified Local Inventory & Gap Assessment

---

## 1. Confirmed Local Counts (Verified on Disk)

| Category | Previously Reported | Confirmed Local Count | Primary Location |
|---|---:|---:|---|
| Next.js App Routes | 17–24 | **20** page routes (+ `sitemap.ts`, `robots.ts`, `not-found.tsx`) | `web/app/` |
| Technical Model Inventory | 53 | **53** records (`M001`–`M053`, 54 rows incl. header) | `research/original-deliverables/Phase_1_Image_Model_Inventory.xlsx` |
| Metadata Completeness Rows | 16 | **16** fields | `web/lib/data.json` (`completeness`) |
| Bibliographic Sources | 76 | **76** sources | `web/lib/data.json` (`sources`) |
| Documented Incidents | 10 | **10** records (`I01`–`I10`) | `web/lib/data.json` (`incidents`), `incident-register.csv` |
| Quantitative Metrics | 14 | **14** metrics (`M01`–`M14`) | `web/lib/data.json` (`metrics`) |
| Claim-to-Action Controls | 6 | **6** controls (`C01`–`C06`) | `web/lib/data.json` (`controls`) |
| Jurisdictions Analyzed | 8 | **8** regimes | `web/lib/data.json` (`jurisdictions`) |
| Headline Claims Audited | 15 | **15** rows (`CLM-001`–`CLM-015`) | `CLAIM_VERIFICATION_FINAL.csv` |
| Regulatory Submissions | 5 | **5** briefs | `regulatory_submissions/` |
| Public Downloads | 18 | **19** files in `web/public/downloads/` | `web/public/downloads/` |

---

## 2. Classification of Workspace Materials

### A. Current / Active Production & V4.1 Targets
- `web/` — Next.js 16 + React 19 + TypeScript + Tailwind v4 static export application (`output: 'export'`, `trailingSlash: true`).
- `research/working-history/research_v4/` — V4 master LaTeX manuscript (`journal.tex`) and compiled PDF (`v4-journal.pdf`), to be updated to **V4.1** while preserving V1–V3 untouched.
- `regulatory_submissions/` — 5 audience-tailored submissions (`01_MeitY_India_Submission.md` through `05_Child_Protection_NGO_Protocol.md`).
- `scripts/` — Build, PDF generation (`build_v4_pdf.js`), and Playwright QA (`run_browser_qa.cjs`).
- Media/Press briefs in root: `EXECUTIVE_SUMMARY_2PAGE.md`, `FACT_SHEET_1PAGE.md`, `MEDIA_BACKGROUNDER.md`.

### B. Historical / Preserved Without Modification
- `research/original-deliverables/` — Original V1, V2, V3 PDFs, LaTeX packages, `Phase_1_Image_Model_Inventory.xlsx`, `Research_Source_Ledger.csv`.
- `research/working-history/journal_source/` (V1), `revision_v2/` (V2), `research_v3/` (V3).
- `Complete_Research_Archive_V1_V2/`

### C. Superseded / Redundant Legacy Artifacts
- Multiple legacy ZIP archives in workspace root (`Consent_Is_Not_Synthetic_Website.zip`, `Website_V2.zip`, `Website_V3.zip`, `Public_Release.zip`, `MASTER_V2.zip`, `All_Research.zip`, `Release_Package_*.zip`, etc.) superseded by the 7 canonical V4.1 release packages.
- Earlier phase audit reports (`PHASE_2_BASELINE.md`, `IMPLEMENTATION_PLAN.md`, `PUBLIC_RELEASE_READINESS.md`, `QA_REPORT.txt`) superseded by V4.1 governance documents and `FINAL_RELEASE_DECISION.md`.

### D. Private / Non-Public Materials (Must Not Be Deployed Publicly)
- `research/original-deliverables/Phase_1_Image_Model_Inventory.xlsx` (contains raw repository URLs/handles; must remain in private research archive only, NOT in `web/public/`).
- `research/original-deliverables/Pasted text.txt` and raw working notes.
- `CINS_FINAL_MASTER_ARCHIVE.zip` and `CINS_PRIVATE_RESEARCH_ARCHIVE.zip`.

---

## 3. Critical Evidence & Implementation Gaps Identified for V4.1 Correction

1. **Fabricated/Mismatched Rows in `CLAIM_VERIFICATION_FINAL.csv`:**
   - `CLM-005` erroneously reported `3,443 videos in 2024 vs 52 in 2023 (6521% increase)`. Canonical IWF 2025 figure is **13 videos (2024) → 3,443 videos (2025)** (~264.85×), and **193 reports (2024) → 491 reports (2025)** (+154.4%).
   - `CLM-007` erroneously described Ofcom's `66.35%` as `"adult content on Reddit"`. Canonical Ofcom finding is **69 of 104 (66.35%) reviewed risk-assessment records lacked a named responsible person** (printed p. 18), a general online-safety governance metric, not AI-specific.
   - `CLM-009` erroneously described Umbach et al. (CHI 2024) as `"N=1421 high school students, United States"`. Canonical figure is **2.2% victimization, 1.8% perpetration across a 10-country survey (>16,000 respondents)**.
   - `CLM-006` listed ISD traffic across `"12 targeted platforms"`; canonical ISD scope is **31 selected abuse-enabling services (May 2025)** totaling **20.7 million estimated monthly visits**.
2. **722-Model Exploratory Count Leakage:**
   - The `722` Hugging Face search query count still appears in `web/app/page.tsx`, `web/app/models/page.tsx`, `web/app/accountability/page.tsx`, `web/app/methodology/page.tsx`, `web/app/research/page.tsx`, `web/app/transparency/page.tsx`, `web/components/ui.tsx`, `web/lib/content.ts`, `CLAIM_VERIFICATION_FINAL.csv`, `04_Platform_Trust_and_Safety_Brief.md`, and `journal.tex`. Must be **withdrawn** from all public findings, SEO descriptions, charts, and policy briefs, and retained **only** in the corrections register.
3. **53-Record Technical Inventory Overclaiming:**
   - Claims stating `"0% of publishers conducted safety evaluations"` or `"100% lacked safety evaluation cards"` appear across `/models/`, `/evidence/`, `/page.tsx`, `ModelAccessGate.tsx`, and submissions. Must be replaced with the exact V4.1 framing: *metadata collection gaps describe investigation completeness and require publisher-level verification; they do not establish absence of documentation or unsafe model behaviour*.
4. **India Helpline `1930` Misrouting & `1091` Inclusion:**
   - `web/app/about/page.tsx` (Hindi & Telugu blocks) and `web/app/take-action/page.tsx` still list `1930` alongside emergency/deepfake reporting. `1930` is strictly financial cyber fraud. `web/app/support/page.tsx` lists `1091`, which V4.1 directs to withhold unless applicability is established.
5. **Broken Download Link & Stale Version References:**
   - `web/app/press/page.tsx` links to `/downloads/source-ledger.csv` (does not exist; actual file is `public-source-register.csv`) and references V3 instead of V4.1.
6. **Regulatory Baseline Updates Required:**
   - EU: Add **Regulation (EU) 2026/1744** (adopted 8 July 2026, published 24 July 2026, relevant prohibitions applicable 2 Dec 2026 — enacted but not yet applicable as of 25 Nov 2026 cutoff; Art. 1(7), printed p. 18).
   - UK: Clarify **Crime and Policing Act 2026** uncommenced provisions are not yet enforceable.
   - Canada: **Protecting Victims Act** (Royal Assent 18 June 2026) — mark commencement/provisions pending confirmation unless verified.
   - Add explicit legal disclaimer: *“This regulatory comparison is informational research and has not undergone independent qualified legal review.”*
7. **Navigation Structure:**
   - `web/components/ui.tsx` currently uses 3 dropdowns (`Evidence`, `Policy & Tech`, `Research & Data`) + `About` + `Take action`. V4.1 Section 11 specifies 4 logical groups: **Understand**, **Explore**, **Research**, **Act**.
8. **Single Source of Truth Consolidation:**
   - Canonical JSON datasets (`claims.json`, `sources.json`, `incidents.json`, `regulations.json`, `recommendations.json`, `publications.json`, `corrections.json`, `support-resources.json`, `external-developments.json`, `initiative-impact.json`) need to be unified with automated schema validation so all charts, CSVs, briefs, and pages derive from one source.
