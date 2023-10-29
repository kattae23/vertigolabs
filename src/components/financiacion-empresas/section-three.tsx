import React from 'react'
import Button from '../button'
import { GiCheckMark } from 'react-icons/gi'

const SectionThree = () => {
  return (
    <section className='mt-10 flex text-[#333333] flex-col py-10 px-5 md:px-32 bg-[#C8E5E4]'>
      <div className='w-full'>
        <h2 className='text-center font-medium text-4xl'>Ventajas</h2>
      </div>
      <div className='w-full mt-7 flex flex-col lg:flex-row text-base'>
        <div className='w-full flex flex-col justify-center'>
          <div className='w-full flex relative'>
            <GiCheckMark className='text-white text-4xl absolute z-10' />
            <p className='py-1 px-3 rounded-full mb-11 z-20'>Préstamos de un <span className='font-bold'>5% de interés</span> anual</p>
          </div>
          <div className='w-full flex relative'>
            <GiCheckMark className='text-white text-4xl absolute z-10' />
            <p className='py-1 px-3 rounded-full mb-11 z-20'>Amortización flexible <span className='font-bold'>tipo bullet</span></p>
          </div>
        </div>
        <div className='w-full flex flex-col justify-center '>
          <div className='w-full flex relative'>
            <GiCheckMark className='text-white text-4xl absolute z-10' />
            <p className='py-1 px-3 rounded-full mb-11 z-20'>Financiación de <span className='font-bold'>hasta 5.000.000 euros</span> por proyecto</p>
          </div>
          <div className='w-full flex relative'>
            <GiCheckMark className='text-white text-4xl absolute z-10' />
            <p className='py-1 px-3 rounded-full mb-11 z-20'><span className='font-bold'>Cancelación anticipada</span> si lo necesitas</p>
          </div>
        </div>
        <div className='w-full flex flex-col justify-center '>
          <div className='w-full flex relative'>
            <GiCheckMark className='text-white text-4xl absolute z-10' />
            <p className='py-1 px-3 rounded-full mb-11 z-20'>Plazos de amortización <span className='font-bold'>adaptados a tus necesidades</span> desde 6 meses</p>
          </div>
          <div className='w-full flex relative'>
            <GiCheckMark className='text-white text-4xl absolute z-10' />
            <p className='py-1 px-3 rounded-full mb-11 z-20'>Sin figurar en <span className='font-bold'>CIRBE</span></p>
          </div>
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

export default SectionThree
