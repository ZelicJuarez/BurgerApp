import React from "react";

const Button = props => (
  <button
    className={`button ${props.btnType === "success" ? "success" : "danger"}`}
    onClick={props.clicked}
  >
    {props.children}
  </button>
);

export default Button;
