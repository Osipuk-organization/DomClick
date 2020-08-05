import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from "react-router";

import { TopMenu } from 'components/TopMenu';
import {
  authSignin,
  authRegister,
  authLogout,
} from 'actions/authActions';

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
    isAuth: state.auth.isAuth,
  }
}

function mapDispatchToProps(dispatch, props) {
  return {
    ...props,
    authSignin: (data) => dispatch(authSignin(data)),
    authRegister: (data) => dispatch(authRegister(data)),
    authLogout: (data) => dispatch(authLogout(data)),
  }
}

export const TopMenuContainer = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(TopMenu);