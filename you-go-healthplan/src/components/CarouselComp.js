import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import "../styling/carouselcomp.css";
import SliderComponent from "../components/SliderComp";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 900,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 5000,
      cssEase: "linear",
      pauseOnHover: true,
      swipeToSlide: false,
    };
    return (
      <div>
        <Slider {...settings}>
          <div id="firstSlide">
            <h1>Hejsan!</h1>
            <h3>Kontaka oss</h3>
          </div>
          <div id="secondSlide">
            <h1>
              Räkna ut hur mycket ert företag förlorar på korttidsfrånvaro
            </h1>
            <h3>Vi hjälper företag sänka sin sjukfrånvaro, spara pengar!</h3>
            <SliderComponent />
          </div>
          <div id="thirdSlide">
            <h1>Köpköp!</h1>
            <h3>Kolla våra priser</h3>
          </div>
          <div id="forthSlide">
            <h1>Varför?</h1>
            <h3>Hur jobbar vi?</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
