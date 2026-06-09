# GitHub Pages Preview Deployment

This note records the Post-Milestone 9 GitHub Pages preview setup for the static BMR PrintCare website. It is for browser review before public release and does not add analytics, backend services, checkout, forms, downloads, installers, binaries, manufacturer logos, or partnership claims.

## Current build setup

- Framework: Astro static site with TypeScript checking available through `npx astro check`.
- Package scripts:
  - `npm run dev` starts the local Astro development server.
  - `npm run build` generates the production static site.
  - `npm run preview` serves the generated build locally.
  - `npm run check:links` validates generated routes, base-prefixed internal links, assets, and anchors after `dist/` exists.
- Build output: Astro writes the generated static site to `dist/`.
- Static behavior: no adapter, server runtime, backend, forms, analytics, checkout, downloads, or payment integrations are configured.
- GitHub Pages preview URL: `https://PedroBMR.github.io/bmr-printcare-site/`.
- Astro base path: `astro.config.mjs` sets `base` to `/bmr-printcare-site/` so generated internal links and static assets work from the GitHub Pages project URL.
- Configured canonical site URL: `astro.config.mjs` still sets `site` to `https://bmrprintcare.com` because the intended production domain is expected to be reviewed separately later.
- Sitemap output is intentionally not configured yet.

## Current public routes

The current page files generate these browser routes under the GitHub Pages project base path:

- `/bmr-printcare-site/`
- `/bmr-printcare-site/features/`
- `/bmr-printcare-site/docs/`
- `/bmr-printcare-site/docs/getting-started/`
- `/bmr-printcare-site/docs/printer-profiles/`
- `/bmr-printcare-site/docs/maintenance-history/`
- `/bmr-printcare-site/docs/preventive-maintenance/`
- `/bmr-printcare-site/docs/parts-and-consumables/`
- `/bmr-printcare-site/docs/local-first-data/`
- `/bmr-printcare-site/roadmap/`
- `/bmr-printcare-site/support/`
- `/bmr-printcare-site/download/`
- `/bmr-printcare-site/privacy/`
- `/bmr-printcare-site/terms/`
- `/bmr-printcare-site/license-terms/`
- `/bmr-printcare-site/refund-policy/`
- `/bmr-printcare-site/manufacturer-disclaimer/`

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

Do not commit the generated `dist/` folder for this preview.

## Manual GitHub settings Pedro must configure

In the GitHub repository settings:

1. Open **Settings → Pages**.
2. Set **Build and deployment → Source** to **GitHub Actions**.
3. Confirm the repository is named `bmr-printcare-site` under the `PedroBMR` account if the expected preview URL should be `https://PedroBMR.github.io/bmr-printcare-site/`.
4. Push to `main` or run the workflow manually from the **Actions** tab.
5. Wait for the deployment to finish and open the Pages URL shown by the workflow.

## Canonical and Open Graph tradeoff

The preview is served from `https://PedroBMR.github.io/bmr-printcare-site/`, but non-`noindex` pages continue to emit canonical and Open Graph URLs for `https://bmrprintcare.com`.

This is intentional for now because `bmrprintcare.com` is still the intended production-domain direction, and the GitHub Pages URL is only a preview. Before public launch, recheck whether the production domain is live, whether canonical URLs should remain on `bmrprintcare.com`, and whether a sitemap should be added. Do not add sitemap output until the final domain and launch strategy are confirmed.

## Manual visual test checklist

After deployment, review these items in desktop and mobile browsers:

- Homepage loads under `/bmr-printcare-site/`.
- Header links work.
- Footer links work.
- Home CTAs go to the correct route or section.
- In-page anchor links scroll smoothly and land below the sticky header.
- Browser back/forward behavior feels normal.
- `/features/` loads under the project base path.
- `/docs/` and every guide page load under the project base path.
- `/roadmap/` loads under the project base path.
- `/support/` loads under the project base path.
- `/download/` clearly says public release is not available yet.
- Legal pages remain preliminary or draft.
- Manufacturer independence disclaimer is visible.
- Mobile navigation wraps without breaking.
- Reduced-motion behavior remains respected.
- Favicon and web manifest load from the project base path.

## Preview risks

- GitHub Pages previews may be publicly reachable. Share the URL carefully.
- Because the project uses `/bmr-printcare-site/` as an Astro base path, local preview and future production-domain deployment strategy should be rechecked before launch on a root domain.
- If the final production site uses `https://bmrprintcare.com/` at the domain root, remove or adjust the Astro `base` value as part of that deployment change and rerun the full link and visual checks.
- Legal pages are preliminary and must be reviewed before commercial launch, payments, analytics, accounts, app distribution, or public release.
