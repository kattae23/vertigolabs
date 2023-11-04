import React from 'react'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { Metadata } from 'next'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { AiOutlineExclamationCircle } from 'react-icons/ai'
import Link from 'next/link'
import { IcoBeneficioNeto, IcoCapitalInvertido } from '@/components/icons'
import { TbBrandGoogleAnalytics } from 'react-icons/tb'
import { GiMegaphone, GiTakeMyMoney } from 'react-icons/gi'
import { MdOutlineSavings } from 'react-icons/md'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { CheckIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Example dashboard app built using the components.'
}

export default async function DashboardPage () {
  const session = await getServerSession(authOptions)
  if (!session) {
    redirect('/')
  }

  return (
    <main>
      <div className='flex md:justify-between items-start md:items-center flex-col md:flex-row md:space-y-0 space-y-5'>
        <h2 className='uppercase text-2xl text-zinc-700 inline-block text-center md:text-start'>
          Bienvenid@ {session.user.name} {session.user.lastName}
        </h2>
        <Popover>
          <PopoverTrigger className='px-5 py-4 border-red-400 border-solid border text-red-400 underline flex items-center'>Tienes tareas pendientes <strong className='px-2'>(2)</strong> <AiOutlineExclamationCircle /></PopoverTrigger>
          <PopoverContent>Todavia tienes tareas pendientes.</PopoverContent>
        </Popover>
      </div>
      <section className='mt-5'>
        {
          session.user.accountState === 'premium'
            ? (
              <div className='w-full bg-[#D6F5D6] border border-solid border-green-500 px-7 py-7 text-sm text-[#493d3e] flex items-center justify-between shadow-emerald-500 shadow-sm my-16'>
                <div className='flex justify-center items-center space-x-2'>
                  <CheckIcon className='text-white bg-green-500 rounded-full p-1' />
                  <h2>Estado de tu cuenta: <span className='uppercase font-bold'>{session.user.accountState}</span></h2>
                </div>
                <div>
                  <h2 className='font-medium'>Fecha de alta en GrisoCorp: {String(session.user.createdAt)}</h2>
                </div>
              </div>
              )
            : null
        }
        <div className='relative flex flex-col space-y-5 bg-[#13294A] text-white px-3 md:px-8 py-7'>
          {session.user.accountState === 'uncompleted'
            ? (
              <>
                <h1 className='uppercase'>Todavía no tienes cuenta GrisoCorp</h1>
                <div className='block md:w-3/4'>
                  <p className='text-sm'>Necesitas una cuenta GrisoCorp para poder comenzar a invertir en nuestras oportunidades. No te preocupes, el proceso de creación es muy sencillo y solo te llevará unos minutos.</p>
                </div>
                <div className='block'>
                  <Link href={process.env.NEXT_PUBLIC_URL + '/client/dashboard/mis-datos'} className='text-xs font-bold px-4 py-3 border-[#8FCCC9] bg-white border-solid border text-[#8FCCC9] uppercase'>
                    Crear cuenta GrisoCorp
                  </Link>
                </div>
              </>
              )
            : (
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 uppercase space-y-5 text-base [&>div>h4]:text-xl [&>div>h4]:mt-1'>
                <div className='flex flex-col items-center justify-center'>
                  <h2 className='flex items-center'><IcoCapitalInvertido />Capital total invertido</h2>
                  <h4>0,00$</h4>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h2 className='flex items-center'><IcoBeneficioNeto />RENDIMIENTO NETO</h2>
                  <h4>0,00$</h4>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h2 className='flex items-center'><TbBrandGoogleAnalytics className='mr-1 text-2xl' />TIR MEDIA</h2>
                  <h4>0,00$</h4>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h2 className='flex items-center'><GiMegaphone className='mr-1 text-3xl' />INGRESOS POR PROMOS</h2>
                  <h4>0,00$</h4>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h2 className='flex items-center'><GiTakeMyMoney className='mr-1 text-3xl' />SALDO DISPONIBLE</h2>
                  <h4>0,00$</h4>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h2 className='flex items-center'><MdOutlineSavings className='mr-1 text-3xl' />RENTABILIDAD PROVISIONAL</h2>
                  <h4>0,00$</h4>
                </div>
              </div>
              )}
        </div>
      </section>
    </main>
  )
}
