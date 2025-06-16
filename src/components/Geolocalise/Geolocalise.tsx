import { useState } from "react";
import styled from "styled-components";
import { Dynamic } from "../../Context/ContextDynamique";
type TypeState = {
  latitude: number;
  longitude: number;
};
function GeolocationPrompt() {
  const [position, setPosition] = useState<TypeState | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [askPermission, setAskPermission] = useState(true);
  const { setVille } = Dynamic();

  const handleGeolocation = () => {
    if (!navigator.geolocation) {
      setError("La géolocalisation n'est pas supportée par ce navigateur.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setPosition({ latitude, longitude });
        setAskPermission(false);
        fetchCity(latitude, longitude);
      },
      (err) => {
        setError("Impossible d'accéder à votre position.");
        console.error(err);
        setAskPermission(false);
      }
    );
  };
  const fetchCity = async (latitude: number, longitude: number) => {
    try {
      const res = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${
          import.meta.env.VITE_OPENCAGE_KEY
        }&language=fr`
      );
      const data = await res.json();
      const city =
        data.results[0]?.components?.city ||
        data.results[0]?.components?.town ||
        data.results[0]?.components?.village ||
        data.results[0]?.components?.county;
      const country = data.results[0]?.components?.county
        ? data.results[0]?.components?.country
        : "Non fourni";
      const dataLocalication = `${city}`;
      setVille(dataLocalication);
      // const dataLocalication = `${city} (${country})`;
      // setVille(dataLocalication);
    } catch (err) {
      console.error("Erreur lors du géocodage inverse :", err);
    }
  };

  return (
    <StyledGeolocationPrompt>
      {position ? (
        <p>Merci 😉</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : askPermission ? (
        <div
          style={{
            padding: "1rem",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        >
          <p>👋 Votre position nous aidera a mieux vous servir</p>
          <button onClick={handleGeolocation}>
            Autoriser la géolocalisation de ma ville
          </button>
        </div>
      ) : (
        <p>Chargement...</p>
      )}
    </StyledGeolocationPrompt>
  );
}

export default GeolocationPrompt;

const StyledGeolocationPrompt = styled.div`
  button {
    cursor: pointer;
  }
`;
