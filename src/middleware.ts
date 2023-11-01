import { withAuth } from 'next-auth/middleware'

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware (req) {
    console.log(req.nextauth.token?.role)
  },
  {
    callbacks: {
      authorized: ({ req, token }) => {
        if (req.nextUrl.pathname === '/admin') {
          return token?.role === 'admin'
        }
        return Boolean(token)
      }
    }
  }
)

export const config = { matcher: ['/admin/:path*', '/client/:path*'] }
