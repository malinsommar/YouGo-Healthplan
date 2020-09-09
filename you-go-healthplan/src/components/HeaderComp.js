import React from "react";
import { NavLink } from "react-router-dom";
import "../styling/headercomp.css";

const HeaderComponent = () => {
  return (
    <div id="whole-header">
      <img id="logo" src={require("../images/logo.png")} alt="logo"></img>

      <div className="header">
        <div className="nav-items">
          <NavLink className="navLink" to="/home" activeClassName="isActive">
            <p id="home">Hem</p>
          </NavLink>

          <NavLink className="navLink" to="/about" activeClassName="isActive">
            <p id="home">Om oss</p>
          </NavLink>

          <NavLink className="navLink" to="/service" activeClassName="isActive">
            <p id="home">Tjänsten</p>
          </NavLink>

          <NavLink className="navLink" to="/pricing" activeClassName="isActive">
            <p id="home">Priser</p>
          </NavLink>

          <NavLink className="navLink" to="/blogg" activeClassName="isActive">
            <p id="home">Blogg</p>
          </NavLink>

          <NavLink className="navLink" to="/contact" activeClassName="isActive">
            <p id="home">Kontakt</p>
          </NavLink>

          <NavLink className="navLink" to="/home" activeClassName="isActive">
            <p id="home">Logga in</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
