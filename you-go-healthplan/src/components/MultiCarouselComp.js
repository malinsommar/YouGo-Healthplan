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
        <h1>{this.props.title}</h1>
        <Slider {...settings}>{getImages()}</Slider>
      </div>
    );
  }
}
