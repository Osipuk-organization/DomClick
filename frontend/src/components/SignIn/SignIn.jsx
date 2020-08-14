import React, { Fragment, useState, useEffect } from 'react';
import './SignIn.scss';
import {useFormInput} from "utils/useFormInput";
import {useFormCheckbox} from "utils/useFormCheckbox";
import {Link} from "react-router-dom";
import {SliderRow} from "components/SliderRow";
import {FlatItem} from "components/FlatItem";
import {DCCheckbox} from "components/DCCheckbox";

export const SignIn = (props) => {
  const {
    history,
    isAuth,
    signinAuth,
  } = props;

  const email = useFormInput('admin');
  const password = useFormInput('admin');
  const rememberMe = useFormCheckbox(true);


  useEffect(function() {
    if (isAuth) {
      history.push('/profile');
      history.replace('/profile');
    }
  }, [null, isAuth]);

  function submit() {
    signinAuth({
      login: email.value,
      password: password.value,
      rememberMe: rememberMe.checked,
    });
  }

  return (
    <Fragment>
      {!isAuth &&
      <div className="sign-in">
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
          <div>
            <DCCheckbox
              label="Запомнить меня"
              size="small"
              bold
              {...rememberMe}
            />
          </div>
        </div>
        <p className="sign-in__to-sign-up">
          <Link to="/registration">Зарегистрироваться</Link>
        </p>
      </div>
      }
    </Fragment>
  );
};