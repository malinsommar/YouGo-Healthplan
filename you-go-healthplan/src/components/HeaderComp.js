import React from "react";
import { NavLink } from "react-router-dom";
import { StickyContainer, Sticky } from "react-sticky";
import "../styling/headercomp.css";

const HeaderComponent = () => {
  return (
    <section>
      <nav className="stroke">
        <img id="logo" src={require("../images/logo.png")} alt="logo"></img>

        <ul>
          <li>
            <NavLink className="navLink" to="/home" activeClassName="isActive">
              <p id="home">Hem</p>
            </NavLink>{" "}
          </li>
          <li>
            <NavLink className="navLink" to="/about" activeClassName="isActive">
              <p id="home">Om oss</p>
            </NavLink>{" "}
          </li>
          <li>
            <NavLink
              className="navLink"
              to="/pricing"
              activeClassName="isActive"
            >
              <p id="home">Priser</p>
            </NavLink>
          </li>
          <li>
            <NavLink className="navLink" to="/blogg" activeClassName="isActive">
              <p id="home">Blogg</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navLink"
              to="/contact"
              activeClassName="isActive"
            >
              <p id="home">Kontakt</p>
            </NavLink>
          </li>

          <li>
            <a
              href="https://app.yougohealthplan.com/login"
              className="navLink"
              id="logIn"
            >
              Logga in
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
  /*return (
    <div id="whole-header">
      <div className="header">
        <img id="logo" src={require("../images/logo.png")} alt="logo"></img>

        <div className="nav-items">
          <NavLink className="navLink" to="/home" activeClassName="isActive">
            <p id="home">Hem</p>
          </NavLink>

          <NavLink className="navLink" to="/about" activeClassName="isActive">
            <p id="home">Om oss</p>
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
  );*/
};

export default HeaderComponent;
