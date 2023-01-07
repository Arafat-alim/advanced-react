import { Component } from "react";
import { withToggler } from "../HOC/withToggler";

class Movie extends Component {
  //! state coming from the props via HOC
  //   state = {
  //     on: true,
  //   };
  //! method toggler - coming from the props via HOC
  //   toggler = () => {
  //     this.setState((prevState) => {
  //       return {
  //         on: !prevState.on,
  //       };
  //     });
  //   };
  render() {
    return (
      <div>
        <button onClick={this.props.toggle}>
          {this.props.on ? "Show More" : "Hide Me"}
        </button>

        <nav style={{ display: this.props.on ? "none" : "block" }}>
          <h3>Home</h3>
          <h3>About</h3>
          <h3>Contact</h3>
          <h3>Work</h3>
        </nav>
      </div>
    );
  }
}

export default withToggler(Movie);
