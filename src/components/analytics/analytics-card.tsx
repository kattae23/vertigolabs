import React from 'react'
import { IconType } from 'react-icons'

type Props = {
  Icon: IconType
  className: string
  fetchText: string | number
  label: string
};

const AnalyticsCard = ({ Icon, className, fetchText, label }: Props) => {
  return (
    <div className='flex w-full lg:w-2/4 min-h-[131px] max-h-[131px] flex-row border border-r-0 border-gray-400/50 rounded-md rounded-r-none'>
      <div className='flex w-full flex-row justify-center items-center py-9'>
        <div className='w-1/4 px-10'>
          <Icon className={className} />
        </div>
        <div className='w-3/4 px-4'>
          <div className='flex flex-col text-center items-center justify-center'>
            <h2 className='font-bold text-lg text-gray-800/90'>{fetchText}</h2>
            <p className='text-gray-500 text-sm font-normal'>{label}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnalyticsCard
