import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";




const Services = () => {
  return (
    <>
      <section className="ts-about-intro" id="ts-about-intro">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="column-title title-small"><span>About us</span>Different kind of
                          IT Consulting Company</h2>
              <p>Creativity, Innovation & Breathing- to create products that please.

                          We are a Bangalore-based Digital Consulting and Technology firm, focusing on Product Development and User Experience Consulting, with Technology Services and Marketing Support.</p>
              <div className="gap-15"></div>
              <div className="row">
                <div className="col-lg-7">
                  <div className="ts-feature-box">
                    <div className="ts-feature-info">
                      <img src="images/pages/color_icon1.png" alt="" />
                      <h3 className="ts-feature-title">Best IT Consulting Brand</h3>

                    </div>
                  </div>

                </div>

              </div>

            </div>

            <div className="col-lg-6">
              <img className="img-fluid" src="images/pages/about_2.png" alt="" />
            </div>

          </div>

        </div>
      </section>

      <section className="ts-services solid-bg" id="ts-services">
        <div className="container">
          <div className="row text-left">
            <div className="col-lg-12">
              <h2 className="section-title border-title-left">Our Best Services <span className="section-title-tagline title-light">What We Do</span></h2>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="featured-tab">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item"><a className="nav-link active animated fadeIn" href="#tab_one"
                    data-toggle="tab"><span className="tab-head"><span><i className="icon icon-laptop"></i></span><span
                      className="tab-text-title">Best Web Development</span></span></a></li>

                  <li className="nav-item"><a className="nav-link animated fadeIn" href="#tab_two"
                    data-toggle="tab"><span className="tab-head"><span><i className="icon icon-loan"></i></span><span
                      className="tab-text-title">IT Recruitment</span></span></a></li>

                  <li className="nav-item"><a className="nav-link animated fadeIn" href="#tab_three"
                    data-toggle="tab"><span className="tab-head"><span><i className="icon icon-rocket"></i></span><span
                      className="tab-text-title">UI/UX Designing</span></span></a></li>

                  <li className="nav-item"><a className="nav-link animated fadeIn" href="#tab_four"
                    data-toggle="tab"><span className="tab-head"><span><i className="icon icon-consult"></i></span><span
                      className="tab-text-title">Digital Marketing</span></span></a></li>

                </ul>

                <div className="tab-content">
                  <div className="tab-pane active animated fadeInRight" id="tab_one">
                    <div className="row">
                      <div className="col-lg-4 align-self-center">
                        <div className="bg-contain-verticle tab_bg">
                          <img className="img-center img-fluid" src="images/tabs/img1.png"
                            alt="" />
                        </div>
                      </div>

                      <div className="col-lg-8">
                        <div className="tab-content-info">
                          <h3 className="tab-content-title">Building Scalable
                          & Secure Web & Applications, Portals &
                                                              Solutions For Your Business</h3>
                          <p>With the internet being all pervasive, how
                          can a business application run in
                          isolation? Akansh Consulting uses the
                          latest technologies such as Angular,
                          ReactJS,MongoDB,NodeJS,PHP, Web 2.0,
                          HTML, Joomla, WordPress, Drupal, Magento,
                          and OS Commerce to create responsive and
                          tailor-made Web & Applications for your
                          business. We leverage the dynamism of PHP
                          and combine it with database languages
                          such as MySQL, HTML, CSS, JavaScript, PHP
                          Code. We use frameworks such as ZEND,
                          Codeigniter, Laravel, Yii, and cake to
                          create products that work fluidly across
                          platforms and devices. Our experienced
                          teams are well-versed with the tight
                          deadlines and constantly-changing
                          requirements that are a part and parcel
                                                              of all Web & Application projects.</p><a
                            className="btn-light" href="#">Read More <i
                              className="fa fa-long-arrow-right"></i></a>
                        </div>

                      </div>

                    </div>

                  </div>

                  <div className="tab-pane animated fadeInRight" id="tab_two">
                    <div className="row">
                      <div className="col-lg-8">
                        <div className="tab-content-info">
                          <h3 className="tab-content-title">We provide
                          Recruitment Solutions special for Unified
                          Communications
                                                        </h3>
                          <p>Our Team members having depth knowledge of
                          above brand's Unified Communication
                          products like Call Manager, PBX, EPBX,
                          Video Conferencing, Voice mail System,
                          Operator Console, Contact Center
                          Solution, SIP Trunking, Efax Solution,
                          Instant Messaging, Skype technology.
                          Akansh Consulting a unique and and
                          flouring human resource consultancy
                          company offering best recruitment
                          solution possible, to both it and non-it
                          industries in india.
                          the organization is professionally
                          managed by people who have couple of
                          years experience across various business
                          practices.
                          We offer a wide range of customized,
                          high-quality, research-based talent
                          consulting services. We are uniquely
                          well-positioned to help address your
                          talent needs by leveraging our know-how,
                          relationships and service capabilities
                          built over years into technologies for
                          Cisco,Microsoft,Avaya,Mitel,lcatel,Polycom,Aspect,Siemens,Genesys,

                                                        </p><a className="btn-light" href="#">Read More <i
                            className="fa fa-long-arrow-right"></i></a>
                        </div>

                      </div>

                      <div className="col-lg-4 align-self-center">
                        <div className="bg-contain-verticle align-self-center tab_bg"
                        >
                          <img className="img-center img-fluid" src="images/tabs/img2.png"
                            alt="" />
                        </div>
                      </div>

                    </div>

                  </div>

                  <div className="tab-pane animated fadeInRight" id="tab_three">
                    <div className="row">
                      <div className="col-lg-4 align-self-center">
                        <div className="bg-contain-verticle tab_bg" >
                          <img className="img-center img-fluid" src="images/tabs/img3.png"
                            alt="" />
                        </div>
                      </div>

                      <div className="col-lg-8">
                        <div className="tab-content-info">
                          <h3 className="tab-content-title">We grow
                          businesses over the web and mobile by
                          transforming brands, through
                                                              click-ass User Experience</h3>
                          <p>We deliver the perfect combination of
                          usability and functionality coupled with
                          the highest quality of implementation.
                          We use human behavioural studies,
                          psychology and multiple analytical tools
                          to define what the users might like and
                          provide them with what they want. We
                          realised long ago that in today’s world,
                          you cannot define the behaviour of users
                          we have to learn to decode their
                          preferences and adapt ourselves. We try
                          to merge functionality with pleasurable
                          user experience and build marketing
                          processes around it, rather than the
                          other way around.
                                                        </p><a className="btn-light" href="#">Read More <i
                            className="fa fa-long-arrow-right"></i></a>
                        </div>

                      </div>

                    </div>

                  </div>

                  <div className="tab-pane animated fadeInRight" id="tab_four">
                    <div className="row">
                      <div className="col-lg-8">
                        <div className="tab-content-info">
                          <h3 className="tab-content-title">We Provide
                                                              Digital Marketing Solutions</h3>
                          <p>In this digital age everything is found on
                          internet with most of brick and mortar
                          businesses having their presence felt
                          online. Owners are making sure they start
                          attracting the huge potential of internet
                          users that can give their business
                          maximum return on investment (ROI).
                          Digital Marketing with right steps and
                          guidance allows your business to larger
                          audience by generating traffic from all
                          of its sources. All online web promotion
                          activities that are involved in improving
                          your business website come under Digital
                          marketing.

                          Akansh Consulting with its strong ethics
                          and professionalism offers comprehensive
                          digital marketing services for your
                          business. Our SEO teams are highly
                          experienced in converting your online
                          business into lead generating solutions.
                          White hat Techniques used at APWebWorld
                          have long term successful rate and
                          resulted in top SERP’s results for
                          clients all over the world.
                          We are one of the finest Search Engine
                          Service(SEO) provider and considered as
                          top most among various search engine
                          service provider and digital marketing
                                                              service provider.</p><a className="btn-light"
                            href="#">Read More <i className="fa fa-long-arrow-right"></i></a>
                        </div>

                      </div>

                      <div className="col-lg-4 align-self-center">
                        <div className="bg-contain-verticle tab_bg">
                          <img className="img-center img-fluid" src="images/tabs/img4.png" alt="" />
                        </div>
                      </div>

                    </div>

                  </div>

                </div>

                <div className="gap-60"></div>
                <div className="text-center"><a className="btn btn-primary" href="#"> Check More
                                      Services</a></div>
              </div>

            </div>

          </div>

        </div>

      </section>

      <section id="ts-facts-area" className="ts-facts-area-bg ts_bg bg-overlay">
        <div className="container">
          <div className="row facts-wrapper text-center">
            <div className="col-lg-3 col-md-3">
              <div className="ts-facts-bg"><span className="facts-icon"><i className="icon icon-money-1"></i></span>
                <div className="ts-facts-content">
                  <h4 className="ts-facts-num"><span className="counterUp">200</span></h4>
                  <p className="facts-desc">Projects Completed</p>
                </div>
              </div>

            </div>

            <div className="col-lg-3 col-md-3">
              <div className="ts-facts-bg"><span className="facts-icon"><i className="icon icon-invest"></i></span>
                <div className="ts-facts-content">
                  <h4 className="ts-facts-num"><span className="counterUp">30</span></h4>
                  <p className="facts-desc">Successful Software Deliverd</p>
                </div>
              </div>

            </div>

            <div className="col-lg-3 col-md-3">
              <div className="ts-facts-bg"><span className="facts-icon"><i className="icon icon-chart2"></i></span>
                <div className="ts-facts-content">
                  <h4 className="ts-facts-num"><span className="counterUp">85</span>%</h4>
                  <p className="facts-desc">Business Growth </p>
                </div>
              </div>

            </div>

            <div className="col-lg-3 col-md-3">
              <div className="ts-facts-bg"><span className="facts-icon"><i className="icon icon-deal"></i></span>
                <div className="ts-facts-content">
                  <h4 className="ts-facts-num"><span className="counterUp">50</span></h4>
                  <p className="facts-desc">Running Projects</p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>


      <section className="quote-area bg-overlay overlay-color" id="quote-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 qutoe-form-inner-left">
              <div className="quote_form">
                <h2 className="column-title title-white"><span>We are always ready</span> Request
                                a call back</h2>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input className="form-control" id="name" name="name"
                        placeholder="Full Name" required="" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input className="form-control" id="email" name="email"
                        placeholder="Email Address" required="" />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <input className="form-control" id="subject" name="subject"
                        type="text" placeholder="Subject" required="" />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <textarea className="form-control" placeholder="Message" rows="6"
                        name="comment" required="" />
                    </div>
                  </div>
                </div>

                <div className="form-group text-right mb-0">
                  <input className="button btn btn-primary" type="submit" value="Send Message" />
                </div>
              </div>

            </div>
           
          </div>

        </div>
      </section>
      <style jsx>{`
            .tab_bg {
              background-image:url(images/tabs/tab-shape.png);
            }
            .ts_bg{
              background-image: url("images/parallax/parallax1.jpg");
            }
            .quote-area {
              background-image: url("images/parallax/parallax1.jpg");
            }
        `}</style>
    </>
  );
}





const Home = () => (
  <>
    <Header />
    <Banner />
    <Services />
    <Footer />
  </>
);

export default Home;
