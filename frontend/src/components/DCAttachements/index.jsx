import React from "react";
import DCButton from "../DCButton";

import "./styles.scss";

const DCAttachement = (props) => {
  const { size } = props;

  const classes = {
    DCAttachement: true,
  };

  return (
    <div className="DCAttachement">
      <input id="file-input" type="file" name="file" multiple />
      <DCButton active label="Выберите файл" />
      <span>или перетащите в область</span>
    </div>
  );
};

export default DCAttachement;
