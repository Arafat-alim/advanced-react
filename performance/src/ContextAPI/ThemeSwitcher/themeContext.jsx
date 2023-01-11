import React, { Component, createContext } from "react";
const { Provider, Consumer } = createContext();

//! Class Component
class ThemeContext extends Component {
  //! creating a state
  state = {
    theme: "dark",
  };
  //! Methods
  toggleTheme = () => {
    return this.setState((prevState) => {
      return {
        theme: prevState.theme === "light" ? "dark" : "light",
      };
    });
  };
  render() {
    return (
      <Provider
        value={{ theme: this.state.theme, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </Provider>
    );
  }
}
export { ThemeContext, Consumer as ThemeContextConsumer };
