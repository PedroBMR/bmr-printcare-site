# BMR PrintCare Website

Official website and documentation hub for BMR PrintCare, a local-first desktop app for 3D printer maintenance tracking.

This repository is currently in **Milestone 0 — Setup**. It contains the Astro + TypeScript foundation only. The full landing page, documentation content, legal pages, and visual design system will be added in later milestones.

## Tech stack

- [Astro](https://astro.build/) for the website framework
- TypeScript for safer project configuration and future code
- Plain CSS for initial global styles and design tokens

## Project structure

```text
src/
  components/      Shared UI components for future milestones
  data/            Static content and configuration data
  layouts/         Page layouts
  pages/           Astro routes
  styles/          Global CSS and design tokens
```

Future routes are expected to include `/features`, `/catalogs`, `/download`, `/roadmap`, `/support`, `/privacy`, `/terms`, `/license-terms`, `/refund-policy`, `/manufacturer-disclaimer`, and `/docs`.

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

## Testing the setup

Run the production build check:

```bash
npm run build
```

Optionally start the dev server and open the homepage in a browser:

```bash
npm run dev
```

## Milestone 1 preview

Milestone 1 should focus on the first visual foundation of the website:

- Define the initial landing page content structure.
- Expand reusable layout and section components.
- Establish the dark premium SaaS-style visual direction.
- Add responsive spacing and typography rules.
- Keep all public website copy in English.

## Brand and manufacturer disclaimer

BMR PrintCare is an independent product. This website must not use manufacturer logos or imply official partnership with Bambu Lab, Creality, Prusa, Anycubic, or any other 3D printer manufacturer.
