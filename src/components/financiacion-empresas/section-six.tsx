import React from 'react'
import Button from '../button'
import { FaRegHandshake, FaMoneyBillAlt } from 'react-icons/fa'
import { FaPeopleGroup } from 'react-icons/fa6'
import { GiMegaphone } from 'react-icons/gi'

const SectionSix = () => {
  return (
    <section className='flex text-[#333333] flex-col py-10 px-5 md:px-5 bg-[#C8E5E4]'>
      <div className='w-full mt-10 mb-5'>
        <h2 className='text-center font-medium text-4xl'>Nuestros resultados nos avalan.</h2>
      </div>
      <div className='w-full mt-7 flex flex-col lg:flex-col text-base mb-10'>
        <div className='w-full flex flex-col lg:flex-row text-center justify-center items-center gap-10 lg:gap-7 mb-10'>
          <div className='w-[230px] h-[230px] xl:w-[268px] xl:h-[268px] border-[3px] border-solid rounded-full border-[#91CCC9] bg-white'>
            <div className='relative flex items-center justify-center flex-col p-8'>
              <div className='relative mb-5'>
                <FaRegHandshake className='text-6xl text-[#93CCC8]' />
              </div>
              <p className='text-sm xl:text-base'>Más de 350 proyectos financiados con éxito</p>
            </div>
          </div>
          <div className='w-[230px] h-[230px] xl:w-[268px] xl:h-[268px] border-[3px] border-solid rounded-full border-[#91CCC9] bg-white'>
            <div className='relative flex items-center justify-center flex-col p-8'>
              <div className='relative mb-5'>
                <FaMoneyBillAlt className='text-6xl text-[#93CCC8]' />
              </div>
              <p className='text-sm xl:text-base'>Más de 135 millones de euros prestados a empresas por nuestros inversores</p>
            </div>
          </div>
          <div className='w-[230px] h-[230px] xl:w-[268px] xl:h-[268px] border-[3px] border-solid rounded-full border-[#91CCC9] bg-white'>
            <div className='relative flex items-center justify-center flex-col p-8'>
              <div className='relative mb-5'>
                <FaPeopleGroup className='text-6xl text-[#93CCC8]' />
              </div>
              <p className='text-sm xl:text-base'>Más de 135.000 usuarios que pueden financiar proyectos</p>
            </div>
          </div>
          <div className='w-[230px] h-[230px] xl:w-[268px] xl:h-[268px] border-[3px] border-solid rounded-full border-[#91CCC9] bg-white'>
            <div className='relative flex items-center justify-center flex-col p-8'>
              <div className='relative mb-5'>
                <GiMegaphone className='text-6xl text-[#93CCC8]' />
              </div>
              <p className='text-sm xl:text-base'>Máxima difusión de tu proyecto a través de nuestros canales informativos</p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full justify-center text-center items-center'>
        <Button link={'mailto:' + process.env.NEXT_PUBLIC_MAIL} className='px-11'>
          Finánciate
        </Button>
      </div>
    </section>
  )
}

export default SectionSix
