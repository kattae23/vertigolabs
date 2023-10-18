import React, { useContext } from 'react'
import { CloseIcon, LogoSmall } from '../../icons'
import { NavContext } from '@/context/navContext'
import { menuLinks } from './menu'
import clsx from 'clsx'
import AuthButtonsMobile from './auth-buttons-mobile'
import SocialIcons from '@/components/social-icons'
import LanguageMenu from './language-menu'

const MenuMobile = () => {
  const navContext = useContext(NavContext)

  if (!navContext) {
    return null
  }

  const { openMenu, setOpenMenu } = navContext
  return ( // menu como tal
    <div
      className={
      clsx(`
      w-[80vw]
      md:w-80 
      h-screen 
      bg-white 
      overflow-y-scroll
      top-0 
      transition-all 
      duration-300 
      absolute 
      flex 
      flex-col 
      p-8`,
      openMenu ? 'left-0' : '-left-[1200px]'
      )
}
    >
      <div className='relative flex flex-row justify-between items-center'>
        <LogoSmall />
        <span className='mt-3'>
          <button onClick={() => setOpenMenu(false)}>
            <CloseIcon />
          </button>
        </span>
      </div>
      <hr />
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
