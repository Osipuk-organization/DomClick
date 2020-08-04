import React from "react";

const DCLabel = (props) => {
  const { children, label, withComment, size } = props;
  const classes = {
    "DC-label": true,
    [`DC-label-size-${size}`]: !!size,
  };

  return (
    <label
      className={Object.keys(classes)
        .filter((key) => classes[key])
        .join(" ")}
    >
      <span>
        {label}
        {withComment && <div className="commentSpan">Комментарии</div>}
      </span>
      {children}
    </label>
  );
};

export default DCLabel;
