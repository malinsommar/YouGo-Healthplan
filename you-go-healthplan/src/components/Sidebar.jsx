import React from "react";
import { slide as Menu } from "react-burger-menu";
import "../styling/sidebar.css";
import { NavLink } from "react-router-dom";

export default (props) => {
  return (
    <Menu {...props}>
      <NavLink className="navLinkSide" to="/home">
        <p id="home">Hem</p>
      </NavLink>

      <NavLink className="navLinkSide" to="/about">
        <p id="home">Om oss</p>
      </NavLink>

      <NavLink className="navLinkSide" to="/pricing">
        <p id="home">Priser</p>
      </NavLink>

      <NavLink className="navLinkSide" to="/blogg">
        <p id="home">Blogg</p>
      </NavLink>

      <NavLink className="navLinkSide" to="/contact" activeClassName="isActive">
        <p id="home">Kontakt</p>
      </NavLink>

      <a
        href="https://app.yougohealthplan.com/login"
        className="navLinkSide"
        id="logInSide"
      >
        Logga in
      </a>
    </Menu>
  );
};
