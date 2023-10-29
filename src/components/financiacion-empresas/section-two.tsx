import React from 'react'
import Button from '../button'

const SectionTwo = () => {
  return (
    <section className='mt-10 flex text-[#333333] flex-col mx-5 md:mx-32 bg-no-repeat bg-center' style={{ backgroundImage: 'url(/grisocorp-background-financiate.jpg)' }}>
      <div className='w-1/2 flex'>
        <h2 className='text-start font-medium text-4xl'><span className='text-[#93CCC8]'>GrisoCorp</span> es la plataforma <span className='font-bold'>líder en crowdlending</span> en el sur de Europa.</h2>
      </div>
      <div className='w-full md:w-2/3 mt-7 flex flex-col md:flex-row text-sm'>
        <div className='w-full'>
          <p className='py-1 px-3 bg-[#EAFAF9] rounded-full mb-5'>Más de <span className='font-bold'>350 proyectos</span> financiados en Europa.</p>
          <p className='py-1 px-3 bg-[#EAFAF9] rounded-full mb-5'>Usuarios de más de <span className='font-bold'>160 nacionalidades</span> diferentes.</p>
          <p className='py-1 px-3 bg-[#EAFAF9] rounded-full mb-5'>Proceso <span className='font-bold'>ágil y sencillo</span>: mándanos tu proyecto y lo valoraremos.</p>
        </div>
        <div className='w-full'>
          <p className='py-1 px-3 bg-[#EAFAF9] rounded-full mb-5'>Más de <span className='font-bold'>135.000 usuarios</span> de la plataforma.</p>
          <p className='py-1 px-3 bg-[#EAFAF9] rounded-full mb-5'>Nuestros préstamos <span className='font-bold'>no figuran en CIRBE</span>.</p>
          <p className='py-1 px-3 bg-[#EAFAF9] rounded-full mb-5'>GrisoCorp se encarga de la <span className='font-bold'>captación y de repartir los beneficios y capital</span> a los inversores.</p>
        </div>
      </div>
      <div className='w-full justify-center text-center mt-5 items-center'>
        <Button link={'mailto:' + process.env.NEXT_PUBLIC_MAIL} className='px-11'>
          Financiate
        </Button>
      </div>
    </section>
  )
}

export default SectionTwo
