'use client'
import React, { useState } from 'react'
import { FilterType } from '../home/projects/projects'
import { projectsArr } from '../home/projects/project-carousel'
import { BsHouseAdd, BsHouseLock } from 'react-icons/bs'
import { FaMedal } from 'react-icons/fa'
import ProjectCard from '../projects/project-card/project-card'
import { HiMagnifyingGlass } from 'react-icons/hi2'
import { FiCalendar } from 'react-icons/fi'
import ButtonFilter from './button-filter'

const FilteredProjectsSection = () => {
  const [filter, setFilter] = useState<FilterType['filter']>('onfunded')
  const counterFilteredProjects = (filter: FilterType['filter']) => {
    return projectsArr.filter(project => project.phase === filter).length
  }
  const handleSetFilter = (projectFilter: FilterType['filter']) => () => setFilter(projectFilter)
  return (
    <article className='w-full'>
      <div className='w-full flex justify-between items-center mt-7 flex-nowrap mb-10'>
        <div className='flex flex-row '>
          <ButtonFilter {...{ handleSetFilter, filterWanted: 'onfunded', filter }}>
            <BsHouseAdd className='mr-2 mb-[2px] text-base' />
            <span className='hidden lg:block'>EN FINANCIACION/PRÓXIMAMENTE ({counterFilteredProjects('onfunded')})</span>
          </ButtonFilter>
          <ButtonFilter {...{ handleSetFilter, filterWanted: 'funded', filter }}>
            <FaMedal className='mr-2 text-base' /><span className='hidden lg:block'>FINANCIADOS({counterFilteredProjects('funded')})</span>
          </ButtonFilter>
          <ButtonFilter {...{ handleSetFilter, filterWanted: 'finalized', filter }}>
            <BsHouseLock className='mr-2 mb-[2px] text-base' /><span className='hidden lg:block'>cerrados({counterFilteredProjects('finalized')})</span>
          </ButtonFilter>
          <ButtonFilter {...{ handleSetFilter, filterWanted: 'unfinanced', filter }}>
            <FiCalendar className='mr-2 mb-[2px] text-base' /><span className='hidden lg:block'>no financiados ({counterFilteredProjects('unfinanced')})</span>
          </ButtonFilter>
        </div>
        <div className='flex items-center'>
          <button onClick={() => console.log('e')}>
            <HiMagnifyingGlass />
          </button>
        </div>
      </div>
      <div className='w-full flex flex-row flex-wrap mb-10'>
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
