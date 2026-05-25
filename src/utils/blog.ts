import { parseFrontmatter } from './frontmatter'

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  tags: string[]
  content: string
}

const blogModules = import.meta.glob('/src/content/blog/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>

function slugFromPath(path: string): string {
  const match = path.match(/\/([^/]+)\.md$/)
  return match?.[1] ?? path
}

export function getAllPosts(): BlogPost[] {
  const posts = Object.entries(blogModules).map(([path, raw]) => {
    const { data, content } = parseFrontmatter(raw)
    return {
      slug: slugFromPath(path),
      title: data.title ?? 'Untitled',
      date: data.date ?? '',
      excerpt: data.excerpt ?? '',
      tags: Array.isArray(data.tags) ? data.tags : [],
      content,
    }
  })

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((p) => p.slug === slug)
}
