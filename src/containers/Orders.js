import React, { Component } from "react";
import Order from "../components/Order/Order";
import axiosInstance from "../axios-orders";
import withErrorHandler from "../hoc/withErrorHandler";

class Orders extends Component {
  state = {
    orders: [],
    loading: true
  };

  componentDidMount() {
    axiosInstance
      .get("/orders.json")
      .then(res => {
        //console.log(res.data);
        const fetchedOrders = [];
        for (let key in res.data) {
          //console.log(res.data[key]);
          //console.log({ ...res.data[key] });
          fetchedOrders.push({ ...res.data[key], id: key });
        }
        console.log(fetchedOrders);
        this.setState({ loading: false, orders: fetchedOrders });
      })
      .catch(err => {
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <div>
        {this.state.orders.map(order => (
          <Order
            key={order.id}
            ingredients={order.ingredients}
            price={order.price}
          />
        ))}
      </div>
    );
  }
}

export default withErrorHandler(Orders, axiosInstance);
