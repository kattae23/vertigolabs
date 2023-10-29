import React from 'react'
import { IconFaqOne, IconFaqThree, IconFaqTwo } from '../icons'
import Button from '../button'

const SectionTwo = () => {
  return (
    <section className='mt-10 flex text-[#333333] flex-col py-10 px-5 xl:px-20 bg-[#CAE2E0]'>
      <div className='w-full mt-10 mb-5'>
        <h2 className='text-center font-base text-xl'>¿TIENES ALGUNA DUDA SOBRE GRISOCORP? TE AYUDAMOS</h2>
      </div>
      <div className='w-full mt-7 flex flex-col lg:flex-col text-base mb-10 flex-wrap'>
        <div className='w-full flex flex-col lg:flex-row gap-10 lg:gap-7 mb-10'>
          <div className='relative w-full border-[1px] bg-white px-5 py-10'>
            <div className='w-full flex ml-4 mb-6 items-center'>
              <IconFaqOne />
              <h1 className='text-2xl font-medium ml-6'>Preguntas <br /> generales</h1>
            </div>
            <ul className='mt-10 [&>li]:mt-5 text-sm'>
              <li>¿Qué es el Crowdfunding?</li>
              <li>¿Qué es GrisoCorp?</li>
              <li>¿Qué hacemos?</li>
            </ul>
          </div>
          <div className='relative w-full border-[1px] bg-white px-5 py-10'>
            <div className='w-full flex ml-4 mb-6 items-center'>
              <IconFaqTwo />
              <h1 className='text-2xl font-medium ml-6'>Oportunidades <br /> de inversión</h1>
            </div>
            <ul className='mt-10 [&>li]:mt-5 text-sm'>
              <li>¿Qué tipo de oportunidades se presentan en la plataforma?</li>
              <li>¿Qué responsabilidad tiene el inversor al invertir en estos proyectos?</li>
              <li>¿Qué es un título o fraccion de préstamo?</li>
            </ul>
          </div>
          <div className='relative w-full border-[1px] bg-white px-5 py-10'>
            <div className='w-full flex  ml-4 mb-6 items-center'>
              <IconFaqThree />
              <h1 className='text-2xl font-medium ml-6'>Quiero ser <br /> inversor</h1>
            </div>
            <ul className='mt-10 [&>li]:mt-5 text-sm'>
              <li>¿Por qué es necesario que el inversor se registre en GrisoCorp?</li>
              <li>¿Quién puede ser inversor?</li>
              <li>¿Tiene algún coste registrarse en GrisoCorp?</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='w-full justify-center text-center items-center'>
        <Button link='/faqs' className='px-11'>
          Ver todas las faqs
        </Button>
      </div>
    </section>
  )
}

export default SectionTwo
