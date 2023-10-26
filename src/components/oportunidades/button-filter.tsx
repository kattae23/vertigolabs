import React from 'react'
import { FilterType } from '../home/projects/projects'
import clsx from 'clsx'

interface Props {
    handleSetFilter: (projectFilter: FilterType['filter']) => () => void
    filterWanted: FilterType['filter']
    filter: FilterType['filter']
    children: React.ReactNode
}

const ButtonFilter = ({ handleSetFilter, children, filterWanted, filter }: Props) => {
  return (
    <button
      onClick={handleSetFilter(filterWanted)}
      className={clsx(`flex 
                text-gray-500 
                justify-center 
                items-center 
                text-xs
                whitespace-nowrap
                px-5 
                py-2 
                hover:bg-[#666666] 
                hover:border-none
                font-semibold
                uppercase
                hover:text-white 
                border`,
      filterWanted === filter ? 'bg-[#666666] text-white' : 'bg-[#F0F1F1]'
      )}
    >
      {children}
    </button>
  )
}

export default ButtonFilter
