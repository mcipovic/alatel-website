import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = ({ mne, eng }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="services">
      <Container>
        {mne && <h2>Usluge</h2>}
        {eng && <h2>Services</h2>}
        <Row className="justify-content-center">
          <Col md={4} data-aos="fade-up">
            <div className="service-box">
              <div className="service-icon">
                <img
                  src={require("../assets/usluge/vnadzor.jpg")}
                  alt="x"
                ></img>
              </div>
              {mne && <h3>Video nadzor</h3>}
              {eng && <h3>Video Surveillance systems</h3>}
              {mne && (
                <p>
                  Usluge nabavke, instalacije i održavanja sistema video
                  nadzora. Saradnja sa renomiranim inostranim partnerima:
                  Milestone, Avigilon, Axis, Geovision, Dahua, Hikvision i mnogi
                  drugi. Rješenja prilagođena vašim potrebama i specifičnostima
                  vaše lokacije.
                </p>
              )}
              {eng && (
                <p>
                  Offering procurement, installation and maintenance services
                  for video surveillance hardware and software. Cooperation with
                  world-renowned partners which include: Avigilion, Dahia,
                  Geovision, Milestone and many others. Solutions are custom
                  designed to meet the requirements of our clients and the
                  location of setup.
                </p>
              )}
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
              {mne && <h3>Protiv provalni (alarmni) sistemi</h3>}
              {eng && <h3>Alarm systems</h3>}
              {mne && (
                <p>
                  Usluge nabavke, instalacije i održavanja protiv provalnih
                  sistema. Saradnja sa renomiranim inostranim partnerima:
                  Paradox, Ajax, Satel i mnogi drugi. Rješenja prilagođena vašim
                  potrebama i specifičnostima vaše lokacije.
                </p>
              )}
              {eng && (
                <p>
                  Offering procurement, installation and maintenance services
                  for alarm systems. Cooperation with partners such as Parodox,
                  Satel and many others.
                </p>
              )}
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
              {mne && <h3>Sistemi kontrole pristupa</h3>}
              {eng && <h3>Access control systems</h3>}
              {mne && (
                <p>
                  Usluge nabavke, instalacije i održavanje sistema za kontrolu
                  pristupa i evidenciju radnog vremena. Rješenja pravljena na
                  osnovu vaših potreba. Saradnja sa partnerima: Jantar, Assa
                  Abloy, Špica, Geovision i drugi. Iskustvo u izradi
                  elektronskih ključeva.
                </p>
              )}
              {eng && (
                <p>
                  Offering procurement, installation, and maintenance services
                  for access control systems. Solutions custom designed to the
                  needs of the clients. Cooperation with partners such as
                  Jantar, Assa Abloy, Špica, Geovision and many others.
                  Experience with electronic keys.
                </p>
              )}
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
              {mne && <h3>Sistemi detekcije i dojave požara</h3>}
              {eng && <h3>Fire detection and notification systems</h3>}
              {mne && (
                <p>
                  Usluge nabavke, instalacije i održavanja sistema za detekciju
                  i dojavu požara. Saradnja sa partnerima: Esser by Honeywell,
                  INIM, Satel i drugi.
                </p>
              )}
              {eng && (
                <p>
                  Offering procurement, installation and maintenance services of
                  sistems for fire detection and notification. Cooperation with
                  partners such as Esser by Honeywell, INIM, Satel and many
                  others.
                </p>
              )}
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
              {mne && <h3>IT oprema</h3>}
              {eng && <h3>IT equipment</h3>}
              {mne && (
                <p>
                  Usluge nabavke, instalacije i održavanja IT opreme.
                  Posjedujemo iskustvo sa svim vrstama IT opreme od
                  specijalizovanih računara do profesionalnih servera. Sistem
                  koji odgovara vašim potrebama se definiše kroz komunikaciju i
                  specifikacije potrebne za postizanje vaših ciljeva.
                </p>
              )}
              {eng && (
                <p>
                  Offering procurement, installation and maintenance services
                  for IT Equipment. Experience with all types of IT equipment,
                  ranging from specialized computers to professional servers.
                  The system is defined by our clients needs.
                </p>
              )}
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
              {mne && <h3>Metal detektorska vrata / rendgen uređaji</h3>}
              {eng && <h3>Metal detector doors and X-ray machines</h3>}
              {mne && (
                <p>
                  Usluge nabavke, instalacije i održavanja uređaja. Saradnja sa
                  proizvođačem Rapiscan.
                </p>
              )}
              {eng && (
                <p>
                  Offering procurement, installation and maintenance services of
                  metal detector doors and x-ray machines. Cooperation with the
                  producer Rapiscan.
                </p>
              )}
            </div>
          </Col>
          <Col md={4} data-aos="fade-up">
            <div className="service-box">
              <div className="service-icon">
                <img
                  src={require("../assets/usluge/Planovi.jpg")}
                  alt="x"
                ></img>
              </div>
              {mne && <h3>Planovi zaštite za obavezno štićene objekte</h3>}
              {eng && <h3>Plans for mandatory protected objects</h3>}
              {mne && (
                <p>
                  Priprema i izrada planova zaštite za obavezno štićene objekate
                  u skladu sa Zakonom o zaštiti lica i imovine.
                </p>
              )}
              {eng && (
                <p>
                  Preparation and creation of plans for mandatory protected
                  locations in line with the Law of protection of property and
                  persons.
                </p>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
