import React from "react";
import "../styling/theService.css";
import image from "../images/service.png";
import HeaderComponent from "../components/HeaderComp";
import FotterComponent from "../components/FooterComp";
import SliderComponent from "../components/SliderComp";

const Service = () => {
  return (
    <div>
      <HeaderComponent />

      <div id="service-header">
        <SliderComponent />
      </div>

      <FotterComponent />
    </div>
  );
};

export default Service;
