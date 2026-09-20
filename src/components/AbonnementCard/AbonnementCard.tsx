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
  max-width: 350px;
  min-width: 350px;
  margin: 20px auto;
  border-radius: 20px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  background-color: ${COLORS.white};
  color: ${COLORS.black};
  padding: 24px;
  text-align: center;
  .offre-badge {
    display: inline-block;

    background: ${COLORS.yellow};
    color: ${COLORS.main};

    font-weight: 800;
    font-size: 0.76rem;

    letter-spacing: 1px;
    text-transform: uppercase;

    padding: 7px 18px;

    border-radius: 9999px;

    margin-bottom: 24px;
  }
  .box-code {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    em {
      color: ${COLORS.red};
    }
    .emm {
      color: ${COLORS.green};
    }
    input {
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
      margin-bottom: 10px;
    }
    button {
      padding: 10px 20px;
      background-color: ${COLORS.main};
      color: ${COLORS.white};
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      transition: all 0.3s ease;
      background-color: ${COLORS.second};
    }
  }

  em {
    display: block;

    margin-top: 16px;

    font-size: 10px;

    opacity: 0.8;
  }
`;

const Header = styled.div`
  background-color: ${COLORS.main};

  color: ${COLORS.white};

  border-radius: 16px;

  padding: 16px;

  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 22px;
  font-weight: bold;
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 14px;

  opacity: 0.85;

  margin: 5px 0 0;
`;

const Price = styled.div`
  margin: 20px 0;

  font-size: 36px;

  font-weight: 800;

  color: ${COLORS.second};

  display: flex;

  flex-direction: column;
`;

const PriceLine = styled.div`
  display: flex;

  align-items: center;

  justify-content: center;

  gap: 8px;
`;

// const OldPrice = styled.span`
//   font-size: 18px;

//   color: #888;

//   text-decoration: line-through;
// `;

const PerYear = styled.span`
  display: block;

  font-size: 14px;

  font-weight: 500;

  opacity: 0.7;
`;

// const PromoInfo = styled.p`
//   font-size: 13px;

//   color: ${COLORS.main};

//   margin-top: -10px;

//   margin-bottom: 20px;

//   font-style: italic;
// `;

const Features = styled.ul`
  list-style: none;

  padding: 0;

  margin: 20px 0;

  text-align: left;
`;

const FeatureItem = styled.li`
  display: flex;

  align-items: center;

  gap: 8px;

  margin-bottom: 13px;

  font-size: 15px;

  line-height: 1.3;

  svg {
    flex-shrink: 0;
  }
`;

const SubscribeButton = styled.button`
  width: 100%;

  padding: 14px;

  border: none;

  border-radius: 9999px;

  font-weight: 600;

  font-size: 16px;

  background-color: ${COLORS.second};

  color: ${COLORS.white};

  cursor: pointer;

  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${COLORS.main};
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
      {/* <div className="offre-badge">🔥 Offre lancement</div> */}

      <Header>
        <Title>Pack Découverte</Title>

        <Subtitle>Faites découvrir votre restaurant sur Nou Link</Subtitle>
      </Header>

      <Price>
        <PriceLine>
          {/* <OldPrice>160,00 €</OldPrice> */}

          <span>124,99 €</span>
        </PriceLine>

        <PerYear>pour 1 an</PerYear>
      </Price>

      {/* <PromoInfo>Offre limitée · valable jusqu'au 20/09/2026</PromoInfo> */}

      <Features>
        <FeatureItem>
          <CheckCircle size={18} color={COLORS.green} />
          <span>Profil restaurant web & mobile</span>
        </FeatureItem>

        <FeatureItem>
          <CheckCircle size={18} color={COLORS.green} />
          <span>Présentation de vos spécialités</span>
        </FeatureItem>

        <FeatureItem>
          <CheckCircle size={18} color={COLORS.green} />
          <span>Galerie photos & description</span>
        </FeatureItem>

        <FeatureItem>
          <CheckCircle size={18} color={COLORS.green} />
          <span>Réception et gestion des commandes</span>
        </FeatureItem>

        <FeatureItem>
          <CheckCircle size={18} color={COLORS.green} />
          <span>Notifications des nouvelles commandes</span>
        </FeatureItem>

        <FeatureItem>
          <CheckCircle size={18} color={COLORS.green} />
          <span>Sans renouvellement automatique</span>
        </FeatureItem>
      </Features>

      {loc.pathname !== "/dashboard" && (
        <SubscribeButton onClick={() => nav("/auth")}>
          Je découvre
        </SubscribeButton>
      )}
      {loc.pathname === "/dashboard" && (
        <div className="box-code">
          {message && <em className={codeValide ? "emm" : ""}>{message}</em>}
          <input
            type="text"
            value={promoCode}
            placeholder="Code promo"
            onChange={(e) => setPromoCode(e.target.value)}
          />
          {load ? (
            <LoadingHorizontal />
          ) : (
            <button onClick={() => codePrompo()}>
              {account?.codePromo ? "Retirer" : "Valider"}
            </button>
          )}
        </div>
      )}

      <em>✅ Paiement sécurisé · Sans engagement</em>
    </Card>
  );
}
