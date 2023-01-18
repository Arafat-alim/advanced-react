import React from "react";
import { Link, Switch, Route } from "react-router-dom";

import RouterHome from "./components/RouterHome";
import RouterAbout from "./components/RouterAbout";
import RouterContact from "./components/RouterContact";

function RouterApp() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/">
          <RouterHome />
        </Route>
        <Route exact path="/about">
          <RouterAbout />
        </Route>
        <Route exact path="/">
          <RouterContact />
        </Route>
      </Switch>
    </div>
  );
}

export default RouterApp;
