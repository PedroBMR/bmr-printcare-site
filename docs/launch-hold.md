# Launch Hold After Milestone 29

Milestone 29 placed the public NozzleNote by BMR website in launch-hold / maintenance-light mode. Milestone 30 is a narrow legal pre-launch exception for consent, privacy, interest-readiness, and risk-reduction fixes.

Future large website work should wait for real app progress, including real app screenshots, a release candidate, a download package, confirmed support scope, licensing and catalog decisions, or additional legal review.

Allowed post-29 changes are limited to critical fixes, typo corrections, legal wording corrections, analytics consent corrections, deployment corrections, and other small QA fixes needed to preserve the current published-site phase.

## Current launch-hold boundaries

- App is in development and approximately 50% complete.
- No public download is live.
- No checkout, payments, paid license, paid catalog, account system, cloud sync, mobile app, active printer integrations, active interest form, or Early Supporter campaign is live.
- GA4 is consent-gated; analytics is disabled by default until accepted.
- The footer “Cookie settings” control lets visitors change analytics consent.
- Interest-list messaging is placeholder-only until a provider is configured and reviewed.
- Early Supporters remains a future campaign concept to support launch preparation, not a live purchase.

Do not start larger product, pricing, documentation, catalog, checkout, account, cloud, mobile, or legal initiatives from the website alone while the app is still in development.

## Milestone 34 controlled exception

The active Early Interest List at `/early-interest/` is allowed during launch hold as a narrow Formspree-based collection path for occasional product updates, roadmap notes, future release information, and early product-interest context. It requires `PUBLIC_EARLY_INTEREST_FORM_ENDPOINT` at build time and must show a safe unavailable state when the variable is missing.

Launch-hold boundaries remain in place: no public download, checkout, payment flow, preorder, paid supporters flow, license activation, account system, beta access system, support entitlement, newsletter automation, marketing automation, mailing-list segmentation, automatic email sequences, backend, database, cloud sync, or public catalog purchase is live.
