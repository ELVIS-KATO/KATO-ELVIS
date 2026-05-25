import { copyFileSync, existsSync } from 'fs'
import { join } from 'path'

const dist = 'dist'
const index = join(dist, 'index.html')
const notFound = join(dist, '404.html')

if (existsSync(index)) {
  copyFileSync(index, notFound)
  console.log('Copied index.html → 404.html for GitHub Pages SPA routing')
}
