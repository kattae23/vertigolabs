/* eslint-disable react/jsx-handler-names */
/* eslint-disable react/jsx-pascal-case */
'use client'
import React from 'react'
import { Input } from '@/components/ui/input'
import { CountryListProps } from '@/components/auth/user-register-form'
import countryList from 'react-select-country-list'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/icons-shad-cn'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { CalendarIcon } from '@radix-ui/react-icons'
import { Calendar } from '@/components/ui/calendar'
import { format, getYear } from 'date-fns'
import { cn } from '@/lib/utils'
import { Session } from 'next-auth'
import { Checkbox } from '@/components/ui/checkbox'
import { Textarea } from '@/components/ui/textarea'

const formSchema = z.object({
  name: z.string().min(3, { message: 'name must be more than 3 characters' }),
  lastName: z.string().min(3, { message: 'lastName must be more than 3 characters' }),
  secondLastName: z.string().min(3, { message: 'secondLastName must be more than 3 characters' }),
  nacionality: z.string().min(2, { message: 'nacionality must be more than 2 characters' }),
  fiscalNumber: z.string().min(2, { message: 'fiscalNumber must be more than 2 characters' }),
  residentialAddress: z.string().min(10, { message: 'Residential Address must be more than 2 characters' }),
  postalCode: z.string().min(2, { message: 'Postal Code must be more than 2 characters' }),
  city: z.string().min(4, { message: 'City must be more than 2 characters' }),
  country: z.string().min(2, { message: 'Country must be more than 2 characters' }),
  usPerson: z.boolean(),
  gender: z.string().min(2, { message: 'Gender must be more than 2 characters' }),
  eeuuTin: z.string(),
  birth: z.date({
    required_error: 'A date of birth is required.'
  }),
  phone: z.string().min(3, { message: 'phone must be more than 3 characters' }),
  email: z.string().min(2, {
    message: 'email must be at least 10 characters.'
  }).email('This is not a valid email.')
})

