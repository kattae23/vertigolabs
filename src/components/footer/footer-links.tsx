import Link from 'next/link'
import React from 'react'

interface Props {
    label: string;
    href: string;
}

const FooterLinks = ({ label, href }: Props) => {
  return (
    <li className='text-base mb-2 text-gray-600 hover:underline'>
      <Link href={process.env.NEXT_PUBLIC_URL + href}>
        {label}
      </Link>
    </li>
  )
}

export default FooterLinks
