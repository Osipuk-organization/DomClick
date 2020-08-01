import React, {Fragment, useState, useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Thumbs } from 'swiper';
import Ymap from '../Ymaps/Ymaps';



SwiperCore.use([Navigation, Thumbs]);

export const CardInfo = function(props) {
  const {
    flat,
    getFlats
  } = props;
  const {latitude, longitude, city, state, streetName} = flat.address;
  const costM = Math.floor(flat.cadastral_value.value / flat.flat.square);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(function() {
    if (!flat) {
      getFlats();
    }
  }, [null]);

  let card2 = {
    onSwiper: setThumbsSwiper,
    direction: 'vertical',
    spaceBetween: 6,
    slidesPerView: 2,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
      1200: {
        slidesPerView: 3,
      },
    },
    navigation: {
      prevEl: `#v-card-prev`,
      nextEl: `#v-card-next`,
    },
  };

  let card1 = {
    spaceBetween: 30,
    thumbs: {
      swiper: thumbsSwiper,
    },
  };

  return (
    <section className="card-info _container _row">
      { flat && <Fragment>
      <h3 className="card-info__caption _col-12">{flat.flat.rooms}-комн. квартира, {flat.flat.square} м<sup>2</sup></h3>
      <div className="_col-12 _col-lg-6 card-info__left">
        <Swiper {...card1} className="swiper-container card-info__swiper">
          {flat.house.foto.value.length ?
            flat.house.foto.value.map((i, idx) => {
            return (
            <SwiperSlide
              className="swiper-slide card-info__slide"
              style={{backgroundImage: `url(${i})`}}
              key={idx}
            >
              {i}
            </SwiperSlide>
            )
          })
            :
            <SwiperSlide
              className="swiper-slide card-info__slide"
            >
            </SwiperSlide>
          }
        </Swiper>
        <div className="card-info__spec">
          <div className="card-info__spec-item">
            <div className="card-info__spec-big">{flat.flat.rooms}</div>
            <div className="card-info__spec-text">комн.</div>
          </div>
          <div className="card-info__spec-item">
            <div className="card-info__spec-big">{flat.flat.square}<span className="card-info__spec-text">&nbsp;м<sup>2</sup></span>
            </div>
            <div className="card-info__spec-text">площадь</div>
          </div>
          <div className="card-info__spec-item">
            <div className="card-info__spec-big">{flat.flat.square_kitchen}<span className="card-info__spec-text">&nbsp;м<sup>2</sup></span>
            </div>
            <div className="card-info__spec-text">кухня</div>
          </div>
          <div className="card-info__spec-item">
            <div className="card-info__spec-big">{flat.flat.floor}<span
              className="card-info__spec-text">&nbsp;из&nbsp;{flat.flat.floors_in_the_house}</span></div>
            <div className="card-info__spec-text">этаж</div>
          </div>
        </div>
      </div>
      <div className="_col-12 _col-lg-6 _p-n card-info__right">
        <Swiper {...card2} className="swiper-container card-info__v-swiper">
          {flat.house.foto.value.length ?
            flat.house.foto.value.map((i, idx) => {
              return (
                <SwiperSlide
                  className="swiper-slide card-info__v-slide"
                  style={{backgroundImage: `url(${i})`}}
                  key={idx}
                >
                </SwiperSlide>
              )
            })
            :
            <SwiperSlide
              className="swiper-slide card-info__v-slide"
            >
            </SwiperSlide>
          }
          <div className="card-info__prev" id="card-prev"></div>
          <div className="card-info__next" id="card-next"></div>
        </Swiper>
        <div className="_col-12 card-info__price">{flat.terms_of_sale.cost.value} ₽<span
          className="card-info__sub-price">{0} ₽/м<sup>2</sup></span></div>
        <div className="_col-12 card-info__text _i1">{flat.address.state}, {flat.address.city}, ул. {flat.address.streetName}</div>
        <div className="_col-12 card-info__text _i3">{flat.owner}</div>
        <div className="_col-12 card-info__phone">Показать телефон</div>
        <div className="_col-12 card-info__botton-box"><a className="button" href="/card.html">Оценка эксперта</a><a
          className="link top-menu__icon _heart _offers" href="/#"></a></div>
      </div>
      <div className="_col-12 _col-lg-6 _p-n _p-t">
        <h4 className="_col-12 additional__caption">В&nbsp;цифрах</h4>
        <div className="card-info__numbers-box">
          <div className="card-info__numbers-item">
            <div className="card-info__numbers-text">Жилая</div>
            <div className="card-info__numbers-text">{flat.flat.square_residential} м<sup>2</sup></div>
          </div>
          <div className="card-info__numbers-item">
            <div className="card-info__numbers-text">Высота потолков</div>
            <div className="card-info__numbers-text">{flat.flat.ceiling_height} м</div>
          </div>
          <div className="card-info__numbers-item">
            <div className="card-info__numbers-text">Санузел</div>
            <div className="card-info__numbers-text"></div>
          </div>
          <div className="card-info__numbers-item">
            <div className="card-info__numbers-text">Балкон</div>
            <div className="card-info__numbers-text"></div>
          </div>
          <div className="card-info__numbers-item">
            <div className="card-info__numbers-text">Ремонт</div>
            <div className="card-info__numbers-text"></div>
          </div>
          <div className="card-info__numbers-item">
            <div className="card-info__numbers-text">Вид из окон</div>
            <div className="card-info__numbers-text"></div>
          </div>
        </div>
      </div>
      <div className="_col-12 _col-lg-5 _offset-lg-1">
        <h4 className="additional__caption">Описание</h4>
        <div className="card-info__description-box">
          <div className="card-info__description">

          </div>
        </div>
      </div>
      <Ymap latitude={latitude} longitude={longitude} address={flat.address}/>
      </Fragment>
      }
    </section>
  );
}