import React, { Suspense } from 'react'
import Button from '../button'
import StadisticsBox from '../analytics/stadistics-box'

const Analytics = async () => {
  return (
    <section className='w-full h-auto bg-[#EEEEEE] flex justify-center items-center px-5 md:px-32 flex-col text-[#493d3e]'>
      <h2 className='text-3xl font-light mb-16 mt-16 text-center'>Los proyectos con garantía hipotecaria <span className='font-bold'>en cifras</span></h2>
      <Suspense fallback={<p>Loading...</p>}>
        <StadisticsBox />
      </Suspense>
      <div className='mt-16'>
        <Button link='/estadisticas' className='mb-16'>
          Consulta la estadística completa
        </Button>
      </div>
    </section>
  )
}

export default Analytics
