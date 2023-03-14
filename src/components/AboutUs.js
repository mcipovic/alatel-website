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
              Alatel d.o.o. je osnovan 1995. godine. U periodu od preko 25
              godina konstantno radimo na poboljšanju naših usluga i širenju
              ponuđenog asortimana proizvoda. Naša prvenstvena djelatnost je
              pružanje usluga tehničke zaštite, koje uključuju: Sistem video
              nadzora, alarmne centrale (Alarmni sistemi), Sistemi detekcije i
              dojave požara, Sistem kontrole pristupa i metal detektor
              vrata/rendgen uređaji. Pored usluga tehničke zaštite,
              specijalizovani smo za IT Opremu, struktuiranu mrežnu
              infrastrukturu, profesionalnu opremu za specijalizovane namjene
              kao i izradu planova zaštite obavezno štićenih objekata.
              <br></br>
              Pored osnovnih procesa nabavke i instalacije naša firma takodje
              pruža usluge i održavanja opreme. Portfolio zadovoljnih klijenata
              nam je u konstantnom rastu. Pored lokalnih firmi, sarađujemo i sa
              državnim agencijama, ministarstvima kao i međunardnim agencijama i
              ambasadama. Već duži niz godina, stvorili smo partnerske odnose za
              mnogim renomiranim proizvođačima iz inostranstva.
              <br></br>
              Naš tim koji broji 12 zaposlenih lica, se sastoji od diplomiranih
              inžinjera slabe struje. Posjedujemo sve potrebne licence iz
              oblasti u kojima poslujemo. Između ostalih izdvajamo:
            </p>
            <ul style={{ textAlign: "left", fontSize: "large" }}>
              <li>
                Licenca za obavljanje djelatnosti izrade tehničke dokumentacije
                i građenje objekta
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
            <p style={{ color: "white", fontSize: "large" }}>
              Proces našeg rada se bazira na konstantnoj komunikaciji sa
              klijentom, i u svakom projektu nalazimo rješenje koje odgovara
              zahtjevima klijenta.{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutUs;
