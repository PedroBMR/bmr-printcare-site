# BMR PrintCare Website

Official website and documentation hub for BMR PrintCare, a local-first desktop app for 3D printer maintenance tracking.

This repository is currently in **Milestone 4 — Documentation Hub Expansion**. It contains the Astro + TypeScript foundation, the structured dark landing page, shared site navigation, conservative feature positioning, and a beginner-friendly static documentation hub with initial guide pages.

## Tech stack

- [Astro](https://astro.build/) for the website framework
- TypeScript for safer project configuration and future code
- Plain CSS for global styles, section styling, layout styling, documentation styling, and design tokens

## Project structure

```text
src/
  components/
    content/       Reusable content cards, grids, and notes for product pages
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

The feature overview uses reusable content components in `src/components/content/`:

- `FeatureCard.astro`
- `FeatureGrid.astro`
- `StatusNote.astro`

The documentation hub uses reusable docs components in `src/components/docs/`:

- `DocsCard.astro`
- `DocsGrid.astro`
- `DocsLayout.astro`
- `DocsNav.astro`

The shared site chrome is composed from layout components in `src/components/layout/`:

- `SiteHeader.astro` provides the primary navigation: Home, Features, Docs, Roadmap, and Support.
- `SiteFooter.astro` provides product links, resource links, future legal placeholders, the manufacturer independence note, and the copyright notice.

`BaseLayout.astro` imports the global stylesheet and renders the shared header and footer around every page.

## Current routes

| Route | Purpose | Status |
| --- | --- | --- |
| `/` | Premium dark landing page for BMR PrintCare. | Live structure |
| `/features` | Feature overview for product direction, core maintenance tracking, local-first positioning, and roadmap-only feature notes. | Initial content |
| `/docs` | Documentation hub with links to beginner-friendly guide drafts and cross-links to Features, Roadmap, and Support. | Expanded draft |
| `/docs/getting-started` | Beginner overview for the intended maintenance workflow without public download instructions. | Draft |
| `/docs/printer-profiles` | Guide draft explaining printer profiles and manufacturer-independent profile notes. | Draft |
| `/docs/maintenance-history` | Guide draft for dated maintenance records, service notes, and practical history review. | Draft |
| `/docs/preventive-maintenance` | Guide draft for preventive maintenance reminders and their limits. | Draft |
| `/docs/parts-and-consumables` | Guide draft for replacement parts, consumables, and compatibility caution. | Draft |
| `/docs/local-first-data` | Guide draft for local-first data direction, backups, exports, and legal-page readiness. | Draft |
| `/roadmap` | Public roadmap placeholder for website and release planning. | Placeholder |
| `/support` | Support placeholder with links to documentation drafts and future support expectations. | Placeholder |

## Documentation structure

Milestone 4 keeps the documentation system intentionally simple. The docs are regular static Astro pages under `src/pages/docs/`, supported by a small reusable docs layout and navigation component. There is no documentation engine, content collection, search integration, backend, authentication, analytics, or checkout flow.

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
- Support and feedback links

The app is still in development, so documentation should continue to use conservative language such as “designed to”, “intended to”, “planned”, “in development”, and “documentation in progress” where appropriate. Do not add public app installation instructions or real download links until a later release-readiness milestone explicitly supports them.

## Feature positioning

Milestone 3 added conservative product positioning, and Milestone 4 links the documentation back to those feature areas.

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

Future routes may include `/catalogs`, `/download`, `/privacy`, `/terms`, `/license-terms`, `/refund-policy`, and `/manufacturer-disclaimer`.

Legal pages are intentionally kept as documented future routes for now. They should be created in a later milestone when the product, availability model, support expectations, and required legal copy are clearer.

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

Optionally start the dev server and open the homepage or documentation hub in a browser:

```bash
npm run dev
```

## Milestone 4 scope

Milestone 4 focuses only on documentation hub expansion:

- Expand `/docs` from a placeholder into a more useful documentation hub.
- Add initial static guide pages for beginner documentation topics.
- Add a simple docs navigation structure without a complex documentation engine.
- Keep documentation clear, conservative, and marked as draft or in progress.
- Add internal links between Docs, Features, Roadmap, and Support where useful.
- Keep the site static, beginner-friendly, and maintainable.
- Avoid public app download instructions while the app is not publicly available.
- Avoid manufacturer logos, endorsement claims, and affiliation language.

## Milestone 5 suggestions

Milestone 5 should build on the documentation foundation without overpromising product availability. Good next steps include:

- Improve support content now that initial documentation routes exist.
- Add a simple release-readiness checklist for future public availability.
- Clarify planned download messaging without adding real download links yet.
- Decide whether basic legal placeholder routes are ready for accurate copy.
- Add more concrete documentation only after implemented app behavior is verified.

## Brand and manufacturer disclaimer

BMR PrintCare is an independent product. This website must not use manufacturer logos or imply official partnership, endorsement, sponsorship, or affiliation with Bambu Lab, Creality, Prusa, Anycubic, or any other 3D printer manufacturer.
