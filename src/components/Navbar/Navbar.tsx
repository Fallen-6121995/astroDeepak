"use client";
import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Col, Row } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
function HeaderNavbar() {
  return (
    <>
    <div className="topHeader py-2">
    <Container>
       <Row>
         <Col md={6}>
         <div className="topHeaderLeft">
           <ul className="list-inline mb-0">
               <li className="list-inline-item"><span><FaPhoneAlt /></span> +123(98765645445)</li>
               <li className="list-inline-item"><span><MdOutlineEmail /></span> test@gmail.com</li>
            </ul>
          </div>
         </Col>
         <Col md={6}>
          <div className="topHeaderSocial text-end">
           <ul className="list-inline mx-2 mb-0">
             <li className="list-inline-item mx-2"><FaFacebookF /></li>
             <li className="list-inline-item mx-2"><FaInstagram /></li>
             <li className="list-inline-item mx-2"><FaYoutube /></li>
             <li className="list-inline-item mx-2"><FaLinkedinIn /></li>
             <li className="list-inline-item mx-2"><FaXTwitter /></li>
           </ul>
           </div>
         </Col>
       </Row>
       </Container>
    </div>
      <header className="pa_navbar">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#">
              <img src="/images/SaloniLogo.png" alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="ms-auto mb-2 mb-lg-0" navbarScroll>
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <Nav.Link href="#">Link</Nav.Link>
                {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown> */}
              </Nav>
              <div className="navBtn d-flex ms-md-4">
                <Button className="btn">Search</Button>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default HeaderNavbar;
