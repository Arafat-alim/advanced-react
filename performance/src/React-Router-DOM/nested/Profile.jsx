import React from "react";
import Info from "./Info";
import Settings from "./Settings";
import { Switch, Route, Link } from "react-router-dom";

function Profile() {
  return (
    <div>
      <h1>Profile</h1>

      <ul>
        <li>
          <Link to="/profile/info">Info</Link>
        </li>
        <li>
          <Link to="/profile/settings">Settings</Link>
        </li>
      </ul>

    </div>
  );
}

export default Profile;
