import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getFlats } from 'actions/flatsActions';
import { Offers } from 'components/Offers';

import { getFlatItem } from 'utils/getFlatItem';

function mapStateToProps(state, ownProps) {
  const flats1 = state.flats.flats
    .filter(i => i.flat.rooms == 1 && i.deal.type_deal == "Продажа")
    .map(getFlatItem);
  const flats2 = state.flats.flats
    .filter(i => i.flat.rooms == 2 && i.deal.type_deal == "Продажа")
    .map(getFlatItem);

  return {
    ...ownProps,
    flats1,
    flats2,
  }
}

function mapDispatchToProps(dispatch, props) {
  return {
    ...props,
    getFlats: (data) => dispatch(getFlats(data)),
  }
}

export const OffersContainer = compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Offers);