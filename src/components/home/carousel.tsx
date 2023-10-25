import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './carousel.component.css'
import { CSSSelector, SwiperOptions } from 'swiper/types'

type ArrayComponentProps<T> = {
  data: T[];
  children: (item: T, index: number) => React.ReactNode;
  slidesPerView?: number;
  breakpoints?: {
    [width: number]: SwiperOptions;
    [ratio: string]: SwiperOptions;
};
  spaceBetween?: number;
  nextEl?: HTMLElement | CSSSelector | null | undefined;
  prevEl?: HTMLElement | CSSSelector | null | undefined;
};

const Carousel = <T, >({ data, children, slidesPerView = 1, spaceBetween = 0, breakpoints, nextEl, prevEl }: ArrayComponentProps<T>) => {
  return (
    <Swiper
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      breakpoints={breakpoints}
      speed={400}
      autoplay={{ delay: 2500 }}
      pagination
      navigation
      modules={[Pagination, Navigation]}
      className='mySwiper'
    >
      {
        data.map((item, index) => (
          <SwiperSlide key={index}>
            {children(item, index)}
          </SwiperSlide>

        ))
      }
    </Swiper>
  )
}

export default Carousel
