import React, { Component } from "react";
import UserContext from "./userContext";

class ClassHeader extends Component {
  static contextType = UserContext;
  render() {
    const Username = this.context;
    return (
      <header>
        <p>Welcome, {Username}</p>
      </header>
    );
  }
}

export default ClassHeader;
