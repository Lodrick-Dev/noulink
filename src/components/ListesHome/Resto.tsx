import React, { useState } from "react";
import { Slide } from "react-awesome-reveal";
import styled from "styled-components";
import type { TypeDocProps } from "./ListesHome";
import { capitalizeFirstLetter } from "../utils/fonctions";
import COLORS from "../../Styles/Styles";
import { OctagonX } from "lucide-react";
import { useLocation } from "react-router-dom";
export type TypeDocPropsResto = {
  pseudo?: string;
  ville?: string;
  saveur?: string;
  profil?: string;
  galerie?: string[];
  description?: string;
  speciality?: string[];
  setGetOne: React.Dispatch<React.SetStateAction<TypeDocProps | null>>;
};
const Resto = ({
  pseudo,
  ville,
  saveur,
  profil,
  galerie,
  description,
  speciality,
  setGetOne,
}: TypeDocPropsResto) => {
  const [expanded, setExpanded] = useState(false);
  const actuPage = useLocation();

  return (
    <StyledResto>
      <Slide direction="left" className="div-anim" triggerOnce>
        <em>Dites que vous venez de Nou Link</em>
        <div className="cards-profil">
          <img src={profil ? profil : "/assets/logo.png"} alt="img-profil" />
          <div className="infos-compte">
            <strong>{pseudo}</strong>
            <p className="lieu-text">📍 {capitalizeFirstLetter(ville)}</p>
            <p className="saveur-text">
              Saveur : {capitalizeFirstLetter(saveur)}
            </p>
            <div className="info-description">
              <p>Info : {description}</p>
            </div>
            {/* <div className="info-wrapper">
              <p className={`info-text ${expanded ? "open" : ""}`}>
                Info : {description}
              </p>

              {description && description?.length > 300 && (
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="toggle-btn"
                >
                  {expanded ? "Voir moins" : "Voir plus"}
                </button>
              )}
            </div> */}
            <div className="specialities">
              <span className="title">
                Spécialité{speciality && speciality.length > 1 ? "s" : ""} (
                {speciality?.length || 0}) :{" "}
              </span>
              {speciality &&
                speciality.length > 0 &&
                speciality.map((spec, i) => (
                  <span key={i} className="el">
                    ⭐ {capitalizeFirstLetter(spec)}
                  </span>
                ))}
            </div>
          </div>
        </div>
        <div className="galerie">
          <span className="legend-galerie">
            Galerie{galerie && galerie.length > 1 ? "s" : ""} (
            {galerie?.length || 0})
          </span>
          {galerie &&
            galerie.length > 0 &&
            galerie.map((img, i) => (
              <img key={i} src={img} alt="image-galerie-one" />
            ))}
        </div>
      </Slide>
      {actuPage.pathname !== "/dashboard" && (
        <OctagonX className="i-con" size={40} onClick={() => setGetOne(null)} />
      )}
    </StyledResto>
  );
};

export default Resto;
const StyledResto = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  max-width: 50%;
  position: relative;
  background: ${COLORS.main};
  padding: 30px;
  border-radius: 20px;
  overflow: hidden;
  em {
    color: ${COLORS.yellow};
    display: inline-block;
    white-space: nowrap;
    animation: defilement 20s linear infinite;
  }
  @keyframes defilement {
    0% {
      transform: translateX(300%);
    }

    100% {
      transform: translateX(-100%);
    }
  }
  .div-anim {
    display: flex;
    /* flex-wrap: wrap; */
    width: 100%;
    .cards-profil {
      border: solid 1px ${COLORS.grey};
      max-width: 100%;
      position: relative;
      padding: 15px;
      border-radius: 20px;
      display: flex;
      .legend {
        position: absolute;
        top: 0px;
        right: 10px;
        z-index: 30;
        display: block;
        font-size: 0.8em;
        color: white;
      }
      img {
        display: block;
        min-width: 30%;
        max-height: 30vh;
        border-radius: 15px;
        background: ${COLORS.black};
        padding: 10px;
      }
      .infos-compte {
        margin: 0px 20px;
        display: flex;
        flex-direction: column;
        .lieu-text,
        .saveur-text {
          color: ${COLORS.yellow};
        }
        strong,
        p {
          margin-top: 5px;
          color: white;
        }
        .info-description {
          max-height: 300px;
          /* min-height: 300px; */
          overflow: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
          padding: 10px;
          border-radius: 10px;
          background: #1f4068;
          box-shadow:
            inset 20px 20px 60px #1a3658,
            inset -20px -20px 60px #244a78;
        }
        .specialities {
          display: flex;
          flex-direction: column;
          margin-top: 15px;
          max-height: 300px;
          min-height: 300px;
          overflow: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
          border-radius: 10px;
          padding: 10px;
          background: #1f4068;
          box-shadow:
            inset 20px 20px 60px #1a3658,
            inset -20px -20px 60px #244a78;
          .title {
            display: block;
            width: 100%;
            color: ${COLORS.white};
          }
          .el {
            margin: 5px;
            color: ${COLORS.green};
            border-bottom: solid 1px ${COLORS.green};
          }
        }
      }
    }
    .galerie {
      max-width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      .legend-galerie {
        display: block;
        color: white;
        width: 100%;
        text-align: center;
      }
      img {
        margin: 10px;
        width: 30%;
        box-shadow: 1px 1px 10px 2px ${COLORS.green};
      }
    }
  }
  .i-con {
    position: absolute;
    cursor: pointer;
    right: 5px;
    top: 0px;
    color: ${COLORS.red};
    filter: drop-shadow(2px 2px 3px rgba(244, 79, 79, 0.8));
    animation:
      rotateInfinitely 5s linear infinite,
      pulseGlow 1.5s ease-in-out infinite;
  }
  @keyframes rotateInfinitely {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes pulseGlow {
    0% {
      filter: drop-shadow(0 0 0 rgba(255, 0, 0, 0.7));
    }
    50% {
      filter: drop-shadow(0 0 10px rgba(255, 0, 0, 1));
    }
    100% {
      filter: drop-shadow(0 0 0 rgba(255, 0, 0, 0.7));
    }
  }
  @media screen and (max-width: 450px) {
    flex-direction: column;
    margin: 30px 0px;
    padding: 10px;
    min-width: 100%;
    .div-anim {
      width: 100%;
      .cards-profil {
        flex-direction: column;
        .legend {
          position: absolute;
          top: unset;
          bottom: 0px;
          right: 10px;
          z-index: 30;
        }
        img {
          width: 60%;
        }
        .infos-compte {
          margin: 0px;
        }
      }
      .galerie {
        margin-top: 30px;
        padding: 30px 0px;
        flex-wrap: nowrap;
        flex-direction: row;
        overflow: auto;
        scrollbar-width: none;
        -ms-overflow-style: none;
        position: relative;
        > span {
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
        }
        img {
          margin: 10px;
          min-width: 80%;
        }
      }
    }
  }
`;
