import Button from '@/components/home/button'
import FilteredProjectsSection from '@/components/oportunidades/filtered-projects-section'
import React from 'react'

const Oportunidades = () => {
  return (
    <main className='flex'>
      <section className='w-full mx-32 flex flex-row flex-wrap justify-center'>
        <h2 className='text-3xl text-[#493d3e] font-bold mb-5'>Proyectos con garantía hipotecaria</h2>
        <Button link='historico-oportunidades' className=''>
          todos los proyectos
        </Button>
        <FilteredProjectsSection />
      </section>
    </main>
  )
}

export default Oportunidades
