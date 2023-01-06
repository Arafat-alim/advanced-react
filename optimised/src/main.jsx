import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import NewJsFeatures from "./classbased/NewJsFeatures";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <NewJsFeatures />
  </React.StrictMode>
);
