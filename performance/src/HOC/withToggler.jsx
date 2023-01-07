import React, { Component } from "react";

//! created a class based component
class Toggler extends Component {
  //! state
  state = {
    on: false,
  };
  //! Methods
  toggle = () => {
    this.setState((prevState) => {
      return {
        on: !prevState.on,
      };
    });
  };
  render() {
    const Component = this.props.component;
    return (
      <Component {...this.props} toggle={this.toggle} on={this.state.on} />
    );
  }
}

export function withToggler(component) {
  return function (props) {
    return <Toggler component={component} {...props} />;
  };
}
