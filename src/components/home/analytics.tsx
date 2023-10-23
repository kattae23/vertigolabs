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
import { FiTarget } from 'react-icons/fi'
import Button from './button'

async function fetchAnalytics () {
  const res = await fetch(`${process.env.API_URL}/api/analytics`, { cache: 'no-store' })

  return res.json() as Promise<AnalyticsArrType>
}

async function Analytics () {
  const analytics = await fetchAnalytics()
  return (
    <section className='w-full h-auto bg-[#EEEEEE] flex justify-center items-center px-5 md:px-32 flex-col'>
      <h2 className='text-3xl text-gray-800 font-light mb-16 mt-16 text-center'>Los proyectos con garantía hipotecaria <span className='font-bold'>en cifras</span></h2>
      <div className='w-full xl:max-w-fit gap-7 flex flex-col min-[1200px]:flex-row justify-center items-center'>
        <div className='w-full bg-white flex flex-col'>
          <div className='w-full flex flex-col md:flex-row'>
            <AnalyticsCard
              Icon={FaHandshake}
              className='text-blue-200 text-5xl'
              fetchText={analytics.financedProjects}
              label='Proyectos financiados'
            />
            <AnalyticsCard
              Icon={FaBriefcase}
              className='text-orange-500/80 text-4xl'
              fetchText={'$ ' + analytics.investmentRaised + ' M'}
              label='Inversión captada'
            />
          </div>
          <div className='w-full flex flex-col md:flex-row'>
            <AnalyticsCard
              Icon={TbReload}
              className='text-lime-500 transform scale-x-[-1] text-5xl'
              fetchText={analytics.returnedProjects}
              label='Proyectos devueltos'
            />
            <AnalyticsCard
              Icon={FaRegMoneyBillAlt}
              className='text-blue-600 text-4xl'
              fetchText={'$ ' + analytics.returnsAndDeliveries + ' M'}
              label='Devoluciones y repartos'
            />
          </div>
        </div>
        <div className='w-full bg-white flex flex-col'>
          <div className='w-full flex flex-col md:flex-row'>
            <AnalyticsCard
              Icon={IoMdAnalytics}
              className='text-[#FD7B61] text-4xl'
              fetchText={analytics.averageProjectAmount}
              label='Importe medio proyecto'
            />
            <AnalyticsCard
              Icon={FaPercent}
              className='text-[#8FCCC9] text-4xl'
              fetchText={analytics.averageLtv + '%'}
              label='LTV medio'
            />
          </div>
          <div className='w-full flex flex-col md:flex-row'>
            <AnalyticsCard
              Icon={BsFillCalendarMonthFill}
              className='text-[#80BE15] text-4xl'
              fetchText={analytics.averageDurationExpectedProject}
              label='Duración media prevista proyecto'
            />
            <AnalyticsCard
              Icon={ImClock}
              className='text-[#1A71C1] text-4xl scale-x-[-1]'
              fetchText={analytics.averageDurationEndOfProject}
              label='Duración media final proyecto'
            />
          </div>
        </div>
      </div>
      <div className='w-full flex flex-col mt-10 rounded-md'>
        <div className='w-full flex flex-col xl:flex-row'>
          <div className='flex w-full xl:w-2/4 h-[131px] flex-row border border-r-0 border-gray-400/50 rounded-md rounded-r-none text-[#333333]'>
            <div className='flex w-full h-full flex-row justify-center items-center'>
              <div className='w-1/4 px-14 bg-[#8FCCC9] h-full flex justify-center items-center'>
                <FiTarget className='text-4xl' />
              </div>
              <div className='w-3/4 px-4 bg-[#C9E5E4] h-full flex items-center justify-center'>
                <div className='flex flex-col text-center items-center justify-center'>
                  <h2 className='font-bold text-3xl'>{analytics.targetAverageIRR}%</h2>
                  <p className='font-medium'>TIR media objetivo</p>
                </div>
              </div>
            </div>
          </div>
          <div className='flex ml-0 xl:ml-7 w-full xl:w-2/4 mt-7 xl:mt-0 h-[131px] flex-row border border-r-0 border-gray-400/50 rounded-md rounded-r-none text-[#333333]'>
            <div className='flex w-full h-full flex-row justify-center items-center'>
              <div className='w-1/4 px-14 bg-[#6BCCA4] h-full flex justify-center items-center'>
                <HiRocketLaunch className='text-3xl' />
              </div>
              <div className='w-3/4 px-4 bg-[#B5E5D1] h-full flex items-center justify-center'>
                <div className='flex flex-col text-center items-center justify-center'>
                  <h2 className='font-bold text-3xl'>{analytics.averageIRRAchieved}%</h2>
                  <div className='flex flec-row'>
                    <p className='font-medium'>TIR media conseguida</p>
                    <AiOutlineInfoCircle className='ml-1' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Button link='/estadisticas' className='mb-16'>
        Consulta la estadística completa
      </Button>
    </section>
  )
}

export default Analytics
