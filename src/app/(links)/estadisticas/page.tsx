import StadisticsBox from '@/components/analytics/stadistics-box'
import { AnalyticsArrType } from '@/types/api-types'
import { Metadata } from 'next'
import React, { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Griso Corp - Estadísticas',
  description: ''
}

async function fetchAnalytics () {
  try {
    const apiUrl = process.env.API_URL!
    const res = await fetch(`${apiUrl}/analytics`, {
      next: {
        revalidate: 60
      }
    })
    const data = await res.json()
    return data as Promise<AnalyticsArrType>
  } catch (error) {
    console.log(error)
    throw new Error('error fetching data.')
  }
}

const StadisticsPage = async () => {
  const analytics = await fetchAnalytics()
  return (
    <main className='mb-10 mt-[96px]'>
      <section className='w-full h-auto bg-[#EEEEEE] flex justify-center items-center px-5 md:px-32 flex-col text-[#493d3e]'>
        <h2 className='text-3xl font-bold mb-3 mt-16 text-center'>Los valores no son solo números</h2>
        <h2 className='text-3xl font-light mb-16 text-center'>Los proyectos con garantía hipotecaria <span className='font-bold'>en cifras</span></h2>
        <Suspense fallback={<p>Loading...</p>}>
          <StadisticsBox analytics={analytics} />
        </Suspense>
      </section>
    </main>
  )
}

export default StadisticsPage
