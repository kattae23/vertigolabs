/* eslint-disable react/jsx-pascal-case */
'use client'

import * as React from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Icons } from '../icons-shad-cn'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

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

export function UserAuthForm ({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [error, setError] = React.useState<string | null>(null)
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  async function onSubmit (values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)

    const res = await signIn('credentials', {
      redirect: false,
      email: values.email,
      password: values.password,
      callbackUrl: `${window.location.origin}`
    })
    if (res?.error) {
      setError(res?.error)
    } else {
      setError(null)
    }
    if (res?.url) router.push(res.url)
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder='email@example.com' type='email' {...field} disabled={isLoading} />
              </FormControl>
              <FormDescription>
                This is your private display email.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder='********' autoComplete='aaaaaaaa' type='password' {...field} disabled={isLoading} />
              </FormControl>
              <FormDescription>
                Your private password.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit' className='w-full' disabled={isLoading}>
          {
            isLoading ? <Icons.spinner className='mr-2 h-4 w-4 animate-spin' /> : 'Sign In with Email'
          }
        </Button>
        <div className='text-red-400 text-md text-center rounded p-2'>
          {error}
        </div>
      </form>
      <div className='relative'>
        <div className='absolute inset-0 flex items-center'>
          <span className='w-full border-t' />
        </div>
        <div className='relative flex justify-center text-xs uppercase'>
          <span className='bg-background px-2 text-muted-foreground'>
            Or continue with
          </span>
        </div>
      </div>
      <Button
        variant='outline' type='button' disabled={isLoading} onClick={() => signIn('google', {
        })}
      >
        {isLoading
          ? (
            <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
            )
          : (
            <Icons.google className='mr-2 h-4 w-4' />
            )}{' '}
        Google
      </Button>
      <Button
        variant='outline' type='button' disabled={isLoading} onClick={() => signIn('github', {
        })}
      >
        {isLoading
          ? (
            <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
            )
          : (
            <Icons.gitHub className='mr-2 h-4 w-4' />
            )}{' '}
        Github
      </Button>
    </Form>
  )
}
