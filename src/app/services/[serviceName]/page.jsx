import React from 'react'
import { Row,Col, Container } from 'react-bootstrap';
import SectionHeading from '@/components/SeactionHeading/SectionHeading';
import { servicesData } from '@/data';
import SectionBtn from '@/components/sectionBtn/SectionBtn';
function ServicePage({ params }) {
    const { serviceName } = params;
    const service = servicesData[serviceName];
  return (
    <div>
      <section className='ourServicesPage secPadding bgLightYellow'>
        <Container>
        <SectionHeading
            tagline={service?.title}
            color="var(--mainYellow)"
            fontSize={40}
            fontWeight={600}
        />
            <Row className='mt-5'>
                <Col md={6}>
                    <h3>Lorem ipsum, dolor sit amet</h3>
                    <p>{service?.description}</p>
                    <div className='mt-4'>
                <SectionBtn link="" label="CONNECT WITH ME" />
              </div>
                </Col>
                <Col md={6}>
                <div className='ourServicesImg text-center'>
                   <img src={service?.image} />
                </div>
                </Col>
            </Row>
        </Container>
        </section>
    </div>
  )
}

export default ServicePage
export async function generateStaticParams() {
    const serviceNames = Object.keys(servicesData);
    return serviceNames.map((serviceName) => ({
      serviceName,
    }));
}