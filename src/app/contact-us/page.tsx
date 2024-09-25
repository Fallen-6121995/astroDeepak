"use client";
import SectionHeading from "@/components/SeactionHeading/SectionHeading";
import { contacPageHeading } from "@/data";
import React from "react";
import { Col, Row, Form, FormGroup, Button } from "react-bootstrap";

function Contact() {
  return (
    <div>
      <SectionHeading
        tagline={contacPageHeading}
        color="#01464B"
        fontSize={40}
        fontWeight={600}
      />
      <Row>
        <Col md={5}>
          <SectionHeading
            tagline="Address:"
            color="#01464B"
            fontSize={22}
            fontWeight={600}
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
          />

          <p>Coachsalonisingh@gmail.com</p>
        </Col>
        <Col md={7}>
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
                  <Form.Label htmlFor="disabledSelect">Your Concern</Form.Label>
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

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Contact;
