import React, { Component, Fragment } from "react";
import Button from "../UI/Button";

class OrderSummary extends Component {
  // This could be a functional component, doesn't have to be a class

  componentWillUpdate() {
    console.log("[OrderSummary] WillUpdate");
  }

  render() {
    const summaryIngredients = Object.keys(this.props.ingredients).map(
      igKey => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
            {this.props.ingredients[igKey]}
          </li>
        );
      }
    );

    return (
      <Fragment>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul style={{ paddingLeft: "3rem" }}>{summaryIngredients}</ul>
        <p>
          <strong>Total price: {this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to checkout?</p>
        <Button btnType="danger" clicked={this.props.purchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType="success" clicked={this.props.purchaseContinued}>
          CONTINUE
        </Button>
      </Fragment>
    );
  }
}

export default OrderSummary;
