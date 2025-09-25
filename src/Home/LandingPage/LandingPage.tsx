import styled from "styled-components";
import COLORS from "../../Styles/Styles";
import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";
import Faq from "../../components/FAQ/faq";
import AbonnementCard from "../../components/AbonnementCard/AbonnementCard";

const LandingPage = () => {
  return (
    <StyledLandingPage>
      <div className="hero">
        <Slide direction="down" triggerOnce>
          <h1>Nou Link</h1>
        </Slide>
        <p>
          Trouvez les spécialités culinaires de vos péyi, où que vous soyez.
          {/* <br />
          La plateforme connecte les Antilles/Guyane autour des spécialités
          culinaires.
          <br /> */}
        </p>

        <h2 className="last-p">Nou Link pou zot trouvé zot favorite food.</h2>
        <Slide direction="down" triggerOnce>
          <div className="departement">
            <span className="span-countries ">Guyane</span>
            <span className="span-countries ">Guadeloupe</span>
            <span className="span-countries ">Martinique</span>
            <span className="span-countries ">Mayotte</span>
          </div>
        </Slide>
        <nav className="cta">
          <Link to="/home" className="btn">
            Découvrir les saveurs près de chez vous
          </Link>
          <Link to="/inscription" className="btn secondary">
            Publiez vos spécialités
          </Link>
        </nav>
      </div>
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
      <AbonnementCard />
      <Faq />
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
    /* background: orange; */
    margin: 0 auto;
    h1 {
      color: ${COLORS.yellow};
      font-size: 5em;
      margin-bottom: 0px;
    }
    p {
      text-align: center;
      width: 70%;
      font-size: 1.2em;
      margin: 0px auto 0px;
      margin-top: 0px;
    }
    .last-p {
      margin-bottom: 5px;
    }
    .departement {
      max-width: 70%;
      margin: 0px auto;
      border-bottom: solid 2px ${COLORS.yellow};
      .span-countries {
        margin: 0px 20px;
        color: #000000;
        font-size: 1.2em;
      }
    }
    .cta {
      position: relative;
      height: 50svh;
      /* border-radius: 20px; */
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
    > p {
      margin-top: 20px;
      text-align: center;
      > strong {
        color: ${COLORS.main};
      }
    }
  }
  @media (max-width: 500px) {
    .hero {
      h1 {
        font-size: 3em;
      }
      p {
        width: 100%;
        padding: 0px 5px;
        font-size: 0.9em;
      }
      .departement {
        max-width: 90% !important;
        .span-countries {
          margin: 0px 5px;
          font-size: 1em;
        }
      }
      .cta {
        .btn {
          font-size: 0.8em;
          padding: 10px 20px;
        }
        .btn.secondary {
          margin-top: 20px;
        }
      }
    }
  }
`;
