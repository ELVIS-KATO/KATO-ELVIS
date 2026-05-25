import { motion } from 'framer-motion'
import { OPEN_SOURCE_COMMUNITIES, SITE } from '../../data/site'
import { GlassCard } from '../ui/GlassCard'
import { SectionTitle } from '../ui/SectionTitle'
import { ImagePlaceholder } from '../ui/ImagePlaceholder'

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="section-container">
        <SectionTitle subtitle="Who I Am" title="About Me" />

        <div className="grid gap-8 lg:grid-cols-2">
          <GlassCard>
            <p className="mb-4 text-[#a0a0b8] leading-relaxed">
              I am <strong className="text-white">{SITE.name}</strong>, a{' '}
              {SITE.year.toLowerCase()} Software Engineering student at{' '}
              <strong className="text-white">{SITE.university}</strong>. I build
              full-stack applications for education and community organizations while
              contributing to global open source projects in healthcare, fintech, and
              education technology.
            </p>
            <p className="text-[#a0a0b8] leading-relaxed">
              My work spans school accounting systems, student records platforms, and
              collaborative open source codebases — always with a focus on clean
              architecture, RESTful APIs, and maintainable code.
            </p>
          </GlassCard>

          <div className="space-y-6">
            <GlassCard delay={0.1}>
              <h3 className="mb-4 text-lg font-semibold text-white">
                Open Source Communities
              </h3>
              <div className="flex flex-wrap gap-2">
                {OPEN_SOURCE_COMMUNITIES.map((community) => (
                  <motion.span
                    key={community}
                    whileHover={{ scale: 1.05 }}
                    className="rounded-full border border-[#00F0FF]/30 bg-[rgba(0,240,255,0.08)] px-3 py-1.5 text-sm text-[#00F0FF]"
                  >
                    {community}
                  </motion.span>
                ))}
              </div>
            </GlassCard>

            <div className="lg:hidden">
              <ImagePlaceholder dataImage="profile-photo.jpg" minHeight="min-h-[240px]">
                Add your photo here
              </ImagePlaceholder>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
