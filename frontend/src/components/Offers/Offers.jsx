import React, { useState, useEffect } from 'react';

import { FlatSlide } from 'components/FlatSlide'
import { SliderRow } from 'components/SliderRow'

import './Offers.scss';

export const Offers = function (props) {
  const { flats, getFlats } = props;

  useEffect(() => {
    console.log('useEffect THIS')
    if (!flats.length) {
      getFlats();
    }
  }, [null]);

  return (
    <section className="offers _container _row _p-t">
      <h3 className="_col-12 offers__caption">Горячие предложения</h3>
      <div className="offers__sub-caption _col-12">1-комнатные</div>
      <SliderRow id="offers1">
        {flats && flats.filter(i => i.flat.rooms == 1 && i.deal.type_deal == "Продажа").map((i, idx) => <FlatSlide key={idx} flat={i} />)}
      </SliderRow>
      <div className="offers__sub-caption _col-12">2-комнатные</div>
      <SliderRow id="offers2">
        {flats && flats.filter(i => i.flat.rooms == 2 && i.deal.type_deal == "Продажа").map((i, idx) => <FlatSlide key={idx} flat={i} />)}
      </SliderRow>
    </section>
  );
}