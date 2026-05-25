/**
 * Browser-compatible frontmatter parser (gray-matter-style `---` blocks).
 * gray-matter uses Node Buffer and does not work in Vite client bundles.
 */

export interface FrontmatterData {
  title?: string
  date?: string
  excerpt?: string
  tags?: string[]
  [key: string]: string | string[] | undefined
}

const FRONTMATTER_RE = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/

function parseYamlBlock(yaml: string): FrontmatterData {
  const data: FrontmatterData = {}
  let currentListKey: string | null = null

  for (const line of yaml.split(/\r?\n/)) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue

    const listMatch = line.match(/^\s+-\s+(.+)$/)
    if (listMatch && currentListKey) {
      const arr = (data[currentListKey] as string[]) ?? []
      arr.push(listMatch[1].trim().replace(/^["']|["']$/g, ''))
      data[currentListKey] = arr
      continue
    }

    const kvMatch = line.match(/^([\w-]+):\s*(.*)$/)
    if (!kvMatch) continue

    const [, key, rawValue] = kvMatch
    currentListKey = null

    if (rawValue === '' || rawValue === undefined) {
      currentListKey = key
      data[key] = []
      continue
    }

    const value = rawValue.trim().replace(/^["']|["']$/g, '')
    data[key] = value
  }

  return data
}

export function parseFrontmatter(raw: string): {
  data: FrontmatterData
  content: string
} {
  const match = raw.match(FRONTMATTER_RE)
  if (!match) {
    return { data: {}, content: raw.trim() }
  }

  return {
    data: parseYamlBlock(match[1]),
    content: match[2].trim(),
  }
}
