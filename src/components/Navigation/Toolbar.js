import React from "react";
import Logo from "../Logo/Logo";
import NavigationItems from "./NavigationItems";

const Toolbar = props => (
  <header className="toolbar">
    <div>MENU</div>
    <div className="toolbar__logo">
      <Logo />
    </div>
    <nav>
      <NavigationItems />
    </nav>
  </header>
);

export default Toolbar;
