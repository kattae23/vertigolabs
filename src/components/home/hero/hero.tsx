'use client'
import Carousel from '../carousel'
import Image from 'next/image'
import Button from '../../button'

type CarouselItem = {
  src: string;
  text: string;
  buttonText: string;
  link: string;
};

const imageLinks: CarouselItem[] = [
  {
    src: '/carousel-invest-01.jpg',
    text: 'Invierte en los mejores proyectos de crowdlending con garantía hipotecaria de primer grado',
    buttonText: 'Regístrate',
    link: '/auth/register'
  },
  {
    src: '/carousel-get-funding-02.jpg',
    text: 'Financiación alternativa, flexible y con las mejores condiciones para promotores de proyectos inmobiliarios',
    buttonText: 'Financiate',
    link: '/financiacion-empresas'
  },
  {
    src: '/carousel-projects-03.jpg',
    text: 'Participa en proyectos inmobiliarios cuidadosamente seleccionados por nuestros especialistas',
    buttonText: 'Regístrate',
    link: '/auth/register'
  },
  {
    src: '/carousel-platform-04.jpg',
    text: 'Con la seguridad de usar la plataforma tecnológica de crowdlending líder en Europa',
    buttonText: 'Regístrate',
    link: '/auth/register'
  }
]

export function Hero () {
  return (
    <section className='min-h-fit w-full relative'>
      <Carousel loop data={imageLinks}>
        {({ buttonText, link, src, text }: CarouselItem, index: number) => (
          <div className='relative flex flex-col justify-center items-center'>
            <div
              className=' absolute w-full h-full bg-no-repeat'
              style={{
                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))'
              }}
            />
            <Image
              width={1200}
              height={900}
              priority
              src={process.env.NEXT_PUBLIC_URL + src}
              alt='image 1'
              className='h-[60vh] md:h-[93vh] w-full object-cover'
            />
            <div className='absolute text-white text-base leading-5 md:text-[1.80rem] font-medium px-14 md:px-72 text-center whites'>
              <h2 className='mb-4 md:leading-10'>{text}</h2>
              <Button link={link}>
                {buttonText}
              </Button>
            </div>
          </div>
        )}
      </Carousel>
    </section>
  )
}
