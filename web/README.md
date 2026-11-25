# Consent Is Not Synthetic — public research website

An independent public-interest research initiative, research snapshot **25 November 2026**. The public content is grounded in V3 and the subsequent publication-readiness audit. This is a draft, not peer-reviewed scholarship or legal advice.

## Stack
- Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4 + custom CSS design tokens.
- Static export, server-rendered pages, progressive enhancement using a tiny local JS script. No database, account system, trackers, cookies, API keys, or remote font/image calls.
- Eight routes: Overview, Human impact, Evidence, Technology, Accountability, Research library, Methodology, Take action.
- Original SVG brand mark/hero art, PNG social image, accessible CSS charts, native form filters, downloadable research, copyable advocacy letter.

## Run / build
Requires Node.js 20.9+ (Node 22 LTS recommended) and npm with access to the package registry.

```bash
npm install
npm run dev
# open http://localhost:3000
npm run typecheck
npm run build
npx serve out
```

Dependencies use compatible major-version ranges; review security advisories, commit the generated package-lock.json, and run `npm audit` before deployment. **This environment could not reach the npm registry, so npm install, React/Next hydration and the official Next build/typecheck could not be executed here.** Do not mistake the included preview for a validated Next build.

## Immediate offline preview (no dependency installation)

```bash
cd offline-preview
python -m http.server 8080
# open http://localhost:8080
```

This preview was exported from the same TSX server components using a small offline renderer, with equivalent local CSS and JS. It supports the same eight routes, filters, chart selectors and downloads. It is deliberately noindex and not a production Next build. `npm run preview:offline` regenerates it using installed TypeScript (or global TypeScript). Use a local HTTP server, not file://, for root-relative URLs.

## SEO and publishing

1. Choose your real domain and copy `.env.example` to `.env.local`. Set `NEXT_PUBLIC_SITE_URL=https://your-real-domain` (HTTPS origin only; no placeholder domain is provided).
2. Review all content, obtain qualified independent legal and academic review, and update disclosure, date, corrections and accountable contact information. Check the local downloadable documents for publication suitability. Publish only the public site, not the private research archive. No victim media or identities are hosted. The site does not publish a directory of abuse-oriented generators.
3. Run the official Next build; deploy the `out/` folder to a static host or deploy the source to a supported Next host. Configure HTTPS and appropriate security headers (CSP compatible with Next, frame protection, referrer policy, MIME sniff protection). A real configured origin enables canonical links, indexable robots, Open Graph previews and the sitemap. Verify them in the actual build and submit the sitemap in search console.
4. Test desktop/mobile, keyboard navigation, contrast, link destinations, legal reporting details and downloadable assets. No SEO ranking or publication acceptance is guaranteed.

## Data provenance / editorial decisions

`lib/data.json` is generated from the V3 source ledger, quantitative evidence, claim-to-action register, and publication audit registers. The data preserve source numbers, units, denominators and status. 76 indexed sources; 17 contain a selected claim recheck; 59 not rechecked in that pass. 10 incident records; one inherited duration is withheld due to discrepancy with the linked source URL. The original archived file is not modified. General-purpose model inventory coverage is aggregate only; technical execution links are omitted from the on-site index. The PDFs are historical research drafts; consult the corrections page. Source text is paraphrased; no abuse images are included. The website includes no victim upload form or model downloader. No external sources were newly audited during this website build.

## Maintenance
- `app/`: route pages, SEO metadata, global design CSS
- `components/`: reusable components, charts and searchable registers
- `lib/`: source data and SEO helpers
- `public/assets/`: original SVG / PNG graphics
- `public/downloads/`: selected public research files and CSV extracts
- `public/interactions.js`: keyboard-compatible native input controls, search, chart tabs, copy letter, mobile navigation
- `scripts/export-offline.cjs`: offline preview export tool
- `offline-preview/`: generated static preview (not the Next build)

No live site, external domain or publication submission has been created. Do not present this initiative as an established institution or claim that any model has been removed as a result of it.
