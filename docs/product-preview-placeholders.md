# Product preview placeholders

Milestone 38 prepares Closed Beta screenshot slots for NozzleNote by BMR without adding PNG files.

## Source build and folder

- Screenshot source build: `v0.2.0-beta.1`.
- Folder path: `public/assets/app-screenshots/closed-beta/v0.2.0-beta.1/`.
- Public URL prefix: `/assets/app-screenshots/closed-beta/v0.2.0-beta.1/`.
- Manual placement requirement: Pedro manually adds reviewed PNG files later and commits them separately.
- Codex must not insert, upload, copy, generate, encode, or commit PNG screenshot files.

## Expected filenames and mapping

| Original file | Required filename |
| --- | --- |
| `Home.png` | `dashboard-first-run-preview.png` |
| `Printers.png` | `printer-registry-preview.png` |
| `Printer.png` | `add-printer-modal-preview.png` |
| `Maintenance.png` | `maintenance-tasks-preview.png` |
| `Taks.png` | `add-task-modal-preview.png` |
| `Parts nozzle.png` | `parts-inventory-low-stock-preview.png` |
| `Low Stock.png` | `parts-low-stock-detail-preview.png` |
| `Parts.png` | `parts-empty-state-preview.png` |
| `Backup.png` | `backup-export-preview.png` |
| `Backup 2.png` | `backup-export-success-preview.png` |

## Placement and usage rules

- Home uses only strong slots: maintenance tasks, parts inventory low stock, printer registry, and backup/export.
- Beta Status uses the full Closed Beta interface previews gallery.
- Features maps slots to printer profiles, maintenance tasks, parts/inventory, and Backup and Import Preview.
- Download uses the backup/export preview only for safety guidance, not public download availability.
- Docs intentionally keeps the schematic workflow preview for now to avoid making the docs hub too image-heavy.

## Not primary marketing visuals

- `dashboard-first-run-preview.png` is a first-run/empty dashboard and should not be the main Home hero if stronger screenshots are available.
- `parts-empty-state-preview.png` is an onboarding empty state and should not be a main marketing image.
- `backup-export-success-preview.png` is optional supporting evidence and should not replace the main backup/export image unless explaining success state.

Required disclaimer: “Screenshots show an early Closed Beta build of NozzleNote by BMR. Interface, wording, and workflows may change before public release.” These are not final screenshots or public release screenshots.
