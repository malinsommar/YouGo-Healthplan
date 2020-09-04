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
    "99kr /mo",
    "149kr /mo",
  ]);
  const [startPrice, setstartPrice] = useState(["0", "0", "1000"]);

  const onFirstPricingButton = () => {
    setmonthlyPrice(["49kr / mo", "99kr /mo", "149kr /mo"]);
    setstartPrice(["0", "0", "1000"]);
  };

  const onSecondPricingButton = () => {
    setmonthlyPrice(["39kr / mo", "79kr /mo", "129kr /mo"]);
    setstartPrice(["2000", "2000", "1000"]);
  };

  const onThirdPricingButton = () => {
    setmonthlyPrice(["49kr / mo", "59kr /mo", "109kr /mo"]);
    setstartPrice(["5000", "7500", "1000"]);
  };

  const onForthPricingButton = () => {
    setmonthlyPrice(["19kr / mo", "39kr /mo", "99kr /mo"]);
    setstartPrice(["7500", "10000", "1000"]);
  };

  return (
    <div>
      <div className="top-items">
        <div id="pricing-header">
          <HeaderComponent />
          <h1 id="pricing-header-title">Erbjudanden</h1>
          <p id="pricing-header-p">
            Här kan ni se våra olika erbjudanden, klicka i hur många anställda
            ni är.
            <br /> Bla bla blaa blabla bl bablabla.
          </p>
        </div>
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
            title="Liten"
            startPrice={startPrice[0]}
            monthly={monthlyPrice[0]}
            list={["Test", "Test", "Test", "Test"]}
          />

          <BoxComponent
            title="Mellan"
            startPrice={startPrice[1]}
            monthly={monthlyPrice[1]}
            list={[
              "Personlig inloggning",
              "Digital hälsokartläggning 3ggr/år",
              "Individanpassade åtgärdsförslag",
              "Fria hälsoprogram för kropp och knopp",
            ]}
          />
          <BoxComponent
            title="Stor"
            startPrice={startPrice[2]}
            monthly={monthlyPrice[2]}
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
