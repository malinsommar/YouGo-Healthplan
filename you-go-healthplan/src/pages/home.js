import React from "react";
import "../styling/home.css";
import { NavLink } from "react-router-dom";
import HoverButton from "../components/HoverComp";
import MultiCarouselComponent from "../components/MultiCarouselComp";
import FotterComponent from "../components/FooterComp";
import VideoHeader from "../components/VideoHeader";
import SliderComp from "../components/SliderComp";
import Customers from "../data/partnersAndCustomers.json";

import HeaderComponent from "../components/HeaderComp";

import TextDataHome from "../data/textHomePge.js";
import images from "../data/images.js";

const newLineText = (text) => {
  return text.split("\n").map((str) => <p>{str}</p>);
};

const Home = () => {
  return (
    <div>
      <HeaderComponent />
      <VideoHeader />
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
        <img className="about-images" src={images[0].firstHomeImage} />
        <div id="globalGoals-right" className="pic-to-right-text">
          <p className="rubrikAbout">
            {TextDataHome.Health[0].HealthSmartTitle}
          </p>
          <p className="textAbout">{TextDataHome.Health[0].HealthSmartText}</p>
        </div>
      </div>
      <div className="pic-to-left" id="global-goals">
        <div id="globalGoals-right" className="pic-to-right-text">
          <p className="rubrikAbout">
            {TextDataHome.Philosophy[0].OurPhilosophyTitle}
          </p>
          <p className="textAbout">
            {TextDataHome.Philosophy[0].OurPhilosophyText}
          </p>
        </div>
        <img className="about-images" src={images[0].secondHomeImage} />
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
            <img className="picture" src={images[0].homeFirstCard}></img>
            <div className="rubrik">
              {TextDataHome.FlipContainers[0].firstCardContainerFront}
            </div>
          </div>

          <div className="card-back-1">
            <p className="text">
              {newLineText(
                TextDataHome.FlipContainers[0].firstCardContainerBack
              )}
            </p>
            <NavLink
              className="button-container"
              to="/about"
              activeClassName="isActive"
            >
              <p className="buttonInfo">Tryck här</p>
            </NavLink>
          </div>
        </div>
      </div>

      <div className="g-card">
        <div className="card-container">
          <div className="card-front-2">
            <img className="picture" src={images[0].homeSecondCard}></img>
            <div className="rubrik">
              {TextDataHome.FlipContainers[0].secondCardContainerFront}
            </div>
            <div className="text"></div>
          </div>

          <div className="card-back-2">
            <p className="text">
              {TextDataHome.FlipContainers[0].secondCardContainerBack}
            </p>
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
            <img className="picture" src={images[0].homeThirdCard}></img>
            <div className="rubrik">
              {TextDataHome.FlipContainers[0].thirdCardContainerFront}
            </div>
            <div className="text"></div>
          </div>

          <div className="card-back-3">
            <p className="text">
              {TextDataHome.FlipContainers[0].thirdCardContainerBack}
            </p>
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
      <p id="firstBoxRubrik">{TextDataHome.HowWeWork[0].howWeWorkTitle}</p>
      <div id="firstBox">
        <img id="icon" src={images[0].howWeWork} alt="icon"></img>
      </div>
      <div id="column-2-content">
        <div id="Content-button-1">
          <HoverButton
            text={TextDataHome.HowWeWork[0].textDigitalHealthCheck}
          />
        </div>
        <div id="Content-button-3">
          <HoverButton
            text={TextDataHome.HowWeWork[0].textIndividualizedMeasures}
          />
        </div>
      </div>
      <div id="Content-button-2">
        <HoverButton text={TextDataHome.HowWeWork[0].textHealthreports} />
      </div>
      <div id="Content-button-4">
        <HoverButton text={TextDataHome.HowWeWork[0].textActWiththeRightBet} />
      </div>
    </div>
  );
};

export default Home;
