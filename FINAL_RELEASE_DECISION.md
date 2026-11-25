# FINAL RELEASE DECISION — Consent Is Not Synthetic (V4.1)

**Decision Date:** 25 November 2026  
**Research Cutoff:** 25 November 2026  
**Overall Verdict:** **RELEASE CANDIDATE — PENDING OWNER AUTHORIZATION, INDEPENDENT PEER REVIEW & QUALIFIED LEGAL REVIEW**

---

| Release Gate | Status | Evidence & Notes |
|---|---|---|
| Headline claims supported by evidence | **PASS** | Reconciled in `canonical_data/claims.json` and `CLAIM_VERIFICATION_FINAL.csv`; unverified/withheld items (`UNICEF-04`, `DISC-722`) marked `publication_eligible: false`. |
| Statistical discrepancies resolved or withheld | **PASS** | IWF (193→491 reports; 13→3,443 videos; 3,440 prior announcement noted), NCMEC (~1.5M Senate vs >400k/>158k main series), Ofcom (69/104 = 66.35% p. 18), ISD (20.7M across 31 sites), and `I06` conflicting sentence duration resolved/withheld. |
| Technical inventory correctly interpreted | **PASS** | 53-record workbook framed strictly as investigation metadata completeness; 0%/100% publisher claims removed; 722 exploratory count withdrawn from all public findings. |
| Legal claims appropriately qualified | **PASS** | EU Reg. (EU) 2026/1744 marked enacted/not yet applicable (2 Dec 2026); UK CPA 2026 uncommenced provisions noted; Canada Bill C-16 marked pending commencement confirmation; legal disclaimer added. |
| Source references traceable | **PASS** | 76 sources indexed in `SOURCE_VERIFICATION_FINAL.csv` and `web/lib/data.json` with locators and limitations. |
| Research limitations disclosed | **PASS** | Disclosed on homepage, `/methodology/`, `/transparency/`, `/regulation/`, `v4-journal.pdf`, and `UNRESOLVED_EVIDENCE_REGISTER.md`. |
| Historical materials preserved | **PASS** | V1–V3 manuscripts and original deliverables preserved untouched in `research/`. |
| Support resources verified | **PASS** | Official portals only; India `1930` restricted to financial fraud notice; `1091` withheld; `112`, `1098`, `181` (subject to availability), `cybercrime.gov.in` verified. |
| Sensitive public-data leakage prevented | **PASS** | `scripts/verify_build_isolation.py` confirmed 0 source maps, 0 Excel workbooks, and 0 `722` leaks in `web/out/`. |
| Production build successful | **PASS** | `npm run typecheck` (0 errors) and `npm run build` (24/24 routes prerendered + `postbuild.cjs` RSC aliasing) succeeded. |
| Essential browser tests successful | **PASS** | `scripts/master_playwright_audit.cjs`: **126/126** checks passed across 21 routes × 6 viewports (`360px`–`1920px`), `0` console/JS/network errors, functional matrix verified. |
| Accessibility reviewed | **PARTIAL** | Keyboard focus, Escape modal close, mobile drawer, `prefers-reduced-motion`, and 6 responsive viewports tested; full screen-reader & Lighthouse field audits not run in offline environment. |
| SEO configuration reviewed | **PASS** | `sitemap.ts`, `robots.ts`, `seo.ts`, semantic headings, and metadata verified; `NEXT_PUBLIC_SITE_URL` remains safely gated until production domain is set. |
| Downloads checked | **PASS** | `scripts/verify_build_isolation.py` confirmed 0 broken `/downloads/` or `/assets/` links in `web/out/`; `v4-journal.pdf` recompiled. |
| Archives and checksums verified | **PASS** | 7 canonical V4.1 archives built and SHA-256 verified in `CHECKSUMS_RELEASE.txt` and `RELEASE_MANIFEST.json`. |
| Operational contact details confirmed | **PARTIAL** | Unverified public email capture disabled; `research@...` removed from `SignupCard`; institutional submission contacts marked pending owner verification. |
| Owner authorization recorded | **NOT TESTED** | Pending explicit owner sign-off prior to external deployment (`vercel --prod`) or institutional submission. |
| External live URL / Lighthouse field audit | **NOT TESTED** | Offline-first environment; live URL link checks and external production header verification pending deployment. |
