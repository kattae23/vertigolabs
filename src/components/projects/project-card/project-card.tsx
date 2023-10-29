import { BuildingIcon, Ccd, IconInfo, ScoringA, WarrantlyBack, ZeroComissions } from '@/components/icons'
import { ProgressDemo } from '@/components/progress'
import Image from 'next/image'
import { findFlagUrlByIso2Code } from 'country-flags-svg'
import React from 'react'
import { BsFillPersonFill } from 'react-icons/bs'
import { ProjectInfo } from '../../home/projects/project-carousel'
import ProjectCardData from './project-card-data'

interface Props {
    item: ProjectInfo;
    investmentInformationAnalytics: boolean;
}

const ProjectCard = ({ item, investmentInformationAnalytics = true }: Props) => {
  return (
    <div className='w-full select-none mt-5 mr-3 lg:max-w-[350px] h-auto border-2 rounded-lg py-3'>
      <div className='px-3'>
        <div className='flex flex-row justify-between pb-2'>
          <div className='flex flex-row'>
            <BuildingIcon className='max-w-[30px] h-auto' />
            <div className='h-auto ml-2'>
              <h3>{item.name}</h3>
              <div className='flex flex-row'>
                <p className='text-xs text-gray-500 font-300'>{item.state} </p>
                <p className='text-xs text-gray-500 font-300 ml-1'>{item.quantity}</p>
              </div>
            </div>
          </div>
          <div className='w-auto h-auto flex justify-center items-center'>
            <Image src={findFlagUrlByIso2Code(item.flag.toUpperCase())} alt='spain flag icon' width={50} height={50} className='w-8' />
          </div>
        </div>
        {
                  investmentInformationAnalytics
                    ? (
                      <>
                        <div className='w-full h-auto flex flex-col pb-1'>
                          <div className='flex flex-row justify-between pb-2'>
                            <h3 className='text-base font-bold text-gray-800'>{item.actual} $</h3>
                            <h3 className='text-base font-bold text-gray-800'>{item.meta} $</h3>
                          </div>
                          <ProgressDemo />
                        </div>
                        <div className='w-full h-auto flex flex-row py-3 justify-between'>
                          <div className='flex flex-row items-center justify-center'>
                            <BsFillPersonFill />
                            <h3><strong>{item.investors}</strong> inversores</h3>
                          </div>
                          <h3>{item.dayLeft} días</h3>
                        </div>
                      </>
                      )
                    : (
                      <></>
                      )
                }
      </div>
      <div className='w-full h-auto'>
        <Image className='w-full' src={item.thumbnail} alt={'imagen de ' + item.name} width={500} height={500} />
      </div>
      <div className='w-full px-4 flex flex-row flex-nowrap justify-between items-center py-3'>
        <ScoringA />
        <WarrantlyBack />
        <ZeroComissions />
        <Ccd />
        <IconInfo />
      </div>
      <div className='w-[95%] mx-auto h-[1px] bg-[#CCCCCC]' />
      <div className='w-full px-4 flex flex-col text-xs mt-4 [&>div>span]:py-1'>
        <ProjectCardData {...{ item }} />
      </div>

      <div className='w-[95%] mx-auto mt-5 h-[1px] bg-[#CCCCCC]' />
      <div className='w-full px-4 flex flex-col text-xs'>
        <button className='w-full mt-4 mb-1 shadow-xl bg-[#4EB4BC] py-3 text-center rounded-sm text-white text-xs font-bold'>
          {'Invertir'.toUpperCase()}
        </button>
      </div>
    </div>
  )
}

export default ProjectCard
