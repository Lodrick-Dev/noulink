import styled from "styled-components";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import COLORS from "../../Styles/Styles";

const FinalCta = () => {
  const navigate = useNavigate();

  return (
    <Section>
      <div className="cta-content">
        <span>Ta prochaine découverte commence ici</span>
        <h2>Retrouve le goût de chez toi.</h2>
        <p>Parcours les profils et les spécialités autour de toi.</p>
        <button onClick={() => navigate("/home")}>
          Trouver un plat <ArrowRight size={18} />
        </button>
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

  button {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    min-height: 50px;
    margin-top: 25px;
    padding: 0 23px;
    border: 0;
    border-radius: 999px;
    background: ${COLORS.yellow};
    color: ${COLORS.main};
    font-size: 0.9rem;
    font-weight: 800;
    cursor: pointer;
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;
  }

  button:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 24px rgba(31, 64, 104, 0.22);
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
