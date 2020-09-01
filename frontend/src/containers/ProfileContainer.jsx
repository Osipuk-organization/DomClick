import React from 'react';
import { connect } from 'react-redux';
import { compose } from "redux";
import { Profile } from 'components/Profile';
import {
  deleteFlats,
  getFlats,
} from 'actions/flatsActions';
import { logoutAuth } from 'actions/authActions';
import {withRouter} from "react-router";

import { getFlatItem } from 'utils/getFlatItem';

function mapStateToProps(state, ownProps) {
  console.log(state.flats.flats)
  return {
    ...ownProps,
    isAuth: state.auth.isAuth,
    flats: state.flats.flats.map(getFlatItem),
  }
}

function mapDispatchToProps(dispatch, props) {
  return {
    ...props,
    logoutAuth: (data) => dispatch(logoutAuth(data)),
    getFlats: (data) => dispatch(getFlats(data)),
    deleteFlats: (data) => dispatch(deleteFlats(data)),
  }
}

export const ProfileContainer = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Profile);