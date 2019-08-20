import React from "react";
import NavigationItem from "./NavigationItem";

const NavigationItems = props => (
  <ul className="navigation__items">
    <NavigationItem link="/" exact>
      Burger Builder
    </NavigationItem>
    <NavigationItem link="/orders">Orders</NavigationItem>
  </ul>
);

export default NavigationItems;
