import React from 'react'
import { DashboardIcon, IconHowActivate, PersonAdd } from '../icons'
import HowItWorksComponent from './how-it-works-component'
import { FaMoneyBillTransfer, GiPayMoney, GiReceiveMoney } from '.'

const SectionOne = () => {
  return (
    <section className='mt-10 flex text-[#493d3e] flex-col mx-5 md:mx-32'>
      <div className='w-full flex justify-center'>
        <h2 className='text-center text-4xl'>¿Cómo funciona?</h2>
      </div>
      <HowItWorksComponent {...{
        right: true,
        Icon: <PersonAdd className='w-32' />,
        title: 'Date de alta gratis',
        subtitle: 'Sólo tienes que crear su cuenta tu cuenta GrisoCorp introduciendo tus datos básicos.',
        subsubtitle: '¡Es totalmente gratuito y sólo te llevará unos segundos!',
        linkText: 'Regístrate',
        linkHref: '/auth/register'
      }}
      />
      <HowItWorksComponent {...{
        right: false,
        Icon: <IconHowActivate />,
        title: 'Activa tu cuenta GrisoCorp',
        subtitle: 'Envía la documentación que acredita tu identidad y los datos de tu cuenta bancaria.',
        subsubtitle: 'Comprobaremos que todo sea correcto y activaremos tu cuenta GrisoCorp.',
        linkText: 'Activa tu cuenta',
        linkHref: '/dashboard/mis-datos'
      }}
      />
      <HowItWorksComponent {...{
        right: true,
        Icon: <FaMoneyBillTransfer className='text-9xl text-[#333333] mt-4' />,
        title: 'Transfiere fondos a tu cuenta GrisoCorp',
        subtitle: 'Realiza una transferencia bancaria siguiendo las instrucciones que encontrarás en tu área privada del inversor. Es muy sencillo y en 24/48 horas tu dinero estará disponible en tu cuenta GrisoCorp.',
        subsubtitle: 'Sencillo y totalmente gratuito.',
        linkText: 'ingresa fondos',
        linkHref: '/dashboard/mi-cuenta/ingresos'
      }}
      />
      <HowItWorksComponent {...{
        right: false,
        Icon: <GiPayMoney className='text-9xl text-[#333333] mt-4' />,
        title: 'Invierte en proyectos',
        subtitle: 'Selecciona los proyectos que más te gusten. Cada proyecto incluye un dosier completo de información para que puedas analizar a fondo cada uno.',
        subsubtitle: 'Si prefieres invertir con tarjeta de crédito, al seleccionar el proyecto en el que quieres invertir puedes utilizar tu tarjeta de crédito para invertir en el proyecto.',
        linkText: 'Selecciona Proyecto',
        linkHref: '/oportunidades'
      }}
      />
      <HowItWorksComponent {...{
        right: true,
        Icon: <GiReceiveMoney className='text-9xl text-[#333333] mt-4' />,
        title: 'Pagos y devoluciones',
        subtitle: 'Los promotores de los proyectos en los que has invertido te pagaran intereses en períodos según fijado por contrato.',
        subsubtitle: 'Además, llegado el plazo de vencimiento el promotor deberá devolver el capital prestado.',
        linkText: 'Últimos proyectos devueltos',
        linkHref: '/dashboard/mis-inversiones/activas'
      }}
      />
      <HowItWorksComponent {...{
        right: false,
        Icon: <DashboardIcon className='text-9xl text-[#333333] mt-4' />,
        title: 'Gestiona tus inversiones',
        subtitle: 'En tu área privada podrás seguir la evolución de tus inversiones a través de un completo dashboard, recibir las actualizaciones de los',
        subsubtitle: 'proyectos, notificaciones de la plataforma y gestionar tu cuenta GrisoCorp.',
        linkText: 'Accede a tu área privada',
        linkHref: '/dashboard'
      }}
      />
    </section>
  )
}

export default SectionOne
