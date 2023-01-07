import { Component } from "react";

class Movie extends Component {
  //! state
  state = {
    on: true,
  };
  //! method toggler
  toggler = () => {
    this.setState((prevState) => {
      return {
        on: !prevState.on,
      };
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.toggler}>Show More</button>

        <nav style={{ display: this.state.on ? "none" : "block" }}>
          <h3>Home</h3>
          <h3>About</h3>
          <h3>Contact</h3>
          <h3>Work</h3>
        </nav>
      </div>
    );
  }
}

export default Movie;
