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
function Partners() {
  // initialize AOS library
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    mirror: true,
  });

  return (
    <section id="partners">
      <Container>
        <h2 data-aos="fade-up">Partneri</h2>
        <Row>
          <AliceCarousel autoPlay autoPlayInterval={1000} infinite>
            <img src={AssaAbloy} className="sliderimg" alt="x" />
            <img src={Avigilon} className="sliderimg" alt="x" />
            <img src={Geovision} className="sliderimg" alt="x" />
            <img src={Honeywell} className="sliderimg" alt="x" />
            <img src={HP} className="sliderimg" alt="x" />
            <img src={Jantar} className="sliderimg" alt="x" />
            <img src={Milestone} className="sliderimg" alt="x" />
            <img src={Paradox} className="sliderimg" alt="x" />
            <img src={Phantom} className="sliderimg" alt="x" />
            <img src={Rapsican} className="sliderimg" alt="x" />
          </AliceCarousel>
        </Row>
      </Container>
    </section>
  );
}

export default Partners;
