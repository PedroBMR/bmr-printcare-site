export type SocialLink = {
  id: 'x' | 'instagram' | 'threads' | 'youtube';
  label: string;
  url: string | null;
  handle: string;
  external: true;
  ariaLabel: string;
  iconName?: string;
};

export const socialLinks: SocialLink[] = [
  {
    id: 'x',
    label: 'X',
    url: 'https://x.com/NozzleNotebyBMR',
    handle: '@NozzleNotebyBMR',
    external: true,
    ariaLabel: 'Follow NozzleNote by BMR on X',
    iconName: 'x',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    url: 'https://www.instagram.com/nozzlenote',
    handle: '@nozzlenote',
    external: true,
    ariaLabel: 'Follow NozzleNote by BMR on Instagram',
    iconName: 'instagram',
  },
  {
    id: 'threads',
    label: 'Threads',
    url: 'https://www.threads.net/@nozzlenote',
    handle: '@nozzlenote',
    external: true,
    ariaLabel: 'Follow NozzleNote by BMR on Threads',
    iconName: 'threads',
  },
  {
    id: 'youtube',
    label: 'YouTube',
    url: 'https://www.youtube.com/@NozzleNotebyBMR',
    handle: '@NozzleNotebyBMR',
    external: true,
    ariaLabel: 'Watch NozzleNote by BMR on YouTube',
    iconName: 'youtube',
  },
];

export const officialSocialLinks = socialLinks.filter(
  (link): link is SocialLink & { url: string } => typeof link.url === 'string' && link.url.length > 0,
);

export const pendingSocialLinks = socialLinks.filter((link) => link.url === null);
