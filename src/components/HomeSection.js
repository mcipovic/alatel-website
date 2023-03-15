import { Container, Col } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function HomeSection() {
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
              />
              <Navbar.Collapse>
                <Nav style={{}} className="ms-auto justify-content-center">
                  <Nav.Link
                    style={{ color: "white", marginTop: "20px" }}
                    onClick={() => handleButtonClick("o-nama")}
                  >
                    O NAMA
                  </Nav.Link>
                  <Nav.Link
                    style={{ color: "white", marginTop: "20px" }}
                    onClick={() => handleButtonClick("services")}
                  >
                    USLUGE
                  </Nav.Link>
                  <Nav.Link
                    style={{ color: "white", marginTop: "20px" }}
                    onClick={() => handleButtonClick("references")}
                  >
                    REFERENCE
                  </Nav.Link>
                  <Nav.Link
                    style={{ color: "white", marginTop: "20px" }}
                    onClick={() => handleButtonClick("partners")}
                  >
                    PARTNERI
                  </Nav.Link>

                  <Nav.Link
                    style={{ color: "white", marginTop: "20px" }}
                    onClick={() => handleButtonClick("contact")}
                  >
                    KONTAKT
                  </Nav.Link>
                </Nav>
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
