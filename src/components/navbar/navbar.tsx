'use client'
import Link from 'next/link'
import React, { useContext } from 'react'
import { Logo, LogoSmall, MenuIcon } from '../icons'
import Menu from './components/menu'
import { NavContext } from '@/context/navContext'
import MenuMobile from './components/menu-mobile'
import clsx from 'clsx'

const Navbar = () => {
  const navContext = useContext(NavContext)

  if (!navContext) {
    return null
  }

  const { fix, setOpenMenu } = navContext

  return (
    <header
      className={
          clsx(`
                w-full
                fixed
                top-0
                left-0
                z-20
                transition-all 
                duration-300
              `, fix ? 'bg-[#91CCC9] h-[77px]' : 'h-24 bg-transparent'
          )
        }
    >
      <nav className='w-full h-full bg-transparent  flex items-center flex-wrap px-4'>
        <button onClick={() => setOpenMenu(true)}>
          {fix ? <MenuIcon styles='fill-[#483C3D]' fill='white' /> : <MenuIcon styles='fill-white' fill='white' />}
        </button>
        <Link href='/' className='ml-6'>
          {fix ? <LogoSmall /> : <Logo />}
        </Link>
        <div className='flex flex-grow justify-end'>
          <Menu />
          <MenuMobile />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
