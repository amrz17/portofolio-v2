import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = ['', '/blog-detail/scalable-code']

  return routes.map(route => ({
    url: `${process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'}${route}`
  }))
}
