import React, { Fragment, useEffect, useState } from "react";
import { DCButton } from "components/DCButton";

import './DCButtonGroup.scss';

export const DCButtonGroup = (props) => {
  const {
    buttons,
  } = props;
  return (
    <div className="DC-button-group">
      {
        buttons.map(({ label }, idx) => (
          <DCButton
            key={idx}
            label={label}
          />
        ))}
    </div>
  );
};