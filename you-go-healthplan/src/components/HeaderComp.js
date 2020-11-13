import React from "react";
import { NavLink } from "react-router-dom";
import SideBar from "../components/Sidebar";
import "../styling/headercomp.css";
import images from "../data/images.js";

const HeaderComponent = () => {
  return (
    <section>
      <nav className="stroke">
        <NavLink className="navLink" to="/home" activeClassName="isActive">
          <img id="logo" src={images[0].youGoiconHeader} alt="logo"></img>
        </NavLink>
        <ul className="desktop-screen">
          <li>
            <NavLink className="navLink" to="/home" activeClassName="isActive">
              <p id="home">Hem</p>
            </NavLink>
          </li>
          <li>
            <NavLink className="navLink" to="/about" activeClassName="isActive">
              <p id="home">Om oss</p>
            </NavLink>
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
      <div className="small-screen">
        <SideBar right />
      </div>
    </section>
  );
};

export default HeaderComponent;
