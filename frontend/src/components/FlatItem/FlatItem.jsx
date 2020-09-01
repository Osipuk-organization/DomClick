import React, {Fragment} from 'react';
import './FlatItem.scss';
import {Link} from "react-router-dom";

export const FlatItem = function(props) {
  const {
    id,
    photoFirst,
    photo,
    photoMore,
    cost,
    costM,
    rooms,
    floor,
    floorTotal,
    owners,
    city,
    streetName,

    admin,
    deleteFlats,
  } = props;

  return (
    <Fragment>
      { id && <div
        className="link flat__item _row"
      >
        <div className="flat__top-img" style={{backgroundImage: `url(${photoFirst})`}}></div>
        <div className="flat__line-img-box">
          {photo.map((i, idx) => {
            return (
              <div className="flat__line-img" style={{backgroundImage: `url(${i})`}} key={idx}></div>
            )
          })
          }
          {photoMore > 0 && <div className="flat__line-other">+{photoMore}</div>}
        </div>
        <div className="flat__bottom _row">
          <div className="flat__cost">{cost} ₽</div>
          <div className="flat__cost-m">{costM} ₽/м<sup>2</sup></div>
          <div className="flat__info-box">
            <div className="flat__info-item _type">{rooms}-комн.
              квартира {floor}/{floorTotal} этаж
            </div>
            <div className="flat__info-item _owner">Собственников {owners}</div>
            <div className="flat__info-item _address">{city}, ул. {streetName}</div>
          </div>
          <div className="flat__button-box">
            <Link
              to={{
                pathname: `/card/${id}`,
              }}
              className="button">Посмотреть</Link>
          </div>
          {admin &&
          <Fragment>
            <div className="flat__button-box">
              <div className="button" onClick={deleteFlats.bind(null, {id})}>Удалить</div>
            </div>
          </Fragment>
          }
        </div>
      </div>
      }
    </Fragment>
  );
}