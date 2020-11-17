import React from "react";
import "../styling/pricing.css";
import HeaderComponent from "../components/HeaderComp";
import BoxComponent from "../components/PricingboxComp";
import PricingInfoComponent from "../components/PricingInfoComp";
import FotterComponent from "../components/FooterComp";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import prices from "../data/prices.json";
import PricingTexts from "../data/textPricingPage.json";
import images from "../data/images.js";

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
          {PricingTexts.firstButtonText}
        </button>
        <button className="emp-button" onClick={onSecondPricingButton}>
          {PricingTexts.secondButtonText}
        </button>
        <button className="emp-button" onClick={onThirdPricingButton}>
          {PricingTexts.thirdButtonText}
        </button>
        <button
          className="emp-button"
          id="last-emp-button"
          onClick={onForthPricingButton}
        >
          {PricingTexts.forthButtonText}
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
          <p id="nav">{newLineText(PricingTexts.contactButton)}</p>
        </NavLink>
      </div>
    );
  };

  const serviceDescription = () => {
    return (
      <div id="bottom-items">
        <PricingInfoComponent
          title={PricingTexts.firstInfoBoxTitle}
          text={PricingTexts.firstInfoBoxText}
          image={images[0].iconFirstCard}
        />

        <PricingInfoComponent
          title={PricingTexts.secondInfoBoxTitle}
          text={PricingTexts.secondInfoBoxText}
          image={images[0].iconSecondCard}
        />

        <PricingInfoComponent
          title={PricingTexts.thirdInfoBoxTitle}
          text={PricingTexts.thirdInfoBoxText}
          image={images[0].iconThirdCard}
        />

        <PricingInfoComponent
          title={PricingTexts.forthInfoBoxTitle}
          text={PricingTexts.forthInfoBoxText}
          image={images[0].iconforthCard}
        />

        <PricingInfoComponent
          title={PricingTexts.fifthInfoBoxTitle}
          text={PricingTexts.fifthInfoBoxText}
          image={images[0].iconfifthCard}
        />
      </div>
    );
  };

  const newLineText = (text) => {
    return text.split("\n").map((str) => <p>{str}</p>);
  };

  return (
    <div>
      <div className="top-items">
        <HeaderComponent />
        <h3 id="pricing-title">{PricingTexts.pageTitle}</h3>
        <p id="numberOfEmp">{PricingTexts.buttonsTitle}</p>
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
