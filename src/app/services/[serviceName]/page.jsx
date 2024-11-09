import React from 'react'
import { db } from '../../../firebase';
import { doc, getDoc } from "firebase/firestore";
import { Row,Col, Container } from 'react-bootstrap';
import SectionHeading from '@/components/SeactionHeading/SectionHeading';
import { servicesData } from '@/data';
import SectionBtn from '@/components/sectionBtn/SectionBtn';

async function getServiceData(serviceName) {
  try {
      const docRef = doc(db, "services", serviceName);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
          return docSnap.data();
      } else {
          return null;
      }
  } catch (error) {
      console.error("Error fetching document:", error);
      return null;
  }
}

export default async function ServicePage({ params }) {
    const { serviceName } = params;
    const service = await getServiceData(serviceName);
    // const service = servicesData[serviceName];
  return (
    <div>
      <section className='ourServicesPage secPadding bgLightYellow'>
        <Container>
        <SectionHeading
            tagline={service?.service_heading}
            color="var(--mainYellow)"
            fontSize={40}
            fontWeight={600}
        />
            <Row className='mt-5'>
                <Col md={6}>
                    <div dangerouslySetInnerHTML={{__html: service?.service_data}}></div>
                    <div className='mt-4'>
                <SectionBtn link="" label="CONNECT WITH ME" />
              </div>
                </Col>
                <Col md={6}>
                <div className='ourServicesImg text-center'>
                   <img src={service?.img} />
                </div>
                </Col>
            </Row>
        </Container>
        </section>
    </div>
  )
}