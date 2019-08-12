import React from "react";

const NavigationItem = props => (
  <li className="navigation__item">
    <a className={props.active ? "active" : null} href={props.link}>
      {props.children}
    </a>
  </li>
);

export default NavigationItem;
