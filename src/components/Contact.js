import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  // initialize AOS library
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    mirror: true,
  });

  return (
    <section id="contact">
      <Container>
        <h2 data-aos="fade-up">Kontakt</h2>
        <Row>
          <Col md={4} data-aos="fade-right">
            <label>Mail:</label>
            <p>example@mail.com</p>
          </Col>
          <Col md={4} data-aos="fade-up">
            <label>Telefon:</label>
            <p>(123) 456-7890</p>
          </Col>
          <Col md={4} data-aos="fade-left">
            <label>Adresa:</label>
            <p>123 Main St, Anytown USA</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
