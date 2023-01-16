import React from "react";
import { Link, Switch, Route } from "react-router-dom";

import RouterHome from "./components/RouterHome";
import RouterAbout from "./components/RouterAbout";

function RouterApp() {
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>

      <Switch>
        {/* <Route exact path={"/"} render={() => <h1>Home</h1>} /> */}
        <Route exact path="/">
          <RouterHome />
        </Route>
        <Route path="/about">
          <RouterAbout />
        </Route>
      </Switch>
    </div>
  );
}

export default RouterApp;
