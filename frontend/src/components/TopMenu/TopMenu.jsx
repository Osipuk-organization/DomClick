import React from 'react';
import './TopMenu.scss';

import { Link } from 'react-router-dom';

export const TopMenu = function(props) {
    const {myProps} = props;

    return (
      <div className="top-menu">
          <div className="_container _row top-menu__row">
              <a className="link top-menu__logo-box" href="/">
                  <img className="top-menu__logo" src="/svg/logo.svg" alt="logo" />
              </a>
              <nav className="top-menu__nav">
                  <ul className="top-menu__list">
                      <li className="top-menu__item"><a className="link top-menu__link" href="/#">Услуги</a></li>
                      <li className="top-menu__item"><a className="link top-menu__link" href="/#">Застройщики</a></li>
                      <li className="top-menu__item"><a className="link top-menu__link" href="/#">Ипотека</a></li>
                      <li className="top-menu__item"><a className="link top-menu__link" href="/#">Контакты</a></li>
                  </ul>
              </nav>
              <div className="top-menu__space"></div>
              <div className="top-menu__right">
                  <Link className="link top-menu__link" to="/card/add">
                      Добавить объект
                  </Link>
                  <Link className="link top-menu__link" to="/registration">
                      Личный кабинет
                  </Link>
                  <a className="link top-menu__icon _heart" href="/#"></a>
                  <a className="link top-menu__icon _bell" href="/#"></a>
              </div>
          </div>
      </div>
    );
}