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

## Milestone 23 cross-site microinteractions and page polish

Milestone 23 extends the Premium Violet Tech treatment beyond the homepage hero without rebuilding the site or adding a heavy animation system. The pass remains CSS-only and focuses on restrained polish for internal pages, homepage sections after the hero, docs navigation, status panels, CTAs, and reusable card patterns.

The cross-site polish includes:

- premium internal page heroes with subtle technical grid texture, cyan/violet edge lighting, and corner-rail geometry;
- refined card depth using shared premium shadows, soft border glow, and non-interactive corner accents;
- section-level rhythm through small cyan/violet rails on feature and roadmap groups;
- smoother hover/focus treatment for cards, panels, docs navigation, legal sidebar links, link lists, and page CTAs;
- continued use of staged page-load reveal utilities for non-doc, non-legal marketing pages;
- a cautious treatment for download, catalogs, support, roadmap, and early supporter pages so visual polish does not imply public availability, manufacturer-provided catalogs, live payment, or final legal status.

New/expanded tokens added in `src/styles/tokens.css`:

- `--color-surface-premium` for darker high-emphasis glass panels;
- `--shadow-premium-card` for static premium card depth;
- `--shadow-premium-hover` for restrained hover/focus elevation;
- `--motion-hover-raise-panel` for slightly stronger but still small panel hover lift.

The implementation intentionally keeps decorative elements as CSS pseudo-elements where possible. They are non-interactive, do not carry information, and avoid adding extra DOM nodes or assets.

## Reduced-motion rules

Reduced-motion users should receive the same information and controls without motion-dependent behavior.

Current rules:

- smooth scrolling is disabled;
- view transitions are disabled;
- CSS animations and transitions are reduced to near-instant timing;
- page-load reveal animations are removed;
- ambient background movement is disabled/frozen;
- Milestone 22 hero entrance, float, pulse, sweep, scanline, glint, and active-row breathing are disabled;
- Milestone 23 page-hero grid drift, card hover lift, card corner-accent transitions, sweep/breathe effects, and link/card transform effects are disabled or reduced to static states;
- pulsing lights and sweeping glows are disabled or hidden;
- hover transforms are removed for shared motion targets;
- CTA shine and ambient glow pseudo-elements are hidden;
- no flashing, blinking text, or motion-dependent information is introduced.

## Accessibility notes

The ambient background and hero decorative rails are decorative only and non-interactive. Text and controls remain in normal document flow above the fixed background layer. Focus states remain visible, and the added lighting should not obscure docs, legal, support, or other reading-heavy pages.

The hero heading remains split into controlled line blocks to avoid awkward punctuation breaks and overlap. Mobile breakpoints simplify decorative layers, keep CTAs full-width, and stack the preview cards so content remains readable without horizontal overflow.

## Performance notes for later verification

Milestones 21, 22, and 23 intentionally keep the implementation lightweight:

- no raster background assets were added;
- no external animation dependencies were added;
- no canvas, WebGL, video, or audio was added;
- animations favor transform, opacity, background-position, and limited box-shadow/border-color breathing;
- large blurred elements are limited to a few global/hero gradients rather than many repeated DOM nodes;
- infinite animations are limited to global ambient layers, a small number of high-impact hero shell effects, and very limited page-hero/panel texture movement;
- Milestone 23 does not add JavaScript scroll libraries, third-party animation dependencies, raster/video backgrounds, canvas, or WebGL.

A later performance milestone should verify mobile paint/composite cost, scroll smoothness, battery impact, Lighthouse behavior, and whether any blurred gradients, scanlines, or hero glows need to be simplified on lower-end devices.

## What remains deferred to performance and later storytelling milestones

Milestone 23 still does not implement:

- formal animation performance optimization or a final motion budget;
- complex scroll-driven storytelling;
- animated product walkthrough scenes;
- particle systems;
- canvas or WebGL rendering;
- audio or video;
- broad independent forever-animation on every card;
- changes to analytics behavior or custom analytics events.

Recommended next milestones:

1. **Performance verification** — validate animation cost, paint/composite behavior, reduced-motion behavior, and mobile smoothness before heavier effects ship.
2. **Section-level storytelling** — consider controlled narrative motion only where it clarifies product direction and remains CSS-first.
3. **Animation budget** — decide which ambient, hero, and cross-site effects should remain enabled on lower-end mobile devices.

## Milestone 24 performance verification note

Milestone 24 completed a performance-oriented review of the motion and lighting system added in Milestones 21 through 23. The Premium Violet Tech direction remains intact, but the most sensitive decorative effects were tightened before any future visual/storytelling expansion.

Changes made during the pass:

- the global ambient grid and internal page hero grid now drift with transform-based motion instead of animating `background-position`;
- ambient `will-change` hints are scoped to the desktop/tablet no-preference animation path instead of remaining permanently active;
- small-screen ambient rendering is simplified by lowering blur/opacity, freezing movement, and removing the heaviest secondary layers;
- the homepage hero panel no longer animates `box-shadow` during its infinite float;
- the active service-log row uses opacity-only breathing instead of border/shadow breathing;
- cross-site panel sweep/breathe effects are limited to larger screens with normal motion preferences;
- touch/mobile hover paths avoid hover lift transforms that are not useful on coarse-pointer devices.

Reduced-motion behavior was rechecked as part of the milestone. Reduced-motion users should continue to receive static premium visuals without cinematic entrance, float, pulse, sweep/glint, scanline, grid drift, or hover-transform motion.

Future visual/storytelling milestones should continue to preserve this budget: use CSS-first transform/opacity motion, avoid broad continuous animations, keep mobile simpler than desktop, and re-run the performance checklist in `docs/performance-notes.md` before adding heavier effects.


## Milestone 26 scroll storytelling note

Milestone 26 adds lightweight product-flow storytelling without adding a new animation system. The homepage workflow section uses a CSS-only ordered-list rail and static Closed Beta screenshot cards to explain the planned path from printer profile to preventive care review.

This flow remains responsive and text-first: the ordered list carries the semantic meaning, while the rail line and numbered dots are visual accents. No scroll JavaScript, requestAnimationFrame, setInterval, third-party animation dependency, canvas, WebGL, video, audio, or large asset was added. Motion remains limited to existing hover/transition tokens and existing reduced-motion behavior.
