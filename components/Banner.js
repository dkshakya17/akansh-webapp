import React from "react";
import Carousel from 'react-bootstrap/Carousel'


const Banner = () => (
  <Carousel className="main_banner">
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="images/slider/bg1.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <div className="container">
          <div className="slider-content text-left">
            <div className="col-md-12">
              <h2 className="slide-title title-light">Your future is created by</h2>
              <h3 className="slide-sub-title">What you do today</h3>
              <p className="slider-description lead">Nobody’s more committed to connecting you with the exceptional <br /> top talents with the
              right fit for your business than us.</p>
              <p><a className="slider btn btn-primary" href="#">Our Services</a><a className="slider btn btn-border"
                href="contact.html">Contact Us</a></p>
            </div>
          </div>
        </div>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="images/slider/bg2.jpg"
        alt="Third slide"
      />

      <Carousel.Caption>
        <div className="container">
          <div className="slider-content text-center">
            <div className="col-md-12">
              <h3 className="slide-sub-title">We provide solutions to<br />grow your business</h3>
              <p><a className="slider btn btn-primary" href="#">Our Services</a><a className="slider btn btn-border"
                href="contact.html">Contact Us</a></p>
            </div>

          </div>

        </div>

      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="images/slider/bg3.jpg"
        alt="Third slide"
      />

      <Carousel.Caption>
        <div className="container">
          <div className="slider-content text-right">
            <div className="col-md-12">
              <h2 className="slide-title title-light">Your future is created by</h2>
              <h3 className="slide-sub-title">We care about your Business</h3>
              <p className="slider-description lead">Nobody’s more committed to connecting you with the exceptional <br /> top talents with the right fit for your business than us.</p>
              <p><a className="slider btn btn-primary" href="#">Our Services</a><a className="slider btn btn-border"
                href="contact.html">Contact Us</a></p>
            </div>

          </div>

        </div>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export default Banner;