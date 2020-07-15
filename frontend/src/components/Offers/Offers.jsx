import React, {useState, useEffect} from 'react';
import { HashLink } from 'react-router-hash-link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

export const Offers = function(props) {
  let [offers, setOffers] = useState([]);

  const scroll = el => el.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const params = {
    slidesPerView: 1,
    spaceBetween: 30,
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

  useEffect(function() {
    fetch('/api/flats')
      .then(res => res.json())
      .then(json => {setOffers(json)});
  }, [null]);

  return (
    <section className="offers _container _row _p-t">
      <h3 className="_col-12 offers__caption">Горячие предложения</h3>
      <div className="offers__sub-caption _col-12">1-комнатные</div>

      <Swiper
        className="_col-12 swiper-container swiper4"
        {...params}
      >
        {offers && offers.map( (i, idx) => {
          return (<SwiperSlide
            className="swiper-slide"
            key={idx}
          >
            <HashLink
              to={`/card/${i.id||i._id}`}
              scroll={scroll}
              className="link offers__item _row"
            >
              <div className="offers__top-img" style={{backgroundImage: `url(${i.images[0]})`}}></div>
              <div className="offers__line-img-box">
                {i.images.filter((i, idx) => idx > 0 || idx < 4 ).map((i, idx) => {
                  return (
                    <div className="offers__line-img" style={{backgroundImage: `url(${i})`}} key={idx}></div>
                  )
                })
                }
                {i.images.length > 4 && <div className="offers__line-other">{i.images.length - 4}</div>}
              </div>
              <div className="offers__bottom _row">
                <div className="offers__cost">{`${i.cost} ${i.currency}`}</div>
                <div className="offers__owner">{i.owner}</div>
                <div className="offers__cost-m">{i.cost_m2} {i.currency}</div>
                <div className="offers__info-box">
                  <div className="offers__info-item _type">{i.rooms}-комн. квартира</div>
                  <div className="offers__info-item _address">{i.city}, {i.address}</div>
                </div>
                <div className="offers__botton-box">
                  <div className="button">Посмотреть</div>
                  <div className="link top-menu__icon _heart _offers" onClick={() => console.log(i.id)}></div>
                </div>
              </div>
            </HashLink>
          </SwiperSlide>)
        })}
        <div className="swiper__btn-prev"></div>
        <div className="swiper__btn-next"></div>
      </Swiper>


      <div className="offers__sub-caption _col-12">2-комнатные</div>
      <Swiper
        className="_col-12 swiper-container swiper4"
        {...params}
      >
        {offers && offers.map( (i, idx) => {
          return (<SwiperSlide
            className="swiper-slide"
            key={idx}
          >
            <HashLink
              to={`/card/${i.id||i._id}`}
              scroll={scroll}
              className="link offers__item _row"
            >
              <div className="offers__top-img" style={{backgroundImage: `url(${i.images[0]})`}}></div>
              <div className="offers__line-img-box">
                {i.images.filter((i, idx) => idx > 0 || idx < 4 ).map((i, idx) => {
                  return (
                    <div className="offers__line-img" style={{backgroundImage: `url(${i})`}} key={idx}></div>
                  )
                })
                }
                {i.images.length > 4 && <div className="offers__line-other">{i.images.length - 4}</div>}
              </div>
              <div className="offers__bottom _row">
                <div className="offers__cost">{`${i.cost} ${i.currency}`}</div>
                <div className="offers__owner">{i.owner}</div>
                <div className="offers__cost-m">{i.cost_m2} {i.currency}</div>
                <div className="offers__info-box">
                  <div className="offers__info-item _type">{i.rooms}-комн. квартира</div>
                  <div className="offers__info-item _address">{i.city}, {i.address}</div>
                </div>
                <div className="offers__botton-box">
                  <div className="button">Посмотреть</div>
                  <div className="link top-menu__icon _heart _offers" onClick={() => console.log(i.id)}></div>
                </div>
              </div>
            </HashLink>
          </SwiperSlide>)
        })}
        <div className="swiper__btn-prev"></div>
        <div className="swiper__btn-next"></div>
      </Swiper>
    </section>
  );
}