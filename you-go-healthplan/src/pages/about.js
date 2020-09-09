import React from "react";
import "../styling/about.css";
import DreamBigLogga from "../images/dream-big-logga.jpg";

import HeaderComponent from "../components/HeaderComp";
import FooterComponent from "../components/FooterComp";

const About = () => {
  return (
    <div>
      <div id="headerPicAbout">
        <header>
          <HeaderComponent />
          <h1 id="blog-header-title">About</h1>
        </header>
      </div>

      <div>{GlobalGoals()}</div>
      <div>{DreamBig()}</div>
      <div>{Philosophy()}</div>
      <div>{MeetYouGo()}</div>
    </div>
  );
};

const GlobalGoals = () => {
  return (
    <div id="globalGoals">
      <p className="rubrikAbout">
        Vår tjänst stöttar de Globala målen för en hållbar utveckling.
      </p>
      <p className="textAbout">
        Nr 3 God hälsa är en grundläggande förutsättning för människors
        möjlighet att nå sin fulla potential och att bidra till samhällets
        utveckling. Människors hälsa påverkas av ekonomiska, ekologiska och
        sociala faktorer och mål 3 inkluderar alla dimensioner och människor i
        alla åldrar. Under de senaste decennierna har stora framsteg gjorts för
        att förbättra människors hälsa globalt, till exempel så har
        barndödligheten minskat med 50% sedan 1990. Investeringar i hälsa genom
        förebyggande insatser och modern och effektiv vård för alla gynnar
        samhällets utveckling i stort och skapar förutsättningar för människors
        grundläggande rättigheter till välbefinnande.
      </p>
    </div>
  );
};

const DreamBig = () => {
  return (
    <div id="dreamBig">
      <p className="rubrikAbout">Vinnare av Dream Big innovation race</p>

      <p className="textAbout">
        Motivering Med en tydlig ambition att göra Sverige friskare har teamet
        hittat en viktig nisch mellan gränslandet mellan att stötta individer
        till ett hälsosammare liv och ge företag verktyg att medvetet stötta
        resurser mot rätt hälsosatsningar. /Lars Kry, CEO, Sigma IT Consulting
      </p>
      <img id="DreamBigLogga" src={DreamBigLogga} alt="DreamBig"></img>
    </div>
  );
};

const Philosophy = () => {
  return (
    <div id="philosophydiv">
      <p className="textAbout">Humankapitalet -Den viktigaste resursen</p>
      <p className="rubrikAbout"> Vår Filosofi </p>

      <p className="textAbout">
        Vi arbetar proaktivt för att tidigt fånga upp signaler på ohälsa. Alla
        företag är olika. Vi tar reda på vilka åtgärder just ER organisation
        behöver. Vår styrka är att nå de medarbetare som är mest ohälsosamma
        inom olika kategorierna som rör hälsa. Forskningen visar att medarbetare
        behöver må bra för att göra ett gott jobb och leverera önskat resultat.
      </p>
    </div>
  );
};

const MeetYouGo = () => {
  return (
    <div>
      <div id="meetYouGodiv">
        <p className="rubrikAbout">Möt YouGo</p>

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
      <FooterComponent />
    </div>
  );
};

export default About;
