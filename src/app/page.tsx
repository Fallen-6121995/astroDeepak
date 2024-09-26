import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import SectionHeading from "../components/SeactionHeading/SectionHeading";
import { sectionOneHeading, testimonials } from "../data";
import { Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import SectionBtn from "../components/sectionBtn/SectionBtn";
import TestimonialCard from "../components/TestimonialCard/TestimonialCard";

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
        Unlock Your Full Potential with a Top-Rated Life Coach!
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
            {testimonials?.map((items, id) => (
              <TestimonialCard
                key={id}
                description={items?.description}
                name={items?.name}
              />
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
}
