import Image from 'next/image'
import React from 'react'
import { AppStoreIcon, PlayStoreIcon } from '../icons'
import Link from 'next/link'

const AppDownloads = () => {
  return (
    <section className='flex flex-col justify-center items-center md:flex-row text-[#333333] px-10 md:px-20 mb-20'>
      <div className='md:w-1/2 flex justify-center items-center p-20'>
        <Image src={process.env.NEXT_PUBLIC_URL + '/grisocorp-app-main-2022.png'} className='w-full min-w-min' alt='grisocorp app publicity' width={500} height={500} />
      </div>
      <div className='md:w-1/2 flex flex-col justify-center items-center text-center'>
        <div>
          <h2 className='text-4xl font-bold mb-1'>Altas rentabilidades a un solo click</h2>
          <p className='text-sm md:text-base mt-3 md:mt-3'>Invierte de forma sencilla desde tu móvil en nuestros proyectos</p>
        </div>
        <div className=''>
          <h1 className='text-[#212023] my-4'>¡DESCÁRGALA YA!</h1>
          <div className='flex flex-col md:flex-row'>
            <Link aria-label='Link to download our app on AppStore' href={process.env.NEXT_PUBLIC_URL + '/'}>
              <AppStoreIcon className='mb-1 md:mr-7 md:mb-0' />
            </Link>
            <Link aria-label='Link to download our app on PlayStore' href={process.env.NEXT_PUBLIC_URL + '/'}>
              <PlayStoreIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppDownloads
