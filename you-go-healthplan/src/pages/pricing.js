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
import prices from "../data/prices.json";

const test = prices.lessThanHundred.baseMonthly;

const Pricing = () => {
  const [monthlyPrice, setmonthlyPrice] = useState([
    prices.lessThanHundred.baseMonthly,
    prices.lessThanHundred.premiumMontly,
    prices.lessThanHundred.premiumPlusMontly,
  ]);
  const [startPrice, setstartPrice] = useState([
    prices.lessThanHundred.baseStart,
    prices.lessThanHundred.premiumStart,
    prices.lessThanHundred.premiumPlusStart,
  ]);

  const onFirstPricingButton = () => {
    setmonthlyPrice([
      prices.lessThanHundred.baseMonthly,
      prices.lessThanHundred.premiumMontly,
      prices.lessThanHundred.premiumPlusMontly,
    ]);
    setstartPrice([
      prices.lessThanHundred.baseStart,
      prices.lessThanHundred.premiumStart,
      prices.lessThanHundred.premiumPlusStart,
    ]);
  };

  const onSecondPricingButton = () => {
    setmonthlyPrice([
      prices.hundredToFiveHundred.baseMonthly,
      prices.hundredToFiveHundred.premiumMontly,
      prices.hundredToFiveHundred.premiumPlusMontly,
    ]);
    setstartPrice([
      prices.hundredToFiveHundred.baseStart,
      prices.hundredToFiveHundred.premiumStart,
      prices.hundredToFiveHundred.premiumPlusStart,
    ]);
  };

  const onThirdPricingButton = () => {
    setmonthlyPrice([
      prices.fiveHundredToTwoThousand.baseMonthly,
      prices.fiveHundredToTwoThousand.premiumMontly,
      prices.fiveHundredToTwoThousand.premiumPlusMontly,
    ]);
    setstartPrice([
      prices.fiveHundredToTwoThousand.baseStart,
      prices.fiveHundredToTwoThousand.premiumStart,
      prices.fiveHundredToTwoThousand.premiumPlusStart,
    ]);
  };

  const onForthPricingButton = () => {
    setmonthlyPrice([
      prices.twoThousandPlus.baseMonthly,
      prices.twoThousandPlus.premiumMontly,
      prices.twoThousandPlus.premiumPlusMontly,
    ]);
    setstartPrice([
      prices.twoThousandPlus.baseStart,
      prices.twoThousandPlus.premiumStart,
      prices.twoThousandPlus.premiumPlusStart,
    ]);
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
          title="Bas"
          startPrice={startPrice[0]}
          monthly={monthlyPrice[0]}
          list={prices.baseInformation.list}
        />

        <BoxComponent
          title="Premium"
          startPrice={startPrice[1]}
          monthly={monthlyPrice[1]}
          list={prices.premiumInformation.list}
        />
        <BoxComponent
          title="Premium+"
          startPrice={startPrice[2]}
          monthly={monthlyPrice[2]}
          list={prices.premiumPlusInformation.list}
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
        <h3 id="pricing-title">Erbjudanden</h3>
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
