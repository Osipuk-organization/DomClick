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

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
    isAuth: state.auth.isAuth,
    flats: state.flats.flats,
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