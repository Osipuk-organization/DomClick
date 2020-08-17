import React, { Fragment } from "react";

import './DCButtonGroup.scss';

export const DCButtonGroup = (props) => {
  const {
    group,
    value,
    name,
    ...otherProps
  } = props;
  return (
    <div className="DC-button-group">
      {group && group.map(({label}, idx) =>
        <Fragment key={idx}>
          <input
            type="radio"
            col={5}
            label={label}
            name={name}
            id={name+idx}
            checked={value == label}
            data-value={label}
            {...otherProps}
          />
          <label htmlFor={name+idx}>{label}</label>
        </Fragment>
      )}
    </div>
  );
};