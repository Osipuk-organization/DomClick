import React from 'react';
import { connect } from 'react-redux';
import { compose } from "redux";
import { FormCard } from 'components/FormCard';
import { withFlatsForm } from 'hoc/withFlatsForm';
import { createFlats } from "actions/flatsActions";

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
  }
}

function mapDispatchToProps(dispatch, props) {
  const {
    formTemplate,
    ...otherProps
  } = props;


  return {
    ...otherProps,
    sendForm: () => dispatch(createFlats(formTemplate)),
  }
}

export const FormAddCardContainer = compose(
  withFlatsForm,
  connect(mapStateToProps, mapDispatchToProps),
)(FormCard);