# BMR PrintCare Website

Official website and documentation hub for BMR PrintCare, a local-first desktop app for 3D printer maintenance tracking.

This repository is currently in **Milestone 2 — Header, Footer and Documentation Structure**. It contains the Astro + TypeScript foundation, the first structured homepage, shared site navigation, and initial placeholder routes for the future documentation and support experience.

## Tech stack

- [Astro](https://astro.build/) for the website framework
- TypeScript for safer project configuration and future code
- Plain CSS for global styles, section styling, layout styling, and design tokens

## Project structure

```text
src/
  components/
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

The shared site chrome is composed from layout components in `src/components/layout/`:

- `SiteHeader.astro` provides the primary navigation: Home, Docs, Roadmap, and Support.
- `SiteFooter.astro` provides product links, resource links, future legal placeholders, the manufacturer independence note, and the copyright notice.

`BaseLayout.astro` imports the global stylesheet and renders the shared header and footer around every page.

## Current routes

| Route | Purpose | Status |
| --- | --- | --- |
| `/` | Premium dark landing page for BMR PrintCare. | Live structure |
| `/docs` | Initial documentation hub with planned beginner-friendly sections. | Placeholder |
| `/roadmap` | Public roadmap placeholder for website and release planning. | Placeholder |
| `/support` | Support placeholder for future help resources and documentation links. | Placeholder |

## Future route notes

Future routes may include `/features`, `/catalogs`, `/download`, `/privacy`, `/terms`, `/license-terms`, `/refund-policy`, and `/manufacturer-disclaimer`.

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

## Milestone 2 scope

Milestone 2 focuses only on lightweight navigation and documentation structure:

- Add a shared site header and footer.
- Integrate shared site chrome into `BaseLayout.astro`.
- Add placeholder pages for `/docs`, `/roadmap`, and `/support`.
- Add beginner-friendly documentation hub sections without creating a full documentation system.
- Document legal pages as future routes without creating full legal content yet.
- Improve responsive navigation using HTML and CSS only.
- Keep all public website copy, file names, components, and docs in English.
- Avoid real download links while the app is not publicly available.

## Milestone 3 suggestions

Milestone 3 should build on this structure without changing the static, beginner-friendly foundation. Good next steps include:

- Expand product feature content with clear, non-manufacturer-specific explanations.
- Add more detailed documentation drafts for the app workflow once product decisions are stable.
- Define responsible public release messaging before adding any download route.
- Add basic legal pages only when accurate legal copy is ready.
- Keep the site static unless a later milestone explicitly requires an integration.

## Brand and manufacturer disclaimer

BMR PrintCare is an independent product. This website must not use manufacturer logos or imply official partnership, endorsement, sponsorship, or affiliation with Bambu Lab, Creality, Prusa, Anycubic, or any other 3D printer manufacturer.
