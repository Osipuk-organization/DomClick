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
              <Link className="link top-menu__logo-box" to="/">
                  <img className="top-menu__logo" src="/svg/logo.svg" alt="logo" />
              </Link>
              <nav className="top-menu__nav">
                  <ul className="top-menu__list">
                      <li className="top-menu__item"><Link className="link top-menu__link" to="/">Услуги</Link></li>
                      <li className="top-menu__item"><Link className="link top-menu__link" to="/">Застройщики</Link></li>
                      <li className="top-menu__item"><Link className="link top-menu__link" to="/">Ипотека</Link></li>
                      <li className="top-menu__item"><Link className="link top-menu__link" to="/">Контакты</Link></li>
                  </ul>
              </nav>
              <div className="top-menu__space"></div>
              <div className="top-menu__right">
                  <Link className="link top-menu__link" to="/profile">
                      Личный кабинет
                  </Link>
                  <Link className="link top-menu__icon _heart" to="/"></Link>
                  <Link className="link top-menu__icon _bell" to="/"></Link>
              </div>
          </div>
      </div>
    );
}