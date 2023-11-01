import prisma from '@/lib/prisma'
import * as bcrypt from 'bcrypt'
import { NextResponse } from 'next/server'
import * as z from 'zod'

const formSchema = z.object({
  email: z.string().min(2, {
    message: 'email must be at least 10 characters.'
  }).email('This is not a valid email.'),
  password: z.string().min(8, {
    message: 'password must be at least 8 characters.'
  }).max(16, {
    message: 'password must be at max 16 characters'
  })
})

export async function POST (request: Request) {
  console.log('llegando al login')
  const body = await request.json()

  const response = formSchema.safeParse(body)

  if (!response.success) {
    const { errors } = response.error

    return new NextResponse(JSON.stringify({ msg: 'Invalid request', error: errors }), { status: 400 })
  }

  const user = await prisma.user.findFirst({
    where: {
      email: body.email
    }
  })

  console.log('login', user)

  if (!user) return Response.json({ msg: 'Email incorrecto', error: 'Email no registrado' }, { status: 401 })

  if (!bcrypt.compareSync(response.data.password, user.password!)) return Response.json({ msg: 'Contraseña incorrecta', error: 'Contraseña incorrecta' }, { status: 401 })

  const { password, ...userWithoutPass } = user

  const result = {
    ...userWithoutPass
  }
  return Response.json(result, { status: 200 })
}
