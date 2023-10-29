import Image from 'next/image'
import React from 'react'
import { AppStoreIcon, PlayStoreIcon } from '../icons'
import Link from 'next/link'
import FooterSocialLinks from './footer-social-links'
import FooterLinks from './footer-links'
import Copy from './copy'

interface LinkProps {
label: string;
href: string;
}

interface FooterLinksEntry {
title: string;
links: LinkProps[];
}

const footerLinks: FooterLinksEntry[] = [
  {
    title: 'Participa en GrisoCorp',
    links: [
      { label: 'Invierte', href: '/oportunidades' },
      { label: 'Finánciate', href: '/financiación-empresas' },
      { label: 'Nuestra App', href: '/app' },
      { label: 'Cómo funciona', href: '/como-funciona' },
      { label: 'Opiniones', href: '/opiniones' },
      { label: 'Reclamaciones', href: '/reclamaciones' }
    ]
  },
  {
    title: 'Quiénes somos',
    links: [
      { label: "FAQ's", href: '/faqs' },
      { label: 'Blog', href: '/blog' },
      { label: 'Quiénes somos', href: '/quienes-somos' },
      { label: 'Trabaja con nosotros', href: '/trabaja-con-nosotros' },
      { label: 'GrisoCorp Media Kit', href: '/' },
      { label: 'Contacto', href: '/contacto' }
    ]
  },
  {
    title: 'Info',
    links: [
      { label: 'Información básica para el inversor', href: '/informacion-basica-inversor' },
      { label: 'Información financiera GrisoCorp', href: '/informacion-financiera' },
      { label: 'Información legal', href: '/informacion-legal' },
      { label: 'Política de tarifas', href: '/ruta.pdf' },
      { label: 'Política de privacidad', href: '/politica-de-privacidad' },
      { label: 'Política de cookies', href: '/politica-de-cookies' },
      { label: 'Promotores morosos', href: '/promotores-no-pagan' }
    ]
  }
]

const Footer = () => {
  return (
    <>
      <section className='relative bg-[#8FCCC9] w-full h-auto py-5 px-5 md:px-32 lg:px-44'>
        <div className='flex flex-col lg:flex-row justify-between gap-7 mt-12'>
          <div className='w-full h-full hidden lg:flex flex-col'>
            <Image
              src={process.env.NEXT_PUBLIC_URL + '/grisocorp.png'}
              alt='logo of griso corp, link to the home page'
              width={1000}
              height={300}
              className='w-32 md:w-36'
            />
            <div className='flex flex-col mt-5'>
              <Link aria-label='Link to download our app on AppStore' href={process.env.NEXT_PUBLIC_URL + '/'}>
                <AppStoreIcon className='mb-3' />
              </Link>
              <Link aria-label='Link to download our app on PlayStore' href={process.env.NEXT_PUBLIC_URL + '/'}>
                <PlayStoreIcon />
              </Link>
            </div>
          </div>
          {
          footerLinks.map((links, index) => (
            <div key={index} className='w-full h-full'>
              <h2 className='text-white'>{links.title.toUpperCase()}</h2>
              <div className='w-full h-1 bg-white relative my-5' />
              <ul>
                {Object.values(links.links).map(({ label, href }, index) => (
                  <FooterLinks key={index} {...{ label, href }} />
                ))}
              </ul>
            </div>
          ))
        }
        </div>
        <FooterSocialLinks />
      </section>
      <Copy />
    </>
  )
}

export default Footer
