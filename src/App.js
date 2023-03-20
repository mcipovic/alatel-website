import AboutUs from "./components/AboutUs";
import HomeSection from "./components/HomeSection";
import Services from "./components/Services";
import Partners from "./components/Partners";
import ReferencesComponent from "./components/ReferencesComponent";
import Contact from "./components/Contact";
import { Container } from "react-bootstrap";
import React, { useState } from "react";
function App() {
  const [eng, setEng] = useState(false);
  const [mne, setMne] = useState(true);
  return (
    <div className="App">
      <HomeSection eng={eng} setEng={setEng} mne={mne} setMne={setMne} />
      <AboutUs eng={eng} setEng={setEng} mne={mne} setMne={setMne} />
      <Services eng={eng} mne={mne} />
      <ReferencesComponent eng={eng} mne={mne} />
      <Partners eng={eng} mne={mne} />
      <Contact eng={eng} mne={mne} />
      <footer className="footer">
        <Container>
          <p>&copy; 2023 AlaTel. All rights reserved.</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
