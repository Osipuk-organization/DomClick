import React, { useEffect } from 'react';
import './TopMenu.scss';

import { Link } from 'react-router-dom';

export const TopMenu = function(props) {
    const {
        isAuth,
        logoutAuth,
    } = props;

    return (
      <div className="top-menu">
          <div className="_container _row top-menu__row">
              <Link className="link top-menu__logo-box" to="/" title="Главная">
                  <span className="_v-hidden">Главная</span>
                  <img className="top-menu__logo" src="/svg/logo.svg" alt="logo" />
              </Link>
              <input className="top-menu__checkbox" id="menu" type="checkbox" />
              <label className="top-menu__button top-menu__icon" htmlFor="menu">
                  <span className="_v-hidden">Меню</span>
                  <i className="top-menu__button-icon"></i>
              </label>
              <nav className="top-menu__nav">
                  <label className="top-menu__background" htmlFor="menu"></label>
                  <label className="top-menu__button _close" htmlFor="menu">
                      <i className="top-menu__button-icon"></i>
                  </label>
                  <ul className="top-menu__list">
                      <li className="top-menu__item">
                          <Link className="link top-menu__link" to="/">Услуги</Link>
                      </li>
                      <li className="top-menu__item">
                          <Link className="link top-menu__link" to="/">Застройщики</Link>
                      </li>
                      <li className="top-menu__item">
                          <Link className="link top-menu__link" to="/">Ипотека</Link>
                      </li>
                      <li className="top-menu__item">
                          <Link className="link top-menu__link" to="/">Контакты</Link>
                      </li>
                      <li className="top-menu__item _space"></li>
                      <li className="top-menu__item">
                          <label className="link top-menu__link" htmlFor="modal-close">Связаться с экспертом</label>
                      </li>
                  </ul>
              </nav>

              <div className="top-menu__space"></div>
              <div className="top-menu__right">
                  <Link className="link top-menu__icon _heart" to="/" title="Избранные">
                      <span className="_v-hidden">Избранные</span>
                  </Link>
                  <Link className="link top-menu__icon _user" to="/profile" title="Личный кабинет">
                      <span className="_v-hidden">Личный кабинет</span>
                  </Link>
              </div>
          </div>
      </div>
    );
}