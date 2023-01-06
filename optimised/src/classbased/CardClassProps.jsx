import React from "react";
import { Component } from "react";

class CardClassProps extends Component {
  static defaultProps = {
    cardsColor: "pink",
    height: 100,
    width: 100,
  };
  render() {
    this.styles = {
      backgroundColor: this.props.cardsColor,
      height: this.props.height,
      width: this.props.width,
    };
    return <div style={this.styles}></div>;
  }
}

export default CardClassProps;
