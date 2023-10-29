import { NavContext } from '@/context/navContext'
import Link from 'next/link'
import React, { useContext } from 'react'
import { Props } from './auth-buttons-mobile'

const MenuMobileLinks = ({ value, label }: Props) => {
  const navContext = useContext(NavContext)

  if (!navContext) {
    return null
  }

  const { setOpenMenu } = navContext
  return (
    <Link
      onClick={() => setOpenMenu(false)}
      href={value}
      onClick={() => setOpenMenu(false)}
      className='text-gray-800 font-normal text-sm pb-4'
    >
      {label}
    </Link>
  )
}

export default MenuMobileLinks