const FormIdentificacion = ({ session }: {session: Session}) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [usPerson, setUsPerson] = React.useState<boolean>(false)
  const [error, setError] = React.useState<string | null>(null)
  const router = useRouter()
  const options = React.useMemo(() => countryList().getData() as CountryListProps[], [])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: session?.user.name!,
      lastName: session?.user.lastName!,
      secondLastName: session?.user.secondLastName!,
      birth: session?.user.dateOfBirth!,
      gender: session?.user.gender!,
      nacionality: session?.user.nacionality!,
      email: session?.user.email!,
      phone: session?.user.phone!,
      country: '',
      fiscalNumber: '',
      residentialAddress: '',
      eeuuTin: '',
      postalCode: '',
      city: '',
      usPerson
    },
    shouldUnregister: true
  })

  async function onSubmit (values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    console.log({ ...values, usPerson })
    // const data = await fetch(process.env.NEXT_PUBLIC_API_URL! + '/auth/register', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     name: values.name,
    //     lastName: values.lastName,
    //     secondLastName: values.secondLastName,
    //     nacionality: values.nacionality,
    //     phone: values.phone,
    //     email: values.email,
    //     password: values.password
    //   }),
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Accept: 'application/json'
    //   }
    // })
    // if (data.status !== 201) {
    //   const { msg } = await data.json()
    //   setError(msg)
    //   setIsLoading(false)
    //   return
    // }
    setIsLoading(false)
    if (!values) { router.push('/') }
    if (!values) setError('pipe')
  }

  return (
    <Form {...form}>

      <h2 className='uppercase text-lg text-[#493d3e]'>Datos de identificación</h2>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <div className='mt-8 grid gap-7 lg:grid-cols-3'>
          <FormField
            control={form.control}
            name='name'
            rules={{ required: false }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre*</FormLabel>
                <FormControl>
                  <Input placeholder='Nombre' defaultValue={session.user?.name!} onChange={field.onChange} type='text' disabled={isLoading} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='lastName'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Primer apellido*</FormLabel>
                <FormControl>
                  <Input placeholder='Last name' type='text' defaultValue={session.user?.lastName!} onChange={field.onChange} disabled={isLoading} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='secondLastName'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Segundo apellido*</FormLabel>
                <FormControl>
                  <Input placeholder='Second last name' type='text' defaultValue={session.user?.secondLastName!} onChange={field.onChange} disabled={isLoading} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Dirección de email*</FormLabel>
                <FormControl>
                  <Input placeholder='Email' type='text' defaultValue={session.user?.email!} onChange={field.onChange} disabled={isLoading} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='phone'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Teléfono (elige país)*</FormLabel>
                <FormControl>
                  <Input placeholder='+00 000...' type='text' defaultValue={session.user?.phone!} onChange={field.onChange} disabled={isLoading} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='birth'
            render={({ field }) => (
              <FormItem className='flex flex-col'>
                <FormLabel>Date of birth</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant='outline'
                        className={cn(
                          'w-[240px] pl-3 text-left font-normal',
                          !field.value && 'text-muted-foreground'
                        )}
                      >
                        {field.value
                          ? (
                              format(field.value, 'PPP')
                            )
                          : (
                            <span>Pick a date</span>
                            )}
                        <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className='w-auto p-0' align='start'>
                    <Calendar
                      mode='single'
                      selected={field.value}
                      captionLayout='dropdown-buttons'
                      fromYear={1905}
                      toYear={getYear(new Date())}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date('1900-01-01') || isLoading}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='nacionality'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nacionalidad*</FormLabel>
                <Select
                  disabled={isLoading} onValueChange={(e) => {
                    field.onChange(e)
                    console.log('mover mariquera')
                  }}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Nacionaldad' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent position='item-aligned'>
                    {
                      options.map(({ value, label }, index) => (
                        <SelectItem key={value + ' ' + label + index} value={value}>{label}</SelectItem>
                      ))
                    }
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='gender'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sexo*</FormLabel>
                <Select defaultValue={session.user.gender!} disabled={isLoading} onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Sexo' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent position='item-aligned'>
                    <SelectItem value='male'>Hombre</SelectItem>
                    <SelectItem value='female'>Mujer</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <h2 className='uppercase text-lg text-[#493d3e]'>RESIDENCIA FISCAL</h2>
        <div className='mt-8 grid gap-7 lg:grid-cols-3'>
          <FormField
            control={form.control}
            name='country'
            render={({ field }) => (
              <FormItem>
                <FormLabel>País*</FormLabel>
                <Select
                  disabled={isLoading} onValueChange={(e) => {
                    field.onChange(e)
                    console.log('mover mariquera')
                  }}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='País' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent position='item-aligned'>
                    {
                      options.map(({ value, label }, index) => (
                        <SelectItem key={value + ' ' + label + index} value={value}>{label}</SelectItem>
                      ))
                    }
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='fiscalNumber'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Número Fiscal*</FormLabel>
                <FormControl>
                  <Input placeholder='Número Fiscal' type='text' value={field.value} onChange={field.onChange} disabled={isLoading} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div />
          <FormField
            control={form.control}
            name='usPerson'
            render={({ field }) => (
              <FormItem>
                <FormLabel>¿Eres una persona relacionada con EEUU (US Person)?</FormLabel>
                <FormControl>
                  <div className='items-top flex space-x-2 items-center'>
                    <Checkbox id='terms1' checked={!usPerson} onCheckedChange={() => setUsPerson(false)} />
                    <div className='grid gap-1.5 leading-none'>
                      <label
                        htmlFor='terms1'
                        className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                      >
                        No
                      </label>
                    </div>
                    <Checkbox id='terms2' checked={usPerson} onCheckedChange={() => setUsPerson(true)} />
                    <div className='grid gap-1.5 leading-none'>
                      <label
                        htmlFor='terms2'
                        className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                      >
                        Si. Mi EEUU TIN es
                      </label>
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='eeuuTin'
            render={({ field }) => (
              <FormItem>
                <FormLabel>EEUU TIN*</FormLabel>
                <FormControl>
                  <Input placeholder='EEUU TIN' type='text' value={field.value} onChange={field.onChange} disabled={isLoading || !usPerson} required />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div />
          <FormField
            control={form.control}
            name='residentialAddress'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Dirección*</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder='Dirección'
                    className=''
                    value={field.value} onChange={field.onChange} disabled={isLoading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='postalCode'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Postal Code*</FormLabel>
                <FormControl>
                  <Input placeholder='Postal Code' type='text' value={field.value} onChange={field.onChange} disabled={isLoading} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='city'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Localidad*</FormLabel>
                <FormControl>
                  <Input placeholder='Localidad' type='text' value={field.value} onChange={field.onChange} disabled={isLoading} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className='w-full flex justify-end'>
          <Button type='submit' className='max-w-xs uppercase' disabled={isLoading}>
            {
              isLoading ? <Icons.spinner className='mr-2 h-4 w-4 animate-spin' /> : 'Aceptar y continuar'
            }
          </Button>
        </div>
        <div className='text-red-400 text-md text-center rounded p-2'>
          {error && JSON.stringify(error)}
          {JSON.stringify(form.formState.errors, null, 2)}
        </div>
      </form>
    </Form>
  )
}

export default FormIdentificacion
