import Analytics from '@/components/home/analytics'
import { Hero } from '@/components/home/hero/hero'
import ProjectsContainer from '@/components/home/projects/projects'

export default function Home () {
  return (
    <main>
      <Hero />
      <ProjectsContainer />
      <Analytics />
    </main>
  )
}
