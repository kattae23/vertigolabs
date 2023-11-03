'use client'
import { usePathname } from 'next/navigation'
import React, { ReactNode, createContext, useEffect, useState } from 'react'

interface NavContextProps {
    fix: boolean;
    setFix: React.Dispatch<React.SetStateAction<boolean>>;
    openLanguageMenu: boolean;
    setOpenLanguageMenu: React.Dispatch<React.SetStateAction<boolean>>;
    language: string;
    fixWork: boolean;
    setLanguage: React.Dispatch<React.SetStateAction<string>>;
    openMenu: boolean;
    setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
    openLanguageMenu2: boolean;
    setOpenLanguageMenu2: React.Dispatch<React.SetStateAction<boolean>>;
  }

export const NavContext = createContext<NavContextProps | undefined>(undefined)

export function NavProvider ({ children }: {children: ReactNode}) {
  const pathName = usePathname()
  const [fix, setFix] = useState(false)
  const [fixWork, setFixWork] = useState(false)
  const [openLanguageMenu, setOpenLanguageMenu] = useState(false)
  const [openLanguageMenu2, setOpenLanguageMenu2] = useState(false)
  const [language, setLanguage] = useState('Spanish')
  const [openMenu, setOpenMenu] = useState(false)

  useEffect(() => {
    if (pathName === '/') {
      setFixWork(true)
    } else {
      setFixWork(false)
    }
  }, [pathName])

  return (
    <NavContext.Provider value={{
      fix,
      setFix,
      openLanguageMenu,
      setOpenLanguageMenu,
      language,
      setLanguage,
      fixWork,
      openMenu,
      setOpenMenu,
      openLanguageMenu2,
      setOpenLanguageMenu2
    }}
    >
      {children}
    </NavContext.Provider>
  )
}
