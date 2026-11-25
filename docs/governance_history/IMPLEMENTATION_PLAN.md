# IMPLEMENTATION PLAN
## Consent Is Not Synthetic — Public Platform Evolution

**Document Version:** 1.0.0  
**Date:** 25 November 2026  
**Execution Horizon:** Immediate Production Readiness  

---

## 1. Roadmap & Phased Execution

```
[Phase 1: Deep Workspace Inspection & Foundational Docs] ──► (Completed)
          │
          ▼
[Phase 2: Unified Research Data Architecture] ───────────────► (Active)
          │  • Modular JSON datasets
          │  • Validated TypeScript definitions
          │
          ▼
[Phase 3: Route Expansion & Comprehensive IA] ───────────────► (Pending)
          │  • 14 dedicated institutional pages
          │  • Canonical URLs and backward compatibility
          │
          ▼
[Phase 4: Advanced Interactive Visualizations] ─────────────► (Pending)
          │  • Recharts/SVG timelines & comparisons
          │  • Multi-attribute jurisdiction matrix
          │
          ▼
[Phase 5: Production Readiness, Security & Audits] ──────────► (Pending)
             • Zero-error compilation & typechecks
             • Offline preview sync
             • Responsive and accessibility audit
```

---

## 2. Detailed Work Breakdown

### Phase 1: Deep Workspace Inspection & Foundational Documentation (COMPLETE)
- [x] Inspect all three manuscript generations (`V1`, `V2`, `V3`).
- [x] Review publication audit files, screening registers, and citation audit tables.
- [x] Draft foundational documents:
  - `PROJECT_CONTEXT.md`
  - `RESEARCH_DATA_MAP.md`
  - `ARCHITECTURE.md`
  - `IMPLEMENTATION_PLAN.md`
  - `EVIDENCE_AUDIT.md`

### Phase 2: Unified Research Data Architecture
- [ ] Establish `web/lib/data/` with decoupled, structured JSON stores:
  - `sources.json`: 76 verified bibliographic records.
  - `metrics.json`: 14 quantitative claims with denominators.
  - `incidents.json`: 10 legal and regulatory cases with reconciled statuses.
  - `controls.json`: 6 claim-to-action policy controls.
  - `jurisdictions.json`: Detailed 8-jurisdiction statutory comparisons.
  - `corrections.json`: Versioned public correction log.
  - `model-audit.json`: Phase 1 Hugging Face open-weight model enumeration.
- [ ] Build strongly typed data access layer with strict schema checks.

### Phase 3: Route Expansion & Information Architecture
Expand the website from 9 routes to the full 14-page institutional sitemap:
1. **`/`** — Homepage & Executive Narrative
2. **`/impact`** — Human Impact & Victim-Survivor Research
3. **`/evidence`** — Quantitative Evidence & Interactive Dashboard
4. **`/incidents`** — Documented Legal & Enforcement Case Register
5. **`/technology`** — Generative AI Architectures & Digital Forensics
6. **`/model-governance`** — Publisher Duties & Model Hub Responsibilities
7. **`/regulation`** — Global Regulatory Matrix (8 Jurisdictions)
8. **`/accountability`** — Three-Tier Policy Framework & Claim-to-Action
9. **`/research`** (and `/library`) — Research Manuscripts (V1, V2, V3) & Datasets
10. **`/sources`** — Searchable 76-Reference Bibliography
11. **`/methodology`** — PRISMA Protocol, Evidence Hierarchy & Scope
12. **`/take-action`** (and `/action`) — Official Reporting Routes & Advocacy Letter
13. **`/about`** — Mission, Independence & Organizational Disclosures
14. **`/corrections`** — Transparent Public Correction History
15. **`/models`** — Interstitial Gated Hugging Face Model Audit

### Phase 4: Visualizations & Component Engineering
- [ ] Build interactive SVG/CSS responsive charts for:
  - IWF report volumes and photorealistic video growth.
  - Cross-country survey victimization vs perpetration rates.
  - Ofcom risk record owner audit distribution.
  - Interactive multi-parameter regulatory comparison filter.
  - Searchable and sortable table components with keyboard accessibility.

### Phase 5: Production Readiness, Audits & Verification
- [ ] Execute `tsc --noEmit` with zero errors.
- [ ] Execute Next.js 16 production static export (`npm run build`).
- [ ] Execute offline preview export (`node scripts/export-offline.cjs`).
- [ ] Verify accessibility across 360px, 768px, 1024px, 1440px viewports.
- [ ] Verify security: Ensure no private working directories, LaTeX source files, or internal drafts are exposed in `public/` or `out/`.
