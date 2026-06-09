# NozzleNote motion direction

Milestones 20 and 21 define the current motion and lighting direction for NozzleNote by BMR. The system remains CSS-only and avoids particles, canvas, WebGL, video backgrounds, or JavaScript animation libraries.

## Current foundation

Motion is centralized around CSS tokens in `src/styles/tokens.css` and reusable utilities in `src/styles/global.css`.

The current foundation includes:

- short duration tokens for instant, fast, base, slow, entrance, and glow motion;
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

## Milestone 21 glow and light treatment

Milestone 21 also adds controlled light treatment around high-impact site surfaces:

- a stronger but still subtle hero-area halo;
- a sticky header bottom-edge glow sweep;
- page-shell halo lighting with reduced intensity for docs and legal pages;
- status-banner light sweeps for important readiness/planning messages;
- gentle panel breathing on major content shells and status notes;
- a slow status-dot pulse in the hero preview.

These effects should support the Premium Violet Tech direction: cyan/blue remains the technical foundation and violet stays a restrained brand signature.

## Reduced-motion rules

Reduced-motion users should receive the same information and controls without motion-dependent behavior.

Current rules:

- smooth scrolling is disabled;
- view transitions are disabled;
- CSS animations and transitions are reduced to near-instant timing;
- page-load reveal animations are removed;
- ambient background movement is disabled/frozen;
- pulsing lights and sweeping glows are disabled or hidden;
- hover transforms are removed for shared motion targets;
- CTA shine and ambient glow pseudo-elements are hidden;
- no flashing, blinking text, or motion-dependent information is introduced.

## Accessibility notes

The ambient background is decorative only and non-interactive. Text and controls remain in normal document flow above the fixed background layer. Focus states remain visible, and the added lighting should not obscure docs, legal, support, or other reading-heavy pages.

## Performance notes for later verification

Milestone 21 intentionally keeps the implementation lightweight:

- no raster background assets were added;
- no external animation dependencies were added;
- animations favor transform, opacity, and background-position;
- large blurred elements are limited to a few fixed ambient orbs;
- infinite animations are limited to global ambient layers and a small number of important shell effects.

A later performance milestone should verify mobile paint/composite cost, scroll smoothness, battery impact, and whether any blurred gradients need to be simplified on lower-end devices.

## What is intentionally deferred to Milestone 22/23

Milestone 21 does not implement:

- a complete cinematic hero sequence;
- complex scroll-driven storytelling;
- animated product walkthrough scenes;
- particle systems;
- canvas or WebGL rendering;
- audio or video;
- broad independent forever-animation on every card;
- a final performance budget pass for the full motion system.

Recommended next milestones:

1. **Cinematic hero refinement** — strengthen first-impression sequencing without changing product claims or accessibility guarantees.
2. **Section-level storytelling** — add controlled narrative motion only where it clarifies product direction.
3. **Cross-site microinteraction expansion** — refine reusable component-level motion after visual QA.
4. **Performance verification** — validate animation cost, paint/composite behavior, reduced-motion behavior, and mobile smoothness before heavier effects ship.
