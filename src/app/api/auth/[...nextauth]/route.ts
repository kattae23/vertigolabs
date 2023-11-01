import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'
import { NextAuthOptions } from 'next-auth'
import prisma from '@/lib/prisma'
import { PrismaAdapter } from '@auth/prisma-adapter'

export const AuthOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      profile (profile) {
        return ({
          id: profile.sub,
          name: `${profile.given_name}`,
          legalName: `${profile.given_name}`,
          lastName: `${profile.family_name ? profile.family_name.split(' ')[0] : ''}`,
          secondLastName: `${profile.family_name ? profile.family_name.split(' ')[1] : ''}`,
          email: profile.email,
          image: profile.picture,
          role: process.env.NODE_ENV === 'production' ? profile.role ?? 'user' : profile.role ?? 'admin'
        })
      }
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      profile (profile) {
        console.log(profile)

        return ({
          id: profile.sub,
          name: `${profile.given_name}`,
          legalName: `${profile.given_name}`,
          lastName: `${profile.family_name ? profile.family_name.split(' ')[0] : ''}`,
          secondLastName: `${profile.family_name ? profile.family_name.split(' ')[1] : ''}`,
          email: profile.email,
          image: profile.picture,
          role: process.env.NODE_ENV === 'production' ? profile.role ?? 'user' : profile.role ?? 'admin'
        })
      }
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'text', placeholder: 'Email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize (credentials) {
        try {
          console.log(process.env.API_URL + '/auth/login')
          const res = await fetch(`${process.env.API_URL}/auth/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password
            })
          })
          const user = await res.json()
          if (user) {
            return user
          } else {
            return null
          }
        } catch (error) {
          // console.log(error)
          throw new Error('aqui ta el error')
        }
      }
    })
  ],
  session: {
    strategy: 'jwt',
    maxAge: 24 * 60 * 60
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
    maxAge: 60 * 60 * 24 * 30
  },
  adapter: PrismaAdapter(prisma as any),
  callbacks: {
    async jwt ({ token, user }) {
      return { ...token, ...user }
    },
    async session ({ session, token }) {
      session.user = token
      return session
    }
  },
  pages: {
    signIn: '/auth/login'
  }
}

const handler = NextAuth(AuthOptions)

export { handler as GET, handler as POST }
