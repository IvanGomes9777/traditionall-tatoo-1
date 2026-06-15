import type { MetadataRoute } from 'next';

const SITE_URL = 'https://anker-dolch.de';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/impressum', '/datenschutz', '/agb'],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
