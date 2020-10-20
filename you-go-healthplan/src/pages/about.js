import React from "react";
import "../styling/about.css";
import DreamBigLogga from "../images/dream-big-logga.jpg";

import HeaderComponent from "../components/HeaderComp";
import MultiCarouselComponent from "../components/MultiCarouselComp";
import FooterComponent from "../components/FooterComp";

import bluecall from "../images/bluecall.png";
import actiway from "../images/actiway.png";
import bikelease from "../images/bikelease.png";
import casall from "../images/casall.png";
import viktväktarna from "../images/viktväktarna.png";
import flexmassage from "../images/flexmassage.png";
import icebug from "../images/icebug.png";
import livingpepole from "../images/livingpepole.png";
import nordicwellness from "../images/nordicwellness.png";
import pep from "../images/pep.png";
import k from "../images/29k.png";
import samtalscoach from "../images/samtalsCoach.png";

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
      <div>{MeetYouGo()}</div>
      <MultiCarouselComponent title="Sammarbetspartners" list={partnerList} />

      <FooterComponent />
    </div>
  );
};

const partnerList = [
  {
    image: bluecall,
    link: "https://www.bluecallapp.com/",
  },
  {
    image: actiway,
    link: "https://www.actiway.se/",
  },
  {
    image: bikelease,
    link: "https://bikelease.se/",
  },
  {
    image: casall,
    link: "https://www.casall.com/se",
  },
  {
    image: k,
    link: "https://29k.org/",
  },
  {
    image: viktväktarna,
    link: "https://www.viktvaktarna.se/se/",
  },
  {
    image: flexmassage,
    link: "https://flexmassage.se/",
  },
  {
    image: livingpepole,
    link: "http://www.livingpeople.nu/",
  },
  {
    image: nordicwellness,
    link: "https://nordicwellness.se/",
  },
  {
    image: pep,
    link: "https://generationpep.se/sv/",
  },
  {
    image: samtalscoach,
    link: "https://www.patriciawesten.se/",
  },
];

const GlobalGoals = () => {
  return (
    <div className="pic-to-left" id="global-goals">
      <img
        className="about-images"
        src={
          "https://images.unsplash.com/photo-1535515384173-d74166f26820?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        }
      />
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
/*Vår tjänst stöttar de Globala målen för en hållbar utveckling.*/

const Philosophy = () => {
  return (
    <div className="pic-to-left">
      <div id="philosophydiv-big" className="pic-to-right-text">
        <p className="rubrikAbout"> YouGo's Filosofi </p>
        <p className="textAbout">
          Vi arbetar proaktivt för att tidigt fånga upp signaler på ohälsa. Alla
          företag är olika. Vi tar reda på vilka åtgärder just ER organisation
          behöver. Vår styrka är att nå de medarbetare som är mest ohälsosamma
          inom olika kategorierna som rör hälsa. Forskningen visar att
          medarbetare behöver må bra för att göra ett gott jobb och leverera
          önskat resultat.
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
        <p className="rubrikAbout"> YouGo's Filosofi </p>
        <p className="textAbout">
          Vi arbetar proaktivt för att tidigt fånga upp signaler på ohälsa. Alla
          företag är olika. Vi tar reda på vilka åtgärder just ER organisation
          behöver. Vår styrka är att nå de medarbetare som är mest ohälsosamma
          inom olika kategorierna som rör hälsa. Forskningen visar att
          medarbetare behöver må bra för att göra ett gott jobb och leverera
          önskat resultat.
        </p>
      </div>
    </div>
  );
};

const MeetYouGo = () => {
  return (
    <div className="pic-to-left">
      <img
        className="about-images"
        src={
          "https://images.unsplash.com/photo-1458501534264-7d326fa0ca04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        }
      />
      <div id="meetYouGodiv" className="pic-to-right-text">
        <p className="rubrikAbout">YouGo's bakgrund</p>

        <p className="textAbout">
          Med våra tidigare erfarenheter som egenföretagare och ledare vet vi
          vikten av friska medarbetare och vilken positiv effekt det är när
          medarbetarna trivs, är friska, blir sedda och har en god gemenskap.
          När vi blickar tillbaka på våra tidigare år inom arbetslivet, som
          många gånger varit otroligt tuffa, med stress, höga krav och
          förväntningar är vi överens om att vi klarat av att hålla oss friska
          pga att vi hela tiden gjort hälsosamma val och hållit igång med olika
          typer av aktiviteter. Vi är övertygade om att friska medarbetare är
          framgångsfaktorn för trivsamma, attraktiva, hållbara och lönsamma
          arbetsplatser. Detta mynnade ut i vår affärsidé om att göra hälsa
          mätbar där vi erbjuder företagen en analysdel och medarbetarna en
          hälsoportal med enkla individanpassade åtgärder utefter vad nuläget
          visar. Vi vill visa att det lönar sig att arbeta hälsofrämjande, om
          man gör det på rätt sätt.{" "}
        </p>
      </div>
    </div>
  );
};

export default About;
