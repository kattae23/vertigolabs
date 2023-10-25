'use client'
import React, { useState } from 'react'
import { FilterType } from '../home/projects/projects'
import { projectsArr } from '../home/projects/project-carousel'
import { BsHouseAdd, BsHouseLock } from 'react-icons/bs'
import { FaMedal } from 'react-icons/fa'
import ProjectCard from '../projects/project-card/project-card'
import { HiMagnifyingGlass } from 'react-icons/hi2'
import { FiCalendar } from 'react-icons/fi'

const FilteredProjectsSection = () => {
  const [filter, setFilter] = useState<FilterType['filter']>('onfunded')
  const counterFilteredProjects = (filter: FilterType['filter']) => {
    return projectsArr.filter(project => project.phase === filter).length
  }
  const handleSetFilter = (projectFilter: FilterType['filter']) => () => setFilter(projectFilter)
  return (
    <article className='w-full'>
      <div className='w-full flex justify-between mt-7 flex-wrap mb-10'>
        <div className='flex flex-row'>
          <button onClick={handleSetFilter('onfunded')} className='flex justify-center items-center'><BsHouseAdd />En financiación/próximamente ({counterFilteredProjects('onfunded')})</button>
          <button onClick={handleSetFilter('funded')}><FaMedal />financiados ({counterFilteredProjects('funded')})</button>
          <button onClick={handleSetFilter('finalized')}><BsHouseLock />cerrados ({counterFilteredProjects('finalized')})</button>
          <button onClick={handleSetFilter('unfinanced')}><FiCalendar />no financiados ({counterFilteredProjects('unfinanced')})</button>
        </div>
        <div>
          <button onClick={() => console.log('pipe')}>
            <HiMagnifyingGlass />
          </button>
        </div>
      </div>
      <div className='w-full flex flex-row flex-wrap'>
        {
          projectsArr.filter(project => project.phase === filter).map((item, index) => (
            <ProjectCard key={index} {...{ item, investmentInformationAnalytics: false }} />
          ))
          }
      </div>
    </article>
  )
}

export default FilteredProjectsSection
