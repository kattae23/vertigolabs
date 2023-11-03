import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'

interface Props {
    label: string;
    value: string;
    fix: boolean;
    fixWork: boolean;
}

const SignInButton = ({ value, label, fix, fixWork }: Props) => {
  return (
    <Link href={process.env.NEXT_PUBLIC_URL + value} className={clsx('hidden md:inline-block font-medium text-sm ml-5 hover:underline', fixWork ? fix ? 'text-[#483c3d]' : 'text-white' : 'text-[#483c3d]')}>
      {label.toUpperCase()}
    </Link>
  )
}

export default SignInButton
