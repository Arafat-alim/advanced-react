import React, { Component } from "react";
import { FormContextConsumer } from "./userForm";

class FormApp extends Component {
  state = {
    username: "",
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <FormContextConsumer>
        {({ username, changeUsername }) => (
          <div>
            <h2>My name is {username}! 🎉</h2>
            <input
              name="username"
              placeholder="Enter new Username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <button onClick={() => changeUsername(this.state.username)}>
              Change
            </button>
          </div>
        )}
      </FormContextConsumer>
    );
  }
}

export default FormApp;
