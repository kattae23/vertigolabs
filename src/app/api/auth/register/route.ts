import prisma from '@/lib/prisma'
import * as bcrypt from 'bcrypt'
import { NextResponse } from 'next/server'

interface RequestBody {
  firstName: string;
  legalName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
}

export async function POST (request: Request) {
  try {
    console.log('pasando aqui')
    const body: RequestBody = await request.json()

    if (!body.password || body.password.length < 8) return new NextResponse(JSON.stringify({ msg: 'The password must be longer than 8 characters' }), { status: 401 })

    const userExist = await prisma.user.findFirst({
      where: {
        email: body.email
      }
    })

    if (userExist) return Response.json({ msg: 'Email ya registrado.' }, { status: 409 })

    const user = await prisma.user.create({
      data: {
        firstName: body.email,
        legalName: body.legalName,
        lastName: body.lastName,
        email: body.email,
        phone: body.phone,
        password: await bcrypt.hash(body.password, 10)
      }
    })

    const { password, ...result } = user

    return Response.json(result, { status: 201 })
  } catch (error) {
    console.log(error)
    return Response.json({ msg: 'an error occurred' }, { status: 500 })
  }
}