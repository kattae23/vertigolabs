import React from 'react'
import Button from '../home/button'

const SectionFive = () => {
  return (
    <section className='mt-10 flex text-[#333333] flex-col py-10 px-20 md:px-40 bg-[#EEEEEE]'>
      <div className='w-full mt-10 mb-10'>
        <h2 className='text-center font-medium text-4xl'>¿Quieres saber más?</h2>
      </div>
      <div className='w-full mt-7 flex flex-col md:flex-row text-base mb-10'>
        <div>pipe</div>
      </div>
      <div className='w-full justify-center text-center mt-5 items-center'>
        <Button link={'mailto:' + process.env.NEXT_PUBLIC_MAIL} className='px-11'>
          Finánciate
        </Button>
      </div>
    </section>
  )
}

export default SectionFive
