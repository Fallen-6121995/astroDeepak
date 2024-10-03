import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import SectionHeading from "../components/SeactionHeading/SectionHeading";
import {
  LifeMentor,
  sectionOneHeading,
  services,
  servicesSectionHeading,
  successStroriesHeading,
  testimonials,
  testimonialsHeading,
} from "../data";
import { Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import SectionBtn from "../components/sectionBtn/SectionBtn";
import TestimonialCard from "../components/TestimonialCard/TestimonialCard";
import ServicesCard from "../components/ServicesCard/ServicesCard";

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
              <div className="cta-button-section mt-3">
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
      <section className="life-coach-sec secPadding">
        <Container>
          <SectionHeading
            tagline={sectionOneHeading}
            color="var(--mainYellow)"
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
      <section className="coachServices secPadding">
        <Container>
          <SectionHeading
            tagline={servicesSectionHeading}
            color="var(--mainYellow)"
            fontSize={40}
            fontWeight={600}
          />
          <Row className="mt-5">
            {services?.map((services) => (
              <ServicesCard
                key={services?.id}
                description={services?.desc}
                serviceName={services?.heading}
                link={services?.link}
                buttonLabel={services?.label}
                imgs={services?.imgs}
              />
            ))}
          </Row>
        </Container>
      </section>
      <section className="coachAbout secPadding">
        <Container>
          <SectionHeading
            tagline={LifeMentor}
            color="var(--mainYellow)"
            fontSize={40}
            fontWeight={600}
          />

          <Row className="mt-5 align-items-center">
            <Col md="6">
              <div className="aboutLeft text-center">
                <img src="/images/Saloni.png" alt="Saloni" />
              </div>
            </Col>
            <Col md="6">
              <div className="aboutRight">
                <p>
                  A competent life coach serves as a shining light of guidance,
                  illuminating routes towards personal growth and fulfillment.
                  Through empathy and sagacity, they empower individuals to
                  overcome obstacles, unearth their innate potential, and evoke
                  profound transformations. Their influence extends far beyond
                  coaching sessions, leaving an enduring mark on the voyage of
                  self-discovery.
                </p>
                <p>
                  Dr. Deepaak is one of the best life coach in India. She helps
                  people to transform their life. Connect with her for life
                  transformation coaching.
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
      <div className="counterSec secPadding">
        <Container>
          <SectionHeading
            tagline={successStroriesHeading}
            color="var(--mainYellow)"
            fontSize={40}
            fontWeight={600}
          />
          <Row className="align-items-center mt-5">
            <p>fiuewfiuewhfewhfiuewhfiuwhefiuhwfiuwhfiuhew</p>
            <Col md="3">
              <div className="column text-center">
                <div className="card">
                  <h3>11+</h3>
                  <p className="mb-0">Partners</p>
                </div>
              </div>
            </Col>
            <Col md="3">
              <div className="column text-center">
                <div className="card">
                  <h3>55+</h3>
                  <p className="mb-0">Projects</p>
                </div>
              </div>
            </Col>
            <Col md="3">
              <div className="column text-center">
                <div className="card">
                  <h3>100+</h3>
                  <p className="mb-0">Happy Clients</p>
                </div>
              </div>
            </Col>
            <Col md="3">
              <div className="column text-center">
                <div className="card">
                  <h3>100+</h3>
                  <p className="mb-0">Meetings</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <section className="testimonialsArea secPadding">
        <SectionHeading
          tagline={testimonialsHeading}
          color="var(--mainYellow)"
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
