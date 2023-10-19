import { AnalyticsArrType } from '@/app/api/analytics/route'
import React from 'react'
import { FaBriefcase, FaHandshake, FaRegMoneyBillAlt } from 'react-icons/fa'
import { TbReload } from 'react-icons/tb'

const fetchAnalytics = () => {
  return fetch(process.env.NEXTAPIURL! + '/api/analytics', {
    next: {
      revalidate: 60
    }
  }).then(res => res.json()) as Promise<AnalyticsArrType>
}

const Analytics = async () => {
  const resp = await fetchAnalytics()

  return (
    <section className='w-full h-[80vh] bg-[#EEEEEE] flex justify-center px-5 md:px-32 flex-col'>
      <h2 className='text-3xl text-gray-800 font-light mb-16 text-center'>Los proyectos con garantía hipotecaria <span className='font-bold'>en cifras</span></h2>
      <div className='max-w-fit gap-7 flex flex-col md:flex-row'>
        <div className='max-w-fit bg-white flex flex-col'>
          <div className='w-full flex flex-row'>
            <div className='flex w-2/4 min-h-[131px] max-h-[131px] flex-row border border-r-0 border-gray-400/50 rounded-md rounded-r-none'>
              <div className='flex w-full flex-row justify-center items-center py-9'>
                <div className='w-1/4 px-10'>
                  <FaHandshake className='text-blue-200 text-5xl' />
                </div>
                <div className='w-3/4 px-4'>
                  <div className='flex flex-col text-center items-center justify-center'>
                    <h2 className='font-bold text-lg text-gray-800/90'>{resp.financedProjects}</h2>
                    <p className='text-gray-500/90 text-sm font-normal'>Proyectos financiados</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex w-2/4 min-h-[131px] max-h-[131px] flex-row border border-gray-400/50 rounded-md rounded-l-none'>
              <div className='flex w-full flex-row justify-center items-center py-9'>
                <div className='w-1/4 px-10'>
                  <FaBriefcase className='text-orange-500/80 text-4xl' />
                </div>
                <div className='w-3/4 px-4'>
                  <div className='flex flex-col text-center items-center justify-center'>
                    <h2 className='font-bold text-lg text-gray-800/90'>€ {resp.investmentRaised} M</h2>
                    <p className='text-gray-500/90 text-sm font-normal'>Proyectos financiados</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full flex flex-row'>
            <div className='flex w-2/4 min-h-[131px] max-h-[131px] flex-row border border-r-0 border-gray-400/50 rounded-md rounded-r-none'>
              <div className='flex w-full flex-row justify-center items-center py-9'>
                <div className='w-1/4 px-10'>
                  <TbReload className='text-lime-500 transform scale-x-[-1] text-5xl' />
                </div>
                <div className='w-3/4 px-4'>
                  <div className='flex flex-col text-center items-center justify-center'>
                    <h2 className='font-bold text-lg text-gray-800/90'>{resp.returnedProjects}</h2>
                    <p className='text-gray-500/90 text-sm font-normal'>Proyectos financiados</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex w-2/4 min-h-[131px] max-h-[131px] flex-row border border-gray-400/50 rounded-md rounded-l-none'>
              <div className='flex w-full flex-row justify-center items-center py-9'>
                <div className='w-1/4 px-10'>
                  <FaRegMoneyBillAlt className='text-blue-600 text-4xl' />
                </div>
                <div className='w-3/4 px-4'>
                  <div className='flex flex-col text-center items-center justify-center'>
                    <h2 className='font-bold text-lg text-gray-800/90'>€ {resp.returnsAndDeliveries} M</h2>
                    <p className='text-gray-500/90 text-sm font-normal'>Proyectos financiados</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='max-w-fit bg-white flex flex-col'>
          <div className='w-full flex flex-row'>
            <div className='flex w-2/4 min-h-[131px] max-h-[131px] flex-row border border-r-0 border-gray-400/50 rounded-md rounded-r-none'>
              <div className='flex w-full flex-row justify-center items-center py-9'>
                <div className='w-1/4 px-10'>
                  <FaHandshake className='text-blue-200 text-5xl' />
                </div>
                <div className='w-3/4 px-4'>
                  <div className='flex flex-col text-center items-center justify-center'>
                    <h2 className='font-bold text-lg text-gray-800/90'>{resp.averageProjectAmount} $</h2>
                    <p className='text-gray-500/90 text-sm font-normal'>Importe medio proyecto</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex w-2/4 min-h-[131px] max-h-[131px] flex-row border border-gray-400/50 rounded-md rounded-l-none'>
              <div className='flex w-full flex-row justify-center items-center py-9'>
                <div className='w-1/4 px-10'>
                  <FaBriefcase className='text-orange-500/80 text-4xl' />
                </div>
                <div className='w-3/4 px-4'>
                  <div className='flex flex-col text-center items-center justify-center'>
                    <h2 className='font-bold text-lg text-gray-800/90'>€ {resp.averageLtv} M</h2>
                    <p className='text-gray-500/90 text-sm font-normal'>Proyectos financiados</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full flex flex-row'>
            <div className='flex w-2/4 min-h-[131px] max-h-[131px] flex-row border border-r-0 border-gray-400/50 rounded-md rounded-r-none'>
              <div className='flex w-full flex-row justify-center items-center py-9'>
                <div className='w-1/4 px-10'>
                  <TbReload className='text-lime-500 transform scale-x-[-1] text-5xl' />
                </div>
                <div className='w-3/4 px-4'>
                  <div className='flex flex-col text-center items-center justify-center'>
                    <h2 className='font-bold text-lg text-gray-800/90'>{resp.averageDurationExpectedProject}</h2>
                    <p className='text-gray-500/90 text-sm font-normal'>Duración media <br />
                      prevista proyecto
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex w-2/4 min-h-[131px] max-h-[131px] flex-row border border-gray-400/50 rounded-md rounded-l-none'>
              <div className='flex w-full flex-row justify-center items-center py-9'>
                <div className='w-1/4 px-10'>
                  <FaRegMoneyBillAlt className='text-blue-600 text-4xl' />
                </div>
                <div className='w-3/4 px-4'>
                  <div className='flex flex-col text-center items-center justify-center'>
                    <h2 className='font-bold text-lg text-gray-800/90'>{resp.averageDurationEndOfProject}</h2>
                    <p className='text-gray-500/90 text-sm font-normal'>Proyectos financiados</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Analytics
