import SectionFive from '@/components/financiacion-empresas/section-five'
import SectionFour from '@/components/financiacion-empresas/section-four'
import SectionOne from '@/components/financiacion-empresas/section-one'
import SectionSix from '@/components/financiacion-empresas/section-six'
import SectionThree from '@/components/financiacion-empresas/section-three'
import SectionTwo from '@/components/financiacion-empresas/section-two'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Griso Corp - Financiación Empresas',
  description: ''
}

const FinanciacionEmpresasPage = () => {
  return (
    <main className='-mt-[96px] mb-10'>
      <header>
        <div className='w-full h-[350px] md:h-[500px]'>
          <div className='w-full h-full bg-center bg-no-repeat bg-cover' style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(grisocorp-landing-get-funding.jpg)' }} />
        </div>
      </header>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
    </main>
  )
}

export default FinanciacionEmpresasPage
