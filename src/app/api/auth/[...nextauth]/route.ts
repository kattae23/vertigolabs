import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'
import { PrismaAdapter } from '@auth/prisma-adapter'
import prisma from '@/lib/prisma'

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
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
          role: profile.role ? profile.role : 'user'
        })
      }
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'text', placeholder: 'Email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize (credentials, req) {
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
          // Any object returned will be saved in `user` property of the JWT
          return user
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt'
  },
  debug: process.env.NODE_ENV === 'development',
  callbacks: {
    async jwt ({ token, user }) {
      return { ...token, ...user }
    },
    async session ({ session, token }) {
      session.user.role = token.role
      return session
    }
  },
  pages: {
    signIn: '/auth/'
  }
})

export { handler as GET, handler as POST }
