import React, { Component } from "react";

//! created a class based component
class Toggler extends Component {
  //! state
  state = {
    show: false,
  };
  //! Methods
  toggle = () => {
    this.setState((prevState) => {
      return {
        show: !prevState.show,
      };
    });
  };
  render() {
    const Component = this.props.component;
    return <Component {...this.props} toggle={toggle} on={this.state.show} />;
  }
}

export function withTOggler(component) {
  return function (props) {
    return <Toggler component={component} {...props} />;
  };
}
