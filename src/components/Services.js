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
                  world-renowned partners which include: Avigilon, Dahua,
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
              {mne && <h3>Protivprovalni (alarmni) sistemi </h3>}
              {eng && <h3>Alarm Systems</h3>}
              {mne && (
                <p>
                  Usluge nabavke, instalacije i održavanja protivprovalnih
                  sistema. Saradnja sa renomiranim inostranim partnerima:
                  Paradox, Ajax, Satel i mnogi drugi. Rješenja prilagođena vašim
                  potrebama i specifičnostima vaše lokacije.
                </p>
              )}
              {eng && (
                <p>
                  Offering procurement, installation, and maintenance services
                  for access control and time attendance systems. Solutions
                  custom designed to the needs of the clients. Cooperation with
                  partners such as Jantar, Assa Abloy, Špica, Geovision and many
                  others. Experience with electronic keys.
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
              {eng && <h3>Access Control Systems</h3>}
              {mne && (
                <p>
                  Usluge nabavke, instalacije i održavanja sistema za kontrolu
                  pristupa i evidenciju radnog vremena. Rješenja pravljena na
                  osnovu vaših potreba. Saradnja sa partnerima: Jantar, Assa
                  Abloy, Špica, Geovision i drugi. Iskustvo u izradi
                  elektronskih ključeva.
                </p>
              )}
              {eng && (
                <p>
                  Offering procurement, installation, and maintenance services
                  for access control and time attendance systems. Solutions
                  custom designed to the needs of the clients. Cooperation with
                  partners such as Jantar, Assa Abloy, Špica, Geovision and many
                  others. Experience with electronic keys.
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
                  systems for fire detection and notification. Cooperation with
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
              {eng && <h3>IT Equipment</h3>}
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
              {mne && <h3>Planovi zaštite za obavezno štićene objekte </h3>}
              {eng && <h3>Protection plans for mandatory protected objects</h3>}
              {mne && (
                <p>
                  Priprema i izrada planova zaštite za obavezno štićene objekte
                  u skladu sa Zakonom o zaštiti lica i imovine.
                </p>
              )}
              {eng && (
                <p>
                  Preparation and creation of protection plans for mandatory
                  protected locations in line with the Law of protection of
                  property and persons.
                </p>
              )}
            </div>
          </Col>
          ‚
          <Col md={4} data-aos="fade-up">
            <div className="service-box">
              <div className="service-icon">
                <img
                  src={require("../assets/usluge/projekti-spec.png")}
                  alt="x"
                ></img>
              </div>
              {mne && <h3>Profesionalna oprema za specijalizovanje namjene</h3>}
              {eng && <h3>Professional equipment for specialized purposes</h3>}
              {mne && (
                <p>
                  Usluge nabavke, instalacije i održavanja svih vrsta
                  profesionalne opreme. Proces rada se sastoji od definisanja
                  ciljeva, projektovanja funkcionalnosti opreme do nabavke i
                  instalacije. Ukoliko imate potrebu za nabavkom profesionalne
                  opreme iz oblasti tehničke zaštite kontaktirajte nas.
                </p>
              )}
              {eng && (
                <p>
                  Offering procurement, installation and maintenance services
                  for a variety of professional equipment. The work process is
                  centered around defining the needs of the client, creating a
                  project detailing the functionality of the needed equipment,
                  and finally the procurement and installation of professional
                  equipment. If You have the need for procurement of
                  professional equipment in the area of technical security
                  contact us. .
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
