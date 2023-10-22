import Link from 'next/link'
import React from 'react'

interface ButtonProps {
    link: string;
    children: React.ReactNode;
    className?: string;
}

const Button = ({ link, children, className }: ButtonProps) => {
  return (
    <div className='w-full flex mt-20 justify-center items-center'>
      <Link href={link} className={'px-4 py-2 bg-[#FD7B61] text-white text-center text-sm rounded-sm uppercase' + ' ' + className}>{children}</Link>
    </div>
  )
}

export default Button
