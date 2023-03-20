import React from "react";
import { Container, Row } from "react-bootstrap";
import "aos/dist/aos.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import BLHarbert from "../assets/Klijenti/BLHarbert.jpg"; // import partner logos
import CBCG from "../assets/Klijenti/CBCG.png"; // import partner logos
import CEDIS from "../assets/Klijenti/CEDIS.jpg"; // import partner logos
import IJZ from "../assets/Klijenti/IJZ.jpg"; // import partner logos
import Lovcen from "../assets/Klijenti/Lovcen.png"; // import partner logos
import MUP from "../assets/Klijenti/MUP.png"; // import partner logos
import PETROL from "../assets/Klijenti/PETROL.png"; // import partner logos
import PrvaBanka from "../assets/Klijenti/PrvaBanka.jpg"; // import partner logos
import RDC from "../assets/Klijenti/RDC.jpg"; // import partner logos
import UIKS from "../assets/Klijenti/UIKS.jpg"; // import partner logos
function ReferencesComponent({ mne, eng }) {
  return (
    <div id="references" className="references">
      <Container>
        {mne && (
          <h2
            style={{
              textAlign: "center",
              paddingBottom: "20px",
              fontSize: "35px",
            }}
          >
            Reference
          </h2>
        )}
        {eng && (
          <h2
            style={{
              textAlign: "center",
              paddingBottom: "20px",
              fontSize: "35px",
            }}
          >
            References
          </h2>
        )}
        <Row>
          <AliceCarousel autoPlay autoPlayInterval={1500} infinite>
            <img src={BLHarbert} className="sliderimg" alt="x" />
            <img src={CBCG} className="sliderimg" alt="x" />
            <img src={CEDIS} className="sliderimg" alt="x" />
            <img src={IJZ} className="sliderimg" alt="x" />
            <img src={Lovcen} className="sliderimg" alt="x" />
            <img src={MUP} className="sliderimg" alt="x" />
            <img src={PETROL} className="sliderimg" alt="x" />
            <img src={PrvaBanka} className="sliderimg" alt="x" />
            <img src={RDC} className="sliderimg" alt="x" />
            <img src={UIKS} className="sliderimg" alt="x" />
          </AliceCarousel>
        </Row>
      </Container>
    </div>
  );
}
export default ReferencesComponent;
