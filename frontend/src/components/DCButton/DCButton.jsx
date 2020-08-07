import React from "react";

import './DCButton.scss';

export const DCButton = (props) => {
  const {
    id,
    rounded,
    active,
    label,
    ...otherProps
  } = props;

  const classes = {
    "DC-button": true,
    "DC-button-rounded": !!rounded,
    "DC-button-active": !!active,
  };

  return (
    <div
      className={Object.keys(classes)
        .filter((key) => classes[key])
        .join(" ")}
      {...otherProps}
    >
      {label}
    </div>
  );
};
