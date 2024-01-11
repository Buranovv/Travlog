import React, { Component } from "react";
import Slider from "react-slick";
import TestimonalCard from "../../card/testimonalCard/TestimonalCard";

import "./style1.scss";

export default class TestimonSlider extends Component {
  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <Slider {...settings} className="testimonSlider">
        <div>
          <TestimonalCard />
        </div>
        <div>
          <TestimonalCard />
        </div>
        <div>
          <TestimonalCard />
        </div>
      </Slider>
    );
  }
}
