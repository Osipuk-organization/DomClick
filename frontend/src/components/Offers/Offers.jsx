import React, { useEffect } from 'react';
import './Offers.scss';
import { FlatItem } from 'components/FlatItem';
import { SliderRow } from 'components/SliderRow';

export const Offers = function(props) {
  const {
    flats1,
    flats2,
    getFlats
  } = props;

  useEffect(function() {
    if (flats1.length < 10 || flats2.length < 10) {
      getFlats();
    }
  }, [null]);

  return (
    <section className="offers _container _row _p-t">
      <h3 className="_col-12 offers__caption">Горячие предложения</h3>
      <div className="offers__sub-caption _col-12">1-комнатные</div>
      <SliderRow id="offers1">
        {flats1 && flats1.map( (i, idx) => <FlatItem key={idx} flat={i} />)}
      </SliderRow>
      <div className="offers__sub-caption _col-12">2-комнатные</div>
      <SliderRow id="offers2">
        {flats2 && flats2.map( (i, idx) => <FlatItem key={idx} flat={i} />)}
      </SliderRow>
    </section>
  );
}