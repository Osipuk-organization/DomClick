import React from 'react';
import './Ymaps.scss';
import { YMaps, Map, Placemark } from "react-yandex-maps";

export const Ymaps = function(props) {
  const {
    mapData,
    coordinates,
    className,
  } = props;

  return (
    <YMaps>
      <Map defaultState={mapData} className={className}>
        {coordinates.map( (coordinate, idx) => <Placemark geometry={coordinate} key={idx} />)}
      </Map>
    </YMaps>
  );
}