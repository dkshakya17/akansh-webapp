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
        <div class="container">
          <div class="slider-content text-left">
            <div class="col-md-12">
              <h2 class="slide-title title-light">Your future is created by</h2>
              <h3 class="slide-sub-title">What you do today</h3>
              <p class="slider-description lead">Nobody’s more committed to connecting you with the exceptional <br /> top talents with the
              right fit for your business than us.</p>
              <p><a class="slider btn btn-primary" href="#">Our Services</a><a class="slider btn btn-border"
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
        <div class="container">
          <div class="slider-content text-center">
            <div class="col-md-12">
              <h3 class="slide-sub-title">We provide solutions to<br />grow your business</h3>
              <p><a class="slider btn btn-primary" href="#">Our Services</a><a class="slider btn btn-border"
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
        <div class="container">
          <div class="slider-content text-right">
            <div class="col-md-12">
              <h2 class="slide-title title-light">Your future is created by</h2>
              <h3 class="slide-sub-title">We care about your Business</h3>
              <p class="slider-description lead">Nobody’s more committed to connecting you with the exceptional <br /> top talents with the right fit for your business than us.</p>
              <p><a class="slider btn btn-primary" href="#">Our Services</a><a class="slider btn btn-border"
                href="contact.html">Contact Us</a></p>
            </div>

          </div>

        </div>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export default Banner;