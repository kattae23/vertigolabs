import { IconExpand } from '@/components/icons'
import { NavContext } from '@/context/navContext'
import clsx from 'clsx'
import React, { useContext } from 'react'
import MenuMobileLinks from './menu-mobile-links'
import LanguageMenuMobile from './language-menu-mobile'

const menuMobileLinks = [
  {
    label: 'Invierte',
    value: '/oportunidades'
  },
  {
    label: 'Finánciate',
    value: '/financiacion-empresa'
  },
  {
    label: 'Nuestra App',
    value: '/app'
  },
  {
    label: 'Estadísticas',
    value: '/estadisticas'
  },
  {
    label: 'Cómo funciona',
    value: '/como-funciona'
  },
  {
    label: 'Quiénes somos',
    value: '/quieres-somos'
  },
  {
    label: 'Contacta con nosotros',
    value: '/contacto'
  }
]

interface Props {
    label: string;
    value: {
        label: string;
        value: string;
    }[];
}

const LanguageMenu = ({ label, value }: Props) => {
  const navContext = useContext(NavContext)

  if (!navContext) {
    return null
  }

  const { fix, language, openLanguageMenu2, setOpenLanguageMenu2 } = navContext
  return (
    <div key={label} className='relative flex flex-col'>
      <button
        className={clsx(`
          w-full
          text-start
          font-normal
          text-sm
         `,
        fix ? 'text-gray-800' : 'text-gray-800'
        )} onClick={() => setOpenLanguageMenu2(!openLanguageMenu2)}
      >{language}
      </button>

      <button className='absolute top-[8px] right-2' onClick={() => setOpenLanguageMenu2(true)}>
        <IconExpand />
      </button>
      <hr />
      {
        menuMobileLinks.map(({ label, value }, index) => (
          <MenuMobileLinks key={index} {...{ label, value }} />
        ))
      }
      <hr />
      <LanguageMenuMobile {...{ value }} />
    </div>
  )
}

export default LanguageMenu
