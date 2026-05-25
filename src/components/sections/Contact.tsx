import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { SITE } from '../../data/site'
import { GlassCard } from '../ui/GlassCard'
import { SectionTitle } from '../ui/SectionTitle'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const payload = {
      name: data.get('name'),
      email: data.get('email'),
      message: data.get('message'),
    }
    // No backend — logs to console as required
    console.log('[Contact Form Submission]', payload)
    setSubmitted(true)
    form.reset()
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="contact" className="py-24">
      <div className="section-container">
        <SectionTitle subtitle="Get In Touch" title="Contact" />

        <div className="grid gap-8 lg:grid-cols-2">
          <GlassCard>
            <h3 className="mb-6 text-lg font-semibold text-white">Contact Information</h3>
            <ul className="space-y-4 text-[#a0a0b8]">
              <li>
                <span className="block text-xs uppercase text-[#00F0FF]">Email</span>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-white hover:text-[#00F0FF]"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <span className="block text-xs uppercase text-[#00F0FF]">Phone (UG)</span>
                <a href={SITE.phoneHref} className="text-white hover:text-[#00F0FF]">
                  {SITE.phone}
                </a>
              </li>
              <li>
                <span className="block text-xs uppercase text-[#00F0FF]">GitHub</span>
                <a
                  href={SITE.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#FF00E5]"
                >
                  github.com/{SITE.github}
                </a>
              </li>
              <li>
                <span className="block text-xs uppercase text-[#00F0FF]">LinkedIn</span>
                <a
                  href={SITE.linkedin}
                  className="text-white hover:text-[#00F0FF]"
                >
                  {/* REPLACE: LinkedIn profile URL in src/data/site.ts */}
                  LinkedIn Profile (To be attached)
                </a>
              </li>
            </ul>
          </GlassCard>

          <GlassCard delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-1 block text-sm text-[#a0a0b8]">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-lg border border-[#00F0FF]/20 bg-[rgba(20,20,40,0.6)] px-4 py-3 text-white outline-none transition focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-sm text-[#a0a0b8]">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-[#00F0FF]/20 bg-[rgba(20,20,40,0.6)] px-4 py-3 text-white outline-none transition focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF]"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1 block text-sm text-[#a0a0b8]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full resize-none rounded-lg border border-[#00F0FF]/20 bg-[rgba(20,20,40,0.6)] px-4 py-3 text-white outline-none transition focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF]"
                  placeholder="Your message…"
                />
              </div>
              <motion.button
                type="submit"
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full"
              >
                Send Message
              </motion.button>
              {submitted && (
                <p className="text-center text-sm text-[#00F0FF]">
                  Message logged to console — connect a backend or Formspree when ready.
                </p>
              )}
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
