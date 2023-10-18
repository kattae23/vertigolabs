'use client'
import { ThemeProvider } from '@material-tailwind/react'
import React from 'react'

export default function Theme ({ children }: {children: React.ReactNode}) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}
