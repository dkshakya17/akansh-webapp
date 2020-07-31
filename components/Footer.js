import React, { useState, Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const Footer = () => (
  <div className="main_footer" style={footerpath}>
    <Container>
      <Row>
        <Col md={4} xs={12}>
          <div className="cmpny_info">
            <img src="/logo.svg" />
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={8} xs={12}>
          <div className="link_list">
            <Row>
              <Col md={3} xs={6}>
                <h3>Links</h3>
                <ul className="footmenu">
                  <li>
                    <a onClick={() => Router.push("/")}>About Us</a>
                  </li>
                  <li>
                    <a onClick={() => Router.push("/")}>Success stories</a>
                  </li>
                  <li>
                    <a onClick={() => Router.push("/")}>Contact</a>
                  </li>
                  <li>
                    <a onClick={() => Router.push("/")}>Blog</a>
                  </li>
                </ul>
              </Col>
              <Col md={3} xs={6}>
                <h3>Destinations</h3>
                <ul className="footmenu">
                  <li>
                    <a onClick={() => Router.push("/")}>Palma Transfer</a>
                  </li>
                  <li>
                    <a onClick={() => Router.push("/")}>Majorca Transfer</a>
                  </li>
                  <li>
                    <a onClick={() => Router.push("/")}>Mallorca Transfer</a>
                  </li>
                </ul>
              </Col>
              <Col md={6} xs={12}>
                <h3>Contact Us</h3>

                <ul className="footmenu">
                  <li>
                    <a href="http://help.cashfree.com/">
                      <img src="/icons/map.svg" />
                      07611 Palma de Mallorca,
                      <br /> Islas Baleares Aeropuerto <br />
                      de Palma de Mallorca
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cashfree.com/roundtable">
                      <img src="/icons/phone.svg" />
                      +34 871 15 38 66
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
        </Col>
        <Col md={4} xs={12}>
          <div className="link_list map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3075.1537159782106!2d2.6545999151911164!3d39.578685879471344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x129793be81755f7b%3A0x360552186e09899b!2s89%20Transfers%20%7C%20Palma%20Airport%20Transfers%20%26%20Mallorca%20Transfers!5e0!3m2!1sen!2sin!4v1589218797538!5m2!1sen!2sin"
              width="358"
              height="240"
              frameborder="0"
              className="mapstyle"
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
    <div className="bootom_footer">
      <Container>
        <Row>
          <Col md={6} xs={12}>
            <div className="bootom_content">
              <p>© 2020 All Rights Reserved.</p>
            </div>
          </Col>
          <Col md={6} xs={12}>
            <ul className="bottom_nav">
              <li>
                <a onClick={() => Router.push("/")}>Terms & Conditions</a>
              </li>
              <li>
                <a onClick={() => Router.push("/")}>Privacy Policy</a>
              </li>
              <li className="social_links">
                <a onClick={() => Router.push("/")}><img src="/icons/fb.svg" /></a>
                <a onClick={() => Router.push("/")}><img src="/icons/insta.svg" /></a>
                <a onClick={() => Router.push("/")}><img src="/icons/youtube.svg" /></a>
                <a onClick={() => Router.push("/")}><img src="/icons/twitter.svg" /></a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  </div>
);

export default Footer;
