import styled from "styled-components";
import Header from "./components/Header/Header";
import GeolocationPrompt from "./components/Geolocalise/Geolocalise";
import { Fade, Slide } from "react-awesome-reveal";
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
  return (
    <StyledApp>
      {showPrompt && !ville && location.pathname === "/" && (
        <Slide direction="down" triggerOnce>
          <GeolocationPrompt />
        </Slide>
      )}
      <Header setPopRouter={setPopRouter} />
      <Routes>
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/refresh" element={<Refresh />} />
        <Route path="*" element={<Home setPopRouter={setPopRouter} />} />
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
