'use client'
import React from 'react'
import ProjectCard from '../../projects/project-card/project-card'
import Carousel from '../carousel'
import { FilterType } from './projects'
import { filterProjects } from '@/hooks/filters'

export type ProjectInfo = {
  id: string;
  name: string;
  meta?: number;
  quantity: string;
  state: string;
  thumbnail: string;
  flag: string;
  phase: FilterType['filter'];
  actual?: number;
  type: string;
  investors: number;
  status?: string
  dayLeft?: number;
  term: string;
  LTV?: number;
  annualYield?: number;
  fundedCapital: number;
  totalYield?: number;
  finalIrr: number;
  stimatedIrr: number;
}

export const projectsArr: ProjectInfo[] = [
  {
    id: 'JASKDLJDKLJKjasdjakldjas',
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
    id: 'JASKDLJDKLJKjasdjakldjas',
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
  },
  {
    id: 'JASKDLJDKLJKjasdjakldjas',
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
  },
  {
    id: 'JASKDLJDKLJKjasdjakldjas',
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
  },
  {
    id: 'JASKDLJDKLJKjasdjakldjas',
    name: 'Splau v4',
    phase: 'onfunded',
    fundedCapital: 340000,
    quantity: '9 viviendas',
    status: 'Sin incidencia',
    annualYield: 9.00,
    totalYield: 11.25,
    actual: 120000,
    meta: 300000,
    dayLeft: 55,
    LTV: 34.12,
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
    id: 'JASKDLJDKLJKjasdjakldjas',
    name: 'Splau v4',
    phase: 'unfinanced',
    fundedCapital: 340000,
    quantity: '9 viviendas',
    status: 'Sin incidencia',
    annualYield: 9.00,
    totalYield: 11.25,
    actual: 120000,
    meta: 300000,
    dayLeft: 55,
    LTV: 34.12,
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
  filter?: FilterType['filter']
}

const ProjectCarousel = ({ investmentInformationAnalytics, filter = 'onfunded' }: ProjectCarouselProps) => {
  const filteredProjects = filterProjects(projectsArr, filter)
  return (
    <article className='min-h-fit w-full relative flex justify-center'>
      <div className='w-full md:max-w-[80%] flex justify-center items-center'>
        <Carousel
          data={filteredProjects}
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
