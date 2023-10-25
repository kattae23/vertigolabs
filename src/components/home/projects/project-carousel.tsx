'use client'
import React from 'react'
import ProjectCard from '../../projects/project-card/project-card'
import Carousel from '../carousel'

export type ProjectInfo = {
  id: string;
  name: string;
  meta?: number;
  quantity: string;
  state: string;
  thumbnail: string;
  flag: string;
  phase: string;
  actual?: number;
  type: string;
  investors: number;
  status?: string
  dayLeft?: string;
  term: string;
  LTV?: string;
  annualYield?: number;
  fundedCapital: number;
  totalYield?: number;
  finalIrr: number;
  stimatedIrr: number;
}

export const projectsArr: ProjectInfo[] = [
  {
    id: crypto.randomUUID(),
    name: 'Splau v4',
    phase: 'finalized',
    fundedCapital: 340000,
    quantity: '9 viviendas',
    investors: 286,
    state: 'barcelona',
    term: '10 meses',
    thumbnail: '/portada.jpg',
    flag: 'ES',
    type: 'Tipo fijo',
    stimatedIrr: 8.26,
    finalIrr: 10.89
  },
  {
    id: crypto.randomUUID(),
    name: 'Splau v4',
    phase: 'funded',
    fundedCapital: 340000,
    quantity: '9 viviendas',
    status: 'Sin incidencia',
    annualYield: 9.00,
    totalYield: 11.25,
    investors: 286,
    state: 'barcelona',
    term: '10 meses',
    thumbnail: '/portada.jpg',
    flag: 'ES',
    type: 'Tipo fijo',
    stimatedIrr: 8.26,
    finalIrr: 10.89
  }
]

interface ProjectCarouselProps {
  investmentInformationAnalytics: boolean
}

const ProjectCarousel = ({ investmentInformationAnalytics }: ProjectCarouselProps) => {
  return (

    <article className='min-h-fit w-full relative flex justify-center'>
      <div className='w-full md:max-w-[80%] flex justify-center items-center'>
        <Carousel
          data={projectsArr}
          breakpoints={{
            760: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            990: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            1100: {
              slidesPerView: 3,
              spaceBetween: 40
            }
          }}
        >
          {(item: ProjectInfo, index: number) => (
            <ProjectCard {...{ item, investmentInformationAnalytics }} />
          )}
        </Carousel>
      </div>
    </article>
  )
}

export default ProjectCarousel
