import React from 'react'
import Button from '../button'
import Image from 'next/image'

const SectionOne = () => {
  return (
    <section className='mt-10 flex text-[#333333] flex-col mx-5 md:mx-40'>
      <div className='w-full flex justify-center'>
        <h2 className='text-center text-4xl'><strong>Financiación alternativa</strong> de proyectos inmobiliarios</h2>
      </div>
      <div className='w-full mt-7 flex md:flex-row'>
        <div>
          <p>En GrisoCorp te ayudamos a encontrar financiación para tus proyectos inmobiliarios.</p>
          <ul className='md:w-3/4'>
            <li className='w-full flex mb-5 justify-between mt-5'>
              <div className='text-[#93ccc8] items-center justify-center w-[50px] h-[50px] flex text-2xl p-2 border-[1px] border-[#93ccc8] border-solid rounded-full'>1</div>
              <h1 className='ml-5 w-10/12'>Envíanos tu proyecto.</h1>
            </li>
            <li className='w-full flex mb-5 justify-between'>
              <div className='text-[#93ccc8] items-center justify-center w-[50px] h-[50px] flex text-2xl p-2 border-[1px] border-[#93ccc8] border-solid rounded-full'><h2>2</h2></div>
              <h1 className='ml-5 w-10/12'>Nuestros analistas de proyectos lo valorarán.</h1>
            </li>
            <li className='w-full flex mb-5 justify-between'>
              <div className='text-[#93ccc8] items-center justify-center w-[50px] h-[50px] flex text-2xl p-2 border-[1px] border-[#93ccc8] border-solid rounded-full'>3</div>
              <h1 className='ml-5 w-10/12'>
                Se le asignará un scoring a partir de un análisis financiero realizado por una empresa externa.
              </h1>
            </li>
            <li className='w-full flex mb-5 justify-between'>
              <div className='text-[#93ccc8] items-center justify-center w-[50px] h-[50px] flex text-2xl p-2 border-[1px] border-[#93ccc8] border-solid rounded-full'>4</div>
              <h1 className='ml-5 w-10/12'>
                Se publicará en GrisoCorp y se comunicará a nuestros inversores.
              </h1>
            </li>
          </ul>
          <p>En GrisoCorp te ayudamo  s a encontrar financiación para tus proyectos inmobiliarios.</p>
        </div>
        <div className='hidden md:block'>
          <Image className='w-[350px]' src={process.env.NEXT_PUBLIC_URL + '/grisocorp-financiacion-agil-para-empresas.jpg'} alt='imagen de financiación agil para empresas' width={500} height={500} />
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

export default SectionOne
