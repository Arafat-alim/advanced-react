import React, { Component } from "react";

class NewJsFeatures extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    //! binding the normal function
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  //! methods
  increment() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }

  decrement() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Counter Application</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

export default NewJsFeatures;
