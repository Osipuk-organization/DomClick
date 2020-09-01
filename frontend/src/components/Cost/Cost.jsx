import React from 'react';
import './Cost.scss';

export const Cost = function(props) {

  return (
    <section className="cost _container _row">
      <h2 className="cost__caption _col-12">Минимальная стоимость</h2>
      <div className="cost__item _studio" data-type="студия">989 000 ₽</div>
      <div className="cost__item _bedroom" data-type="1-комн.">1 565 000 ₽</div>
      <div className="cost__item _bedroom" data-type="2-комн.">1 968 000 ₽</div>
      <div className="cost__item _bedroom" data-type="3-комн.">2 485 000 ₽</div>
      <div className="cost__item _house" data-type="дом">5 968 000 ₽</div>
    </section>
  );
}