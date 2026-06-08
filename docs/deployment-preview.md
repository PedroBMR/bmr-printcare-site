# Deployment Preview Preparation

This note records the conservative deployment-preview recommendation after Milestone 9. It is for reviewing the static BMR PrintCare website in a real browser before public release.

## Current build setup

- Framework: Astro static site with TypeScript checking available through `npx astro check`.
- Package scripts:
  - `npm run dev` starts the local Astro development server.
  - `npm run build` generates the production static site.
  - `npm run preview` serves the generated build locally.
  - `npm run check:links` validates generated internal routes and root-relative internal links after `dist/` exists.
- Build output: Astro writes the generated static site to `dist/`.
- Static behavior: no adapter, server runtime, backend, forms, analytics, checkout, downloads, or payment integrations are configured.
- Configured site URL: `astro.config.mjs` currently sets `site` to `https://bmrprintcare.com`, so production builds emit canonical and Open Graph URLs for non-`noindex` pages using that domain.
- Sitemap output is intentionally not configured yet.

## Current public routes

The current page files generate these browser routes:

- `/`
- `/features/`
- `/docs/`
- `/docs/getting-started/`
- `/docs/printer-profiles/`
- `/docs/maintenance-history/`
- `/docs/preventive-maintenance/`
- `/docs/parts-and-consumables/`
- `/docs/local-first-data/`
- `/roadmap/`
- `/support/`
- `/download/`
- `/privacy/`
- `/terms/`
- `/license-terms/`
- `/refund-policy/`
- `/manufacturer-disclaimer/`

## Recommended preview host

Use **Vercel Preview Deployments** for this review.

Why this is the safest preview path for the current repository:

- It can build and host the Astro static output directly from the repository with `npm run build` and `dist/`.
- It does not require a repository subpath, so the existing root-relative links and asset paths can remain unchanged.
- It avoids changing `astro.config.mjs`, internal links, manifest paths, robots.txt, or public website copy just to support a temporary preview.
- It gives Pedro a normal browser URL without requiring a local install on his work computer.

Netlify Deploy Previews are also safe for the same reason: they can build with `npm run build` and publish `dist/` from a root-hosted preview URL.

## GitHub Pages note

GitHub Pages is safe only if the preview is served from a root domain, such as a user/organization page or a configured custom domain.

For a GitHub Pages project URL like `https://OWNER.github.io/REPOSITORY/`, the site would need Astro base-path handling. The current site uses root-relative internal links and assets such as `/features/`, `/docs/`, `/favicon.svg`, and `/site.webmanifest`. On a project page, those paths point to the domain root instead of `/REPOSITORY/`, which can break navigation and assets.

Do not make broad base-path changes for a temporary preview unless GitHub Pages project hosting is definitely required. Those changes would touch many links and metadata-adjacent paths, increasing preview risk without improving the product content.

## Suggested Vercel settings

- Framework preset: Astro.
- Install command: `npm install`.
- Build command: `npm run build`.
- Output directory: `dist`.
- Do not add analytics, Speed Insights, tracking pixels, forms, cookies, checkout, downloads, or payment links for this preview.
- If available on the account, keep the preview unshared except with reviewers or use deployment protection for the preview URL.

## Manual preview checklist

After deployment, review these items in a desktop and mobile browser:

- Homepage loads.
- Header links work.
- Footer links work.
- `/features/` loads.
- `/docs/` and every guide page load.
- `/roadmap/` loads.
- `/support/` loads.
- `/download/` clearly says the public release is not available yet.
- Legal pages remain marked as preliminary or draft.
- No “Download now” or public availability claim appears.
- Manufacturer independence disclaimer is visible.
- Favicon and web manifest load.
- Page titles and descriptions look appropriate in browser previews or page-source checks.
- Mobile layout is manually reviewed after the preview URL is available.

## Preview risks and manual steps

- Preview URLs may be publicly reachable if deployment protection is not enabled. Share the URL carefully.
- Non-`noindex` pages currently emit canonical and Open Graph URLs using `https://bmrprintcare.com`; this matches the existing repository config but should be rechecked before final public launch.
- Legal pages are preliminary and must be reviewed before commercial launch, payments, analytics, accounts, app distribution, or public release.
- Do not add sitemap output until the final domain and launch strategy are confirmed.
