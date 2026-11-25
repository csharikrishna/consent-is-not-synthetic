import type {MetadataRoute} from 'next';
import {origin} from '../lib/seo';
import {nav} from '../lib/content';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const allPaths = Array.from(new Set([
    ...nav.map(([path]) => path),
    '/models/',
    '/open-weights/',
    '/library/',
    '/action/',
    '/press/',
    '/support/'
  ]));

  return origin ? allPaths.map((path) => ({
    url: origin + path,
    lastModified: '2026-11-25',
    changeFrequency: 'monthly',
    priority: path === '/' ? 1 : 0.8
  })) : [];
}
