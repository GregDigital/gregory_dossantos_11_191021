import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

class Navigation extends React.Component {
  render() {
    return (
      <div className="navigation">
        <Logo />
        <div className="link">
          <NavLink exact to="/" activeClassName="nav-active">
            Accueil
          </NavLink>
          <NavLink exact to="/a-propos" activeClassName="nav-active">
            À Propos
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Navigation;
