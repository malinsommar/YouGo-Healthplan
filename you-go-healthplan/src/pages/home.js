import React from "react";
import "../styling/home.css";
import { NavLink } from "react-router-dom";
import HoverButton from "../components/HoverComp";
import MultiCarouselComponent from "../components/MultiCarouselComp";
import FotterComponent from "../components/FooterComp";
import SliderComp from "../components/SliderComp";
import Customers from "../data/partnersAndCustomers.json";
import Circle from "../images/YouGo_4.png";
import HeaderComponent from "../components/HeaderComp";
import Login from "../images/login.png";
import Person from "../images/person.png";
import SaveMoney from "../images/testIcon.png";
import frukt from "../images/fruit.jpg";
import lindaIVatten from "../images/Lindaivattnet.jpeg";

import TextData from "../data/textHomePage.json";

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
      <div>{<SliderComp />}</div>
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
          <p className="rubrikAbout">{TextData.hälsosmartRubrik}</p>
          <p className="textAbout">{TextData.hälsosmart}</p>
        </div>
      </div>
      <div className="pic-to-left" id="global-goals">
        <div id="globalGoals-right" className="pic-to-right-text">
          <p className="rubrikAbout">{TextData.filosofiRubrik}</p>
          <p className="textAbout">{TextData.filosofi}</p>
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
            <div className="rubrik">{TextData.firstCardContainerFront}</div>
            <div className="text"></div>
          </div>

          <div className="card-back-1">
            <NavLink
              className="button-container"
              to="/about"
              activeClassName="isActive"
            >
              <p>{TextData.firstCardContainerBack}</p>
              <p className="buttonInfo">Tryck här</p>
            </NavLink>
          </div>
        </div>
      </div>

      <div className="g-card">
        <div className="card-container">
          <div className="card-front-2">
            <img className="picture" src={Login}></img>
            <div className="rubrik">{TextData.secondCardContainerFront}</div>
            <div className="text"></div>
          </div>

          <div className="card-back-2">
            <NavLink
              className="button-container"
              to="/contact"
              activeClassName="isActive"
            >
              <p>Kontakta oss...</p>
              <p className="buttonInfo">Tryck här</p>
            </NavLink>
          </div>
        </div>
      </div>

      <div className="g-card">
        <div className="card-container">
          <div className="card-front-3">
            <img className="picture" src={SaveMoney}></img>
            <div className="rubrik">{TextData.thirdCardContainerFront}</div>
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
      <p id="firstBoxRubrik">{TextData.såHärJobbarViRubrik}</p>
      <div id="firstBox">
        <img id="icon" src={Circle} alt="icon"></img>
      </div>
      <div id="column-2-content">
        <div id="Content-button-1">
          <HoverButton text={TextData.textDigitalHälsokontroll} />
        </div>
        <div id="Content-button-3">
          <HoverButton text={TextData.textIndividanpassadeÅtgärder} />
        </div>
      </div>
      <div id="Content-button-2">
        <HoverButton text={TextData.textHälsorapporter} />
      </div>
      <div id="Content-button-4">
        <HoverButton text={TextData.textAgeraMedRättInsats} />
      </div>
    </div>
  );
};

export default Home;
