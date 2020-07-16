import React from 'react';
import {Link} from "react-router-dom";

export const FlatSlide = function(props) {
  const {flat} = props;

  return (
    <Link
      to={{
        pathname: `/card/${flat._id||flat.id}`,
      }}
      className="link offers__item _row"
    >
      <div className="offers__top-img" style={{backgroundImage: `url(${flat.images[0]})`}}></div>
      <div className="offers__line-img-box">
        {flat.images.filter((i, idx) => idx > 0 || idx < 4 ).map((i, idx) => {
          return (
            <div className="offers__line-img" style={{backgroundImage: `url(${i})`}} key={idx}></div>
          )
        })
        }
        {flat.images.length > 4 && <div className="offers__line-other">{flat.images.length - 4}</div>}
      </div>
      <div className="offers__bottom _row">
        <div className="offers__cost">{`${flat.cost} ${flat.currency}`}</div>
        <div className="offers__owner">{flat.owner}</div>
        <div className="offers__cost-m">{flat.cost_m2} {flat.currency}</div>
        <div className="offers__info-box">
          <div className="offers__info-item _type">{flat.rooms}-комн. квартира</div>
          <div className="offers__info-item _address">{flat.city}, {flat.address}</div>
        </div>
        <div className="offers__button-box">
          <div className="button">Посмотреть</div>
        </div>
      </div>
    </Link>
  );
}