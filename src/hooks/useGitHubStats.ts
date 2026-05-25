import { useEffect, useState } from 'react'
import { SITE } from '../data/site'

export interface GitHubLanguageStat {
  name: string
  count: number
  color: string
}

export interface GitHubRepoActivity {
  name: string
  updatedAt: string
  description: string | null
  stars: number
}

export interface GitHubStats {
  publicRepos: number
  followers: number
  totalStars: number
  topLanguages: GitHubLanguageStat[]
  recentActivity: GitHubRepoActivity[]
}

interface GitHubUser {
  public_repos: number
  followers: number
}

interface GitHubRepo {
  name: string
  stargazers_count: number
  language: string | null
  updated_at: string
  description: string | null
}

const LANGUAGE_COLORS: Record<string, string> = {
  Java: '#b07219',
  Python: '#3572A5',
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Go: '#00ADD8',
  Rust: '#dea584',
  Kotlin: '#A97BFF',
  Shell: '#89e051',
}

const FALLBACK_STATS: GitHubStats = {
  publicRepos: 25,
  followers: 4,
  totalStars: 12,
  topLanguages: [
    { name: 'Java', count: 0, color: LANGUAGE_COLORS.Java },
    { name: 'Python', count: 0, color: LANGUAGE_COLORS.Python },
    { name: 'TypeScript', count: 0, color: LANGUAGE_COLORS.TypeScript },
  ],
  recentActivity: [],
}

export function useGitHubStats() {
  const [stats, setStats] = useState<GitHubStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    async function fetchStats() {
      try {
        setLoading(true)
        setError(null)

        const headers: HeadersInit = {}
        const token = import.meta.env.VITE_GITHUB_TOKEN
        if (token) {
          headers['Authorization'] = `token ${token}`
        }

        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${SITE.github}`, {
            headers,
            signal: controller.signal,
          }),
          fetch(
            `https://api.github.com/users/${SITE.github}/repos?sort=updated&per_page=100`,
            { 
              headers,
              signal: controller.signal 
            },
          ),
        ])

        if (userRes.status === 403 || reposRes.status === 403) {
          throw new Error('rate_limit')
        }

        if (!userRes.ok || !reposRes.ok) {
          throw new Error('fetch_failed')
        }

        const user = (await userRes.json()) as GitHubUser
        const repos = (await reposRes.json()) as GitHubRepo[]

        const totalStars = repos.reduce((sum, r) => sum + r.stargazers_count, 0)

        const langCounts: Record<string, number> = {}
        for (const repo of repos) {
          if (repo.language) {
            langCounts[repo.language] = (langCounts[repo.language] ?? 0) + 1
          }
        }

        const topLanguages = Object.entries(langCounts)
          .sort(([, a], [, b]) => b - a)
          .slice(0, 5)
          .map(([name, count]) => ({
            name,
            count,
            color: LANGUAGE_COLORS[name] ?? '#8b8b9e',
          }))

        const recentActivity = repos.slice(0, 6).map((r) => ({
          name: r.name,
          updatedAt: r.updated_at,
          description: r.description,
          stars: r.stargazers_count,
        }))

        setStats({
          publicRepos: user.public_repos,
          followers: user.followers,
          totalStars,
          topLanguages,
          recentActivity,
        })
      } catch (err) {
        if ((err as Error).name === 'AbortError') return
        const message =
          err instanceof Error && err.message === 'rate_limit'
            ? 'GitHub API rate limit reached. Showing cached fallback — try again later.'
            : 'Unable to load GitHub stats. Showing fallback data.'
        setError(message)
        setStats(FALLBACK_STATS)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
    return () => controller.abort()
  }, [])

  return { stats, loading, error }
}
