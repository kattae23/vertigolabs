import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'

interface Props {
    label: string;
    value: string;
}

const AuthButtonsMobile = ({ label, value }: Props) => {
  return (
    <Link
      href={value}
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
      label === 'Acceder' ? 'bg-[#4EB4BC]' : 'bg-[#91CCC9]'
      )}
    >
      {label.toUpperCase()}
    </Link>
  )
}

export default AuthButtonsMobile
