import styled from "styled-components";
import { Slide } from "react-awesome-reveal";
import COLORS from "../../Styles/Styles";
import AbonnementCard from "./AbonnementCard";
import { LockKeyhole, LockKeyholeOpen, ShieldCheck } from "lucide-react";
import { Dynamic } from "../../Context/ContextDynamique";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";
import Loading from "../Loading/Loading";
const PopPay = () => {
  const { setPopToPay, userAuth, token } = Dynamic();
  const [waiting, setWaiting] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  // Gestion du changement de la checkbox
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };
  //création de ssion checkout
  const createSessionCheckout = async () => {
    if (!isChecked) {
      toast.warning("Vous devez accepter les conditions avant de continuer.");
      return; // stoppe la création de session
    }
    if (!userAuth?.id) {
      return toast.error("Un identifiant est nécessaire");
    }
    if (!userAuth?.email) {
      return toast.error("Un email est nécessaire");
    }
    if (!token) {
      return toast.error("Aucun token en cours...");
    }
    setWaiting(true);
    console.log("Voici mon id : ", userAuth?.id);
    console.log("Voici mon email : ", userAuth?.email);
    console.log("Voici mon token : ", token);

    try {
      const res = await axios({
        method: "post",
        url: `${import.meta.env.VITE_APP_API}stripe/create-checkout-session`,
        withCredentials: true,
        data: { email: userAuth?.email, id: userAuth?.id },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Réponse API :", res.data);
      const sessionUrl = res.data; // supposons que l’API renvoie juste l’URL

      // Vérifier si c’est bien un lien
      const isValidUrl =
        typeof sessionUrl === "string" && sessionUrl.startsWith("http");
      if (isValidUrl) {
        alert("Vous allez être redirigé vers un paiement sécurisé !");
        window.location.href = sessionUrl; // redirection
      } else {
        setWaiting(false);
        console.error("La réponse n'est pas un lien valide :", sessionUrl);
        toast.error(
          "Une erreur est survenue, impossible de créer le paiement."
        );
      }
    } catch (error: any) {
      setWaiting(false);
      console.error("Erreur API :", error.response?.data || error.message);
      toast.error(
        error.response?.data?.message || "Erreur lors de l'appel API"
      );
    }
  };

  return (
    <StyledPopPay onClick={() => setPopToPay(false)}>
      <Slide direction="up" className="slide-color">
        <div className="all-el" onClick={(e) => e.stopPropagation()}>
          <AbonnementCard />
          <div className="consentement">
            <h3>
              Profil bloqué <LockKeyhole />{" "}
            </h3>
            <div className="legals">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleChange}
              />
              <strong>
                « Je reconnais que mon profil sera mis en ligne immédiatement
                après mon paiement et que je renonce expressément à mon droit de
                rétractation conformément à l’article L221-28 du Code de la
                Consommation. »
              </strong>
            </div>
            {waiting && (
              <div className="wait">
                <Loading />
              </div>
            )}
            {!waiting && (
              <button onClick={() => createSessionCheckout()}>
                Débloquer <LockKeyholeOpen />{" "}
              </button>
            )}
            <p>
              Paiement sécurisé via Stripe <ShieldCheck />
            </p>
          </div>
        </div>
      </Slide>
    </StyledPopPay>
  );
};

export default PopPay;
const StyledPopPay = styled.section`
  background: #5b5a5a88;
  height: 100svh;
  width: 100%;
  position: fixed;
  top: 0px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  .slide-color {
    margin: 50px auto;
    background: ${COLORS.main};
    /* background: red; */
    width: 70%;
    border-radius: 20px;
    padding: 10px;
    .all-el {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      .consentement {
        margin: 20px auto;
        max-width: 50%;
        min-width: 50%;
        max-height: 450px;
        min-height: 450px;
        background: ${COLORS.second};
        padding: 20px;
        border-radius: 20px;
        h3 {
          text-align: center;
          color: ${COLORS.yellow};
          font-size: 2em;
          text-decoration: underline;
          margin-bottom: 10px;
        }
        .legals {
          display: flex;
          flex-direction: column;
          input {
            width: 25px;
            height: 25px;
            margin: 5px auto;
            cursor: pointer;
          }
          strong {
            display: block;
            text-align: center;
            color: ${COLORS.white};
          }
        }
        .wait {
          display: flex;
          justify-content: center;
        }
        button {
          padding: 10px 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 2em;
          margin: 20px auto 0px;
          border-radius: 15px;
          outline: none;
          border: none;
          cursor: pointer;
          transition: 0.3s;
          background: ${COLORS.main};
          color: ${COLORS.white};
          box-shadow: 1px 5px 10px ${COLORS.main};
        }
        button:hover {
          transition: 0.3s;
          background: ${COLORS.green};
          color: ${COLORS.white};
          transform: scale(1.1);
          box-shadow: 1px 5px 10px ${COLORS.main};
        }
        p {
          margin-top: 20px;
          text-align: center;
          padding: 5px 0px;
          color: ${COLORS.white};
          background: ${COLORS.green};
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }

  @media screen and (max-width: 450px) {
    display: flex;
    justify-content: center;
    .slide-color {
      margin: 50px auto;
      background: ${COLORS.main};
      width: 95%;
      overflow-x: scroll;
      .all-el {
        .consentement {
          min-width: 100%;
          max-height: 450px;
          min-height: 450px;
        }
      }
    }
  }
`;
