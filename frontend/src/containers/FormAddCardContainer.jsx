import React from 'react';
import { connect } from 'react-redux';
import { compose } from "redux";
import { withRouter } from "react-router";
import { FormCard } from 'components/FormCard';
import { withFlatsForm } from 'hoc/withFlatsForm';
import { createFlats } from "actions/flatsActions";

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
    isAuth: state.auth.isAuth,
  }
}

function mapDispatchToProps(dispatch, props) {
  const {
    formTemplate,
    ...otherProps
  } = props;

  return {
    ...otherProps,
    sendForm: (history) => dispatch(createFlats(formTemplate, history)),
  }
}

export const FormAddCardContainer = compose(
  withRouter,
  withFlatsForm,
  connect(mapStateToProps, mapDispatchToProps),
)(FormCard);