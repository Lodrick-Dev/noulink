import { useEffect, useState } from "react";
import styled from "styled-components";
import COLORS from "../../Styles/Styles";
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const ConsentementRGPD = () => {
  const [consentGiven, setConsentGiven] = useState<boolean | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("ga_consent");
    if (stored) {
      try {
        const { value, timestamp } = JSON.parse(stored);
        const SIX_MONTHS = 1000 * 60 * 60 * 24 * 30 * 6;
        const now = Date.now();

        if (now - timestamp < SIX_MONTHS) {
          setConsentGiven(value === "true");
          if (value === "true") {
            loadAnalytics();
          }
          return;
        }

        // Expiré → on redemande
        localStorage.removeItem("ga_consent");
      } catch {
        localStorage.removeItem("ga_consent");
      }
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(
      "ga_consent",
      JSON.stringify({
        value: "true",
        timestamp: Date.now(),
      })
    );
    setConsentGiven(true);
    loadAnalytics();
  };

  const handleRefuse = () => {
    localStorage.setItem(
      "ga_consent",
      JSON.stringify({
        value: "false",
        timestamp: Date.now(),
      })
    );
    setConsentGiven(false);
  };

  const loadAnalytics = () => {
    if (window.gtag) return;

    const script1 = document.createElement("script");
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-7DXFYR98PL";
    script1.async = true;
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-7DXFYR98PL');
  `;
    document.head.appendChild(script2);
  };

  if (consentGiven !== null) return null;

  return (
    <StyledConsentementRGPD>
      <p>
        Pour mieux comprendre comment notre site est utilisé et l’améliorer,
        nous recueillons des données anonymes de navigation. Souhaitez-vous y
        contribuer ?
      </p>
      <a
        className="a-direct"
        href="/politique-confidentialite"
        rel="noopener noreferrer"
      >
        En savoir plus
      </a>
      <div className="box-btns-legale">
        <button className="acc" onClick={handleAccept}>
          Accepter
        </button>
        <button className="ref" onClick={handleRefuse}>
          Refuser
        </button>
      </div>
    </StyledConsentementRGPD>
  );
};

export default ConsentementRGPD;
const StyledConsentementRGPD = styled.div`
  padding: 15px;
  position: fixed;
  z-index: 80;
  background: ${COLORS.white};
  width: 100%;
  bottom: 0px;
  display: flex;
  flex-direction: column;
  .a-direct {
    color: ${COLORS.red};
    margin: 10px 0px;
  }
  .box-btns-legale {
    width: 50%;
    button {
      /* width: 15%; */
      padding: 5px 25px;
      margin: 10px;
      border-radius: 10px;
      border: none;
      cursor: pointer;
      box-shadow: 1px 1px 5px 1px ${COLORS.black};
      outline: none;
    }
    .acc {
      background: ${COLORS.green};
      color: white;
      font-size: 1.1em;
    }
    .ref {
      background: ${COLORS.red};
      color: white;
    }
  }
`;
