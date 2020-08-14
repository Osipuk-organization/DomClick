import React from 'react';
import './Footer.scss';

import { Link } from 'react-router-dom';

import 'svg/logo.svg';
import 'svg/app.svg';

export const Footer = function(props) {

  return (
    <footer className="footer">
      <div className="_container _row footer__row">
        <div className="footer__item">
          <Link className="link" to="/" title="Главная">
            <span className="_v-hidden">Главная</span>
            <img className="footer__logo" src="/svg/logo.svg" alt="logo" />
          </Link>
        </div>
        <div className="footer__item _row">
          <div className="footer__col">
            <Link className="footer__link link" to="/">Контакты</Link>
            <Link className="footer__link link" to="/">Партнерам</Link>
            <Link className="footer__link link" to="/">Застройщики</Link>
          </div>
          <div className="footer__col">
            <Link className="footer__link link" to="/">Обратная&nbsp;связь</Link>
            <Link className="footer__link link" to="/">Услуги</Link>
            <Link className="footer__link link" to="/">Ипотека</Link>
          </div>
        </div>
        <div className="footer__item">
          <div className="footer__text">ПАО Е-про. Генеральная лицензия Банка России &#8470;&nbsp;1481
            от&nbsp;11.08.2015&nbsp;г. ООО &laquo;ЦНС&raquo;, Россия, Москва, 121170, Кутузовский
            проспект&nbsp;д.&nbsp;32&nbsp;к.&nbsp;1, ОГРН 1157746652150, ИНН 7736249247
          </div>
        </div>
        <div className="footer__item">
          <Link className="link" to="/" target="_blank">
            <span className="_v-hidden">Установить приложение из App Store</span>
            <img className="footer__app" src="/svg/app.svg" alt="App Store" />
          </Link>
        </div>
      </div>
    </footer>
  );
}