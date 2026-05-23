import React from "react";
import { Slide } from "react-awesome-reveal";
import styled from "styled-components";
import type { TypeDocProps } from "./ListesHome";
import { capitalizeFirstLetter } from "../utils/fonctions";
import COLORS from "../../Styles/Styles";
import { OctagonX } from "lucide-react";
import { useLocation } from "react-router-dom";
import { MdPhoneIphone } from "react-icons/md";
import { RiWhatsappLine } from "react-icons/ri";
import { GrInstagram } from "react-icons/gr";
import { PiSnapchatLogoBold } from "react-icons/pi";
export type TypeDocPropsResto = {
  pseudo?: string;
  ville?: string;
  saveur?: string;
  profil?: string;
  galerie?: string[];
  description?: string;
  speciality?: string[];
  whatsapp?: string;
  instagram?: string;
  snapchat?: string;
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
  whatsapp,
  instagram,
  snapchat,
  setGetOne,
}: TypeDocPropsResto) => {
  const actuPage = useLocation();

  const handleTel = (v: string) => {
    if (!v) {
      alert("Numéro de téléphone non disponible");
      return;
    }
    const phone = v.replace(/\s/g, "");
    window.location.href = `tel:${phone}`;
  };
  const handleWhatsapp = (v: string) => {
    if (!v) {
      alert("Numéro de WhatsApp non disponible");
      return;
    }

    const phone = v.replace(/[^\d+]/g, "");

    const formattedPhone = phone.replace("+", "");

    const encodedMessage = encodeURIComponent(
      "Bonjour ! Je vous contacte depuis Nou Link. J'aimerais en savoir plus sur vos plats et passer une commande. Merci !",
    );

    const url = `https://wa.me/${formattedPhone}?text=${encodedMessage}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };
  const handleInstagram = (v: string) => {
    if (!v) {
      alert("Compte Instagram non disponible");
      return;
    }
    window.open(
      `https://www.instagram.com/${v}`,
      "_blank",
      "noopener,noreferrer",
    );
  };
  const handleSnapchat = (v: string) => {
    if (!v) {
      alert("Compte Snapchat non disponible");
      return;
    }
    window.open(
      `https://www.snapchat.com/add/${v}`,
      "_blank",
      "noopener,noreferrer",
    );
  };
  return (
    <StyledResto>
      <Slide direction="left" className="div-anim" triggerOnce>
        <em>Dites que vous venez de Nou Link</em>
        <div className="cards-profil">
          <img src={profil ? profil : "/assets/logo.png"} alt="img-profil" />
          <div className="infos-compte">
            <strong>{pseudo}</strong>
            <p className="lieu-text">📍 {capitalizeFirstLetter(ville)}</p>
            <p className="saveur-text">🌍 {capitalizeFirstLetter(saveur)}</p>
            <div className="info-description">
              <p>Info : {description}</p>
            </div>
            <div className="contact">
              <MdPhoneIphone
                className="i-contact"
                onClick={() => handleTel(whatsapp ? whatsapp : "")}
              />
              <RiWhatsappLine
                className="i-contact"
                onClick={() => handleWhatsapp(whatsapp ? whatsapp : "")}
              />
              <GrInstagram
                className="i-contact"
                onClick={() => handleInstagram(instagram ? instagram : "")}
              />
              <PiSnapchatLogoBold
                className="i-contact"
                onClick={() => handleSnapchat(snapchat ? snapchat : "")}
              />
            </div>
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
      /* border: solid 1px ${COLORS.grey}; */
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
          margin-bottom: 15px;
        }
        .contact {
          display: flex;
          margin: 0px auto;
          border-bottom: solid 1px ${COLORS.grey};
          background: #1f4068;
          padding: 10px;
          border-radius: 10px;
          box-shadow:
            20px 20px 60px #1a3658,
            -20px -20px 60px #244a78;
          .i-contact {
            font-size: 2.8em;
            margin: 0px 10px;
            cursor: pointer;
            transition: 0.5s;
            border-radius: 5px;
            /* border: solid 1px white; */
            padding: 5px;
            background: #1f4068;
            box-shadow:
              20px 20px 60px #1a3658,
              -20px -20px 60px #244a78;
          }
          .i-contact:hover {
            background: linear-gradient(145deg, #1c3a5e, #21446f);
            box-shadow:
              20px 20px 60px #1a3658,
              -20px -20px 60px #244a78;
            transition: 0.5s;
            transform: scale(1.2);
          }
          .i-contact:active {
            background: linear-gradient(145deg, #1c3a5e, #21446f);
            box-shadow:
              20px 20px 60px #1a3658,
              -20px -20px 60px #244a78;
            transition: 0.5s;
            transition: 0.5s;
            transform: scale(1.2);
          }
          .i-contact:nth-child(1) {
            color: ${COLORS.white};
          }
          .i-contact:nth-child(2) {
            color: ${COLORS.green};
          }
          .i-contact:nth-child(3) {
            color: ${COLORS.purple};
          }
          .i-contact:nth-child(4) {
            color: ${COLORS.yellow};
          }
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
          .contact {
            .i-contact {
              border-radius: 10px;
              font-size: 3.4em;
            }
          }
        }
      }
      .galerie {
        padding: 30px 0px;
        flex-wrap: nowrap;
        flex-direction: row;
        justify-content: flex-start;
        overflow: auto;
        scrollbar-width: none;
        -ms-overflow-style: none;
        img {
          margin: 10px;
          min-width: 80%;
        }
      }
    }
  }
`;
