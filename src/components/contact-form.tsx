/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/0AwQeZp
 */
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { SelectValue, SelectTrigger, SelectLabel, SelectItem, SelectGroup, SelectContent, Select } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { CardContent, Card } from '@/components/ui/card'

export function ContactForm () {
  return (
    <div className='flex items-center justify-center h-screen'>
      <Card>
        <CardContent>
          <div className='space-y-8'>
            <div className='space-y-2'>
              <h2 className='text-3xl font-semibold'>Contacto</h2>
              <p className='text-zinc-500 dark:text-zinc-400'>
                Rellena este formulario y nuestro equipo se pondrá en contacto contigo lo antes posible.
              </p>
            </div>
            <div className='space-y-4'>
              <div className='grid grid-cols-2 gap-4'>
                <div className='space-y-2'>
                  <Label htmlFor='first-name'>First name</Label>
                  <Input id='first-name' placeholder='Enter your first name' />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='last-name'>Last name</Label>
                  <Input id='last-name' placeholder='Enter your last name' />
                </div>
              </div>
              <div className='space-y-2'>
                <Label htmlFor='email'>Email</Label>
                <Input id='email' placeholder='Enter your email' type='email' />
              </div>
              <div className='space-y-2'>
                <Label>Asunto de tu consulta</Label>
                <Select>
                  <SelectTrigger aria-label='Asunto de tu consulta'>
                    <SelectValue placeholder='Solicitud de información general' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Asunto de tu consulta</SelectLabel>
                      <SelectItem value='Solicitud de información general'>Solicitud de información general</SelectItem>
                      <SelectItem value='Quiero darme de alta'>Quiero darme de alta</SelectItem>
                      <SelectItem value='Quiero invertir'>Quiero invertir</SelectItem>
                      <SelectItem value='Ya soy usuario y tengo una consulta'>Ya soy usuario y tengo una consulta</SelectItem>
                      <SelectItem value='Tengo problemas para acceder a mi área de inversor'>Tengo problemas para acceder a mi área de inversor</SelectItem>
                      <SelectItem value='Soy promotor'>Soy promotor</SelectItem>
                      <SelectItem value='Otro asunto'>Otro asunto</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className='space-y-2'>
                <Label htmlFor='message'>Message</Label>
                <Textarea className='min-h-[100px]' id='message' placeholder='Enter your message' />
              </div>
              <Button className='bg-[#3f51b5] text-white' type='submit'>
                Send message
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
