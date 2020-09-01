import React from "react";
import "../styling/home.css";
import Circle from "../images/YouGo_3.png";
import HeaderComponent from "../components/HeaderComp";

const Home = () => {
  return (
    <div>
      <div id="headerpicture">
        <header>
          <HeaderComponent />
        </header>
      </div>
      <div>{ContentAboutYouGo()}</div>
      <div>{ColorContainer()}</div>
      <div>{ContainerInfoCircle()}</div>
    </div>
  );
};

const ContentAboutYouGo = () => {
  return (
    <div className="infoAboutAll">
      <div>
        <div id="infoAboutYouGo">
          <h1>Möt YouGo</h1>
          <p>
            Med våra tidigare erfarenheter som egenföretagare och <br />
            ledare vet vi vikten av friska medarbetare och
            <br /> vilken positiv effekt det är när medarbetarna trivs, <br />
            är friska, blir sedda och har en god gemenskap. <br />
            När vi blickar tillbaka på våra tidigare år inom arbetslivet,
            <br /> som många gånger varit otroligt tuffa, med stress, höga krav{" "}
            <br />
            och förväntningar är vi överens om att vi klarat av att hålla oss
            <br />
            friska pga att vi hela tiden gjort hälsosamma val och hållit
            <br /> igång med olika typer av aktiviteter.
          </p>
        </div>
        <div id="imgOfSomething"></div>
      </div>
      <div id="moveBox1">
        <div id="imgOfSomething1"></div>
        <div id="infoAboutYouGo1">
          <h1>Vår Filosofi</h1>
          <p>
            Vi arbetar proaktivt för att tidigt fånga upp signaler på ohälsa.
            <br />
            Alla företag är olika. Vi tar reda på vilka åtgärder just ER <br />
            organisation behöver. Vår styrka är att nå de medarbetare som <br />
            är mest ohälsosamma inom olika kategorierna som rör hälsa.
            <br />
            Forskningen visar att medarbetare behöver må bra för <br />
            att göra ett gott jobb och leverera önskat resultat.
          </p>
        </div>
      </div>
    </div>
  );
};

const ColorContainer = () => {
  return (
    <div id="colorcontainer">
      <div className="boxOfInfo">
        <div className="picture"></div>
        <div className="rubrik">Osäker?</div>
        <div className="text">Läs mer om oss...</div>
        <button className="buttonInfo">Klick here</button>
      </div>
      <div className="boxOfInfo">
        <div className="picture"></div>
        <div className="rubrik">Enkel registrering</div>
        <div className="text">Kontakta oss...</div>
        <button className="buttonInfo">Klick here</button>
      </div>
      <div className="boxOfInfo">
        <div className="picture"></div>
        <div className="rubrik">Erbjudande</div>
        <div className="text">Gratis 3 månader, kolla priser!</div>
        <button className="buttonInfo">Klick here</button>
      </div>
    </div>
  );
};

const ContainerInfoCircle = () => {
  return (
    <div id="InfoContainer">
      <div id="firstBox">
        <img id="icon" src={Circle} alt="icon"></img>
      </div>
    </div>
  );
};

export default Home;
