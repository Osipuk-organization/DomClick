import React from 'react';
import './Header.scss';

export const Header = function(props) {

  return (
    <header className="header _s">
      <div className="_container _row">
        <h1 className="header__caption _s _col-12">Безопасно, легко и&nbsp;комфортно</h1>
        <div className="header__top-text _col-12">Хочешь купить или продать недвижимость?<br/>Мы&nbsp;поможем!</div>
        <div className="header__bot-text _left _col-12 _col-sm-6">950&nbsp;000 куплено</div>
        <div className="header__bot-text _col-12 _col-sm-6">890&nbsp;000 продано</div>
        <div className="header__button-box _left _col-12 _col-sm-6">
          <div className="switch">
            <label className="switch__label">
              <input className="switch__radio" type="radio" name="who" defaultChecked />
              <span className="switch__button">Купить</span>
            </label>
            <label className="switch__label">
              <input className="switch__radio" type="radio" name="who" />
              <span className="switch__button">Продать</span>
            </label>
          </div>
        </div>
        <div className="header__button-box _col-12 _col-sm-6">
          <button className="button" type="button">Заполнить анкету</button>
        </div>
      </div>
    </header>
  );
}