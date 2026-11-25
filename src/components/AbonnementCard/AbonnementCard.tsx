import styled from "styled-components";
import { CheckCircle } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

import COLORS from "../../Styles/Styles";
import { useEffect, useState } from "react";
import { LoadingHorizontal } from "../Loading/LoadingHorizontal";
import { useAccount } from "../../Context/AccountContext";
import { Dynamic } from "../../Context/ContextDynamique";
import axios from "axios";

const Card = styled.div`
  position: relative;
  width: min(100%, 410px);
  min-width: 0;
  margin: 0 auto;
  overflow: hidden;
  border: 1px solid rgba(39, 142, 165, 0.16);
  border-radius: 26px;
  background: ${COLORS.white};
  box-shadow: 0 24px 70px rgba(31, 64, 104, 0.15);
  color: ${COLORS.black};
  padding: 28px;
  text-align: left;

  &::before {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 145px;
    background: linear-gradient(
      135deg,
      rgba(39, 142, 165, 0.12),
      rgba(244, 211, 94, 0.13)
    );
    content: "";
  }

  > * {
    position: relative;
  }

  .offre-badge {
    display: inline-flex;
    align-items: center;
    padding: 7px 13px;
    border: 1px solid rgba(244, 211, 94, 0.7);
    border-radius: 9999px;
    background: ${COLORS.yellow};
    color: ${COLORS.main};
    font-size: 0.68rem;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 17px;
  }

  .box-code {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
    margin-top: 20px;

    .code-message {
      margin: 0;
      color: ${COLORS.red};
      font-size: 0.82rem;
      line-height: 1.5;
    }

    .code-message.success {
      color: ${COLORS.green};
    }

    input {
      width: 100%;
      padding: 13px 15px;
      border: 1px solid ${COLORS.Bordure};
      border-radius: 12px;
      background: ${COLORS.white};
      color: ${COLORS.Texte};
      font: inherit;
      outline: none;

      &:focus {
        border-color: ${COLORS.second};
        box-shadow: 0 0 0 3px rgba(39, 142, 165, 0.13);
      }
    }

    button {
      min-height: 44px;
      padding: 10px 20px;
      background: ${COLORS.main};
      color: ${COLORS.white};
      border: none;
      border-radius: 12px;
      font: inherit;
      font-weight: 700;
      cursor: pointer;

      &:hover {
        background: ${COLORS.second};
      }
    }
  }

  .affiliate-info {
    margin: 14px 0 0;
    color: ${COLORS.TexteSecondaire};
    font-size: 0.68rem;
    line-height: 1.6;
  }

  .payment-note {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    margin-top: 19px;
    padding-top: 16px;
    border-top: 1px solid ${COLORS.Bordure};
    color: ${COLORS.TexteSecondaire};
    font-size: 0.73rem;
    line-height: 1.5;

    svg {
      flex: 0 0 auto;
      color: ${COLORS.green};
    }
  }
`;

const Header = styled.div`
  color: ${COLORS.main};
  margin-bottom: 18px;
`;

const Title = styled.h2`
  font-family: Georgia, serif;
  font-size: 1.55rem;
  font-weight: 700;
  letter-spacing: -0.035em;
  line-height: 1.2;
  margin: 0;
`;

const Subtitle = styled.p`
  color: ${COLORS.TexteSecondaire};
  font-size: 0.83rem;
  line-height: 1.6;
  margin: 7px 0 0;
`;

const Price = styled.div`
  padding: 18px 0 16px;
  border-top: 1px solid rgba(31, 64, 104, 0.09);
  border-bottom: 1px solid rgba(31, 64, 104, 0.09);
  color: ${COLORS.main};
`;

const PriceLine = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  .amount {
    color: ${COLORS.second};
    font-size: clamp(2.6rem, 11vw, 3.25rem);
    font-weight: 800;
    letter-spacing: -0.065em;
    line-height: 1;
  }

  .per-month {
    color: ${COLORS.TexteSecondaire};
    font-size: 0.95rem;
    font-weight: 600;
  }
`;

const PerYear = styled.span`
  display: block;
  margin-top: 9px;
  color: ${COLORS.Texte};
  font-size: 0.82rem;
  font-weight: 700;
`;

const AverageNote = styled.span`
  display: block;
  margin-top: 5px;
  color: ${COLORS.TexteSecondaire};
  font-size: 0.7rem;
  line-height: 1.4;
`;

const PromoInfo = styled.p`
  padding: 11px 13px;
  border-radius: 12px;
  background: rgba(244, 211, 94, 0.2);
  color: ${COLORS.main};
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1.5;
  margin: 15px 0;

  a {
    color: inherit;
    font-weight: 800;
    text-underline-offset: 2px;
  }
`;

const Features = styled.ul`
  display: grid;
  gap: 13px;
  list-style: none;
  padding: 0;
  margin: 20px 0;
  text-align: left;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  color: ${COLORS.Texte};
  font-size: 0.84rem;
  line-height: 1.45;

  svg {
    flex: 0 0 auto;
  }
`;

const SubscribeButton = styled.button`
  width: 100%;
  min-height: 51px;
  padding: 13px 18px;
  border: none;
  border-radius: 9999px;
  background: ${COLORS.main};
  color: ${COLORS.white};
  font-size: 0.92rem;
  font-weight: 700;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    background: ${COLORS.second};
    box-shadow: 0 10px 24px rgba(39, 142, 165, 0.22);
    transform: translateY(-2px);
  }
