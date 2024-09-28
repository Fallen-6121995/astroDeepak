"use client"
import React from 'react'
import { useParams } from 'next/navigation';
import { Row,Col, Container } from 'react-bootstrap';
import SectionHeading from '@/components/SeactionHeading/SectionHeading';
import { servicesData } from '@/data';
import SectionBtn from '@/components/sectionBtn/SectionBtn';
function ServicePage() {
    const { serviceName } = useParams();
    const service = servicesData[serviceName];
  return (
    <div>
        <Container>
            <Row>
                <Col>
                <img src={service?.image} />
                </Col>
                <Col>
                <SectionHeading
                    tagline={service?.title}
                    color="var(--mainYellow)"
                    fontSize={40}
                    fontWeight={600}
                />
                    <p>{service?.description}</p>
                    <div>
                <SectionBtn link="" label="CONNECT WITH ME" />
              </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default ServicePage