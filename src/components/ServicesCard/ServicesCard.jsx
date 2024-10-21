import Link from 'next/link'
import React from 'react'
import { Col } from 'react-bootstrap'

function ServicesCard({serviceName,description,link,buttonLabel,imgs}) {
  return (
        <Col lg={4} className="d-flex mb-4" >
              <div className="servicesCard servicesCard d-flex flex-column">
                <img src={imgs} alt="services_1" />
                <div className="ser_Content mt-3">
                  <h5>{serviceName}</h5>
                  <p>
                    {description}
                  </p>
                  {/* <Link href={link}>
                     {buttonLabel}
                  </Link> */}
                </div>
              </div>
            </Col>
  )
}

export default ServicesCard