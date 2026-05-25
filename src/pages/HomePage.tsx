import { Hero } from '../components/sections/Hero'
import { About } from '../components/sections/About'
import { Skills } from '../components/sections/Skills'
import { Projects } from '../components/sections/Projects'
import { GitHubStats } from '../components/sections/GitHubStats'
import { BlogPreview } from '../components/sections/BlogPreview'
import { Contact } from '../components/sections/Contact'

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <GitHubStats />
      <BlogPreview />
      <Contact />
    </>
  )
}
