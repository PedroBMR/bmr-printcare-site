export type AppScreenshotCategory = 'dashboard' | 'printers' | 'maintenance' | 'parts' | 'backup';

export interface AppScreenshot {
  id: string;
  src: string;
  title: string;
  caption: string;
  alt: string;
  category: AppScreenshotCategory;
  usageNote?: string;
  priority: 'primary' | 'supporting' | 'optional' | 'onboarding';
  placement: string[];
}

export const screenshotBuild = 'v0.2.0-beta.1';
export const screenshotAssetFolder = `/assets/app-screenshots/closed-beta/${screenshotBuild}/`;

export const appScreenshots = [
  {
    id: 'dashboard-first-run-preview',
    src: `${screenshotAssetFolder}dashboard-first-run-preview.png`,
    title: 'Dashboard first-run workspace',
    caption: 'Dashboard preview — first-run workspace in Closed Beta v0.2.0-beta.1.',
    alt: 'NozzleNote by BMR dashboard showing the first-run maintenance workspace and local app status.',
    category: 'dashboard',
    usageNote: 'Use carefully. This dashboard shows empty/zero data and should be labeled as first-run/onboarding preview, not a main marketing hero if stronger screenshots are available.',
    priority: 'onboarding',
    placement: ['Beta gallery'],
  },
  {
    id: 'printer-registry-preview',
    src: `${screenshotAssetFolder}printer-registry-preview.png`,
    title: 'Printer registry',
    caption: 'Printer registry preview — local printer records linked to maintenance workflows.',
    alt: 'NozzleNote by BMR printer registry showing an Office P1P printer record and printer details.',
    category: 'printers',
    priority: 'primary',
    placement: ['Home', 'Beta gallery', 'Features printer profiles'],
  },
  {
    id: 'add-printer-modal-preview',
    src: `${screenshotAssetFolder}add-printer-modal-preview.png`,
    title: 'Add printer modal',
    caption: 'Add printer preview — create local printer records before tracking maintenance.',
    alt: 'NozzleNote by BMR add printer modal with printer details and current print hours fields.',
    category: 'printers',
    priority: 'supporting',
    placement: ['Beta gallery', 'Features printer profiles'],
  },
  {
    id: 'maintenance-tasks-preview',
    src: `${screenshotAssetFolder}maintenance-tasks-preview.png`,
    title: 'Maintenance tasks',
    caption: 'Maintenance task preview — organize preventive tasks by printer and interval.',
    alt: 'NozzleNote by BMR maintenance tasks screen showing a cleaning task linked to a printer.',
    category: 'maintenance',
    priority: 'primary',
    placement: ['Home', 'Beta gallery', 'Features maintenance tasks'],
  },
  {
    id: 'add-task-modal-preview',
    src: `${screenshotAssetFolder}add-task-modal-preview.png`,
    title: 'Add maintenance task modal',
    caption: 'Add task preview — define maintenance intervals and required parts.',
    alt: 'NozzleNote by BMR add task modal with maintenance interval and required parts fields.',
    category: 'maintenance',
    priority: 'supporting',
    placement: ['Beta gallery', 'Features maintenance tasks'],
  },
  {
    id: 'parts-inventory-low-stock-preview',
    src: `${screenshotAssetFolder}parts-inventory-low-stock-preview.png`,
    title: 'Parts inventory low stock',
    caption: 'Parts inventory preview — track spare parts, stock status, and printer compatibility notes.',
    alt: 'NozzleNote by BMR parts inventory screen showing a 0.4 mm nozzle with low stock details.',
    category: 'parts',
    priority: 'primary',
    placement: ['Home', 'Beta gallery', 'Features parts and inventory'],
  },
  {
    id: 'parts-low-stock-detail-preview',
    src: `${screenshotAssetFolder}parts-low-stock-detail-preview.png`,
    title: 'Low stock part detail',
    caption: 'Low stock preview — identify parts that may need reordering.',
    alt: 'NozzleNote by BMR inventory screen showing a low stock part and stock details.',
    category: 'parts',
    priority: 'supporting',
    placement: ['Beta optional gallery', 'Features parts and inventory'],
  },
  {
    id: 'parts-empty-state-preview',
    src: `${screenshotAssetFolder}parts-empty-state-preview.png`,
    title: 'Parts empty state',
    caption: 'First-run inventory state — add parts before linking them to maintenance tasks.',
    alt: 'NozzleNote by BMR empty parts inventory screen inviting the user to add parts.',
    category: 'parts',
    usageNote: 'Do not use as a main marketing screenshot. Use only as onboarding/first-run empty state example or optional gallery item.',
    priority: 'onboarding',
    placement: ['Beta optional gallery'],
  },
  {
    id: 'backup-export-preview',
    src: `${screenshotAssetFolder}backup-export-preview.png`,
    title: 'Backup and Export',
    caption: 'Backup & Export preview — generate local JSON backups and validate backup files safely.',
    alt: 'NozzleNote by BMR Backup and Export screen showing local JSON backup guidance and Import Preview.',
    category: 'backup',
    priority: 'primary',
    placement: ['Home', 'Beta gallery', 'Features backup and Import Preview', 'Download safety area'],
  },
  {
    id: 'backup-export-success-preview',
    src: `${screenshotAssetFolder}backup-export-success-preview.png`,
    title: 'Backup export success',
    caption: 'Backup success preview — JSON backup generated during Closed Beta testing.',
    alt: 'NozzleNote by BMR Backup and Export screen showing a generated JSON backup success message.',
    category: 'backup',
    usageNote: 'Use as optional supporting screenshot, not the main backup image unless success state is specifically being explained.',
    priority: 'optional',
    placement: ['Beta optional gallery', 'Features optional backup support'],
  },
] satisfies AppScreenshot[];

export const getAppScreenshot = (id: string): AppScreenshot => {
  const screenshot = appScreenshots.find((item) => item.id === id);
  if (!screenshot) throw new Error(`Unknown app screenshot id: ${id}`);
  return screenshot;
};
