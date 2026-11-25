import type { Metadata } from 'next';
import {siteName,descriptions} from './content';
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
export function assetPath(p: string): string {
  return `${basePath}${p.startsWith('/') ? p : '/' + p}`;
}
export const origin = (()=>{try{const url = new URL(process.env.NEXT_PUBLIC_SITE_URL || ''); return url.protocol==='https:' ? url.origin : undefined;}catch{return undefined;}})();
export function pageMeta(path:string,title:string,customDescription?:string):Metadata {
 const description=customDescription||descriptions[path];
 return {title,description,alternates:origin?{canonical:origin+path}:undefined,openGraph:{type:'website',siteName,title:`${title} | ${siteName}`,description,url:origin?origin+path:undefined,images:origin?[{url:origin+'/assets/social-card.png',width:1200,height:630,alt:'Consent Is Not Synthetic — evidence to action'}]:undefined},twitter:{card:'summary_large_image',title:`${title} | ${siteName}`,description,images:origin?[origin+'/assets/social-card.png']:undefined}};
}
