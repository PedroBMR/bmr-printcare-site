# Early Interest List

Milestone 34 activates a controlled Early Interest List page at `/early-interest/` for NozzleNote by BMR while the desktop app remains in development.

## Provider and configuration

- Provider: Formspree.
- Required public build variable: `PUBLIC_EARLY_INTEREST_FORM_ENDPOINT`.
- Production value: `https://formspree.io/f/mwvjybyw`.
- If the variable is missing, the page must render a safe unavailable state and provide `contact@nozzlenote.com`.
- The endpoint must be passed at build time and must not be duplicated in page copy except documentation or generated output when the variable is supplied.

## Collected fields

- email address;
- user type;
- number of 3D printers;
- printer models;
- current maintenance tracking method;
- biggest maintenance frustration;
- consent to receive occasional updates.

## Purpose, retention and removal

The list is for occasional NozzleNote by BMR product updates, roadmap notes, future release information, and understanding early product interest. Early Interest form data may be kept while NozzleNote by BMR is being developed and while the visitor remains interested in receiving updates. Visitors can unsubscribe or request removal at any time by contacting `contact@nozzlenote.com`.

## Boundaries

- No payment, checkout, pledge, preorder, license reservation, app download, account, beta access system, support entitlement, database, or backend is created.
- No newsletter automation, marketing automation, mailing-list segmentation, or automatic email sequences are created.
- No form data is sent to GA4 and no form submission analytics event is added.
- Early Interest List data must not be sold or used for unrelated marketing.
- Early Interest List submissions must not be shared with printer manufacturers, advertisers, data brokers, or unrelated third parties.
- Do not collect phone numbers, addresses, CPF/tax IDs, printer serial numbers, payment details, passwords, account credentials, private maintenance logs, or license keys.
