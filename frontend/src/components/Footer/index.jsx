import React from 'react'
import './styles.scss'

export const Footer = function () {
    return (
        <footer className="footer">
            <div className="_container _row footer__row">
                <div className="footer__item">
                    <a className="link" href="/">
                        <img
                            className="footer__logo"
                            src="/svg/logo.svg"
                            alt="logo"
                        />
                    </a>
                </div>
                <div className="footer__item _row">
                    <div className="footer__col">
                        <a className="footer__link link" href="#">
                            Контакты
                        </a>
                        <a className="footer__link link" href="#">
                            Партнерам
                        </a>
                        <a className="footer__link link" href="#">
                            Застройщики
                        </a>
                    </div>
                    <div className="footer__col">
                        <a className="footer__link link" href="#">
                            Обратная&nbsp;связь
                        </a>
                        <a className="footer__link link" href="#">
                            Услуги
                        </a>
                        <a className="footer__link link" href="#">
                            Ипотека
                        </a>
                    </div>
                </div>
                <div className="footer__item">
                    <div className="footer__text">
                        ПАО Е-про. Генеральная лицензия Банка России
                        &#8470;&nbsp;1481 от&nbsp;11.08.2015&nbsp;г. ООО
                        &laquo;ЦНС&raquo;, Россия, Москва, 121170, Кутузовский
                        проспект&nbsp;д.&nbsp;32&nbsp;к.&nbsp;1, ОГРН
                        1157746652150, ИНН 7736249247
                    </div>
                </div>
                <div className="footer__item">
                    <a className="link" href="#" target="_blank">
                        <img
                            className="footer__app"
                            src="svg/app.svg"
                            alt="App Store"
                        />
                    </a>
                </div>
            </div>
        </footer>
    )
}
