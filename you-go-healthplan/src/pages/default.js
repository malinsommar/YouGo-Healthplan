import React from "react";
import HeaderComponent from "../components/HeaderComp";
import FotterComponent from "../components/FooterComp";
import { NavLink } from "react-router-dom";
import ErrorIcon from "../images/error404.png";
import "../styling/default.css";

const Default = () => {
  const content = () => {
    return (
      <div id="defaultPage">
        <div id="noPageFoundBox">
          <h1 id="error404">404 Error</h1>
          <div id="default-right-items">
            <h1 id="defaultTitle">Sidan hittades inte</h1>
            <p id="deafultText">
              Vi kan inte hitta sidan du sökte efter! <br />
              Testa att gå tillbaka till startsidan.{" "}
            </p>
            <NavLink id="goHome" to="/home" activeClassName="isActive">
              <p id="home">Ta mig tillbaka till hemsidan!</p>
            </NavLink>{" "}
          </div>
          <img id="errorIcon" src={ErrorIcon} />
        </div>
      </div>
    );
  };

  return (
    <div>
      <HeaderComponent />
      {content()}
      <FotterComponent />
    </div>
  );
};

export default Default;
