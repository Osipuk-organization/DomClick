import React, { useEffect, useState } from "react";
import DCButton from "../DCButton";

import './style.scss';

const DCButtonGroup = (props) => {
  const { buttons } = props;
  const [activeButtonId, setActiveButtonId] = useState(0);
  const [buttonsGroup, setButtonsGroup] = useState(null);

  useEffect(() => {
    const group = buttons.map((button, key) => ({
      ...button,
      id: key,
    }));
    setButtonsGroup(group);
    console.log("rerender");
  }, [activeButtonId]);

  const onChangeActiveButton = (id) => {
    console.log("id", id);
    setActiveButtonId(id);
  };

  return (
    <div className="DC-button-group">
      {buttonsGroup &&
        buttonsGroup.map(({ label, id }) => (
          <DCButton
            key={id}
            id={id}
            label={label}
            active={id === activeButtonId}
            changeActiveButtonHandler={onChangeActiveButton}
          />
        ))}
    </div>
  );
};

export default DCButtonGroup;
