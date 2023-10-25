'use client'
import { projectsArr } from '@/components/home/projects/project-carousel'
import ProjectCard from '@/components/projects/project-card/project-card'
import React from 'react'

const Oportunidades = () => {
  return (
    <main className='flex'>
      {
        projectsArr.map((item, index) => (
          <ProjectCard key={index} {...{ item, investmentInformationAnalytics: false }} />
        ))
      }
    </main>
  )
}

export default Oportunidades
