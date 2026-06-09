# GA4 Analytics Setup

NozzleNote by BMR uses the standard Google Analytics 4 Google tag only when a public build-time environment variable is configured.

## Environment variable

Set this variable for builds that should include GA4:

```bash
PUBLIC_GA_MEASUREMENT_ID=G-1K3VN58QMW
```

The site reads `PUBLIC_GA_MEASUREMENT_ID` during the Astro build. The analytics component trims the value and only renders the Google tag when the value looks like a GA4 Measurement ID beginning with `G-`.

If `PUBLIC_GA_MEASUREMENT_ID` is missing, empty, or invalid-looking, the generated site renders no GA4 scripts.

## Local development

For local development or local production-build testing, copy `.env.example` to `.env` and adjust the value if needed:

```bash
cp .env.example .env
```

Do not commit a private `.env` file.

## Production builds

Production builds for `https://nozzlenote.com` should configure `PUBLIC_GA_MEASUREMENT_ID` in the GitHub repository or GitHub Pages environment used by the build workflow. The value is not treated as a secret by the site code because public Astro environment variables are embedded into the generated static output.

The GitHub Pages workflow passes the repository/environment variable named `PUBLIC_GA_MEASUREMENT_ID` into the Astro build step. If that GitHub variable is not configured, the production artifact will omit GA4 scripts.

## Current tracking scope

The current implementation only enables the default GA4 pageview measurement provided by the standard Google tag.

The site code does not currently add:

- custom analytics events;
- user IDs;
- custom dimensions;
- e-commerce events;
- form tracking;
- click tracking;
- manual personal data collection.

Future analytics or event-tracking work should be reviewed separately before implementation, especially before collecting any additional interaction data or changing public legal/privacy pages.
