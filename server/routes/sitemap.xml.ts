import { readdir, readFile } from 'node:fs/promises'
import { join } from 'node:path'

const BASE_URL = 'https://pawelkucia.com'

const extractDate = async (filePath: string): Promise<string> => {
  try {
    const raw = await readFile(filePath, 'utf-8')
    const match = raw.match(/^---[\s\S]*?\ndate:\s*(.+?)\s*\n/)
    if (match) return new Date(match[1]).toISOString().split('T')[0]
  } catch {}
  return new Date().toISOString().split('T')[0]
}

export default defineEventHandler(async (event) => {
  const blogDir = join(process.cwd(), 'content/blog')

  let posts: { slug: string; date: string }[] = []
  try {
    const files = await readdir(blogDir)
    posts = await Promise.all(
      files
        .filter(f => f.endsWith('.md'))
        .map(async f => ({
          slug: f.replace(/\.md$/, ''),
          date: await extractDate(join(blogDir, f))
        }))
    )
  } catch {}

  const today = new Date().toISOString().split('T')[0]

  const entries = [
    `  <url><loc>${BASE_URL}/</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>1.0</priority></url>`,
    `  <url><loc>${BASE_URL}/blog</loc><lastmod>${today}</lastmod><changefreq>weekly</changefreq><priority>0.9</priority></url>`,
    ...posts.map(p =>
      `  <url><loc>${BASE_URL}/blog/${p.slug}</loc><lastmod>${p.date}</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>`
    )
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join('\n')}\n</urlset>`

  setHeader(event, 'Content-Type', 'application/xml; charset=utf-8')
  return xml
})
