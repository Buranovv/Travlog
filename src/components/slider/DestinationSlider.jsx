import React, { Component } from "react";
import Slider from "react-slick";

import "./style.scss";
import DestinationCard from "../card/destinationCard/DestinationCard";

export default class DestinationSlider extends Component {
  render() {
    let settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1180,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            dots: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          },
        },
      ],
    };
    return (
      <div>
        <Slider {...settings} className="destinationSlider">
          <div>
            <DestinationCard
              img={"/images/des3.png"}
              title={"Paradise Beach, Bantayan Island"}
              location={"Rome, Italy"}
              price={"550.16"}
              rating={"4.8"}
            />
          </div>
          <div>
            <DestinationCard
              img={"/images/des2.png"}
              title={"Ocean with full of Colors"}
              location={"Maldives"}
              price={"20.99"}
              rating={"4.5"}
            />
          </div>
          <div>
            <DestinationCard
              img={"/images/des1.png"}
              title={"Mountain View, Above the cloud"}
              location={"United Arab Emeries "}
              price={"150.99"}
              rating={"5.0"}
            />
          </div>
          <div>
            <DestinationCard
              img={"/images/des3.png"}
              title={"Paradise Beach, Bantayan Island"}
              location={"Rome, Italy"}
              price={"550.16"}
              rating={"4.8"}
            />
          </div>
          <div>
            <DestinationCard
              img={"/images/des2.png"}
              title={"Ocean with full of Colors"}
              location={"Maldives"}
              price={"20.99"}
              rating={"4.5"}
            />
          </div>
          <div>
            <DestinationCard
              img={"/images/des1.png"}
              title={"Mountain View, Above the cloud"}
              location={"United Arab Emeries "}
              price={"150.99"}
              rating={"5.0"}
            />
          </div>
        </Slider>
      </div>
    );
  }
}
