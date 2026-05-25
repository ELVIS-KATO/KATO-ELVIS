import { Link } from 'react-router-dom'
import { getAllPosts } from '../../utils/blog'
import { GlassCard } from '../ui/GlassCard'
import { SectionTitle } from '../ui/SectionTitle'

export function BlogPreview() {
  const posts = getAllPosts().slice(0, 2)

  return (
    <section id="blog-preview" className="py-24">
      <div className="section-container">
        <SectionTitle subtitle="Writing" title="Latest Blog" />

        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post, i) => (
            <GlassCard key={post.slug} delay={i * 0.1}>
              <p className="mb-2 text-xs text-[#00F0FF]">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
              <h3 className="mb-2 text-xl font-bold text-white">{post.title}</h3>
              <p className="mb-4 text-sm text-[#a0a0b8]">{post.excerpt}</p>
              <Link
                to={`/blog/${post.slug}`}
                className="text-sm font-semibold text-[#FF00E5] hover:underline"
              >
                Read more →
              </Link>
            </GlassCard>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link to="/blog" className="btn-outline">
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  )
}
