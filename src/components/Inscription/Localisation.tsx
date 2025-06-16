import { useState } from "react";
import styled from "styled-components";
import COLORS from "../../Styles/Styles";
import { Dynamic } from "../../Context/ContextDynamique";
const Localisation = () => {
  const [error, setError] = useState<string | null>(null);
  const [askPermission, setAskPermission] = useState(true);
  // const [withCountry, setWithCountry] = useState("");
  const { setVille, ville, deleteCityCookie } = Dynamic();

  const handleGeolocation = () => {
    if (!navigator.geolocation) {
      setError("La géolocalisation n'est pas supportée par ce navigateur.");
      return;
    }
    setVille("Recherche...");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
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
      // const country = data.results[0]?.components?.county
      //   ? data.results[0]?.components?.country
      //   : "Non fourni";
      // setWithCountry(country);
      setVille(city);
    } catch (err) {
      setVille("");
      console.error("Erreur lors du géocodage inverse :", err);
    }
  };
  const cancelVille = () => {
    if (window.confirm("Retirer la ville ? Ok pour confirmer")) {
      setAskPermission(true);
      setError(null);
      // setWithCountry("");
      setVille("");
      deleteCityCookie();
    }
  };
  return (
    <StyledLocalisation>
      {ville ? (
        <p onClick={() => cancelVille()} className="ville-name">
          Lieu : {ville}
        </p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : askPermission ? (
        <div className="u-box">
          <p>📌 Trouvons automatiquement votre ville ?</p>
          <button onClick={handleGeolocation}>Autoriser</button>
        </div>
      ) : (
        <p>Chargement...</p>
      )}
    </StyledLocalisation>
  );
};

export default Localisation;
const StyledLocalisation = styled.div`
  background: ${COLORS.main};
  margin-top: 10px;
  padding: 5px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  .ville-name {
    color: ${COLORS.white};
    cursor: pointer;
    transition: 0.2s;
  }
  .ville-name:hover {
    transition: 0.2s;
    color: ${COLORS.green};
  }
  .u-box {
    padding: "1rem";
    border: "1px solid #ccc";
    border-radius: "8px";
    width: 100%;
    p {
      width: 100%;
      text-align: center;
      font-size: 0.9em;
      color: ${COLORS.white};
    }
    button {
      background: ${COLORS.green};
      display: block;
      margin: 0px auto;
      padding: 5px 15px;
      border-radius: 5px;
      outline: none;
      border: none;
      cursor: pointer;
    }
  }
`;
