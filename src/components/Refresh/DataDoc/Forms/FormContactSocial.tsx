import { GrInstagram } from "react-icons/gr";
import { MdDataSaverOn, MdPhoneIphone } from "react-icons/md";
import { PiSnapchatLogoBold } from "react-icons/pi";
import { RiWhatsappLine } from "react-icons/ri";
import styled from "styled-components";
import COLORS from "../../../../Styles/Styles";
import axios from "axios";
import { Dynamic } from "../../../../Context/ContextDynamique";
import type { TypeDocDashboard } from "../../Dashboard";
import { useEffect, useRef, useState } from "react";

export const FormContactSocial = ({
  id,
  whatsapp,
  instagram,
  snapchat,
  setRestaurant,
}: {
  id: string;
  whatsapp: string | undefined;
  instagram: string | undefined;
  snapchat: string | undefined;
  setRestaurant: React.Dispatch<React.SetStateAction<TypeDocDashboard | null>>;
}) => {
  const [msgFixW, setMsgFixW] = useState("");
  const [loadingW, setLoadingW] = useState(false);
  const [loadingI, setLoadingI] = useState(false);
  const [loadingS, setLoadingS] = useState(false);
  const [msgFixI, setMsgFixI] = useState("");
  const [msgFixS, setMsgFixS] = useState("");
  const [whatsappLocal, setWhatsappLocal] = useState(whatsapp ?? "");
  const [instagramLocal, setInstagramLocal] = useState(instagram ?? "");
  const [snapchatLocal, setSnapchatLocal] = useState(snapchat ?? "");
  const { token } = Dynamic();
  const time1 = useRef<NodeJS.Timeout | null>(null);
  const time2 = useRef<NodeJS.Timeout | null>(null);
  const time3 = useRef<NodeJS.Timeout | null>(null);
  const whatsappUpdate = async () => {
    if (!id) {
      setMsgFixW("- ID manquant, impossible de sauvegarder le WhatsApp");
      return console.error("ID manquant pour la mise à jour du WhatsApp");
    }
    setLoadingW(true);
    try {
      const res = await axios({
        method: "post",
        url: `${import.meta.env.VITE_APP_API}contact-social/update-whatsapp/${id}`,
        data: { whatsapp: whatsappLocal },
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res);
      if (res) {
        if (res.data) {
          setRestaurant(res.data);
        }
      }
      setMsgFixW("- enregistré !");
      if (time1.current) clearTimeout(time1.current);
      time1.current = setTimeout(() => {
        setMsgFixW("");
      }, 2000);
    } catch (error) {
      console.log(error);
      return console.error("Erreur lors de la mise à jour du WhatsApp");
      setMsgFixW("- une erreur est survenue lors de la sauvegarde du WhatsApp");
    } finally {
      setLoadingW(false);
    }
  };
  const instagramUpdate = async () => {
    if (!id) {
      setMsgFixI("- ID manquant, impossible de sauvegarder l'Instagram");
      return console.error("ID manquant pour la mise à jour de l'Instagram");
    }
    setLoadingI(true);
    try {
      const res = await axios({
        method: "post",
        url: `${import.meta.env.VITE_APP_API}contact-social/update-instagram/${id}`,
        data: { instagram: instagramLocal },
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res) {
        if (res.data) {
          setRestaurant(res.data);
        }
      }
      setMsgFixI("- enregistré !");
      if (time2.current) clearTimeout(time2.current);
      time2.current = setTimeout(() => {
        setMsgFixI("");
      }, 2000);
    } catch (error) {
      console.log(error);
      setMsgFixI(
        "- une erreur est survenue lors de la sauvegarde de l'Instagram",
      );
      return console.error("Erreur lors de la mise à jour de l'Instagram");
    } finally {
      setLoadingI(false);
    }
  };
  const snapchatUpdate = async () => {
    if (!id) {
      setMsgFixS("- ID manquant, impossible de sauvegarder le Snapchat");
      return console.error("ID manquant pour la mise à jour du Snapchat");
    }
    setLoadingS(true);
    try {
      const res = await axios({
        method: "post",
        url: `${import.meta.env.VITE_APP_API}contact-social/update-snapchat/${id}`,
        data: { snapchat: snapchatLocal },
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res);
      if (res) {
        if (res.data) {
          setRestaurant(res.data);
        }
      }
      setMsgFixS("- enregistré !");
      if (time3.current) clearTimeout(time3.current);
      time3.current = setTimeout(() => {
        setMsgFixS("");
      }, 2000);
    } catch (error) {
      console.log(error);
      setMsgFixS("- une erreur est survenue lors de la sauvegarde du Snapchat");
      return console.error("Erreur lors de la mise à jour du Snapchat");
    } finally {
      setLoadingS(false);
    }
  };
  useEffect(() => {
    return () => {
      if (time1.current) clearTimeout(time1.current);
      if (time2.current) clearTimeout(time2.current);
      if (time3.current) clearTimeout(time3.current);
    };
  }, []);
  useEffect(() => {
    setWhatsappLocal(whatsapp ?? "");
  }, [whatsapp]);
  useEffect(() => {
    setInstagramLocal(instagram ?? "");
  }, [instagram]);
  useEffect(() => {
    setSnapchatLocal(snapchat ?? "");
  }, [snapchat]);
  return (
    <StyledFormContactSocial>
      <h3 className="title-social">Vos réseaux sociaux</h3>
      <div className="tel-n-what">
        <div className="icon">
          <MdPhoneIphone className="i" id="tel" />
          <RiWhatsappLine className="i" />
          <input
            type="tel"
            placeholder="+33 1 23 45 67 89*"
            inputMode="tel"
            pattern="^\+?[0-9\s]{8,15}$"
            id="tel"
            value={whatsappLocal}
            onChange={(e) => setWhatsappLocal(e.target.value)}
          />
          <MdDataSaverOn
            className={`i ${loadingW ? "spin" : ""}`}
            onClick={() => whatsappUpdate()}
          />
        </div>
        <label htmlFor="tel">* Format WhatsApp requis {msgFixW}</label>
      </div>
      <div className="insta">
        <div className="box-insta">
          <GrInstagram className="i" />
          <input
            type="text"
            placeholder="noulink"
            value={instagramLocal}
            onChange={(e) => setInstagramLocal(e.target.value)}
          />
          <MdDataSaverOn
            className={`i ${loadingI ? "spin" : ""}`}
            onClick={() => instagramUpdate()}
          />
        </div>
        <em>{msgFixI}</em>
      </div>
      <div className="snap">
        <div className="box-snap">
          <PiSnapchatLogoBold className="i" />
          <input
            type="text"
            placeholder="noulink"
            value={snapchatLocal}
            onChange={(e) => setSnapchatLocal(e.target.value)}
          />
          <MdDataSaverOn
            className={`i ${loadingS ? "spin" : ""}`}
            onClick={() => snapchatUpdate()}
          />
        </div>
        <em>{msgFixS}</em>
      </div>
    </StyledFormContactSocial>
  );
};

const StyledFormContactSocial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  background: ${COLORS.main};
  margin: 10px 0px;
  padding: 20px;
  border-radius: 10px;
  .title-social {
    text-align: center;
    color: ${COLORS.yellow};
    font-size: 1em;
  }
  .tel-n-what,
  .insta,
  .snap {
    display: flex;
    flex-direction: column;
    padding: 0px;
    margin: 10px 0px;
    width: auto;
    .box-snap {
      display: flex;
      flex-direction: row;
      border-radius: 10px;
      border-bottom: solid 1px ${COLORS.yellow};
    }
    > .icon {
      display: flex;
      flex-direction: row;
      border-radius: 10px;
      border-bottom: solid 1px ${COLORS.green};
      input {
        outline: none;
        border: none;
        padding: 5px;
        font-size: 1.2em;
        border-radius: 0px 5px 5px 0px;
      }
      .i:nth-child(1) {
        color: ${COLORS.white};
      }
      .i:nth-child(2) {
        color: ${COLORS.green};
      }
      .i:nth-child(4) {
        color: ${COLORS.green};
        margin: 0px 10px;
        border-radius: 50px;
        background: #1f4068;
        padding: 5px;
        font-size: 2.3em;
        box-shadow:
          13px 13px 27px #1a3658,
          -13px -13px 27px #244a78;
        cursor: pointer;
        /* animation: spin 2s linear forwards; */
      }
      .i:nth-child(4):hover {
        border-radius: 50px;
        background: #1f4068;
        box-shadow:
          inset 13px 13px 27px #1a3658,
          inset -13px -13px 27px #244a78;
      }
      .i:nth-child(4):active {
        border-radius: 50px;
        background: #1f4068;
        box-shadow:
          inset 13px 13px 27px #1a3658,
          inset -13px -13px 27px #244a78;
      }
      .i {
        font-size: 2em;
      }
    }
    label {
      display: inline;
      text-align: left;
      font-size: 0.8em;
      color: ${COLORS.yellow};
    }
  }
  .insta {
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    .box-insta {
      border-bottom: solid 1px ${COLORS.purple};
      display: flex;
      flex-direction: row;
      border-radius: 10px;
      input {
        outline: none;
        border: none;
        padding: 5px;
        font-size: 1.2em;
        border-radius: 0px 5px 5px 0px;
      }
      .i:nth-child(1) {
        color: ${COLORS.purple};
      }
      .i {
        font-size: 2em;
      }
      .i:nth-child(3) {
        color: ${COLORS.green};
        margin: 0px 10px;
        border-radius: 50px;
        background: #1f4068;
        cursor: pointer;
        padding: 5px;
        font-size: 2.3em;
        box-shadow:
          13px 13px 27px #1a3658,
          -13px -13px 27px #244a78;
        cursor: pointer;
        /* animation: spin 2s linear forwards; */
      }
      .i:nth-child(3):hover {
        border-radius: 50px;
        background: #1f4068;
        box-shadow:
          inset 13px 13px 27px #1a3658,
          inset -13px -13px 27px #244a78;
      }
      .i:nth-child(3):active {
        border-radius: 50px;
        background: #1f4068;
        box-shadow:
          inset 13px 13px 27px #1a3658,
          inset -13px -13px 27px #244a78;
      }
    }
    em {
      transition: 0.3s;
      font-size: 0.9em !important;
      color: ${COLORS.yellow} !important;
    }
  }
  .snap {
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    .box-snap {
      display: flex;
      flex-direction: row;
      border-bottom: solid 1px ${COLORS.yellow};
      input {
        outline: none;
        border: none;
        padding: 5px;
        font-size: 1.2em;
        border-radius: 0px 5px 5px 0px;
      }
      .i {
        font-size: 2em;
      }
      .i:nth-child(1) {
        color: ${COLORS.yellow};
      }
      .i:nth-child(3) {
        margin: 0px 10px;
        color: ${COLORS.green};
        border-radius: 50px;
        background: #1f4068;
        cursor: pointer;
        padding: 5px;
        font-size: 2.3em;
        box-shadow:
          13px 13px 27px #1a3658,
          -13px -13px 27px #244a78;
        cursor: pointer;
      }
      .i:nth-child(3):hover {
        border-radius: 50px;
        background: #1f4068;
        box-shadow:
          inset 13px 13px 27px #1a3658,
          inset -13px -13px 27px #244a78;
      }
      .i:nth-child(3):active {
        border-radius: 50px;
        background: #1f4068;
        box-shadow:
          inset 13px 13px 27px #1a3658,
          inset -13px -13px 27px #244a78;
      }
    }
    em {
      transition: 0.3s;
      font-size: 0.9em !important;
      color: ${COLORS.yellow} !important;
    }
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
  .spin {
    animation: spin 0.8s linear infinite;
    opacity: 0.7;
  }

  @media screen and (max-width: 450px) {
    width: 90%;
    .tel-n-what {
      > .icon {
        input {
          width: 200px;
          font-size: 1em;
        }
      }
    }
    .insta,
    .snap {
      margin-bottom: 20px;
      width: 100%;

      .box-snap,
      .box-insta {
        width: 100%;
        padding: 0px 10px;
        input {
          width: 70%;
        }
      }
    }
  }
`;
