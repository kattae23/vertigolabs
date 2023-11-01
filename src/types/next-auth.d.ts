/* eslint-disable no-unused-vars */
import { User, UserRole } from '@prisma/client'
import 'next-auth'
import 'next-auth/jwt'

declare module 'next-auth' {
  interface Sessionn {
    user: User & {
      id: string;
      role: UserRole;
    }
  }
}
