import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://www.modujonghap.co.kr/sitemap-main.xml</loc>
  </sitemap>
  <sitemap>
    <loc>https://www.modujonghap.co.kr/sitemap-mold.xml</loc>
  </sitemap>
  <sitemap>
    <loc>https://www.modujonghap.co.kr/sitemap-finish.xml</loc>
  </sitemap>
</sitemapindex>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'X-Content-Type-Options': 'nosniff',
    },
  });
}
