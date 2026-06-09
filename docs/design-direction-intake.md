# Design Direction Intake for Future AI Designer

NozzleNote by BMR is structurally ready for a future visual identity pass, but this milestone intentionally keeps the existing dark/premium base intact. The next AI Designer should provide direction before new fonts, images, logos, large illustration assets, or a broader design system are added.

## Current product positioning

NozzleNote is a local-first maintenance logbook for 3D printers — built to track routines, parts, costs, incidents and print quality over time.

The site should continue to communicate that the desktop app is in development, public release is not available yet, BMR Verified Catalogs are planned optional content packs, and NozzleNote by BMR is independent from printer manufacturers.

## Designer output requested

Please provide a concise visual direction package that covers:

- **Visual personality:** describe the desired feel, such as trustworthy workshop tool, premium desktop utility, precise maintenance record, calm technical dashboard, or another direction.
- **Color palette:** define primary, secondary, neutral, surface, border, text, focus, success, warning, and danger colors with accessible contrast guidance for the dark base.
- **Typography direction:** recommend type personality, hierarchy, weight usage, spacing, and whether the current system-font stack should remain or be replaced later.
- **Logo/wordmark direction:** propose how “NozzleNote” and “by BMR” should be handled, including mark concepts, wordmark proportions, favicon simplification, and small-size behavior.
- **Icon style:** specify stroke/fill style, corner radius, line weight, metaphor set, and whether icons should feel mechanical, notebook-like, printer-care-focused, or dashboard-like.
- **Illustration style:** define whether illustrations should be abstract UI panels, maintenance diagrams, simple 3D printer silhouettes, exploded parts, or avoided entirely.
- **Homepage section treatment:** guide the hero, proof/status bands, feature grids, roadmap callouts, catalog planning content, disclaimer placement, and future release-preparation sections.
- **Card treatment:** define border strength, elevation, surface gradients, hover behavior, density, and how status labels should appear.
- **CTA/button style:** define primary and secondary button shape, contrast, motion, disabled/planned states, and treatment for non-live pages such as Download and Early Supporters.
- **Mobile behavior:** specify navigation behavior, hero stacking, card spacing, touch target sizes, long-page scanning, and legal/documentation readability.
- **Accessibility constraints:** keep keyboard-visible focus states, maintain readable contrast, avoid relying on color alone for status, preserve semantic headings, and support reduced-motion preferences if motion is expanded later.
- **Examples/references:** include 3–5 visual references with notes on what to borrow and what not to copy.
- **Things to avoid:** avoid manufacturer logos, partnership-like visuals, “official” catalog cues, medical/legal compliance badges, live-commerce styling before launch, fake app screenshots, overpromising AI/automation, and visual claims that imply public availability.

## Implementation handoff notes

- Keep visual tokens centralized in `src/styles/tokens.css` where practical.
- Keep layout, typography defaults, component styling, focus states, and responsive behavior in `src/styles/global.css` or component-local styles until a larger design system is justified.
- The current site uses root-relative URLs for the `https://nozzlenote.com` custom domain. Visual updates should not reintroduce a GitHub Project Pages base path.
- Future visual work should be implemented as a separate milestone after the AI Designer direction is reviewed.
