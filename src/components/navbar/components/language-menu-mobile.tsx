import { CloseIcon } from '@/components/icons'
import { NavContext } from '@/context/navContext'
import Link from 'next/link'
import React, { useContext } from 'react'

interface LanguageMenuMobileProps {
    value: {
        label: string;
        value: string;
    }[];
}

const LanguageMenuMobile = ({ value }: LanguageMenuMobileProps) => {
  const navContext = useContext(NavContext)

  if (!navContext) {
    return null
  }

  const { setLanguage, openLanguageMenu2, setOpenLanguageMenu2 } = navContext
  return (
    <div className={`absolute top-0 left-0 w-full bg-white pl-2 pr-2 pb-3 text-start py-2 border-[1px] border-gray-300 ${openLanguageMenu2 ? '' : 'hidden'} `}>
      <ul className='relative'>
        {
        value.map(({ label, value }, index) => (
          (
            <li key={`Link for ${label} ` + index + new Date().getTime()} className='pb-2'>
              <Link href={value} className='text-gray-800 font-normal text-sm' onClick={() => setLanguage(label)}>
                {label}
              </Link>
            </li>
          )
        ))
            }
        <button aria-label='Close menu language' className='absolute top-1 right-[4px]' onClick={() => setOpenLanguageMenu2(false)}>
          <CloseIcon />
        </button>
      </ul>
    </div>
  )
}

export default LanguageMenuMobile
