import React, { Fragment } from "react";
import { connect } from "react-redux";
import { useFormInput } from 'utils/useFormInput';
import { useFormCheckbox } from 'utils/useFormCheckbox';
import { useFormCheckboxGroup } from 'utils/useFormCheckboxGroup';
import { useFormRadioGroup } from 'utils/useFormRadioGroup';
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

    const checkboxGroup = [
      'securityV',
      'parkingV',
      'yardV',
      'infrastructureV',
      'windowsV',
    ];

    const radioGroup = [
      'deal1',
      'deal2',
      'deal3',
      'deal4',
      'deal5V',
      'deal6V',
      'terms2',
      'terms3',
      'bathroomV',
      'balconyV',
      'repairV',
      'houseV',
      'elevatorV',
      'flatV',
    ];

    const inputs = {};

    try {
      Object.keys(form)
        .filter(i => typeof form[i] === "string" && !radioGroup.includes(i))
        .forEach(i => { inputs[i] = useFormInput(form[i], i, updateForm) });

      Object.keys(form)
        .filter(i => typeof form[i] === "boolean")
        .forEach(i => { inputs[i] = useFormCheckbox(form[i], i, updateForm) });

      checkboxGroup.forEach(i => inputs[i] = useFormCheckboxGroup(form[i], i, updateForm));

      radioGroup.forEach(i => inputs[i] = useFormRadioGroup(form[i], i, updateForm));

    } catch (err) {
      console.log(err);
    }

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