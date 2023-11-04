import prisma from '@/lib/prisma'
import { PrismaAdapter } from '@auth/prisma-adapter'
import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'

export const authOptions: NextAuthOptions = {
  callbacks: {
    async jwt ({ token, user }) {
      return { ...token, ...user }
    },
    async session ({ session, token }) {
      session.user = token as any
      return session
    },
    async redirect ({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl + '/client/dashboard'
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/auth/login'
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'email', placeholder: 'test@test.com' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize (credentials) {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
          {
            method: 'POST',
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password
            }),
            headers: { 'Content-Type': 'application/json' }
          }
        )
        const user = await res.json()

        if (user.error) throw new Error(user.error)

        return user
      }
    }),
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
    })
  ],
  session: {
    strategy: 'jwt'
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
