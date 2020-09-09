import React from "react";
import "../styling/theService.css";
import image from "../images/service.png";
import HeaderComponent from "../components/HeaderComp";
import FotterComponent from "../components/FooterComp";

const Service = () => {
  return (
    <div>
      <div id="service-header">
        <HeaderComponent />
        <h1 id="service-header-title">Vår tjänst</h1>
        <h3 id="service-header-sub-title">
          Osäker på vad vi har att erbjuda? Få en klarare bild av vår tjänst!
        </h3>
        <hr id="service-hr" />
      </div>

      <div className="service-left-box">
        <div className="service-left-small-box">
          <h1 className="service-title">Mät</h1>
          <p className="service-text">
            4 gånger om året kommer den anställda gå igenom ett formulär för att
            mäta dess hälsa. <br />
            <br />
            - Enkelt och anonymt.
            <br />
            - Evidens-och forskningsbaserade frågor.
            <br />
            - Frågor om fysisk, psykisk och socialt välbefinnande.
            <br />
            - Mätningen ger kännedom kring medarbetarens välbefinnande i nutid.
            <br />
            <br />
            <br />
            Direkt efter avslutad undersökning får medarbetaren upp sitt
            resultat med enkla individanpassade åtgärdsförslag för ökad hälsa.
          </p>
        </div>
        <div className="service-right-small-box">
          <img
            className="service-image"
            src="https://images.pexels.com/photos/669616/pexels-photo-669616.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          />
        </div>
      </div>

      <div className="service-right-box">
        <div className="service-left-small-box">
          <img className="service-image" src={image} />
        </div>
        <div className="service-right-small-box">
          <h1 className="service-title">Analysera</h1>
          <p className="service-text">
            Analysen av mätningen ger individuella insikter i områden med
            förbättringspotential för medarbetaren och en helhetsbild för
            organisationen. <br /> <br /> Via analysen i YouGo Analys, som är
            vårt rapport och analys verktyg, vägleds du som arbetsgivare om var
            rätt resurser och hälsoinsatser bör placeras för att skapa ROI.
          </p>
        </div>
      </div>

      <div className="service-left-box">
        <div className="service-left-small-box">
          <h1 className="service-title">Planera</h1>
          <p className="service-text">
            Medarbetaren engageras i olika åtgärdsförslag utifrån sitt egna
            resultat på vad de själva har möjligheter att utveckla. <br />
            <br />
            - Direkt resultat till medarbetaren
            <br />
            - Digitala hälsoprogram till medarbetarna
            <br />
            - Hemmaträningsfilmer
            <br />
            - Receptförslag
            <br />
            - Mindfulnesstips
            <br />
          </p>
        </div>
        <div className="service-right-small-box">
          <img
            className="service-image"
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          />
        </div>
      </div>

      <div className="service-right-box">
        <div className="service-left-small-box">
          <img
            className="service-image"
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          />
        </div>
        <div className="service-right-small-box">
          <h1 className="service-title">Agera och följ upp</h1>
          <p className="service-text">
            Utefter helhetsbilden och insikter av organisationens välmående
            tydliggörs vad som är viktigast att arbeta med i det organisatoriska
            agerandet.
            <br />
            Nå de som verkligen behöver det. Via vårt smarta verktyget kan
            riskgrupper nås med effektiva och individanpassade åtgärder för
            önskat resultat.
            <br />
            Var fjärde månad görs en ny mätning för att följa upp utvecklingen
            och se effekterna av agerandet.
          </p>
        </div>
      </div>
      <br />
      <br />
      <FotterComponent />
    </div>
  );
};

export default Service;
