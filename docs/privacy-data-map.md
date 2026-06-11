# Privacy data map — Milestone 30

This internal map tracks current website analytics and planned future interest-list data for NozzleNote by BMR. The public app, accounts, payments, licenses, cloud sync, mobile features, support desk, public downloads, and Early Supporter campaign are not live.

The interest form is not active unless a real provider is configured, reviewed, and disclosed in the Privacy Notice before collection starts.

| Data category | Collected when | Purpose | Required? | Notes |
| --- | --- | --- | --- | --- |
| GA4 cookies/identifiers | Only after analytics consent | Understand traffic and improve website | No | Do not load before consent. |
| Page views/referrers/scrolls/outbound clicks | Only after analytics consent | Basic navigation metrics | No | No personal custom events. |
| Email address | Future interest form submission | Launch updates and interest list | Yes for updates | Consent required before collection. |
| User type | Future interest form submission | Understand audience segments | Optional/planned | Keep broad categories. |
| Number of printers | Future interest form submission | Understand setup size | Optional/planned | Prefer ranges. |
| Printer models | Future interest form submission | Understand compatibility interest | Optional/planned | Do not collect serial numbers. |
| Country/region | Future optional form field | Understand international interest | Optional/planned | Avoid precise addresses. |

## Current guardrails

- GA4 is consent-gated and disabled by default.
- Visitors can accept or reject analytics cookies; rejecting analytics must not block site access.
- The footer “Cookie settings” control reopens the analytics choice UI when GA4 is configured.
- No form input is sent to GA4.
- No active interest form, payment flow, checkout, pledge form, or public download is live.
- Future interest forms must warn visitors not to submit printer serial numbers, private account details, payment data, sensitive personal information, or confidential maintenance records.
