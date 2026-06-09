# NozzleNote by BMR Website

Website and documentation hub for NozzleNote by BMR, a local-first desktop app in development for 3D printer maintenance tracking. NozzleNote is a local-first maintenance logbook for 3D printers — built to track routines, parts, costs, incidents and print quality over time.

This repository is currently in **Milestone 18 — Final Logo PNG Asset Integration**. It contains the Astro + TypeScript foundation, the structured Premium Violet Tech landing page, shared site navigation, conservative feature positioning, beginner-friendly documentation drafts, an expanded static support hub, a release-preparation download placeholder with no real download links, preliminary legal/compliance placeholder pages for future review, static SEO/deployment preparation basics, launch-readiness review notes, a planned catalogs route, a product-focused roadmap expansion, a non-live Early Supporters planning route, the final NozzleNote by BMR public rebrand, and integrated final raster NN logo assets that were manually uploaded to `public/brand/`.

## Current status

- The website is static and beginner-friendly. It does not include backend services, authentication, analytics, tracking pixels, cookies, checkout, newsletter integration, contact forms, or third-party scripts.
- The NozzleNote by BMR desktop app is still in development and is not publicly available yet.
- The `/download` route is a release-preparation placeholder only. It states that NozzleNote is not publicly available yet, describes the planned free desktop Core release focus, and does not provide real download links, installers, binaries, checksums, purchase links, beta signup forms, or release dates.
- The `/early-supporters` route is a non-live planning placeholder for a possible future Early Supporter Campaign or Launch Fund. It does not collect payment, define final rewards, publish pledge tiers, provide licenses, or create account, catalog, mobile, or download access.
- Legal and compliance pages are preliminary draft placeholders and remain subject to qualified review before commercial launch, app distribution, analytics, support intake, licensing, accounts, cloud backup, mobile companion workflows, or payment processing.
- NozzleNote by BMR is independent and must not imply partnership, endorsement, sponsorship, approval, affiliation, manufacturer service support, or access to proprietary manufacturer systems.
- Public product naming should use **NozzleNote by BMR**. The legacy/internal project name **BMR PrintCare** may appear only where needed to explain earlier repository or project history.
- BMR Verified Catalogs are planned optional content packs by BMR. They are not available yet, and paid catalog availability, pricing, licensing, and update periods are not final yet.


## Brand assets

The final NozzleNote NN raster PNG assets were manually uploaded to `public/brand/` and are now integrated without adding new binary files in the Milestone 18 code changes. The shared header and subtle hero preview identity use `/brand/nozzlenote-nn-symbol-64.png`; the web manifest references `/brand/nozzlenote-nn-symbol-192.png` and `/brand/nozzlenote-nn-symbol-512.png`; and `/brand/favicon-32.png` is available as a PNG favicon fallback while `/favicon.svg` remains the primary scalable favicon.

## Product naming

- Public commercial product name: **NozzleNote by BMR**.
- Short display brand: **NozzleNote** with secondary text **by BMR**.
- Legacy/internal project reference: **BMR PrintCare**. Use it only when necessary for historical or repository context.
- Suggested transition note when appropriate: “NozzleNote by BMR was previously developed under the internal project name BMR PrintCare.”
- Public copy should not treat BMR PrintCare as the final product name.

## Tech stack

