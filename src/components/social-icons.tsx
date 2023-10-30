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
        <Link aria-label='Link to social media facebook.com' href='https://facebook.com' className='mr-5 py-2'>
          <FaceIcon />
        </Link>
        <Link aria-label='Link to social media twitter.com' href='https://twitter.com' className='mr-5 py-2'>
          <TwitterIcon />
        </Link>
        <Link aria-label='Link to social media youtube.com' href='https://youtube.com' className='mr-5 py-2'>
          <YoutubeIcon />
        </Link>
        <Link aria-label='Link to social media linkedin.com' href='https://linkedin.com' className='mr-5 py-2'>
          <LinkedIn />
        </Link>
        <Link aria-label='Link to social media instagram.com' href='https://instagram.com' className='mr-5 py-2'>
          <InstagramIcon />
        </Link>
      </div>
    )
  } else {
    return (
      <div className='w-full flex flex-row flex-wrap text-xl'>
        <Link aria-label='Link to social media facebook.com' href='https://facebook.com' className='mr-1 md:mr-5 py-2'>
          <div className='bg-inherit rounded-full p-3 md:p-4 border-2 text-white'>
            <FaFacebookF />
          </div>
        </Link>
        <Link aria-label='Link to social media twitter.com' href='https://twitter.com' className='mr-1 md:mr-5 py-2'>
          <div className='bg-inherit rounded-full p-3 md:p-4 border-2 text-white'>
            <BsTwitter />
          </div>
        </Link>
        <Link aria-label='Link to social media youtube.com' href='https://youtube.com' className='mr-1 md:mr-5 py-2'>
          <div className='bg-inherit rounded-full p-3 md:p-4 border-2 text-white'>
            <BsYoutube />
          </div>
        </Link>
        <Link aria-label='Link to social media linkedin.com' href='https://linkedin.com' className='mr-1 md:mr-5 py-2'>
          <div className='bg-inherit rounded-full p-3 md:p-4 border-2 text-white'>
            <BsLinkedin />
          </div>
        </Link>
        <Link aria-label='Link to social media instagram.com' href='https://instagram.com' className='mr-1 md:mr-5 py-2'>
          <div className='bg-inherit rounded-full p-3 md:p-4 border-2 text-white'>
            <BsInstagram />
          </div>
        </Link>
      </div>
    )
  }
}

export default SocialIcons
