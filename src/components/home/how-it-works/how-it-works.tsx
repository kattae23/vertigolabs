import { GrisoCorpLabsIcon, PersonAdd, ProtectedInvesment, QuarterlyInterest } from '@/components/icons'
import React from 'react'
import Button from '../button'

const HowItWorks = () => {
  return (
    <section className='w-full pb-12 h-full bg-[#C8E5E4] flex justify-center items-center text-[#333333] px-5 lg:px-32 flex-col'>
      <h2 className=' text-3xl font-medium mt-14 mb-11'>Invest in Griso Corp is easy</h2>
      <article className='w-full h-full flex flex-col lg:flex-row text-center gap-10 justify-center items-center'>
        <div className='flex flex-col w-full lg:w-1/2 justify-center items-center '>
          <PersonAdd />
          <h2 className='font-bold text-sm mt-5'>
            Create your Griso Corp account and activate it for free
          </h2>
          <p className='text-sm mt-2'>
            It is a quite straightforward process that you can complete from the web in just a few clicks
          </p>
        </div>
        <div className='flex flex-col w-full lg:w-1/2 justify-center items-center '>
          <GrisoCorpLabsIcon />
          <h2 className='font-bold text-sm mt-5'>
            Invest in projects with
            high profitability
          </h2>
          <p className='text-sm mt-2'>
            Choose the project and the amount you want to invest in and pay by bank transfer or credit card
          </p>
        </div>
        <div className='flex flex-col w-full lg:w-1/2 justify-center items-center '>
          <ProtectedInvesment />
          <h2 className='font-bold text-sm mt-5'>
            Protected
            investments
          </h2>
          <p className='text-sm mt-2'>
            The loans are safeguarded by a first-rank mortgage guarantee registered in the land register
          </p>
        </div>
        <div className='flex flex-col w-full lg:w-1/2 justify-center items-center '>
          <QuarterlyInterest />
          <h2 className='font-bold text-sm mt-5'>
            Receive quarterly interest
            from your investment
          </h2>
          <p className='text-sm mt-2'>
            Developers pay quarterly interest to investors on the loans they have granted
          </p>
        </div>
      </article>
      <div className='mt-10'>
        <Button link='/como-funciona'>
          Cómo funciona
        </Button>
      </div>
    </section>
  )
}

export default HowItWorks
