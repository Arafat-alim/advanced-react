import React, { Component } from "react";

class Favorite extends Component {
  //! Creating a state
  state = {
    isFavourited: true,
  };
  //! Methods
  toggleFav = () => {
    this.setState((prevState) => {
      return {
        isFavourited: !prevState.isFavourited,
      };
    });
  };
  render() {
    return (
      <div>
        <h1>Click here to Favourite</h1>
        <h2>
          <span onClick={this.toggleFav} style={{ cursor: "pointer" }}>
            {console.log(this.state.isFavourited)}
            {this.state.isFavourited ? "❤" : "😎"}
          </span>
        </h2>
      </div>
    );
  }
}

export default Favorite;
