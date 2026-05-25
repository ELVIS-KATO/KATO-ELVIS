import { motion } from 'framer-motion'

interface SectionTitleProps {
  id?: string
  subtitle?: string
  title: string
}

export function SectionTitle({ id, subtitle, title }: SectionTitleProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="mb-10"
    >
      {subtitle && (
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-[#00F0FF]">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl font-bold text-white sm:text-4xl">
        <span className="neon-text-cyan">{title.split(' ')[0]}</span>{' '}
        {title.split(' ').slice(1).join(' ')}
      </h2>
      <div className="mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-[#00F0FF] to-[#FF00E5]" />
    </motion.div>
  )
}
