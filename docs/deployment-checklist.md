# Deployment Checklist

Use this short checklist before evaluating a static deployment for NozzleNote by BMR.

## Local checks

- Run `npm install` after cloning the repository or when dependencies change.
- Run `npm run build` and confirm Astro writes the production site to `dist/`.
- Run `npx astro check` and review any diagnostics before deployment.
- Run `git diff --check` before committing to catch whitespace issues.
- Preview the production build with `npm run preview` when possible.

## Content checks

- Confirm every public route has a clear title and meta description.
- Confirm preliminary legal pages remain preliminary and do not claim final legal compliance.
- Confirm the download page still says the public app release is not available yet.
- Confirm no real installers, binaries, payment links, signup forms, cookies, or tracking scripts beyond the conditional standard GA4 Google tag were added.
- Confirm manufacturer independence language remains visible and no manufacturer logos are used.

## Deployment checks

- Deploy only the generated `dist/` directory for static hosting.
- Recheck the configured production domain before relying on canonical URLs or sitemap output.
- Evaluate static hosts such as Netlify, Vercel, Cloudflare Pages, GitHub Pages, or similar providers later.
- Do not add a sitemap, analytics beyond the conditional standard GA4 Google tag, contact forms, checkout, or public downloads until the launch plan is confirmed.
