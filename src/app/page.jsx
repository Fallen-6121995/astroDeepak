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
                Leading You to a Life of Purpose and Peace
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
                <p>Life is full of ups and downs, and at times, it can feel overwhelming to find direction or clarity. That's where the right guidance can make all the difference.</p>
                <p>
                Dr. Deepak, a life coach with years of experience can help you tap into your inner strength and face challenges head-on. With his compassionate support, you can break free from negative patterns, develop habits that empower you, and move toward the life you truly deserve. We're here to bring a lasting change and help you discover a clearer, more confident path forward. 
                </p>
              </Col>
              <Col lg={6}>
                <div className="top-coach-img text-center">
                  <img src="/images/Dr-Saloni-Singh.png" alt="saloni-Singh" />
                </div>
              </Col>
              <div className="lifeCoachBtn text-center">
                <SectionBtn link="/" label="Book Your Consultation" />
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
                With over 15 years of experience, Dr. Deepak has helped hundreds of people transform both their personal and professional lives. As a life coach, his caring approach creates a safe and supportive space where you can explore your true desires, overcome challenges, and take confident steps towards your goals. He is dedicated to helping you identify what's been holding you back and providing the tools and strategies you need for lasting, meaningful change. 
                </p>
                <p>
                Whether you want to improve your relationships, grow in your career, or simply find balance in life, Dr. Deepak's holistic method ensures your unique needs are taken care of every step of the way.
                </p>
                <div className="mt-4">
                  <SectionBtn link="/" label="See More About My Journey" />
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
            <Col md="3">
              <div className="column text-center">
                <div className="card">
                  <h3>500+</h3>
                  <p className="mb-0">Satisfied Clients</p>
                </div>
              </div>
            </Col>
            <Col md="3">
              <div className="column text-center">
                <div className="card">
                  <h3>100+</h3>
                  <p className="mb-0">Corporate Workshops</p>
                </div>
              </div>
            </Col>
            <Col md="3">
              <div className="column text-center">
                <div className="card">
                  <h3>97%</h3>
                  <p className="mb-0">Client Satisfaction Rate</p>
                </div>
              </div>
            </Col>
            <Col md="3">
              <div className="column text-center">
                <div className="card">
                  <h3>150+</h3>
                  <p className="mb-0">Strengthened Couples</p>
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
