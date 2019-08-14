import React from "react";
import Burger from "../Burger/Burger";
import Button from "../UI/Button";

const CheckoutSummary = props => {
  return (
    <div className="checkoutSummary">
      <h1>We hope you will enjoy it!</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType="danger" clicked>
        CANCEL
      </Button>
      <Button btnType="success" clicked>
        CONTINUE
      </Button>
    </div>
  );
};

export default CheckoutSummary;
