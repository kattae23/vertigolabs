import Analytics from '@/components/home/analytics'
import AppDownloads from '@/components/home/app-downloads'
import { Hero } from '@/components/home/hero/hero'
import HowItWorks from '@/components/home/how-it-works/how-it-works'
import ProjectsContainer from '@/components/home/projects/projects'

// export const runtime = 'edge'

export default function Home () {
  return (
    <main>
      <Hero />
      <ProjectsContainer buttonLinkText='Ver más proyectos' />
      <Analytics />
      <HowItWorks />
      <ProjectsContainer
        {...{
          basicInvestorTop: false,
          investmentInformationAnalytics: false,
          buttonLinkText: 'ver listado completo'
        }}
      />
      <AppDownloads />
    </main>
  )
}
