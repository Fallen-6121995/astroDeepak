"use client";
import SectionHeading from "@/components/SeactionHeading/SectionHeading";
import { contacPageHeading } from "@/data";
import React from "react";
import { Col, Row, Form, FormGroup, Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import SectionBtn from "../../components/sectionBtn/SectionBtn";

function Contact() {
  return (
    <div className="contactArea secPadding">
      <Container>
        <SectionHeading
          tagline={contacPageHeading}
          color="#01464B"
          fontSize={40}
          fontWeight={600}
        />
        <Row>
          <Col md={4}>
            <SectionHeading
              tagline="Address:"
              color="#01464B"
              fontSize={22}
              fontWeight={600}
              showUnderline={false}
            />
            <div>
              <p>
                Clarity Hive, A - 304, Pioneer Urban Square, Golf course ext.
                road, Gurugram.
              </p>
            </div>
            <SectionHeading
              tagline="Email:"
              color="#01464B"
              fontSize={22}
              fontWeight={600}
              showUnderline={false}
            />

            <p>Coachsalonisingh@gmail.com</p>
          </Col>
          <Col md={8}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="email" placeholder="Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="number" placeholder="phone number" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledSelect">
                      Your Concern
                    </Form.Label>
                    <Form.Select id="disabledSelect">
                      <option>Leadership Mastery</option>
                      <option>Purpose & Contentment</option>
                      <option>Business Growth</option>
                      <option>Self & Habit Mastery</option>
                      <option>All and more</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Label htmlfor="exampleFormControlTextarea1">
                  Example textarea
                </Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                />
              </Form.Group>
              <div className="mt-4" variant="primary" type="submit">
                <SectionBtn link="/" label="CONNECT WITH ME" />
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
