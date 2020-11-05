import React from "react";
import "../styling/home.css";
import { NavLink } from "react-router-dom";
import HoverButton from "../components/HoverComp";
import MultiCarouselComponent from "../components/MultiCarouselComp";
import FotterComponent from "../components/FooterComp";
import Customers from "../data/partnersAndCustomers.json";
import Circle from "../images/YouGo_4.png";
import HeaderComponent from "../components/HeaderComp";
import Login from "../images/login.png";
import Person from "../images/person.png";
import SaveMoney from "../images/saveMoney.png";
import frukt from "../images/fruit.jpg";
import lindaIVatten from "../images/Lindaivattnet.jpeg";

const Home = () => {
  return (
    <div>
      <div id="headerpicture">
        <div id="headerDiv">
          <header>
            <HeaderComponent />
            <h1 id="homeHeaderTitle">YouGo HealthPlan</h1>
            <h2 id="homeHeaderSubTitle">Friska medarbetare, sjukt lönsamt!</h2>
          </header>
        </div>
      </div>
      <div>{ContentAboutYouGo()}</div>
      <div>{ColorContainer()}</div>
      <div>{ContainerInfoCircle()}</div>
      <div>
        <MultiCarouselComponent
          title="Kunder"
          list={Customers.customer}
          subTitle="Vi är stolta över att få medverka till förbättrad hälsa på dessa företag"
        />
      </div>
      <FotterComponent />
    </div>
  );
};

const ContentAboutYouGo = () => {
  return (
    <div className="infoAboutAll">
      <div className="pic-to-left" id="global-goals">
        <img className="about-images" src={frukt} />
        <div id="globalGoals-right" className="pic-to-right-text">
          <p className="rubrikAbout">Hälsosmart</p>
          <p className="textAbout">
            Dagens utmaning för arbetsgivaren är att man har kostsamma och
            generella åtgärder utan resultat. Vi vill att man tar kontroll genom
            att kartlägga och mäta effekten av friskvårdinsatser då vi vet att
            förebygga hälsa är mer kostnadseffektivt än att rehabilitera! På de
            flesta arbetsplatser visar beräkningar att det är en ren vinst att
            utöka friskvården, särskilt om den når människor inte värnar om sin
            hälsa på eget initiativ. Lönsam friskvård är till exempel
            pulshöjande motion, att äta regelbundet och rätt sammansatt, finna
            tid för återhämtning, hjälp att sluta röka, gå ner i vikt med mera.
            Har medarbetarna redan god hälsa är det viktigt att se till att
            friskheten består.
          </p>
        </div>
      </div>
      <div className="pic-to-left" id="global-goals">
        <div id="globalGoals-right" className="pic-to-right-text">
          <p className="rubrikAbout">Vår Filosofi</p>
          <p className="textAbout">
            Vi arbetar proaktivt för att tidigt fånga upp signaler på ohälsa.
            Alla företag är olika. Vi tar reda på vilka åtgärder just ER
            organisation behöver. Vår styrka är att nå de medarbetare som är
            mest ohälsosamma inom olika kategorierna som rör hälsa. Forskningen
            visar att medarbetare behöver må bra för att göra ett gott jobb och
            leverera önskat resultat.
          </p>
        </div>
        <img className="about-images" src={lindaIVatten} />
      </div>
    </div>
  );
};

const ColorContainer = () => {
  return (
    <div id="colorcontainer">
      <div className="g-card">
        <div className="card-container">
          <div className="card-front-1">
            <img className="picture" src={Person}></img>
            <div className="rubrik">Hur vi jobbar</div>
            <div className="text"></div>
          </div>

          <div className="card-back-1">
            <NavLink
              className="button-container"
              to="/about"
              activeClassName="isActive"
            >
              <p>
                Vi erbjuder ett systemstöd för kartläggning och nuläge på
                medarbetarnas hälsostatus. Detta ligger som grund för
                hälsostrategiska beslut för arbetsgivare för att proaktivt kunna
                ge grupp- och individanpassade friskvårdsinsatser för sina
                medarbetare. Vårt systemstöd gör det enkelt att arbeta
                strategiskt, systematiskt och målgruppsanpassat
              </p>
              <p className="buttonInfo">Tryck här</p>
            </NavLink>
          </div>
        </div>
      </div>

      <div className="g-card">
        <div className="card-container">
          <div className="card-front-2">
            <img className="picture" src={Login}></img>
            <div className="rubrik">Enkel registrering</div>
            <div className="text">Kontakta oss...</div>
          </div>

          <div className="card-back-2">
            <NavLink
              className="button-container"
              to="/contact"
              activeClassName="isActive"
            >
              <p className="buttonInfo">Tryck här</p>
            </NavLink>
          </div>
        </div>
      </div>

      <div className="g-card">
        <div className="card-container">
          <div className="card-front-3">
            <img className="picture" src={SaveMoney}></img>
            <div className="rubrik">Erbjudande</div>
            <div className="text"></div>
          </div>

          <div className="card-back-3">
            <NavLink
              className="button-container"
              to="/pricing"
              activeClassName="isActive"
            >
              <p className="buttonInfo">Tryck här</p>
            </NavLink>
          </div>
        </div>
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
      <div id="column-2-content">
        <div id="Content-button-1">
          <HoverButton
            text="Alla medarbetare svarar på 32 frågor som rör hälsan 
            efter att vi skickat ut en länk till respektive mailadress."
          />
        </div>
        <div id="Content-button-3">
          <HoverButton
            text="Direkt  efter när medarbetarna svarat på sina 
        frågor kommer det åtgärdsförslag till de man ska börja jobba med 
        direkt.Där man har svarat och ligger lägst, Små enkla tips tex börja
         ät en bra frukost , hoppa av bussen en hållplats tidigare, parkera 
         bilen långt bort från ingången eller säg hej till en kollega man gillar."
          />
        </div>
      </div>
      <div id="Content-button-2">
        <HoverButton
          text="När alla svarat på frågorna får, chefen, 
          HR eller ledning direkt rapporter till sig."
        />
      </div>
      <div id="Content-button-4">
        <HoverButton
          text="Utefter vad kartläggningen visar i rapporterna blir 
          beslutet enklare när nuläget synliggörs."
        />
      </div>
    </div>
  );
};

export default Home;
