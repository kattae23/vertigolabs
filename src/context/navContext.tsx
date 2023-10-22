'use client'
import React, { ReactNode, createContext, useState } from 'react'

interface NavContextProps {
    fix: boolean;
    setFix: React.Dispatch<React.SetStateAction<boolean>>;
    openLanguageMenu: boolean;
    setOpenLanguageMenu: React.Dispatch<React.SetStateAction<boolean>>;
    language: string;
    setLanguage: React.Dispatch<React.SetStateAction<string>>;
    openMenu: boolean;
    setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
    openLanguageMenu2: boolean;
    setOpenLanguageMenu2: React.Dispatch<React.SetStateAction<boolean>>;
  }

export const NavContext = createContext<NavContextProps | undefined>(undefined)

export function NavProvider ({ children }: {children: ReactNode}) {
  const [fix, setFix] = useState(false)
  const [openLanguageMenu, setOpenLanguageMenu] = useState(false)
  const [openLanguageMenu2, setOpenLanguageMenu2] = useState(false)
  const [language, setLanguage] = useState('Spanish')
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <NavContext.Provider value={{
      fix,
      setFix,
      openLanguageMenu,
      setOpenLanguageMenu,
      language,
      setLanguage,
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
