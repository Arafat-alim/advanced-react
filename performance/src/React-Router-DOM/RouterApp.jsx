import React from "react";
import { Link, Switch, Route } from "react-router-dom";

import RouterHome from "./components/RouterHome";
import RouterAbout from "./components/RouterAbout";
import RouterContact from "./components/RouterContact";
import Profile from "./nested/Profile";
import Info from "./nested/Info";
import Settings from "./nested/Settings";

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
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route
          exact
          path="/"
          render={({ match, location, history, staticContext }) => (
            <RouterHome
              match={match}
              location={location}
              history={history}
              staticContext={staticContext}
              customeProps={"Hlloe"}
            />
          )}
        />
        <Route exact path="/about">
          <RouterAbout customProps={"customProps"} />
        </Route>
        <Route exact path="/contact">
          <RouterContact />
        </Route>
        <Route>
          <Profile exact path="/profile" />
        </Route>
        <Route path="/profile/info">
          <Info />
        </Route>
        <Route path="/profile/settings">
          <Settings />
        </Route>
      </Switch>
    </div>
  );
}

export default RouterApp;
