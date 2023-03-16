import AboutUs from "./components/AboutUs";
import HomeSection from "./components/HomeSection";
import Services from "./components/Services";
import Partners from "./components/Partners";
import ReferencesComponent from "./components/ReferencesComponent";
import Contact from "./components/Contact";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
function App() {
  return (
    <div className="App">
      <HomeSection />
      <AboutUs />
      <Services />
      <ReferencesComponent />
      <Partners />
      <Contact />
      <footer className="footer">
        <Container>
          <p>&copy; 2023 AlaTel. All rights reserved.</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
