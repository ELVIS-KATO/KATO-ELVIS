import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getAllPosts } from '../utils/blog'
import { GlassCard } from '../components/ui/GlassCard'

export function BlogListPage() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Link to="/" className="mb-4 inline-block text-sm text-[#00F0FF] hover:underline">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-white">
            <span className="neon-text-magenta">Blog</span>
          </h1>
          <p className="mt-2 text-[#a0a0b8]">
            Thoughts on open source, university, and software engineering.
          </p>
        </motion.div>

        <div className="grid gap-6">
          {posts.map((post, i) => (
            <GlassCard key={post.slug} delay={i * 0.08}>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="mb-2 text-xs text-[#00F0FF]">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                  <h2 className="mb-2 text-2xl font-bold text-white">{post.title}</h2>
                  <p className="text-[#a0a0b8]">{post.excerpt}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#FF00E5]/30 px-2 py-0.5 text-xs text-[#FF00E5]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  to={`/blog/${post.slug}`}
                  className="btn-outline shrink-0 self-start"
                >
                  Read Post
                </Link>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  )
}
