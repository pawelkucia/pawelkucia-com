import { serverQueryContent } from '#content/server'

const BASE_URL = 'https://pawelkucia.com'

const toDate = (value: unknown): string => {
  if (!value) return new Date().toISOString().split('T')[0]
  return new Date(value as string).toISOString().split('T')[0]
}

const url = (loc: string, opts: { lastmod?: unknown; changefreq: string; priority: number }) => `
  <url>
    <loc>${BASE_URL}${loc}</loc>
    <lastmod>${toDate(opts.lastmod)}</lastmod>
    <changefreq>${opts.changefreq}</changefreq>
    <priority>${opts.priority.toFixed(1)}</priority>
  </url>`

export default defineEventHandler(async (event) => {
  const posts = await serverQueryContent(event, '/blog').only(['_path', 'date']).find()

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${url('/', { changefreq: 'monthly', priority: 1.0 })}
${url('/blog', { changefreq: 'weekly', priority: 0.9 })}
${posts.map(post => url(post._path!, { lastmod: post.date, changefreq: 'monthly', priority: 0.7 })).join('')}
</urlset>`

  setHeader(event, 'Content-Type', 'application/xml; charset=utf-8')
  return xml
})
