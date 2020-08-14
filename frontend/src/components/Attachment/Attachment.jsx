import React from 'react';
import './Attachment.scss';

import { Link } from 'react-router-dom';

export const Attachment = function(props) {

  return (
    <section className="attachment">
      <div className="_container _row attachment__container">
        <div className="_col-12 _col-lg-6 _p-n">
          <h2 className="attachment__caption">Скачайте наше приложение</h2>
          <div className="attachment__text">Совершайте сделки безопасно, легко<br/>и&nbsp;комфортно на&nbsp;кончиках пальцев</div>
          <div className="attachment__get-box">
            <Link className="link attachment__get _gpl" to="/" target="_blank">
              <span className="_v-hidden">Установить приложение из Google Play</span>
            </Link>
            <Link className="link attachment__get _app" to="/" target="_blank">
              <span className="_v-hidden">Установить приложение из App Store</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}