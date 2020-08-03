import React from 'react'
import { Link } from 'react-router-dom';

import './RegistrationForm.scss'

export const RegistrationForm = (props) => {



    return (
        <div className="registration-form">
            <div className="registration-form__steps-block">
                <div className="step-block">
                    <div className="registration-circle reg-active-cirlce">
                        <div className="registration-circle__inside reg-active-cirlce__inside-active">
                            <span>1</span>
                        </div>
                    </div>
                    <span className="step-block__title">Регистрация нового пользователя</span>
                </div>
                <div className="step-block">
                    <div className="registration-circle">
                        <div className="registration-circle__inside">
                            <span>2</span>
                        </div>
                    </div>
                    <span className="step-block__title">Подтверждение аккаунта</span>
                </div>
            </div>
            <h2 className="registration-form__title">Регистрация</h2>
            <div className="registration-form__switch-role">
                <span>Покупатель</span>
                <div>
                    <input type="checkbox" id="switch"/>
                    <label htmlFor="switch"></label>
                </div>
                <span>Продавец</span>
            </div>
            <form className="registration-form__form">
                <p>Введите имя и фамилию</p>
                <div className="name-field">
                    <input
                        type="text"
                        placeholder="Ваше имя"
                    />
                    <input
                        type="text"
                        placeholder="Ваша фамилия"
                    />
                </div>
                <div className="number-field">
                    <p>Введите почту и номер телефона</p>
                    <input
                        type="text"
                        placeholder="Номер телефона"
                    />
                    <input
                        type="email"
                        placeholder="Ваша Почта"
                    />
                </div>
                <div className="address-field">
                    <p>Введите ваш адрес</p>
                    <input
                        type="text"
                        placeholder="Ваш адрес"
                    />
                </div>
                <div className="password-field">
                    <p>Введите пароль</p>
                    <input
                        type="text"
                        placeholder="Пароль"
                    />
                    <input
                        type="text"
                        placeholder="Повторите пароль"
                    />
                </div>
                <div className="agreement-field">
                    <label htmlFor="terms"><input type="checkbox" id='terms'/></label>
                    <p>Нажимая кнопку «Зарегистрироваться»,
                        я даю своё согласие на обработку моих персональных данных и принимаю условия&ensp;
                        <a href="#">Пользовательского соглашения</a>
                    </p>
                </div>
                <button className="registration-btn">Зарегистрироваться</button>
            </form>
            <p className="registration-form__sign-in">
                Уже зарегистрированы?&ensp; <Link to="/card/add">Войти здесь</Link>
            </p>
        </div>
    )
}