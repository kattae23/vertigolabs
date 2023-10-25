import Link from 'next/link'
import React from 'react'

const MenuMobileLinks = ({ value, label }: {value: string; label: string;}) => {
  return (
    <Link
      href={value}
      className='text-gray-800 font-normal text-sm pb-4'
    >
      {label}
    </Link>
  )
}

export default MenuMobileLinks
