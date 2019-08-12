import React, { Fragment } from "react";
import Toolbar from "../Navigation/Toolbar";
import SideDrawer from "../Navigation/SideDrawer";

const Layout = props => (
  <Fragment>
    <Toolbar />
    <SideDrawer />
    <main className="content">{props.children}</main>
  </Fragment>
);

export default Layout;
