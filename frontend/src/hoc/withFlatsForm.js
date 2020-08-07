import React, {Fragment, useEffect, useState} from "react";
import { connect } from "react-redux";
import { useFormInput } from 'utils/useFormInput';
import { useFormCheckbox } from 'utils/useFormCheckbox';
import { formTemplate } from 'utils/formTemplate';
import { updateForm } from 'actions/flatsActions';

export const withFlatsForm = function (Component) {
  const newComponent = (props) => {
    const {
      createFlats,
      form,
      updateForm,
      ...otherProps
    } = props;

    const inputs = {};

    Object.keys(form)
      .filter(i => typeof form[i] === "string")
      .map(i => inputs[i] = useFormInput(form[i], i, updateForm));

    Object.keys(form)
      .filter(i => typeof form[i] === "boolean")
      .map(i => inputs[i] = useFormCheckbox(form[i], i, updateForm));

    return (
      <Fragment>
        <Component
          {...otherProps}
          inputs={inputs}
          formTemplate={formTemplate(form)}
        />
      </Fragment>
    )
  };

  function mapStateToProps(state, ownProps) {
    return {
      ...ownProps,
      form: state.flats.form,
    }
  }

  function mapDispatchToProps(dispatch, props) {
    return {
      ...props,
      updateForm: ({value, name}) => dispatch(updateForm({value, name})),
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(newComponent)
}