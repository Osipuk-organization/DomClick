import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

export const SliderRow = function(props) {
  const {className, children} = props;

  return (
    <Swiper
      className={className}
      spaceBetween={30}
      slidesPerView={4}
    >
      {children}
      <div className="swiper__btn-prev"></div>
      <div className="swiper__btn-next"></div>
    </Swiper>
  );
}