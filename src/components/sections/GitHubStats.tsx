import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { SITE } from '../../data/site'
import { useGitHubStats } from '../../hooks/useGitHubStats'
import { GlassCard } from '../ui/GlassCard'
import { SectionTitle } from '../ui/SectionTitle'

function StatCard({
  label,
  value,
}: {
  label: string
  value: number | string | ReactNode
}) {
  return (
    <div className="rounded-xl border border-[#00F0FF]/20 bg-[rgba(0,240,255,0.05)] p-4 text-center">
      <p className="text-2xl font-bold text-[#00F0FF] neon-text-cyan">{value}</p>
      <p className="mt-1 text-xs uppercase tracking-wide text-[#a0a0b8]">{label}</p>
    </div>
  )
}

export function GitHubStats() {
  const { stats, loading, error } = useGitHubStats()

  return (
    <section id="github-stats" className="py-24">
      <div className="section-container">
        <SectionTitle subtitle="Live Data" title="GitHub Stats" />

        {error && (
          <div className="mb-6 rounded-lg border border-[#FF00E5]/40 bg-[rgba(255,0,229,0.08)] px-4 py-3 text-sm text-[#FF00E5]">
            {error}
          </div>
        )}

        {loading && (
          <p className="mb-6 text-center text-[#a0a0b8]">Loading GitHub data…</p>
        )}

        {stats && (
          <>
            <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <StatCard label="Public Repos" value={stats.publicRepos} />
              <StatCard label="Total Stars" value={stats.totalStars} />
              <StatCard label="Followers" value={stats.followers} />
              <StatCard
                label="Profile"
                value={
                  <a
                    href={SITE.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base hover:underline"
                  >
                    @{SITE.github}
                  </a>
                }
              />
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <GlassCard>
                <h3 className="mb-4 text-lg font-semibold text-white">Top Languages</h3>
                {stats.topLanguages.length === 0 ? (
                  <p className="text-sm text-[#a0a0b8]">No language data available.</p>
                ) : (
                  <ul className="space-y-3">
                    {stats.topLanguages.map((lang) => {
                      const max = stats.topLanguages[0]?.count ?? 1
                      const pct = Math.round((lang.count / max) * 100)
                      return (
                        <li key={lang.name}>
                          <div className="mb-1 flex justify-between text-sm">
                            <span className="flex items-center gap-2">
                              <span
                                className="inline-block h-3 w-3 rounded-full"
                                style={{ backgroundColor: lang.color }}
                              />
                              {lang.name}
                            </span>
                            <span className="text-[#a0a0b8]">{lang.count} repos</span>
                          </div>
                          <div className="h-2 overflow-hidden rounded-full bg-[rgba(20,20,40,0.8)]">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${pct}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8 }}
                              className="h-full rounded-full"
                              style={{ backgroundColor: lang.color }}
                            />
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                )}
              </GlassCard>

              <GlassCard delay={0.1}>
                <h3 className="mb-4 text-lg font-semibold text-white">
                  Contribution Activity
                </h3>
                <div className="mb-6 overflow-hidden rounded-lg bg-white/5 p-4">
                  <img
                    src={`https://ghchart.rshah.org/00F0FF/${SITE.github}`}
                    alt={`${SITE.github}'s GitHub contribution chart`}
                    className="w-full invert-0 brightness-110"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                  <p className="mt-2 text-center text-[10px] text-[#a0a0b8]">
                    Live GitHub contribution heatmap for @{SITE.github}
                  </p>
                </div>
                
                <h3 className="mb-4 text-lg font-semibold text-white">
                  Recent Repository Activity
                </h3>
                {stats.recentActivity.length === 0 ? (
                  <p className="text-sm text-[#a0a0b8]">No recent activity to display.</p>
                ) : (
                  <ul className="max-h-72 space-y-3 overflow-y-auto pr-2">
                    {stats.recentActivity.map((repo) => (
                      <li
                        key={repo.name}
                        className="rounded-lg border border-white/5 bg-[rgba(20,20,40,0.4)] p-3"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <a
                            href={`${SITE.githubUrl}/${repo.name}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-[#00F0FF] hover:underline"
                          >
                            {repo.name}
                          </a>
                          <span className="shrink-0 text-xs text-[#FF00E5]">
                            ★ {repo.stars}
                          </span>
                        </div>
                        {repo.description && (
                          <p className="mt-1 line-clamp-2 text-xs text-[#a0a0b8]">
                            {repo.description}
                          </p>
                        )}
                        <p className="mt-1 text-xs text-[#a0a0b8]">
                          Updated {new Date(repo.updatedAt).toLocaleDateString()}
                        </p>
                      </li>
                    ))}
                  </ul>
                )}
              </GlassCard>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
