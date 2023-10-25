import { ProjectInfo } from '@/components/home/projects/project-carousel'
import React from 'react'

const ProjectCardData = ({ item }: {item: ProjectInfo}) => {
  return (
    <div className='flex flex-col text-[#493d3e] [&>div>span]:py-1'>
      {
      item.phase === 'finalized'
        ? (
          <>
            <div className='flex justify-between font-bold'>
              <span>Fase:</span>
              <span>{item.phase === 'finalized' && 'Cerrado'}</span>
            </div>
            <div className='flex justify-between font-bold'>
              <span>Capital financiado:</span>
              <span>{item.fundedCapital} $</span>
            </div>
            <div className='flex justify-between'>
              <span>Inversores:</span>
              <span>{item.investors}</span>
            </div>
            <div className='flex justify-between'>
              <span>Plazo:</span>
              <span>{item.term}</span>
            </div>
            <div className='flex justify-between'>
              <span>Modalidad:</span>
              <span>{item.type}</span>
            </div>
            <div className='flex justify-between'>
              <span>Tir objetivo:</span>
              <span>{item.stimatedIrr}</span>
            </div>
            <div className='flex justify-between font-bold'>
              <span>Tir conseguida:</span>
              <span>{item.finalIrr}</span>
            </div>
          </>
          )
        : null
    }
      {
        item.phase === 'funded'
          ? (
            <>
              <div className='flex justify-between font-bold'>
                <span>Fase:</span>
                <span>{item.phase === 'funded' && 'Financiado'}</span>
              </div>
              <div className='flex justify-between font-bold'>
                <span>Capital financiado:</span>
                <span>{item.fundedCapital} $</span>
              </div>
              <div className='flex justify-between'>
                <span>Inversores:</span>
                <span>{item.investors}</span>
              </div>
              <div className='flex justify-between'>
                <span>Plazo:</span>
                <span>{item.term}</span>
              </div>
              <div className='flex justify-between'>
                <span>Modalidad:</span>
                <span>{item.type}</span>
              </div>
              <div className='flex justify-between'>
                <span>Rentabilidad anual:</span>
                <span>{item.annualYield} %</span>
              </div>
              <div className='flex justify-between'>
                <span>Rentabilidad total:</span>
                <span>{item.totalYield} %</span>
              </div>
              <div className='flex justify-between'>
                <span>Estado:</span>
                <div className='flex items-center'>
                  <span className='rounded-full h-[10px] w-[10px] bg-lime-500 mr-1' />
                  <span>{item.status}</span>
                </div>
              </div>
            </>
            )
          : null
      }
      {
        item.phase === 'onfunded'
          ? (
            <>
              <div className='flex justify-between font-bold'>
                <span>Plazo:</span>
                <span>{item.term}</span>
              </div>
              <div className='flex justify-between'>
                <span>Modalidad:</span>
                <span>{item.type}</span>
              </div>
              <div className='flex justify-between'>
                <span>LTV:</span>
                <span>{item.LTV} $</span>
              </div>
              <div className='flex justify-between'>
                <span>Rentabilidad anual:</span>
                <span>{item.annualYield} %</span>
              </div>
              <div className='flex justify-between font-bold'>
                <span>Rentabilidad total:</span>
                <span>{item.totalYield} %</span>
              </div>
            </>
            )
          : null
      }
    </div>
  )
}

export default ProjectCardData
