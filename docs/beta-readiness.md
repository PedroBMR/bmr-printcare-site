# Beta Readiness QA Notes

Milestone 37 records the current beta-readiness posture for the public website. This document is internal planning material, not public launch copy.

## Current stage

- `/beta/` is the Beta Status page. It must not be presented as an active beta download page.
- The current product stage is Internal Windows QA.
- The next intended stage is Closed Beta, planned as invite-only and limited.
- Open Beta is a future public testing stage and is not scheduled yet.
- `/release-notes/`, `/known-limitations/`, and `/feedback/` are future-facing structures prepared for responsible beta communication; they must not imply that public releases or public beta feedback are live.
- `/download/` is release-preparation status content only. No public installer is available yet.

## Active collection path

- `/early-interest/` is active only through Formspree when `PUBLIC_EARLY_INTEREST_FORM_ENDPOINT` is configured.
- Early Interest is for occasional product updates, roadmap notes, future release information, and understanding early product interest.
- There is no newsletter automation or marketing automation attached to the site.
- Early Interest form input must not be sent to GA4, and no custom form-submit analytics event should be added.

## Not implemented yet

The website must continue to avoid public flows for payment, checkout, license activation, account creation/login, cloud sync, mobile apps, support entitlements, public downloads, and paid catalog access.

## Screenshot posture

Product visuals should remain intentional placeholders unless approved real app screenshots are available. Placeholder copy should say: “Screenshot placeholder — final app screenshots will be added closer to beta readiness.” Real development screenshots, if approved later, should be labeled as development build previews that are not publicly available yet and may change before release.
