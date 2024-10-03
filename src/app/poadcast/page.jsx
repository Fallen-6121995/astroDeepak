import React from 'react'
import { Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";

function Poadcast() {
  return (
    <>
        <section className='poadCast_Banner bgLightYellow secPadding'>
            <Container>
                <div className='poadCastInner'>
                    <Row className='align-items-center'>
                        <Col md={6}>
                         <div className='poadCastLeft'>
                            <h1>Listen to what you LOVE</h1>
                            <div className='d-flex align-items-center'>
                            <h2>WHEREVER</h2>
                            <div className='ms-3'>
                                <p className='mb-1'>you are,</p>
                                <p className='mb-1'>you are,</p>
                            </div>
                            </div>
                            <div className='storelinks mt-4'>
                                <Col md={8}>
                                <Row>
                                <Col md={6}>
                                  <div className='text-center'>
                                    <a href='#'>
                                        <img src="/images/playStor.png" alt='playStor'/>
                                    </a>
                                    </div>
                                </Col>
                                <Col md={6}>
                                <div className='text-center'>
                                    <a href='#'>
                                        <img src="/images/appStore_Vec.png" alt='appStore'/>
                                    </a>
                                </div>
                                </Col>
                                <Col md={6}>
                                <div className='text-center'>
                                    <a href='#'>
                                        <img src="/images/huawei_vec.png" alt='huawei_vec'/>
                                    </a>
                                </div>
                                </Col>
                                <Col md={6}>
                                <div className='text-center'>
                                    <a href='#'>
                                        <img src="/images/samsung-store.png" alt='samsung'/>
                                    </a>
                                </div>
                                </Col>
                                </Row>
                                </Col>
                            </div>
                         </div>
                        </Col>
                        <Col md={6}>
                         <div className='poadCastRight text-center'>
                              <img src="/images/poadCast_Img.png" alt='poadCast' />
                         </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    </>
  )
}

export default Poadcast
