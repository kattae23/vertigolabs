import React from 'react'
import ProjectCard from '../project-card/project-cart'
import Link from 'next/link'

const ProjectsContainer = () => {
  return (
    <section className='w-full h-auto relative flex flex-col p-4 mb-10'>
      <div className='w-full relative flex justify-center items-center'>
        <div className='w-[90%] h-auto absolute px-5 py-4 bg-white z-10 rounded-md'>
          <p className='font-normal text-xs text-center md:text-sm text-gray-700'>Housers is a crowdfunding platform authorized and regulated by the <strong>CNMV</strong> and registered with <strong>the registration number 20</strong>. Please, carefully read the <Link className='text-blue-400 hover:underline' href='/informacion-basica-inversor'>Basic Investor Information</Link> before investing.</p>
        </div>
      </div>
      <div className='w-full py-5 flex justify-center items-center mt-20 text-center'>
        <h2 className='text-[26px] md:text-[36px] font-medium text-gray-800'>Projects in which to invest</h2>
      </div>
      <ProjectCard />
      <div className='w-full flex mt-20 justify-center items-center'>
        <Link href='oportunidades' className='px-4 py-2 bg-[#FD7B61] text-white text-sm rounded-sm'>VER MÁS PROYECTOS</Link>
      </div>
    </section>
  )
}

export default ProjectsContainer
