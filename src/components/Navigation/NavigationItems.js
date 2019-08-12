import React from "react";
import NavigationItem from "./NavigationItem";

const NavigationItems = props => (
  <ul className="navigation__items">
    <NavigationItem link="/" active>
      Burger Builder
    </NavigationItem>
    <NavigationItem link="/">Checkout</NavigationItem>
  </ul>
);

export default NavigationItems;
