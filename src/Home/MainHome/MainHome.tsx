import styled from "styled-components";
import COLORS from "../../Styles/Styles";
import BarreSearch from "../../components/BarreSearch/BarreSearch";
import { useState } from "react";
import Loading from "../../components/Loading/Loading";
import type { TypeProps } from "../Home";
const MainHome = ({ ville, setVille, setPopRouter }: TypeProps) => {
  const [selectSaveur, setSelectSaveur] = useState("");
  const cancelPositon = () => {
    setVille("");
  };
  return (
    <StyledMainHome>
      <h1>Link to favorite food</h1>
      <div className="liste-country">
        <span
          onClick={() =>
            setSelectSaveur((prev) => (prev === "Guyane" ? "" : "Guyane"))
          }
          className={selectSaveur === "Guyane" ? "actif" : ""}
        >
          Guyane
        </span>
        <span
          onClick={() =>
            setSelectSaveur((prev) =>
              prev === "Guadeloupe" ? "" : "Guadeloupe"
            )
          }
          className={selectSaveur === "Guadeloupe" ? "actif" : ""}
        >
          Guadeloupe
        </span>
        <span
          onClick={() =>
            setSelectSaveur((prev) =>
              prev === "Martinique" ? "" : "Martinique"
            )
          }
          className={selectSaveur === "Martinique" ? "actif" : ""}
        >
          Martinique
        </span>
        <span
          onClick={() =>
            setSelectSaveur((prev) => (prev === "Mayotte" ? "" : "Mayotte"))
          }
          className={selectSaveur === "Mayotte" ? "actif" : ""}
        >
          Mayotte
        </span>
      </div>
      <BarreSearch />
      <div className="position">
        <span onClick={() => cancelPositon()} className="localisation">
          Lieu actuel : {ville ? `${ville} ✅` : <Loading />}{" "}
        </span>
        <span>
          Saveurs de : {selectSaveur ? `${selectSaveur} ✅` : "Tous"}{" "}
        </span>
      </div>
    </StyledMainHome>
  );
};

export default MainHome;
const StyledMainHome = styled.main`
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${COLORS.second};
  flex-direction: column;
  h1 {
    color: ${COLORS.white};
    font-size: 3.7em;
    margin-bottom: 15px;
    letter-spacing: 0.2em;
  }
  .liste-country {
    width: 40%;
    margin-top: 5px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    .actif {
      transition: 0.2s;
      background: ${COLORS.main};
      color: ${COLORS.yellow};
      box-shadow: 1px 1px 7px ${COLORS.yellow};
    }
    span {
      transition: 0.2s;
      color: ${COLORS.black};
      cursor: pointer;
      background: ${COLORS.yellow};
      box-shadow: 1px 1px 7px ${COLORS.black};
      padding: 2px 15px;
      border-radius: 5px;
      transition: 0.2s;
    }
    span:active {
      box-shadow: none;
    }
    span:hover {
      transition: 0.2s;
      transform: scale(1.05);
    }
  }
  .position {
    width: 100%;
    margin-top: 20px;
    .localisation {
      text-decoration: underline;
      cursor: pointer;
    }
    span {
      font-size: 0.8em;
      display: flex;
      align-items: center;
      margin: 5px;
      display: flex;
    }
  }
  @media screen and (max-width: 450px) {
    padding: 10px;
    h1 {
      width: 100%;
      text-align: center;
      font-size: 2em;
    }
    .liste-country {
      width: 100%;
      span {
        margin: 5px 0px;
      }
    }
  }
`;
