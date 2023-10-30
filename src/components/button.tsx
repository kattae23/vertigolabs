import Link from 'next/link'
import React from 'react'

interface ButtonProps {
    link: string;
    children: React.ReactNode;
    className?: string;
}

const Button = ({ link, children, className }: ButtonProps) => {
  return (
    <div className='w-full flex justify-center items-center'>
      <Link href={link} className={'px-4 py-2 bg-[#3f51b5] text-white text-center text-sm rounded-sm uppercase' + ' ' + className} scroll={false}>{children}</Link>
    </div>
  )
}

export default Button
