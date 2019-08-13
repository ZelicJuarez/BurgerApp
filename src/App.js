import React, { Component } from "react";
import Layout from "./hoc/Layout";
import BurgerBuilder from "./containers/BurgerBuilder";

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
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
