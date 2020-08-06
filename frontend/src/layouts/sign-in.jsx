import React from "react";
import { useInput } from "utils/hooks";
import { Link } from "react-router-dom";

import "../assets/sign-in.scss";

export const SignIn = () => {
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");

  return (
    <div className="sign-in">
      <span className="sign-in__title">Войти</span>
      <form className="sign-in__form">
        <label className="sign-in__form__email">
          Введите почту или номер телефона
          <input
              type="text"
              value={email}
              onChange={setEmail} />
        </label>
        <label className="sign-in__form__password">
          Введите пароль
          <input
              type="text"
              value={password}
              onChange={setPassword} />
        </label>
        <button className="sign-in__form__button">Войти</button>
      </form>
      <p className="sign-in__to-sign-up">
        <Link to="/registration">Зарегистрироваться</Link>
      </p>
    </div>
  );
};
