import React, { useContext } from 'react'
import { CloseIcon } from '../../icons'
import { NavContext } from '@/context/navContext'
import { menuLinks } from './menu'
import clsx from 'clsx'
import AuthButtonsMobile from './auth-buttons-mobile'
import LanguageMenu from './language-menu'
import Image from 'next/image'
import Link from 'next/link'
import SocialIcons from '@/components/social-icons'
import { useSession } from 'next-auth/react'
import MobileButtons from './mobile-button'

const MenuMobile = () => {
  const { data: session } = useSession()
  const navContext = useContext(NavContext)

  if (!navContext) {
    return null
  }

  const { openMenu, setOpenMenu } = navContext
  return ( // menu como tal
    <div
      className={
      clsx('w-[100vw] sm:w-80 h-screen bg-white overflow-y-scroll top-0 transition-all duration-700 absolute flex flex-col p-8',
        openMenu ? 'left-0' : '-left-[1200px]'
      )
}
    >
      <div className='relative flex flex-row justify-between items-center'>
        <Link onClick={() => setOpenMenu(false)} href={process.env.NEXT_PUBLIC_URL + '/'}>
          <Image
            src={process.env.NEXT_PUBLIC_URL + '/grisocorp.png'}
            alt='logo of griso corp, link to the home page'
            width={600}
            height={600}
            className='w-32 md:w-36'
          />
        </Link>
        <span className='mt-3'>
          <button onClick={() => setOpenMenu(false)}>
            <CloseIcon />
          </button>
        </span>
      </div>
      <hr />
      {
        session
          ? (
            <div className='flex flex-col md:hidden space-y-5 text-xs text-[#493d3e] text-center mb-5'>
              <p className=''>Saldo disponible: <span className='font-bold text-sm'>{session?.user.money} $</span></p>
              <div className='flex justify-between'>
                <MobileButtons label='Ingresar' value='/client/dashboard/mi-cuenta/ingresos' />
                <MobileButtons label='Invertir' value='/client/dashboard/oportunidades' />
              </div>
            </div>
            )
          : null
      }
      {
        menuLinks.map(({ label, value }, index) =>
          typeof value === 'string'
            ? (
              <AuthButtonsMobile key={index} label={label} value={value} />
              )
            : (
              <LanguageMenu key={index} label={label} value={value} />
              )
        )
}
      <hr />
      <SocialIcons />
    </div>
  )
}

export default MenuMobile
