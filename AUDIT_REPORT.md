# MASTER PRODUCTION & RESEARCH INTEGRITY AUDIT REPORT

**Project:** Consent Is Not Synthetic  
**Repository:** `https://github.com/csharikrishna/consent-is-not-synthetic`  
**Target Build:** Static Next.js 16.4.6 Export (`web/out/`)  
**Audit Execution Date:** 2026-11-26 (Post-Remediation Verification Baseline)

---

## 1. Executive Summary & Quality Gates

| Quality Gate | Status | Evidence & Audit Tooling |
|---|---|---|
| **TypeScript & Next.js Build** | **PASS** | `tsc --noEmit` + `next build` + `postbuild.cjs` (`24` HTML, `14` JS, `0` maps, `.nojekyll`, RSC aliases) |
| **Fail-Closed Deliverable Isolation** | **PASS** | `scripts/verify_build_isolation.py` scanned `205/205` deliverables (HTML, JS, JSON, CSV, MD, PDF); `0` leaks; `0` read errors; `12` non-text assets skipped with explicit reasons |
| **Canonical Source Sync** | **PASS** | `scripts/master_audit_phase1_to_5.py`: `77` sources (`67` verified, `10` pending URL verification); `0` missing sources in code or `interactions.js` |
| **Route & Viewport Matrix** | **PASS (126/126)** | `21` routes × `6` viewports (`360px`–`1920px`) with HTTP 200, `h1Count === 1`, `0` console/page/network errors, `0` unwrapped tables |
| **Automated WCAG 2.1 AA (axe-core)** | **PASS** | `axe-core` evaluated across `21` desktop routes, mobile viewport (390px), and interactive states (citation modal, models gate & explorer, mobile drawer): **0 violations** (contrast, ARIA attributes, form labels, landmarks, focus) |
| **Screen-Reader & Manual UX** | **PARTIAL** | Automated accessibility gates and keyboard navigation (`Tab` skip-link, `Escape` dismissal) passed; end-to-end assistive-technology user testing remains partial |
| **Qualified Legal & Peer Review** | **PENDING** | Independent qualified Indian/UK/US technology law review and formal academic journal peer review remain pending |

---

## 2. Post-Remediation Resolutions

1. **[P1-R01] Obsolete Offline Preview Removed & Git Policy:** The legacy `web/offline-preview/` directory containing withdrawn exploratory findings and stale metrics was completely purged from the repository tree. Past commits retain the deletion as an immutable audit trail.
2. **[P1-R02] Model Governance Overstatements Corrected:** Section 4 of `web/app/models/page.tsx` was rewritten to *"Model-Card Metadata Completeness and Verification Priorities"*, explicitly characterizing gaps as investigation collection limits requiring publisher-level verification rather than unproven "systemic non-compliance".
3. **[P2-R03] Reproducible Top-50 Snapshot Provenance:** Established a versioned, committed snapshot at `research/snapshots/huggingface_top50_nsfw_models_snapshot.md` with dynamic SHA-256 calculation in `scripts/extract_top50_json.py`, recording date-level precision (`capture_date: "2026-11-25"`) without fabricated timestamps.
4. **[P2-R04] Fail-Closed Build Isolation Scanner:** `scripts/verify_build_isolation.py` was refactored to fail immediately on unreadable PDFs or missing directories, recording `expected_deliverable_count` (`205`), `successfully_checked_count` (`205`), and `skipped_files` (`12` non-text assets) in `audit-results/deliverable-scan.json`.
5. **[P2-R05] Repeatable Production Smoke Testing:** Added `scripts/production_smoke_test.cjs` and persisted structured execution reports to `audit-results/production-smoke-test.json`.
6. **[P2-R06] Automated Accessibility Auditing & Gate Hardening:** Integrated `axe-core` fail-closed gate into `scripts/master_playwright_audit.cjs`, resolved contrast and ARIA discrepancies across components, tables, and charts, and verified 0 violations across desktop (1440px), mobile (390px), and interactive states.
7. **[Asset Integrity] Production Asset Prefixing:** Live GitHub Pages deployment verified with HTTP 200 responses across all images (`/assets/hero.svg`, `/assets/mark.svg`), styles, and downloads with zero 404s.

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
