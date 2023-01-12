import React, { Component, createContext } from "react";

const { Provider, Consumer } = createContext();

class FormContextProvider extends Component {
  state = {
    username: "Rohan",
  };

  changeUsername = (username) => {
    this.setState({ username });
  };
  render() {
    return (
      <Provider
        value={{
          username: this.state.username,
          changeUsername: this.changeUsername,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { FormContextProvider, Consumer as FormContextConsumer };
