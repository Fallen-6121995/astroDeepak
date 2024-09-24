import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import SectionHeading from "../components/SeactionHeading/SectionHeading";
import { sectionOneHeading } from "../data";
import { Col, Row } from "react-bootstrap";
import SectionBtn from "../components/sectionBtn/SectionBtn";

export default function Home() {
  return (
    <div>
      <div className="banner-section">
        <div className="headline-text">
          <h1>I help Leaders with Profound Professional & Spiritual Growth</h1>
        </div>
        <div className="cta-button-section">
          <button className="cta-button">
            <span>
              <FaArrowRightLong />
            </span>
            Let's Discuss your Goals
          </button>
        </div>
      </div>
      <div className="life-coach-sec">
        <SectionHeading
          tagline={sectionOneHeading}
          color="#01464B"
          fontSize={40}
          fontWeight={600}
        />
        <div className="life-coach-data">
          <Row>
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
                excel in every area of your life. You connect with inner wisdom
                and have higher clarity in life.
              </p>
              <p>That's where I support you as your life coach.</p>
            </Col>
            <Col lg={6}>
              <img
                className="top-coach-img"
                src="/images/Dr-Saloni-Singh.png"
              />
            </Col>
            <SectionBtn label="CONNECT WITH ME" />
          </Row>
        </div>
      </div>
    </div>
  );
}
