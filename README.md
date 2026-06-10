# NozzleNote by BMR

NozzleNote by BMR is a local-first desktop maintenance logbook for 3D printer care. This repository contains the Astro static website for the product and its release-preparation pages.

## Current status

- Website and product are in development.
- The desktop app is not publicly available yet.
- No checkout, paid catalog, license activation, cloud sync, account system, mobile app, printer integration, or active support desk workflow is live.
- The production domain is `https://nozzlenote.com`.
- GitHub Pages deployment is root-domain safe and must not depend on a legacy repository subpath.
- Legal and commercial pages are preliminary placeholders until reviewed by a qualified professional, except that the Privacy Notice describes current conditional GA4 website analytics behavior when configured.

## Source of truth

Use `NozzleNote_Final_Site_App_Content_Document_v1_legal_updates.md` as the current content source of truth for public copy and claim boundaries. See `docs/content-source-of-truth.md` for maintenance guidance.

## Development

```bash
npm install
npm run build
npm run check:links
npx astro check
```

## Analytics

Conditional GA4 is implemented globally through `GoogleAnalytics.astro` and `BaseLayout.astro`. The standard GA4 script renders only when `PUBLIC_GA_MEASUREMENT_ID` is set to a valid measurement ID. Do not hardcode production measurement IDs into page components, do not add custom analytics events, and do not send personal app or support data to GA4.

## Manufacturer independence

NozzleNote by BMR is an independent product and is not affiliated with, endorsed by, sponsored by, certified by, reviewed by, or officially connected to Bambu Lab, Creality, Anycubic, Prusa, or any other 3D printer manufacturer. Manufacturer and product names may be referenced only to help users describe their own equipment or future compatibility context.

## Legacy/internal note

The repository path may still contain the legacy/internal project name `bmr-printcare-site`. Do not use BMR PrintCare as a public-facing product name.
