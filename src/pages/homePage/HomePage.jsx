import { Fragment } from "react";

import "./homePage.scss";
import ServicesCard from "../../components/card/servicesCard/ServicesCard";
import DestinationSlider from "../../components/slider/DestinationSlider";
import LocationCard from "../../components/card/locationCard/LocationCard";
import FeaturesCard from "../../components/card/featuresCard/FeaturesCard";
import TestimonSlider from "../../components/slider/testimonSlider/TestimonSlider";

const HomePage = () => {
  return (
    <Fragment>
      <div className="container">
        <section className="hero">
          <div className="hero__content">
            <button className="hero__explore">
              Explore th world{" "}
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.7044 2.01898C8.034 2.01898 7.46373 2.4848 7.30365 3.11265H12.6863C12.5263 2.4848 11.956 2.01898 11.2856 2.01898H8.7044ZM14.2071 3.11264H16.1881C18.2891 3.11264 20 4.84428 20 6.97085C20 6.97085 19.94 7.8711 19.92 9.1248C19.918 9.224 19.8699 9.3212 19.7909 9.38C19.3097 9.7354 18.8694 10.0291 18.8294 10.0493C17.1686 11.1632 15.2386 11.947 13.1826 12.3369C13.0485 12.3632 12.9165 12.2934 12.8484 12.1739C12.2721 11.1754 11.1956 10.5253 9.995 10.5253C8.8024 10.5253 7.71586 11.1683 7.12256 12.1678C7.05353 12.2853 6.92346 12.3531 6.7904 12.3278C4.75138 11.9369 2.82141 11.1541 1.17059 10.0594L0.21011 9.3911C0.13007 9.3405 0.08004 9.2493 0.08004 9.1481C0.05003 8.6316 0 6.97085 0 6.97085C0 4.84428 1.71086 3.11264 3.81191 3.11264H5.78289C5.97299 1.6443 7.2036 0.5 8.7044 0.5H11.2856C12.7864 0.5 14.017 1.6443 14.2071 3.11264ZM19.6598 11.3152L19.6198 11.3355C17.5988 12.6924 15.1676 13.5937 12.6163 13.9684C12.2561 14.019 11.8959 13.7861 11.7959 13.4216C11.5758 12.5912 10.8654 12.0443 10.015 12.0443H10.005H9.985C9.1346 12.0443 8.4242 12.5912 8.2041 13.4216C8.1041 13.7861 7.74387 14.019 7.38369 13.9684C4.83242 13.5937 2.4012 12.6924 0.38019 11.3355C0.37019 11.3254 0.27014 11.2646 0.1901 11.3152C0.10005 11.3659 0.10005 11.4874 0.10005 11.4874L0.17009 16.6519C0.17009 18.7785 1.87094 20.5 3.97199 20.5H16.018C18.1191 20.5 19.8199 18.7785 19.8199 16.6519L19.9 11.4874C19.9 11.4874 19.9 11.3659 19.8099 11.3152C19.7599 11.2849 19.6999 11.295 19.6598 11.3152ZM10.7454 15.5583C10.7454 15.9836 10.4152 16.3177 9.995 16.3177C9.5848 16.3177 9.2446 15.9836 9.2446 15.5583V14.2519C9.2446 13.8367 9.5848 13.4924 9.995 13.4924C10.4152 13.4924 10.7454 13.8367 10.7454 14.2519V15.5583Z"
                  fill="#F85E9F"
                />
              </svg>
            </button>
            <h1>
              Travel <span>top destination</span> of the world
            </h1>
            <p>
              We always make our customer happy by providing as many choices as
              possible
            </p>
            <div className="hero__btns">
              <button className="get">Get Started</button>
              <button className="watch">Watch Demo</button>
            </div>
          </div>
          <div className="hero__img">
            <img src="/images/hero.svg" width="700" height="700" alt="" />
          </div>
        </section>
        <section className="partners">
          <img src="/images/partner1.svg" alt="partner company logo" />
          <img src="/images/partner2.svg" alt="partner company logo" />
          <img src="/images/partner3.svg" alt="partner company logo" />
          <img src="/images/partner4.svg" alt="partner company logo" />
          <img src="/images/partner5.svg" alt="partner company logo" />
        </section>
        <section className="services">
          <div className="services__content">
            <h2>Services</h2>
            <p>Our top value categories for you</p>
          </div>
          <div className="cards">
            <ServicesCard
              img={"/images/destination.svg"}
              title={"Best Tour Guide"}
              text={
                "What looked like a small patch of purple grass, above five feet."
              }
            />
            <ServicesCard
              img={"/images/booking.svg"}
              title={"Easy Booking"}
              text={"Square, was moving across the sand in their direction."}
            />{" "}
            <ServicesCard
              img={"/images/cloudy.svg"}
              title={"Weather Forecast"}
              text={
                "What looked like a small patch of purple grass, above five feet."
              }
            />
          </div>
        </section>
        <section className="destination">
          <div className="destination__content">
            <div className="description">
              <h2>Top Destination</h2>
              <p>Explore top destination</p>
            </div>
          </div>
          <DestinationSlider />
        </section>
        <section className="location">
          <div className="location__img">
            <img className="dec" src="/images/dec5.png" alt="decoration" />
            <img className="dec" src="/images/dec6.png" alt="decoration" />
            <img className="dec" src="/images/dec11.png" alt="decoration" />
          </div>
          <div className="location__content">
            <h2>Travel Point</h2>
            <p className="theme">We helping you find your dream location</p>
            <p className="text">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC.
            </p>
            <div className="location__services">
              <LocationCard num={"500"} symb={"+"} title={"Holiday Package"} />
              <LocationCard num={"100"} title={"Luxury Hotel"} />
              <LocationCard num={"7"} title={"Premium Airlines"} />
              <LocationCard num={"2"} symb={"k+"} title={"Happy Customer"} />
            </div>
          </div>
        </section>
        <section className="features">
          <div className="features__content">
            <h2>Key features</h2>
            <p className="theme">We offer best services</p>
            <p className="text">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC.
            </p>
            <div className="cards">
              <FeaturesCard
                className={"orange"}
                img="/images/location-2.svg"
                title={"We offer best services"}
                text={"Lorem Ipsum is not simply random text"}
              />
              <FeaturesCard
                className={"yellow"}
                img={"/images/calendar.svg"}
                title={"Schedule your trip"}
                text={"It has roots in a piece of classical"}
              />
              <FeaturesCard
                className={"pink"}
                img={"/images/ticket.svg"}
                title={"Get discounted coupons"}
                text={"Lorem Ipsum is not simply random text"}
              />
            </div>
          </div>
          <div className="features__img">
            <img className="feat" src="/images/feat1.svg" alt="" />
            <img className="feat" src="/images/feat2.svg" alt="" />
            <img className="feat" src="/images/feat3.svg" alt="" />
            <img className="feat" src="/images/feat4.svg" alt="" />
          </div>
        </section>
        <section className="testimon">
          <h2>Testimonials</h2>
          <p className="theme">Trust our clients</p>
          <TestimonSlider />
        </section>
        <section className="subscribe">
          <h2>subscribe to our newsletter</h2>
          <p>Prepare yourself & let’s explore the beauty of the world</p>
          <form>
            <div>
              <input type="text" placeholder="Your Email" />
              <img src="/images/message.svg" alt="" />
            </div>
            <button>Subscribe</button>
          </form>
        </section>
      </div>
    </Fragment>
  );
};

export default HomePage;
