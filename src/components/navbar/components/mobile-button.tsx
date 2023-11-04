import { NavContext } from '@/context/navContext'
import Link from 'next/link'
import React, { useContext } from 'react'
import { Props } from './auth-buttons-mobile'
import clsx from 'clsx'

const MobileButtons = ({ label, value }: Props) => {
  const navContext = useContext(NavContext)

  if (!navContext) {
    return null
  }

  const { setOpenMenu } = navContext
  return (
    <Link
      onClick={() => setOpenMenu(false)}
      href={process.env.NEXT_PUBLIC_URL + value}
      className={clsx('text-white py-2 w-full text-center font-normal shadow-md mb-2.5 rounded-sm text-sm hover:underline',
        label === 'Ingresar' ? 'bg-[#4EB4BC]' : 'bg-[#FD7B61] ml-6'
      )}
    >
      {label.toUpperCase()}
    </Link>
  )
}

export default MobileButtons
