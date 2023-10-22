'use client'
import { findFlagUrlByIso2Code } from 'country-flags-svg'
import Image from 'next/image'
import React from 'react'
import Carousel from '../carousel'
import { BuildingIcon, Ccd, IconInfo, ScoringA, WarrantlyBack, ZeroComissions } from '@/components/icons'
import { ProgressDemo } from '@/components/progress'
import { BsFillPersonFill } from 'react-icons/bs'

type ProjectInfo = {
  name: string;
  meta: number;
  viviendas: string;
  state: string;
  src: string;
  flag: string;
  modalidad: string;
  actual: number;
  investors: number;
  dayLeft: string;
  term: string;
  type: string;
  LTV: string;
  rentabilidadAnual: string;
  rentabilidadTotal: string;
}

const projectsArr: ProjectInfo[] = [
  {
    name: 'vardelinares',
    state: 'Barcelona',
    viviendas: '9 viviendas',
    meta: 250000,
    src: '/portada.jpg',
    modalidad: 'Tipo Fijo',
    flag: 'pe',
    actual: 218000,
    investors: 240,
    dayLeft: '26 days left',
    term: '15 months',
    type: 'Development loan',
    LTV: '68,8%',
    rentabilidadAnual: '9,00%',
    rentabilidadTotal: '11,25%'
  },
  {
    name: 'vardelinares',
    state: 'Barcelona',
    viviendas: '9 viviendas',
    meta: 250000,
    src: '/portada.jpg',
    modalidad: 'Tipo Fijo',
    flag: 'pe',
    actual: 218000,
    investors: 240,
    dayLeft: '26 days left',
    term: '15 months',
    type: 'Development loan',
    LTV: '68,8%',
    rentabilidadAnual: '9,00%',
    rentabilidadTotal: '11,25%'
  },
  {
    name: 'vardelinares',
    state: 'Barcelona',
    viviendas: '9 viviendas',
    meta: 250000,
    src: '/portada.jpg',
    modalidad: 'Tipo Fijo',
    flag: 'pe',
    actual: 218000,
    investors: 240,
    dayLeft: '26 days left',
    term: '15 months',
    type: 'Development loan',
    LTV: '68,8%',
    rentabilidadAnual: '9,00%',
    rentabilidadTotal: '11,25%'
  },
  {
    name: 'vardelinares',
    state: 'Barcelona',
    viviendas: '9 viviendas',
    meta: 250000,
    src: '/portada.jpg',
    modalidad: 'Tipo Fijo',
    flag: 'pe',
    actual: 218000,
    investors: 240,
    dayLeft: '26 days left',
    term: '15 months',
    type: 'Development loan',
    LTV: '68,8%',
    rentabilidadAnual: '9,00%',
    rentabilidadTotal: '11,25%'
  },
  {
    name: 'vardelinares',
    state: 'Barcelona',
    viviendas: '9 viviendas',
    meta: 250000,
    src: '/portada.jpg',
    modalidad: 'Tipo Fijo',
    flag: 'pe',
    actual: 218000,
    investors: 240,
    dayLeft: '26 days left',
    term: '15 months',
    type: 'Development loan',
    LTV: '68,8%',
    rentabilidadAnual: '9,00%',
    rentabilidadTotal: '11,25%'
  }
]

interface ProjectCardProps {
  investmentInformationAnalytics?: boolean
}

const ProjectCard = ({ investmentInformationAnalytics }: ProjectCardProps) => {
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
            <div key={index} className='w-full select-none lg:max-w-[400px] h-auto border-2 rounded-lg py-3'>
              <div className='px-3'>
                <div className='flex flex-row justify-between pb-2'>
                  <div className='flex flex-row'>
                    <BuildingIcon className='max-w-[30px] h-auto' />
                    <div className='h-auto ml-2'>
                      <h3>{item.name}</h3>
                      <div className='flex flex-row'>
                        <h3 className='text-xs text-gray-500 font-300'>{item.state} | {item.viviendas}</h3>
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
                          <h3>{item.dayLeft}</h3>
                        </div>
                      </>
                      )
                    : (
                      <></>
                      )
                }
              </div>
              <div className='w-full h-auto'>
                <Image className='w-full' src={item.src} alt={'imagen de ' + item.name} width={500} height={500} />
              </div>
              <div className='w-full px-4 flex flex-row flex-nowrap justify-between items-center py-3'>
                <ScoringA />
                <WarrantlyBack />
                <ZeroComissions />
                <Ccd />
                <IconInfo />
              </div>
              <hr className='w-full bg-gray-200' />
              <div className='w-full px-4 flex flex-col text-xs mt-4 [&>div>span]:py-1'>
                <div className='flex justify-between font-semibold'>
                  <span>Plazo:</span>
                  <span>{item.term}</span>
                </div>
                <div className='flex justify-between'>
                  <span>Modalidad:</span>
                  <span>{item.modalidad}</span>
                </div>
                <div className='flex justify-between'>
                  <span>LTV:</span>
                  <span>{item.LTV}</span>
                </div>
                <div className='flex justify-between'>
                  <span>Rentabilidad anual:</span>
                  <span>{item.rentabilidadAnual}</span>
                </div>
                <div className='flex justify-between font-semibold'>
                  <span>Rentabilidad total:</span>
                  <span>{item.rentabilidadTotal}</span>
                </div>

                <button className='w-full mt-5 mb-1 shadow-xl bg-[#4EB4BC] py-3 text-center rounded-sm text-white text-xs font-bold'>
                  {'Invertir'.toUpperCase()}
                </button>
              </div>
            </div>
          )}
        </Carousel>
      </div>
    </article>
  )
}

export default ProjectCard
