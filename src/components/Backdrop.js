import React from "react";

const Backdrop = props =>
  props.show ? <div className="backdrop" onClick={props.clicked} /> : null;

export default Backdrop;
