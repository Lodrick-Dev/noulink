import { Slide } from "react-awesome-reveal";
import styled from "styled-components";
import COLORS from "../../Styles/Styles";
import ListCountry from "./ListCountry";
import { useNavigate } from "react-router-dom";

const Intro = () => {
  const nav = useNavigate();
  const path = window.location.pathname;
  console.log("Intro path", path);
  return (
    <StyledIntro>
      <Slide direction="down" triggerOnce>
        <div className="hero-eyebrow">
          <div className="eyebrow-pill">
            🌴 Diaspora Antilles · Guyane · DOM-TOM
          </div>
        </div>
      </Slide>
      <Slide direction="down" triggerOnce>
        <h1>
          Nou <span>Link</span>{" "}
        </h1>
      </Slide>
      <p className="hero-tagline">
        {path === "/"
          ? "Tu vis dans ta ville et tu cherches"
          : "Tu cuisines dans ta ville et tu veux"}
        <strong>
          {" "}
          {path === "/"
            ? "un plat de chez toi?"
            : "proposer tes plats à la communauté ?"}{" "}
        </strong>
        &nbsp;
        <br />
        {path === "/"
          ? "Retrouve ceux qui cuisinent près de toi."
          : "Fais découvrir les plats locaux autour de toi."}
      </p>
      <Slide direction="down" triggerOnce className="slid-up">
        <ListCountry />
      </Slide>
      {path === "/" && (
        <div className="hero-cta">
          <button className="btn-primary" onClick={() => nav("/home")}>
            🍽️ Trouver des repas près de moi
          </button>
        </div>
      )}
    </StyledIntro>
  );
};

export default Intro;
const StyledIntro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  /* padding-bottom: 50px; */
  width: 100%;
  height: 100%;
  color: ${COLORS.white};
  backdrop-filter: blur(1px);
  .eyebrow-pill {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(244, 211, 94, 0.12); //rgb(244 211 94 / 53%)
    border: 1px solid rgba(244, 211, 94, 0.3);
    border-radius: 9999px;
    padding: 7px 18px;
    font-size: 0.78rem;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: ${COLORS.yellow}; //#a5d8ff
    margin-bottom: 28px;
  }
  h1 {
    color: ${COLORS.yellow};
    font-size: 6em;
    margin-bottom: 0px;
    span {
      color: ${COLORS.white};
    }
  }
  .hero-tagline {
    font-size: clamp(1.05rem, 2.5vw, 1.35rem);
    color: rgba(253, 253, 253, 0.72);
    min-width: 100%;
    margin: 20px auto;
    line-height: 1.65;
  }
  .hero-tagline strong {
    color: ${COLORS.white};
    font-weight: 600;
  }
  p {
    text-align: center;
    width: 70%;
    /* width: 100%; */
    font-size: 2em;
    margin: 0px auto 0px;
    margin-top: 0px;
    color: ${COLORS.white};
    letter-spacing: 3px;
  }
  .last-p {
    margin-bottom: 5px;
  }
  .slid-up {
    width: 50%;
  }
  .hero-cta {
    margin-top: 40px;
    .btn-primary {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: ${COLORS.yellow};
      color: ${COLORS.main};
      font-family: "DM Sans", sans-serif;
      font-weight: 700;
      font-size: 1.05rem;
      padding: 16px 42px;
      border-radius: 9999px;
      border: none;
      cursor: pointer;
      animation: pulseShadow 2.8s 1.8s infinite;
      transition:
        transform 0.2s,
        box-shadow 0.2s;
      text-decoration: none;
    }
    .btn-primary:hover {
      transform: scale(1.06);
      box-shadow: 0 8px 36px rgba(244, 211, 94, 0.45);
      animation: none;
    }
    @keyframes pulseShadow {
      0%,
      100% {
        box-shadow: 0 0 0 0 rgba(244, 211, 94, 0.5);
      }
      50% {
        box-shadow: 0 0 0 16px rgba(244, 211, 94, 0);
      }
    }
  }
  @media (max-width: 450px) {
    padding: 5px;
    h1 {
      font-size: 3.6em;
      letter-spacing: 3px;
    }
    p {
      width: 100%;
      padding: 0px 5px;
      font-size: 1.6em;
    }
    .slid-up {
      width: 100%;
    }
  }
`;
