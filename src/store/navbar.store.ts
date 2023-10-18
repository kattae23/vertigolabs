import { type MenuMobileLinks } from '@/types/store'
import { create } from 'zustand'

interface State {
    menuMobileLinks: MenuMobileLinks[]
  }

export const navbarStore = create<State>((set) => ({
  menuMobileLinks: [
    {
      label: 'Invierte',
      value: '/oportunidades'
    },
    {
      label: 'Finánciate',
      value: '/financiacion-empresa'
    },
    {
      label: 'Nuestra App',
      value: '/app'
    },
    {
      label: 'Estadísticas',
      value: '/estadisticas'
    },
    {
      label: 'Cómo funciona',
      value: '/como-funciona'
    },
    {
      label: 'Quiénes somos',
      value: '/quieres-somos'
    },
    {
      label: 'Contacta con nosotros',
      value: '/contacto'
    }
  ]
}))
