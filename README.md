# BMR PrintCare Website

Official website and documentation hub for BMR PrintCare, a local-first desktop app for 3D printer maintenance tracking.

This repository is currently in **Milestone 5 — Support, Release Readiness and Download Messaging**. It contains the Astro + TypeScript foundation, the structured dark landing page, shared site navigation, conservative feature positioning, beginner-friendly documentation drafts, an expanded static support hub, and a release-preparation download placeholder with no real download links.

## Tech stack

- [Astro](https://astro.build/) for the website framework
- TypeScript for safer project configuration and future code
- Plain CSS for global styles, section styling, layout styling, documentation styling, support styling, release checklist styling, and design tokens

## Project structure

```text
src/
  components/
    content/       Reusable content cards, grids, notes, FAQ, and release checklist components
    docs/          Reusable documentation cards, grid, layout, and navigation
    layout/        Shared site header and footer components
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

The shared site chrome is composed from layout components in `src/components/layout/`:

- `SiteHeader.astro` provides the primary navigation: Home, Features, Docs, Roadmap, Download, and Support.
- `SiteFooter.astro` provides product links, resource links, future legal placeholders, the manufacturer independence note, and the copyright notice.

`BaseLayout.astro` imports the global stylesheet and renders the shared header and footer around every page.

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
| `/support` | Static support hub with documentation links, FAQ, current limitations, release-readiness notes, and manufacturer independence guidance. | Expanded hub |

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

## Future route notes

Future routes may include `/catalogs`, `/privacy`, `/terms`, `/license-terms`, `/refund-policy`, and `/manufacturer-disclaimer`.

Legal pages are intentionally kept as documented future routes for now. They should be created in a later milestone when the product, availability model, support expectations, and required legal copy are clearer. The `/download` page exists now, but only as conservative release-preparation messaging.

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

Optionally start the dev server and open the homepage, support hub, documentation hub, or release-preparation placeholder in a browser:

```bash
npm run dev
```

## Milestone 5 scope

Milestone 5 focuses only on support, release readiness, and conservative download messaging:

- Expand `/support` from a placeholder into a useful static support hub.
- Add FAQ content for availability, supported printers, local-first data, maintenance records, documentation status, and manufacturer independence.
- Add release-readiness checklist content without announcing a public release.
- Create `/download` as a placeholder route for release preparation only.
- Add `/download` to shared navigation because the page now exists, while avoiding “Download now” language.
- Add internal links between Support, Docs, Roadmap, Features, and Download.
- Keep the site static, beginner-friendly, maintainable, and manufacturer-independent.
- Avoid real download links, backend features, checkout, analytics, authentication, newsletter integration, full legal pages, manufacturer logos, endorsement claims, and public availability claims.

## Milestone 6 suggestions

Milestone 6 should continue only after the product and release requirements are clearer. Good next steps include:

- Decide whether accurate legal placeholder pages are ready to draft.
- Add real release notes only if a public or private build process exists.
- Add installation documentation only when the supported desktop platforms and packaging approach are known.
- Expand support instructions only when the support channel and expected response scope are defined.
- Add more concrete printer profile or catalog documentation only after implemented app behavior is verified.

## Brand and manufacturer disclaimer

BMR PrintCare is an independent product. This website must not use manufacturer logos or imply official partnership, endorsement, sponsorship, or affiliation with Bambu Lab, Creality, Prusa, Anycubic, or any other 3D printer manufacturer.
