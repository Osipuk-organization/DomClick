import React from 'react';
import './Attachment.scss';

export const Attachment = function(props) {

  return (
    <section className="attachment">
      <div className="_container _row attachment__container">
        <div className="_col-12 _col-lg-6 _p-n">
          <h3 className="attachment__caption">Скачайте наше приложение</h3>
          <div className="attachment__text">Совершайте сделки безопасно, легко<br/>и&nbsp;комфортно на&nbsp;кончиках пальцев</div>
          <div className="attachment__get-box">
            <a className="link attachment__get _gpl" href="#"></a>
            <a className="link attachment__get _app" href="#"></a>
          </div>
        </div>
      </div>
    </section>
  );
}