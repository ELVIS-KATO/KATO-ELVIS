import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS, SITE } from '../../data/site'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  const handleNavClick = (href: string) => {
    setOpen(false)
    if (href.startsWith('/#')) {
      const id = href.slice(2)
      if (!isHome) {
        navigate('/')
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }
      return
    }
    if (href === '/blog') navigate('/blog')
  }

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#0A0A0F]/80 backdrop-blur-md">
      <nav className="section-container flex h-16 items-center justify-between">
        <Link
          to="/"
          className="text-lg font-bold tracking-tight"
          onClick={() => setOpen(false)}
        >
          <span className="text-[#00F0FF] neon-text-cyan">K</span>
          <span className="text-white">ato</span>
          <span className="text-[#FF00E5]">.</span>
        </Link>

        <ul className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) =>
            link.href === '/blog' ? (
              <li key={link.href}>
                <Link
                  to="/blog"
                  className="text-sm text-[#a0a0b8] transition-colors hover:text-[#00F0FF]"
                >
                  {link.label}
                </Link>
              </li>
            ) : link.href === '/' ? (
              <li key={link.href}>
                <Link
                  to="/"
                  className="text-sm text-[#a0a0b8] transition-colors hover:text-[#00F0FF]"
                >
                  {link.label}
                </Link>
              </li>
            ) : (
              <li key={link.href}>
                <button
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm text-[#a0a0b8] transition-colors hover:text-[#00F0FF]"
                >
                  {link.label}
                </button>
              </li>
            ),
          )}
        </ul>

        <a
          href={SITE.resumePath}
          download
          className="btn-primary hidden text-sm md:inline-flex"
        >
          Resume
        </a>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span
            className={`block h-0.5 w-6 bg-[#00F0FF] transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-opacity ${open ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#FF00E5] transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/5 bg-[#0A0A0F]/95 md:hidden"
          >
            <ul className="flex flex-col gap-4 px-4 py-6">
              {NAV_LINKS.map((link) =>
                link.href === '/blog' || link.href === '/' ? (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="block text-[#a0a0b8] hover:text-[#00F0FF]"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ) : (
                  <li key={link.href}>
                    <button
                      type="button"
                      className="block text-left text-[#a0a0b8] hover:text-[#00F0FF]"
                      onClick={() => handleNavClick(link.href)}
                    >
                      {link.label}
                    </button>
                  </li>
                ),
              )}
              <li>
                <a
                  href={SITE.resumePath}
                  download
                  className="btn-primary w-full text-center"
                  onClick={() => setOpen(false)}
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
