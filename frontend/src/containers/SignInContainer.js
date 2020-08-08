import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from "react-router";

import { SignIn } from 'components/SignIn';
import {
  signinAuth,
  registerAuth,
  logoutAuth,
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
    signinAuth: (data) => dispatch(signinAuth(data)),
    registerAuth: (data) => dispatch(registerAuth(data)),
    logoutAuth: (data) => dispatch(logoutAuth(data)),
  }
}

export const SignInContainer = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(SignIn);