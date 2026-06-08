# BMR PrintCare Website

Official website and documentation hub for BMR PrintCare, a local-first desktop app for 3D printer maintenance tracking.

This repository is currently in **Milestone 1 — Landing Page Structure**. It contains the Astro + TypeScript foundation plus the first structured, static homepage for the official BMR PrintCare website.

## Tech stack

- [Astro](https://astro.build/) for the website framework
- TypeScript for safer project configuration and future code
- Plain CSS for global styles, section styling, and design tokens

## Project structure

```text
src/
  components/
    sections/      Reusable homepage landing page sections
  data/            Static content and configuration data for future milestones
  layouts/         Page layouts
  pages/           Astro routes
  styles/          Global CSS and design tokens
```

The current homepage is composed from small section components in `src/components/sections/`:

- `HeroSection.astro`
- `ProblemSection.astro`
- `SolutionSection.astro`
- `FeatureHighlights.astro`
- `LocalFirstSection.astro`
- `WorkflowPreview.astro`
- `DisclaimerSection.astro`
- `RoadmapCta.astro`

Future routes are expected to include `/features`, `/catalogs`, `/download`, `/roadmap`, `/support`, `/privacy`, `/terms`, `/license-terms`, `/refund-policy`, `/manufacturer-disclaimer`, and `/docs`. These pages are intentionally not created yet.

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

## Milestone 1 scope

Milestone 1 focuses only on the first landing page structure:

- Replace the placeholder homepage with structured sections.
- Add reusable section components.
- Improve the dark premium SaaS-style visual direction.
- Add responsive layout behavior for desktop and mobile.
- Keep all public website copy in English.
- Add a clear manufacturer independence disclaimer.
- Add a soft coming-soon roadmap CTA without real download links.

## Brand and manufacturer disclaimer

BMR PrintCare is an independent product. This website must not use manufacturer logos or imply official partnership, endorsement, sponsorship, or affiliation with Bambu Lab, Creality, Prusa, Anycubic, or any other 3D printer manufacturer.
