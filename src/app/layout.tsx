import './globals.css'
import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import Navbar from '../components/navbar/navbar'
import AuthProvider from '@/context/authprovider'
import { NavProvider } from '@/context/navContext'
import React from 'react'

const inter = Rubik({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700', '800', '900'] })

export const metadata: Metadata = {
  title: 'Griso Corp - Dev',
  description: 'on development'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
      <html lang='en'>
        <body className={inter.className}>
          <NavProvider>
            <Navbar />
          </NavProvider>
          {children}
        </body>
      </html>
    </AuthProvider>
  )
}
