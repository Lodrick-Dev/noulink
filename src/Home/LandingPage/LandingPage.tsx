import styled from "styled-components";
import COLORS from "../../Styles/Styles";
import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";

const LandingPage = () => {
  return (
    <StyledLandingPage>
      <div className="hero">
        <Slide direction="down" triggerOnce>
          <h1>Nou Link</h1>
        </Slide>
        <p>
          Trouvez les spécialités de vos péyi, où que vous soyez.
          <br />
          La plateforme connecte les Antilles/Guyane autour des spécialités
          culinaires.
          <br />
        </p>

        <p className="last-p">Nou Link pou zot trouvé zot favorite food.</p>
        <Slide direction="down" triggerOnce>
          <div className="departement">
            <span className="span-countries ">Guyane</span>
            <span className="span-countries ">Guadeloupe</span>
            <span className="span-countries ">Martinique</span>
            <span className="span-countries ">Mayotte</span>
          </div>
        </Slide>
        <div className="cta">
          <Link to="/home" className="btn">
            Découvrir les saveurs près de chez vous
          </Link>
          <Link to="/inscription" className="btn secondary">
            Cuisinier ? Rejoignez Nou Link
          </Link>
        </div>
      </div>
      {/* <div className="food-gallery">
        <h2>Quelques plats que vous pourriez trouver</h2>
        <div className="images">
          <img
            src="https://via.placeholder.com/250x250.png?text=Boudin+créole"
            alt="Boudin créole"
          />
          <img
            src="https://via.placeholder.com/250x250.png?text=Colombo"
            alt="Colombo"
          />
          <img
            src="https://via.placeholder.com/250x250.png?text=Accras"
            alt="Accras de morue"
          />
          <img
            src="https://via.placeholder.com/250x250.png?text=Blaff+de+poisson"
            alt="Blaff de poisson"
          />
        </div>
      </div> */}
    </StyledLandingPage>
  );
};

export default LandingPage;

const StyledLandingPage = styled.div`
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
      font-size: 4em;
      margin-bottom: 0px;
    }
    p {
      text-align: center;
      width: 70%;
      font-size: 1.2em;
      margin: 0px auto 30px;
      margin-top: 0px;
      margin-bottom: 30px;
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
  .food-gallery {
    text-align: center;
    margin-top: 20px;
    h2 {
      color: ${COLORS.yellow};
      font-size: 2em;
      margin-bottom: 30px;
    }
    .images {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 10px;
        box-shadow: 0 0 10px ${COLORS.yellow};
        transition: 0.2s;
      }
      img:hover {
        transform: scale(1.05);
        box-shadow: 0 0 20px ${COLORS.yellow};
      }
    }
  }

  @media (max-width: 500px) {
    .hero {
      h1 {
        font-size: 2.5em;
      }
      p {
        width: 100%;
        padding: 0px 5px;
        font-size: 0.9em;
        margin-bottom: 15px;
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
