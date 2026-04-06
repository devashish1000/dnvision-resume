import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://dnvision-resume.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://dnvision-resume.vercel.app/tailor',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://dnvision-resume.vercel.app/dashboard',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.4,
    },
  ]
}
