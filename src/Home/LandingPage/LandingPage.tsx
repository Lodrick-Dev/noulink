import styled from "styled-components";
import COLORS from "../../Styles/Styles";
import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";
import Faq from "../../components/FAQ/faq";
import AbonnementCard from "../../components/AbonnementCard/AbonnementCard";
import Intro from "./Intro";
import HowItWorks from "./HowItWorks";
import NewsletterWaitlist from "./NewsletterWaitlist";
import Story from "./Story";

const LandingPage = () => {
  return (
    <StyledLandingPage>
      <section className="hero">
        <Intro />
        <nav className="cta">
          <Link to="/home" className="btn">
            Saveurs près de chez moi
          </Link>
          <Link to="/auth" className="btn secondary">
            Publie tes spécialités
          </Link>
        </nav>
      </section>
      <Slide direction="up" triggerOnce>
        <Story />
      </Slide>

      <Slide direction="up" triggerOnce>
        <section className="section-2">
          <h3>Pourquoi utiliser Nou Link ?</h3>
          <p>
            Nou Link est la première plateforme qui connecte les passionnés de
            cuisine ultramarine. Retrouvez des plats traditionnels comme le{" "}
            <strong>colombo</strong>, le <strong>bokit</strong> ou les{" "}
            <strong>accras</strong> près de chez vous, que vous soyez à{" "}
            <strong>Paris</strong>, <strong>Lyon</strong>,
            <strong>Marseille</strong> ou ailleurs en France.
          </p>
        </section>
      </Slide>
      <Slide direction="right" triggerOnce>
        <AbonnementCard />
      </Slide>
      <Slide direction="up" triggerOnce>
        <HowItWorks />
      </Slide>
      <Slide direction="down" triggerOnce>
        <NewsletterWaitlist />
      </Slide>
      <Slide direction="left" triggerOnce>
        <Faq />
      </Slide>
    </StyledLandingPage>
  );
};

export default LandingPage;

const StyledLandingPage = styled.section`
  padding: 50px 0px;
  color: ${COLORS.white};
  position: relative;
  background: ${COLORS.second};
  .hero {
    text-align: center;
    max-width: 100%;
    margin: 0 auto;
    .cta {
      position: relative;
      height: 50svh;
      margin-top: 50px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: ${COLORS.black};
      font-size: 1.2em;
      padding: 50px;
      border: none;
      cursor: pointer;
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        background: url("/assets/imglanding.jpg") no-repeat center center;
        background-size: cover;
        filter: blur(3px);
        /* border-radius: 15px; */
        z-index: 0;
        /* transform: scale(1.1); */
      }

      &::after {
        content: "";
        /* border-radius: 15px; */
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.4);
        z-index: 1;
      }
      > * {
        position: relative;
        z-index: 2;
      }
      .btn {
        display: inline-block;
        padding: 10px 40px;
        border-radius: 10px;
        background: ${COLORS.yellow};
        box-shadow: 0 0 10px ${COLORS.yellow};
        color: ${COLORS.main};
        transition: 0.2s;
      }
      .btn.secondary {
        margin-top: 50px;
        background: ${COLORS.green};
        box-shadow: 0 0 20px ${COLORS.green};
        color: ${COLORS.white};
      }
      .btn.secondary:hover {
        transform: scale(1.05);
        box-shadow: 0 0 20px ${COLORS.green};
      }
      .btn:hover {
        transform: scale(1.05);
        box-shadow: 0 0 20px ${COLORS.yellow};
      }
    }
  }
  .section-2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px 10px;
    /* background: red; */
    width: 80%;
    margin: 50px auto;
    > p {
      margin-top: 20px;
      text-align: center;
      > strong {
        color: ${COLORS.main};
      }
    }
  }
  @media (max-width: 450px) {
    .hero {
      .cta {
        font-size: 1em;
        .btn.secondary {
          margin-top: 20px;
        }
      }
    }
    .section-2 {
      width: 90%;
    }
  }
`;
