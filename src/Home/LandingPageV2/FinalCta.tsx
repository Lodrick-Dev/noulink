import styled from "styled-components";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import COLORS from "../../Styles/Styles";

const FinalCta = () => {
  const navigate = useNavigate();

  return (
    <Section>
      <div className="cta-content">
        <span>Tu proposes des plats ?</span>
        <h2>Fais découvrir tes spécialités.</h2>
        <p>
          Présente ton activité sur Nou Link et reçois les commandes passées
          sur la plateforme.
        </p>
        <div className="actions">
          <button className="primary" onClick={() => navigate("/auth")}>
            Référencer mon activité <ArrowRight size={18} />
          </button>
          <button className="secondary" onClick={() => navigate("/home")}>
            Je cherche un plat
          </button>
        </div>
      </div>
      <div className="decor decor-one" />
      <div className="decor decor-two" />
    </Section>
  );
};

export default FinalCta;

const Section = styled.section`
  position: relative;
  overflow: hidden;
  padding: 76px 24px;
  background: ${COLORS.second};
  color: ${COLORS.white};
  text-align: center;

  .cta-content {
    position: relative;
    z-index: 1;
    max-width: 700px;
    margin: 0 auto;
  }

  .cta-content > span {
    color: ${COLORS.yellow};
    font-size: 0.74rem;
    font-weight: 800;
    letter-spacing: 0.15em;
    text-transform: uppercase;
  }

  h2 {
    margin: 13px 0 9px;
    font-family: Georgia, serif;
    font-size: clamp(2.1rem, 5vw, 3.5rem);
    letter-spacing: -0.045em;
  }

  p {
    color: rgba(253, 253, 253, 0.82);
    font-size: 0.96rem;
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
    margin-top: 25px;
  }

  button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    min-height: 50px;
    padding: 0 23px;
    border-radius: 999px;
    font-size: 0.9rem;
    font-weight: 800;
    cursor: pointer;
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;
  }

  .primary {
    border: 0;
    background: ${COLORS.yellow};
    color: ${COLORS.main};
  }

  .primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 24px rgba(31, 64, 104, 0.22);
  }

  .secondary {
    border: 1px solid rgba(253, 253, 253, 0.55);
    background: transparent;
    color: ${COLORS.white};
    transition:
      background 0.2s ease,
      transform 0.2s ease;
  }

  .secondary:hover {
    transform: translateY(-3px);
    background: rgba(253, 253, 253, 0.12);
  }

  .decor {
    position: absolute;
    width: 250px;
    height: 250px;
    border: 1px solid rgba(253, 253, 253, 0.17);
    border-radius: 50%;
  }

  .decor-one {
    top: -140px;
    left: 8%;
  }

  .decor-two {
    right: 7%;
    bottom: -180px;
    width: 320px;
    height: 320px;
    border-color: rgba(244, 211, 94, 0.36);
  }
`;
