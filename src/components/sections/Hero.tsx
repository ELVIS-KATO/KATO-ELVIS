import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { SITE } from '../../data/site'
import { ImagePlaceholder } from '../ui/ImagePlaceholder'

const Scene3D = lazy(() => import('../three/Scene3D'))

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <Suspense fallback={null}>
        <Scene3D />
      </Suspense>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0F]/40 to-[#0A0A0F]" />

      <div className="section-container relative z-10 grid gap-12 py-20 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pointer-events-auto"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[#00F0FF]">
            Portfolio & Resume
          </p>
          <h1 className="mb-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-[#00F0FF] to-[#FF00E5] bg-clip-text text-transparent neon-text-cyan">
              {SITE.name}
            </span>
          </h1>
          <p className="mb-2 text-xl text-[#00F0FF] sm:text-2xl">{SITE.title}</p>
          <p className="mb-8 max-w-xl text-[#a0a0b8] leading-relaxed">{SITE.bio}</p>

          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary">
              Contact Me
            </a>
            {/* REPLACE /public/resume-kato-elvis.pdf with actual PDF */}
            <a href={SITE.resumePath} download className="btn-outline">
              Download Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="pointer-events-auto hidden lg:block"
        >
          {/* REPLACE: swap placeholder with <img src="/profile-photo.jpg" alt="Kato Elvis" /> */}
          <ImagePlaceholder
            dataImage="profile-photo.jpg"
            className="aspect-square max-w-md mx-auto"
            minHeight="min-h-[320px]"
          >
            <img src="./DP2.jpg" alt="Kato Elvis" />
          </ImagePlaceholder>
        </motion.div>
      </div>
    </section>
  )
}
