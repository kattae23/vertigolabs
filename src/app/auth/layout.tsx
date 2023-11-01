import { getServerSession } from 'next-auth'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { redirect } from 'next/navigation'
import { AuthOptions } from '../api/auth/[...nextauth]/route'

export default async function Layout ({
  children
}: {
    children: React.ReactNode
  }) {
  const session = await getServerSession(AuthOptions)

  if (session?.user) {
    redirect('/')
  }
  return (
    <main className='mt-[96px]'>
      <section className='container relative h-auth py-20 flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0'>
        {/* <Link
          href={process.env.NEXT_PUBLIC_URL + '/auth/register'}
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            'absolute right-4 top-20 md:right-8 md:top-8'
          )}
        >
          Regístrate
        </Link> */}
        <div className='relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex'>
          <div className='absolute inset-0 bg-zinc-900 bg-center bg-no-repeat' style={{ backgroundImage: 'url(/carousel-platform-04.jpg)' }} />
          <div className='relative flex items-center text-lg font-medium'>
            <Image src={process.env.NEXT_PUBLIC_URL + '/grisocorp.png'} alt='logo grisocorp' width={100} height={100} />
          </div>
          <div className='relative z-20 mt-auto'>
            <blockquote className='space-y-2'>
              <p className='text-lg'>
                &ldquo;Esta página me ha ayudado bastante con mis inversiones y han devuelto siempre el total del gasto, un placer trabajar con GrisoCorp!.&rdquo;
              </p>
              <footer className='text-sm'>Marcos Franco.</footer>
            </blockquote>
          </div>
        </div>
        <div className='lg:p-8'>
          <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
            <div className='flex flex-col space-y-2 text-center'>
              <h1 className='text-2xl font-semibold tracking-tight'>
                Crea una cuenta o inicia sesión
              </h1>
              <p className='text-sm text-muted-foreground'>
                Eres bienvenido a GrisoCorp
              </p>
            </div>
            {children}
            <p className='px-8 text-center text-sm text-muted-foreground'>
              By clicking continue, you agree to our{' '}
              <Link
                href={process.env.NEXT_PUBLIC_URL + '/terms'}
                className='underline underline-offset-4 hover:text-primary'
              >
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link
                href={process.env.NEXT_PUBLIC_URL + '/privacy'}
                className='underline underline-offset-4 hover:text-primary'
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
