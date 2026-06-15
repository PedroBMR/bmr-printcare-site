# Privacy data map — Milestone 34

This internal map tracks current website analytics and the active Early Interest List for NozzleNote by BMR. The public app, accounts, payments, licenses, cloud sync, mobile features, support desk, public downloads, and Early Supporter campaign are not live.

| Data category | Collected when | Purpose | Required? | Notes |
| --- | --- | --- | --- | --- |
| GA4 cookies/identifiers | Only after analytics consent | Understand traffic and improve website | No | Do not load before consent. |
| Page views/referrers/scrolls/outbound clicks | Only after analytics consent | Basic navigation metrics | No | No personal custom events. |
| Email address | Early Interest form submission through Formspree | Occasional product updates, roadmap notes, future release information | Yes | Consent checkbox required. |
| User type | Early Interest form submission through Formspree | Understand early product interest | Yes | Broad categories only. |
| Number of 3D printers | Early Interest form submission through Formspree | Understand setup size | No | Ranges only. |
| Printer models | Early Interest form submission through Formspree | Understand compatibility interest | No | Do not collect serial numbers. |
| Current maintenance tracking method | Early Interest form submission through Formspree | Understand current workflow | No | Broad method categories. |
| Biggest maintenance frustration | Early Interest form submission through Formspree | Understand product direction | No | General short answer only. |
| Consent to receive updates | Early Interest form submission through Formspree | Record visitor agreement to occasional updates | Yes | Checkbox must not be pre-checked. |

## Current guardrails

- GA4 is consent-gated and disabled by default.
- Visitors can accept or reject analytics cookies; rejecting analytics must not block site access.
- The footer “Cookie settings” control reopens the analytics choice UI when GA4 is configured.
- No form input is sent to GA4.
- No custom form submission analytics event is added.
- Early Interest form submissions are processed by Formspree.
- Early Interest form data may be kept while NozzleNote by BMR is being developed and while the visitor remains interested in updates.
- Visitors may unsubscribe or request removal at any time by contacting `contact@nozzlenote.com`.
- Early Interest List data must not be sold, shared with printer manufacturers, advertisers, data brokers, or unrelated third parties, or used for unrelated marketing.
- Visitors are warned not to submit printer serial numbers, private account details, payment data, sensitive personal information, or confidential maintenance records.
