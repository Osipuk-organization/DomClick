import React, { Fragment, useEffect } from 'react';
import './Profile.scss';
import { Link } from "react-router-dom";
import { SliderRow } from "components/SliderRow";
import { FlatItem } from "components/FlatItem";

export const Profile = function(props) {
  const {
    history,
    isAuth,
    logoutAuth,
    flats,
    getFlats,
    deleteFlats,
  } = props;

  useEffect(function() {
    if (isAuth && flats.length < 10) {
      getFlats();
    }
    if (!isAuth) {
      history.push('/sign-in');
      history.replace('/sign-in');
    }
  }, [null, isAuth]);

  return (
    <Fragment>
      {isAuth &&
      <section className="offers _container _row _p-t">
        <div className="_col-12">
          <button onClick={logoutAuth} className="button">Выйти</button>
        </div>
        <div className="_col-12">
          <h3 className="_col-12 offers__caption">Ваши объекты</h3>
          <Link to="/card/add" className="button">Добавить объект</Link>
        </div>
        {flats.length > 0 &&
        <Fragment>
          <div className="offers__sub-caption _col-12">1-комнатные</div>
          <SliderRow id="offers2">
            {flats.map((i, idx) => <FlatItem
              key={idx}
              flat={i}
              deleteFlats={deleteFlats}
              admin
            />)}
          </SliderRow>
        </Fragment>
        }
      </section>
      }
    </Fragment>
  );
}