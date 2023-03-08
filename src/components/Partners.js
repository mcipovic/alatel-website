import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import partner1 from "../assets/download.png"; // import partner logos

function Partners() {
  // initialize AOS library
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    mirror: true,
  });

  return (
    <section id="partners">
      <Container>
        <h2 data-aos="fade-up">Partneri</h2>
        <Row>
          <Col sm={4} data-aos="fade-right">
            <img src={partner1} alt="Partner 1" />
          </Col>
          <Col sm={4} data-aos="fade-up">
            <img src={partner1} alt="Partner 2" />
          </Col>
          <Col sm={4} data-aos="fade-left">
            <img src={partner1} alt="Partner 3" />
          </Col>
          <Col sm={4} data-aos="fade-right">
            <img src={partner1} alt="Partner 4" />
          </Col>
          <Col sm={4} data-aos="fade-up">
            <img src={partner1} alt="Partner 5" />
          </Col>
          <Col sm={4} data-aos="fade-left">
            <img src={partner1} alt="Partner 6" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Partners;
