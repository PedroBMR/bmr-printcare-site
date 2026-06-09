# NozzleNote motion direction

Milestones 20, 21 and 22 define the current motion and lighting direction for NozzleNote by BMR. The system remains CSS-only and avoids particles, canvas, WebGL, video backgrounds, or JavaScript animation libraries.

## Current foundation

Motion is centralized around CSS tokens in `src/styles/tokens.css` and reusable utilities in `src/styles/global.css`.

The current foundation includes:

- short duration tokens for instant, fast, base, slow, entrance, cinematic, and glow motion;
- long-running ambient tokens for background drift, glow pulses, and light sweeps;
- shared easing curves for standard UI transitions, emphasized entrance motion, hover response, and ambient movement;
- glow color tokens for cyan, blue, and controlled violet lighting;
- subtle entrance distance and stagger timing for safe page-load reveals;
- hover raise and scale values for responsive cards and controls;
- one-shot CTA shine treatment for primary calls to action;
- reusable ambient glow utilities for future component-level polish.

## Milestone 21 ambient background

Milestone 21 adds a global `AmbientBackground` layout component behind the page content. It is integrated through `BaseLayout`, is marked `aria-hidden`, and uses `pointer-events: none` so it cannot receive pointer or keyboard interaction.

The ambient layer is designed to feel premium, technical, dark, and alive without becoming a gamer/RGB or particle-storm effect. It uses:

- slow-moving cyan, blue, and violet radial light orbs;
- a faint technical grid and compact secondary grid texture;
- a subtle diagonal cyan/violet light wash;
- a low-opacity scanline layer for interface depth;
- transform, opacity, and background-position animation only.

The body keeps a static dark fallback background, so the site remains coherent if the ambient component is unavailable or if motion is reduced.

## Milestone 22 hero cinematic experience

Milestone 22 upgrades only the homepage hero and keeps the rest of the site on the existing motion foundation. The hero is still product-focused and keeps cautious wording about a local-first desktop app in development, maintenance/history tracking, and planned optional catalog content.

The hero now uses:

- a staged CSS entrance sequence for the eyebrow, heading, body copy, trust chips, microcopy, CTAs, and preview panel;
- a stronger hero-local halo that works with the global ambient background instead of replacing it;
- lightweight decorative technical rails, diagonal beam lighting, and data-rail geometry marked as decorative/non-interactive in the component markup;
- a more dimensional preview panel with controlled cyan/violet edge light, subtle scanline depth, and restrained glow breathing;
- a maintenance/logbook-focused mockup with an active service-log row, status dot pulse, parts/cost summary, and open-scale “Personal & growing setups” copy;
- premium CTA treatment through existing hover lift/shine behavior plus local border glow and glassy secondary styling.

The mockup animation intentionally stays subtle: slow glow breathing, a gentle floating/depth transform, a status pulse, an active row highlight, and a slow scanline. These effects are decorative and do not communicate required information.

## Reduced-motion rules

Reduced-motion users should receive the same information and controls without motion-dependent behavior.

Current rules:

- smooth scrolling is disabled;
- view transitions are disabled;
- CSS animations and transitions are reduced to near-instant timing;
- page-load reveal animations are removed;
- ambient background movement is disabled/frozen;
- Milestone 22 hero entrance, float, pulse, sweep, scanline, glint, and active-row breathing are disabled;
- pulsing lights and sweeping glows are disabled or hidden;
- hover transforms are removed for shared motion targets;
- CTA shine and ambient glow pseudo-elements are hidden;
- no flashing, blinking text, or motion-dependent information is introduced.

## Accessibility notes

The ambient background and hero decorative rails are decorative only and non-interactive. Text and controls remain in normal document flow above the fixed background layer. Focus states remain visible, and the added lighting should not obscure docs, legal, support, or other reading-heavy pages.

The hero heading remains split into controlled line blocks to avoid awkward punctuation breaks and overlap. Mobile breakpoints simplify decorative layers, keep CTAs full-width, and stack the preview cards so content remains readable without horizontal overflow.

## Performance notes for later verification

Milestones 21 and 22 intentionally keep the implementation lightweight:

- no raster background assets were added;
- no external animation dependencies were added;
- no canvas, WebGL, video, or audio was added;
- animations favor transform, opacity, background-position, and limited box-shadow/border-color breathing;
- large blurred elements are limited to a few global/hero gradients rather than many repeated DOM nodes;
- infinite animations are limited to global ambient layers and a small number of high-impact hero shell effects.

A later performance milestone should verify mobile paint/composite cost, scroll smoothness, battery impact, Lighthouse behavior, and whether any blurred gradients, scanlines, or hero glows need to be simplified on lower-end devices.

## What is intentionally deferred to Milestone 23/performance milestones

Milestone 22 does not implement:

- a full cross-site animation pass;
- complex scroll-driven storytelling;
- animated product walkthrough scenes;
- particle systems;
- canvas or WebGL rendering;
- audio or video;
- broad independent forever-animation on every card;
- final performance optimization or a formal animation performance budget;
- changes to analytics behavior or custom analytics events.

Recommended next milestones:

1. **Milestone 23 section-level storytelling** — add controlled narrative motion only where it clarifies product direction, after the hero has been visually approved.
2. **Cross-site microinteraction expansion** — refine reusable component-level motion after visual QA.
3. **Performance verification** — validate animation cost, paint/composite behavior, reduced-motion behavior, and mobile smoothness before heavier effects ship.
