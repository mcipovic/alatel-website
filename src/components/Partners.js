import React from "react";
import { Container, Row } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import AssaAbloy from "../assets/AssaAbloy.png"; // import partner logos
import Avigilon from "../assets/Avigilon.png"; // import partner logos
import Geovision from "../assets/Geovision.png"; // import partner logos
import Honeywell from "../assets/Honeywell.png"; // import partner logos
import HP from "../assets/HP.png"; // import partner logos

import Milestone from "../assets/Milestone.jpg"; // import partner logos
import Paradox from "../assets/Paradox.png"; // import partner logos
import Phantom from "../assets/Phantom.png"; // import partner logos
import Rapsican from "../assets/Rapiscan.png"; // import partner logos
import Jantar from "../assets/Jantar.png"; // import partner logos
function Partners({ mne, eng }) {
  // initialize AOS library
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    mirror: true,
  });

  return (
    <section id="partners">
      <Container>
        {mne && <h2 data-aos="fade-up">Partneri</h2>}
        {eng && <h2 data-aos="fade-up">Partners</h2>}
        <Row>
          <AliceCarousel autoPlay autoPlayInterval={1500} infinite>
            <a
              href="https://www.assaabloy.com/group/en"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img src={AssaAbloy} className="sliderimg" alt="x" />{" "}
            </a>
            <a
              href="https://www.avigilon.com/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img src={Avigilon} className="sliderimg" alt="x" />
            </a>
            <a
              href="https://www.geovision.com.tw/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img src={Geovision} className="sliderimg" alt="x" />
            </a>
            <a
              href="https://www.honeywell.com/us/en"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img src={Honeywell} className="sliderimg" alt="x" />
            </a>
            <a
              href="https://www.hp.com/us-en/home.html"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img src={HP} className="sliderimg" alt="x" />
            </a>
            <a href="https://jantar.si/en/" target="_blank" rel="noreferrer">
              {" "}
              <img src={Jantar} className="sliderimg" alt="x" />
            </a>
            <a
              href="https://www.milestonesys.com/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img src={Milestone} className="sliderimg" alt="x" />
            </a>
            <a href="https://www.paradox.com/" target="_blank" rel="noreferrer">
              {" "}
              <img src={Paradox} className="sliderimg" alt="x" />
            </a>
            <a
              href="https://phantom-technologies.com/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img src={Phantom} className="sliderimg" alt="x" />
            </a>
            <a
              href="https://www.rapiscansystems.com/en/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img src={Rapsican} className="sliderimg" alt="x" />
            </a>
          </AliceCarousel>
        </Row>
      </Container>
    </section>
  );
}

export default Partners;
