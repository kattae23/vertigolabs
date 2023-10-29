import React from 'react'
import { ArrowLeftIcon, ArrowRightIcon, IconArrowDown } from '../icons'
import Link from 'next/link'

type HowItWorksComponentProps = {
  right: boolean;
  Icon: React.ReactNode;
  title: string;
  subtitle: string;
  subsubtitle: string;
  linkHref: string;
  linkText: string;
};

const HowItWorksComponent: React.FC<HowItWorksComponentProps> = ({ right, Icon, title, subtitle, subsubtitle, linkHref, linkText }) => {
  if (right) {
    return (

      <div className='w-full mt-7 flex flex-col lg:flex-row justify-between'>
        <div className='w-full hidden lg:flex relative lg:mr-10'>
          <div className='absolute right-0 top-16'>
            <ArrowLeftIcon />
          </div>
        </div>
        <div className='w-auto flex justify-center'>
          {Icon}
        </div>
        <div className='w-full lg:ml-10 text-center lg:text-start'>
          <h1 className='font-normal text-2xl mb-2'>{title}</h1>
          <p className='text-sm'>
            {subtitle}
            <br />
            {subsubtitle}
          </p>
          <div className='w-auto mt-5'>
            <div className=''>
              <Link href={linkHref} className='px-4 py-2 bg-[#FD7B61] text-white text-center text-sm rounded-sm uppercase' scroll={false}>{linkText}</Link>
            </div>
          </div>
        </div>
        <div className='w-full flex items-center justify-center lg:hidden relative mt-10'>
          <div className=''>
            <IconArrowDown />
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className='w-full mt-7 flex flex-col lg:flex-row-reverse justify-between'>
        <div className='w-full hidden lg:flex relative lg:ml-10'>
          <div className='absolute left-0 top-16'>
            <ArrowRightIcon />
          </div>
        </div>
        <div className='w-auto flex justify-center'>
          {Icon}
        </div>
        <div className='w-full lg:mr-10 text-center lg:text-end'>
          <h1 className='font-normal text-2xl mb-2'>{title}</h1>
          <p className='text-sm'>
            {subtitle}
            <br />
            {subsubtitle}
          </p>
          <div className='w-auto mt-5'>
            <div className='/dashboard/mis-datos'>
              <Link href={linkHref} className='px-4 py-2 bg-[#FD7B61] text-white text-center text-sm rounded-sm uppercase' scroll={false}>{linkText}</Link>
            </div>
          </div>
        </div>
        <div className='w-full flex items-center justify-center lg:hidden relative mt-10'>
          <div className=''>
            <IconArrowDown />
          </div>
        </div>
      </div>
    )
  }
}

export default HowItWorksComponent
