import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from "react-router";
import { getFlats } from 'actions/flatsActions';
import { CardInfo } from 'components/CardInfo';

function mapStateToProps(state, ownProps) {
  const { id } = ownProps.match.params;
  return {
    ...ownProps,
    flat: state.flats.flats.filter(i => i.id == id || i._id == id)[0],
    similar: state.flats.flats.filter(i => i.flat.rooms == 1 && i.deal.type_deal == "Продажа"),
  }
}

function mapDispatchToProps(dispatch, props) {
  return {
    ...props,
    getFlats: () => dispatch(getFlats()),
  }
}

export const CardInfoContainer = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(CardInfo);