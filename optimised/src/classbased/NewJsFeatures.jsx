import React, { Component } from "react";

class NewJsFeatures extends Component {
  //! defining the state
  state = {
    count: 0,
    greeting: "Hi",
    age: 42,
  };

  //! methods
  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  decrement = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
  };
  render() {
    const { count: num, greeting, age } = this.state;
    return (
      <div>
        <h1>Counter Application</h1>
        <h2>
          {num} {greeting} {age}
        </h2>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

export default NewJsFeatures;
