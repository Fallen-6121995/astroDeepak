import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SectionHeading from '@/components/SeactionHeading/SectionHeading'

function Lifejourney() {
  return (
    <div>
        <SectionHeading
            tagline="Life Journey"
            color="var(--mainYellow)"
            fontSize={40}
            fontWeight={600}
            />
        <Container>
        <Row>
            <Col>
            <div className='journey-text'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo eius labore, in culpa pariatur incidunt laboriosam debitis dolorum consequuntur porro deleniti sit accusamus, quis doloribus assumenda eaque esse? Distinctio, libero?
            </div>
            </Col>
            <Col>
            <img src='/images/Saloni.png' />
            </Col>
        </Row>
        <Row>
            <Col>
            <img src='/images/Saloni.png' />
            </Col>
            <Col>
            <div className='journey-text'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo eius labore, in culpa pariatur incidunt laboriosam debitis dolorum consequuntur porro deleniti sit accusamus, quis doloribus assumenda eaque esse? Distinctio, libero?
            </div>
            </Col>
        </Row>
        <Row>
            <Col>
            <div className='journey-text'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo eius labore, in culpa pariatur incidunt laboriosam debitis dolorum consequuntur porro deleniti sit accusamus, quis doloribus assumenda eaque esse? Distinctio, libero?
            </div>
            </Col>
            <Col>
            <img src='/images/Saloni.png' />
            </Col>
        </Row>
        </Container>
    </div>
  )
}

export default Lifejourney