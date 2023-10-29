import React from 'react'
import Button from '../button'
import Image from 'next/image'
import { FaCheck } from 'react-icons/fa'
import Link from 'next/link'

const SectionSeven = () => {
  return (
    <section className='mt-10 flex text-[#333333] flex-col mx-5 md:mx-32'>
      <div className='w-full flex justify-center mt-5'>
        <h2 className='text-center text-4xl font-medium'>Quiero financiar <strong>mi proyecto</strong>.</h2>
      </div>
      <div className='w-full mt-7 flex md:flex-row items-center justify-center'>
        <div className='w-full'>
          <h1 className='mb-4 font-bold'>Envía un mail a <Link className='text-[#93CCC8]' href={'mailto:' + process.env.NEXT_PUBLIC_MAIL}>{process.env.NEXT_PUBLIC_MAIL}</Link>, incluyendo esta información:</h1>
          <ul className='not-sr-only'>
            <li className='flex mb-4'><div><FaCheck className='text-2xl mr-3 text-[#93CCC8]' /></div><div>Datos de identificación: nombre, empresa, dirección, CIF y correo electrónico.</div></li>
            <li className='flex mb-4'><div><FaCheck className='text-2xl mr-3 text-[#93CCC8]' /></div><div>Currículum vitae de los perfiles clave.</div></li>
            <li className='flex'><div><FaCheck className='text-2xl mr-3 text-[#93CCC8]' /></div><div>Información técnica.</div></li>
          </ul>
        </div>
        <div className='hidden lg:block'>
          <Image className='w-[255px]' src='/grisocorp-quiero-financiar-mi-proyecto.png' alt='imagen de financiación agil para empresas' width={500} height={500} />
        </div>
      </div>
      <div className='w-full justify-center text-center mt-10 items-center'>
        <Button link={'mailto:' + process.env.NEXT_PUBLIC_MAIL} className='px-11'>
          Financiate
        </Button>
      </div>
    </section>
  )
}

export default SectionSeven
