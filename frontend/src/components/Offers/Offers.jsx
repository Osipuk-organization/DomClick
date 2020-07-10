import React, {Fragment, useState, useEffect} from 'react';

export const Offers = function(props) {

  return (
    <section className="offers _container _row">
      <h3 className="_col-12 offers__caption">Горячие предложения</h3>
      <div className="offers__sub-caption _col-12">1-комнатные</div>
      <div className="_col-12 _col-md-6 _col-lg-4 _col-xl-3">
        <div className="offers__item _row">
          <div className="offers__top-img" styled="background-image: url(/img/offers1.jpg)"></div>
          <div className="offers__line-img-box">
            <div className="offers__line-img" styled="background-image: url(/img/offers2.jpg)"></div>
            <div className="offers__line-img" styled="background-image: url(/img/offers3.jpg)"></div>
            <div className="offers__line-img" styled="background-image: url(/img/offers4.jpg)"></div>
            <div className="offers__line-other">3</div>
          </div>
          <div className="offers__bottom _row">
            <div className="offers__cost">5&nbsp;850&nbsp;000&nbsp;₽</div>
            <div className="offers__owner">Собственник</div>
            <div className="offers__cost-m">112&nbsp;500&nbsp;₽</div>
            <div className="offers__info-box">
              <div className="offers__info-item _type">1-комн. квартира</div>
              <div className="offers__info-item _address">Москва, деревня Новофедоровская,
                ул.&nbsp;Десятинная
              </div>
            </div>
            <div className="offers__botton-box">
              <label className="button" htmlFor="">Записаться</label>
              <a className="link top-menu__icon _heart _offers" href="/#"></a>
            </div>
          </div>
        </div>
      </div>
      <div className="_col-12 _col-md-6 _col-lg-4 _col-xl-3">
        <div className="offers__item _row">
          <div className="offers__top-img" styled="background-image: url(/img/offers1.jpg)"></div>
          <div className="offers__line-img-box">
            <div className="offers__line-img" styled="background-image: url(/img/offers2.jpg)"></div>
            <div className="offers__line-img" styled="background-image: url(/img/offers3.jpg)"></div>
            <div className="offers__line-img" styled="background-image: url(/img/offers4.jpg)"></div>
            <div className="offers__line-other">3</div>
          </div>
          <div className="offers__bottom _row">
            <div className="offers__cost">5&nbsp;850&nbsp;000&nbsp;₽</div>
            <div className="offers__owner">Собственник</div>
            <div className="offers__cost-m">112&nbsp;500&nbsp;₽</div>
            <div className="offers__info-box">
              <div className="offers__info-item _type">1-комн. квартира</div>
              <div className="offers__info-item _address">Москва, деревня Новофедоровская,
                ул.&nbsp;Десятинная
              </div>
            </div>
            <div className="offers__botton-box">
              <label className="button" htmlFor="">Записаться</label>
              <a className="link top-menu__icon _heart _offers" href="/#"></a>
            </div>
          </div>
        </div>
      </div>
      <div className="_col-12 _col-md-6 _col-lg-4 _col-xl-3">
        <div className="offers__item _row">
          <div className="offers__top-img" styled="background-image: url(/img/offers1.jpg)"></div>
          <div className="offers__line-img-box">
            <div className="offers__line-img" styled="background-image: url(/img/offers2.jpg)"></div>
            <div className="offers__line-img" styled="background-image: url(/img/offers3.jpg)"></div>
            <div className="offers__line-img" styled="background-image: url(/img/offers4.jpg)"></div>
            <div className="offers__line-other">3</div>
          </div>
          <div className="offers__bottom _row">
            <div className="offers__cost">5&nbsp;850&nbsp;000&nbsp;₽</div>
            <div className="offers__owner">Собственник</div>
            <div className="offers__cost-m">112&nbsp;500&nbsp;₽</div>
            <div className="offers__info-box">
              <div className="offers__info-item _type">1-комн. квартира</div>
              <div className="offers__info-item _address">Москва, деревня Новофедоровская,
                ул.&nbsp;Десятинная
              </div>
            </div>
            <div className="offers__botton-box">
              <label className="button" htmlFor="">Записаться</label>
              <a className="link top-menu__icon _heart _offers" href="/#"></a>
            </div>
          </div>
        </div>
      </div>
      <div className="_col-12 _col-md-6 _col-lg-4 _col-xl-3">
        <div className="offers__item _row">
          <div className="offers__top-img" styled="background-image: url(/img/offers1.jpg)"></div>
          <div className="offers__line-img-box">
            <div className="offers__line-img" styled="background-image: url(/img/offers2.jpg)"></div>
            <div className="offers__line-img" styled="background-image: url(/img/offers3.jpg)"></div>
            <div className="offers__line-img" styled="background-image: url(/img/offers4.jpg)"></div>
            <div className="offers__line-other">3</div>
          </div>
          <div className="offers__bottom _row">
            <div className="offers__cost">5&nbsp;850&nbsp;000&nbsp;₽</div>
            <div className="offers__owner">Собственник</div>
            <div className="offers__cost-m">112&nbsp;500&nbsp;₽</div>
            <div className="offers__info-box">
              <div className="offers__info-item _type">1-комн. квартира</div>
              <div className="offers__info-item _address">Москва, деревня Новофедоровская,
                ул.&nbsp;Десятинная
              </div>
            </div>
            <div className="offers__botton-box">
              <label className="button" htmlFor="">Записаться</label>
              <a className="link top-menu__icon _heart _offers" href="/#"></a>
            </div>
          </div>
        </div>
      </div>
      <div className="offers__sub-caption _col-12">2-комнатные</div>
      <div className="_col-12 _col-md-6 _col-lg-4 _col-xl-3">
        <div className="offers__item _row">
          <div className="offers__top-img" styled="background-image: url(/img/offers1.jpg)"></div>
          <div className="offers__line-img-box">
            <div className="offers__line-img" styled="background-image: url(/img/offers2.jpg)"></div>
            <div className="offers__line-img" styled="background-image: url(/img/offers3.jpg)"></div>
            <div className="offers__line-img" styled="background-image: url(/img/offers4.jpg)"></div>
            <div className="offers__line-other">3</div>
          </div>
          <div className="offers__bottom _row">
            <div className="offers__cost">5&nbsp;850&nbsp;000&nbsp;₽</div>
            <div className="offers__owner">Собственник</div>
            <div className="offers__cost-m">112&nbsp;500&nbsp;₽</div>
            <div className="offers__info-box">
              <div className="offers__info-item _type">1-комн. квартира</div>
              <div className="offers__info-item _address">Москва, деревня Новофедоровская,
                ул.&nbsp;Десятинная
              </div>
            </div>
            <div className="offers__botton-box">
              <label className="button" htmlFor="">Записаться</label>
              <a className="link top-menu__icon _heart _offers" href="/#"></a>
            </div>
          </div>
        </div>
      </div>
      <div className="_col-12 _col-md-6 _col-lg-4 _col-xl-3">
        <div className="offers__item _row">
          <div className="offers__top-img" styled="background-image: url(/img/offers1.jpg)"></div>
          <div className="offers__line-img-box">
            <div className="offers__line-img" styled="background-image: url(/img/offers2.jpg)"></div>
            <div className="offers__line-img" styled="background-image: url(/img/offers3.jpg)"></div>
            <div className="offers__line-img" styled="background-image: url(/img/offers4.jpg)"></div>
            <div className="offers__line-other">3</div>
          </div>
          <div className="offers__bottom _row">
            <div className="offers__cost">5&nbsp;850&nbsp;000&nbsp;₽</div>
            <div className="offers__owner">Собственник</div>
            <div className="offers__cost-m">112&nbsp;500&nbsp;₽</div>
            <div className="offers__info-box">
              <div className="offers__info-item _type">1-комн. квартира</div>
              <div className="offers__info-item _address">Москва, деревня Новофедоровская,
                ул.&nbsp;Десятинная
              </div>
            </div>
            <div className="offers__botton-box">
              <label className="button" htmlFor="">Записаться</label>
              <a className="link top-menu__icon _heart _offers" href="/#"></a>
            </div>
          </div>
        </div>
      </div>
      <div className="_col-12 _col-md-6 _col-lg-4 _col-xl-3">
        <div className="offers__item _row">
          <div className="offers__top-img" styled="background-image: url(/img/offers1.jpg)"></div>
          <div className="offers__line-img-box">
            <div className="offers__line-img" styled="background-image: url(/img/offers2.jpg)"></div>
            <div className="offers__line-img" styled="background-image: url(/img/offers3.jpg)"></div>
            <div className="offers__line-img" styled="background-image: url(/img/offers4.jpg)"></div>
            <div className="offers__line-other">3</div>
          </div>
          <div className="offers__bottom _row">
            <div className="offers__cost">5&nbsp;850&nbsp;000&nbsp;₽</div>
            <div className="offers__owner">Собственник</div>
            <div className="offers__cost-m">112&nbsp;500&nbsp;₽</div>
            <div className="offers__info-box">
              <div className="offers__info-item _type">1-комн. квартира</div>
              <div className="offers__info-item _address">Москва, деревня Новофедоровская,
                ул.&nbsp;Десятинная
              </div>
            </div>
            <div className="offers__botton-box">
              <label className="button" htmlFor="">Записаться</label>
              <a className="link top-menu__icon _heart _offers" href="/#"></a>
            </div>
          </div>
        </div>
      </div>
      <div className="_col-12 _col-md-6 _col-lg-4 _col-xl-3">
        <div className="offers__item _row">
          <div className="offers__top-img" styled="background-image: url(/img/offers1.jpg)"></div>
          <div className="offers__line-img-box">
            <div className="offers__line-img" styled="background-image: url(/img/offers2.jpg)"></div>
            <div className="offers__line-img" styled="background-image: url(/img/offers3.jpg)"></div>
            <div className="offers__line-img" styled="background-image: url(/img/offers4.jpg)"></div>
            <div className="offers__line-other">3</div>
          </div>
          <div className="offers__bottom _row">
            <div className="offers__cost">5&nbsp;850&nbsp;000&nbsp;₽</div>
            <div className="offers__owner">Собственник</div>
            <div className="offers__cost-m">112&nbsp;500&nbsp;₽</div>
            <div className="offers__info-box">
              <div className="offers__info-item _type">1-комн. квартира</div>
              <div className="offers__info-item _address">Москва, деревня Новофедоровская, ул.&nbsp;Десятинная</div>
            </div>
            <div className="offers__botton-box">
              <label className="button" htmlFor="">Записаться</label>
              <a className="link top-menu__icon _heart _offers" href="/#"></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}