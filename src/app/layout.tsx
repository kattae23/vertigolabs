import './globals.css'
import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import Navbar from '../components/navbar/navbar'
import AuthProvider from '@/context/authprovider'
import { NavProvider } from '@/context/navContext'
import React from 'react'
import Footer from '@/components/footer/footer'

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

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
      <html lang='en'>
        <body className={inter.className + ' mt-[96px]'}>
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
