import React from 'react'
import { FilterType } from '../home/projects/projects'

interface Props {
    handleSetFilter: (projectFilter: FilterType['filter']) => () => void
    filter: FilterType['filter']
    children: React.ReactNode
}

const ButtonFilter = ({ handleSetFilter, children, filter }: Props) => {
  return (
    <button onClick={handleSetFilter(filter)} className='flex justify-center items-center'>
      {children}
    </button>
  )
}

export default ButtonFilter
