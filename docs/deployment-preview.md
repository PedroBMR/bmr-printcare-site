# GitHub Pages Custom-Domain Deployment

This note records the GitHub Pages setup for the static NozzleNote by BMR website at the custom domain. It is for browser review before public release and does not add backend services, checkout, forms, downloads, installers, binaries, manufacturer logos, or partnership claims. GA4 is configured separately through a build-time public environment variable.

## Current build setup

- Framework: Astro static site with TypeScript checking available through `npx astro check`.
- Package scripts:
  - `npm run dev` starts the local Astro development server.
  - `npm run build` generates the production static site.
  - `npm run preview` serves the generated build locally.
  - `npm run check:links` validates generated root-domain routes, internal links, assets, and anchors after `dist/` exists.
- Build output: Astro writes the generated static site to `dist/`.
- Static behavior: no adapter, server runtime, backend, forms, checkout, downloads, or payment integrations are configured. The only analytics integration is the conditional standard GA4 Google tag described in `docs/analytics-setup.md`.
- Production custom domain: `https://nozzlenote.com/`.
- Astro site URL: `astro.config.mjs` sets `site` to `https://nozzlenote.com` for canonical and Open Graph URLs on non-`noindex` pages.
- Astro base path: no `base` is configured. Generated routes, internal links, static files, and Astro assets are emitted for the domain root.
- Custom-domain artifact support: `public/CNAME` contains only `nozzlenote.com`, so the generated Pages artifact includes the required CNAME file.
- Sitemap output is intentionally not configured yet.

## Current public routes

The current page files generate these browser routes from the custom-domain root:

- `/`
- `/features/`
- `/docs/`
- `/catalogs/`
- `/docs/getting-started/`
- `/docs/printer-profiles/`
- `/docs/maintenance-history/`
- `/docs/preventive-maintenance/`
- `/docs/parts-and-consumables/`
- `/docs/local-first-data/`
- `/roadmap/`
- `/early-supporters/`
- `/support/`
- `/download/`
- `/privacy/`
- `/terms/`
- `/license-terms/`
- `/refund-policy/`
- `/manufacturer-disclaimer/`

## GitHub Pages workflow

The repository includes `.github/workflows/deploy-github-pages.yml`.

The workflow:

1. runs on pushes to `main` and manual `workflow_dispatch` runs;
2. checks out the repository;
3. sets up Node.js 22 with npm caching;
4. installs dependencies with `npm ci`;
5. runs `npx astro check`;
6. runs `npm run build`;
7. runs `npm run check:links`;
8. uploads `dist/` as a GitHub Pages artifact;
9. deploys the artifact with the official `actions/deploy-pages` action.

Do not commit the generated `dist/` folder for this deployment.

## Manual GitHub settings Pedro must configure

In the GitHub repository settings:

1. Open **Settings → Pages**.
2. Set **Build and deployment → Source** to **GitHub Actions**.
3. Confirm **Custom domain** is exactly `nozzlenote.com`.
4. Confirm the DNS check passes and **Enforce HTTPS** is enabled once GitHub allows it.
5. Push to `main` or run the workflow manually from the **Actions** tab.
6. Wait for the deployment to finish and open the Pages URL shown by the workflow.
7. Open `https://nozzlenote.com/` and confirm CSS, JavaScript, favicon, manifest, and Astro assets load from root paths, not from the old project path.

## Canonical and Open Graph behavior

The production deployment is served from `https://nozzlenote.com/`, and non-`noindex` pages emit canonical and Open Graph URLs using that domain.

Preliminary legal pages should keep their existing `noindex` behavior. Do not add sitemap output until the final launch strategy is confirmed.

## Manual visual test checklist

After deployment, review these items in desktop and mobile browsers:

- Homepage loads at `https://nozzlenote.com/` with full styling.
- Header links work from the domain root.
- Footer links work from the domain root.
- Home CTAs go to the correct route or section.
- In-page anchor links scroll smoothly and land below the sticky header.
- Browser back/forward behavior feels normal.
- `/features/` loads from the domain root.
- `/catalogs/` loads from the domain root.
- `/docs/` and every guide page load from the domain root.
- The docs hub keeps its broader overview treatment, while individual docs guides use the compact article header with the same sidebar shell.
- Docs sidebar active states, Back to docs hub links, and guide-to-guide links remain rooted under `/docs/`.
- Docs navigation feels steady; browsers with cross-document View Transitions support should show a subtle transition, while reduced-motion users should not receive animated navigation.
- `/roadmap/` loads from the domain root.
- `/support/` loads from the domain root.
- `/download/` clearly says public release is not available yet.
- `/early-supporters/` remains a planning placeholder, not a live campaign.
- Legal pages remain preliminary.
- Manufacturer independence disclaimer is visible.
- Mobile navigation wraps without breaking.
- Reduced-motion behavior remains respected.
- Favicon and web manifest load from `/favicon.svg` and `/site.webmanifest`.
- Generated Astro assets load from `/_astro/...`.
- Repository-base-path URLs are not expected to be valid production routes.

## Deployment risks

- GitHub Pages deployments may be publicly reachable. Share the URL carefully.
- The old GitHub Project Pages preview path is no longer the production target after the custom-domain move.
- If a future secondary preview needs the old Project Pages URL, reintroduce base-path support only through an explicit preview-specific configuration so production remains rooted at `https://nozzlenote.com/`.
- Legal pages are preliminary and must be reviewed before commercial launch, payments, analytics, accounts, app distribution, or public release.
