import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Planet from '../../../assets/images/hero.svg'

export default function Hero() {
  return (
    <section className="hero-section d-flex align-items-center ckf-dark-bg">
      <Container>
        <Row className="align-items-center">
          {/* LEFT SIDE: TEXT */}
          <Col lg={6} md={12}>
            <h1 className="hero-title text-white">
              Boost your cloud journey <br /> with our certified teams.
            </h1>
            <div className="hero-buttons mt-4">
              <Button className="me-3">
                Book A Consultation
              </Button>
              <Button>
                About Us
              </Button>
            </div>
          </Col>

          {/* RIGHT SIDE: IMAGE */}
          <Col lg={6} md={12} className="text-center position-relative">
            {/* Optional: Add a background circle or any other design element here */} 
            <div className="hero-circle"></div>
            {/* Hero Image */}
            <img
              src={Planet} // Replace with your actual image path
              alt="Cloud Journey"
              className="hero-image img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
