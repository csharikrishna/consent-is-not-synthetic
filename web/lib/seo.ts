import type { Metadata } from 'next';
import { siteName, descriptions } from './content';

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function assetPath(p: string): string {
  return `${basePath}${p.startsWith('/') ? p : '/' + p}`;
}

export const siteUrl = (() => {
  try {
    const raw = (process.env.NEXT_PUBLIC_SITE_URL || '').trim().replace(/\/+$/, '');
    if (!raw) return undefined;
    const url = new URL(raw);
    if (url.protocol !== 'https:') return undefined;
    const pathPart = url.pathname && url.pathname !== '/' ? url.pathname.replace(/\/+$/, '') : basePath;
    return `${url.origin}${pathPart}`;
  } catch {
    return undefined;
  }
})();

export const origin = siteUrl;

export function pageMeta(path: string, title: string, customDescription?: string): Metadata {
  const description = customDescription || descriptions[path];
  const fullUrl = siteUrl ? `${siteUrl}${path}` : undefined;
  const socialImg = siteUrl ? `${siteUrl}/assets/social-card.png` : undefined;
  return {
    title,
    description,
    alternates: fullUrl ? { canonical: fullUrl } : undefined,
    openGraph: {
      type: 'website',
      siteName,
      title: `${title} | ${siteName}`,
      description,
      url: fullUrl,
      images: socialImg ? [{ url: socialImg, width: 1200, height: 630, alt: 'Consent Is Not Synthetic — evidence to action' }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${siteName}`,
      description,
      images: socialImg ? [socialImg] : undefined,
    },
  };
}
