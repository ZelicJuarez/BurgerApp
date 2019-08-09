import React, { Fragment } from "react";

const OrderSummary = props => {
  const summaryIngredients = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
        {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul style={{ paddingLeft: "3rem" }}>{summaryIngredients}</ul>
      <p>Continue to checkout?</p>
      <button>CANCEL</button>
      <button>CONTINUE</button>
    </Fragment>
  );
};

export default OrderSummary;
