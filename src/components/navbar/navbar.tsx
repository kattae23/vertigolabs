'use client'
import Link from 'next/link'
import React, { useContext } from 'react'
import { MenuIcon } from '../icons'
import Menu from './components/menu'
import { NavContext } from '@/context/navContext'
import MenuMobile from './components/menu-mobile'
import clsx from 'clsx'
import Image from 'next/image'

const Navbar = () => {
  const navContext = useContext(NavContext)

  if (!navContext) {
    return null
  }

  const { fix, setOpenMenu, openMenu } = navContext

  return (
    <header
      className={
          clsx('w-full fixed top-0 left-0 z-20 transition-all duration-300', fix ? 'bg-[#91CCC9] h-[77px]' : 'h-24 bg-transparent'
          )
        }
    >
      <nav className='w-full h-full bg-transparent  flex items-center flex-wrap px-4'>
        <button aria-label='Menu Button' onClick={() => setOpenMenu(true)}>
          {fix ? <MenuIcon styles='fill-[#483C3D]' fill='white' /> : <MenuIcon styles='fill-white' fill='white' />}
        </button>
        <Link href={process.env.NEXT_PUBLIC_URL + '/'} className='ml-4 mb-2'>
          <Image
            src={process.env.NEXT_PUBLIC_URL + '/grisocorp.png'}
            alt='logo of griso corp, link to the home page'
            width={600}
            height={600}
            className='w-32 md:w-36'
          />
        </Link>
        <div className='flex flex-grow justify-end'>
          <Menu />
          <MenuMobile />
        </div>
      </nav>

      <div className={clsx('absolute top-0 right-0 w-screen h-screen -z-20 transition-all duration-300 bg-black', openMenu ? 'opacity-50 flex' : 'opacity-0 hidden')} onClick={() => setOpenMenu(false)} />
    </header>
  )
}

export default Navbar
