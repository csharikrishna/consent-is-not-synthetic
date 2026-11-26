'use client';
import { assetPath } from '../lib/seo';

export function HeroImage() {
  return (
    <img
      src={assetPath('/assets/hero.svg')}
      alt="Editorial illustration of digital integrity shield defending against synthetic media fragments"
      width="600"
      height="560"
      loading="lazy"
    />
  );
}
