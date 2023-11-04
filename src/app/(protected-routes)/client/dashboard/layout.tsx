import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'on development'
}

export default function DashboardLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className='mx-3 md:mx-[60px] lg:mx-[100px] xl:mx-[140px] py-5 md:py-12 mt-[77px]'>
      {children}
    </div>
  )
}
