import React from "react";
import { EyeIcon } from "../assets/CommonSVGs";

const TypographyRight = () => {
  return (
    <div className={`flex flex--column flex--alignEnd`}>
      <div className="flex-item">{EyeIcon}</div>
      <div className="flex-item">
        <h3 className="typographyRight__heading">
          Watch what the whales are doing
        </h3>
      </div>
      <div className="flex-item">
        <p className="typographyRight__description">
          All whales are not equal. Know exactly what the whales impacting YOUR
          portfolio are doing.
        </p>
      </div>
    </div>
  );
};

export default TypographyRight;
