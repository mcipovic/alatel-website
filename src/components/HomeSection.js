import { Container, Col } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { useEffect, useState } from "react";
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
          <Navbar style={{ width: "100%" }} sticky="top" expand="lg">
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
                aria-controls="basic-navbar-nav"
                className="no-focus-outline"
              />
              <Navbar.Collapse style={{ marginTop: "23px" }}>
                {mne && (
                  <Nav style={{}} className="ms-auto justify-content-center">
                    <Nav.Link
                      style={{ color: "white" }}
                      onClick={() => handleButtonClick("o-nama")}
                    >
                      O NAMA
                    </Nav.Link>
                    <Nav.Link
                      style={{ color: "white" }}
                      onClick={() => handleButtonClick("services")}
                    >
                      USLUGE
                    </Nav.Link>
                    <Nav.Link
                      style={{ color: "white" }}
                      onClick={() => handleButtonClick("references")}
                    >
                      REFERENCE
                    </Nav.Link>
                    <Nav.Link
                      style={{ color: "white" }}
                      onClick={() => handleButtonClick("partners")}
                    >
                      PARTNERI
                    </Nav.Link>

                    <Nav.Link
                      style={{ color: "white" }}
                      onClick={() => handleButtonClick("contact")}
                    >
                      KONTAKT
                    </Nav.Link>

                    <Nav.Link
                      onClick={() => {
                        setMne(true);
                        setEng(false);
                      }}
                      id={activeMne}
                      style={{ color: "#E21818" }}
                    >
                      MNE
                    </Nav.Link>
                    <Nav.Link
                      id={activeEng}
                      onClick={() => {
                        setMne(false);
                        setEng(true);
                      }}
                      style={{ color: "blue" }}
                    >
                      ENG
                    </Nav.Link>
                  </Nav>
                )}
                {eng && (
                  <Nav style={{}} className="ms-auto justify-content-center">
                    <Nav.Link
                      style={{ color: "white" }}
                      onClick={() => handleButtonClick("o-nama")}
                    >
                      ABOUT US
                    </Nav.Link>
                    <Nav.Link
                      style={{ color: "white" }}
                      onClick={() => handleButtonClick("services")}
                    >
                      SERVICES
                    </Nav.Link>
                    <Nav.Link
                      style={{ color: "white" }}
                      onClick={() => handleButtonClick("references")}
                    >
                      REFERENCES
                    </Nav.Link>
                    <Nav.Link
                      style={{ color: "white" }}
                      onClick={() => handleButtonClick("partners")}
                    >
                      PARTNERS
                    </Nav.Link>

                    <Nav.Link
                      style={{ color: "white" }}
                      onClick={() => handleButtonClick("contact")}
                    >
                      CONTACT
                    </Nav.Link>

                    <Nav.Link
                      onClick={() => {
                        setMne(true);
                        setEng(false);
                      }}
                      id={activeMne}
                      style={{ color: "#E21818" }}
                    >
                      MNE
                    </Nav.Link>
                    <Nav.Link
                      id={activeEng}
                      onClick={() => {
                        setMne(false);
                        setEng(true);
                      }}
                      style={{ color: "blue" }}
                    >
                      ENG
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
            <p>tehcnical security solutions</p>
          </Col>
        </Container>
      </section>
    </div>
  );
}

export default HomeSection;
