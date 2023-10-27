import { NavContext } from '@/context/navContext'
import clsx from 'clsx'
import Link from 'next/link'
import React, { useContext } from 'react'

interface Props {
    label: string;
    value: string;
}

const AuthButtonsMobile = ({ label, value }: Props) => {
  const navContext = useContext(NavContext)

  if (!navContext) {
    return null
  }

  const { setOpenMenu } = navContext
  return (
    <Link
      href={value}
      onClick={() => setOpenMenu(false)}
      className={clsx(`text-white 
                    py-2 
                    w-full 
                    text-center 
                    font-light 
                    shadow-md 
                    mb-2.5 
                    rounded-sm 
                    text-sm 
                    hover:underline
                    `,
      label === 'Acceder' ? 'bg-[#4EB4BC]' : 'bg-[#FD7B61]'
      )}
    >
      {label.toUpperCase()}
    </Link>
  )
}

export default AuthButtonsMobile