`;

export default function AbonnementCard() {
  const [promoCode, setPromoCode] = useState("");
  const [message, setMessage] = useState("");
  const [codeValide, setCodeValide] = useState(false);
  const [load, setLoad] = useState(false);
  const nav = useNavigate();
  const loc = useLocation();
  const { account, getAccount } = useAccount();
  const { token } = Dynamic();

  const codePrompo = async () => {
    if (account?.codePromo) {
      setLoad(true);
      await removeCode();
    } else {
      if (!promoCode) {
        alert("Veuillez entrer un code promo.");
        return;
      }
      setLoad(true);
      await putCode();
    }
  };

  const putCode = async () => {
    try {
      const res = await axios({
        method: "post",
        url: `${import.meta.env.VITE_APP_API}restaurant/add/code-promo`,
        data: {
          code: promoCode,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.data.success) {
        setMessage(res.data.message);
        setCodeValide(true);
        await getAccount();
      }
    } catch (error: any) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        if (error.response?.data.message) {
          setMessage(error.response?.data.message);
        }
        console.log("❌ Message :", error.message);
        console.log("❌ Status :", error.response?.status);
        console.log("❌ Réponse backend :", error.response?.data);
        console.log("❌ Headers :", error.response?.headers);
        console.log("❌ Request :", error.request);
      } else {
        console.log("❌ Erreur inconnue :", error);
      }
    } finally {
      setLoad(false);
    }
  };
  const removeCode = async () => {
    try {
      const res = await axios({
        method: "post",
        url: `${import.meta.env.VITE_APP_API}restaurant/remove/code-promo`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.data.success) {
        if (res.data.success) {
          setMessage(res.data.message);
          setPromoCode("");
          setCodeValide(true);
        }
      }
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        if (error.response?.data.message) {
          setMessage(error.response?.data.message);
        }
        console.log("❌ Message :", error.message);
        console.log("❌ Status :", error.response?.status);
        console.log("❌ Réponse backend :", error.response?.data);
        console.log("❌ Headers :", error.response?.headers);
        console.log("❌ Request :", error.request);
      } else {
        console.log("❌ Erreur inconnue :", error);
      }
    } finally {
      setLoad(false);
      await getAccount();
    }
  };
  useEffect(() => {
    setPromoCode(account?.codePromo || "");
  }, [account?.codePromo]);
  return (
    <Card>
      <div className="offre-badge">suivez-nous ! </div>

      <Header>
        <Title>Pack Découverte</Title>

        <Subtitle>
          Une vitrine dédiée à ton activité sur Nou Link.
        </Subtitle>
      </Header>

      <Price>
        <PriceLine>
          <span className="amount">10,42 €</span>
          <span className="per-month">/ mois*</span>
        </PriceLine>

        <PerYear>124,99 € payés en une fois pour 1 an</PerYear>
        <AverageNote>
          * Montant moyen calculé en répartissant le tarif annuel sur 12 mois.
        </AverageNote>
      </Price>

      <PromoInfo>
        Code promo -20 % à retrouver dans la bio{" "}
        <a
          href="https://www.instagram.com/noulinkg/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram Nou Link
        </a>
        .
      </PromoInfo>

      <Features>
        <FeatureItem>
          <CheckCircle size={18} color={COLORS.green} />
          <span>Profil d’activité web et mobile</span>
        </FeatureItem>

        <FeatureItem>
          <CheckCircle size={18} color={COLORS.green} />
          <span>Présentation de tes spécialités</span>
        </FeatureItem>

        <FeatureItem>
          <CheckCircle size={18} color={COLORS.green} />
          <span>Galerie photos & description</span>
        </FeatureItem>

        <FeatureItem>
          <CheckCircle size={18} color={COLORS.green} />
          <span>Réception et gestion de tes commandes en ligne</span>
        </FeatureItem>

        <FeatureItem>
          <CheckCircle size={18} color={COLORS.green} />
          <span>Notifications de tes nouvelles commandes</span>
        </FeatureItem>

        <FeatureItem>
          <CheckCircle size={18} color={COLORS.green} />
          <span>Sans renouvellement automatique</span>
        </FeatureItem>
      </Features>

      {loc.pathname !== "/dashboard" && (
        <SubscribeButton onClick={() => nav("/auth")}>
          Référencer mon activité
        </SubscribeButton>
      )}
      {loc.pathname === "/dashboard" && (
        <div className="box-code">
          {message && (
            <p className={`code-message ${codeValide ? "success" : ""}`}>
              {message}
            </p>
          )}
          <input
            type="text"
            value={promoCode}
            placeholder="Saisis ton code promo"
            aria-label="Code promo"
            onChange={(e) => setPromoCode(e.target.value)}
          />
          {load ? (
            <LoadingHorizontal />
          ) : (
            <button type="button" onClick={() => codePrompo()}>
              {account?.codePromo ? "Retirer*" : "Valider"}
            </button>
          )}
        </div>
      )}
      {account?.codePromo && (
        <p className="affiliate-info">
          *Ce code peut être associé à un programme d’affiliation. La personne
          vous ayant communiqué ce code peut percevoir une commission de la part
          de Nou Link en cas de souscription.
        </p>
      )}

      <div className="payment-note">
        <CheckCircle size={17} aria-hidden="true" />
        <span>Paiement sécurisé · Sans renouvellement automatique</span>
      </div>
    </Card>
  );
}
