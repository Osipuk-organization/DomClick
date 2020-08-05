import React from 'react';
import './FlatItem.scss';
import {Link} from "react-router-dom";

export const FlatItem = function(props) {
  const {flat} = props;

  return (
    <Link
      to={{
        pathname: `/card/${flat.id||flat._id}`,
      }}
      className="link flat__item _row"
    >
      <div className="flat__top-img" style={{backgroundImage: `url(${flat.house.foto.value[0]})`}}></div>
      <div className="flat__line-img-box">
        {flat.house.foto.value.filter((i, idx) => idx > 0 && idx < 4 ).map((i, idx) => {
          return (
            <div className="flat__line-img" style={{backgroundImage: `url(${i})`}} key={idx}></div>
          )
        })
        }
        {flat.house.foto.value.length > 4 && <div className="flat__line-other">+{flat.house.foto.value - 4}</div>}
      </div>
      <div className="flat__bottom _row">
        <div className="flat__cost">{flat.terms_of_sale.cost.value} ₽</div>
        <div className="flat__owner">Собственник {flat.deal.number_of_owners.value}</div>
        <div className="flat__cost-m">{0} ₽/м<sup>2</sup></div>
        <div className="flat__info-box">
          <div className="flat__info-item _type">{flat.flat.rooms}-комн. квартира {flat.flat.floor}/{flat.flat.floors_in_the_house} этаж</div>
          <div className="flat__info-item _address">{flat.address.city}, ул. {flat.address.streetName}</div>
        </div>
        <div className="flat__button-box">
          <div className="button">Посмотреть</div>
        </div>
      </div>
    </Link>
  );
}