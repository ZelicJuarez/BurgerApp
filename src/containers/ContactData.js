import React, { Component } from "react";
import Button from "../components/UI/Button";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: ""
    }
  };

  render() {
    return (
      <div className="contactData">
        <h4>Enter your contact data</h4>
        <form>
          <input
            className="contactData__input"
            type="text"
            name="name"
            placeholder="Your Name"
          />
          <input
            className="contactData__input"
            type="email"
            name="email"
            placeholder="Your Mail"
          />
          <input
            className="contactData__input"
            type="text"
            name="street"
            placeholder="Street"
          />
          <input
            className="contactData__input"
            type="text"
            name="postal"
            placeholder="Postal Code"
          />
          <Button btnType="success">ORDER</Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
