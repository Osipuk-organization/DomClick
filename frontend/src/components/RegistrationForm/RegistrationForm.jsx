import React, {useEffect} from 'react'

import { useFormInput } from "utils/useFormInput";
import { useFormCheckbox } from "utils/useFormCheckbox";
import { Link } from 'react-router-dom';

import './RegistrationForm.scss'

export const RegistrationForm = (props) => {
  const {
    history,
    isAuth,
    registerAuth,
  } = props;

  const name = useFormInput(''); // +
  const surName = useFormInput('');
  const phone = useFormInput('');
  const email = useFormInput('');
  const address = useFormInput('');
  const password = useFormInput(''); // +
  const checkPassword = useFormInput('');
  const role = useFormInput(''); // +
  const policy = useFormCheckbox(true);

  useEffect(function() {
    if (isAuth) {
      history.push('/profile');
      history.replace('/profile');
    }
  }, [null, isAuth]);

  function submitForm() {
    if (password.value === checkPassword.value && policy.checked) {
      registerAuth({
        name: name.value,
        surname: surName.value,
        password: password.value,
        phone: phone.value,
        email: email.value,
        role: role.value,
      });
    }
  }

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
          <input {...name} placeholder="Ваше имя" required />
          <input {...surName} placeholder="Ваша фамилия" />
        </div>
        <div className="number-field">
          <p>Введите почту и номер телефона</p>
          <input {...phone} type="tel" placeholder="Номер телефона" required />
          <input {...email} type="email" placeholder="Ваша Почта" required />
        </div>
        <div className="address-field">
          <p>Введите Ваш горд</p>
          <input {...address} placeholder="Ваш город" />
        </div>
        <div className="password-field">
          <p>Введите пароль</p>
          <input {...password} type="password" placeholder="Пароль" required />
          <input {...checkPassword} placeholder="Повторите пароль" required />
        </div>
        <div className="password-field">
          <p>Введите роль</p>
          <input {...role} placeholder="Роль" required />
        </div>
        <div className="agreement-field">
          <input {...policy} id='terms'/>
          <label htmlFor="terms">Нажимая кнопку «Зарегистрироваться»,
            я даю своё согласие на обработку моих персональных данных и принимаю условия&ensp;
            <Link to="/privacy-policy" target="_blank">Пользовательского соглашения</Link>
          </label>
        </div>
        <button onChange={submitForm} className="registration-btn">Зарегистрироваться</button>
      </form>
      <p className="registration-form__sign-in">
        Уже зарегистрированы?&ensp; <Link to="/sign-in">Войти здесь</Link>
      </p>
    </div>
  )
}