# GA4 Analytics Setup

NozzleNote by BMR uses Google Analytics 4 only after a visitor accepts analytics cookies. Analytics is disabled by default.

## Environment variable

Set this variable for builds that should make GA4 available behind consent:

```bash
PUBLIC_GA_MEASUREMENT_ID=G-1K3VN58QMW
```

The site reads `PUBLIC_GA_MEASUREMENT_ID` during the Astro build. The analytics component trims the value and only renders consent configuration when the value looks like a GA4 Measurement ID beginning with `G-`.

If `PUBLIC_GA_MEASUREMENT_ID` is missing, empty, or invalid-looking, the generated site renders no GA4 loader script and does not attempt to load GA4.

## Consent behavior

- Default state: analytics disabled.
- If no preference exists and a valid measurement ID is configured, the cookie/analytics banner appears.
- Visitors can accept or reject analytics cookies.
- Rejecting analytics does not block site access.
- The preference is stored locally as `nozzlenote_analytics_consent` with `accepted` or `rejected`.
- The footer “Cookie settings” control reopens the choice UI so visitors can change their preference.
- If consent changes from accepted to rejected, the site stops future GA4 loads where practical and attempts to clear existing GA cookies.

## Current tracking scope

The current implementation only enables the standard GA4 tag after consent. The site code does not add:

- custom analytics events;
- user IDs;
- custom dimensions;
- e-commerce events;
- form tracking;
- click tracking;
- manual personal data collection.

No form input is sent to GA4. Future analytics or event-tracking work should be reviewed separately before implementation, especially before collecting any additional interaction data or changing public legal/privacy pages.

## Local validation

Build without a measurement ID and confirm no GA4 loader appears in `dist`:

```bash
npm run build
rg -n "googletagmanager|gtag/js" dist || true
```

Build with the production measurement ID and confirm only consent-gated code references the GA4 URL:

```bash
PUBLIC_GA_MEASUREMENT_ID=G-1K3VN58QMW npm run build
rg -n "googletagmanager|nozzlenote_analytics_consent|Cookie settings" dist
```
