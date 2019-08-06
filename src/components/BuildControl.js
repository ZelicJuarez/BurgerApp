import React from "react";

const BuildControl = props => (
  <div className="buildControl">
    <div className="buildControl__label">{props.ingLabel}</div>
    <button className="buildControl__less buildControl__button">Less</button>
    <button className="buildControl__more buildControl__button">More</button>
  </div>
);

export default BuildControl;
