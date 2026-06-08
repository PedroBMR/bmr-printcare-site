# BMR PrintCare Website

Official website and documentation hub for BMR PrintCare, a local-first desktop app for 3D printer maintenance tracking.

This repository is currently in **Milestone 3 — Product Features and Public Positioning**. It contains the Astro + TypeScript foundation, the structured dark landing page, shared site navigation, placeholder documentation/support routes, and an initial `/features` route with conservative product positioning.

## Tech stack

- [Astro](https://astro.build/) for the website framework
- TypeScript for safer project configuration and future code
- Plain CSS for global styles, section styling, layout styling, and design tokens

## Project structure

```text
src/
  components/
    content/       Reusable content cards, grids, and notes for product pages
    layout/        Shared site header and footer components
    sections/      Reusable homepage landing page sections
  layouts/         Page layouts used by routes
  pages/           Static Astro routes
    docs/          Initial documentation hub route
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

The shared site chrome is composed from layout components in `src/components/layout/`:

- `SiteHeader.astro` provides the primary navigation: Home, Features, Docs, Roadmap, and Support.
- `SiteFooter.astro` provides product links, resource links, future legal placeholders, the manufacturer independence note, and the copyright notice.

`BaseLayout.astro` imports the global stylesheet and renders the shared header and footer around every page.

## Current routes

| Route | Purpose | Status |
| --- | --- | --- |
| `/` | Premium dark landing page for BMR PrintCare. | Live structure |
| `/features` | Initial feature overview for product direction, core maintenance tracking, local-first positioning, and roadmap-only feature notes. | Initial content |
| `/docs` | Initial documentation hub with planned beginner-friendly sections. | Placeholder |
| `/roadmap` | Public roadmap placeholder for website and release planning. | Placeholder |
| `/support` | Support placeholder for future help resources and documentation links. | Placeholder |

## Feature positioning

Milestone 3 keeps product claims conservative because the app is still in development and is not publicly available yet.

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

Optionally start the dev server and open the homepage in a browser:

```bash
npm run dev
```

## Milestone 3 scope

Milestone 3 focuses only on product features and public positioning:

- Add an initial `/features` page.
- Explain product feature areas in a manufacturer-independent way.
- Keep all claims conservative while the app is still in development.
- Mark calibration tracking and print-quality tracking as roadmap-only ideas, not current features.
- Add small reusable content components where they keep feature content organized.
- Add `/features` to primary navigation and footer links.
- Add internal links between Home, Features, Docs, Roadmap, and Support where useful.
- Keep the site static, beginner-friendly, and maintainable.
- Avoid real download links while the app is not publicly available.

## Milestone 4 suggestions

Milestone 4 should build on the static product positioning without adding complex integrations. Good next steps include:

- Expand the documentation hub with short beginner-friendly guide drafts.
- Define a simple public release readiness checklist.
- Clarify future catalog language and examples without adding manufacturer logos or endorsement claims.
- Improve support content once documentation topics are more stable.
- Add basic legal pages only when accurate legal copy is ready.

## Brand and manufacturer disclaimer

BMR PrintCare is an independent product. This website must not use manufacturer logos or imply official partnership, endorsement, sponsorship, or affiliation with Bambu Lab, Creality, Prusa, Anycubic, or any other 3D printer manufacturer.
