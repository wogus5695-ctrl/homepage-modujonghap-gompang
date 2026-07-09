import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/_next/'],
    },
    sitemap: 'https://www.modujonghap.co.kr/sitemap.xml',
  }
}
