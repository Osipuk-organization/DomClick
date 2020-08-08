import React, { Fragment, useState, useEffect } from 'react';
import './SignIn.scss';
import {useFormInput} from "utils/useFormInput";
import {Link} from "react-router-dom";

export const SignIn = (props) => {
  const {
    isAuth,
    signinAuth,
  } = props;

  const email = useFormInput('admin');
  const password = useFormInput('admin');

  function submit() {
    signinAuth({login: email.value, password: password.value});
  }

  return (
    <div className="sign-in">
      {!isAuth ?
        <Fragment>
          <span className="sign-in__title">Войти</span>
          <div className="sign-in__form">
            <label className="sign-in__form__email">
              Введите почту или номер телефона
              <input
                type="text"
                {...email}
              />
            </label>
            <label className="sign-in__form__password">
              Введите пароль
              <input
                type="text"
                {...password}
              />
            </label>
            <button onClick={submit} className="sign-in__form__button">Войти</button>
          </div>
          <p className="sign-in__to-sign-up">
            <Link to="/registration">Зарегистрироваться</Link>
          </p>
        </Fragment>
        :
        <Link to="/card/add">Добавить объект</Link>
      }
    </div>
  );
};