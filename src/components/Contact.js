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
            <p>alatel@t-com.me</p>
          </Col>
          <Col md={4} data-aos="fade-up">
            <label>Telefon:</label>
            <p>+382 67 273 883</p>
          </Col>
          <Col md={4} data-aos="fade-up">
            <label>Adresa:</label>
            <p style={{ width: "100%" }}>
              19. Decembra br.5, 81000, Podgorica, Crna Gora
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
