import { AnalyticsArrType } from '@/app/api/analytics/route'
import React from 'react'
import { FaBriefcase, FaHandshake, FaPercent, FaRegMoneyBillAlt } from 'react-icons/fa'
import { TbReload } from 'react-icons/tb'
import { IoMdAnalytics } from 'react-icons/io'
import AnalyticsCard from './analytics-card'
import { BsFillCalendarMonthFill } from 'react-icons/bs'
import { ImClock } from 'react-icons/im'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { HiRocketLaunch } from 'react-icons/hi2'

const fetchAnalytics = async () => {
  return (await fetch(process.env.NEXTAPIURL + '/api/analytics')).json() as Promise<AnalyticsArrType>
}

const Analytics = async () => {
  const resp = await fetchAnalytics()
  return (
    <section className='w-full h-auto bg-[#EEEEEE] flex justify-center items-center px-5 md:px-32 flex-col'>
      <h2 className='text-3xl text-gray-800 font-light mb-16 text-center'>Los proyectos con garantía hipotecaria <span className='font-bold'>en cifras</span></h2>
      <div className='w-full xl:max-w-fit gap-7 flex flex-col min-[1200px]:flex-row justify-center items-center'>
        <div className='w-full bg-white flex flex-col'>
          <div className='w-full flex flex-col md:flex-row'>
            <AnalyticsCard
              Icon={FaHandshake}
              className='text-blue-200 text-5xl'
              fetchText={resp.financedProjects}
              label='Proyectos financiados'
            />
            <AnalyticsCard
              Icon={FaBriefcase}
              className='text-orange-500/80 text-4xl'
              fetchText={'$ ' + resp.investmentRaised + ' M'}
              label='Inversión captada'
            />
          </div>
          <div className='w-full flex flex-col md:flex-row'>
            <AnalyticsCard
              Icon={TbReload}
              className='text-lime-500 transform scale-x-[-1] text-5xl'
              fetchText={resp.returnedProjects}
              label='Proyectos devueltos'
            />
            <AnalyticsCard
              Icon={FaRegMoneyBillAlt}
              className='text-blue-600 text-4xl'
              fetchText={resp.returnsAndDeliveries}
              label='Devoluciones y repartos'
            />
          </div>
        </div>
        <div className='w-full bg-white flex flex-col'>
          <div className='w-full flex flex-col md:flex-row'>
            <AnalyticsCard
              Icon={IoMdAnalytics}
              className='text-[#FD7B61] text-4xl'
              fetchText={resp.averageProjectAmount}
              label='Importe medio proyecto'
            />
            <AnalyticsCard
              Icon={FaPercent}
              className='text-[#8FCCC9] text-4xl'
              fetchText={resp.averageLtv + '%'}
              label='LTV medio'
            />
          </div>
          <div className='w-full flex flex-col md:flex-row'>
            <AnalyticsCard
              Icon={BsFillCalendarMonthFill}
              className='text-[#80BE15] text-4xl'
              fetchText={resp.averageDurationExpectedProject}
              label='Duración media prevista proyecto'
            />
            <AnalyticsCard
              Icon={ImClock}
              className='text-[#1A71C1] text-4xl scale-x-[-1]'
              fetchText={resp.averageDurationEndOfProject}
              label='Duración media final proyecto'
            />
          </div>
        </div>
      </div>
      <div className='w-full bg-white flex flex-col mt-10 rounded-md'>
        <div className='w-full flex flex-col xl:flex-row'>
          <div className='flex w-full xl:w-2/4 min-h-[131px] max-h-[131px] flex-row border border-r-0 border-gray-400/50 rounded-md rounded-r-none text-[#333333]'>
            <div className='flex w-full h-full flex-row justify-center items-center'>
              <div className='w-1/4 px-14 bg-[#6BCCA4] h-full flex justify-center items-center'>
                <HiRocketLaunch className='text-3xl' />
              </div>
              <div className='w-3/4 px-4 bg-[#B5E5D1] h-full flex items-center justify-center'>
                <div className='flex flex-col text-center items-center justify-center'>
                  <h2 className='font-bold text-3xl'>8,83%</h2>
                  <div className='flex flec-row'>
                    <p className='font-normal'>TIR media conseguida</p>
                    <AiOutlineInfoCircle className='ml-1' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex w-full xl:w-2/4 min-h-[131px] max-h-[131px] flex-row border border-r-0 border-gray-400/50 rounded-md rounded-r-none text-[#333333]'>
            <div className='flex w-full h-full flex-row justify-center items-center'>
              <div className='w-1/4 px-14 bg-[#6BCCA4] h-full flex justify-center items-center'>
                <HiRocketLaunch className='text-3xl' />
              </div>
              <div className='w-3/4 px-4 bg-[#B5E5D1] h-full flex items-center justify-center'>
                <div className='flex flex-col text-center items-center justify-center'>
                  <h2 className='font-bold text-3xl'>8,83%</h2>
                  <div className='flex flec-row'>
                    <p className='font-normal'>TIR media conseguida</p>
                    <AiOutlineInfoCircle className='ml-1' />
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
