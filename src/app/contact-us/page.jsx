"use client";
import { useState } from "react";
import SectionHeading from "@/components/SeactionHeading/SectionHeading";
import { contacPageHeading } from "@/data";
import React from "react";
import { Col, Row, Form, FormGroup, Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import SectionBtn from "../../components/sectionBtn/SectionBtn";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    concern: "",
    comment: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Add the form data to Firestore (create a "contacts" collection)
      const docRef = await addDoc(collection(firestore, "contacts"), formData);
      alert("Form submitted successfully! Document ID: " + docRef.id);
      
      // Optionally clear the form after submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        concern: "",
        comment: "",
      });
    } catch (error) {
      console.error("Error submitting form data:", error);
      alert("There was an error submitting the form.");
    }
  };

  return (
    <div className="contactArea secPadding">
      <Container>
        <Row>
          <Col md={4}>
            <div className="contactLeft">
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
            </div>
          </Col>
          <Col md={8}>
            <div className="contactRight">
              <SectionHeading
                tagline={contacPageHeading}
                color="#01464B"
                fontSize={40}
                fontWeight={600}
              />
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="email" placeholder="Name" name="name"  value={formData.name}
                    onChange={handleChange} required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" name="email"
                    value={formData.email}
                    onChange={handleChange} />
                </Form.Group>
                <Row>
                  <Col md={6}>
                    <Form.Group
                      className="mb-3"
                      controlId="formBasicPhoneNumber"
                    >
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control type="tel" placeholder="phone number"   value={formData.phone}
                        onChange={handleChange}  />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="disabledSelect">
                        Your Concern
                      </Form.Label>
                      <Form.Select 
                      id="disabledSelect"
                      name="concern"
                      value={formData.concern}
                      onChange={handleChange}
                      >
                      <option value="">Select Concern</option>
                        <option value="Leadership Mastery">Leadership Mastery</option>
                        <option value="Purpose & Contentment">Purpose & Contentment</option>
                        <option value="Business Growth">Business Growth</option>
                        <option value="Self & Habit Mastery">Self & Habit Mastery</option>
                        <option value="All and more">All and more</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Label htmlfor="exampleFormControlTextarea1">
                    Comment
                  </Form.Label>
                  <Form.Control
                   name="comment"
                   value={formData.comment}
                   onChange={handleChange}
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: "100px" }}
                  />
                </Form.Group>
                <div
                  className="contactBtn mt-4"
                  variant="primary"
                  type="submit"
                >
                  <SectionBtn link="/" label="CONNECT WITH ME" />
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
