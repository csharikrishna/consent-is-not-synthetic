# Consent Is Not Synthetic

[![Deploy](https://github.com/csharikrishna/consent-is-not-synthetic/actions/workflows/deploy-gh-pages.yml/badge.svg)](https://github.com/csharikrishna/consent-is-not-synthetic/actions/workflows/deploy-gh-pages.yml)
[![Live Site](https://img.shields.io/badge/Live%20Platform-csharikrishna.github.io-9D2048?style=flat&logo=githubpages&logoColor=white)](https://csharikrishna.github.io/consent-is-not-synthetic/)
[![Accessibility](https://img.shields.io/badge/Accessibility-Automated%20axe%20scan%3A%200%20violations-brightgreen)](audit-results/accessibility-audit.json)
[![Audit Matrix](https://img.shields.io/badge/Routes%20Audited-21%2F21%20PASS-blue)](audit-results/route-audit.json)

**Artificial Images. Real Victims. Real Consequences.**

An independent public-interest research and evidence-led advocacy initiative documenting AI-enabled sexual exploitation, child safeguarding risks, open-weight model distribution accountability, and comparative regulatory responses.

> **Live Platform:** [https://csharikrishna.github.io/consent-is-not-synthetic/](https://csharikrishna.github.io/consent-is-not-synthetic/)  
> **Research Cutoff:** 25 November 2026 · **Edition:** Version 4.1 (Defended Edition)  
> **Classification:** AI-assisted structured narrative evidence review and regulatory policy synthesis, not independently peer-reviewed. Legal comparisons are informational research and have not undergone independent qualified legal review.  
> **Source Register:** 77 indexed references in the public source register (67 verified, 10 pending URL verification); the V4.1 manuscript bibliography indexes 76 cited entries.

---

## Key Deliverables & Direct Links

| Resource | Scope | Link / Deliverable |
|---|---|---|
| **Live Web Platform** | 21 routes, accessible, zero cookies | [csharikrishna.github.io/consent-is-not-synthetic](https://csharikrishna.github.io/consent-is-not-synthetic/) |
| **Release Decision** | Gate verification & statutory alignment | [FINAL_RELEASE_DECISION.md](FINAL_RELEASE_DECISION.md) |
| **Comprehensive Audit** | 126 route checks, axe-core, deliverable scan | [AUDIT_REPORT.md](AUDIT_REPORT.md) |
| **Citation Audit Register** | 77 audited sources with full cross-references | [citation-audit.csv](citation-audit.csv) / [citation-audit.json](citation-audit.json) |
| **Regulatory Submissions** | Audience-tailored policy briefs (MeitY, NCPCR, NCW) | [`regulatory_submissions/`](regulatory_submissions/) |
| **Model Hub Inventory** | Top-50 NSFW text-to-image metadata snapshot | [`research/snapshots/`](research/snapshots/) |

---

## Repository Structure

```text
├── web/                        # Next.js 16 + React 19 + TypeScript + Tailwind v4 static-export site
│   ├── app/                    # 21 public routes (+ sitemap, robots, not-found)
│   ├── components/             # Shared UI, explorers, and safeguarding gate
│   ├── lib/                    # Compiled canonical data (data.json, top50_hf.json, content.ts, seo.ts)
│   └── public/                 # Self-hosted downloads (PDF/CSV/JSON/MD), SVG assets, interactions.js
├── canonical_data/             # Single-source-of-truth JSON datasets (claims, sources, incidents, etc.)
├── research/                   # Manuscripts V1–V4.1, original deliverables, private snapshots
├── regulatory_submissions/     # Audience-tailored policy & Trust & Safety briefs (MeitY, NCPCR, NCW, HF, NGOs)
├── press_kit/                  # Executive summary, fact sheet, media backgrounder
├── docs/governance_history/    # Phase 1–3 audits, protocols, deployment guides
├── scripts/                    # Canonical reconciliation, PDF builder, isolation, Playwright QA, packaging
├── audit-results/              # Machine-readable audit reports and viewport screenshots
├── releases/                   # Release archive checksum manifest (packaging artifacts pending publication)
├── vercel.json                 # Root Vercel configuration (security headers + web/out output)
└── .github/workflows/          # GitHub Pages static deployment workflow
```

---

## Local Development & Verification

```bash
cd web
npm ci
npm run dev          # Local development server
npm run typecheck    # TypeScript validation
npm run build        # Static export to web/out/ + RSC payload aliasing + .nojekyll
```

### Automated Quality & Isolation Checks (from repo root)

```bash
python scripts/verify_build_isolation.py    # Ensures 0 source maps, 0 Excel files, 0 broken links (205 files checked)
node scripts/master_playwright_audit.cjs    # 126-check matrix across 21 routes x 6 viewports + full axe-core scan
node scripts/production_smoke_test.cjs      # Verifies 21/21 routes live on production with HTTP 200
```

---

## Deployment

### GitHub Pages
1. Push this repository to GitHub on the `main` branch.
2. In **Settings → Pages**, set **Source** to **GitHub Actions**.
3. The workflow at `.github/workflows/deploy-gh-pages.yml` automatically sets `NEXT_PUBLIC_BASE_PATH`, builds `web/out/`, and deploys to GitHub Pages.

### Vercel
Root `vercel.json` and `web/vercel.json` configure static output (`web/out/`), `cleanUrls`, `trailingSlash`, CSP, and security/cache headers.

---

## Safeguarding & Ethical Boundaries
- **Zero Abusive Media:** No non-consensual intimate imagery, CSAM, or generation bypass instructions are hosted or distributed.
- **Survivor Support:** Official reporting pathways (`cybercrime.gov.in`, NCMEC CyberTipline, Take It Down, StopNCII.org, IWF, eSafety) are documented on `/support/`. India helpline `1930` is strictly scoped to financial cyber fraud; emergency/abuse routing uses `112`, `1098`, and `181` (subject to availability).
- **Governance & Audit Trail:** See [AUDIT_REPORT.md](AUDIT_REPORT.md), [FINAL_RELEASE_DECISION.md](FINAL_RELEASE_DECISION.md), and [UNRESOLVED_EVIDENCE_REGISTER.md](UNRESOLVED_EVIDENCE_REGISTER.md).

---

## Licensing & Reuse Notice

No blanket repository license is currently declared. Third-party material remains subject to its respective rights and licenses. Contact the project owner regarding reuse of original project materials.
