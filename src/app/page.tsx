import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import SectionHeading from "../components/SeactionHeading/SectionHeading";
import { sectionOneHeading } from "../data";
import { Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import SectionBtn from "../components/sectionBtn/SectionBtn";

export default function Home() {
  return (
    <div>
      <section className="banner-section">
        <Container>
          <Row>
            <Col lg={6}></Col>
            <Col lg={6}>
              <div className="headline-text">
                <h1>
                  I help Leaders with Profound Professional & Spiritual Growth
                </h1>
              </div>
              <div className="cta-button-section">
                <button className="cta-btn">
                  <span className="d-flex me-2">
                    <FaArrowRightLong />
                  </span>
                  Let's Discuss your Goals
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/*--start life coach sec--*/}
      <section className="life-coach-sec secPadding">
        <Container>
          <SectionHeading
            tagline={sectionOneHeading}
            color="#01464B"
            fontSize={40}
            fontWeight={600}
          />
          <div className="life-coach-data">
            <Row className="align-items-center mt-5">
              <Col lg={6}>
                <p>We are here to evolve. To become our Highest Self.</p>
                <p>
                  Whether you want to become an inspiring leader, who leads with
                  calm and presence. Or you desire more contentment at work and
                  fulfilment in relationships; it all starts with the inner work
                  and higher awareness of self.
                </p>
                <p>
                  When you focus on becoming your 'Best Version', you start to
                  excel in every area of your life. You connect with inner
                  wisdom and have higher clarity in life.
                </p>
                <p>That's where I support you as your life coach.</p>
              </Col>
              <Col lg={6}>
                <div className="top-coach-img text-center">
                  <img src="/images/Dr-Saloni-Singh.png" alt="saloni-Singh" />
                </div>
              </Col>
              <div className="lifeCoachBtn text-center">
                <SectionBtn link="/" label="CONNECT WITH ME" />
              </div>
            </Row>
          </div>
        </Container>
      </section>
      {/*--start life coach Services sec--*/}
      <section className="coachServices secPadding">
        <Container>
          <SectionHeading
            tagline={sectionOneHeading}
            color="#01464B"
            fontSize={40}
            fontWeight={600}
          />
          <Row className="mt-5">
            <Col lg={4}>
              <div className="servicesCard">
                <img src="/images/services_1.png" alt="services_1" />
                <div className="ser_Content mt-3">
                  <h5>Effective Leadership 1:1 Coaching </h5>
                  <p>
                    Want to lead with Calm and Deep Presence? Become the
                    effective Leader you want to Be.
                  </p>
                  <a href="#">Click Here for leadership coaching with me</a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/*--start about section--*/}
      <section className="coachAbout secPadding">
        <SectionHeading
          tagline={sectionOneHeading}
          color="#01464B"
          fontSize={40}
          fontWeight={600}
        />
        <Container>
          <Row className="mt-5">
            <Col md="6">
              <div className="aboutLeft text-center">
                <img src="/images/Saloni.png" alt="Saloni" />
              </div>
            </Col>
            <Col md="6">
              <div className="aboutRight">
                <p>
                  Over the last 15 years, I’ve coached Senior Leaders, CEOs,
                  Start-up Founders, Coaches and Executives like you, become
                  highly effective leaders in every area of their life.{" "}
                </p>
                <p>
                  Through 1:1 Life Coaching services, I have helped leaders:
                </p>
                <ul>
                  <li>
                    <span>
                      Handle triggers, tough situations, and conflicts with
                      Calm.
                    </span>
                  </li>
                  <li>
                    <span>
                      Become comfortable in their skin, by dropping self-doubts
                      and self-judgements.
                    </span>
                  </li>
                  <li>
                    <span>
                      Express themselves fully and&nbsp; effectively in all
                      situations, without any fear of judgement.
                    </span>
                  </li>
                  <li>
                    <span>
                      Lead effectively in life, both personally as well as
                      professionally.
                    </span>
                  </li>
                </ul>
                <p>
                  Are you too ready to create a Shift your Consciousness? Let’s
                  work together.
                </p>
                <div className="mt-4">
                  <SectionBtn link="/" label="CONNECT WITH ME" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/*--start life coach Services sec--*/}
      <section className="coachServices secPadding">
        <Container>
          <SectionHeading
            tagline={sectionOneHeading}
            color="#01464B"
            fontSize={40}
            fontWeight={600}
          />
          <Row className="mt-5">
            <Col lg={4}>
              <div className="servicesCard">
                <img src="/images/services_1.png" alt="services_1" />
                <div className="ser_Content mt-3">
                  <h5>Effective Leadership 1:1 Coaching </h5>
                  <p>
                    Want to lead with Calm and Deep Presence? Become the
                    effective Leader you want to Be.
                  </p>
                  <a href="#">Click Here for leadership coaching with me</a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/*--start about section--*/}
      <section className="coachAbout secPadding">
        <SectionHeading
          tagline={sectionOneHeading}
          color="#01464B"
          fontSize={40}
          fontWeight={600}
        />
        <Container>
          <Row className="mt-5">
            <Col md="6">
              <div className="aboutLeft text-center">
                <img src="/images/Saloni.png" alt="Saloni" />
              </div>
            </Col>
            <Col md="6">
              <div className="aboutRight">
                <p>
                  Over the last 15 years, I’ve coached Senior Leaders, CEOs,
                  Start-up Founders, Coaches and Executives like you, become
                  highly effective leaders in every area of their life.{" "}
                </p>
                <p>
                  Through 1:1 Life Coaching services, I have helped leaders:
                </p>
                <ul>
                  <li>
                    <span>
                      Handle triggers, tough situations, and conflicts with
                      Calm.
                    </span>
                  </li>
                  <li>
                    <span>
                      Become comfortable in their skin, by dropping self-doubts
                      and self-judgements.
                    </span>
                  </li>
                  <li>
                    <span>
                      Express themselves fully and&nbsp; effectively in all
                      situations, without any fear of judgement.
                    </span>
                  </li>
                  <li>
                    <span>
                      Lead effectively in life, both personally as well as
                      professionally.
                    </span>
                  </li>
                </ul>
                <p>
                  Are you too ready to create a Shift your Consciousness? Let’s
                  work together.
                </p>
                <div className="mt-4">
                  <SectionBtn link="/" label="CONNECT WITH ME" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/*--end About section--*/}
      {/*--start Free eBook--*/}
      <section className="ebookAbout secPadding">
        <SectionHeading
          tagline={sectionOneHeading}
          color="#01464B"
          fontSize={40}
          fontWeight={600}
        />
        <Container>
          <Row className="mt-5">
            <Col md="6">
              <div className="aboutLeft text-center">
                <img src="/images/ebook_saloni.jpg" alt="ebook_saloni" />
              </div>
            </Col>
            <Col md="6">
              <div className="aboutRight">
                <p>
                  {" "}
                  Do you overthink and over-analyze things? Are stressful
                  thoughts and anxiety a regular part of your life? Do you want
                  to have a clear mind, enhance your decision-making ability,
                  creativity, and productivity, so you can use your mind to your
                  best capacity?
                </p>
                <p>
                  If Yes, then by practicing the simple and practical tools
                  given in this book, you’ll be able to cultivate a new mind,
                  and that too by devoting just three minutes in a day.
                </p>
                <p>Get this gift of e-book by Saloni Now:</p>
                <div className="ebookForm">
                  <form>
                    <div className="mb-3">
                      <label className="form-label">Email address</label>
                      <input type="email" className="form-control" />
                    </div>
                    <div>
                      <label className="form-label">Email address</label>
                      <input type="email" className="form-control" />
                    </div>
                    <div className="mt-4">
                      <SectionBtn link="/" label="CONNECT WITH ME" />
                    </div>
                  </form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/*--start Testimonials section--*/}
      <section className="testimonialsArea secPadding">
        <SectionHeading
          tagline={sectionOneHeading}
          color="#01464B"
          fontSize={40}
          fontWeight={600}
        />
        <Container>
          <Row className="mt-5">
            <Col md="4">
              <div className="testimonialCard">
                <p>
                  I LOVE IT SIMPLY THE WORK IT DOES IS SUPER CLEAN, I use it
                  mainly for school and I highly recommend it if you need to
                  clean the background noise of any audio, it is very fast and
                  effective, the cost is very appropriate for me does to have
                  the complete songs. Very effective app 👍🏻
                </p>
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <img
                      height="44"
                      width="44"
                      className="mr-2"
                      src="/images/ebook_saloni.jpg"
                      alt="saloni"
                    />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h5 className="mb-0">Idelson Ndunje</h5>
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item m-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="17"
                          viewBox="0 0 18 17"
                        >
                          <path
                            id="Polygon_2"
                            data-name="Polygon 2"
                            d="M8.524,1.463a.5.5,0,0,1,.951,0L11,6.16a.5.5,0,0,0,.476.345L16.442,6.5a.5.5,0,0,1,.293.906L12.72,10.288a.5.5,0,0,0-.183.562l1.542,4.682a.5.5,0,0,1-.768.561l-4.017-2.91a.5.5,0,0,0-.587,0l-4.017,2.91a.5.5,0,0,1-.768-.561L5.463,10.85a.5.5,0,0,0-.183-.562L1.265,7.4A.5.5,0,0,1,1.558,6.5l4.963.009A.5.5,0,0,0,7,6.16Z"
                            fill="#fe8f00"
                          ></path>
                        </svg>
                      </li>
                      <li className="list-inline-item m-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="17"
                          viewBox="0 0 18 17"
                        >
                          <path
                            id="Polygon_2"
                            data-name="Polygon 2"
                            d="M8.524,1.463a.5.5,0,0,1,.951,0L11,6.16a.5.5,0,0,0,.476.345L16.442,6.5a.5.5,0,0,1,.293.906L12.72,10.288a.5.5,0,0,0-.183.562l1.542,4.682a.5.5,0,0,1-.768.561l-4.017-2.91a.5.5,0,0,0-.587,0l-4.017,2.91a.5.5,0,0,1-.768-.561L5.463,10.85a.5.5,0,0,0-.183-.562L1.265,7.4A.5.5,0,0,1,1.558,6.5l4.963.009A.5.5,0,0,0,7,6.16Z"
                            fill="#fe8f00"
                          ></path>
                        </svg>
                      </li>
                      <li className="list-inline-item m-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="17"
                          viewBox="0 0 18 17"
                        >
                          <path
                            id="Polygon_2"
                            data-name="Polygon 2"
                            d="M8.524,1.463a.5.5,0,0,1,.951,0L11,6.16a.5.5,0,0,0,.476.345L16.442,6.5a.5.5,0,0,1,.293.906L12.72,10.288a.5.5,0,0,0-.183.562l1.542,4.682a.5.5,0,0,1-.768.561l-4.017-2.91a.5.5,0,0,0-.587,0l-4.017,2.91a.5.5,0,0,1-.768-.561L5.463,10.85a.5.5,0,0,0-.183-.562L1.265,7.4A.5.5,0,0,1,1.558,6.5l4.963.009A.5.5,0,0,0,7,6.16Z"
                            fill="#fe8f00"
                          ></path>
                        </svg>
                      </li>
                      <li className="list-inline-item m-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="17"
                          viewBox="0 0 18 17"
                        >
                          <path
                            id="Polygon_2"
                            data-name="Polygon 2"
                            d="M8.524,1.463a.5.5,0,0,1,.951,0L11,6.16a.5.5,0,0,0,.476.345L16.442,6.5a.5.5,0,0,1,.293.906L12.72,10.288a.5.5,0,0,0-.183.562l1.542,4.682a.5.5,0,0,1-.768.561l-4.017-2.91a.5.5,0,0,0-.587,0l-4.017,2.91a.5.5,0,0,1-.768-.561L5.463,10.85a.5.5,0,0,0-.183-.562L1.265,7.4A.5.5,0,0,1,1.558,6.5l4.963.009A.5.5,0,0,0,7,6.16Z"
                            fill="#fe8f00"
                          ></path>
                        </svg>
                      </li>
                      <li className="list-inline-item m-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="17"
                          viewBox="0 0 18 17"
                        >
                          <g id="Polygon_6" data-name="Polygon 6" fill="none">
                            <path
                              d="M8.524,1.463a.5.5,0,0,1,.951,0L11,6.16a.5.5,0,0,0,.476.345L16.442,6.5a.5.5,0,0,1,.293.906L12.72,10.288a.5.5,0,0,0-.183.562l1.542,4.682a.5.5,0,0,1-.768.561l-4.017-2.91a.5.5,0,0,0-.587,0l-4.017,2.91a.5.5,0,0,1-.768-.561L5.463,10.85a.5.5,0,0,0-.183-.562L1.265,7.4A.5.5,0,0,1,1.558,6.5l4.963.009A.5.5,0,0,0,7,6.16Z"
                              stroke="none"
                            ></path>
                            <path
                              d="M 8.999999046325684 2.264377593994141 L 7.663229942321777 6.376804351806641 C 7.502059936523438 6.87269401550293 7.043450355529785 7.205863952636719 6.519709587097168 7.205863952636719 L 2.179499626159668 7.197582244873047 L 5.688449859619141 9.719043731689453 C 6.116069793701172 10.02631378173828 6.292710304260254 10.56878471374512 6.127989768981934 11.06892395019531 L 4.779462814331055 15.16363048553467 L 8.295989990234375 12.61622428894043 C 8.502070426940918 12.4669246673584 8.745510101318359 12.38801383972168 9 12.38801383972168 C 9.254460334777832 12.38801383972168 9.497890472412109 12.46691417694092 9.70398998260498 12.61620426177979 L 13.22053909301758 15.1636381149292 L 11.87201023101807 11.06892395019531 C 11.70730018615723 10.56880378723145 11.88393020629883 10.02633476257324 12.3115406036377 9.719054222106934 L 15.82050132751465 7.197582244873047 L 11.47797012329102 7.205863952636719 C 10.9565601348877 7.205863952636719 10.49794960021973 6.87269401550293 10.3367805480957 6.376824378967285 L 8.999999046325684 2.264377593994141 M 8.999996185302734 1.117420196533203 C 9.200322151184082 1.117420196533203 9.400650024414062 1.232564926147461 9.475509643554688 1.462854385375977 L 11.00249004364014 6.160434722900391 C 11.06954956054688 6.366753578186035 11.26196670532227 6.506324768066406 11.47895050048828 6.505864143371582 L 16.4422607421875 6.496394157409668 C 16.92839241027832 6.496362686157227 17.12981033325195 7.11872386932373 16.73498916625977 7.402434349060059 L 12.72002029418945 10.28751373291016 C 12.5427303314209 10.41491508483887 12.46858978271484 10.64260482788086 12.53688049316406 10.84995460510254 L 14.07880973815918 15.53191471099854 C 14.23052978515625 15.99259471893311 13.70337104797363 16.37777328491211 13.31057929992676 16.09323501586914 L 9.293330192565918 13.1830940246582 C 9.118319511413574 13.05632400512695 8.881680488586426 13.05632400512695 8.706669807434082 13.1830940246582 L 4.689419746398926 16.09323501586914 C 4.296632766723633 16.37777328491211 3.76947021484375 15.99259471893311 3.92119026184082 15.53191471099854 L 5.463120460510254 10.84995460510254 C 5.531410217285156 10.64260482788086 5.457269668579102 10.41490459442139 5.279979705810547 10.28751373291016 L 1.265010833740234 7.402434349060059 C 0.8701896667480469 7.118724822998047 1.071554183959961 6.495587348937988 1.5577392578125 6.496394157409668 L 6.521050453186035 6.505864143371582 C 6.737871170043945 6.506718635559082 6.930450439453125 6.366754531860352 6.997509956359863 6.160434722900391 L 8.524490356445312 1.462854385375977 C 8.599345207214355 1.232564926147461 8.799670219421387 1.117420196533203 8.999996185302734 1.117420196533203 Z"
                              stroke="none"
                              fill="#fe8f00"
                            ></path>
                          </g>
                        </svg>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
