import React from "react";
import Logo from "../Logo/Logo";
import NavigationItems from "./NavigationItems";

const SideDrawer = props => {
  return (
    <div className="sideDrawer">
      <Logo />
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default SideDrawer;
