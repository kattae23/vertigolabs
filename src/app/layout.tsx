import './globals.css'
import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import Navbar from '../components/navbar/navbar'
import AuthProvider from '@/context/authprovider'
import { NavProvider } from '@/context/navContext'
import React from 'react'
import Footer from '@/components/footer/footer'
import Script from 'next/script'
import { headers } from 'next/headers'

const inter = Rubik({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700', '800', '900'] })

export const metadata: Metadata = {
  title: 'Griso Corp - Dev',
  description: 'on development',
  manifest: '/manifest.webmanifest',
  icons: {
    icon: [
      '/favicon.ico'
    ],
    apple: [
      '/icon-512x512.png'
    ],
    shortcut: [
      'icon-192x192.png'
    ]
  }
}
const GTM_ID = 'GTM-PQVVHPV6'
const GA_MEASUREMENT_ID = 'G-RW3V8LZK25'

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  const nonce = headers().get('x-nonce')
  return (
    <AuthProvider>
      <html lang='en'>
        <head>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} nonce={nonce!} />
          <Script id='google-analytics' nonce={nonce!}>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
    
              gtag('config', '${GA_MEASUREMENT_ID}');
            `}
          </Script>
          <Script id='google-tag-manager' strategy='afterInteractive' nonce={nonce!}>
            {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
            `}
          </Script>
        </head>
        <body className={inter.className}>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display: none; visibility: hidden;"></iframe>`
            }}
          />
          <NavProvider>
            <Navbar />
          </NavProvider>
          {children}
          <Footer />
        </body>
      </html>
    </AuthProvider>
  )
}
