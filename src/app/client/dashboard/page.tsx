'use client'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

export default function ClientPage () {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated () {
      redirect('/auth/login')
    }
  })

  if (!session?.user) return

  return (
    <div>{JSON.stringify(session)}</div>
  )
}
