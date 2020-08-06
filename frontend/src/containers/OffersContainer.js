import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getFlats } from 'actions/flatsActions';
import { Offers } from 'components/Offers';


function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
    flats1: state.flats.flats.filter(i => i.flat.rooms == 1 && i.deal.type_deal == "Продажа"),
    flats2: state.flats.flats.filter(i => i.flat.rooms == 2 && i.deal.type_deal == "Продажа"),
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