/* eslint-disable no-unused-vars */
import Analytics from '@/components/home/analytics'
import AppDownloads from '@/components/home/app-downloads'
import { Hero } from '@/components/home/hero/hero'
import HowItWorks from '@/components/home/how-it-works/how-it-works'
import ProjectsContainer from '@/components/home/projects/projects'
import { ServerRuntime } from 'next'

// export const runtime: ServerRuntime = 'edge'

export default function Home () {
  return (
    <main className='-mt-[96px]'>
      <Hero />
      <ProjectsContainer
        filter='onfunded'
        {...{
          investmentInformationAnalytics: true,
          buttonLinkText: 'Ver más proyectos',
          title: 'Proyectos en los que invertir'
        }}
      />
      <Analytics />
      <HowItWorks />
      <ProjectsContainer
        {...{
          title: 'Últimos proyectos devueltos con garantía hipotecaria',
          buttonLinkText: 'ver listado completo'
        }}
      />
      <AppDownloads />
    </main>
  )
}
