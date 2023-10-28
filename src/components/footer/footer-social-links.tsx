import React from 'react'
import SocialIcons from '../social-icons'

const FooterSocialLinks = () => {
  return (
    <div className='flex flex-col md:flex-row md:items-center mt-2'>
      <h1 className='text-white text-base md:text-sm'>Síguenos:</h1>
      <div className='md:ml-5'>
        <SocialIcons footer />
      </div>
    </div>
  )
}

export default FooterSocialLinks
