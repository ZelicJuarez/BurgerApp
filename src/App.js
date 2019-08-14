import React, { Component } from "react";
import { Route } from "react-router-dom";
import Layout from "./hoc/Layout";
import BurgerBuilder from "./containers/BurgerBuilder";
import Checkout from "./containers/Checkout";

class App extends Component {
  //TESTING - NOT SHOWING BURGERBUILDER AFTER 5SEC
  /* state = {
    show: true
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: false });
    }, 5000);
  } */

  // <Layout>{this.state.show ? <BurgerBuilder /> : null}</Layout>

  render() {
    return (
      <div className="App">
        <Layout>
          <Route path="/" exact component={BurgerBuilder} />
          <Route path="/checkout" component={Checkout} />
        </Layout>
      </div>
    );
  }
}

export default App;
