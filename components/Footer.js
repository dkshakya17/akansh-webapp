import React, { useState, Component } from "react";

const footerStyle = {
  backgroundImage:`url("images/footer-bg.jpg")`
};

const Footer = () => (
  <>
    <footer class="footer" id="footer">
      <div class="footer-top">
        <div class="container">
          <div class="footer-top-bg row">
            <div class="col-lg-4 footer-box"><i class="icon icon-map-marker2"></i>
              <div class="footer-box-content">
                <h3>Head Office</h3>
                <p>605 A Esteem Emblem, Ecity Bengaluru-560100</p>
              </div>
            </div>

            <div class="col-lg-4 footer-box"><i class="icon icon-phone3"></i>
              <div class="footer-box-content">
                <h3>Call Us</h3>
                <p>(+91) 8285580121</p>
              </div>
            </div>

            <div class="col-lg-4 footer-box"><i class="icon icon-envelope"></i>
              <div class="footer-box-content">
                <h3>Mail Us</h3>
                <p>info@akanshcosnulting.com</p>
              </div>
            </div>

          </div>

        </div>

      </div>

      <div class="footer-main bg-overlay" style={footerStyle}>
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-12 footer-widget footer-about">
              <div class="footer-logo">
                <a href="index.html">
                  <img src="images/footer-logo.png" alt="" />
                </a>
              </div>
              <p>Akansh Consulting is an IT consulting company focusing on efficient use of
              intenet and web technologies in business. We have helped several
                                                budding entrepreneurs in establishing their business online.</p>
              <div class="footer-social">
                <ul>
                  <li><a href="https://www.facebook.com/akanshconsulting/" target="_blank"><i
                    class="fa fa-facebook"></i></a></li>
                  <li><a href="telto:live:info_1097792"><i class="fa fa-skype"></i></a></li>

                  <li><a href=""><i class="fa fa-linkedin"></i></a></li>
                  <li><a href="https://www.instagram.com/akansh_consulting/?hl=en"
                    target="_blank"><i class="fa fa-instagram"></i></a></li>
                </ul>
              </div>

            </div>

            <div class="col-lg-4 col-md-12 footer-widget">
              <h3 class="widget-title">Useful Links</h3>
              <ul class="list-dash">
                <li><a href="about.html">About Us</a></li>
                <li><a href="#">Our Services</a></li>
                <li><a href="career.html">Career</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            <div class="col-lg-4 col-md-12W footer-widget">
              <h3 class="widget-title">Subscribe</h3>
              <div class="newsletter-introtext">Don’t miss to subscribe to our new feeds,
                                                kindly fill the form below.</div>
              <form class="newsletter-form" id="newsletter-form" action="#" method="post">
                <div class="form-group">
                  <input class="form-control form-control-lg" id="newsletter-form-email"
                    type="email" name="email" placeholder="Email Address"
                    />
                    <button class="btn btn-primary"><i class="fa fa-paper-plane"></i></button>
                                                </div>
                                          </form>
                                    </div>
            </div>
          </div>
        </div>
       
        <div class="copyright">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-md-12">
                <div class="copyright-info"><span>Copyright © 2019 Akansh Consulting. All
                                                      Rights Reserved.</span></div>
              </div>
              <div class="col-lg-6 col-md-12">
                <div class="footer-menu">
                  <ul class="nav unstyled">
                    <li><a href="about.html">About</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Term</a></li>
                    <li><a href="career.html">Career</a></li>
                    <li><a href="contact.html">Contact</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        </footer>

      <div class="back-to-top affix" id="back-to-top" data-spy="affix" data-offset-top="10">
        <button class="btn btn-primary" title="Back to Top"><i class="fa fa-angle-double-up"/>
        </button>
      </div>
     
    </>
 
);

export default Footer;
