import { mkdir, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

import { loadEnv } from 'vite'

const env = loadEnv('production', process.cwd(), 'VITE_')

const siteUrl = (env.VITE_SITE_URL || 'http://localhost:5173').replace(/\/+$/, '')
const routes = ['/', '/industrial-automation', '/heating', '/duro-mats', '/solar']
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes.map((route) => `  <url><loc>${siteUrl}${route}</loc></url>`).join('\n')}\n</urlset>\n`
const robots = `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`

await mkdir(resolve('dist'), { recursive: true })
await Promise.all([
  writeFile(resolve('dist/robots.txt'), robots, 'utf8'),
  writeFile(resolve('dist/sitemap.xml'), sitemap, 'utf8'),
])
console.log(`Generated robots.txt and sitemap.xml for ${siteUrl}`)
