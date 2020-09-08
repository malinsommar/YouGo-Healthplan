import React from "react";
import "../styling/home.css";
import Circle from "../images/YouGo_4.png";
import actiway from "../images/actiway.png";
import bikelease from "../images/bikelease.png";
import casall from "../images/casall.png";
import bluecall from "../images/bluecall.png";
import viktväktarna from "../images/viktväktarna.png";
import flexmassage from "../images/flexmassage.png";
import icebug from "../images/icebug.png";
import livingpepole from "../images/livingpepole.png";
import nordicwellness from "../images/nordicwellness.png";
import pep from "../images/pep.png";
import HeaderComponent from "../components/HeaderComp";
import FooterComponent from "../components/FooterComp";

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
      <div>{Partners()}</div>
    </div>
  );
};

const ContentAboutYouGo = () => {
  return (
    <div className="infoAboutAll">
      <div>
        <div id="infoAboutYouGo">
          <h1>Hälsosmart</h1>
          <p>
            Förebygga hälsa är mer kostnadseffektivt än att rehabilitera!
            <br />
            På de flesta arbetsplatser visar beräkningar att det är <br />
            en ren vinst att utöka friskvården, särskilt om den når <br />
            människor inte värnar om sin hälsa på eget initiativ.
            <br /> Lönsam friskvård är till exempel pulshöjande motion, att
            <br />
            äta regelbundet och rätt sammansatt, finna tid för återhämtning,
            <br />
            hjälp att sluta röka, gå ner i vikt med mera. Har medarbetarna redan
            <br />
            god hälsa är det viktigt att se till att friskheten består.
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
      <p id="firstBoxRubrik">Så här jobbar vi</p>
      <div id="firstBox">
        <img id="icon" src={Circle} alt="icon"></img>
      </div>
    </div>
  );
};

const Partners = () => {
  return (
    <div>
      <div id="partners">
        <p id="textSamarbetspartners">Samarbetspartners</p>
        <img className="picinfo" src={flexmassage} alt="icon"></img>

        <img className="picinfo" src={bluecall} alt="icon"></img>

        <img className="picinfo" src={casall} alt="icon"></img>

        <img className="picinfo" src={icebug} alt="icon"></img>

        <img className="picinfo" src={livingpepole} alt="icon"></img>

        <img className="picinfo" src={pep} alt="icon"></img>

        <img className="picinfo" src={nordicwellness} alt="icon"></img>

        <img className="picinfo" src={viktväktarna} alt="icon"></img>

        <img className="picinfo" src={actiway} alt="icon"></img>

        <img className="picinfo" src={bikelease} alt="icon"></img>
      </div>
      <FooterComponent />
    </div>
  );
};

export default Home;
