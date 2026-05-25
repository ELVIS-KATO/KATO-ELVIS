import { motion } from 'framer-motion'
import { PROJECTS } from '../../data/site'
import { GlassCard } from '../ui/GlassCard'
import { SectionTitle } from '../ui/SectionTitle'
import { ImagePlaceholder } from '../ui/ImagePlaceholder'

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        <SectionTitle subtitle="Featured Work" title="Projects" />

        <div className="grid gap-8 lg:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <GlassCard key={project.id} delay={index * 0.15} className="flex flex-col">
              <ImagePlaceholder
                dataImage={project.imageData}
                className="mb-6 w-full"
                minHeight="min-h-[220px]"
              >
               {`${project.placeholderText}`}
              </ImagePlaceholder>

              <h3 className="mb-2 text-xl font-bold text-white">{project.title}</h3>
              <p className="mb-4 flex-1 text-sm text-[#a0a0b8] leading-relaxed">
                {project.description}
              </p>

              <div className="mb-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-[#FF00E5]/30 bg-[rgba(255,0,229,0.08)] px-2 py-1 text-xs text-[#FF00E5]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <motion.a
                href={project.github}
                whileHover={{ x: 4 }}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#00F0FF] hover:underline"
              >
                View on GitHub →
                {/* REPLACE: set project.github to real repository URL in the site.ts*/}
              </motion.a>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
