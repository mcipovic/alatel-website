import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutUs({ mne, eng }) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="o-nama" className="about-us">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            {mne && (
              <h2 className="title" data-aos="fade-up">
                O nama
              </h2>
            )}
            {eng && (
              <h2 className="title" data-aos="fade-up">
                About Us
              </h2>
            )}
            {mne && (
              <p
                className="description"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Alatel d.o.o. je osnovan 1995. godine. U periodu od preko 25
                godina konstantno radimo na poboljšanju naših usluga i širenju
                ponuđenog asortimana proizvoda. Naša prvenstvena djelatnost je
                pružanje usluga tehničke zaštite, koje uključuju: sisteme video
                nadzora, protiv provalne sisteme (alarmne sisteme), sisteme
                detekcije i dojave požara, sisteme kontrole pristupa i
                evidencije radnog vremena, metal detektorska vrata / rendgen
                uređaje. Pored usluga tehničke zaštite, specijalizovani smo za
                IT Opremu, struktuiranu mrežnu infrastrukturu, profesionalnu
                opremu za specijalizovane namjene kao i izradu planova zaštite
                obavezno štićenih objekata.
                <br></br>
                Pored osnovnih procesa nabavke i instalacije naša firma takodje
                pruža usluge i održavanja opreme. Portfolio zadovoljnih
                klijenata nam je u konstantnom rastu. Pored lokalnih firmi,
                sarađujemo i sa državnim agencijama, ministarstvima kao i
                međunardnim agencijama i ambasadama. Već duži niz godina,
                stvorili smo partnerske odnose za mnogim renomiranim
                proizvođačima iz inostranstva.
                <br></br>
                Posjedujemo sve potrebne licence iz oblasti u kojima poslujemo.
                Između ostalih izdvajamo:
              </p>
            )}
            {eng && (
              <p
                className="description"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Alatel d.o.o was first established in 1995. During the period of
                over 25 years, we are constantly working on expanding and
                improving our services as well as the products that we offer.
                Our primary activities are technical security services, which
                mainly include: Video surveillance systems, alarm systems,
                systems for fire detection and notification, access control
                systems, metal detector and x-ray machines. Additionally, we are
                specialized for IT equipment, network communication,
                professional equipment for specialized projects as well as
                creation of protection plans for mandatory protected objects.
                <br></br>
                In addition to basic processes of procurement and installation,
                our company also offers the services of maintenance of
                equipment. Our portfolio of clients is constantly growing. Our
                clients include: local companies, state agencies and ministries
                and international agencies and embassies. We have also developed
                strong connections and partnerships with numerous world-renowned
                manufacturers.
                <br></br>
                Our team, which has 12 employees includes also graduate
                engineers. We have all the necessary licences which cover our
                sphere of activities. Some of the licences we own include:
              </p>
            )}
            {mne && (
              <ul
                data-aos="fade-up"
                data-aos-delay="200"
                style={{
                  textAlign: "left",
                  fontSize: "large",
                  fontWeight: "550",
                }}
              >
                <li>
                  Licenca za obavljanje djelatnosti izrade tehničke
                  dokumentacije i građenje objekta
                </li>
                <li>
                  Licenca za obavljanje poslova ovlašćenog inženjera za složene
                  inženjerske objekte
                </li>
                <li>
                  Licenca za obavljanje djelatnosti revizije tehničke
                  dokumentacije i stručnog nadzora nad građenjem objekta
                </li>
                <li>Rješenje za obavljanje poslova tehničke zaštite</li>
                <li>Dozvolu o pristupu tajnim podacima</li>
                <li>
                  Reference i obuke od strane renomiranih stranih proizvođača
                </li>
                <li> N-Cage & DUNS</li>
              </ul>
            )}
            {eng && (
              <ul
                data-aos="fade-up"
                data-aos-delay="200"
                style={{
                  textAlign: "left",
                  fontSize: "large",
                  fontWeight: "550",
                }}
              >
                <li>
                  Licence for performing activities related to the creation of
                  technical documentation and object building
                </li>
                <li>
                  Licence for performing activities of authorized engineer for
                  complex engineering objects
                </li>
                <li>
                  License for conducting activities of technical documentation
                  review and professional supervision over building
                  construction.
                </li>
                <li>Licence for performing technical security services</li>
                <li>Access to confidential information</li>
                <li>
                  References and trainings from world-renowned manufacturers
                </li>
                <li> N-Cage & DUNS</li>
              </ul>
            )}
            {eng && (
              <p
                data-aos="fade-up"
                data-aos-delay="200"
                style={{ color: "white", fontSize: "large" }}
              >
                Our work process is based on a constant communication with our
                clients. The goal of every project is to find a custom solution
                which meets the requirements of our clients.
              </p>
            )}
            {mne && (
              <p
                data-aos="fade-up"
                data-aos-delay="200"
                style={{ color: "white", fontSize: "large" }}
              >
                Proces našeg rada se bazira na konstantnoj komunikaciji sa
                klijentom, i u svakom projektu nalazimo rješenje koje odgovara
                zahtjevima klijenta.
              </p>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutUs;
