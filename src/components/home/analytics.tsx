import { AnalyticsArrType } from '@/app/api/analytics/route'
import React from 'react'
import Button from '../button'
import StadisticsBox from '../analytics/stadistics-box'

export async function fetchAnalytics () {
  const res = await fetch(`${process.env.API_URL}/api/analytics`)

  return res.json() as Promise<AnalyticsArrType>
}

async function Analytics () {
  const analytics = await fetchAnalytics()
  return (
    <section className='w-full h-auto bg-[#EEEEEE] flex justify-center items-center px-5 md:px-32 flex-col text-[#493d3e]'>
      <h2 className='text-3xl font-light mb-16 mt-16 text-center'>Los proyectos con garantía hipotecaria <span className='font-bold'>en cifras</span></h2>
      <StadisticsBox analytics={analytics} />
      <div className='mt-16'>
        <Button link='/estadisticas' className='mb-16'>
          Consulta la estadística completa
        </Button>
      </div>
    </section>
  )
}

export default Analytics
