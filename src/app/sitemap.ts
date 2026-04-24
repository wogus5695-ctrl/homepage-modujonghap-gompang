import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://modu-mold.com'
  
  const regions = [
    "강서구", "염창동", "등촌동", "화곡본동", "화곡동", 
    "우장산동", "가양동", "발산동", "공항동", "방화동"
  ]
  const services = ["곰팡이제거", "단열시공", "탄성코트"]

  const dynamicRoutes = regions.flatMap((region) =>
    services.map((service) => ({
      url: `${baseUrl}/?k=${encodeURIComponent(`${region}-${service}`)}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))
  )

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/sitemap-seoul`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    ...dynamicRoutes,
  ]
}
