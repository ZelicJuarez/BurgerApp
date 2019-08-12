import React, { Fragment } from "react";
import Logo from "../Logo/Logo";
import NavigationItems from "./NavigationItems";
import Backdrop from "../UI/Backdrop";

const SideDrawer = props => {
  let attachedClasses = ["sideDrawer", "close"];
  if (props.open) {
    attachedClasses = ["sideDrawer", "open"];
  }

  return (
    <Fragment>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <div className="sideDrawer__logo">
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Fragment>
  );
};

export default SideDrawer;
