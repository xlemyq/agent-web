import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'UP5Star SEO',
    short_name: 'UP5Star',
    description: 'Agencja SEO klasy enterprise: audyty 360°, topical authority, link building i growth operations.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0F0F0F',
    theme_color: '#0F0F0F',
    icons: [
      {
        src: '/icons/brand.svg',
        sizes: 'any',
        type: 'image/svg+xml'
      }
    ]
  };
}
