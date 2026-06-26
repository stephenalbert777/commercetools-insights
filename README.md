# commercetools Insights Dashboard — Royal Cyber

A Next.js (App Router) + Tailwind dashboard that presents the output of two
commercetools agents in one commercetools-branded site:

- **Trend Report** (`/newsletter`) — the **commercetools Department Agent** weekly sweep:
  emerging trends, release updates, upcoming events, and blog / whitepaper /
  LinkedIn content opportunities.
- **Quarterly Plan** (`/quarterly-plan`) — the **commercetools Quarterly Plan Agent**:
  a two-quarter execution plan (Q3 / Q4) with strategic focus areas and a
  month-sorted initiative table. (`/weekly-plan` redirects here.)
- **Accelerators** (`/accelerators`) — the Royal Cyber commercetools Center of Excellence catalogue.
- **Projects** (`/projects`) — live commercetools engagement teams.
- **Dashboard** (`/`) — landing page linking to everything.

## Tech

Next.js 14 · React 18 · TypeScript · Tailwind CSS 3. Fully static — every page
prerenders, so it runs anywhere Vercel hosts with zero config.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Updating the content

All agent output lives in plain data files — no component edits needed:

- `data/report.ts` — Department Agent trend report.
- `data/quarterlyPlan.ts` — Quarterly Plan agent output.
- `data/accelerators.ts` — accelerator catalogue.
- `data/projects.ts` — project teams.

Replace the exported object with the agent's latest run (keep the same shape),
commit, and Vercel redeploys automatically.

---

## Deploy to Vercel via GitHub

### 1. Push this folder to GitHub

From inside this folder. **First delete any partial `.git` folder** that may
exist (on Windows: `rmdir /s /q .git`, or just delete the hidden `.git` folder
in Explorer), then:

```bash
git init
git add .
git commit -m "commercetools Insights dashboard"
git branch -M main
git remote add origin https://github.com/<your-username>/commercetools-insights.git
git push -u origin main
```

(Create the empty `commercetools-insights` repo on GitHub first — no README/.gitignore,
this repo already has them.)

### 2. Import into Vercel

1. In Vercel, click **Add New… → Project**.
2. **Import** the `commercetools-insights` GitHub repo.
3. Vercel auto-detects **Next.js** — leave Framework Preset, Build Command
   (`next build`), and Output as defaults. No environment variables are needed.
4. Click **Deploy**. First build takes ~1–2 minutes.

### 3. Attach your domain

1. In the project → **Settings → Domains**, add your domain (and optionally the
   `www` subdomain).
2. Vercel shows the DNS records to set at your domain registrar:
   - Apex: an **A record → 76.76.21.21**, or follow Vercel's current recommended
     apex target shown on screen.
   - `www`: a **CNAME → cname.vercel-dns.com**.
3. Save at the registrar; Vercel issues SSL automatically once DNS propagates
   (usually minutes, up to a few hours).

### Future updates

Every `git push` to `main` triggers an automatic Vercel deployment.
