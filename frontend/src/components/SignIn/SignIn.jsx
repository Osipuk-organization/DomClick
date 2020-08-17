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
    isAuth,
    signinAuth,
    flats,
    getFlats,
    updateFlats,
    deleteFlats,
  } = props;

  useEffect(function() {
    if (isAuth && flats.length < 10) {
      getFlats();
    }
  }, [null, isAuth]);

  const email = useFormInput('admin');
  const password = useFormInput('admin');
  const rememberMe = useFormCheckbox(true);

  function submit() {
    signinAuth({
      login: email.value,
      password: password.value,
      rememberMe: rememberMe.checked,
    });
  }

  return (
    <Fragment>
      {!isAuth ?
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
        :
        <Fragment>
          <section className="offers _container _row _p-t">
            <h3 className="_col-12 offers__caption">Ваши объекты</h3>
            <Link to="/card/add" className="button">Добавить объект</Link>
            {flats.length > 0 &&
            <Fragment>
              <div className="offers__sub-caption _col-12">1-комнатные</div>
              <SliderRow id="offers2">
                {flats.map((i, idx) => <FlatItem
                  key={idx}
                  flat={i}
                  updateFlats={updateFlats}
                  deleteFlats={deleteFlats}
                  admin
                />)}
              </SliderRow>
            </Fragment>
            }
          </section>
        </Fragment>
      }
    </Fragment>
  );
};