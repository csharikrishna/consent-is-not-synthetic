import type { MetadataRoute } from 'next';
import { siteUrl } from '../lib/seo';
import { nav } from '../lib/content';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const allPaths = Array.from(new Set([
    ...nav.map(([path]) => path),
    '/models/',
    '/open-weights/',
    '/library/',
    '/action/',
    '/press/',
    '/support/',
  ]));

  return siteUrl
    ? allPaths.map((path) => ({
        url: `${siteUrl}${path}`,
        changeFrequency: 'monthly',
        priority: path === '/' ? 1 : 0.8,
      }))
    : [];
}
