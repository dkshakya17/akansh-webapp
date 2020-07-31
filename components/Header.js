import React from "react";
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from 'next/link'


const Header = () => (
  <div className="site-top">
                  <div className="topbar-transparent" id="top-bar">
                        <div className="container">
                              <div className="row">
                                    <div className="col-lg-9 col-md-9 col-sm-12">
                                          <ul className="top-info">
                                                <li><span className="info-icon"><i className="icon icon-phone3"></i></span>
                                                      <div className="info-wrapper">
                                                            <p className="info-title">(+91) 8285580121</p>
                                                      </div>
                                                </li>
                                                <li><span className="info-icon"><i className="icon icon-envelope"></i></span>
                                                      <div className="info-wrapper">
                                                            <p className="info-title">info@akanshcosnulting.com</p>
                                                      </div>
                                                </li>
                                                <li className="last"><span className="info-icon"><i className="icon icon-map-marker2"></i></span>
                                                      <div className="info-wrapper">
                                                            <p className="info-title">605 A Esteem Emblem, Ecity
                                                                  Bengaluru-560100</p>
                                                      </div>
                                                </li>
                                          </ul>
                                         
                                    </div>
                                  
                                    <div className="col-lg-3 col-md-3 col-sm-12 text-lg-right text-md-center">
                                          <ul className="top-social">
                                                <li>
                                                      <a title="Facebook" href="https://www.facebook.com/akanshconsulting/"
                                                            target="_blank">
                                                            <span className="social-icon"><i className="fa fa-facebook"></i></span>
                                                      </a>
                                                      <a title="Skype" href="telto:live:info_1097792" target="_blank">
                                                            <span className="social-icon"><i className="fa fa-skype"></i></span>
                                                      </a>
                                                      <a title="Linkdin" href="https://www.linkedin.com/company/akansh-consulting-pvt-ltd/about"
                                                            target="_blank">
                                                            <span className="social-icon"><i className="fa fa-linkedin"></i></span>
                                                      </a>
                                                      <a title="instagram" href="https://www.instagram.com/akansh_consulting"
                                                            target="_blank">
                                                            <span className="social-icon"><i className="fa fa-instagram"></i></span>
                                                      </a>
                                                </li>
                                               
                                          </ul>
                                        
                                    </div>
                                   
                              </div>
                             
                        </div>
                    
                  </div>
                 

                  <header className="header-standard header-boxed header-light" id="header">
                        <div className="container">
                              <div className="site-nav-inner">
                                    <nav className="navbar navbar-expand-lg">
                                          <div className="navbar-brand navbar-header">
                                                <div className="logo">
                                                      <a href="index.html">
                                                            <img src="images/logo-dark.png" alt=""/>
                                                      </a>
                                                </div>
                                              
                                          </div>
                                         
                                          <button className="navbar-toggler" type="button" data-toggle="collapse"
                                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                                aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"><i
                                                            className="icon icon-menu"></i></span></button>
                                          
                                          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                                                <ul className="navbar-nav">
                                                      <li className="nav-item dropdown"><a className="nav-link" href="index.html">Home</a></li>
                                                      <li className="nav-item dropdown"><a className="nav-link" href="about.html">About
                                                                  Us</a></li>
                                                      
                                                      <li className="nav-item dropdown"><a className="nav-link" href="#"
                                                                  data-toggle="dropdown">Our Services<i className="fa fa-angle-down"></i></a>
                                                            <ul className="dropdown-menu" role="menu">
                                                                  <li><a href="#">Web & App Development</a></li>
                                                                  <li><a href="#">IT Recruitment</a></li>
                                                                  <li><a href="#">Digital Marketing</a></li>
                                                                  <li><a href="#"> UI/UX & Graphic Designing</a></li>
                                                            </ul>
                                                      </li>

                                                      <li className="nav-item dropdown"><a className="nav-link" href="career.html">Career</a></li>
                                                      <li className="nav-item dropdown"><a className="nav-link" href="contact.html">Contact</a></li>
                                                </ul>
                                                
                                          </div>
                                    </nav>
                                    
                                  
                                    <div className="search-block">
                                          <input className="form-control" type="text" placeholder="Search"/><span className="search-close">×</span>
                                    </div>
                                 
                              </div>
                             
                        </div>
                        
                  </header>
               
            </div>
);

export default Header;