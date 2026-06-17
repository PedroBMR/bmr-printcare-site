# Milestone 26 storytelling flow

Milestone 26 improves scroll storytelling and product-flow rhythm without performing the later final content/source-of-truth rewrite planned for Milestone 27.

## Intended homepage narrative

The homepage should now read as a cautious product story:

1. **Cinematic hero** — introduces NozzleNote by BMR and preserves the Premium Violet Tech first impression.
2. **Problem** — explains why maintenance records become scattered across memory, notes, spreadsheets, labels, and chat messages.
3. **Solution** — positions NozzleNote as a focused local-first desktop workspace for printer care records, supported by an approved Closed Beta screenshot card.
4. **Scope** — clarifies what the product is and is not before feature details become more specific.
5. **In-development product flow** — shows the planned loop: add a printer profile, create maintenance tasks, record service events, and review upcoming care.
6. **Feature highlights** — connects the loop to the core product areas: printer profiles, service history, maintenance planning, and part records.
7. **Local-first approach** — reinforces control over records and the absence of app-data collection in the static website.
8. **Manufacturer independence** — keeps public claims cautious and independent from printer manufacturers.
9. **Roadmap / release status** — reminds visitors that public release and download materials are still being prepared.

## Section flow logic

The scroll rhythm is intended to answer these questions in order:

- Why does this product exist?
- What does NozzleNote organize?
- How would a user move through the planned workflow?
- Which product areas form the maintenance loop?
- What stays local and user-controlled?
- What is planned but not available yet?
- Where should readers go next for roadmap, download, support, catalog, or documentation details?

## Screenshot support

Milestone 41 replaced the old public placeholder frames with real Closed Beta screenshot cards where product visuals are useful:

- the homepage solution preview now uses a Closed Beta maintenance task screenshot;
- the homepage workflow section now uses Closed Beta screenshot cards for printer profiles and preventive tasks;
- feature-page sections use mapped Closed Beta screenshots for profiles, maintenance tasks, parts/inventory, and backup/export.

Public visuals should use Closed Beta or v0.2.0-beta.1 preview labels, avoid final/public/stable claims, and rely on `AppScreenshotCard.astro` fallback only when a screenshot file is missing.

## Deferred to Milestone 27

Milestone 26 intentionally does not:

- rewrite every page from a final content source of truth;
- finalize legal, pricing, licensing, refund, or support language;
- publish download links, installers, binaries, checksums, or release dates;
- make Early Supporters live;
- define final catalog pricing, licensing, or update terms;
- add account, sync, mobile, checkout, forms, or backend behavior.

Milestone 27 and later should use the final content document for page-by-page copy alignment, legal review, pricing/commercial alignment, and documentation consistency.

## Accessibility and performance considerations

The product-flow rail is CSS-only, responsive, and non-interactive. The ordered list contains the meaningful workflow text, so the visual rail is decorative and not required to understand the section.

No scroll listeners, requestAnimationFrame loops, setInterval loops, canvas, WebGL, video, audio, third-party animation libraries, or large raster assets were added. New visuals rely on existing colors, shadows, spacing, hover transitions, and reduced-motion rules. Reduced-motion users receive the same content without motion-dependent storytelling.

## GA4 and deployment boundaries

Milestone 26 does not change analytics behavior. The existing conditional GA4 implementation should continue to render only when `PUBLIC_GA_MEASUREMENT_ID` is valid, should keep the GA4 script async, and should not add custom events, user IDs, custom dimensions, manual click instrumentation, form instrumentation, e-commerce instrumentation, or manual personal-data collection.

Root-domain deployment at `https://nozzlenote.com` remains the target. Generated asset and link paths must remain root-safe and must not depend on a repository subpath.
