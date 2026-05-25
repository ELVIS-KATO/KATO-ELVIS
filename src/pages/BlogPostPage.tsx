import { Link, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { motion } from 'framer-motion'
import { getPostBySlug } from '../utils/blog'
import { GlassCard } from '../components/ui/GlassCard'

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getPostBySlug(slug) : undefined

  if (!post) {
    return (
      <div className="section-container min-h-screen pt-24 text-center">
        <h1 className="text-2xl font-bold text-white">Post not found</h1>
        <Link to="/blog" className="mt-4 inline-block text-[#00F0FF] hover:underline">
          ← Back to Blog
        </Link>
      </div>
    )
  }

  return (
    <article className="min-h-screen pt-24 pb-16">
      <div className="section-container max-w-3xl">
        <Link to="/blog" className="mb-6 inline-block text-sm text-[#00F0FF] hover:underline">
          ← Back to Blog
        </Link>

        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <p className="mb-2 text-sm text-[#00F0FF]">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">{post.title}</h1>
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#FF00E5]/30 px-2 py-0.5 text-xs text-[#FF00E5]"
              >
                #{tag}
              </span>
            ))}
          </div>
        </motion.header>

        <GlassCard>
          <div className="prose-blog">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
          </div>
        </GlassCard>
      </div>
    </article>
  )
}
