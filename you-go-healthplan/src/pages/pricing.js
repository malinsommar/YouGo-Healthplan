import React from "react";
import "../styling/pricing.css";

import HeaderComponent from "../components/HeaderComp";
import BoxComponent from "../components/PricingboxComp";
import { NavLink } from "react-router-dom";
import yougobreak from "../images/yougoBreak.jpg";

const Pricing = () => {
  return (
    <div>
      <div className="top-items">
        <div id="pricing-header">
          <HeaderComponent />
          <h1 id="header-title">Erbjudanden</h1>
          <p id="header-p">
            Här kan ni se våra olika erbjudanden, klicka i hur många anställda
            ni är.
            <br /> Bla bla blaa blabla bl bablabla.
          </p>
        </div>
        <p id="numberOfEmp">
          Klicka i hur många anställda ni är på ert företag:
        </p>
        <div className="employeesButtons">
          <button className="emp-button">0 - 100</button>
          <button className="emp-button">101 - 500</button>
          <button className="emp-button">501 - 2000</button>
          <button className="emp-button" id="last-emp-button">
            2001+
          </button>
        </div>
        <div>
          <BoxComponent
            title="Liten"
            startPrice="0"
            monthly="49kr /mo"
            list={[
              "Hälsokontroll",
              "Handledning",
              "Support",
              "Personlig kontakt",
            ]}
          />
          <BoxComponent
            title="Mellan"
            startPrice="0"
            monthly="69kr /mo"
            list={[
              "Personlig inloggning",
              "Digital hälsokartläggning 3ggr/år",
              "Individanpassade åtgärdsförslag",
              "Fria hälsoprogram för kropp och knopp",
            ]}
          />
          <BoxComponent
            title="Stor"
            startPrice="1000"
            monthly="Kontakta oss!"
            list={[
              "Personlig inloggning",
              "Digital hälsokartläggning 3ggr/år",
              "Individanpassade åtgärdsförslag",
              "Fria hälsoprogram för kropp och knopp",
              <img id="youGoBreak" src={yougobreak} alt="Yougo break logo" />,
            ]}
          />
        </div>
        <NavLink id="contact" to="/contact" activeClassName="isActive">
          <p id="nav">
            Intresserad?
            <br />
            Kontakta oss!
          </p>
        </NavLink>
      </div>
      <br />

      <div id="bottom-items"></div>

      <br />
      <br />
      <br />
      <br />
      <div id="temp-footer"> FOTTER</div>
    </div>
  );
};

export default Pricing;
