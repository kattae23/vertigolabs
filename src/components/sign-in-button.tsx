import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'

interface Props {
    label: string;
    value: string;
    fix: boolean;
}

const SignInButton = ({ value, label, fix }: Props) => {
  return (
    <Link href={process.env.NEXT_PUBLIC_URL + value} className={clsx('hidden md:inline-block font-medium text-sm ml-5 hover:underline', fix ? 'text-[#483c3d]' : 'text-white')}>
      {label.toUpperCase()}
    </Link>
  )
}

export default SignInButton
