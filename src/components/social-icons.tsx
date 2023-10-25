import Link from 'next/link'
import React from 'react'
import { FaceIcon, InstagramIcon, LinkedIn, TwitterIcon, YoutubeIcon } from './icons'
import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs'

interface Props {
  footer?: boolean
}

const SocialIcons = ({ footer = false }: Props) => {
  if (!footer) {
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
  } else {
    return (
      <div className='w-full flex flex-row flex-wrap text-xl'>
        <Link href='https://facebook.com' className='mr-1 md:mr-5 py-2'>
          <div className='bg-[#FD7B61] rounded-full p-3 md:p-4 border-2 text-white'>
            <FaFacebookF />
          </div>
        </Link>
        <Link href='https://twitter.com' className='mr-1 md:mr-5 py-2'>
          <div className='bg-[#FD7B61] rounded-full p-3 md:p-4 border-2 text-white'>
            <BsTwitter />
          </div>
        </Link>
        <Link href='https://youtube.com' className='mr-1 md:mr-5 py-2'>
          <div className='bg-[#FD7B61] rounded-full p-3 md:p-4 border-2 text-white'>
            <BsYoutube />
          </div>
        </Link>
        <Link href='https://linkedin.com' className='mr-1 md:mr-5 py-2'>
          <div className='bg-[#FD7B61] rounded-full p-3 md:p-4 border-2 text-white'>
            <BsLinkedin />
          </div>
        </Link>
        <Link href='https://instagram.com' className='mr-1 md:mr-5 py-2'>
          <div className='bg-[#FD7B61] rounded-full p-3 md:p-4 border-2 text-white'>
            <BsInstagram />
          </div>
        </Link>
      </div>
    )
  }
}

export default SocialIcons
