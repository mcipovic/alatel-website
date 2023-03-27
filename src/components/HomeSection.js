import { Container, Col } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { useEffect, useState } from "react";
import { ReactComponent as MneIcon } from "../assets/MontenegroFlag.svg";
import { ReactComponent as EngIcon } from "../assets/EnglishFlag.svg";

function HomeSection({ mne, setMne, eng, setEng }) {
  const [activeEng, setActiveEng] = useState("eng");
  const [activeMne, setActiveMne] = useState("mne");

  const handleButtonClick = (id) => {
    const element = document.getElementById(id);
    const topOffset = 100;
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - topOffset;

    window.scroll({
      top: offsetPosition,
    });
  };
  useEffect(() => {
    if (eng) {
      setActiveEng("active-eng");
      setActiveMne("mne");
    } else if (mne) {
      setActiveMne("active-mne");
      setActiveEng("eng");
    }
  }, [eng, mne]);

  return (
    <div className="home-section">
      <header>
        <Container>
          <Navbar
            collapseOnSelect
            style={{ width: "100%" }}
            sticky="top"
            expand="lg"
          >
            <Container>
              <img
                style={{ cursor: "pointer" }}
                onClick={() => handleButtonClick("landing")}
                alt="x"
                width={200}
                height={60}
                src={require("../assets/logo.jpg")}
              ></img>
              <Navbar.Toggle
                style={{ backgroundColor: "red" }}
                aria-controls="collapse navbar-collapse"
              />
              <Navbar.Collapse style={{ marginTop: "23px" }}>
                {mne && (
                  <Nav style={{}} className="ms-auto justify-content-center">
                    <Nav.Link
                      style={{ color: "white" }}
                      onClick={() => handleButtonClick("o-nama")}
                      href="#o-nama"
                    >
                      O NAMA
                    </Nav.Link>
                    <Nav.Link
                      style={{ color: "white" }}
                      onClick={() => handleButtonClick("services")}
                      href="#usluge"
                    >
                      USLUGE
                    </Nav.Link>
                    <Nav.Link
                      style={{ color: "white" }}
                      onClick={() => handleButtonClick("references")}
                      href="#reference"
                    >
                      REFERENCE
                    </Nav.Link>
                    <Nav.Link
                      style={{ color: "white" }}
                      onClick={() => handleButtonClick("partners")}
                      href="#partneri"
                    >
                      PARTNERI
                    </Nav.Link>

                    <Nav.Link
                      style={{ color: "white" }}
                      onClick={() => handleButtonClick("contact")}
                      href="#kontakt"
                    >
                      KONTAKT
                    </Nav.Link>

                    <Nav.Link
                      href="#eng"
                      onClick={() => {
                        setMne(true);
                        setEng(false);
                      }}
                    >
                      <MneIcon id="mne-flag" />
                    </Nav.Link>
                    <Nav.Link
                      href="#eng"
                      id={activeEng}
                      onClick={() => {
                        setMne(false);
                        setEng(true);
                      }}
                    >
                      <EngIcon id="eng-flag" width={40} height={50} />
                    </Nav.Link>
                  </Nav>
                )}
                {eng && (
                  <Nav style={{}} className="ms-auto justify-content-center">
                    <Nav.Link
                      style={{ color: "white" }}
                      onClick={() => handleButtonClick("o-nama")}
                      href="#about-us"
                    >
                      ABOUT US
                    </Nav.Link>
                    <Nav.Link
                      style={{ color: "white" }}
                      onClick={() => handleButtonClick("services")}
                      href="#services"
                    >
                      SERVICES
                    </Nav.Link>
                    <Nav.Link
                      style={{ color: "white" }}
                      onClick={() => handleButtonClick("references")}
                      href="#references"
                    >
                      REFERENCES
                    </Nav.Link>
                    <Nav.Link
                      style={{ color: "white" }}
                      onClick={() => handleButtonClick("partners")}
                      href="#partners"
                    >
                      PARTNERS
                    </Nav.Link>

                    <Nav.Link
                      style={{ color: "white" }}
                      onClick={() => handleButtonClick("contact")}
                      href="#contact"
                    >
                      CONTACT
                    </Nav.Link>

                    <Nav.Link
                      href="#mne"
                      onClick={() => {
                        setMne(true);
                        setEng(false);
                      }}
                      id={activeMne}
                      style={{ color: "#E21818" }}
                    >
                      <MneIcon id="mne-flag" width={40} height={50} />
                    </Nav.Link>
                    <Nav.Link
                      href="#eng"
                      id={activeEng}
                      onClick={() => {
                        setMne(false);
                        setEng(true);
                      }}
                      style={{ color: "blue" }}
                    >
                      <EngIcon id="eng-flag" width={40} height={50} />
                    </Nav.Link>
                  </Nav>
                )}
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Container>
      </header>
      <section id="landing" className="landing-section">
        <Container>
          <Col md={12} className="text-center">
            <h1>AlaTel</h1>
            {eng && <p>technical security solutions</p>}
            {mne && <p>tehnička rešenja za bezbjednost</p>}
          </Col>
        </Container>
      </section>
    </div>
  );
}

export default HomeSection;
