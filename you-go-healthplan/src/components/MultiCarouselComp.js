import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import "../styling/multicarouselcomp.css";
import SliderComponent from "../components/SliderComp";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 800,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3500,
      cssEase: "linear",
      pauseOnHover: false,
    };

    const settingsSmall = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 800,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3500,
      cssEase: "linear",
      pauseOnHover: false,
    };

    const getImages = () => {
      return this.props.list.map((item, index) => {
        return (
          <div className="multiCarouselDiv" key={index}>
            <div className="middleDiv">
              <a href={item.link}>
                <img className="multiCarouselImg" src={item.image} />
              </a>
            </div>
          </div>
        );
      });
    };

    return (
      <div>
        <div id="sliderBig">
          <h2 id="multicarouselTitle">{this.props.title}</h2>
          <i id="multicarouselSubTitle">{this.props.subTitle}</i>
          <Slider {...settings}>{getImages()}</Slider>
        </div>
        <div id="sliderSmall">
          <h2 id="multicarouselTitle">{this.props.title}</h2>
          <i id="multicarouselSubTitle">{this.props.subTitle}</i>
          <Slider {...settingsSmall}>{getImages()}</Slider>
        </div>
      </div>
    );
  }
}
