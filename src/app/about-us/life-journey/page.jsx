import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SectionHeading from '@/components/SeactionHeading/SectionHeading'

function Lifejourney() {
  return (
    <div className='lifeJourney secPadding'>
        <SectionHeading
            tagline="Life Journey"
            color="var(--mainYellow)"
            fontSize={40}
            fontWeight={600}
            />
        <Container>
    <div className='mt-5'>
     <div className='lifeJourneyCard bgLightYellow'>
        <Row className='align-items-center'>
            <Col md={6} className='order-2 order-md-1'>
            <div className='journey-text'>
             <h4 className='mb3'>Lorem ipsum, dolor sit amet</h4>
            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo eius labore, in culpa pariatur incidunt laboriosam debitis dolorum consequuntur porro deleniti sit
            accusamus, quis doloribus assumenda eaque esse? Distinctio, libero?</p>
            </div>
            </Col>
            <Col md={6} className='order-1 order-md-2'>
            <div className='lifeCardImg'>
               <img src='/images/dr-deepak.jpeg' alt='deepak' />
            </div>
            </Col>
        </Row>
        </div>
        <div className='lifeJourneyCard'>
        <Row className='align-items-center'>
            <Col md={6}>
            <div className='lifeCardImg'>
               <img src='/images/Saloni.png' alt='saloni's />
            </div>
            </Col>
            <Col md={6}>
            <div className='journey-text'>
            <h4 className='mb3'>Lorem ipsum, dolor sit amet</h4>
            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo eius labore, in culpa pariatur incidunt laboriosam debitis dolorum consequuntur porro deleniti sit
            accusamus, quis doloribus assumenda eaque esse? Distinctio, libero?</p>
            </div>
            </Col>
        </Row>
        </div>
        <div className='lifeJourneyCard bgLightYellow'>
        <Row className='align-items-center'>
            <Col md={6}  className='order-2 order-md-1'>
            <div className='journey-text'>
            <h4 className='mb3'>Lorem ipsum, dolor sit amet</h4>
               <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo eius labore, in culpa pariatur incidunt laboriosam debitis dolorum consequuntur porro deleniti sit
                 accusamus, quis doloribus assumenda eaque esse? Distinctio, libero?</p>
            </div>
            </Col>
            <Col md={6} className='order-1 order-md-2'>
             <div className='lifeCardImg'>
               <img src='/images/Saloni.png' alt='saloni' />
             </div>
            </Col>
        </Row>
        </div>
        </div>
        </Container>
    </div>
  )
}

export default Lifejourney