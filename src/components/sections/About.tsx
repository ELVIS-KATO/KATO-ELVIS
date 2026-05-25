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
            <div className="space-y-6 text-[#a0a0b8] leading-relaxed">
              <p>
                I’m <strong className="text-white">{SITE.name}</strong>, a {SITE.year.toLowerCase()} Software Engineering student at <strong className="text-white">{SITE.university}</strong>. 
                I don’t just learn in isolation — I contribute to building production-ready systems that real organizations depend on.
              </p>
              
              <p>
                Right now, I develop full-stack applications for education institutions and community organizations. 
                On the side, I actively contribute to global open source projects in healthcare, fintech, and education technology. 
                I've built systems like school accounting platforms and student records from scratch, prioritizing clean architecture and code that survives handoffs.
              </p>

              <div>
                <p className="mb-3 font-medium text-white underline decoration-[#00F0FF]/30 underline-offset-4">What that looks like practically:</p>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-[#00F0FF] mt-1 text-xs">✦</span>
                    <span>Writing backend logic that handles attendance tracking for a rural school with spotty internet.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#00F0FF] mt-1 text-xs">✦</span>
                    <span>Reviewing PRs for a fintech tool used by small savings groups.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#00F0FF] mt-1 text-xs">✦</span>
                    <span>Debugging sync issues in an open-source EMR (Electronic Medical Records) system.</span>
                  </li>
                </ul>
              </div>

              <p>
                I test my code by deploying it — not just with unit tests, but by watching <span className="text-white italic">real users break things</span>. 
                That loop of failure, learning, and rebuilding taught me resilience and user-centric problem-solving more effectively than any classroom.
              </p>
              
              <p className="pt-4 text-white font-medium border-t border-white/5">
                I don't wait for permission to build things that matter.
              </p>
            </div>
          </GlassCard>

          <div className="space-y-6">
            <GlassCard delay={0.1}>
              <h3 className="mb-4 text-lg font-semibold text-white flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                What I’m Working On Now
              </h3>
              <ul className="space-y-4">
                <li className="group">
                  <div className="text-sm font-medium text-[#00F0FF] group-hover:text-white transition-colors">Bugema University Dev Team</div>
                  <div className="text-xs text-[#a0a0b8]">Contibuting on building an internal events portal for student societies.</div>
                </li>
                <li className="group">
                  <div className="text-sm font-medium text-[#00F0FF] group-hover:text-white transition-colors">Open source (Mifos)</div>
                  <div className="text-xs text-[#a0a0b8]">Contibuting toward the change of the web app from angular to the use of React framework.</div>
                </li>
                <li className="group">
                  <div className="text-sm font-medium text-[#00F0FF] group-hover:text-white transition-colors">Freelance</div>
                  <div className="text-xs text-[#a0a0b8]">Helping a local community school automate their students academic records and grading.</div>
                </li>
              </ul>
            </GlassCard>

            <GlassCard delay={0.2}>
              <h3 className="mb-4 text-lg font-semibold text-white">
                Open Source Communities
              </h3>
              <div className="flex flex-wrap gap-2">
                {OPEN_SOURCE_COMMUNITIES.map((community) => {
                  const currentYear = new Date().getFullYear()
                  const years = community.startYear ? currentYear - community.startYear : 0
                  const durationLabel = years > 0 ? ` (${years} ${years === 1 ? 'yr' : 'yrs'})` : ''
                  
                  return (
                    <motion.span
                      key={community.name}
                      whileHover={{ scale: 1.05 }}
                      className="rounded-full border border-[#00F0FF]/30 bg-[rgba(0,240,255,0.08)] px-3 py-1.5 text-sm text-[#00F0FF]"
                    >
                      {community.name}
                      {durationLabel}
                    </motion.span>
                  )
                })}
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
