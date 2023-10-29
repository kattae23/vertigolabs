import { NavContext } from '@/context/navContext'
import clsx from 'clsx'
import Link from 'next/link'
import React, { useContext } from 'react'

export interface Props {
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
      onClick={() => setOpenMenu(false)}
      href={process.env.NEXT_PUBLIC_URL + value}
      className={clsx('text-white py-2  w-full text-center font-light shadow-md mb-2.5 rounded-sm text-sm hover:underline',
        label === 'Acceder' ? 'bg-[#4EB4BC]' : 'bg-[#91CCC9]'
      )}
    >
      {label.toUpperCase()}
    </Link>
  )
}

export default AuthButtonsMobile
