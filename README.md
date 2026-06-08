# BMR PrintCare Website

Official website and documentation hub for BMR PrintCare, a local-first desktop app for 3D printer maintenance tracking.

This repository is currently in **Milestone 7 — Visual Polish, Responsiveness, and Accessibility Pass**. It contains the Astro + TypeScript foundation, the structured dark landing page, shared site navigation, conservative feature positioning, beginner-friendly documentation drafts, an expanded static support hub, a release-preparation download placeholder with no real download links, preliminary legal/compliance placeholder pages for future review, and a lightweight visual/accessibility polish pass across the static site.

## Tech stack

- [Astro](https://astro.build/) for the website framework
- TypeScript for safer project configuration and future code
- Plain CSS for global styles, section styling, layout styling, documentation styling, support styling, release checklist styling, accessibility states, responsive behavior, and design tokens

## Project structure

```text
src/
  components/
    content/       Reusable content cards, grids, notes, FAQ, and release checklist components
    docs/          Reusable documentation cards, grid, layout, and navigation
    layout/        Shared site header and footer components
    legal/         Reusable legal placeholder layout, section, and draft notice components
    sections/      Reusable homepage landing page sections
  layouts/         Page layouts used by routes
  pages/           Static Astro routes
    docs/          Documentation hub and beginner guide routes
  styles/          Global CSS and design tokens
```

The homepage is composed from small section components in `src/components/sections/`:

- `HeroSection.astro`
- `ProblemSection.astro`
- `SolutionSection.astro`
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

- `SiteHeader.astro` provides the primary navigation: Home, Features, Docs, Roadmap, Download, and Support.
- `SiteFooter.astro` provides product links, resource links, draft legal links, the manufacturer independence note, and the copyright notice.

`BaseLayout.astro` imports the global stylesheet, provides the shared skip link target, and renders the shared header and footer around every page.

## Current routes

| Route | Purpose | Status |
| --- | --- | --- |
| `/` | Premium dark landing page for BMR PrintCare. | Live structure |
| `/features` | Feature overview for product direction, core maintenance tracking, local-first positioning, and roadmap-only feature notes. | Initial content |
| `/docs` | Documentation hub with links to beginner-friendly guide drafts and cross-links to Features, Roadmap, Download, and Support. | Expanded draft |
| `/docs/getting-started` | Beginner overview for the intended maintenance workflow without public download instructions. | Draft |
| `/docs/printer-profiles` | Guide draft explaining printer profiles and manufacturer-independent profile notes. | Draft |
| `/docs/maintenance-history` | Guide draft for dated maintenance records, service notes, and practical history review. | Draft |
| `/docs/preventive-maintenance` | Guide draft for preventive maintenance reminders and their limits. | Draft |
| `/docs/parts-and-consumables` | Guide draft for replacement parts, consumables, and compatibility caution. | Draft |
| `/docs/local-first-data` | Guide draft for local-first data direction, backups, exports, and legal-page readiness. | Draft |
| `/roadmap` | Public roadmap placeholder for website, documentation, support, and release planning. | Updated placeholder |
| `/download` | Conservative release-preparation placeholder that states public release is not available yet and provides no real download links. | Placeholder |
| `/support` | Static support hub with documentation links, FAQ, current limitations, release-readiness notes, draft legal links, and manufacturer independence guidance. | Expanded hub |
| `/privacy` | Preliminary privacy notice covering current static-site data collection status, local-first data direction, and future review needs. | Draft placeholder |
| `/terms` | Preliminary terms of use covering website use, development status, acceptable use, and future updates. | Draft placeholder |
| `/license-terms` | Preliminary license terms placeholder noting that no final app license or distribution model has been selected. | Draft placeholder |
| `/refund-policy` | Preliminary refund policy placeholder noting that there are no purchases, paid plans, checkout, or public app release yet. | Draft placeholder |
| `/manufacturer-disclaimer` | Manufacturer independence disclaimer stating no affiliation, sponsorship, endorsement, or official partnership with printer manufacturers. | Draft placeholder |

## Documentation structure

The documentation system remains intentionally simple. The docs are regular static Astro pages under `src/pages/docs/`, supported by a small reusable docs layout and navigation component. There is no documentation engine, content collection, search integration, backend, authentication, analytics, checkout flow, or newsletter integration.

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

Milestone 5 expands support and release messaging without changing the site into a product download portal.

The `/support` route now includes:

- a support hero with links to documentation and release preparation;
- before-support guidance;
- direct documentation links;
- a public-facing release-readiness checklist;
- static FAQ content about app availability, supported printers, local-first data, maintenance records, documentation status, and manufacturer independence;
- current limitations;
- manufacturer independence guidance;
- internal links to Features, Roadmap, Docs, and Download.

The `/download` route is a placeholder for release preparation only. It clearly states:

- public release is not available yet;
- there are no installers, binaries, purchase links, beta signup forms, checksums, or release dates yet;
- no real download buttons or download files are published;
- release notes, support expectations, documentation updates, known limitations, local-first data guidance, and independence language should be ready before real files are added.

## Feature positioning

The `/features` page explains these areas in English:

- printer profiles;
- maintenance history;
- preventive maintenance planning;
- parts and consumables records;
- local-first data direction;
- future official catalogs;
- future calibration and print-quality tracking as roadmap-only ideas.

The site should avoid claims about direct printer integrations, cloud sync, AI features, automatic diagnostics, mobile apps, paid plans, or official manufacturer partnerships unless a later milestone explicitly adds accurate supporting material.

## Legal and compliance placeholders

Milestone 6 adds preliminary legal/compliance routes for planning and future attorney review:

- `/privacy` describes the current static website status, the local-first desktop app direction, and the need to document real hosting/logging details before launch.
- `/terms` describes draft website-use expectations, product-development status, acceptable use, warranty-style caution, and future update needs.
- `/license-terms` records that no final app license or distribution model has been selected in this website repository.
- `/refund-policy` states that the current site has no purchases, paid plans, checkout, app store distribution, license keys, or public download links.
- `/manufacturer-disclaimer` reinforces that BMR PrintCare is independent and is not affiliated with, sponsored by, endorsed by, approved by, or officially connected to any 3D printer manufacturer.

These pages are **draft placeholders only**. They are not final legal advice, do not claim compliance with LGPD, GDPR, CCPA, or any other law, and should be reviewed before public release, payment processing, app distribution, analytics, support intake, or commercial availability.

Future routes may still include `/catalogs`. The `/download` page remains conservative release-preparation messaging only.

## Getting started

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Astro will print the local URL, usually `http://localhost:4321`.

## Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Astro development server. |
| `npm run build` | Build the production site into `dist/`. |
| `npm run preview` | Preview the production build locally. |
| `npm run astro` | Run Astro CLI commands. |
| `npx astro check` | Run Astro diagnostics and TypeScript checks. |

## Testing the setup

Run the production build check:

```bash
npm run build
```

Run Astro diagnostics and TypeScript checks:

```bash
npx astro check
```

Check for whitespace errors before committing:

```bash
git diff --check
```

Optionally start the dev server and open the homepage, support hub, documentation hub, release-preparation placeholder, or draft legal pages in a browser:

```bash
npm run dev
```

## Milestone 6 scope

Milestone 6 focuses only on legal and compliance placeholder pages for future review:

- Create `/privacy`, `/terms`, `/license-terms`, `/refund-policy`, and `/manufacturer-disclaimer` as static Astro routes.
- Add reusable legal components for a shared legal-page shell, draft notice, and content sections.
- Add draft legal links to the footer.
- Add cross-links between legal pages, Support, Download, and Roadmap where helpful.
- Keep all legal copy conservative, preliminary, and subject to review.
- Avoid claiming full legal compliance, public availability, paid plans, final software licensing, app store distribution, or refunds before those items exist.
- Reinforce local-first data direction without overstating final implementation details.
- Reinforce that BMR PrintCare is independent from 3D printer manufacturers.


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

The app is still in development, the public release is not available yet, legal pages remain preliminary placeholders, and BMR PrintCare remains independent from 3D printer manufacturers.

## Milestone 8 suggestions

Milestone 8 should continue only after the visual/accessibility pass has been reviewed and product or release requirements become clearer. Good next steps include:

- Review the Milestone 7 polish in real browsers and on physical mobile/tablet devices.
- Run a basic accessibility review with keyboard navigation and automated tooling once the site is deployed or previewed.
- Review legal placeholders with an attorney or qualified reviewer and update them based on actual distribution, support, hosting, and data practices.
- Define a real support contact flow before adding contact forms, ticketing, or email collection.
- Add release notes only if a public or private build process exists.
- Add installation documentation only when supported desktop platforms and packaging approach are known.
- Add more concrete printer profile or catalog documentation only after implemented app behavior is verified.

## Brand and manufacturer disclaimer

BMR PrintCare is an independent product. This website must not use manufacturer logos or imply official partnership, endorsement, sponsorship, or affiliation with Bambu Lab, Creality, Prusa, Anycubic, or any other 3D printer manufacturer.