- [Astro](https://astro.build/) for the website framework
- TypeScript for safer project configuration and future code
- Plain CSS for global styles, section styling, layout styling, documentation styling, support styling, release checklist styling, accessibility states, responsive behavior, and design tokens

## Project structure

```text
docs/             Short project documentation, including deployment and launch readiness checklists
public/           Static SEO, browser support, and brand files such as robots.txt, favicon.svg, site.webmanifest, and public/brand PNG logo assets
src/
  components/
    content/       Reusable content cards, grids, notes, FAQ, and release checklist components
    docs/          Reusable documentation cards, grid, layout, and navigation
    layout/        Shared site header and footer components
    legal/         Reusable legal placeholder layout, section, and draft notice components
    sections/      Reusable homepage landing page sections
  layouts/         Page layouts used by routes
  pages/           Static Astro routes
    catalogs.astro Planned BMR Verified Catalogs route
    early-supporters.astro Future launch-funding planning placeholder
    docs/          Documentation hub and beginner guide routes
  styles/          Global CSS and design tokens
```

The homepage is composed from small section components in `src/components/sections/`:

- `HeroSection.astro`
- `ProblemSection.astro`
- `SolutionSection.astro`
- `ProductScopeSection.astro`
- `FeatureHighlights.astro`
- `LocalFirstSection.astro`
- `WorkflowPreview.astro`
- `DisclaimerSection.astro`
- `RoadmapCta.astro`

The feature, support, and release pages use reusable content components in `src/components/content/`:

- `FeatureCard.astro`
- `FeatureGrid.astro`
- `FaqItem.astro`
- `FaqList.astro`
- `ReleaseChecklist.astro`
- `StatusNote.astro`

The documentation hub uses reusable docs components in `src/components/docs/`:

- `DocsCard.astro`
- `DocsGrid.astro`
- `DocsLayout.astro`
- `DocsNav.astro`

The legal placeholder pages use reusable legal components in `src/components/legal/`:

- `LegalLayout.astro` provides the shared legal-page shell, draft notice placement, and cross-links between legal, support, download, and roadmap pages.
- `LegalNotice.astro` marks legal copy as preliminary, not final legal advice, and subject to review.
- `LegalSection.astro` keeps legal content sections consistent and simple.

The shared site chrome is composed from layout components in `src/components/layout/`:

- `SiteHeader.astro` provides the primary navigation: Home, Features, Docs, Catalogs, Roadmap, Download, and Support. Early Supporters is intentionally left out of the primary header to avoid crowding the navigation.
- `SiteFooter.astro` provides product links, catalog/resource links, Early Supporters links, draft legal links, the manufacturer independence note, and the copyright notice.

`BaseLayout.astro` imports the global stylesheet, provides the shared skip link target, renders the shared header and footer around every page, and manages page metadata including title, description, Open Graph basics, Twitter/X summary-card basics, optional `noindex`, safe canonical URLs when `site` is configured, the SVG primary favicon, PNG favicon fallback, manifest, and theme color.

## Current routes

| Route | Purpose | Status |
| --- | --- | --- |
| `/` | Premium dark landing page for NozzleNote by BMR. | Live structure |
| `/features` | Feature overview for product direction, core maintenance tracking, local-first positioning, and roadmap-only feature notes. | Initial content |
| `/docs` | Documentation hub with links to beginner-friendly guide drafts and cross-links to Features, Roadmap, Download, and Support. | Expanded draft |
| `/catalogs` | Planned BMR Verified Catalogs page explaining optional content packs, the first compatible-with-Bambu-Lab-printers concept, commercial-model caution, and manufacturer independence. | Planned content |
| `/docs/getting-started` | Beginner overview for the intended maintenance workflow without public download instructions. | Draft |
| `/docs/printer-profiles` | Guide draft explaining printer profiles and manufacturer-independent profile notes. | Draft |
| `/docs/maintenance-history` | Guide draft for dated maintenance records, service notes, and practical history review. | Draft |
| `/docs/preventive-maintenance` | Guide draft for preventive maintenance reminders and their limits. | Draft |
| `/docs/parts-and-consumables` | Guide draft for replacement parts, consumables, and compatibility caution. | Draft |
| `/docs/local-first-data` | Guide draft for local-first data direction, backups, exports, and legal-page readiness. | Draft |
| `/roadmap` | Product-focused roadmap covering completed/in-progress work, current desktop maintenance focus, planned public release path, future catalog commercialization, future launch-funding planning, and future expansion ideas. | Expanded roadmap |
| `/early-supporters` | Static placeholder for a possible future Early Supporter Campaign or Launch Fund, with non-live campaign status, reward examples under review, safety boundaries, and pre-launch readiness requirements. | Planning placeholder |
| `/download` | Conservative release-preparation placeholder that states public release is not available yet and provides no real download links. | Placeholder |
| `/support` | Static support hub with documentation links, FAQ, current limitations, release-readiness notes, draft legal links, and manufacturer independence guidance. | Expanded hub |
| `/privacy` | Preliminary privacy notice covering current static-site data collection status, local-first data direction, and future review needs. | Draft placeholder |
| `/terms` | Preliminary terms of use covering website use, development status, acceptable use, and future updates. | Draft placeholder |
| `/license-terms` | Preliminary license terms placeholder noting that no final app license or distribution model has been selected. | Draft placeholder |
| `/refund-policy` | Preliminary refund policy placeholder noting that there are no purchases, paid plans, checkout, or public app release yet. | Draft placeholder |
| `/manufacturer-disclaimer` | Manufacturer independence disclaimer stating no affiliation, sponsorship, endorsement, or partnership with printer manufacturers. | Draft placeholder |

## Documentation structure

The documentation system remains intentionally simple. The docs are regular static Astro pages under `src/pages/docs/`, supported by a small reusable docs layout and navigation component. The shared docs layout has a hub mode for `/docs/` and a compact article mode for individual guides so the sidebar and content shell feel stable across documentation navigation. There is no documentation engine, content collection, search integration, backend, authentication, analytics, checkout flow, or newsletter integration.

The documentation hub currently covers these beginner topics:

- Getting started
- Core concepts
- Maintenance workflow
- Printer profiles
- Maintenance history
- Preventive maintenance
- Parts and consumables
- Local-first data direction
- Roadmap-only topics
- Support and release preparation links

The app is still in development, so documentation should continue to use conservative language such as “designed to”, “intended to”, “planned”, “in development”, and “documentation in progress” where appropriate. Do not add public app installation instructions or real download links until release readiness is explicitly complete.

## Support and release structure

The support and release messaging avoids changing the site into a product download portal.

The `/support` route now includes:

- a support hero with links to documentation, release preparation, and the roadmap;
- before-support guidance;
- a clear current-support statement that public support is limited to website information and development updates;
- future/planned app support categories for installation issues, app usage, backup/restore, license activation, catalog import, and diagnostic export;
- out-of-scope support language for printer repair, warranty claims, manufacturer support, unsafe maintenance instructions, manufacturer-owned troubleshooting, and direct printer control;
- direct documentation links;
- a public-facing release-readiness checklist;
- static FAQ content about app availability, supported printers, local-first data, maintenance records, documentation status, and manufacturer independence;
- current limitations;
- manufacturer independence guidance;
- internal links to Features, Roadmap, Docs, Download, legal pages, and the Manufacturer Disclaimer.

The `/download` route is a placeholder for release preparation only. It clearly states:

- NozzleNote is not publicly available yet;
- the first public release is planned to focus on the free desktop Core: printer profiles, maintenance tasks, history, parts, incidents, and local backup;
- there are no installers, binaries, purchase links, beta signup forms, checksums, or release dates yet;
- no real download buttons or download files are published;
- the readiness checklist includes Windows build, version number, installer or portable package, release notes, known limitations, backup guidance, support scope, manufacturer disclaimer, privacy notice, and reviewed terms/license placeholders.

## Feature positioning

The `/features` page explains these areas in English:

- printer profiles;
- maintenance history;
- preventive maintenance planning;
- parts and consumables records;
- local-first data direction;
- future BMR Verified Catalogs;
- future calibration and print-quality tracking as roadmap-only ideas.

The site should avoid claims about direct printer integrations, cloud sync, AI features, machine-driven diagnosis, mobile apps, paid plans, or manufacturer partnership claims unless a later milestone explicitly adds accurate supporting material.


## Catalogs and roadmap expansion

Milestone 11 adds the `/catalogs` route and updates `/roadmap` from a website-progress placeholder into a product-focused roadmap. Catalog language should use **BMR Verified Catalogs**, **BMR-maintained verified catalogs**, or **verified catalog packs by BMR**. Do not describe catalog content as manufacturer-issued, manufacturer-authorized, or manufacturer-reviewed.

The planned first catalog concept is **BMR Verified Catalog — Compatible with Bambu Lab Printers**. This phrasing is intended to describe a future BMR-created compatibility-oriented content pack without implying manufacturer affiliation, endorsement, sponsorship, review, or support.

The planned product model is a free Core app for manual maintenance tracking, with optional paid verified catalogs for users who want ready-to-use printer-specific profiles, routines, parts, and guides. Paid catalog availability, pricing, licensing, and update periods are not final yet.

The expanded roadmap now separates:

- Completed / In progress website and app preparation;
- Current development focus for the desktop maintenance core, profiles, tasks, history, parts, incidents, backup, and catalog foundation;
- Planned public release path for the free Core desktop release and supporting guidance;
- Future commercial path for verified catalogs, license keys, entitlements, early supporter/crowdfunding planning, and public paid catalog launch;
- Future expansion ideas such as Maintenance Budget & Parts Planner, Calibration & Print Quality Suite, Print Quality Benchmark, optional accounts, optional sync, a mobile companion, and read-only integrations.

## Legal and compliance placeholders

The preliminary legal/compliance routes remain draft placeholders for planning and future qualified review:

- `/privacy` describes the current static website status, the local-first desktop app direction, conditional future categories such as license email, device hash, activation data, diagnostic logs, optional account, optional cloud backup, future mobile companion data, and print quality photos if implemented.
- `/terms` describes draft website-use expectations, product-development status, preliminary website information, support boundaries, warranty-style caution, and future update needs before public release.
- `/license-terms` records that no final app license, catalog license, license-key process, entitlement model, device activation model, account recovery model, or Founder-license model has been selected.
- `/refund-policy` states that the current site has no purchases, paid plans, checkout, payment processor, app store distribution, license keys, or public download links, and that future paid catalogs or Early Supporter purchases need reviewed refund/commercial policy before launch.
- `/manufacturer-disclaimer` reinforces that NozzleNote by BMR is independent; manufacturer names are for compatibility/context only; trademarks belong to their owners; and supported profiles or verified catalogs may change over time.

These pages are **draft placeholders only**. They are not final legal advice, do not claim compliance with LGPD, GDPR, CCPA, or any other law, and should be reviewed before public release, payment processing, app distribution, analytics, support intake, or commercial availability.

Milestone 12 updates Download, Support, Privacy, Terms, License Terms, Refund Policy, and Manufacturer Disclaimer consistency without adding real downloads, purchases, accounts, backend services, analytics, forms, payment links, or final legal claims.

## Milestone 12 scope

Milestone 12 focuses on Download, Support, and Legal consistency. It does not redesign the site, add backend services, add analytics, add checkout, add forms, add real app downloads, create pricing pages, create an Early Supporters page, or claim the app is publicly available.

The Milestone 12 pass includes:

- `/download` wording that says NozzleNote is not publicly available yet and describes the planned free desktop Core release focus without real download links;
- a release checklist covering Windows build, version number, installer or portable package, release notes, known limitations, backup guidance, support scope, manufacturer disclaimer, privacy notice, and reviewed terms/license placeholders;
- `/support` wording that limits current public support to website information and development updates;
- future/planned support categories for installation issues, app usage, backup/restore, license activation, catalog import, and diagnostic export;
- out-of-scope support language for printer repair, warranty claims, manufacturer support, unsafe maintenance instructions, manufacturer-owned troubleshooting, and direct printer control;
- legal-page consistency using NozzleNote by BMR as the product name while preserving preliminary/draft legal status and `noindex`;
- planned/conditional privacy categories without implying current cloud, account, license, diagnostic, mobile, or quality-photo collection;
- planned license model language for Free Core, paid verified catalogs, license keys, entitlements, device activation, future account claim/recovery, and possible Founder licenses if an Early Supporter program is later launched;
- refund-policy caution that no purchases, paid plans, checkout, or payment processor currently exists and future paid catalogs or Early Supporter purchases require reviewed policy before launch;
- strong manufacturer-independence language and internal links among Download, Support, Catalogs, Roadmap, and legal pages.

Remaining follow-up tasks include Early Supporters/crowdfunding page planning, visual QA after deployment, and qualified legal review before any public release, payment flow, account flow, cloud feature, licensing system, or commercial launch.


## Milestone 13 scope

Milestone 13 focuses on Early Supporters and launch funding preparation only. It does not add backend services, analytics, checkout, payment processing, forms, newsletter signup, real downloads, installers, binaries, payment links, manufacturer logos, partnership claims, pricing pages, real pledge tiers, payment buttons, or live campaign claims.

The Milestone 13 pass includes:

- `/early-supporters` as a static placeholder titled “NozzleNote Early Supporter Campaign”;
- cautious positioning that a future early supporter campaign may help fund code signing, documentation, catalog packaging, website polish, release testing, and final launch preparation;
- clear status language that the campaign is not live yet, rewards are not final, no payment is collected, and no purchase, pledge, license, catalog, account, mobile access, or public release is available through the page;
- possible reward examples under review, including Founder badge, early access, a defined BMR Verified Catalog license, printable maintenance kit, name in credits, and All Access for a defined period;
- explicit boundaries against indefinite all-inclusive access, every-future-catalog promises, firm delivery dates, manufacturer support or affiliation claims, and current mobile availability claims;
- a pre-campaign launch readiness checklist covering reviewed terms, reviewed refund/commercial policy, clear reward definitions, support scope, product build status, catalog scope, delivery expectations, manufacturer disclaimer, privacy notice, and license activation planning;
- internal links from Early Supporters to Roadmap, Download, Catalogs, Support, Refund Policy, License Terms, and Manufacturer Disclaimer;
- a roadmap cross-link that presents early supporter/crowdfunding planning as a future commercial path, not a live campaign;
- footer links to the Early Supporters placeholder while keeping the primary header unchanged to avoid navigation crowding;
- expected generated-route coverage for `/early-supporters/` in `scripts/check-internal-links.mjs`.

Remaining follow-up tasks include visual QA after deployment, qualified legal review before any commercial flow, real campaign planning, final reward definition, support-scope definition, payment/refund workflow review, license activation planning, and product release planning.


## Milestone 16 scope

Milestone 16 finalizes the public commercial rebrand from NozzleNote's earlier naming to **NozzleNote by BMR** and prepares the repository for a future AI Designer visual direction pass. It does not redesign the site, add backend services, add analytics, add checkout, add forms, add real app downloads, create pricing pages, make the Early Supporters campaign live, add manufacturer logos, or claim public app availability.

The Milestone 16 pass includes:

- public website copy, metadata, Open Graph site name, web manifest, favicon accessibility labels, docs, legal drafts, support, download, catalogs, roadmap, and Early Supporters language using **NozzleNote by BMR**;
- `https://nozzlenote.com` preserved as the production domain with root-relative internal routes and no production base path;
- `public/CNAME` preserved with `nozzlenote.com` for GitHub Pages custom-domain artifacts;
- BMR Verified Catalog language kept cautious, independent, and clearly planned rather than currently available;
- manufacturer independence language preserved across public pages;
- `docs/design-direction-intake.md` added so a future AI Designer can provide visual personality, palette, typography, logo/wordmark, icon, illustration, section, card, CTA, mobile, accessibility, examples, and avoid-list direction before visual changes are implemented;
- comments in `src/styles/tokens.css` and `src/styles/global.css` documenting where future visual tokens and global visual structure should live.

Remaining follow-up tasks include visual QA after deployment, qualified legal review before any commercial flow, and a separate visual-direction implementation milestone after the AI Designer output is reviewed.

## Getting started

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Astro will print the local URL. The production deployment is served from the domain root, so local development and preview checks should open the root URL Astro reports, usually `http://localhost:4321/` for development or the root path shown by `npm run preview`.

## Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Astro development server. |
| `npm run build` | Build the production site into `dist/`. |
| `npm run preview` | Preview the production build locally. |
| `npm run astro` | Run Astro CLI commands. |
| `npx astro check` | Run Astro diagnostics and TypeScript checks. |
| `npm run check:links` | Check generated HTML in `dist/` for expected root-domain routes, internal links, assets, and anchors after `npm run build`. |

## Testing the setup

Run the production build check:

```bash
npm run build
```

Run Astro diagnostics and TypeScript checks:

```bash
npx astro check
```

After building, check generated HTML route coverage and internal links:

```bash
npm run check:links
```

Check for whitespace errors before committing:

```bash
git diff --check
```

Optionally start the dev server and open the homepage, support hub, documentation hub, release-preparation placeholder, or draft legal pages in a browser:

```bash
npm run dev
```

## Deployment preparation

NozzleNote by BMR is still in development, and the public app release is not available yet. Deployment preparation for the website should stay static and conservative.

### Local production build

Build the static website:

```bash
npm run build
```

Astro writes the production output to `dist/`. That generated directory is the expected static output for deployment.

Preview the production build locally:

```bash
npm run preview
```

### GitHub Pages custom-domain deployment

This repository is configured for GitHub Pages deployment at the custom production domain:

```text
https://nozzlenote.com/
```

The custom domain serves the site from the domain root. `astro.config.mjs` sets `site` to `https://nozzlenote.com` and does not set an Astro `base` path, so internal links, footer links, documentation links, legal links, the favicon, the web manifest, and generated Astro assets are emitted from root paths such as `/features/`, `/favicon.svg`, and `/_astro/...`.

Deployment uses GitHub Actions through `.github/workflows/deploy-github-pages.yml`; do not commit the generated `dist/` directory. The repository includes `public/CNAME` with `nozzlenote.com` so the generated Pages artifact preserves the custom-domain setting. Pedro must set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**, confirm the custom domain is `nozzlenote.com`, then push to `main` or run the workflow manually.

The old GitHub Project Pages preview path is no longer the target deployment path for production. The site should not depend on a repository base path in production.

See `docs/deployment-preview.md` for detailed GitHub Pages settings, workflow behavior, custom-domain risks, and the manual visual test checklist.

Do not add analytics, tracking scripts, cookies, checkout, authentication, contact forms, newsletter integrations, public downloads, installers, binaries, or signup forms as part of this static deployment preview task.

### Pre-deploy checklist

Before any deployment candidate is shared publicly:

- run `npm run build`;
- run `npx astro check`;
- run `npm run check:links` after `npm run build` to validate root-domain routes, assets, and anchors;
- run `git diff --check`;
- preview the generated site with `npm run preview` when possible and open the root path;
- confirm route titles and meta descriptions are present;
- confirm draft legal pages remain preliminary and do not claim full legal compliance;
- confirm `/download` still avoids real download links and states that public release is not available yet;
- confirm manufacturer independence language remains visible and no manufacturer logos are used;
- recheck root-path asset loading, canonical URL behavior, and sitemap strategy against `https://nozzlenote.com/` before public launch changes.

See `docs/deployment-checklist.md` for deployment preparation notes and `docs/launch-readiness-checklist.md` for the Milestone 9 final review checklist.

## Milestone 6 scope

Milestone 6 focuses only on legal and compliance placeholder pages for future review:

- Create `/privacy`, `/terms`, `/license-terms`, `/refund-policy`, and `/manufacturer-disclaimer` as static Astro routes.
- Add reusable legal components for a shared legal-page shell, draft notice, and content sections.
- Add draft legal links to the footer.
- Add cross-links between legal pages, Support, Download, and Roadmap where helpful.
- Keep all legal copy conservative, preliminary, and subject to review.
- Avoid claiming full legal compliance, public availability, paid plans, final software licensing, app store distribution, or refunds before those items exist.
- Reinforce local-first data direction without overstating final implementation details.
- Reinforce that NozzleNote by BMR is independent from 3D printer manufacturers.


## Milestone 7 scope

Milestone 7 focuses only on visual polish, responsive behavior, and accessibility basics for the existing static website. It does not redesign the site from scratch, rewrite the public copy, add integrations, add real downloads, or change the meaning of legal/compliance pages.

The polish pass includes:

- shared visible focus states for links and controls;
- a skip link that points keyboard users to the main page content;
- reduced-motion handling for smooth scrolling, transitions, and hover movement;
- slightly refined spacing, card surfaces, CTA sizing, and page rhythm;
- improved header wrapping for small screens without JavaScript;
- improved footer column behavior on tablet and mobile widths;
- more consistent docs, support, download, and legal page reading rhythm;
- conservative CSS utilities only where they keep the project simple and beginner-friendly.

The app is still in development, the public release is not available yet, legal pages remain preliminary placeholders, and NozzleNote by BMR remains independent from 3D printer manufacturers.

## Milestone 8 scope

Milestone 8 focuses only on SEO, metadata, static browser support files, and deployment preparation. It does not redesign the site, add integrations, add analytics, add a sitemap, add public downloads, or change the meaning of the preliminary legal/compliance pages.

The SEO and deployment pass includes:

- shared metadata support in `BaseLayout.astro`;
- page-specific titles and meta descriptions across public routes;
- Open Graph and Twitter/X summary-card basics;
- optional `noindex` metadata for preliminary legal pages;
- safe canonical handling based on the configured Astro `site` value;
- static `robots.txt`, `site.webmanifest`, `favicon.svg`, and `public/brand/` PNG logo asset references;
- README deployment preparation instructions;
- a short `docs/deployment-checklist.md` file.

The app is still in development, the public release is not available yet, legal pages remain preliminary placeholders, and NozzleNote by BMR remains independent from 3D printer manufacturers.

## Milestone 9 final review notes

Milestone 9 focuses only on final static-site review and launch-readiness documentation. It does not redesign the site, rewrite the public copy, add integrations, add analytics, add a backend, add real downloads, add payment links, add signup forms, or change the preliminary legal/compliance meaning.

The final review pass includes:

- route coverage review for the homepage, feature page, documentation hub, documentation guides, roadmap, support, download placeholder, and draft legal pages;
- generated HTML internal-link checking through `npm run check:links` after `npm run build`;
- conservative-claims review for phrases such as immediate-download wording, manufacturer service support, machine-made fault finding, machine-learning features, cloud sync, public availability, partnership, and jurisdiction-specific privacy compliance claims;
- README status updates that clarify the website is static, the app is still in development, public release is not available yet, legal pages are preliminary, and no analytics/backend/downloads are implemented;
- a launch readiness checklist in `docs/launch-readiness-checklist.md`.

Recommended next steps after Milestone 9:

- Review generated metadata in a deployed preview environment only after a real hosting target exists.
- Confirm the final production domain before adding sitemap output or changing canonical strategy.
- Review the favicon, PNG app icons, header logo, and browser metadata in real browsers.
- Review legal placeholders with an attorney or qualified reviewer and update them based on actual distribution, support, hosting, and data practices.
- Define a real support contact flow before adding contact forms, ticketing, or email collection.
- Add release notes only if a public or private build process exists.
- Add installation documentation only when supported desktop platforms and packaging approach are known.
- Add more concrete printer profile or catalog documentation only after implemented app behavior is verified.

## Brand and manufacturer disclaimer

NozzleNote by BMR is an independent product and is not affiliated with, endorsed by, sponsored by, or officially connected to Bambu Lab, Creality, Anycubic, Prusa, or any other 3D printer manufacturer. This website must not use manufacturer logos or imply partnership, endorsement, sponsorship, or affiliation.
