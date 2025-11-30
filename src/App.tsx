import styled from "styled-components";
import Header from "./components/Header/Header";
import GeolocationPrompt from "./components/Geolocalise/Geolocalise";
import { Slide } from "react-awesome-reveal";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
// import dashboard from "./components/Refresh/Dashboard";
import Home from "./Home/Home";
import Footer from "./components/Footer/Footer";
import { Dynamic } from "./Context/ContextDynamique";
import { ToastContainer } from "react-toastify";
import MentionsLegales from "./components/Legales/MentionsLegales";
import PolitiqueConfidentialite from "./components/Legales/PolitiqueConfidentialite";
import Cgu from "./components/Legales/Cgu";
import LandingPage from "./Home/LandingPage/LandingPage";
// import { PopCookies } from "./components/PopCookies/PopCookies";
import ConsentementRGPD from "./components/Legales/ConsentementRGPD";
import Cgv from "./components/Legales/Cgv";
import Auth from "./Screens/Auth/Auth";
import EmailConf from "./components/Register/EmailConf";
import ResetPassword from "./components/Register/ResetPassword";
import PrivateRoute from "./components/Private/PrivateRoute";
import PublicRoute from "./components/Private/PublicRoute";
import PopPay from "./components/AbonnementCard/PopPay";
import FormFacture from "./components/FormFacture/FormFacture";
import Dashboard from "./components/Refresh/Dashboard";

function App() {
  const { ville, popToPay } = Dynamic();
  const [showPrompt, setShowPrompt] = useState(false);
  const location = useLocation();
  const [popFacture, setPopFacture] = useState(false);
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
      {popFacture && <FormFacture setPopFacture={setPopFacture} />}
      {showPrompt && !ville && location.pathname === "/home" && (
        <Slide direction="down" triggerOnce>
          <GeolocationPrompt />
        </Slide>
      )}
      {location.pathname !== "/" && location.pathname !== "/conf-email" && (
        <Header />
      )}
      {/* {location.pathname !== "/" && <PopCookies />} */}
      <Routes>
        {/* <Route path="/inscription" element={<Inscription />} /> */}
        <Route
          path="/auth"
          element={
            <PublicRoute>
              <Auth />
            </PublicRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard setPopFacture={setPopFacture} />
            </PrivateRoute>
          }
        />
        <Route path="/mentions" element={<MentionsLegales />} />
        <Route path="/cgu" element={<Cgu />} />
        <Route path="/cgv" element={<Cgv />} />
        <Route path="/conf-email" element={<EmailConf />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route
          path="/politique-confidentialite"
          element={<PolitiqueConfidentialite />}
        />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
      <Footer />
      {popToPay && <PopPay />}
      <ToastContainer position="top-right" />
    </StyledApp>
  );
}

export default App;
const StyledApp = styled.div`
  position: relative;
`;
