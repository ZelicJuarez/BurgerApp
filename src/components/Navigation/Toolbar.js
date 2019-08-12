import React from "react";
import Logo from "../Logo/Logo";
import NavigationItems from "./NavigationItems";
import HamburgerMenu from "./HamburgerMenu";

const Toolbar = props => (
  <header className="toolbar">
    <HamburgerMenu openMenu={props.open} />
    <div className="toolbar__logo">
      <Logo />
    </div>
    <nav>
      <NavigationItems />
    </nav>
  </header>
);

export default Toolbar;
