import React from 'react'
import SectionHeading from '@/components/SeactionHeading/SectionHeading'
import { AboutLifeCoachHeading, whoAmIHeading } from '@/data'
import { Col, Container, Row } from 'react-bootstrap'

function Introduction() {
  return (
    <div>
    <section className="aboutPageSec secPadding">
      <Container>
        <SectionHeading
            tagline={AboutLifeCoachHeading}
          color="var(--mainYellow)"
          fontSize={40}
          fontWeight={600}
        />
        <div className="about-me-section">
         <Row className="mt-5">
           <Col md={6}>
            <div className="aboutMeLeft">
            <p>
            With over 15 years of experience, Dr. Deepak has helped hundreds of people transform both their personal and professional lives. As a life coach, his caring approach creates a safe and supportive space where you can explore your true desires, overcome challenges, and take confident steps towards your goals. He is dedicated to helping you identify what's been holding you back and providing the tools and strategies you need for lasting, meaningful change.
            </p>

            <p>
            Whether you want to improve your relationships, grow in your career, or simply find balance in life, Dr. Deepak's holistic method ensures your unique needs are taken care of every step of the way.
            </p>
       
            </div>
            </Col>
            <Col md={6}>
            <div className="aboutMeImg text-center">
              <img src="/images/dr-deepak.jpeg" alt="Dr. Deepak" />
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
            color="var(--mainYellow)"
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

  )
}

export default Introduction