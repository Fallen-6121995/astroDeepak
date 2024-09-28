import SectionHeading from "@/components/SeactionHeading/SectionHeading";
import { aboutSectionHeading } from "@/data";
import React from "react";
import { Col, Container, Row } from 'react-bootstrap'


function AboutUs() {
  return (
    <div>
    <section className="aboutPageSec secPadding">
      <Container>
        <SectionHeading
          tagline={aboutSectionHeading}
          color="#01464B"
          fontSize={40}
          fontWeight={600}
        />
        <div className="about-me-section">
         <Row className="mt-5">
           <Col md={6}>
            <div className="aboutMeLeft">
            <p>
              Leading executive life coach of India, with an 15 years of
              experience in Life Coaching, Leadership & Self-mastery coaching
              and Group Facilitation.
            </p>

            <p>
              She's worked as a Senior Gynaecologist in London, before pursuing
              her calling to become a Executive Life coach for Leaders and CEOs.
            </p>

            <p>
              She's passionate about helping people see the greatness within and
              tap into their highest potential via a shift in their
              consciousness.
            </p>

            <p>
              She believes in her clients 100% and help them thrive in every
              area of Business & life.
            </p>
       
            </div>
            </Col>
            <Col md={6}>
            <div className="aboutMeImg text-center">
              <img src="/images/Dr-Saloni-Singh.png" alt="Dr. Saloni Singh" />
            </div>
           </Col> 
          </Row>
        </div>
      </Container>
    </section>
    <section className="whoAm_I secPadding">
       <div className="container">
          <SectionHeading
            tagline="Who Am I?"
            color="#01464B"
            fontSize={40}
            fontWeight={600}
          />
          <div>
            <p>A Coach. Friend. Spiritual Growth Catalyst.</p>

            <p>
              I coach senior leaders, CEOs, entrepreneurs and coaches to help
              them connect with themselves at a deeper level and become their
              best version. I am a mom of two teenagers, an author, blogger,
              dancer and podcaster. A curious explorer of the miracle called
              life.
            </p>

            <p>But above all this… I am a space holder. I am pure presence.</p>

            <p>
              I work as a catalyst to help you connect with your highest
              potential, with deep inner peace, magic and the source within. My
              deep connection with myself and the universe is my life's work and
              that's what I bring to everyone I work with. Coaching with me is a
              deep dive into knowing yourself, discovering and sometimes
              reinventing yourself.
            </p>
            <p>I am a sacred space of listening with no judgement.</p>
            <p>
              In this space of listening, love & support, you grow and evolve
              beyond you've ever imagined. You start to trust yourself and the
              universe even more. Miracles happen in your life.
            </p>
          </div>
        </div>
    </section>
    </div>
  );
}

export default AboutUs;
