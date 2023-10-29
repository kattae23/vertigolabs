import React from 'react'
import Button from '../button'

const SectionFour = () => {
  return (
    <section className='mt-10 flex text-[#333333] flex-col py-10 px-3 md:px-32'>
      <div className='w-full'>
        <h2 className='text-center font-medium text-4xl'>Gracias a nuestra plataforma podrás encontrar la financiación que estabas buscando para tu proyecto</h2>
      </div>
      <div className='w-full mt-7 flex flex-col md:flex-row text-base mb-10'>
        <p className='text-center'>
          GrisoCorp te ofrece como promotor o empresa una forma de financiación rápida, flexible y complementaria al sistema bancario tradicional.
          Al mismo tiempo funciona como plataforma de publicidad gracias al enorme impacto que muchos proyectos tienen en los medios de comunicación y a la gran base de inversores GrisoCorp.
        </p>
      </div>
      <div className='w-full justify-center text-center mt-5 items-center'>
        <Button link={'mailto:' + process.env.NEXT_PUBLIC_MAIL} className='px-11'>
          Guía de empresas
        </Button>
      </div>
    </section>
  )
}

export default SectionFour
