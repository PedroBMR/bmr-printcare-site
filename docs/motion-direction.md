# NozzleNote motion direction

Milestone 20 adds the motion foundation for NozzleNote by BMR without introducing the future cinematic background, blinking lights, particles, canvas, WebGL, or a JavaScript animation library.

## Current foundation

Motion is centralized around CSS tokens in `src/styles/tokens.css` and reusable utilities in `src/styles/global.css`.

The current foundation includes:

- short duration tokens for instant, fast, base, slow, entrance, and glow motion;
- shared easing curves for standard UI transitions, emphasized entrance motion, and hover response;
- subtle entrance distance and stagger timing for safe page-load reveals;
- hover raise and scale values for responsive cards and controls;
- one-shot CTA shine treatment for primary calls to action;
- static ambient glow placeholders that can be reused by later visual milestones.

## Reduced-motion rules

Reduced-motion users should receive the same information and controls without motion-dependent behavior.

Current rules:

- smooth scrolling is disabled;
- view transitions are disabled;
- CSS animations and transitions are reduced to near-instant timing;
- page-load reveal animations are removed;
- hover transforms are removed for shared motion targets;
- CTA shine and ambient glow pseudo-elements are hidden;
- no infinite or continuously distracting animation is introduced.

## What is intentionally not implemented yet

Milestone 20 intentionally does not add:

- animated background scenes;
- blinking lights;
- heavy particle effects;
- canvas or WebGL rendering;
- JavaScript scroll animation libraries;
- broad cinematic hero sequencing;
- performance-budget verification for a full motion system.

## Later motion milestones

Recommended next milestones:

1. **Animated background and lighting** — add controlled background depth, glows, and premium lighting after performance budgets are defined.
2. **Hero cinematic motion** — introduce a stronger but still accessible hero sequence once final visual priorities are confirmed.
3. **Cross-site microinteractions** — expand reusable component-level motion after measuring the current foundation in production.
4. **Performance verification** — validate animation cost, paint/composite behavior, reduced-motion behavior, and mobile smoothness before heavier effects ship.
