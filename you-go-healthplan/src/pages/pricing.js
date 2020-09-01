import React from "react";
import "../styling/pricing.css";
import HeaderComponent from "../components/HeaderComp";
import BoxComponent from "../components/PricingboxComp";
import { NavLink } from "react-router-dom";
import yougobreak from "../images/yougoBreak.jpg";
import { useState } from "react";

const Pricing = () => {
  const [monthlyPrice, setmonthlyPrice] = useState([
    "49kr / mo",
    "99kr /mo",
    "149kr /mo",
  ]);
  const [startPrice, setstartPrice] = useState(["0", "0", "1000"]);

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
            list={["Test", "Test", "Test", "Test"]}
          />
          <BoxComponent
            title="Mellan"
            startPrice="0"
            monthly="99kr /mo"
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
            monthly="149kr /mo"
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
        <p>
          Personlig inloggning:
          <br />
          Alla anställda får sitt egen inlogg med tillgång till all
          funktionalitet.
        </p>

        <p>
          Digital hälsokartläggning:
          <br />
          Första gången din antällda loggar in på sitt konto kommer hen få gå
          igenom ett formulär,
          <br /> utifrån detta kommer vi sedan kunna kartlägga dennes hälsa.
          <br /> Formuläret skall göras 4 gånger om året för att ni lätt skall
          kunna se era framgångar.
        </p>

        <p>
          Individanpassade åtgärdsförslag: <br /> Beroende på hur den anställdes
          resultat på formuläret kommer vi rekomendera ett åtgärdsförslag på hur
          denne skall på bästa sätt skall ströva efter ett hälsosammare liv.
        </p>

        <p>
          Fria hälsoprogram: <br />
          Alla anställda får tillgång till videos, artiklar, tips och tricks med
          allt från kost till träning.{" "}
        </p>

        <p>
          YouGo Break: <br /> Ett träningsprogram alla antällda kör igenom 3
          gånger om dagen. Det tar bara några minuter men det har enorma
          resultat!
        </p>
      </div>

      <br />
      <br />
      <br />
      <br />
      <div id="temp-footer"> FOTTER</div>
    </div>
  );
};

export default Pricing;
