import "./style.css";
import React, { Component } from "react";
import ClassHeader from "./ClassHeader";
import UserContext from "./userContext";

class ClassApp extends Component {
  static contextType = UserContext;
  render() {
    const Username = this.context;
    return (
      <div>
        <ClassHeader />
        <main>
          <p className="main">No new notification, {Username}! ✔</p>
        </main>
      </div>
    );
  }
}

export default ClassApp;
