'use client'
import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import clsx from 'clsx'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

export function UserNav () {
  const { data: session, status } = useSession()
  if (status === 'unauthenticated') {
    return <p>loading</p>
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='relative h-8 w-8 rounded-full'>
          <Avatar className='h-8 w-8'>
            <AvatarImage src={session?.user.image! || '/user-default.jpg'} alt={`${session?.user.name} profile pic`} />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56' align='end' forceMount>
        <DropdownMenuLabel className='font-normal'>
          <div className='flex flex-col space-y-2'>
            <p className='text-sm font-medium leading-none'>{session?.user.name}</p>
            <p className={clsx('text-xs leading-none', session?.user.role === 'admin' ? 'text-gray-800 uppercase' : 'text-muted-foreground')}>
              {session?.user.role}
            </p>
            <p className='text-xs leading-none text-muted-foreground'>
              {session?.user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuGroup>
          <Link href='/client/dashboard/mis-datos/identificacion'>
            <DropdownMenuItem>
              Perfil
            </DropdownMenuItem>
          </Link>
          {
            session?.user.role === 'admin'
              ? (
                <Link href='/admin/dashboard'>
                  <DropdownMenuItem>
                    Dashboard Admin
                  </DropdownMenuItem>
                </Link>
                )
              : null
          }
          <Link href='/client/dashboard'>
            <DropdownMenuItem>
              Dashboard
            </DropdownMenuItem>
          </Link>
          <Link href='/client/dashboard/mis-datos/datos-adicionales'>
            <DropdownMenuItem>
              Configuración
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut()}>
          Cerrar sesión
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
