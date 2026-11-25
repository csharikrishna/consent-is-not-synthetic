import type {Metadata} from 'next';
import Script from 'next/script';
import localFont from 'next/font/local';
import {siteName,descriptions} from '../lib/content';
import {origin, assetPath} from '../lib/seo';
import {Header,Footer} from '../components/ui';
import './globals.css';

const sourceSerif = localFont({
  src: [
    { path: './fonts/source-serif-4-latin-400-normal.woff2', weight: '400', style: 'normal' },
    { path: './fonts/source-serif-4-latin-400-italic.woff2', weight: '400', style: 'italic' },
    { path: './fonts/source-serif-4-latin-600-normal.woff2', weight: '600', style: 'normal' },
    { path: './fonts/source-serif-4-latin-700-normal.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-serif',
  display: 'swap',
});

const inter = localFont({
  src: [
    { path: './fonts/inter-latin-400-normal.woff2', weight: '400', style: 'normal' },
    { path: './fonts/inter-latin-600-normal.woff2', weight: '600', style: 'normal' },
    { path: './fonts/inter-latin-700-normal.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {title:{default:siteName,template:`%s | ${siteName}`},description:descriptions['/'],metadataBase:origin?new URL(origin):undefined,robots:origin?{index:true,follow:true}:{index:false,follow:false},icons:{icon:assetPath('/assets/mark.svg')},applicationName:siteName};
export default function RootLayout({children}:{children:React.ReactNode}) {
 return <html lang="en" className={`${sourceSerif.variable} ${inter.variable}`}><body><a className="skip" href="#main">Skip to content</a><Header/><main id="main">{children}</main><Footer/><Script src={assetPath('/interactions.js')} strategy="afterInteractive"/></body></html>;
}
