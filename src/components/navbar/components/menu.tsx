import SignInButton from '@/components/sign-in-button'
import { NavContext } from '@/context/navContext'
import clsx from 'clsx'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React, { useContext } from 'react'
import { FaSignOutAlt } from 'react-icons/fa'

export const menuLinks = [
  {
    label: 'languageSelector',
    value: [
      {
        label: 'Spanish',
        value: '/es'
      },
      {
        label: 'English',
        value: '/en'
      },
      {
        label: 'Italian',
        value: '/it'
      },
      {
        label: 'Portugues',
        value: '/pt'
      }
    ]
  },
  {
    label: 'Acceder',
    value: '/auth/login'
  },
  {
    label: 'Regístrate',
    value: '/auth/register'
  }
]

const Menu = () => {
  const { status } = useSession()
  const navContext = useContext(NavContext)

  if (!navContext) {
    return null
  }

  const { fix, setFix, openLanguageMenu, setOpenLanguageMenu, language, setLanguage } = navContext

  function setFixed () {
    if (window.scrollY >= 50) setFix(true)
    else setFix(false)
  }

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', setFixed)
  }

  return (
    <div className='relative hidden md:flex flex-row justify-center items-center'>
      {
        status === 'authenticated'
          ? (
            <button title='Logout' className={fix ? 'text-zinc-800' : 'text-white'} onClick={() => signOut()}>
              <FaSignOutAlt />
            </button>
            )
          : menuLinks.map(({ label, value }, index) =>
            typeof value === 'string'
              ? (
                <SignInButton key={index} {...{ label, value, fix }} />
                )
              : (
                <div key={label}>
                  <button className={clsx('font-medium text-sm', fix ? 'text-[#483c3d]' : 'text-white')} onClick={() => setOpenLanguageMenu(!openLanguageMenu)}>{language.toUpperCase()}</button>
                  <ul className={clsx('absolute top-7 left-0 bg-white pl-2 pr-8 pb-3 text-start py-2 border', openLanguageMenu ? '' : 'hidden')}>
                    {
                  value.map(({ label, value }, index) => (
                    (
                      <li key={index}>
                        <Link href={process.env.NEXT_PUBLIC_URL + value} className='text-[#483c3d] font-medium text-sm' onClick={() => setLanguage(label)}>
                          {label.toUpperCase()}
                        </Link>
                      </li>
                    )
                  ))
                  }
                  </ul>
                </div>
                )
          )
}
    </div>
  )
}

export default Menu
