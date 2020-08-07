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

          <input
            type="radio"
            value={label}
            key={idx}
          />

        ))}
    </div>
  );
};