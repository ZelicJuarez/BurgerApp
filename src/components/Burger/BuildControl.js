import React from "react";

const BuildControl = props => (
  <div className="buildControl">
    <div className="buildControl__label">{props.ingLabel}</div>
    <button
      className="buildControl__less"
      onClick={props.removed}
      disabled={props.disabled}
    >
      Less
    </button>
    <button className="buildControl__more" onClick={props.added}>
      More
    </button>
  </div>
);

export default BuildControl;
