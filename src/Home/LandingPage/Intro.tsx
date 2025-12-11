import { Slide } from "react-awesome-reveal";
import styled from "styled-components";
import COLORS from "../../Styles/Styles";
import { useLocation } from "react-router-dom";

const Intro = () => {
  const pageActu = useLocation();
  return (
    <StyledIntro>
      <Slide direction="down" triggerOnce>
        <h1>Nou Link</h1>
      </Slide>
      {/* <p>Trouvez les spécialités culinaires de vos péyi, où que vous soyez.</p> */}

      <p>
        {pageActu.pathname === "/auth"
          ? "Partagez vos spécialités"
          : "Pou zot trouvé zot favorite food"}
      </p>
      {/* <h2 className="last-p">Pou zot trouvé zot favorite food.</h2> */}
      <Slide direction="down" triggerOnce>
        <div className="departement">
          <span className="span-countries ">Guyane</span>
          <span className="span-countries ">Guadeloupe</span>
          <span className="span-countries ">Martinique</span>
          <span className="span-countries ">Mayotte</span>
          <span className="span-countries ">Madagascar</span>
        </div>
      </Slide>
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
  h1 {
    color: ${COLORS.yellow};
    font-size: 6em;
    margin-bottom: 0px;
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
  .departement {
    /* max-width: 70%; */
    max-width: 100%;
    /* margin: 0px auto; */
    margin: 15px auto;
    border-bottom: solid 2px ${COLORS.yellow};
    display: flex;
    flex-wrap: wrap;
    .span-countries {
      margin: 0px 20px;
      color: #000000;
      font-size: 1.1em;
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
    .departement {
      width: 100% !important;
      justify-content: center;
      .span-countries {
        margin: 0px 5px;
        font-size: 1em;
      }
    }
  }
`;
