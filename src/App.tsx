import styled from "styled-components";
import Header from "./components/Header/Header";
import GeolocationPrompt from "./components/Geolocalise/Geolocalise";
import { Slide } from "react-awesome-reveal";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Inscription from "./components/Inscription/Inscription";
import Refresh from "./components/Refresh/Refresh";
import PopRouter from "./components/PopRouter/PopRouter";
import Home from "./Home/Home";
import Footer from "./components/Footer/Footer";
import { Dynamic } from "./Context/ContextDynamique";
import { ToastContainer } from "react-toastify";
import MentionsLegales from "./components/Legales/MentionsLegales";
import PolitiqueConfidentialite from "./components/Legales/PolitiqueConfidentialite";
import Cgu from "./components/Legales/Cgu";
import LandingPage from "./Home/LandingPage/LandingPage";
import { PopCookies } from "./components/PopCookies/PopCookies";
import ConsentementRGPD from "./components/Legales/ConsentementRGPD";

function App() {
  const [showPrompt, setShowPrompt] = useState(false);
  const [popRouter, setPopRouter] = useState(false);
  const location = useLocation();
  const { ville } = Dynamic();
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPrompt(true);
    }, 2000); // 2000 ms = 2 secondes

    return () => clearTimeout(timer); // bonne pratique pour nettoyer si le composant est démonté
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <StyledApp>
      <ConsentementRGPD />
      {showPrompt && !ville && location.pathname === "/home" && (
        <Slide direction="down" triggerOnce>
          <GeolocationPrompt />
        </Slide>
      )}
      {location.pathname !== "/" && <Header setPopRouter={setPopRouter} />}
      {location.pathname !== "/" && <PopCookies />}
      <Routes>
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/update" element={<Refresh />} />
        <Route path="/mentions" element={<MentionsLegales />} />
        <Route path="/cgu" element={<Cgu />} />
        <Route
          path="/politique-confidentialite"
          element={<PolitiqueConfidentialite />}
        />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
      <Footer />
      {popRouter && <PopRouter setPopRouter={setPopRouter} />}
      <ToastContainer position="top-right" />
    </StyledApp>
  );
}

export default App;
const StyledApp = styled.div`
  position: relative;
`;
