import { NavContext } from '@/context/navContext'
import Link from 'next/link'
import React, { useContext } from 'react'

const MenuMobileLinks = ({ value, label }: {value: string; label: string;}) => {
  const navContext = useContext(NavContext)

  if (!navContext) {
    return null
  }

  const { setOpenMenu } = navContext
  return (
    <Link
      href={value}
      onClick={() => setOpenMenu(false)}
      className='text-gray-800 font-normal text-sm pb-4'
    >
      {label}
    </Link>
  )
}

export default MenuMobileLinks
