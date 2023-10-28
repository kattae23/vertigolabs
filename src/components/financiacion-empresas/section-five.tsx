import React from 'react'
import Button from '../home/button'
import { GrisoCorpKnowMore } from '../icons'

const SectionFive = () => {
  return (
    <section className='mt-10 flex text-[#333333] flex-col py-10 px-5 md:px-20 bg-[#EEEEEE]'>
      <div className='w-full mt-10 mb-5'>
        <h2 className='text-center font-medium text-4xl'>¿Quieres saber más?</h2>
      </div>
      <div className='w-full mt-7 flex flex-col md:flex-col text-base mb-10'>
        <div className='w-full flex flex-col lg:flex-row gap-10 lg:gap-7 mb-10'>
          <div className='relative w-full border-[1px] border-solid rounded-sm border-[#91CCC9] bg-white px-5 py-10'>
            <div className='absolute w-full flex justify-center -top-8 left-0'>
              <GrisoCorpKnowMore />
            </div>
            <h4 className='mb-2 font-bold'>¿Qué es la financiación participativa?</h4>
            <p>Plataforma de Financiación Participativa es la denominación jurídica que se le ha dado a las conocidas popularmente como Plataformas de Crowdlending. Son empresas que operan de manera online y actúan de intermediarias entre solicitantes de financiación e inversores.</p>
          </div>
          <div className='relative w-full border-[1px] border-solid rounded-sm border-[#91CCC9] bg-white px-5 py-10'>
            <div className='absolute w-full flex justify-center -top-8 left-0'>
              <GrisoCorpKnowMore />
            </div>
            <h4 className='mb-2 font-bold'>¿Qué tipo de proyectos se pueden financiar a través de Housers?</h4>
            <p>Los inversores de Housers pueden financiar proyectos inmobiliarios de tipo empresarial.</p>
          </div>
          <div className='relative w-full border-[1px] border-solid rounded-sm border-[#91CCC9] bg-white px-5 py-10'>
            <div className='absolute w-full flex justify-center -top-8 left-0'>
              <GrisoCorpKnowMore />
            </div>
            <h4 className='mb-2 font-bold'>¿Quién puede financiarse con Housers?</h4>
            <p>Cualquier empresa válidamente constituida en cualquier Estado de la Unión Europea. En el caso de personas físicas deberá tener su residencia fiscal en cualquier Estado de la Unión Europea.
              Todo ello después de que la plataforma haya realizado un análisis de viabilidad
            </p>
          </div>
        </div>
        <div className='w-full flex flex-col lg:flex-row gap-10 lg:gap-7'>
          <div className='relative w-full border-[1px] border-solid rounded-sm border-[#91CCC9] bg-white px-5 py-10'>
            <div className='absolute w-full flex justify-center -top-8 left-0'>
              <GrisoCorpKnowMore />
            </div>
            <h4 className='mb-2 font-bold'>¿Cuánto se puede financiar?</h4>
            <p>Hasta 5.000.000 € por proyecto y año.</p>
          </div>
          <div className='relative w-full border-[1px] border-solid rounded-sm border-[#91CCC9] bg-white px-5 py-10'>
            <div className='absolute w-full flex justify-center -top-8 left-0'>
              <GrisoCorpKnowMore />
            </div>
            <h4 className='mb-2 font-bold'>¿Qué requisitos hay que cumplir para buscar financiación para tu proyecto con Housers?</h4>
            <p>Deberás disponer de experiencia previa y demostrada y contar como promotor inmobiliario y un proyecto viable que reúna unos requisitos de calidad que más tarde podrá evaluar una empresa de análisis de riesgos externa.</p>
          </div>
          <div className='relative w-full border-[1px] border-solid rounded-sm border-[#91CCC9] bg-white px-5 py-10'>
            <div className='absolute w-full flex justify-center -top-8 left-0'>
              <GrisoCorpKnowMore />
            </div>
            <h4 className='mb-2 font-bold'>¿Cuánto te va a costar?</h4>
            <p>Tanto nuestro fee como el interés a los inversores serán definidos en función de la viabilidad del proyecto, localización, estado actual, y el scoring obtenido por el proyecto, así como de los proyectos que estén activos en ese momento.
            </p>
          </div>
        </div>
      </div>
      <div className='w-full justify-center text-center mt-5 items-center'>
        <Button link={'mailto:' + process.env.NEXT_PUBLIC_MAIL} className='px-11'>
          Finánciate
        </Button>
      </div>
    </section>
  )
}

export default SectionFive
