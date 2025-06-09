import styled from "styled-components";
import Header from "./components/Header/Header";
import GeolocationPrompt from "./components/Geolocalise/Geolocalise";
import { Fade, Slide } from "react-awesome-reveal";
import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Inscription from "./components/Inscription/Inscription";
import Refresh from "./components/Refresh/Refresh";
import PopRouter from "./components/PopRouter/PopRouter";
import Home from "./Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  const [ville, setVille] = useState<string>("");
  const [showPrompt, setShowPrompt] = useState(false);
  const [popRouter, setPopRouter] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPrompt(true);
    }, 2000); // 2000 ms = 2 secondes

    return () => clearTimeout(timer); // bonne pratique pour nettoyer si le composant est démonté
  }, []);
  return (
    <StyledApp>
      {showPrompt && !ville && location.pathname === "/" && (
        <Slide direction="down" triggerOnce>
          <GeolocationPrompt setVille={setVille} />
        </Slide>
      )}
      <Header setPopRouter={setPopRouter} />
      <Routes>
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/refresh" element={<Refresh />} />
        <Route
          path="*"
          element={
            <Home
              ville={ville}
              setVille={setVille}
              setPopRouter={setPopRouter}
            />
          }
        />
      </Routes>
      <Footer />
      {popRouter && <PopRouter setPopRouter={setPopRouter} />}
    </StyledApp>
  );
}

export default App;
const StyledApp = styled.div`
  position: relative;
`;
