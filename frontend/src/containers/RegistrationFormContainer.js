import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from "react-router";

import { RegistrationForm } from "components/RegistrationForm";

import {
  registerAuth,
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
    registerAuth: (data) => dispatch(registerAuth(data)),
  }
}

export const RegistrationFormContainer = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(RegistrationForm);