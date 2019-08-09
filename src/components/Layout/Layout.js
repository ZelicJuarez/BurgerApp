import React, { Fragment } from "react";
import Toolbar from "../Navigation/Toolbar";

const Layout = props => (
  <Fragment>
    <Toolbar />
    <main className="content">{props.children}</main>
  </Fragment>
);

export default Layout;
