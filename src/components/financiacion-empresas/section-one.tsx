import React from 'react'
import Button from '../home/button'
import Image from 'next/image'

const SectionOne = () => {
  return (
    <section className='mt-10 flex text-[#333333] flex-col mx-20 md:mx-40'>
      <div className='w-full flex justify-center'>
        <h2 className='text-center text-4xl'><strong>Financiación alternativa</strong> de proyectos inmobiliarios</h2>
      </div>
      <div className='w-full mt-7 flex md:flex-row'>
        <div className='w-3/4'>
          <p>En GrisoCorp te ayudamos a encontrar financiación para tus proyectos inmobiliarios.</p>
          <div className='w-full flex flex-row items-center mb-5 mt-5'>
            <div className='text-[#93ccc8] items-center justify-center w-[50px] h-[50px] flex text-2xl p-2 border-[1px] border-[#93ccc8] border-solid rounded-full'>1</div>
            <h1 className='ml-5'>Envíanos tu proyecto.</h1>
          </div>
          <div className='w-full flex flex-row items-center mb-5'>
            <div className='text-[#93ccc8] items-center justify-center w-[50px] h-[50px] flex text-2xl p-2 border-[1px] border-[#93ccc8] border-solid rounded-full'>2</div>
            <h1 className='ml-5'>Nuestros analistas de proyectos lo valorarán.</h1>
          </div>
          <div className='w-full flex flex-row items-center mb-5'>
            <div className='text-[#93ccc8] items-center justify-center w-[50px] h-[50px] flex text-2xl p-2 border-[1px] border-[#93ccc8] border-solid rounded-full'>3</div>
            <h1 className='ml-5'>Se le asignará un scoring a partir de un análisis financiero realizado por una empresa externa.</h1>
          </div>
          <div className='w-full flex flex-row items-center mb-5'>
            <div className='text-[#93ccc8] items-center justify-center w-[50px] h-[50px] flex text-2xl p-2 border-[1px] border-[#93ccc8] border-solid rounded-full'>4</div>
            <h1 className='ml-5'>
              Se publicará en GrisoCorp y se comunicará a nuestros inversores.
            </h1>
          </div>
          <p>En GrisoCorp te ayudamo  s a encontrar financiación para tus proyectos inmobiliarios.</p>
        </div>
        <div className='hidden md:block'>
          <Image className='w-[350px]' src='/grisocorp-financiacion-agil-para-empresas.jpg' alt='imagen de financiación agil para empresas' width={500} height={500} />
        </div>
      </div>
      <div className='w-full justify-center text-center mt-5 items-center'>
        <Button link='' className='px-11'>
          Financiate
        </Button>
      </div>
    </section>
  )
}

export default SectionOne
