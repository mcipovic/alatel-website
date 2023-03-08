import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "aos/dist/aos.css";
import AOS from "aos";

const references = [
  {
    name: "John Doe",
    title: "CEO, Company X",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod justo a sem porta, a varius purus consequat. Nulla bibendum ante non sagittis dictum. Donec vel libero ac tortor posuere maximus.",
  },
  {
    name: "Jane Smith",
    title: "COO, Company Y",
    message:
      "Praesent sit amet bibendum libero. Nam eu leo ultrices, pretium sapien nec, convallis enim. Curabitur sit amet turpis vitae sapien scelerisque consectetur. Proin id mauris id quam tincidunt sollicitudin.",
  },
  {
    name: "Bob Johnson",
    title: "CTO, Company Z",
    message:
      "Suspendisse potenti. Aliquam varius eros libero, ac aliquam enim bibendum nec. Sed sodales, ipsum eu dignissim pharetra, mi eros tincidunt massa, vitae vestibulum magna enim vel nunc.",
  },
];

const Reference = ({ name, title, message }) => {
  return (
    <Col data-aos="fade-up" className="mb-4">
      <div className="p-4 rounded text-center">
        <p className="text-danger mb-0">{message}</p>
        <div className="mt-4">
          <h5 className="text-white mb-0">{name}</h5>
          <p className="text-muted mb-0">{title}</p>
        </div>
      </div>
    </Col>
  );
};

const ReferencesComponent = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="references" className="py-5 references">
      <Container>
        <h2 className="text-white mb-5 text-center">Reference</h2>
        <Row>
          {references.map((reference, index) => (
            <Reference key={index} {...reference} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ReferencesComponent;
