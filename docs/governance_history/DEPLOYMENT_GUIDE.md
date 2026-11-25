# DEPLOYMENT & PRODUCTION HOSTING GUIDE
## Production Setup, Multi-Cloud Static Deployment, and Offline Execution Manual
**Project:** Consent Is Not Synthetic  
**Architecture:** Next.js 16 (App Router) Static Export (`output: 'export'`)  
**Output Target:** `web/out/` (Static HTML/CSS/JS + Static Downloads)  
**Date:** November 2026  

---

### 1. Architecture Overview

The *Consent Is Not Synthetic* platform is engineered as a zero-maintenance, highly secure static web application. It requires zero server-side databases, zero Node.js daemon runtimes in production, and zero dynamic backend processing. This eliminates SQL injection, remote code execution, and database connection exhaustion attacks.

All 24 application routes are pre-rendered into static HTML, optimized CSS, and client-side JavaScript bundles in `web/out/`.

---

### 2. Local Preview & Offline Execution

The entire platform can run in completely air-gapped, offline environments without an internet connection:

#### Method A: Official Production Static Server (`npx serve`)
```powershell
# Navigate to web directory and serve the static export on port 3000
cd web
npx serve out -l 3000
```
- Open browser at: `http://localhost:3000`

#### Method B: Standalone Python HTTP Server (Zero Dependency)
```powershell
# Serve from root directory
python -m http.server 8000 --directory web/offline-preview
```
- Open browser at: `http://localhost:8000`

---

### 3. Production Cloud Deployment Options

#### Option A: Vercel Production Deployment (Recommended)
The repository contains both root `vercel.json` and `web/vercel.json` pre-configured with strict Content Security Policy (CSP), cache headers, and clean URLs:

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Deploy to Production:
   ```bash
   cd web
   vercel --prod
   ```
3. Custom Domain Configuration:
   - In Vercel Project Settings &rarr; Domains:
   - Add `consentisnot-synthetic.org` and `www.consentisnot-synthetic.org`.
   - Point DNS A records to `76.76.21.21` or CNAME to `cname.vercel-dns.com`.

#### Option B: Cloudflare Pages Deployment
1. Connect GitHub repository to Cloudflare Pages dashboard.
2. Build Configuration:
   - **Framework Preset:** None (Static HTML) / Next.js Export
   - **Build Command:** `npm run build`
   - **Build Output Directory:** `out`
   - **Root Directory:** `web`
3. Environment: Node version `20` or higher.
4. Security Headers: Add `_headers` file matching `vercel.json` CSP policy.

#### Option C: AWS S3 + CloudFront CDN
1. Create private S3 bucket (e.g., `consentisnot-synthetic-prod`).
2. Sync `web/out/` to S3:
   ```bash
   aws s3 sync web/out/ s3://consentisnot-synthetic-prod/ --delete
   ```
3. Configure CloudFront distribution pointing to S3 origin with OAC (Origin Access Control).
4. Configure CloudFront Response Headers Policy to attach security headers (CSP, X-Frame-Options, HSTS).

---

### 4. Build & Compilation Commands

To rebuild the entire platform from scratch:
```powershell
cd web
# Clean prior build caches
Remove-Item -Recurse -Force .next, out -ErrorAction SilentlyContinue

# Execute TypeScript typechecking and static export
npm run build
```
The build executes `next build`, generating static files into `web/out/`.

---

### 5. Production Health Check & Smoke Test Checklist
After deploying to any cloud or static host:
- [ ] Verify root route loads with HTTP 200: `https://<domain>/`
- [ ] Verify `/models/` restriction banner appears on first visit.
- [ ] Click "I Acknowledge" on `/models/` and confirm data renders without errors.
- [ ] Verify `/transparency/` renders all 4 sections (Versions, Claims, Impact, Manifest).
- [ ] Test download links in `/downloads/` (e.g., `/downloads/v4-journal.pdf`).
- [ ] Inspect browser console to confirm zero CSP violations and zero 404 resource errors.
- [ ] Inspect HTTP response headers via `curl -I https://<domain>` to verify:
  - `Content-Security-Policy`
  - `X-Frame-Options: DENY`
  - `X-Content-Type-Options: nosniff`
