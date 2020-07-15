import React, {Fragment, useState, useEffect} from 'react';

export const CardInfo = function(props) {
  return (
    <section className="card-info _container _row">
      <h3 className="card-info__caption _col-12">3-комн. квартира, 80 м<sup>2</sup></h3>
      <div className="_col-12 _col-lg-6 card-info__left">
        <div className="swiper-container card-info__swiper" id="card">
          <div className="swiper-wrapper">
            <div className="swiper-slide card-info__slide" style={{backgroundImage: 'url(img/card.jpg)'}}></div>
            <div className="swiper-slide card-info__slide" style={{backgroundImage: 'url(img/card.jpg)'}}></div>
            <div className="swiper-slide card-info__slide" style={{backgroundImage: 'url(img/card.jpg)'}}></div>
            <div className="swiper-slide card-info__slide" style={{backgroundImage: 'url(img/card.jpg)'}}></div>
          </div>
        </div>
        <div className="card-info__spec">
          <div className="card-info__spec-item">
            <div className="card-info__spec-big">3</div>
            <div className="card-info__spec-text">комн.</div>
          </div>
          <div className="card-info__spec-item">
            <div className="card-info__spec-big">80<span className="card-info__spec-text">&nbsp;м<sup>2</sup></span>
            </div>
            <div className="card-info__spec-text">площадь</div>
          </div>
          <div className="card-info__spec-item">
            <div className="card-info__spec-big">17<span className="card-info__spec-text">&nbsp;м<sup>2</sup></span>
            </div>
            <div className="card-info__spec-text">кухня</div>
          </div>
          <div className="card-info__spec-item">
            <div className="card-info__spec-big">4<span
              className="card-info__spec-text">&nbsp;из&nbsp;7</span></div>
            <div className="card-info__spec-text">этаж</div>
          </div>
        </div>
      </div>
      <div className="_col-12 _col-lg-6 _p-n card-info__right">
        <div className="swiper-container card-info__v-swiper" id="v-card">
          <div className="swiper-wrapper">
            <div className="swiper-slide card-info__v-slide"
                 style={{backgroundImage: 'url(img/offers1.jpg)'}}></div>
            <div className="swiper-slide card-info__v-slide"
                 style={{backgroundImage: 'url(img/offers2.jpg)'}}></div>
            <div className="swiper-slide card-info__v-slide"
                 style={{backgroundImage: 'url(img/offers3.jpg)'}}></div>
            <div className="swiper-slide card-info__v-slide"
                 style={{backgroundImage: 'url(img/offers4.jpg)'}}></div>
          </div>
          <div className="card-info__prev" id="v-card-prev"></div>
          <div className="card-info__next" id="v-card-next"></div>
        </div>
        <div className="_col-12 card-info__text">Шелепиха</div>
        <div className="_col-12 card-info__price">24 855 000 ₽<span
          className="card-info__sub-price">289 011 ₽/м²</span></div>
        <div className="_col-12 card-info__text _i1">Россия, Москва, Шелепихинская набережная, 34к2</div>
        <div className="_col-12 card-info__text _i2">Шелепиха, 10 мин. пешком</div>
        <div className="_col-12 card-info__text _i3">Ирина М.</div>
        <div className="_col-12 card-info__phone">Показать телефон</div>
        <div className="_col-12 card-info__botton-box"><a className="button" href="/card.html">Оценка эксперта</a><a
          className="link top-menu__icon _heart _offers" href="/#"></a></div>
      </div>
      <div className="_col-12 _col-lg-6 _p-n _p-t">
        <h4 className="_col-12 additional__caption">В&nbsp;цифрах</h4>
        <div className="card-info__numbers-box">
          <div className="card-info__numbers-item">
            <div className="card-info__numbers-text">Жилая</div>
            <div className="card-info__numbers-text">56 м<sup>2</sup></div>
          </div>
          <div className="card-info__numbers-item">
            <div className="card-info__numbers-text">Высота потолков</div>
            <div className="card-info__numbers-text">4.3 м</div>
          </div>
          <div className="card-info__numbers-item">
            <div className="card-info__numbers-text">Санузел</div>
            <div className="card-info__numbers-text">совмещенный</div>
          </div>
          <div className="card-info__numbers-item">
            <div className="card-info__numbers-text">Балкон</div>
            <div className="card-info__numbers-text">1</div>
          </div>
          <div className="card-info__numbers-item">
            <div className="card-info__numbers-text">Ремонт</div>
            <div className="card-info__numbers-text">евро</div>
          </div>
          <div className="card-info__numbers-item">
            <div className="card-info__numbers-text">Вид из окон</div>
            <div className="card-info__numbers-text">во двор</div>
          </div>
        </div>
      </div>
      <div className="_col-12 _col-lg-5 _offset-lg-1">
        <h4 className="additional__caption _p-t">Описание</h4>
        <div className="card-info__description-box">
          <div className="card-info__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
            laoreet condimentum metus velit sit. Interdum elementum volutpat risus sapien aliquam. Laoreet
            vitae magnis at eu, diam, nunc. Amet consectetur varius enim mi lorem vestibulum mauris, sit.
          </div>
          <div className="card-info__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
            laoreet condimentum metus velit sit. Interdum elementum volutpat risus sapien aliquam. Laoreet
            vitae magnis at eu, diam, nunc. Amet consectetur varius enim mi lorem vestibulum mauris, sit.
          </div>
        </div>
      </div>
    </section>
  );
}