import Link from 'next/link'
import React from 'react'
import { BsShieldLock } from 'react-icons/bs'

const page = () => {
  return (
    <main className='text-[#706162]'>
      <h2 className='text-2xl uppercase text-center'>Mis datos de usuario</h2>
      <article>
        <div className='p-7 shadow-md border mt-5 w-1/2'>
          <h2 className='text-start uppercase text-xl'>Ajustes de la cuenta</h2>
          <div className='flex justify-between my-6 items-center'>
            <BsShieldLock className='w-1/2 text-8xl text-[#8FCCC9] text-end' />
            <p className='text-xs'>Cambia tu contraseña, tus preferencias de idioma...</p>
          </div>
          <Link href={process.env.NEXT_PUBLIC_URL + '/client/dashboard/mis-datos'} className='block text-xs font-bold px-4 py-3 border-[#8FCCC9] bg-[#8FCCC9] border-solid border text-white uppercase text-center'>
            Crear cuenta GrisoCorp
          </Link>
        </div>
      </article>
    </main>
  )
}

export default page
