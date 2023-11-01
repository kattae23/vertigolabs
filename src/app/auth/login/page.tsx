import { UserLoginForm } from '@/components/auth/user-login-form'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Authentication',
  description: 'Authentication forms built using the components.'
}

export default function LoginPage () {
  return (
    <UserLoginForm />
  )
}
