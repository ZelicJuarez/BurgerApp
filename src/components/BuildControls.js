import React from "react";
import BuildControl from "./BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const BuildControls = props => (
  <div className="buildControls">
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        ingLabel={ctrl.label}
        added={() => props.addIngredient(ctrl.type)}
      />
    ))}
  </div>
);

export default BuildControls;
