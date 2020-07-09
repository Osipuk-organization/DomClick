import React from 'react';

export const Cost = function(props) {

  return (
    <section className="cost _container _row">
      <h3 className="cost__caption _col-12">Минимальная стоимость</h3>
      <div className="cost__item _studio" data-type="студия">989&nbsp;000&nbsp;₽</div>
      <div className="cost__item _bedroom" data-type="1-комн.">1&nbsp;565&nbsp;000&nbsp;₽</div>
      <div className="cost__item _bedroom" data-type="2-комн.">1&nbsp;968&nbsp;000&nbsp;₽</div>
      <div className="cost__item _bedroom" data-type="3-комн.">2&nbsp;485&nbsp;000&nbsp;₽</div>
      <div className="cost__item _house" data-type="дом">5&nbsp;968&nbsp;000&nbsp;₽</div>
    </section>
  );
}