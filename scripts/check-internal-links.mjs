import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');
const astroConfig = existsSync('astro.config.mjs') ? readFileSync('astro.config.mjs', 'utf8') : '';
const baseMatch = astroConfig.match(/base:\s*['\"]([^'\"]+)['\"]/);
const configuredBase = baseMatch ? baseMatch[1] : '/';
const basePath = configuredBase.endsWith('/') ? configuredBase : `${configuredBase}/`;
const baseWithoutTrailingSlash = basePath === '/' ? '' : basePath.replace(/\/$/, '');

const stripBase = (targetPath) => {
  if (!baseWithoutTrailingSlash) {
    return targetPath || '/';
  }

  if (targetPath === baseWithoutTrailingSlash) {
    return '/';
  }

  if (targetPath.startsWith(`${baseWithoutTrailingSlash}/`)) {
    return targetPath.slice(baseWithoutTrailingSlash.length) || '/';
  }

  return targetPath || '/';
};

if (!existsSync(distDir)) {
  console.error('dist/ was not found. Run `npm run build` before running this check.');
  process.exit(1);
}

const htmlFiles = [];
const walk = (directory) => {
  for (const entry of readdirSync(directory)) {
    const fullPath = path.join(directory, entry);
    const stats = statSync(fullPath);

    if (stats.isDirectory()) {
      walk(fullPath);
    } else if (entry.endsWith('.html')) {
      htmlFiles.push(fullPath);
    }
  }
};

walk(distDir);

const expectedRoutes = [
  '/',
  '/features/',
  '/docs/',
  '/docs/getting-started/',
  '/docs/printer-profiles/',
  '/docs/maintenance-history/',
  '/docs/preventive-maintenance/',
  '/docs/parts-and-consumables/',
  '/docs/local-first-data/',
  '/roadmap/',
  '/support/',
  '/download/',
  '/privacy/',
  '/terms/',
  '/license-terms/',
  '/refund-policy/',
  '/manufacturer-disclaimer/',
];

const routeToFile = (route) => {
  const cleanRoute = stripBase(route.split('#')[0].split('?')[0]);

  if (cleanRoute === '/' || cleanRoute === '') {
    return path.join(distDir, 'index.html');
  }

  const normalized = cleanRoute.endsWith('/') ? cleanRoute : `${cleanRoute}/`;
  return path.join(distDir, normalized, 'index.html');
};

const assetToFile = (assetPath) => path.join(distDir, stripBase(assetPath).replace(/^\//, ''));

const getIds = (html) => {
  const ids = new Set();
  for (const match of html.matchAll(/\s(?:id|name)=["']([^"']+)["']/g)) {
    ids.add(match[1]);
  }
  return ids;
};

const pageIds = new Map();
for (const file of htmlFiles) {
  pageIds.set(file, getIds(readFileSync(file, 'utf8')));
}

const failures = [];

for (const route of expectedRoutes) {
  const file = routeToFile(route);
  if (!existsSync(file)) {
    failures.push(`Expected route is missing generated HTML: ${route} -> ${path.relative(process.cwd(), file)}`);
  }
}

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const relativeFile = path.relative(process.cwd(), file);
  for (const match of html.matchAll(/\s(?:href|src)=["']([^"']+)["']/g)) {
    const value = match[1];

    if (
      value.startsWith('http://') ||
      value.startsWith('https://') ||
      value.startsWith('mailto:') ||
      value.startsWith('tel:') ||
      value.startsWith('data:') ||
      value.startsWith('javascript:')
    ) {
      continue;
    }

    if (value.startsWith('#')) {
      const anchor = decodeURIComponent(value.slice(1));
      if (anchor && !pageIds.get(file)?.has(anchor)) {
        failures.push(`${relativeFile} links to missing same-page anchor: ${value}`);
      }
      continue;
    }

    const [targetWithoutQuery, hash] = value.split('#');
    const target = stripBase(targetWithoutQuery.split('?')[0]);

    if (!target) {
      continue;
    }

    if (!target.startsWith('/')) {
      failures.push(`${relativeFile} uses a relative internal link that should be root-relative: ${value}`);
      continue;
    }

    const outputPath = path.extname(target) ? assetToFile(target) : routeToFile(target);
    if (!existsSync(outputPath)) {
      failures.push(`${relativeFile} links to missing internal target: ${value}`);
      continue;
    }

    if (hash && outputPath.endsWith('.html')) {
      const anchor = decodeURIComponent(hash);
      if (anchor && !pageIds.get(outputPath)?.has(anchor)) {
        failures.push(`${relativeFile} links to missing target-page anchor: ${value}`);
      }
    }
  }
}

if (failures.length > 0) {
  console.error('Internal link check failed:');
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log(`Checked ${htmlFiles.length} generated HTML files and ${expectedRoutes.length} expected routes with base ${basePath}.`);
