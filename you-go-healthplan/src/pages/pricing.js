import React from "react";
import "../styling/pricing.css";
import HeaderComponent from "../components/HeaderComp";
import BoxComponent from "../components/PricingboxComp";
import PricingInfoComponent from "../components/PricingInfoComp";
import FotterComponent from "../components/FooterComp";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import loginIcon from "../images/login.png";
import surveyIcon from "../images/survey.png";
import individualIcon from "../images/individual.png";
import EgnaRapporter from "../images/egnaRapporter.png";
import breakIcon from "../images/break.png";

import { css, jsx } from "@emotion/core";

const Pricing = () => {
  const [monthlyPrice, setmonthlyPrice] = useState([
    "0kr",
    "49kr",
    "69kr",
    "149kr",
  ]);
  const [startPrice, setstartPrice] = useState(["500", "0", "0", "1000"]);

  const onFirstPricingButton = () => {
    setmonthlyPrice(["0kr", "49kr", "69kr", "149kr"]);
    setstartPrice(["500", "0", "0", "1000"]);
  };

  const onSecondPricingButton = () => {
    setmonthlyPrice(["0kr", "39kr", "49kr", "99kr"]);
    setstartPrice(["1000", "2000", "2000", "1000"]);
  };

  const onThirdPricingButton = () => {
    setmonthlyPrice(["0kr", "25kr", "35kr", "79kr"]);
    setstartPrice(["1500", "5000", "7500", "1000"]);
  };

  const onForthPricingButton = () => {
    setmonthlyPrice(["0kr", "20kr", "25kr", "59kr"]);
    setstartPrice(["2000", "7500", "10 000", "1000"]);
  };

  const empButtons = () => {
    return (
      <div className="employeesButtons">
        <button className="emp-button" onClick={onFirstPricingButton}>
          0 - 100
        </button>
        <button className="emp-button" onClick={onSecondPricingButton}>
          101 - 500
        </button>
        <button className="emp-button" onClick={onThirdPricingButton}>
          501 - 2000
        </button>
        <button
          className="emp-button"
          id="last-emp-button"
          onClick={onForthPricingButton}
        >
          2001+
        </button>
      </div>
    );
  };

  const pricingBoxes = () => {
    return (
      <div>
        <BoxComponent
          title="1 månad"
          startPrice={startPrice[0]}
          monthly={monthlyPrice[0]}
          list={[
            "Hälsostrategiskt systemstöd",
            "Standard analys",
            "En hälsokartläggning",
            "Individuellt och direkt hälsoresultat till medarbetare med åtgärdsförslag",
            "Tillgång till hälsoportal för medarbetaren",
            "Fria hälsoprogram till medarbetaren",
            "En generell rapport på hälsokartläggningen/nuläge på gruppnivå",
          ]}
        />
        <BoxComponent
          title="Bas"
          startPrice={startPrice[1]}
          monthly={monthlyPrice[1]}
          list={[
            "Hälsostrategiskt systemstöd",
            "Standard analys",
            "Filtrering ålder och kön",
            "Hälsokartläggning 3ggr/ år",
            "Individuellt och direkt hälsoresultat till medarbetare med åtgärdsförslag",
            "Tillgång till hälsoportal för medarbetaren",
            "Fria hälsoprogram till medarbetaren",
            "Standard Rapport på hälsokartläggningen/nuläge på gruppnivå",
          ]}
        />

        <BoxComponent
          title="Premium"
          startPrice={startPrice[2]}
          monthly={monthlyPrice[2]}
          list={[
            "Hälsostrategiskt systemstöd",
            "Standard analys",
            "Filtrering ålder och kön + 2 valfria",
            "Hälsokartläggning 3ggr/ år",
            "Individuellt och direkt hälsoresultat till medarbetare med åtgärdsförslag",
            "Tillgång till hälsoportal för medarbetaren",
            "Fria hälsoprogram till medarbetaren",
            "Standard Rapport på hälsokartläggningen/nuläge på gruppnivå",
            "Åtgärdsförslag",
            "Rättighet till analysverktyg för att skapa egna rapporter",
            "Rättigheter till målgruppsanpassade utckick av aktiviteter",
          ]}
        />
        <BoxComponent
          title="Premium+"
          startPrice={startPrice[3]}
          monthly={monthlyPrice[3]}
          list={[
            "Hälsostrategiskt systemstöd",
            "Standard analys",
            "Filtrering ålder och kön + 4 valfria",
            "Hälsokartläggning 3ggr/ år",
            "Individuellt och direkt hälsoresultat till medarbetare med åtgärdsförslag",
            "Tillgång till hälsoportal för medarbetaren",
            "Fria hälsoprogram till medarbetaren",
            "Standard Rapport på hälsokartläggningen/nuläge på gruppnivå",
            "Åtgärdsförslag",
            "Rättighet till analysverktyg för att skapa egna rapporter",
            "Rättigheter till målgruppsanpassade utckick av aktiviteter",
            "Möjlighet att lägga till egna frågor",
            "Möjlighet till extra mätning",
            "Kundservice över telefon",
            "Personlig kontakt",
          ]}
        />
      </div>
    );
  };

  const contactButton = () => {
    return (
      <div id="contact-div">
        <NavLink id="contact" to="/contact" activeClassName="isActive">
          <p id="nav">
            Intresserad?
            <br />
            Kontakta oss!
          </p>
        </NavLink>
      </div>
    );
  };

  const serviceDescription = () => {
    return (
      <div id="bottom-items">
        <PricingInfoComponent
          title="Personlig inloggning:"
          text="Alla anställda får sitt egna inlogg med tillgång till sitt egna resultat samt till hälsoportalen. I premium
          och premium + får företaget tillgång till analysverktyget och kan målgruppsanpassa åtgärder."
          image={loginIcon}
        />

        <PricingInfoComponent
          title="Digital hälsokartläggning:"
          text="Ett systemstöd för proaktiv friskvård där vi mäter effekter av hälsoinvesteringar. Ni får en tydlig
          hälsostrategi som ger ROI. I premium och premuim + ingår målgruppsanpassning för att fånga upp
          riskgrupper."
          image={surveyIcon}
        />

        <PricingInfoComponent
          title="Åtgärdsförslag & fria hälsoprogram:"
          text="Beroende på hur medarbetarens resultat ser ut, rekommenderas olika åtgärdsförslag för ett
          hälsosammare liv. Hen får tillgång till videos, artiklar, tips och tricks med allt ifrån kost, mental hälsa
          till träning."
          image={breakIcon}
        />

        <PricingInfoComponent
          title="Egna rapporter:"
          text="Väljer ni premium eller premium + får ni tillgång till att
          skapa fler och egna rapporter."
          image={EgnaRapporter}
        />

        <PricingInfoComponent
          title="Personlig kontakt:"
          text="Väljer ni paketet premium + får ni extra stöttning, snabbare
          svar och personlig kontakt, lite extra smidigt."
          image={individualIcon}
        />
      </div>
    );
  };

  return (
    <div>
      <div className="top-items">
        <HeaderComponent />
        <h1 id="pricing-title">Erbjudanden</h1>
        <hr id="pricing-hr" />
        <p id="numberOfEmp">
          Klicka i hur många anställda ni är på ert företag:
        </p>
        {empButtons()}
        {pricingBoxes()}
        {contactButton()}
      </div>
      <br />
      {serviceDescription()}
      <FotterComponent />
    </div>
  );
};

export default Pricing;
