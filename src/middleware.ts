import { NextRequestWithAuth, withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

const baseUrl = process.env.NEXTAUTH_URL!

export default withAuth(
  function middleware (req: NextRequestWithAuth) {
    if (req.nextUrl.pathname.startsWith('/admin') && req.nextauth.token?.role !== 'admin') { return NextResponse.rewrite(new URL('/denied', baseUrl)) }
    if (req.nextUrl.pathname.startsWith('/client') && req.nextauth.token?.role !== 'user' && req.nextauth.token?.role !== 'admin') { return NextResponse.rewrite(new URL('/denied', baseUrl)) }
    if (req.nextUrl.pathname === '/client/dashboard/oportunidades') { return NextResponse.rewrite(new URL('/oportunidades', baseUrl)) }
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        if (token) return !!token
        return false
      }
    },
    pages: {
      signIn: '/auth/login'
    }
  }
)

export const config = { matcher: ['/admin/:path*', '/client/:path*', '/denied'] }
