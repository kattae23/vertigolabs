import './globals.css'
import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import Navbar from '../components/navbar/navbar'
import Theme from '../context/themeprovider'
import AuthProvider from '@/context/authprovider'
import { NavProvider } from '@/context/navContext'
import React from 'react'

const inter = Rubik({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700', '800', '900'] })

export const metadata: Metadata = {
  title: 'Vertigo Labs - Dev',
  description: 'on development'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AuthProvider>
          <Theme>
            <NavProvider>
              <Navbar />
            </NavProvider>
            {children}
          </Theme>
        </AuthProvider>
      </body>
    </html>
  )
}
