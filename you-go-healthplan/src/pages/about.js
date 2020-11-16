import React from "react";
import "../styling/about.css";
import HeaderComponent from "../components/HeaderComp";
import MultiCarouselComponent from "../components/MultiCarouselComp";
import FooterComponent from "../components/FooterComp";
import Partners from "../data/partnersAndCustomers.json";

import TextDataAboutUs from "../data/textAboutPage.js";
import images from "../data/images.js";

const newLineText = (text) => {
  return text.split("\n").map((str) => <p>{str}</p>);
};

const About = () => {
  return (
    <div>
      <div id="headerPicAbout">
        <header>
          <HeaderComponent />
          <h1 id="about-header-title">{TextDataAboutUs.pageTitle}</h1>
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
      <img className="about-images" src={images[0].aboutFirst} />
      <div id="globalGoals-right" className="pic-to-right-text">
        <p className="rubrikAbout">
          {
            TextDataAboutUs.SustainableDevelopment[0]
              .SustainableDevelopmentTitle
          }
        </p>
        <p className="textAbout">
          {TextDataAboutUs.SustainableDevelopment[0].SustainableDevelopmentText}
        </p>
      </div>
    </div>
  );
};

const Philosophy = () => {
  return (
    <div className="pic-to-left">
      <div id="philosophydiv-big" className="pic-to-right-text">
        <p className="rubrikAbout">
          {" "}
          {TextDataAboutUs.YouGosVision[0].YouGosVisionTitle}{" "}
        </p>
        <p className="textAbout">
          {newLineText(TextDataAboutUs.YouGosVision[0].YouGosVisionText)}
        </p>
      </div>
      <img
        className="about-images"
        id="big-screen-pic"
        src={images[0].aboutSecond}
      />
      <img
        className="about-images"
        id="small-screen-pic"
        src={images[0].aboutSecond}
      />
      <div id="philosophydiv-small" className="pic-to-right-text">
        <p className="rubrikAbout">
          {" "}
          {TextDataAboutUs.YouGosVision[0].YouGosVisionTitle}{" "}
        </p>
        <p className="textAbout">
          {TextDataAboutUs.YouGosVision[0].YouGosVisionText}
        </p>
      </div>
    </div>
  );
};

export default About;
