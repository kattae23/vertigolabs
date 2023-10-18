import Link from 'next/link'
import React from 'react'
import { FaceIcon, InstagramIcon, LinkedIn, TwitterIcon, YoutubeIcon } from './icons'

const SocialIcons = () => {
  return (
    <div className='w-full flex flex-row flex-wrap'>
      <Link href='https://facebook.com' className='mr-5 py-2'>
        <FaceIcon />
      </Link>
      <Link href='https://twitter.com' className='mr-5 py-2'>
        <TwitterIcon />
      </Link>
      <Link href='https://youtube.com' className='mr-5 py-2'>
        <YoutubeIcon />
      </Link>
      <Link href='https://linkedin.com' className='mr-5 py-2'>
        <LinkedIn />
      </Link>
      <Link href='https://instagram.com' className='mr-5 py-2'>
        <InstagramIcon />
      </Link>
    </div>
  )
}

export default SocialIcons
