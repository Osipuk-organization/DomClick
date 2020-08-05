import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'

SwiperCore.use([Navigation])

export const SliderRow = function (props) {
    const { id, children } = props

    const params = {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            prevEl: `#${id}-prev`,
            nextEl: `#${id}-next`,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1440: {
                slidesPerView: 4,
            },
        },
    }

    return (
        <Swiper className="_col-12 swiper-container swiper4" {...params}>
            {children.map((i, idx) => (
                <SwiperSlide className="swiper-slide" key={idx}>
                    {i}
                </SwiperSlide>
            ))}
            <div className="swiper__btn-prev" id={`${id}-prev`}></div>
            <div className="swiper__btn-next" id={`${id}-next`}></div>
        </Swiper>
    )
}
