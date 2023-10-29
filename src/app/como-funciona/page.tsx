import SectionOne from '@/components/como-funciona/section-one'
import SectionTwo from '@/components/como-funciona/section-two'
import React from 'react'

const HowItWorksPage = () => {
  return (
    <main className='-mt-[96px]'>
      <header>
        <div className='w-full h-[350px] md:h-[500px]'>
          <div className='w-full h-full bg-center bg-no-repeat bg-cover' style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(grisocorp-landing-how-it-works.jpg)' }} />
        </div>
      </header>
      <SectionOne />
      <SectionTwo />
    </main>
  )
}

export default HowItWorksPage
