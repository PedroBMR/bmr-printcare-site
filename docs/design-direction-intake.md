# Premium Violet Tech Visual Direction Implementation

Milestones 17 and 18 apply the approved **Premium Violet Tech** direction to NozzleNote by BMR while preserving the existing product strategy, cautious roadmap language, root-domain deployment, and preliminary legal posture.

## Applied visual direction

- The site now uses a darker premium graphite base with layered cyan/blue technical glows and restrained violet signature moments.
- Cyan/blue remains the technical foundation for focus, links, active navigation, grid lines, release/status emphasis, and primary interface clarity.
- Violet is intentionally controlled and used for brand/future accents, premium depth, planned-catalog moments, and selected surface glows rather than every component.
- Cards, panels, docs navigation, status banners, roadmap surfaces, CTAs, hover states, and focus states were refined in the shared global CSS so Home, Features, Catalogs, Docs, Roadmap, Download, Support, Early Supporters, and legal pages share the same visual system.
- The homepage hero now presents a maintenance workspace/logbook metaphor with next maintenance, recent service log, parts/cost summary, local data, and planned catalog cues. It does not show slicer, live printer-control, marketplace, or manufacturer-software visuals.

## Palette and pattern locations

Future visual tokens should continue to live in `src/styles/tokens.css`. The current core tokens include:

- `--color-background: #070A12`
- `--color-surface: #101624`
- `--color-surface-raised: #151D2E`
- `--color-text: #F8FAFC`
- `--color-text-muted: #A7B0C0`
- `--color-text-soft: #778195`
- `--color-brand-cyan: #39D0FF`
- `--color-brand-blue: #2563FF`
- `--color-brand-violet: #7C3AED`
- `--color-brand-violet-soft: #A78BFA`
- `--gradient-brand`
- `--gradient-violet-tech`

Global reusable patterns should continue to live in `src/styles/global.css`, including shared card surfaces, button/CTA treatments, focus states, status banners, docs readability patterns, roadmap grids, and reduced-motion behavior.

## Logo and asset handling

Pedro manually uploaded the final raster PNG logo assets for the NozzleNote NN mark into `public/brand/`, including the header-sized `nozzlenote-nn-symbol-64.png`, app-icon exports at 192px and 512px, and the 32px PNG favicon fallback.

Milestone 18 integrates those already-uploaded assets without adding, modifying, or replacing binary files. The shared header now uses `/brand/nozzlenote-nn-symbol-64.png` as a compact decorative NN symbol beside the readable `NozzleNote` / `by BMR` text lockup. The hero maintenance workspace preview also uses the same real NN mark subtly inside the mock interface, rather than the temporary text/CSS mark.

`public/favicon.svg` remains the primary scalable favicon. `public/brand/favicon-32.png` is referenced as an alternate PNG favicon, and `public/site.webmanifest` now includes `/brand/nozzlenote-nn-symbol-192.png` and `/brand/nozzlenote-nn-symbol-512.png` while preserving `NozzleNote by BMR` and `NozzleNote` naming.

## Preserved constraints

- Public copy remains in English and continues to use `NozzleNote by BMR` or `NozzleNote`.
- Planned/future language remains cautious for paid catalogs, accounts, mobile companion, integrations, calibration, print quality tracking, cloud sync, and public downloads.
- Catalog language remains based on verified catalogs / BMR Verified Catalogs / BMR-maintained verified catalog packs, not manufacturer catalog claims.
- Legal pages remain preliminary and should remain noindexed where configured.
- Root-domain deployment remains the target: `https://nozzlenote.com`, no repository base path, and `public/CNAME` remains `nozzlenote.com`.

## Open future design work

- Visually audit the integrated PNG logo exports after deployment at the root custom domain.
- Consider a dedicated wordmark/lockup export if future branding needs a full horizontal logo beyond the header text lockup.
- Audit small favicon/app-icon rendering on real devices after deployment.
- Consider a lightweight hosted font only if it improves the interface without hurting performance; the current system stack remains acceptable and intentionally non-decorative.
- Continue refining per-page imagery only with maintenance-logbook metaphors, avoiding slicer, printer-control, marketplace, manufacturer, or partnership cues.
