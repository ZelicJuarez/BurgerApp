import React, { Component } from "react";
import Button from "../components/UI/Button";
import axiosInstance from "../axios-orders";
import Spinner from "../components/UI/Spinner";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: ""
    },
    loading: false
  };

  orderHandler = event => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price, // FOR PRODUCTION APLICATION RECALCULATE IT ON THE SERVER
      customer: {
        name: "Zelic Juarez",
        address: {
          street: "7",
          zipCode: "12876",
          country: "Mexico"
        },
        email: "test@test.com"
      },
      deliveryMethod: "fastest"
    };
    axiosInstance
      .post("/orders.json", order)
      .then(response => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({ loading: false });
      });
  };

  render() {
    let form = (
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
        <Button btnType="success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className="contactData">
        <h4>Enter your contact data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
