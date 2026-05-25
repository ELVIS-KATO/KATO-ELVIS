import { motion } from 'framer-motion'
import { SKILLS } from '../../data/site'
import { GlassCard } from '../ui/GlassCard'
import { SectionTitle } from '../ui/SectionTitle'

interface SkillBarProps {
  name: string
  level: number
  index: number
}

function SkillBar({ name, level, index }: SkillBarProps) {
  return (
    <div className="mb-4">
      <div className="mb-1 flex justify-between text-sm">
        <span className="font-medium text-white">{name}</span>
        <span className="text-[#a0a0b8]">{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-[rgba(20,20,40,0.8)]">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.08, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-[#00F0FF] to-[#FF00E5]"
          style={{ boxShadow: '0 0 12px rgba(0, 240, 255, 0.5)' }}
        />
      </div>
    </div>
  )
}

const CATEGORIES = [
  { key: 'languages' as const, label: 'Languages', icon: '{ }' },
  { key: 'frameworks' as const, label: 'Frameworks', icon: '⚛' },
  { key: 'tools' as const, label: 'Tools', icon: '⚙' },
]

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="section-container">
        <SectionTitle subtitle="Expertise" title="Skills" />

        <div className="grid gap-6 md:grid-cols-3">
          {CATEGORIES.map((cat, catIndex) => (
            <GlassCard key={cat.key} delay={catIndex * 0.1}>
              <div className="mb-4 flex items-center gap-2">
                <span className="text-2xl text-[#FF00E5]" aria-hidden>
                  {cat.icon}
                </span>
                <h3 className="text-lg font-semibold text-white">{cat.label}</h3>
              </div>
              {SKILLS[cat.key].map((skill, i) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} index={i} />
              ))}
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
