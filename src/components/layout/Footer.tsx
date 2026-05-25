import { SITE } from '../../data/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 bg-[rgba(10,10,15,0.9)] py-10">
      <div className="section-container flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-semibold text-white">{SITE.name}</p>
          <p className="text-sm text-[#a0a0b8]">
            {SITE.year} · {SITE.university}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <a
            href={`mailto:${SITE.email}`}
            className="text-[#a0a0b8] transition-colors hover:text-[#00F0FF]"
          >
            {SITE.email}
          </a>
          <a
            href={SITE.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#a0a0b8] transition-colors hover:text-[#FF00E5]"
          >
            GitHub
          </a>
          <a
            href={SITE.linkedin}
            className="text-[#a0a0b8] transition-colors hover:text-[#00F0FF]"
          >
            LinkedIn
          </a>
        </div>

        <p className="text-xs text-[#a0a0b8]">
          © {year} {SITE.name}. Built with React & Three.js.
        </p>
      </div>
    </footer>
  )
}
