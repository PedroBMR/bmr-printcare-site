# Product preview placeholders

NozzleNote by BMR currently uses intentionally designed product preview placeholders instead of final product screenshots.

## Why placeholders are used

The desktop app is still in development and final real screenshots are not ready yet. The website must therefore avoid presenting synthetic UI as finished product proof, public availability, or a released feature set.

Placeholder copy should remain explicit and cautious. Preferred labels include:

- "Interface preview"
- "Preview placeholder"
- "UI preview"
- "Desktop app preview"
- "App preview placeholder"
- "Final screenshots will be added closer to release"

## Reusable components

The reusable preview system lives in:

- `src/components/content/AppPreviewFrame.astro`

`AppPreviewFrame` renders lightweight HTML and CSS interface scaffolds with:

- a title;
- a short label;
- a status pill;
- a caption that states placeholder status;
- optional variants for desktop, panel, compact, and split presentation;
- pattern-specific UI cues for maintenance history, printer profiles, preventive maintenance, parts, local-first data, roadmap-only quality notes, planned verified catalog content, release preparation, support scope, docs, and future campaign concepts.

## Current integration points

Preview placeholders are integrated into selected public pages where they help explain the product direction without overloading the content:

- homepage Solution section;
- homepage in-development workflow section;
- Features page feature groups;
- Catalogs page planned verified catalog section;
- Docs hub workflow section;
- Download page release-preparation panel;
- Support page support-scope panel;
- Roadmap page current-focus panel;
- Early Supporters page future-concept panel.

## Replacement guidance

When final screenshots or real app preview assets are ready:

1. Replace only the relevant placeholder instance or add a dedicated screenshot component with real image metadata.
2. Keep captions clear about what the screenshot represents, including version or build context when possible.
3. Do not remove cautious release language until the app, documentation, support scope, legal placeholders, and release files are ready.
4. Keep root-safe asset paths with the existing `withBase` utility when linking public assets from Astro components.
5. Avoid large unoptimized raster files; use appropriately sized screenshots and modern compression.

## Accessibility and performance notes

The placeholder UI details are marked decorative with `aria-hidden="true"` inside the component, while each figure has a concise accessible label and visible caption. This prevents screen readers from navigating placeholder rows as if they were real application controls.

The previews are built from semantic HTML and CSS. They do not use JavaScript, canvas, WebGL, video, third-party animation libraries, or large raster placeholder images. Motion is limited to existing hover and transition tokens, and `prefers-reduced-motion` keeps placeholders stable.
