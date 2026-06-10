# NozzleNote performance notes

Milestone 24 focused on verifying the post-motion site and trimming performance-sensitive visual work without changing the Premium Violet Tech direction, product claims, deployment shape, or conditional GA4 behavior.

## What was checked

- Astro production builds with and without `PUBLIC_GA_MEASUREMENT_ID`.
- Generated `dist/` output size and `_astro` asset sizes.
- Generated homepage output for root-safe asset references and stale repository-base deployment paths.
- Source and generated output for legacy/risky copy such as old product naming, restricted catalog wording, public-release claims, unsupported compliance claims, and overbroad product claims.
- Source for unwanted analytics additions such as custom event calls, user IDs, custom dimensions, form tracking, and commerce events.
- Source CSS/components for expensive patterns: `filter`, `backdrop-filter`, `blur()`, repeated `box-shadow`, `animation`, `transition: all`, `will-change`, and keyframes.
- Decorative accessibility markers and reduced-motion coverage for the global ambient background and homepage hero effects.

## Optimizations made in Milestone 24

- The global ambient grid drift now moves the grid layer with `transform` instead of animating `background-position`, reducing paint-heavy animation while preserving the technical grid feel.
- Ambient `will-change` usage is limited to the no-preference desktop/tablet animation path instead of being applied permanently.
- Mobile ambient rendering is simplified by reducing blur/opacity, freezing animated ambient movement, and removing the heaviest secondary blue orb/scanline layer on small screens.
- The homepage hero preview panel keeps its cinematic float, but the infinite float no longer animates `box-shadow`; it now animates only transform.
- The hero panel glow blur was reduced while keeping the violet depth cue.
- The active service-log row breathing now animates opacity only instead of border color and box-shadow.
- Cross-site ambient panel/border sweep animations are limited to larger screens with normal motion preferences.
- Touch/mobile hover paths disable hover lift transforms so cards and CTAs remain stable on devices where hover is not useful.
- Internal page hero grid drift now uses transform rather than `background-position`.

## Environment limits

- Local static/build checks are reliable in this repository.
- Lighthouse depends on a browser/runtime being available in the execution environment. If it is unavailable or blocked, use the static checks above and run Lighthouse after deployment against `https://nozzlenote.com`.
- Screenshot capture is useful for visual review but generated screenshots should remain temporary and should not be committed unless a future milestone explicitly asks for them.

## Known performance-sensitive areas

- `AmbientBackground.astro` still contains large decorative gradient layers. They are static or transform/opacity animated and are simplified on mobile, but they should be rechecked on low-end mobile devices before launch.
- `HeroSection.astro` intentionally retains the highest-impact cinematic effects. Its remaining continuous animations are transform/opacity based, but Pedro should still test perceived smoothness on mobile and older laptops.
- `SiteHeader.astro` uses `backdrop-filter` for the premium glass header. This is visually important but can be expensive on some devices, so it should be included in launch Lighthouse/manual testing.
- Shared card/panel hover shadows are interaction-only and should not be expanded into continuous animations.
- GA4 is async and conditional, but production Lighthouse runs should compare with and without the production measurement ID if third-party script cost becomes a concern.

## Future pre-launch performance checklist

1. Run Lighthouse against the production root domain and key internal pages.
2. Test `prefers-reduced-motion: reduce` in a real browser and confirm decorative movement is frozen or disabled while content remains visible.
3. Test mobile pages for scroll smoothness, horizontal overflow, cramped cards, and excessive vertical whitespace.
4. Confirm the homepage hero remains visually impressive without feeling sluggish.
5. Confirm `/download/` and `/early-supporters/` remain cautious and do not imply public availability or a live support/payment program.
6. Confirm no links or assets reference a repository-base deployment path.
7. Confirm production GA4 loads only when `PUBLIC_GA_MEASUREMENT_ID` is configured and that no custom analytics events are introduced.
8. Re-run source searches for risky product/legal/catalog wording before launch.
9. Avoid adding video backgrounds, large raster backgrounds, WebGL/canvas effects, animation libraries, or scroll-driven JavaScript unless a future performance budget explicitly allows them.
