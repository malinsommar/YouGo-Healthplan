import React from "react";
import "../styling/pricing.css";
import HeaderComponent from "../components/HeaderComp";
import BoxComponent from "../components/PricingboxComp";
import PricingInfoComponent from "../components/PricingInfoComp";
import FotterComponent from "../components/FooterComp";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import yougobreak from "../images/yougoBreak.jpg";
import loginIcon from "../images/login.png";
import surveyIcon from "../images/survey.png";
import individualIcon from "../images/individual.png";
import healthprogramIcon from "../images/health-program.png";
import breakIcon from "../images/break.png";

const Pricing = () => {
  const [monthlyPrice, setmonthlyPrice] = useState([
    "49kr / mo",
    "69kr /mo",
    "Kontakta oss",
  ]);
  const [startPrice, setstartPrice] = useState(["0", "0", "1000"]);

  const onFirstPricingButton = () => {
    setmonthlyPrice(["49kr / mo", "69kr /mo", "Kontakta oss"]);
    setstartPrice(["0", "0", "1000"]);
  };

  const onSecondPricingButton = () => {
    setmonthlyPrice(["39kr / mo", "49kr /mo", "Kontakta oss"]);
    setstartPrice(["2000", "2000", "1000"]);
  };

  const onThirdPricingButton = () => {
    setmonthlyPrice(["25kr / mo", "35kr /mo", "Kontakta oss"]);
    setstartPrice(["5000", "7500", "1000"]);
  };

  const onForthPricingButton = () => {
    setmonthlyPrice(["20kr / mo", "25kr /mo", "Kontakta oss"]);
    setstartPrice(["7500", "10 000", "1000"]);
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
        <div>
          <BoxComponent
            title="Bas"
            startPrice={startPrice[0]}
            monthly={monthlyPrice[0]}
            list={[
              "Hälsostrategiskt systemstöd",
              "Standard analys",
              "Hälsokartläggning 3ggr/ år",
              "Individuella åtgärdsförslag",
              "Tillgång till hälsoportal",
              "Fria hälsoprogram",
              "Standard Rapport på hälsokartläggningen",
            ]}
          />

          <BoxComponent
            title="Premium"
            startPrice={startPrice[1]}
            monthly={monthlyPrice[1]}
            list={[
              "Hälsostrategiskt systemstöd",
              "Standard analys",
              "Hälsokartläggning 3ggr/ år",
              "Individuella åtgärdsförslag",
              "Tillgång till hälsoportal",
              "Fria hälsoprogram",
              "Standard Rapport på hälsokartläggningen",
              "Åtgärdsförslag",
              "Skapa egna rapporter",
              "Målgruppsanpassade utckick av aktiviteter",
            ]}
          />
          <BoxComponent
            title="Premium+"
            startPrice={startPrice[2]}
            monthly={monthlyPrice[2]}
            list={[
              "Hälsostrategiskt systemstöd",
              "Standard analys",
              "Hälsokartläggning 3ggr/ år",
              "Individuella åtgärdsförslag",
              "Tillgång till hälsoportal",
              "Fria hälsoprogram",
              "Standard Rapport på hälsokartläggningen",
              "Åtgärdsförslag",
              "Skapa egna rapporter",
              "Målgruppsanpassade utckick av aktiviteter",
              "Möjlighet att skräddarsy analysen",
              "Möjlighet till extra mätning",
              "Kundservice över telefon",
              "Personlig kontakt",
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

      <div id="bottom-items">
        <PricingInfoComponent
          title="Personlig inloggning:"
          text="Alla anställda får sitt egen inlogg med tillgång till all
        funktionalitet."
          image={loginIcon}
        />

        <PricingInfoComponent
          title="Digital hälsokartläggning:"
          text=" Första gången din antällda loggar in på sitt konto kommer hen få gå
          igenom ett formulär,
           utifrån detta kommer vi sedan kunna kartlägga dennes hälsa.
           Formuläret skall göras 4 gånger om året för att ni lätt skall
          kunna se era framgångar."
          image={surveyIcon}
        />

        <PricingInfoComponent
          title="Individanpassade åtgärdsförslag:"
          text=" Beroende på hur den anställdes resultat på formuläret kommer vi
          rekomendera ett åtgärdsförslag på hur denne skall på bästa sätt
          skall ströva efter ett hälsosammare liv."
          image={individualIcon}
        />

        <PricingInfoComponent
          title="Fria hälsoprogram:"
          text=" Alla anställda får tillgång till videos, artiklar, tips och tricks
        med allt från kost, mental hälsa till träning."
          image={healthprogramIcon}
        />

        <PricingInfoComponent
          title="YouGo Break:"
          text="Ett träningsprogram alla antällda kör igenom 3 gånger om dagen. Det
          tar bara några minuter men det har enorma resultat!"
          image={breakIcon}
        />
      </div>
      <FotterComponent />
    </div>
  );
};

export default Pricing;
