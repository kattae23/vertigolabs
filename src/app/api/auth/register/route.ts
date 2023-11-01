import prisma from '@/lib/prisma'
import * as bcrypt from 'bcrypt'
import { NextResponse } from 'next/server'
import * as z from 'zod'

const formSchema = z.object({
  name: z.string().min(3, { message: 'name must be more than 3 characters' }),
  lastName: z.string().min(3, { message: 'lastName must be more than 3 characters' }),
  secondLastName: z.string().min(3, { message: 'secondLastName must be more than 3 characters' }),
  nacionality: z.string(),
  phone: z.string().min(3, { message: 'phone must be more than 3 characters' }),
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
  try {
    const body = await request.json()

    const response = formSchema.safeParse(body)

    if (!response.success) {
      const { errors } = response.error

      return new NextResponse(JSON.stringify({ msg: 'Invalid request', errors }), { status: 400 })
    }

    const userExist = await prisma.user.findFirst({
      where: {
        email: response.data.email
      }
    })

    if (userExist) return Response.json({ msg: 'Email ya registrado.' }, { status: 409 })

    const user = await prisma.user.create({
      data: {
        ...response.data,
        password: await bcrypt.hash(response.data.password, 10)
      }
    })

    const { password, ...userWithoutPass } = user

    const result = {
      ...userWithoutPass
    }

    return Response.json(result, { status: 201 })
  } catch (error) {
    console.log(error)
    return Response.json({ msg: 'an error occurred' }, { status: 500 })
  }
}
