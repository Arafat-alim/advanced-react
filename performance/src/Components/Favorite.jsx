import React, { Component } from "react";
import { withToggler } from "../HOC/withToggler";

class Favorite extends Component {
  //! Creating a state - Coming from HOC
  //   state = {
  //     isFavourited: true,
  //   };
  //! Methods - coming from HOC
  //   toggleFav = () => {
  //     this.setState((prevState) => {
  //       return {
  //         isFavourited: !prevState.isFavourited,
  //       };
  //     });
  //   };
  render() {
    return (
      <div>
        <h1>Click here to Favourite</h1>
        <h2>
          <span onClick={this.props.toggle} style={{ cursor: "pointer" }}>
            {console.log("Click", this.props.on)}
            {this.props.on ? "❤" : "😎"}
          </span>
        </h2>
      </div>
    );
  }
}

export default withToggler(Favorite, { defaultOnValue: false });
