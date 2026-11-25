# PHASE 2 BASELINE AUDIT
## Consent Is Not Synthetic — Production Readiness, Research Integrity & Quality Review

**Document Version:** 2.0.0  
**Audit Date:** 25 November 2026  
**Auditor:** Lead Systems Architect & Research Data Reviewer  
**Status:** Baseline Established — Active Remediation in Progress  

---

## 1. Executive Summary & Verification Context

Following the completion of the Phase 1 static export and foundational research mapping, this comprehensive audit establishes the exact operational, evidentiary, visual, and security baseline of the **Consent Is Not Synthetic** platform prior to initiating Phase 2 transformations.

The platform currently serves 17 static endpoints across two local runtimes (Next.js production static export on `http://localhost:3000` and zero-dependency offline preview on `http://localhost:8000`). While compilation succeeds with 0 TypeScript errors, this audit identifies critical areas requiring institutional remediation, evidence reconciliation, and safety hardening.

---

## 2. Quantitative System Baseline

| Metric | Measured Baseline | Target Standard (Phase 2) | Status |
| :--- | :--- | :--- | :--- |
| **Total Public Routes** | 15 unique + 2 aliases | 17 unique + 2 aliases (Add `/press/`, `/support/`) | Remediation Required |
| **Compilation Status** | Next.js 16.4.6 static export | Next.js 16.4.6 + Offline Preview Parity | PASS |
| **TypeScript Strictness** | Strict mode, 0 errors | Strict mode, 0 errors | PASS |
| **Bibliographic Sources** | 76 total entries | 76 total entries (100% audited) | 17 verified, 59 pending |
| **Quantitative Claims** | 14 curated metrics (M01-M14) | Claim-level traceable evidence system | Partial |
| **Documented Incidents** | 10 legal/regulatory cases | 10 verified cases (I06 duration withheld) | PASS |
| **Jurisdictions Covered** | 8 statutory profiles | 8 comparative interactive profiles | PASS |
| **Model Hub Safety** | Gated client-side list on `/models/` | Aggregated governance research (Zero direct links) | **CRITICAL FIX NEEDED** |
| **Form Backend Status** | Client-side mock in `SignupCard` | Honest status & local configuration disclosure | Remediation Required |
| **Press & Media Center** | None | Full press center at `/press/` | Missing |
| **Survivor Support Hub** | Embedded in `/take-action/` | Dedicated verified portal at `/support/` | Missing |

---

## 3. Detailed Baseline Findings by Domain

### 3.1. Research Evidence & Citation Baseline
- **The 76-Source Register:** Inherited 76 citations across three research manuscripts. 17 sources underwent primary-source rechecking in the initial audit. 59 sources remain designated as inherited/pending verification.
- **Evidence Traceability:** While citations are numbered `[1]` through `[76]`, users currently must navigate away to `/sources/` to see supporting metadata. Phase 2 requires an interactive claim-level inspector displaying original source titles, exact locators, methodology boundaries, and verification status inline.
- **Conflicting Figures Handled Correctly:**
  - *Incident I06 (Missouri federal case):* Withheld duration because inherited register stated 18 years while primary DOJ press release stated 14 years. Kept withheld pending formal docket retrieval.
  - *Ofcom Risk Assessments:* Corrected locator to printed page 18; documented 66.35% (69/104) without named responsible officer.
  - *UNICEF 1.2M+ Estimate:* Contextualized strictly as weighted household survey across 11 countries, preventing false representation as global additive count.

### 3.2. Ethical Safeguarding & Model Governance
- **CRITICAL FINDING — Client-Side Warning Gate on `/models/`:**
  The current `/models/page.tsx` displays individual model names, developer usernames, download counts, and direct repository hyperlinks (e.g., `huggingface.co/f23gg/Krea-2-NSFW-V5`) behind a client-side JavaScript toggle (`#models-warning-gate`).
- **Safeguarding Failure Mode:** A client-side banner is not access control. Search engine crawlers, static HTML scrapers, and curious visitors can view or index these links in page source or JavaScript bundles.
- **Required Action:** Completely sanitize `/models/`. Replace individual repository names and direct hyperlinks with aggregated statistical findings (parameter distributions, LoRA usage proportions, licensing omissions, model card deficiencies, repository moderation failures, and regulatory response timelines).

### 3.3. Public Engagement & Form Architecture
- **FINDING — `SignupCard` Client-Side Simulation:**
  The current research pool signup form intercepts submit events, validates email format, resets the input, and displays "Thank you for joining. You have been added to the research update pool." However, no server-side backend or database is active.
- **Required Action:** Under ethical and consumer transparency principles, never pretend a submission is persisted when no backend exists. Display an explicit, transparent configuration notice stating that the public subscription service is currently in local research preview and will activate upon deployment of secure subscriber infrastructure.

### 3.4. Navigation, Layout & Visual Hierarchy
- **Header:** Refactored from 13 cramped links into 3 institutional dropdowns (`Evidence`, `Policy & Tech`, `Research & Data`) + `About` + `Take action ↗`. Desktop and mobile drawer functionality verified.
- **Homepage Structure:** Currently presents strong introductory blocks, but requires restructuring into the mandated 7-part public narrative:
  1. What is happening?
  2. Who is being affected?
  3. How serious is the problem?
  4. What does the evidence establish?
  5. Why are existing safeguards insufficient?
  6. What should governments and technology companies do?
  7. How can the visitor help?

### 3.5. Missing Core Institutional Endpoints
- **`/press/` (Press & Media Center):** Journalists currently have no single landing page containing official fact sheets, downloadable executive summaries, high-resolution scientific chart packs, and media guidelines.
- **`/support/` (Survivor Support & Reporting Portal):** While `/take-action/` links to reporting bodies, a dedicated, trauma-informed `/support/` route is essential for individuals needing immediate official takedown assistance (StopNCII, Take It Down, IWF, CCRI, India 1930 Helpline).

---

## 4. Phase 2 Remediation & Execution Blueprint

1. **Evidence Verification:** Audit all 59 remaining citations using `onlinesearch` Tier-1/Tier-2 primary records; generate `citation-audit.json`, `citation-audit.csv`, and `CLAIM_VERIFICATION_REPORT.md`.
2. **Model Hub Sanitization:** Transform `/models/` from an individual model directory into an aggregated repository governance research paper.
3. **Claim-Level Evidence System:** Build an interactive popover/inspector for every citation `[1]` to `[76]`.
4. **Interactive Research Visualizations:** Deploy time-series trend charts, survey methodology comparators, incident timeline, and 8-jurisdiction statutory matrix with CSV data export.
5. **Homepage Narrative Redesign:** Restructure the homepage into the compelling 7-part narrative with clear editorial flow.
6. **Press & Media Center:** Build `/press/` with fact sheets, media packs, and approved graphics.
7. **Survivor Safeguarding Center:** Build `/support/` with verified official reporting pathways and crisis disclosures.
8. **Form Transparency:** Update `SignupCard` to clearly communicate local preview status.
9. **Packaging & Release Gates:** Compile distribution archives (`V3`, `Public Release`, `Press Kit`, `MASTER V2`), calculate SHA-256 checksums, and evaluate `PUBLIC_RELEASE_READINESS.md`.
