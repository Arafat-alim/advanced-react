import React from "react";
import RouterApp from "./RouterApp";
import { BrowserRouter as Router } from "react-router-dom";

function RouterIndex() {
  return (
    <Router>
      <RouterApp />
    </Router>
  );
}

export default RouterIndex;
