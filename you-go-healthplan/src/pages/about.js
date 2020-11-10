import React from "react";
import "../styling/about.css";
import treHälsa from "../images/hållbarhetsmålTreHälsa.jpg";
import HeaderComponent from "../components/HeaderComp";
import MultiCarouselComponent from "../components/MultiCarouselComp";
import FooterComponent from "../components/FooterComp";
import Partners from "../data/partnersAndCustomers.json";

const About = () => {
  return (
    <div>
      <div id="headerPicAbout">
        <header>
          <HeaderComponent />
          <h1 id="about-header-title">Om YouGo</h1>
          <hr id="about-header-hr" />
          <p id="about-header-sub-title">
            Vårt mål är att bla bla blab la blab labal balba lba lb lablablabl
            <br />
            ablab js j aodj ajao s dmadmasdm oasdsaodj dja
          </p>
        </header>
      </div>

      <div>{GlobalGoals()}</div>
      <div>{Philosophy()}</div>
      <MultiCarouselComponent
        title="Sammarbetspartners"
        list={Partners.partners}
      />

      <FooterComponent />
    </div>
  );
};

const GlobalGoals = () => {
  return (
    <div className="pic-to-left" id="global-goals">
      <img className="about-images" src={treHälsa} />
      <div id="globalGoals-right" className="pic-to-right-text">
        <p className="rubrikAbout">Hållbar utveckling</p>
        <p className="textAbout">
          Nr 3 God hälsa är en grundläggande förutsättning för människors
          möjlighet att nå sin fulla potential och att bidra till samhällets
          utveckling. Människors hälsa påverkas av ekonomiska, ekologiska och
          sociala faktorer och mål 3 inkluderar alla dimensioner och människor i
          alla åldrar. Under de senaste decennierna har stora framsteg gjorts
          för att förbättra människors hälsa globalt, till exempel så har
          barndödligheten minskat med 50% sedan 1990. Investeringar i hälsa
          genom förebyggande insatser och modern och effektiv vård för alla
          gynnar samhällets utveckling i stort och skapar förutsättningar för
          människors grundläggande rättigheter till välbefinnande.
        </p>
      </div>
    </div>
  );
};

const Philosophy = () => {
  return (
    <div className="pic-to-left">
      <div id="philosophydiv-big" className="pic-to-right-text">
        <p className="rubrikAbout"> YouGo's vision </p>
        <p className="textAbout">
          SKAPA HÅLLBARA MEDARBETARE - Det finaste ett företag kan ha.
          <br /> <br />
          Det är vårt fokus och där vet vi att vi kan göra som mest skillnad för
          såväl människor, som företag och samhället i stort.
          <br /> <br />
          Hållbara medarbetare är vår viktigaste insats i vår strävan mot att
          bidra till en hälsosam och frisk värld.
        </p>
      </div>
      <img
        className="about-images"
        id="big-screen-pic"
        src={
          "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80"
        }
      />
      <img
        className="about-images"
        id="small-screen-pic"
        src={
          "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80"
        }
      />
      <div id="philosophydiv-small" className="pic-to-right-text">
        <p className="rubrikAbout"> YouGo's vision </p>
        <p className="textAbout">
          SKAPA HÅLLBARA MEDARBETARE - Det finaste ett företag kan ha.
          <br /> <br />
          Det är vårt fokus och där vet vi att vi kan göra som mest skillnad för
          såväl människor, som företag och samhället i stort.
          <br /> <br />
          Hållbara medarbetare är vår viktigaste insats i vår strävan mot att
          bidra till en hälsosam och frisk värld.
        </p>
      </div>
    </div>
  );
};

export default About;