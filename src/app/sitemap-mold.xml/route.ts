import { NextResponse } from 'next/server';
import { areaData, moldServices } from '@/lib/areaData';

export const dynamic = 'force-static';

export async function GET() {
  const baseUrl = 'https://www.modujonghap.co.kr';
  const currentDate = new Date().toISOString().split('T')[0];

  // Generate paths
  const urls: string[] = [];

  areaData.forEach((area) => {
    const baseName = area.name.length > 2 ? area.name.replace(/[구시]$/, "") : area.name;
    
    // 1단계: 구/시 단위 키워드
    moldServices.forEach((service) => {
      // 풀네임 버전 (ex. 강서구-곰팡이제거)
      if (area.name !== baseName) {
        const fullPath = `${baseUrl}/k/${encodeURIComponent(`${area.name}-${service}`)}`;
        urls.push(fullPath);
      }
      
      // 줄임말 버전 (ex. 강서-곰팡이제거)
      const shortPath = `${baseUrl}/k/${encodeURIComponent(`${baseName}-${service}`)}`;
      urls.push(shortPath);
    });
    
    // 2단계: 동 단위 키워드
    area.dongs.forEach((dong) => {
      moldServices.forEach((service) => {
        const dongPath = `${baseUrl}/k/${encodeURIComponent(`${dong}-${service}`)}`;
        urls.push(dongPath);
      });
    });
  });

  const uniqueUrls = Array.from(new Set(urls));

  const xmlEntries = uniqueUrls.map((url) => `  <url>
    <loc>${url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>`).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlEntries}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'X-Content-Type-Options': 'nosniff',
    },
  });
}
