# SYSTEM ARCHITECTURE
## Consent Is Not Synthetic — Public Research Platform

**Document Version:** 1.0.0  
**Date:** 25 November 2026  
**Stack:** Next.js 16 (App Router), React 19, TypeScript (Strict), Tailwind CSS 4, Vercel Production Deployment  

---

## 1. Architectural Principles

1. **Server-First Static Rendering:** The entire application is statically generated (`output: 'export'`) to guarantee high performance, instant page loads, and zero server-side vulnerabilities.
2. **Zero Tracking & Maximum Privacy:** No analytics trackers, no tracking pixels, no advertising scripts, no third-party cookies, and no telemetry calls.
3. **Data-Minimization Collection:** Any optional public interaction (such as joining the research update pool) strictly respects data minimization and unbundled consent under India's DPDP Act and GDPR.
4. **Offline Resilience:** A dual-export architecture enables the entire website to run both as a modern Next.js client-hydrated site and as an offline, zero-dependency static preview.
5. **Strict Public/Private Separation:** Public website assets are physically and architecturally isolated from the sensitive private research archive, preserving victim dignity and preventing distribution of exploit details.

---

## 2. Directory Structure & File Hierarchy

```text
web/
├── app/                                # Next.js 16 App Router pages
│   ├── layout.tsx                      # Root layout, HTML skeleton, metadataBase
│   ├── globals.css                     # Editorial typography & design tokens
│   ├── page.tsx                        # Homepage (/)
│   ├── impact/page.tsx                 # Human Impact (/impact)
│   ├── evidence/page.tsx               # Evidence Dashboard (/evidence)
│   ├── incidents/page.tsx              # Documented Incidents (/incidents)
│   ├── technology/page.tsx             # Technology & Architecture (/technology)
│   ├── model-governance/page.tsx       # Model Governance (/model-governance)
│   ├── regulation/page.tsx             # Global Regulation Comparison (/regulation)
│   ├── accountability/page.tsx         # Policy Accountability Framework (/accountability)
│   ├── research/page.tsx               # Research Library (/research & /library)
│   ├── sources/page.tsx                # Bibliography & Source Register (/sources)
│   ├── methodology/page.tsx            # Methodology & Corrections Log (/methodology)
│   ├── take-action/page.tsx            # Take Action & Advocacy Letters (/take-action & /action)
│   ├── about/page.tsx                  # About the Initiative (/about)
│   ├── corrections/page.tsx            # Dedicated Public Corrections Register (/corrections)
│   ├── models/page.tsx                 # Gated Hugging Face Model Hub Audit (/models)
│   ├── robots.ts                       # Dynamic robots.txt generator
│   └── sitemap.ts                      # Dynamic XML sitemap generator
│
├── components/                         # Modular UI & Interactive Components
│   ├── ui.tsx                          # Base editorial components (Header, Footer, Stat, Eyebrow)
│   ├── Explorer.tsx                    # Search and filter components (Sources, Incidents, Metrics)
│   ├── Navigation.tsx                  # Accessible responsive navbar with mobile drawer
│   ├── Visualizations.tsx              # Accessible SVG and CSS charts and data graphs
│   └── GatedAccess.tsx                 # Interstitial research restriction barrier
│
├── lib/
│   ├── content.ts                      # Route metadata, downloads catalog, navigation
│   ├── seo.ts                          # OpenGraph, Twitter card, canonical URL generator
│   └── data/
│       ├── index.ts                    # Strongly typed data accessor & Zod schemas
│       ├── sources.json                # 76 bibliographic records
│       ├── metrics.json                # 14 quantitative metrics
│       ├── incidents.json              # 10 legal and regulatory enforcement records
│       ├── controls.json               # 6 evidence-to-action policy controls
│       ├── jurisdictions.json          # 8-jurisdiction regulatory comparative matrix
│       ├── corrections.json            # Machine-readable correction log
│       └── model-audit.json            # Hugging Face Phase 1 audit data
│
├── public/                             # Public static assets
│   ├── assets/                         # Optimized SVGs (hero, mark) and OpenGraph PNG
│   ├── downloads/                      # Clean, reviewed public research PDFs and CSVs
│   └── interactions.js                 # Progressive enhancement client script
│
├── scripts/
│   └── export-offline.cjs              # Offline HTML renderer for zero-npm preview
│
├── vercel.json                         # Production deployment, CSP, and security headers
├── next.config.ts                      # Next.js configuration
├── tsconfig.json                       # TypeScript compiler options (strict mode)
└── package.json                        # Dependencies and build scripts
```

---

## 3. Visual Identity & Editorial Design Tokens

The site follows the visual clarity and dignity of major academic and policy research institutions (UNICEF, Our World in Data, Reuters Graphics).

```css
:root {
  --accent: #A0264B;        /* Deep Rose - primary brand and callouts */
  --accent-dark: #801738;   /* Crimson - hover states, active badges */
  --rose: #F7E8ED;          /* Soft Rose - pill backgrounds, light accents */
  --paper: #FFFDFC;         /* Ivory / Warm White - background */
  --soft: #FCF3F5;          /* Off-white / light blush for alternating sections */
  --ink: #241E27;           /* Deep Charcoal / Plum - primary body copy */
  --muted: #655C64;         /* Slate Violet - secondary text, notes, captions */
  --line: #E7DDE1;          /* Subtle border separator */
  --serif: Georgia, 'Times New Roman', Cambria, serif;
  --sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}
```

### Visual Standards:
- **Typography:** Serif headings with tight tracking (`letter-spacing: -0.035em`) paired with highly legible sans-serif body copy (`font-size: 16px; line-height: 1.65`).
- **Data Callouts:** Tabular lining numbers (`font-variant-numeric: tabular-nums`) with clear units and linked reference pills (`[ID] Publisher ↗`).
- **Accessible Contrast:** All text elements meet or exceed WCAG 2.2 AA contrast ratios (>4.5:1 for normal text, >3:1 for large text).
- **Reduced Motion:** System prefers-reduced-motion queries automatically disable animations and smooth scrolling.

---

## 4. Security & Content Security Policy (CSP)

Implemented in [web/vercel.json](file:///c:/Users/cshar/Downloads/Consent_Is_Not_Synthetic_MASTER/web/vercel.json):

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=(), payment=()" },
        { "key": "Content-Security-Policy", "value": "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self';" }
      ]
    }
  ]
}
```

---

## 5. Dual Runtime Strategy

1. **Next.js Production Runtime:**
   - Server-rendered React components with static export.
   - Client hydration for progressive filtering and tab switches.
   - Served via Node/Vercel or `serve out/` on port 3000.
2. **Offline Zero-Dependency Runtime:**
   - Compiled directly via [scripts/export-offline.cjs](file:///c:/Users/cshar/Downloads/Consent_Is_Not_Synthetic_MASTER/web/scripts/export-offline.cjs).
   - Generates pure static HTML pages with identical styles and progressive script.
   - Operates in air-gapped environments via Python HTTP server on port 8000.
