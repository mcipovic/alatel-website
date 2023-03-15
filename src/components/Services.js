import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

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
                <img
                  src={require("../assets/usluge/vnadzor.jpg")}
                  alt="x"
                ></img>
              </div>
              <h3>Video nadzor</h3>
              <p>
                Usluge nabavke, instalacije i održavanja video nadzora. Saradnja
                sa renomiranim inostranim partnerima poput Avigilion-a ,Dahue,
                Geovision-a, Milestone-a i mnogih drugih. Rješenja prilagođena
                vašim potrebama i specifičnosti vaše lokacije.{" "}
              </p>
            </div>
          </Col>
          <Col md={4} data-aos="fade-up">
            <div className="service-box">
              <div className="service-icon">
                <img
                  src={require("../assets/usluge/alarmne-centrale.jpg")}
                  alt="x"
                ></img>
              </div>
              <h3>Sistemi alarma</h3>
              <p>
                Usluge nabavke, instalacije i održavanje Alarmnih sistema.
                Saradnja sa partnerima poput Paradox, Satel i drugih.
              </p>
            </div>
          </Col>
          <Col md={4} data-aos="fade-up">
            <div className="service-box">
              <div className="service-icon">
                <img
                  src={require("../assets/usluge/Kontrola-pristupa.jpg")}
                  alt="x"
                ></img>
              </div>
              <h3>Sistemi kontrole pristupa</h3>
              <p>
                Usluge nabavke, instalacije i održavanje sistema za kontrolu
                pristupa. Rješenja pravljena na osnovu Vaših potreba. Saradnja
                sa partnerima poput Jantar, Assa Abloy, Špica, Geovision i
                drugih. Iskustvo u izradi elektronskih ključeva.
              </p>
            </div>
          </Col>
          <Col md={4} data-aos="fade-up">
            <div className="service-box">
              <div className="service-icon">
                <img
                  src={require("../assets/usluge/fire-detection.jpg")}
                  alt="x"
                ></img>
              </div>
              <h3>Sistemi detekcije i dojave požara</h3>
              <p>
                Usluge održavanja sistema za detekciju i dojavu požara. Saradnja
                sa partnerima poput Esser by Honeywell, INIM, Satel i drugih.
              </p>
            </div>
          </Col>
          <Col md={4} data-aos="fade-up">
            <div className="service-box">
              <div className="service-icon">
                <img
                  src={require("../assets/usluge/it-oprema.jpg")}
                  alt="x"
                ></img>
              </div>
              <h3>IT Oprema</h3>
              <p>
                Usluge nabavke, instalacije i održavanja IT opreme. Posjedujemo
                iskustvo sa svim vrstama IT opreme od specijalizovanih računara
                do profesionalnih servera. Sistem koji odgovara vašim potrebama
                se definiše kroz komunikaciju i specifikacije potrebne za
                postizanje vaših ciljeva.
              </p>
            </div>
          </Col>
          <Col md={4} data-aos="fade-up">
            <div className="service-box">
              <div className="service-icon">
                <img
                  src={require("../assets/usluge/detector-door.jpg")}
                  alt="x"
                ></img>
              </div>
              <h3>Metal Detektor vrata/rendgen uređaji </h3>
              <p>Održavanje uređaja. Saradnja sa proizvođačem Rapiscan.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
