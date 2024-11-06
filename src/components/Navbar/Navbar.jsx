"use client";
import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Col, Row } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import { navbarData } from "@/data";
import Link from "next/link";

function HeaderNavbar() {
  return (
    <>
      <div className="topHeader py-2">
        <Container>
          <Row>
            <Col md={6}>
              <div className="topHeaderLeft">
                <ul className="list-inline mb-0">
                  <li className="list-inline-item">
                    <span>
                      <FaPhoneAlt className="mainYellow" />
                    </span>{" "}
                    +123(98765645445)
                  </li>
                  <li className="list-inline-item">
                    <span>
                      <MdOutlineEmail className="mainYellow" />
                    </span>{" "}
                    sortingzindagi@gmail.com
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={6}>
              <div className="topHeaderSocial text-end">
                <ul className="list-inline mx-2 mb-0">
                  <a href="https://www.facebook.com/sortingzindagi" target="_blank" rel="noopener noreferrer">
                    <li className="list-inline-item mx-2">
                      <FaFacebookF className="mainYellow" />
                    </li>
                  </a>
                  <a href="https://www.instagram.com/_sortingzindagi/" target="_blank" rel="noopener noreferrer">
                    <li className="list-inline-item mx-2">
                      <FaInstagram className="mainYellow" />
                    </li>
                  </a>
                  <a href="https://www.youtube.com/@SortingZindagi" target="_blank" rel="noopener noreferrer">
                    <li className="list-inline-item mx-2">
                      <FaYoutube className="mainYellow" />
                    </li>
                  </a>
                  <a href="https://x.com/SortingZindagi" target="_blank" rel="noopener noreferrer">
                    <li className="list-inline-item mx-2">
                      <FaXTwitter className="mainYellow" />
                    </li>
                  </a>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <header className="pa_navbar">
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="#">
              <img src="/images/SaloniLogo.png" alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="mx-auto mb-2 mb-lg-0" navbarScroll>
                {navbarData?.map((data) => (
                  <div className="menuItem" key={data?.id}>
                    {data?.sublinks ? (
                      <NavDropdown title={data?.label} id={`dropdown-${data?.id}`}>
                        {data?.sublinks.map((sublink) => (
                          <NavDropdown.Item key={sublink.id} as={Link} href={sublink.link}>
                            {sublink.label}
                          </NavDropdown.Item>
                        ))}
                      </NavDropdown>
                    ) : (
                      <Nav.Link as={Link} href={data?.link}>
                        {data?.label}
                      </Nav.Link>
                    )}
                  </div>
                ))}
              </Nav>
              <div className="navBtn d-flex ms-md-4">
                <Button className="cta-btn">Book an Appointment</Button>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default HeaderNavbar;
