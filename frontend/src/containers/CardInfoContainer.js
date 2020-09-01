import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from "react-router";
import { getFlats } from 'actions/flatsActions';
import { CardInfo } from 'components/CardInfo';

import { getFlatItem } from 'utils/getFlatItem';

function mapStateToProps(state, ownProps) {
  const { id } = ownProps.match.params;
  const flat = state.flats.flats.filter(i => i.id == id || i._id == id)[0];
  const similar = state.flats.flats
    .filter(i => i.flat.rooms == flat.flat.rooms && i.deal.type_deal == flat.deal.type_deal)
    .map(getFlatItem);

  return {
    ...ownProps,
    id,
    flat,
    similar,
  }
}

function mapDispatchToProps(dispatch, props) {
  return {
    ...props,
    getFlats: (data) => dispatch(getFlats(data)),
  }
}

export const CardInfoContainer = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(CardInfo);