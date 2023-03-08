import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutUs() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="o-nama" className="about-us">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h2 className="title" data-aos="fade-up">
              O nama
            </h2>
            <p className="description" data-aos="fade-up" data-aos-delay="200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi
              nulla, sagittis nec dui at, dignissim bibendum est. Sed nec diam
              dolor. Vestibulum fermentum tortor id mi. Pellentesque ac velit eu
              augue dignissim pharetra. Proin risus nibh, commodo vitae sodales
              sit amet, vestibulum vel enim. Aliquam erat volutpat.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={4} className="text-center" data-aos="flip-left">
            <div className="icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h4 className="info-title">Bezbjednost</h4>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero.
            </p>
          </Col>
          <Col md={4} className="text-center" data-aos="flip-left">
            <div className="icon">
              <i className="fas fa-cogs"></i>
            </div>
            <h4 className="info-title">Tehnologija</h4>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero.
            </p>
          </Col>
          <Col md={4} className="text-center" data-aos="flip-left">
            <div className="icon">
              <i className="fas fa-users"></i>
            </div>
            <h4 className="info-title">Timski rad</h4>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutUs;
