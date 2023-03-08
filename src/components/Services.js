import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCamera, FaMicrochip } from "react-icons/fa";
import { BsFillDiamondFill } from "react-icons/bs";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="services">
      <Container>
        <h2>Usluge</h2>
        <Row className="justify-content-center">
          <Col md={4} data-aos="fade-up">
            <div className="service-box">
              <div className="service-icon">
                <FaCamera />
              </div>
              <h3>Kamere</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </Col>
          <Col md={4} data-aos="fade-up" data-aos-delay="200">
            <div className="service-box">
              <div className="service-icon">
                <FaMicrochip />
              </div>
              <h3>Senzori</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </Col>
          <Col md={4} data-aos="fade-up" data-aos-delay="400">
            <div className="service-box">
              <div className="service-icon custom-icon">
                <BsFillDiamondFill />
              </div>
              <h3>Usluge po zelji</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
