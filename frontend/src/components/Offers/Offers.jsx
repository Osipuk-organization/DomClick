import React, { useEffect, Fragment } from 'react';
import './Offers.scss';
import { FlatItem } from 'components/FlatItem';
import { SliderRow } from 'components/SliderRow';

export const Offers = function(props) {
  const {
    flats1,
    flats2,
    getFlats,
  } = props;

  useEffect(function() {
    /**
     * todo
     * поменять на фильтр получения 1к. и 2к.
     */

    if (flats1.length < 10) {
      getFlats({search:`"flat.rooms":"1"`});
    }

    if (flats2.length < 10) {
      getFlats({search:`"flat.rooms":"2"`});
    }

  }, [null]);

  return (
    <section className="offers _container _row _p-t">
      <h3 className="_col-12 offers__caption">Горячие предложения</h3>
      {flats1.length > 0 &&
      <Fragment>
        <div className="offers__sub-caption _col-12">1-комнатные</div>
        <SliderRow id="offers1">
          {flats1.map((i, idx) => <FlatItem key={idx} flat={i}/>)}
        </SliderRow>
      </Fragment>
      }
      {flats2.length > 0 &&
      <Fragment>
        <div className="offers__sub-caption _col-12">2-комнатные</div>
        <SliderRow id="offers2">
          {flats2.map((i, idx) => <FlatItem key={idx} flat={i}/>)}
        </SliderRow>
      </Fragment>
      }
    </section>
  );
}