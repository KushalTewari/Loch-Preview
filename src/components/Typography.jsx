import React from "react";
import { BellIcon } from "../assets/CommonSVGs";

const Typography = () => {
  return (
    <div
      className={`flex flex--column flex--alignStart`}
    >
      <div className="flex-item">{BellIcon}</div>
      <div className="flex-item">
        <h3 className="typography__heading">
          Get notified when a highly correlated whale makes a move
        </h3>
      </div>
      <div className="flex-item">
        <p className="typography__description">
          Find out when a certain whale moves more than any preset amount
          on-chain or when a dormant whale you care about becomes active.
        </p>
      </div>
    </div>
  );
};

export default Typography;
