import React from "react";
import Logo from "../Logo/Logo";
import NavigationItems from "./NavigationItems";

const SideDrawer = props => {
  return (
    <div className="sideDrawer">
      <div className="sideDrawer__logo">
        <Logo />
      </div>
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default SideDrawer;
