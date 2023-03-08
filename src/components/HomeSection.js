import { Container, Col } from "react-bootstrap";

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
          <Col className="text-right" md={12}>
            <img src={require("../assets/logo.jpg")} alt="logo-img" />
            <button onClick={() => handleButtonClick("o-nama")}>O nama</button>
            <button onClick={() => handleButtonClick("partners")}>
              Partneri
            </button>
            <button onClick={() => handleButtonClick("references")}>
              Reference
            </button>
            <button onClick={() => handleButtonClick("services")}>
              Usluge
            </button>
            <button onClick={() => handleButtonClick("contact")}>
              Kontakt
            </button>
          </Col>
        </Container>
      </header>
      <section className="landing-section">
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
