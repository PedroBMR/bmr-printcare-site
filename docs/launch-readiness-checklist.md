# Launch Readiness Checklist

Milestone 10 final review checklist for the static NozzleNote by BMR website.

NozzleNote by BMR is still in development. The website is a static public information and documentation hub only. Public app release, real download links, checkout, accounts, support intake, and production-domain-specific deployment settings beyond the root custom domain and optional GA4 build variable are not implemented yet.

## Local validation

- [ ] Run `npm run build` and confirm all public routes generate successfully.
- [ ] Run `npx astro check` and resolve Astro or TypeScript diagnostics.
- [ ] Run `npm run check:links` after the production build to verify generated route coverage and root-relative internal links.
- [ ] Run `git diff --check` before committing to catch whitespace errors.
- [ ] Inspect generated HTML for key routes in `dist/`, including `/`, `/features/`, `/docs/`, `/support/`, `/download/`, and the preliminary legal pages.

## Content review

- [ ] Confirm public copy remains in English.
- [ ] Confirm the homepage, Features, Docs, Roadmap, Support, and Download pages use conservative language for an app that is still in development.
- [ ] Confirm the Download page does not contain immediate-download wording, installers, binaries, checksums, purchase links, beta signup forms, or release dates.
- [ ] Confirm support copy does not promise real-time support, ticket handling, manufacturer service support, automated diagnosis, machine-learning analysis, cloud sync, or public availability.
- [ ] Confirm documentation pages avoid public installation instructions until a real release process exists.
- [ ] Confirm manufacturer names, if mentioned, are used only for compatibility context and do not imply affiliation, sponsorship, endorsement, approval, partnership, or access to proprietary systems.

## Legal review

- [ ] Confirm `/privacy/`, `/terms/`, `/license-terms/`, `/refund-policy/`, and `/manufacturer-disclaimer/` remain clearly marked as preliminary.
- [ ] Confirm legal pages do not claim LGPD compliance, GDPR compliance, CCPA compliance, full legal compliance, final licensing, payment terms, refunds, or app-store distribution.
- [ ] Confirm legal pages are reviewed by a qualified legal reviewer before public commercial launch, payment processing, analytics, account features, or app distribution.
- [ ] Confirm the manufacturer disclaimer remains visible and conservative.

## Product and release review

- [ ] Confirm the site states that the desktop app is still in development and not publicly available yet.
- [ ] Confirm no real download buttons, release files, installers, binaries, payment links, signup forms, or license keys are present.
- [ ] Confirm no backend, authentication, newsletter integration, checkout, cookies, tracking pixels, third-party scripts beyond the conditional standard GA4 Google tag, or contact form endpoints have been added.
- [ ] Confirm product copy stays focused on maintenance records, printer profiles, service history, preventive planning, parts and consumables, and local-first data direction.
- [ ] Confirm roadmap-only topics are described as planned or exploratory, not as currently available features.

## Deployment review

- [ ] Confirm the production domain before changing canonical URL behavior, adding sitemap output, or updating `robots.txt` for a launch-specific strategy.
- [ ] Confirm `public/favicon.svg` and `public/site.webmanifest` are appropriate for real browser testing.
- [ ] Confirm the generated `dist/` directory is deployed to a static host only.
- [ ] Confirm the host configuration does not inject analytics, cookie banners, trackers, forms, or third-party scripts without a separate review.
- [ ] Confirm cache, redirects, and trailing-slash behavior match the static route structure.

## Post-deployment review

- [ ] Visit the deployed homepage and all main public routes.
- [ ] Verify header, footer, documentation navigation, legal cross-links, support links, and download-status links on the deployed site.
- [ ] Recheck page titles, descriptions, favicon, manifest, and noindex behavior for preliminary legal pages.
- [ ] Reconfirm there are no broken internal links after hosting configuration is applied.
- [ ] Reconfirm release messaging before sharing the site publicly: the app is still in development and public release is not available yet.
