const configuredBase = import.meta.env.BASE_URL || '/';

export const basePath = configuredBase.endsWith('/') ? configuredBase : `${configuredBase}/`;

const baseWithoutTrailingSlash = basePath === '/' ? '' : basePath.replace(/\/$/, '');

export const withBase = (path: string): string => {
  if (
    !path ||
    path.startsWith('#') ||
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('mailto:') ||
    path.startsWith('tel:') ||
    path.startsWith('data:')
  ) {
    return path;
  }

  if (!path.startsWith('/')) {
    return path;
  }

  if (!baseWithoutTrailingSlash || path.startsWith(`${baseWithoutTrailingSlash}/`) || path === baseWithoutTrailingSlash) {
    return path;
  }

  return `${baseWithoutTrailingSlash}${path}`;
};

export const stripBase = (pathname: string): string => {
  if (!baseWithoutTrailingSlash) {
    return pathname || '/';
  }

  if (pathname === baseWithoutTrailingSlash) {
    return '/';
  }

  if (pathname.startsWith(`${baseWithoutTrailingSlash}/`)) {
    return pathname.slice(baseWithoutTrailingSlash.length) || '/';
  }

  return pathname || '/';
};

export const normalizeRoute = (pathname: string): string => {
  const route = stripBase(pathname).split('#')[0].split('?')[0] || '/';

  return route.endsWith('/') ? route : `${route}/`;
};
